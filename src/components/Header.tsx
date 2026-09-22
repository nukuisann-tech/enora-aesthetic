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
  { href: "/first-visit", label: "初めての方へ", en: "First Visit" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Transparent-over-hero only applies on Home before scrolling — every
  // other page starts on plain --color-base content, so a transparent
  // bar there would just be invisible ink-on-ink, not a design choice.
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50">
      {/*
        The blurred/tinted bar lives on this inner div, not <header> itself:
        backdrop-filter creates a new containing block for fixed-position
        descendants, which would otherwise collapse the fullscreen mobile
        menu below to the height of this bar instead of the viewport.
      */}
      <div
        className={`transition-colors duration-500 ${
          transparent ? "bg-transparent" : "border-b rule bg-base/90 backdrop-blur-md"
        }`}
      >
        <div className="canvas flex h-[64px] items-center justify-between md:h-[80px]">
          <Link href="/" className="flex flex-col leading-none" aria-label={`${site.nameEn} ホーム`}>
            <span
              className={`font-display text-[18px] italic tracking-wide transition-colors md:text-[21px] ${
                transparent ? "text-base [text-shadow:0_1px_10px_rgba(0,0,0,0.3)]" : "text-ink"
              }`}
            >
              {site.nameEn}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-2 text-[12.5px] tracking-[0.06em] transition-colors ${
                  transparent ? "text-base [text-shadow:0_1px_8px_rgba(0,0,0,0.3)]" : "text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 scale-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-100 ${
                    transparent ? "bg-base" : "bg-accent"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/consultation"
              className={`border-b pb-1 text-[12.5px] tracking-[0.06em] transition-colors ${
                transparent
                  ? "border-base/50 text-base [text-shadow:0_1px_8px_rgba(0,0,0,0.3)] hover:border-base"
                  : "border-ink text-ink hover:border-accent hover:text-accent"
              }`}
            >
              相談する
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                transparent ? "bg-base" : "bg-ink"
              } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                transparent ? "bg-base" : "bg-ink"
              } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-0 flex flex-col justify-center bg-base transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="frame flex flex-col gap-6">
          {[...navItems, { href: "/consultation", label: "相談する", en: "Consultation" }].map(
            (item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b rule pb-5"
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                <span className="font-ui-en block text-xs italic tracking-[0.2em] text-accent">
                  {item.en}
                </span>
                <span className="font-heading-jp mt-1 block text-2xl text-ink">{item.label}</span>
              </Link>
            )
          )}
        </nav>
        <div className="frame mt-10">
          <ConceptBadgeInline />
        </div>
      </div>
    </header>
  );
}
