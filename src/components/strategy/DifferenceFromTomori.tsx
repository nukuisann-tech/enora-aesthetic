import { Reveal, FadeText } from "@/components/Reveal";

const rows = [
  { axis: "Problem", tomori: "長い検討期間で接点が切れる。", enora: "情報が多すぎて判断できない。" },
  { axis: "Strategy", tomori: "検討期間を設計する。", enora: "判断品質を設計する。" },
  { axis: "Growth Asset", tomori: "10 Years Later Home Plan", enora: "Selective Beauty Map" },
  {
    axis: "Growth Loop",
    tomori: "Product → Content → Next Customer",
    enora: "Decision → Experience → Trust → Next Relationship",
  },
];

export function DifferenceFromTomori() {
  return (
    <div id="difference" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Difference from Industry 01 — Tomori Komuten</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          同じ制作者が、業界ごとに顧客心理からGrowth Modelそのものを設計し直していることが、比較すると分かる。
        </p>
      </Reveal>

      {/* Desktop: a real comparison table. Mobile: stacked cards instead
          of a horizontally-scrolling 3-column table — swiping sideways
          inside a small viewport to read the ÉNORA column is exactly the
          kind of friction this whole site argues against. */}
      <div className="mt-10 hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-line-strong text-left">
              <th className="font-ui-en py-3 pr-4 text-[10px] tracking-[0.1em] text-ink/45">AXIS</th>
              <th className="font-ui-en py-3 pr-4 text-[10px] tracking-[0.1em] text-ink/45">
                TOMORI KOMUTEN
              </th>
              <th className="font-ui-en py-3 text-[10px] tracking-[0.1em] text-accent-text">
                ÉNORA AESTHETIC
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.axis} className="border-b border-line">
                <td className="font-heading-jp py-4 pr-4 text-[13.5px] text-ink">{r.axis}</td>
                <td className="font-body-jp py-4 pr-4 text-[13px] text-ink/60">{r.tomori}</td>
                <td className="font-body-jp py-4 text-[13px] text-ink">{r.enora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-b border-line md:hidden">
        {rows.map((r) => (
          <div key={r.axis} className="py-5">
            <p className="font-heading-jp text-[14px] text-ink">{r.axis}</p>
            <div className="mt-3 grid grid-cols-1 gap-3">
              <div>
                <p className="font-ui-en text-[10px] tracking-[0.1em] text-ink/45">TOMORI KOMUTEN</p>
                <p className="font-body-jp mt-1 text-[13px] text-ink/60">{r.tomori}</p>
              </div>
              <div>
                <p className="font-ui-en text-[10px] tracking-[0.1em] text-accent-text">
                  ÉNORA AESTHETIC
                </p>
                <p className="font-body-jp mt-1 text-[13px] text-ink">{r.enora}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
