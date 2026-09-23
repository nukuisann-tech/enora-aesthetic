import { Reveal, FadeText } from "@/components/Reveal";

const noise = ["SNS", "価格", "口コミ", "施術名", "症例", "キャンペーン"];

// Visual Peak 02. Japanese carries the meaning; "TOO MUCH INFORMATION.
// TOO LITTLE CLARITY." is now Brand Accent only, not the explanation
// itself (editorial rebuild §09) — no long paragraph underneath.
export function MarketTensionVisual() {
  return (
    <div id="tension-visual" className="rhythm-peak scroll-mt-24 bg-dark text-base">
      <div className="canvas text-center">
        <FadeText>
          <p className="font-ui-en text-[11px] italic tracking-[0.14em] text-metal">
            TOO MUCH INFORMATION. TOO LITTLE CLARITY.
          </p>
        </FadeText>

        <Reveal delay={0.06} className="mt-8">
          <p className="font-heading-jp text-[22px] leading-[1.7] text-base md:text-[27px]">
            情報は増えている。
            <br />
            でも、判断しやすくなったとは限らない。
          </p>
        </Reveal>

        <Reveal delay={0.14} className="mx-auto mt-14 flex max-w-md flex-wrap justify-center gap-x-4 gap-y-3">
          {noise.map((n, i) => (
            <span
              key={n}
              className="font-display italic text-metal"
              style={{ fontSize: `${15 + ((i * 7) % 12)}px`, opacity: 0.5 + (i % 3) * 0.15 }}
            >
              {n}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.22} className="mt-10">
          <p className="font-heading-jp text-[18px] italic text-metal md:text-[20px]">
            「結局、私には何が必要？」
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-col items-center gap-3">
          <span className="h-8 w-px bg-line-strong" />
          <span className="font-heading-jp text-[14px] text-base">ÉNORA</span>
          <span className="h-8 w-px bg-line-strong" />
        </Reveal>

        <Reveal delay={0.38} className="mt-6">
          <p className="font-heading-jp text-[19px] text-base md:text-[22px]">判断材料を整理</p>
        </Reveal>
      </div>
    </div>
  );
}
