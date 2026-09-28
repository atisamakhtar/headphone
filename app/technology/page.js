import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageNext from "@/components/PageNext";
import { NEXT_PAGE } from "@/lib/product";

export const metadata = {
  title: "Technology",
  description:
    "Precision-engineered for silence. The 30 mm driver, sealed chambers, and QN3 processor inside DOQAUS CARE1.",
};

const PARTS = [
  {
    index: "01",
    title: "Driver",
    body: "A 30 mm driver with a neodymium magnet. The film pulls it forward so the coil, diaphragm, and magnet sit in clear air.",
  },
  {
    index: "02",
    title: "Chamber",
    body: "Sealed acoustic chambers and a controlled path for air. The structure is there to keep the note intact, not to decorate the exploded view.",
  },
  {
    index: "03",
    title: "Processor",
    body: "The HD Noise Canceling Processor QN3 sits on the board you see drift out of the cup. It is the part that listens, decides, and corrects.",
  },
  {
    index: "04",
    title: "Structure",
    body: "Cushions, yoke, slider, and headband. 254 grams, shaped so the clamp stays even across a long day.",
  },
];

const FACTS = [
  ["30 mm", "Driver"],
  ["QN3", "Processor"],
  ["254 g", "Weight"],
];

export default function TechnologyPage() {
  const next = NEXT_PAGE["/technology"];

  return (
    <main>
      <PageHero
        kicker="Technology"
        title="Precision-engineered for silence."
        lede="Custom drivers, sealed acoustic chambers, and optimized airflow. Every component in the film is tuned for balance, power, and comfort — hour after hour."
        frame={179}
        alt="Exploded view of the DOQAUS CARE1, with the driver, circuit boards, cushions, and headband separated."
      >
        <Link href="/noise-cancelling" className="text-link text-[15px]">
          How the microphones listen
        </Link>
      </PageHero>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
          {FACTS.map(([value, label]) => (
            <div key={label} className="border-b border-white/10 px-5 py-10 sm:border-b-0 sm:px-8 md:py-14">
              <p className="text-[clamp(36px,4vw,56px)] font-semibold leading-none tracking-tightest text-white/95">
                {value}
              </p>
              <p className="mt-3 text-[12px] uppercase tracking-[0.22em] text-white/40">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">Inside the cup</p>
        <h2 className="headline-gradient mt-4 max-w-2xl text-[clamp(32px,4vw,56px)] font-semibold leading-[0.96] tracking-tightest">
          What the scroll pulls apart.
        </h2>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {PARTS.map((part) => (
            <article key={part.index} className="grid gap-3 py-8 md:grid-cols-[120px_1fr] md:gap-10 md:py-10">
              <p className="text-[12px] uppercase tracking-[0.28em] text-cyan/80">{part.index}</p>
              <div>
                <h3 className="text-[26px] font-semibold tracking-tight text-white/92">{part.title}</h3>
                <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-white/60">{part.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageNext href={next.href} title={next.title} />
    </main>
  );
}
