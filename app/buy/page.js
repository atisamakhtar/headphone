import Link from "next/link";
import FinishStudio from "@/components/FinishStudio";
import PageNext from "@/components/PageNext";
import { frameSrc } from "@/lib/story";
import { IN_THE_BOX, NEXT_PAGE, PRODUCT_NAME, PRODUCT_SHORT } from "@/lib/product";

export const metadata = {
  title: "Buy",
  description: PRODUCT_NAME,
};

const PROMISES = [
  {
    kicker: "Silence",
    title: "The room leaves.",
    body: "Twelve microphones and the QN3 processor reshape noise cancelling in real time.",
  },
  {
    kicker: "Sound",
    title: "Detail, held in place.",
    body: "30 mm drivers and DSEE Extreme restore texture to compressed music.",
  },
  {
    kicker: "Comfort",
    title: "Hours, unnoticed.",
    body: "254 grams, with up to 30 hours of playback when noise cancelling is on.",
  },
];

export default function BuyPage() {
  const next = NEXT_PAGE["/buy"];

  return (
    <main className="buy-glow">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">{PRODUCT_SHORT}</p>
          <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-white/45">{PRODUCT_NAME}</p>
          <h1 className="headline-gradient mt-4 text-[clamp(44px,6vw,84px)] font-semibold leading-[0.92] tracking-tightest">
            Hear everything.
            <br />
            Feel nothing else.
          </h1>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/60 md:text-[18px]">
            Designed for focus, crafted for comfort. The same pair, in three finishes. The scroll film is Black.
          </p>
          <img
            src={frameSrc(0)}
            alt="Assembled matte black DOQAUS CARE1 headphones."
            width={1280}
            height={720}
            className="mt-8 h-auto w-full lg:hidden"
          />
        </div>
        <FinishStudio />
      </section>

      <div className="mx-auto hidden max-w-5xl px-8 lg:block">
        <img
          src={frameSrc(0)}
          alt=""
          width={1280}
          height={720}
          className="h-auto w-full"
        />
      </div>

      <section className="mx-auto grid max-w-6xl border-t border-white/10 px-5 md:grid-cols-3 md:px-8">
        {PROMISES.map((item) => (
          <article key={item.kicker} className="border-b border-white/10 py-12 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan/80">{item.kicker}</p>
            <h2 className="mt-3 text-[26px] font-semibold tracking-tight text-white/90">{item.title}</h2>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/55">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">In the box</p>
            <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-semibold tracking-tightest text-white/92">
              Nothing spare.
            </h2>
          </div>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {IN_THE_BOX.map((item) => (
              <li key={item} className="py-4 text-[16px] text-white/75">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-[14px] text-white/45">
          Want the sheet first? <Link href="/specs" className="text-link">See full specs</Link>
        </p>
      </section>
      <PageNext href={next.href} title={next.title} />
    </main>
  );
}
