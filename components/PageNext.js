import Link from "next/link";

export default function PageNext({ href, title }) {
  return (
    <div className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Link href={href} className="group block py-14 md:py-20">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">Next</p>
          <p className="headline-gradient mt-3 text-[clamp(36px,5vw,68px)] font-semibold leading-[0.95] tracking-tightest transition group-hover:opacity-80">
            {title}
          </p>
        </Link>
      </div>
    </div>
  );
}
