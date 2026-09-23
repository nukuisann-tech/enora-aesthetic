import { Reveal, FadeText } from "@/components/Reveal";
import { businessLenses } from "@/data/strategy/businessSystem";

// Chapter 05 — a 4-row flow, not a KPI tree (editorial rebuild §19):
// 顧客 → 相談 → 現場 → 事業, one word and one line each. Full KPI/
// Capacity/Economics detail lives in Supporting Strategy → 計測.
export function BusinessSystemLenses() {
  return (
    <div className="canvas rhythm">
      <FadeText>
        <p className="eyebrow text-[12px]">事業への接続</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-h2 text-ink">
          良い成長は、
          <br />
          予約数だけでは判断しない。
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col">
        {businessLenses.map((l, i) => (
          <Reveal key={l.name} delay={0.06 * i}>
            <div
              className={`flex items-baseline gap-6 py-6 ${i > 0 ? "border-t border-line" : ""}`}
            >
              <span className="font-display text-[20px] italic text-accent-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-heading-jp w-20 flex-shrink-0 text-[17px] text-ink">{l.name}</p>
              <p className="font-body-jp text-[14px] text-ink/70">{l.watches}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-10 max-w-lg">
        <p className="font-body-jp text-[13px] leading-relaxed text-ink/55">
          判断の質は、ひとつの点数にはしない。測定の設計は「詳細設計 — 計測」で扱う。
        </p>
      </Reveal>
    </div>
  );
}
