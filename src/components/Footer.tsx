import Link from "next/link";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Explore",
    links: [
      { href: "/concerns", label: "悩みから探す" },
      { href: "/treatments", label: "施術" },
      { href: "/philosophy", label: "私たちの考え" },
    ],
  },
  {
    heading: "Visit",
    links: [
      { href: "/first-visit", label: "初めての方へ" },
      { href: "/price", label: "料金について" },
      { href: "/team", label: "practitioner" },
    ],
  },
  {
    heading: "More",
    links: [
      { href: "/journal", label: "ジャーナル" },
      { href: "/consultation", label: "相談する" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t rule bg-dark pb-10 pt-20 text-base md:pt-28">
      <div className="canvas">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl italic">{site.nameEn}</p>
            <p className="font-ui-en mt-1 text-[10px] tracking-[0.3em] text-accent">
              {site.concept}
            </p>
            <p className="mt-6 max-w-[220px] text-[13px] leading-loose text-metal">
              {site.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow text-[11px]">{col.heading}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-metal transition-colors hover:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-metal/70">
            © {new Date().getFullYear()} {site.nameEn}
          </p>
          <p className="max-w-md text-[11px] leading-relaxed text-metal/60">
            <span className="font-ui-en italic tracking-[0.1em]">CONCEPT PROJECT</span>
            <br />
            本サイトはポートフォリオのために制作した架空の美容クリニックサイトです。
          </p>
        </div>
      </div>
    </footer>
  );
}
