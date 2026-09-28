"use client";

import Link from "next/link";
import { PRODUCT_SHORT } from "@/lib/product";
import { useEffect, useRef } from "react";
import { frameSrc } from "@/lib/story";

export default function ClosingShot() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = section.offsetHeight - window.innerHeight;
      const progress = travel <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / travel));
      const shift = reduce ? 0 : (0.5 - progress) * window.innerHeight * 0.2;
      const scale = reduce ? 1.18 : 1.18 + progress * 0.08;
      image.style.transform = `translate3d(0, ${shift}px, 0) scale(${scale})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[180vh] bg-void" aria-label="Closing">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <img
          ref={imageRef}
          src={frameSrc(0)}
          alt=""
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-[center_38%] will-change-transform"
          style={{ transform: "translate3d(0, 0, 0) scale(1.2)" }}
        />
        <div className="relative z-10 flex h-full items-end justify-center px-5 pb-16 text-center md:pb-20">
          <div className="copy-veil max-w-3xl">
            <h2 className="headline-gradient text-[clamp(40px,6vw,80px)] font-semibold leading-[0.94] tracking-tightest">
              Hear everything.
              <br />
              Feel nothing else.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-white/60 md:text-[18px]">
              Designed for focus, crafted for comfort. Black, Platinum Silver, and Midnight Blue.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Link href="/buy" className="btn-primary h-12 px-7 text-[15px]">
                Experience {PRODUCT_SHORT}
              </Link>
              <Link href="/specs" className="text-link text-[15px]">
                See full specs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
