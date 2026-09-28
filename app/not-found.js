import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">404</p>
      <h1 className="headline-gradient mt-4 max-w-xl text-[clamp(40px,6vw,72px)] font-semibold leading-[0.94] tracking-tightest">
        This page is not part of the film.
      </h1>
      <Link href="/" className="btn-primary mt-8 h-12 px-7 text-[15px]">
        Back to DOQAUS CARE1
      </Link>
    </main>
  );
}
