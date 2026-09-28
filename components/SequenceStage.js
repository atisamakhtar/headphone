"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BRAND, MODEL, PRODUCT_NAME, PRODUCT_SHORT } from "@/lib/product";
import {
  FRAME_COUNT,
  frameSrc,
  progressToFrame,
  sequenceProgress,
  windowOpacity,
} from "@/lib/story";

const BEATS = [
  {
    id: "hero",
    align: "center",
    dir: 0,
    fade: [-0.2, 0, 0.12, 0.175],
    chapter: "Overview",
  },
  {
    id: "engineering",
    align: "left",
    dir: -1,
    fade: [0.145, 0.2, 0.35, 0.41],
    chapter: "Engineering",
  },
  {
    id: "noise",
    align: "right",
    dir: 1,
    fade: [0.385, 0.44, 0.59, 0.655],
    chapter: "Noise Cancelling",
  },
  {
    id: "sound",
    align: "left",
    dir: -1,
    fade: [0.63, 0.69, 0.79, 0.85],
    chapter: "Sound",
  },
  {
    id: "finale",
    align: "center",
    dir: 0,
    fade: [0.83, 0.9, 1.2, 1.4],
    chapter: PRODUCT_SHORT,
  },
];

const frameCache = {
  images: null,
  promise: null,
  loaded: 0,
};

const progressListeners = new Set();

function notifyProgress() {
  const value = frameCache.loaded / FRAME_COUNT;
  progressListeners.forEach((listener) => listener(value));
}

function loadFrames() {
  if (!frameCache.images) {
    frameCache.images = Array.from({ length: FRAME_COUNT }, () => {
      const image = new Image();
      image.decoding = "async";
      return image;
    });
  }

  if (!frameCache.promise) {
    frameCache.promise = Promise.all(
      frameCache.images.map(
        (image, index) =>
          new Promise((resolve) => {
            const finish = () => {
              frameCache.loaded += 1;
              notifyProgress();
              resolve(image);
            };
            image.onload = finish;
            image.onerror = finish;
            image.src = frameSrc(index);
          })
      )
    );
  }

  return frameCache;
}

export default function SequenceStage() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const barRef = useRef(null);
  const chapterRef = useRef(null);
  const beatRefs = useRef([]);
  const [ready, setReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = frameRef.current;
    const section = sectionRef.current;
    const cache = loadFrames();
    const images = cache.images;
    const onProgress = (value) => setLoadProgress(value);
    progressListeners.add(onProgress);
    onProgress(frameCache.loaded / FRAME_COUNT);

    let raf = 0;
    let running = true;
    let targetFrame = 0;
    let displayFrame = 0;
    let lastDrawn = -1;

    const paint = (index) => {
      const image = images[index];
      if (!frame || !image || !image.complete || !image.naturalWidth) return;
      if (frame.dataset.frame !== String(index)) {
        frame.src = image.src;
        frame.dataset.frame = String(index);
      }
      lastDrawn = index;
      for (let i = index; i <= Math.min(FRAME_COUNT - 1, index + 8); i += 1) {
        const upcoming = images[i];
        if (upcoming && upcoming.decode && !upcoming.dataset.warm) {
          upcoming.dataset.warm = "1";
          upcoming.decode().catch(() => {});
        }
      }
    };

    const renderBeats = (progress) => {
      let chapter = BEATS[0].chapter;
      BEATS.forEach((beat, index) => {
        const el = beatRefs.current[index];
        if (!el) return;
        const opacity = windowOpacity(progress, ...beat.fade);
        if (opacity > 0.45) chapter = beat.chapter;
        const shift = (1 - opacity) * 26 * beat.dir;
        const y = beat.dir === 0 ? (1 - opacity) * 18 : 0;
        el.style.opacity = String(opacity);
        el.style.transform = `translate3d(${shift}px, ${y}px, 0)`;
        const hidden = opacity < 0.04;
        el.style.visibility = hidden ? "hidden" : "visible";
        el.setAttribute("aria-hidden", hidden ? "true" : "false");
      });

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      if (chapterRef.current && chapterRef.current.textContent !== chapter) {
        chapterRef.current.textContent = chapter;
      }
    };

    const tick = () => {
      if (!running) return;
      const progress = sequenceProgress(section);
      targetFrame = progressToFrame(progress);
      const follow = reduceMotion ? 1 : 0.22;
      displayFrame += (targetFrame - displayFrame) * follow;
      if (Math.abs(targetFrame - displayFrame) < 0.04) displayFrame = targetFrame;
      const index = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(displayFrame)));
      if (index !== lastDrawn) paint(index);
      renderBeats(progress);
      raf = requestAnimationFrame(tick);
    };

    let cancelled = false;
    cache.promise.then(() => {
      if (cancelled) return;
      paint(0);
      setReady(true);
      raf = requestAnimationFrame(tick);
    });

    return () => {
      cancelled = true;
      running = false;
      progressListeners.delete(onProgress);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!ready) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return undefined;
  }, [ready]);

  return (
    <section id="sequence" ref={sectionRef} className="relative h-[680vh] bg-void" aria-label="Product film">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-void">
        <img
          ref={frameRef}
          src={frameSrc(0)}
          alt="DOQAUS CARE1 disassembling into its components, then reassembling, as you scroll"
          width={1280}
          height={720}
          draggable={false}
          className="sequence-frame"
        />
        <div className="stage-scrim pointer-events-none absolute inset-0" />

        <p
          ref={chapterRef}
          className="pointer-events-none absolute left-8 top-20 z-20 hidden text-[11px] uppercase tracking-[0.32em] text-white/45 md:block"
        >
          Overview
        </p>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[40vh] md:h-[36vh]">
          <Beat
            setRef={(node) => {
              beatRefs.current[0] = node;
            }}
            align="center"
          >
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">{BRAND}</p>
            <h1 className="headline-gradient mt-3 text-[clamp(46px,7vw,104px)] font-semibold leading-[0.9] tracking-tightest">
              {MODEL}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-snug text-white/92 md:text-[16px]">
              {PRODUCT_NAME}
            </p>
            <p className="mt-4 text-[clamp(20px,2.4vw,34px)] font-medium tracking-tight text-white">
              Silence, perfected.
            </p>
            <p className="mx-auto mb-14 mt-3 max-w-md text-[16px] leading-relaxed text-white/90 md:text-[17px]">
              Flagship wireless noise cancelling, re‑engineered for a world that never stops.
            </p>
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.32em] text-white/40">Scroll</span>
              <span className="scroll-line" aria-hidden="true">
                <i />
              </span>
            </div>
          </Beat>

          <Beat
            setRef={(node) => {
              beatRefs.current[1] = node;
            }}
            align="left"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan/80">01 — Technology</p>
            <h2 className="headline-gradient mt-3 max-w-xl text-[clamp(32px,4.4vw,64px)] font-semibold leading-[0.96] tracking-tightest">
              Precision-engineered for silence.
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/92 md:text-[17px]">
              Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
            </p>
            <p className="mt-3 max-w-md text-[16px] leading-relaxed text-white/92 md:text-[17px]">
              Every component is tuned for balance, power, and comfort—hour after hour.
            </p>
            <Link href="/technology" className="text-link pointer-events-auto mt-6 inline-block text-[14px]">
              Explore the engineering
            </Link>
          </Beat>

          <Beat
            setRef={(node) => {
              beatRefs.current[2] = node;
            }}
            align="right"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan/80">02 — Noise cancelling</p>
            <h2 className="headline-gradient mt-3 max-w-xl text-[clamp(32px,4.2vw,60px)] font-semibold leading-[0.96] tracking-tightest">
              Adaptive noise cancelling, redefined.
            </h2>
            <ul className="mt-5 max-w-md space-y-2.5 text-[16px] leading-snug text-white/92">
              <li>Multi-microphone array listens in every direction.</li>
              <li>Real-time noise analysis adjusts to your environment.</li>
              <li>Your music stays pure—planes, trains, and crowds fade away.</li>
            </ul>
            <Link href="/noise-cancelling" className="text-link pointer-events-auto mt-6 inline-block text-[14px]">
              See how it listens
            </Link>
          </Beat>

          <Beat
            setRef={(node) => {
              beatRefs.current[3] = node;
            }}
            align="left"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan/80">03 — Sound</p>
            <h2 className="headline-gradient mt-3 max-w-xl text-[clamp(32px,4.4vw,64px)] font-semibold leading-[0.96] tracking-tightest">
              Immersive, lifelike sound.
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/92 md:text-[17px]">
              High-performance drivers unlock detail, depth, and texture in every track.
            </p>
            <p className="mt-3 max-w-md text-[16px] leading-relaxed text-white/92 md:text-[17px]">
              AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
            </p>
            <Link href="/sound" className="text-link pointer-events-auto mt-6 inline-block text-[14px]">
              Explore the sound
            </Link>
          </Beat>

          <Beat
            setRef={(node) => {
              beatRefs.current[4] = node;
            }}
            align="center"
          >
            <h2 className="headline-gradient text-[clamp(34px,5vw,72px)] font-semibold leading-[0.96] tracking-tightest">
              Hear everything.
              <br />
              Feel nothing else.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[16px] text-white/92 md:text-[18px]">
              {PRODUCT_SHORT}. Designed for focus, crafted for comfort.
            </p>
            <div className="pointer-events-auto mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Link href="/buy" className="btn-primary h-12 px-7 text-[15px]">
                Experience {PRODUCT_SHORT}
              </Link>
              <Link href="/specs" className="text-link text-[15px]">
                See full specs
              </Link>
            </div>
            <p className="mt-5 text-[14px] text-white/80">
              Engineered for airports, offices, and everything in between.
            </p>
          </Beat>
        </div>

        <div className="pointer-events-none absolute inset-x-8 bottom-0 z-30 hidden h-px bg-white/10 md:block">
          <div
            ref={barRef}
            className="h-full origin-left bg-gradient-to-r from-sony to-cyan"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <div
          className={`absolute inset-0 z-40 flex items-center justify-center bg-void transition-opacity duration-700 ${
            ready ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          aria-hidden={ready}
        >
          <div className="w-[min(280px,70vw)] text-center">
            <p className="text-[12px] uppercase tracking-[0.38em] text-white/40">{BRAND}</p>
            <p className="headline-gradient mt-3 text-3xl font-semibold tracking-tightest">{MODEL}</p>
            <div className="mt-8 h-px w-full bg-white/10">
              <div
                className="h-full origin-left bg-gradient-to-r from-sony to-cyan"
                style={{ transform: `scaleX(${Math.max(0.04, loadProgress)})` }}
              />
            </div>
            <p className="mt-4 text-[12px] tracking-[0.18em] text-white/40">
              {Math.round(loadProgress * 100)}%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Beat({ align, setRef, children }) {
  const placement =
    align === "left"
      ? "items-start text-left pl-5 pr-10 md:pl-16"
      : align === "right"
        ? "items-end pl-10 pr-5 md:pr-16"
        : "items-center text-center px-5";

  return (
    <article
      ref={setRef}
      className={`invisible absolute inset-0 flex flex-col justify-end pb-8 opacity-0 md:pb-12 ${placement}`}
    >
      <div
        className={`copy-veil copy-veil-${align} w-full ${
          align === "center" ? "max-w-3xl" : "max-w-lg text-left"
        }`}
      >
        {children}
      </div>
    </article>
  );
}
