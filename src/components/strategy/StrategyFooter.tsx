import { Reveal } from "@/components/Reveal";

export function StrategyFooter() {
  return (
    <div className="canvas rhythm-tight border-t border-line pt-12 text-center">
      <Reveal>
        <p className="font-ui-en text-[10px] italic tracking-[0.14em] text-ink/45">
          CONCEPT STRATEGY
        </p>
        <p className="font-body-jp mx-auto mt-3 max-w-lg text-[12px] leading-relaxed text-ink/55">
          本ページはWeb制作ポートフォリオのために制作したConcept
          Strategyであり、実在クリニックの実績・データではありません。数値を伴う記述には出典を明記しています。実案件では、クライアント提供データと最新の医療広告関連ガイドライン等を確認したうえで設計します。
        </p>
      </Reveal>
    </div>
  );
}
