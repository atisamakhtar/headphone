import Link from "next/link";
import { BRAND, NAV, PRODUCT_NAME } from "@/lib/product";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[15px] font-medium tracking-tight text-white/85">{BRAND}</p>
            <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-white/40">{PRODUCT_NAME}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-[13px] text-white/50" aria-label="Footer">
          {NAV.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
