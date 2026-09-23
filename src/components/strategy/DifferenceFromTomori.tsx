import { Reveal, FadeText } from "@/components/Reveal";

const rows = [
  { axis: "課題", tomori: "長い検討期間で接点が切れる。", enora: "情報が多すぎて判断できない。" },
  { axis: "戦略", tomori: "検討期間を設計する。", enora: "判断品質を設計する。" },
  { axis: "成長資産", tomori: "10 Years Later Home Plan", enora: "Selective Beauty Map" },
  {
    axis: "成長循環",
    tomori: "商品 → コンテンツ → 次の顧客",
    enora: "判断 → 体験 → 信頼 → 次の相談",
  },
];

// One content source, not a table for desktop plus a duplicate set of
// cards for mobile. The same divs become a real table via CSS
// (display:table/table-row/table-cell) at md: and up, and a stacked
// list below it — rows.map() runs once either way.
export function DifferenceFromTomori() {
  return (
    <div id="difference" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Industry 01 灯森工務店との違い</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          同じ制作者が、業界ごとに顧客心理から成長モデルそのものを設計し直していることが、比較すると分かる。
        </p>
      </Reveal>

      <div className="mt-10 md:table md:w-full md:border-collapse">
        <div className="hidden border-b border-line-strong text-left md:table-row">
          <div className="py-3 pr-4 text-[10.5px] tracking-[0.04em] text-ink/45 md:table-cell">
            項目
          </div>
          <div className="font-ui-en py-3 pr-4 text-[10px] tracking-[0.1em] text-ink/45 md:table-cell">
            TOMORI KOMUTEN
          </div>
          <div className="font-ui-en py-3 text-[10px] tracking-[0.1em] text-accent-text md:table-cell">
            ÉNORA AESTHETIC
          </div>
        </div>

        {rows.map((r) => (
          <div key={r.axis} className="border-b border-line py-5 md:table-row md:py-0">
            <div className="font-heading-jp text-[14px] text-ink md:table-cell md:py-4 md:pr-4 md:align-baseline md:text-[13.5px]">
              {r.axis}
            </div>
            <div className="mt-3 md:table-cell md:mt-0 md:py-4 md:pr-4 md:align-baseline">
              <p className="font-ui-en text-[10px] tracking-[0.1em] text-ink/45 md:hidden">
                TOMORI KOMUTEN
              </p>
              <p className="font-body-jp mt-1 text-[13px] text-ink/60 md:mt-0">{r.tomori}</p>
            </div>
            <div className="mt-3 md:table-cell md:mt-0 md:py-4 md:align-baseline">
              <p className="font-ui-en text-[10px] tracking-[0.1em] text-accent-text md:hidden">
                ÉNORA AESTHETIC
              </p>
              <p className="font-body-jp mt-1 text-[13px] text-ink md:mt-0">{r.enora}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
