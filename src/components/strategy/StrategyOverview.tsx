import { Reveal, FadeText } from "@/components/Reveal";

const rows = [
  { no: "01", label: "課題", body: "情報が多すぎて、自分に必要なものを判断しにくい。" },
  { no: "02", label: "戦略", body: "施術を勧める前に、本人の判断軸を整理する。" },
  {
    no: "03",
    label: "中核システム",
    body: "Beauty Map → Consultation Brief(相談前の整理内容) → 人による相談",
  },
  { no: "04", label: "目指す状態", body: "「予約数」ではなく、相談準備が整った状態を増やす。" },
];

// This is the ONLY overview on the page (editorial rebuild §03/§07) — it
// replaces the prior Executive Summary / 60-Second Read / Master
// Decision System stack, which repeated the same "here's the whole
// strategy" idea four times before Chapter 01 even started. An editorial
// sequence, not four rounded cards (§08): large numbers, thin rules,
// whitespace — readable end to end in 10–15 seconds.
export function StrategyOverview() {
  return (
    <div id="overview" className="canvas rhythm">
      <FadeText>
        <p className="eyebrow text-[12px]">この戦略を一枚で</p>
      </FadeText>

      <div className="mt-10 flex flex-col">
        {rows.map((r, i) => (
          <Reveal key={r.no} delay={0.08 * i}>
            <div
              className={`grid grid-cols-1 gap-2 py-8 md:grid-cols-[100px_180px_1fr] md:items-baseline md:gap-8 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="font-display text-[22px] italic text-accent-text">{r.no}</span>
              <p className="font-heading-jp text-[17px] text-ink">{r.label}</p>
              <p className="font-body-jp text-[15px] leading-relaxed text-ink/75 md:text-[16px]">
                {r.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
