"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print fixed bottom-5 right-5 z-40 hidden border border-line-strong bg-base/90 px-3 py-2 text-[10px] tracking-[0.12em] text-ink/65 backdrop-blur-md transition-colors hover:text-ink lg:block"
    >
      PRINT / SAVE STRATEGY
    </button>
  );
}
