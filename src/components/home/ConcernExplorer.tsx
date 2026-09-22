"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeText } from "@/components/Reveal";
import { concerns } from "@/data/concerns";
import { image, focal, type ImageKey } from "@/lib/images";

const categoryVisual: Record<string, ImageKey> = {
  "skin-quality": "skinDetail",
  "tone-texture": "eyeDetail",
  contour: "mirrorYoung",
  "preventive-care": "curtainLight",
  "body-wellness": "handDetail",
};

export function ConcernExplorer() {
  const [activeId, setActiveId] = useState(concerns[0].id);
  const active = concerns.find((c) => c.id === activeId) ?? concerns[0];
  const visualKey = categoryVisual[active.categoryId];

  return (
    <section className="rhythm border-t rule bg-surface">
      <div className="canvas">
        <FadeText>
          <h2 className="font-heading-jp text-h2 text-ink">
            施術名が分からなくても、
            <br />
            大丈夫です。
          </h2>
        </FadeText>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div className="border-t rule">
            {concerns.map((c, i) => {
              const isActive = c.id === activeId;
              return (
                <div key={c.id} className="border-b rule">
                  <button
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    onMouseEnter={() => setActiveId(c.id)}
                    className="flex w-full items-baseline justify-between gap-6 py-5 text-left"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-display text-[13px] italic text-ink/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-heading-jp text-[19px] transition-colors md:text-[22px] ${
                          isActive ? "text-ink" : "text-ink/45"
                        }`}
                      >
                        {c.label}
                      </span>
                    </span>
                    <span
                      className={`hidden text-[12px] text-ink/45 transition-opacity sm:block ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {c.description}
                    </span>
                  </button>

                  {/* Mobile: description + link expand inline, since there is
                      no adjacent visual pane to react to a hover state. */}
                  <div className={`sm:hidden ${isActive ? "block" : "hidden"} pb-5`}>
                    <p className="font-body-jp text-[12.5px] leading-relaxed text-ink/55">
                      {c.description}
                    </p>
                    <Link
                      href={`/concerns#${c.id}`}
                      className="font-ui-en mt-3 inline-block text-[11px] italic tracking-[0.1em] text-accent underline decoration-line underline-offset-4"
                    >
                      詳しく見る →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop dynamic visual — swaps with the active row instead of
              eight identical beauty cards. */}
          <div className="relative hidden aspect-[4/5] w-full overflow-hidden sm:block">
            <Image
              key={visualKey}
              src={image(visualKey, 1200)}
              alt={active.label}
              fill
              sizes="35vw"
              className={`object-cover transition-opacity duration-500 ${focal(visualKey)}`}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-6 pb-6 pt-16">
              <Link
                href={`/concerns#${active.id}`}
                className="font-ui-en text-[11px] italic tracking-[0.14em] text-base underline decoration-base/40 underline-offset-4 hover:decoration-base"
              >
                {active.label}を詳しく見る →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
