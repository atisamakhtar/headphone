import Link from "next/link";
import ClosingShot from "@/components/ClosingShot";
import { PRODUCT_SHORT } from "@/lib/product";
import { frameSrc } from "@/lib/story";

const STATS = [
  { value: "30", unit: "hrs", label: "Playback with noise cancelling" },
  { value: "12", unit: "", label: "Microphones, listening at once" },
  { value: "30", unit: "mm", label: "Driver, neodymium magnet" },
  { value: "254", unit: "g", label: "Worn, not carried" },
];

export default function HomeStory() {
  return (
    <div id="story">
      <section className="border-t border-white/10 bg-void" aria-labelledby="measured-title">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
          <p className="text-center text-[11px] uppercase tracking-[0.32em] text-white/40">{PRODUCT_SHORT}</p>
          <h2
            id="measured-title"
            className="headline-gradient mx-auto mt-4 max-w-3xl text-center text-[clamp(40px,5.5vw,76px)] font-semibold leading-[0.94] tracking-tightest"
          >
            Silence, measured.
          </h2>
          <div className="mt-16 grid grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <article
                key={stat.label}
                className={`border-white/10 px-2 py-8 md:px-6 md:py-4 ${
                  index % 2 === 1 ? "border-l" : ""
                } ${index > 1 ? "border-t lg:border-t-0" : ""} ${index > 0 ? "lg:border-l" : ""}`}
              >
                <p className="text-[clamp(48px,6vw,84px)] font-semibold leading-none tracking-tightest text-white/95">
                  {stat.value}
                  {stat.unit ? (
                    <span className="ml-1 align-baseline text-[0.32em] font-medium tracking-normal text-white/40">
                      {stat.unit}
                    </span>
                  ) : null}
                </p>
                <p className="mt-4 max-w-[14rem] text-[13px] leading-relaxed text-white/50">{stat.label}</p>
              </article>
            ))}
          </div>
          <p className="mt-14 text-center">
            <Link href="/specs" className="text-link text-[14px]">
              See full specs
            </Link>
          </p>
        </div>
      </section>

      <Feature
        kicker="Technology"
        title="Precision-engineered for silence."
        body="Custom drivers, sealed acoustic chambers, and optimized airflow. The film pulls the pair apart so the silence has a shape."
        href="/technology"
        link="Explore the engineering"
        frame={179}
        alt="Exploded DOQAUS CARE1 with the driver, boards, cushions, and headband separated."
      />

      <Feature
        kicker="Sound"
        title="Immersive, lifelike sound."
        body="A 30 mm driver, a window from 4 Hz to 40 kHz, and DSEE Extreme restoring texture to compressed music."
        href="/sound"
        link="Explore the sound"
        frame={199}
        alt="Fully exploded DOQAUS CARE1 showing the driver and acoustic chambers."
        flip
      />

      <ClosingShot />
    </div>
  );
}

function Feature({ kicker, title, body, href, link, frame, alt, flip = false }) {
  const image = (
    <div className="flex items-center bg-void">
      <img src={frameSrc(frame)} alt={alt} width={1280} height={720} className="h-auto w-full" />
    </div>
  );
  const copy = (
    <div className="flex items-center px-6 py-16 md:px-14 md:py-24 lg:px-20">
      <div className="max-w-md">
        <p className="text-[11px] uppercase tracking-[0.32em] text-cyan/80">{kicker}</p>
        <h2 className="headline-gradient mt-4 text-[clamp(36px,4vw,60px)] font-semibold leading-[0.96] tracking-tightest">
          {title}
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-white/60 md:text-[17px]">{body}</p>
        <Link href={href} className="text-link mt-8 inline-block text-[15px]">
          {link}
        </Link>
      </div>
    </div>
  );

  return (
    <section className="grid items-center border-t border-white/10 bg-void lg:grid-cols-2">
      {flip ? (
        <>
          <div className="order-2 lg:order-1">{copy}</div>
          <div className="order-1 lg:order-2">{image}</div>
        </>
      ) : (
        <>
          {image}
          {copy}
        </>
      )}
    </section>
  );
}
