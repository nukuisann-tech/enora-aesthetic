"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeText } from "@/components/Reveal";
import { categories } from "@/data/treatments";
import { image, focal, type ImageKey } from "@/lib/images";

const categoryVisual: Record<string, ImageKey> = {
  "skin-quality": "skinDetail",
  "tone-texture": "eyeDetail",
  contour: "mirrorYoung",
  "preventive-care": "curtainLight",
  "body-wellness": "handDetail",
};

export function TreatmentsIndex() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="rhythm border-t rule bg-base">
      <div className="canvas">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <FadeText>
            <h2 className="font-heading-jp text-h2 text-ink">施術は、5つの領域で。</h2>
          </FadeText>
          <Link
            href="/treatments"
            className="text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 hover:decoration-accent"
          >
            すべて見る →
          </Link>
        </div>

        <div className="mt-14 border-t rule">
          {categories.map((c, i) => {
            const reversed = i % 2 === 1;
            const visualKey = categoryVisual[c.id];
            const isHovered = hovered === c.id;
            return (
              <Link
                key={c.id}
                href={`/treatments#${c.id}`}
                onMouseEnter={() => setHovered(c.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group grid grid-cols-1 items-center gap-6 border-b rule py-8 md:gap-10 ${
                  reversed ? "md:grid-cols-[180px_1fr]" : "md:grid-cols-[1fr_180px]"
                }`}
              >
                {/* Explicit column-start, not `order` — with unequal
                    track widths, `order` reassigns which track an
                    auto-placed item lands in, which silently swapped the
                    180px image track for the 1fr text track on reversed
                    rows and produced a giant image + squeezed, wrapped
                    text. Pinning col-start keeps each element in its
                    intended track regardless of DOM order. */}
                <div className={reversed ? "md:col-start-2" : "md:col-start-1"}>
                  <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-display text-[13px] italic text-ink/35">{c.no}</span>
                    <span className="font-heading-jp whitespace-nowrap text-[22px] text-ink transition-colors group-hover:text-accent md:text-[26px]">
                      {c.nameJa}
                    </span>
                    <span className="font-ui-en whitespace-nowrap text-[11px] italic tracking-[0.14em] text-ink/35">
                      {c.nameEn}
                    </span>
                  </span>
                  <p
                    className={`font-body-jp mt-3 max-w-md text-[13px] leading-relaxed text-ink/50 transition-opacity ${
                      isHovered ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {c.description}
                  </p>
                </div>
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden transition-transform duration-500 ${
                    reversed ? "md:col-start-1" : "md:col-start-2"
                  } ${isHovered ? "md:scale-105" : ""}`}
                >
                  <Image
                    src={image(visualKey, 500)}
                    alt={c.nameJa}
                    fill
                    sizes="180px"
                    className={`object-cover ${focal(visualKey)}`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
