export function StrategyNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body-jp text-[13px] leading-relaxed text-ink/65">
      <span className="font-ui-en mr-2 italic text-accent-text">Strategy Note —</span>
      {children}
    </p>
  );
}
