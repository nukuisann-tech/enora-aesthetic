"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { ConceptBadgeInline } from "@/components/ConceptBadge";

const navItems = [
  { href: "/concerns", label: "悩みから探す", en: "Concerns" },
  { href: "/treatments", label: "施術", en: "Treatments" },
  { href: "/philosophy", label: "私たちの考え", en: "Philosophy" },
  { href: "/journal", label: "ジャーナル", en: "Journal" },
  { href: "/consultation", label: "相談する", en: "Consultation" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [renderedPathname, setRenderedPathname] = useState(pathname);

  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50">
      {/*
        The blurred/tinted bar lives on this inner div, not <header> itself:
        backdrop-filter creates a new containing block for fixed-position
        descendants, which would otherwise collapse the fullscreen mobile
        menu below to the height of this bar instead of the viewport.
      */}
      <div className="border-b rule bg-[color:var(--color-base)]/85 backdrop-blur-md">
        <div className="canvas flex h-[68px] items-center justify-between md:h-[84px]">
          <Link href="/" className="flex flex-col leading-none" aria-label={`${site.nameEn} ホーム`}>
            <span className="font-display text-[19px] italic tracking-wide text-[color:var(--color-ink)] md:text-[22px]">
              {site.nameEn}
            </span>
            <span className="font-ui-en mt-1 text-[9px] tracking-[0.3em] text-[color:var(--color-accent)] md:text-[10px]">
              {site.concept}
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[12.5px] tracking-[0.06em] text-[color:var(--color-ink)]"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 scale-0 rounded-full bg-[color:var(--color-accent)] transition-transform duration-300 ease-out group-hover:scale-100" />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            <span
              className={`block h-px w-6 bg-[color:var(--color-ink)] transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[color:var(--color-ink)] transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-0 flex flex-col justify-center bg-[color:var(--color-base)] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="frame flex flex-col gap-6">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b rule pb-5"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
              }}
            >
              <span className="font-ui-en block text-[11px] italic tracking-[0.24em] text-[color:var(--color-accent)]">
                {item.en}
              </span>
              <span className="font-heading-jp mt-1 block text-2xl text-[color:var(--color-ink)]">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="frame mt-10">
          <ConceptBadgeInline />
        </div>
      </div>
    </header>
  );
}
