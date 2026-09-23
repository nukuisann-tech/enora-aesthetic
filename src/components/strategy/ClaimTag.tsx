// Four claim types (brief V2 §13), used sparingly — only where a
// reader might otherwise mistake one kind of statement for another
// (a hypothesis read as fact, a sample read as a real number). Not
// applied to every sentence on the page. Kept as an intentional English
// Design System label (editorial rebuild §07), with a small Japanese
// gloss so a reader who doesn't know the English word still understands
// it immediately.
const styles = {
  DATA: "text-accent-text border-accent-text",
  HYPOTHESIS: "text-ink/55 border-line-strong",
  STRATEGY: "text-ink border-ink",
  SAMPLE: "text-ink/45 border-line",
} as const;

const glosses = {
  DATA: "データ",
  HYPOTHESIS: "仮説",
  STRATEGY: "戦略判断",
  SAMPLE: "例",
} as const;

export function ClaimTag({ type }: { type: keyof typeof styles }) {
  return (
    <span
      className={`font-ui-en inline-block border px-1.5 py-0.5 text-[9px] italic tracking-[0.08em] ${styles[type]}`}
    >
      {type} <span className="not-italic">{glosses[type]}</span>
    </span>
  );
}
