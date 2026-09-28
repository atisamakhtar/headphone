import { frameSrc } from "@/lib/story";

export default function PageHero({ kicker, title, lede, frame = 0, alt, children }) {
  return (
    <section className="specs-glow relative overflow-hidden">
      <div className="specs-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">{kicker}</p>
          <h1 className="headline-gradient mt-4 text-[clamp(44px,6.2vw,88px)] font-semibold leading-[0.92] tracking-tightest">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/60 md:text-[18px]">{lede}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        <img
          src={frameSrc(frame)}
          alt={alt}
          width={1280}
          height={720}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
