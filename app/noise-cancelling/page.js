import PageHero from "@/components/PageHero";
import PageNext from "@/components/PageNext";
import { NEXT_PAGE } from "@/lib/product";

export const metadata = {
  title: "Noise Cancelling",
  description:
    "Adaptive noise cancelling on DOQAUS CARE1. Twelve microphones, the QN3 processor, and real-time analysis.",
};

const SCENES = [
  {
    place: "Cabin",
    title: "The drone drops out.",
    body: "Low, steady noise is where the array earns its place. The cabin stays, the music stays cleaner.",
  },
  {
    place: "Commute",
    title: "The carriage moves on.",
    body: "Real-time analysis follows the room as it changes — platform, tunnel, street — without a hand on the cup.",
  },
  {
    place: "Office",
    title: "The room gets smaller.",
    body: "Voices nearby soften. Ambient Sound and Quick Attention are there when you need the room back.",
  },
];

const POINTS = [
  ["12 microphones", "A MEMS array, listening in every direction around the cup."],
  ["QN3", "The HD Noise Canceling Processor optimizes those microphones in real time."],
  ["Adaptive NC Optimizer", "Adjusts for the noise outside, the pressure, and the way the headphones sit."],
  ["Atmospheric pressure", "Keeps cancellation stable as altitude changes."],
  ["Ambient Sound", "Lets the room in, including an automatic mode and Quick Attention."],
  ["Calls", "Up to 24 hours of talk time with noise cancelling on."],
];

export default function NoisePage() {
  const next = NEXT_PAGE["/noise-cancelling"];

  return (
    <main>
      <PageHero
        kicker="Noise cancelling"
        title="Adaptive noise cancelling, redefined."
        lede="A multi-microphone array listens in every direction. Real-time analysis adjusts to the environment, so music stays pure while planes, trains, and crowds fall back."
        frame={119}
        alt="DOQAUS CARE1 coming apart, with the circuit board and microphone hardware visible beside the ear cup."
      />

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          {SCENES.map((scene) => (
            <article key={scene.place} className="border-b border-white/10 px-5 py-12 md:border-b-0 md:px-8 md:py-16">
              <p className="text-[11px] uppercase tracking-[0.28em] text-cyan/80">{scene.place}</p>
              <h2 className="mt-3 text-[26px] font-semibold tracking-tight text-white/92">{scene.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-white/55">{scene.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="specs-glow">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">The system</p>
          <h2 className="headline-gradient mt-4 max-w-3xl text-[clamp(32px,4.4vw,60px)] font-semibold leading-[0.96] tracking-tightest">
            Listen first. Then remove.
          </h2>
          <dl className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {POINTS.map(([term, detail]) => (
              <div key={term} className="grid gap-2 py-6 md:grid-cols-[240px_1fr] md:gap-10 md:py-7">
                <dt className="text-[16px] font-medium text-white/90">{term}</dt>
                <dd className="text-[16px] leading-relaxed text-white/60">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <PageNext href={next.href} title={next.title} />
    </main>
  );
}
