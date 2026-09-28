"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, PRODUCT_SHORT } from "@/lib/product";

export default function Navbar() {
  const pathname = usePathname();
  const home = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const solid = !home || scrolled;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`nav-shell fixed inset-x-0 top-0 z-50 ${solid ? "is-solid" : ""}`}>
      <div className="mx-auto flex h-12 max-w-[1440px] items-center gap-5 px-5 lg:px-8">
        <Link
          href="/"
          onClick={(event) => {
            if (!home) return;
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="shrink-0 text-[15px] font-medium tracking-tight text-white/90"
        >
          {PRODUCT_SHORT}
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 xl:gap-8 lg:flex" aria-label="Product">
          {NAV.map((link) => (
            <NavLink key={link.href} link={link} pathname={pathname} />
          ))}
        </nav>

        <div className="ml-auto lg:ml-0">
          <Link href="/buy" className="btn-primary h-7 whitespace-nowrap px-3.5 text-[12px]">
            <span className="lg:hidden">Experience</span>
            <span className="hidden lg:inline">Experience {PRODUCT_SHORT}</span>
          </Link>
        </div>
      </div>

      <nav className="nav-scroll flex gap-5 overflow-x-auto px-5 pb-2.5 lg:hidden" aria-label="Product">
        {NAV.map((link) => (
          <NavLink key={link.href} link={link} pathname={pathname} />
        ))}
      </nav>
    </header>
  );
}

function NavLink({ link, pathname }) {
  const active = link.href === "/" ? pathname === "/" : pathname === link.href;
  return (
    <Link
      href={link.href}
      className={`nav-link shrink-0 text-[12px] tracking-tight ${active ? "is-active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      {link.label}
    </Link>
  );
}
