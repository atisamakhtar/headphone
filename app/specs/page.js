import Link from "next/link";
import PageNext from "@/components/PageNext";
import { NEXT_PAGE, PRODUCT_SHORT, SPEC_GROUPS } from "@/lib/product";

export const metadata = {
  title: "Specs",
  description:
    `Full ${PRODUCT_SHORT} specifications: driver, noise cancelling, battery, Bluetooth, and weight.`,
};

const HIGHLIGHTS = [
  ["30", "mm", "Driver"],
  ["12", "", "Microphones"],
  ["30", "hrs", "Playback with NC"],
  ["254", "g", "Weight"],
];

export default function SpecsPage() {
  const next = NEXT_PAGE["/specs"];

  return (
    <main className="specs-glow relative">
      <div className="specs-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-28 md:px-8 md:pt-36">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">Specifications</p>
        <h1 className="headline-gradient mt-4 max-w-3xl text-[clamp(44px,6vw,84px)] font-semibold leading-[0.92] tracking-tightest">
          Engineered without compromise.
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/60 md:text-[18px]">
          A quieter processor, a wider acoustic window, and a fit that disappears. The numbers are the outline. The film is the rest.
        </p>

        <div className="mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map(([value, unit, label]) => (
            <article key={label} className="stat-card py-8">
              <p className="text-[12px] uppercase tracking-[0.22em] text-white/40">{label}</p>
              <p className="mt-3 text-[clamp(40px,4vw,60px)] font-semibold leading-none tracking-tightest text-white/95">
                {value}
                {unit ? (
                  <span className="ml-1 text-[0.38em] font-medium tracking-normal text-white/45">{unit}</span>
                ) : null}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 space-y-14 pb-16 md:pb-24">
          {SPEC_GROUPS.map((group) => (
            <section key={group.title} aria-labelledby={`spec-${group.title}`}>
              <h2 id={`spec-${group.title}`} className="text-[13px] uppercase tracking-[0.24em] text-cyan/80">
                {group.title}
              </h2>
              <dl className="mt-4 divide-y divide-white/10 border-y border-white/10">
                {group.rows.map(([term, detail]) => (
                  <div key={term} className="grid gap-1 py-4 sm:grid-cols-[240px_1fr] sm:gap-8">
                    <dt className="text-[13px] uppercase tracking-[0.14em] text-white/40">{term}</dt>
                    <dd className="text-[16px] text-white/82">{detail}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <p className="pb-10 text-[13px] text-white/35">
          Playback varies with settings and codec.{" "}
          <Link href="/buy" className="text-link">
            Choose a finish
          </Link>
        </p>
      </div>
      <PageNext href={next.href} title={next.title} />
    </main>
  );
}
