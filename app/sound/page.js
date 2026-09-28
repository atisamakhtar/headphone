import PageHero from "@/components/PageHero";
import PageNext from "@/components/PageNext";
import { NEXT_PAGE } from "@/lib/product";

export const metadata = {
  title: "Sound",
  description:
    "Immersive, lifelike sound on DOQAUS CARE1. 30 mm drivers, DSEE Extreme, and LDAC up to 40 kHz.",
};

const CODECS = [
  ["LDAC", "High-resolution Bluetooth, out to 40 kHz at 96 kHz / 990 kbps."],
  ["LC3", "The newer Bluetooth codec, alongside the classic set."],
  ["AAC", "The path most phones already use."],
  ["SBC", "The baseline, still there."],
];

export default function SoundPage() {
  const next = NEXT_PAGE["/sound"];

  return (
    <main>
      <PageHero
        kicker="Sound"
        title="Immersive, lifelike sound."
        lede="High-performance drivers unlock detail, depth, and texture. DSEE Extreme restores clarity to compressed audio, so a small file can still feel like a recording."
        frame={199}
        alt="Fully exploded DOQAUS CARE1 showing the driver, voice coil, and acoustic chambers."
      />

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">Frequency response</p>
          <h2 className="headline-gradient mt-4 max-w-3xl text-[clamp(32px,4.4vw,60px)] font-semibold leading-[0.96] tracking-tightest">
            From a sub-bass murmur to air above the last octave.
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/60">
            4 Hz to 40,000 Hz, measured to JEITA. Over Bluetooth, the window is 20 Hz–20 kHz, and it opens to 40 kHz when LDAC is running at 96 kHz.
          </p>
          <div className="mt-12">
            <div className="h-px bg-gradient-to-r from-white/15 via-cyan to-sony" />
            <div className="mt-4 flex justify-between text-[12px] uppercase tracking-[0.18em] text-white/40">
              <span>4 Hz</span>
              <span>40,000 Hz</span>
            </div>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              ["30 mm", "Dynamic driver, neodymium magnet."],
              ["DSEE Extreme", "Upscales compressed music toward the original detail."],
              ["Multipoint", "Two devices, one pair, without a second thought."],
            ].map(([title, body]) => (
              <article key={title} className="stat-card pt-6">
                <h3 className="text-[22px] font-semibold tracking-tight text-white/92">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="buy-glow border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">Codecs</p>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {CODECS.map(([name, detail]) => (
              <div key={name} className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:gap-8">
                <h3 className="text-[16px] font-medium text-white/90">{name}</h3>
                <p className="text-[15px] leading-relaxed text-white/60">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageNext href={next.href} title={next.title} />
    </main>
  );
}
