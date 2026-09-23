import { Reveal, FadeText } from "@/components/Reveal";
import { governanceWorkflow, governedContentTypes } from "@/data/strategy/contentGovernance";
import { StrategyNote } from "./StrategyNote";

// This section describes the intended real-world workflow only — it does
// not claim the content on this Concept Project has actually been
// through Medical Review (brief §20's explicit prohibition).
export function ClinicalContentGovernance() {
  return (
    <div id="content-governance" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">医療情報の公開・更新管理</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-[22px] leading-[1.6] text-ink md:text-[27px]">
          施術・価格・リスクの情報は、
          <br />
          公開後も管理し続ける対象にする。
        </h2>
      </Reveal>

      <Reveal delay={0.14} className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-4">
        {governanceWorkflow.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="border border-line-strong px-4 py-2.5 text-[13px] text-ink">{step}</span>
            {i < governanceWorkflow.length - 1 && <span className="text-ink/40">→</span>}
          </div>
        ))}
      </Reveal>

      <div className="mt-10">
        <p className="text-[10.5px] tracking-[0.04em] text-ink/45">対象コンテンツ</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {governedContentTypes.map((c) => (
            <span key={c} className="border border-line px-3 py-1.5 text-[12px] text-ink/70">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-[10.5px] tracking-[0.04em] text-ink/45">コンテンツの管理責任</p>
          <p className="font-body-jp mt-3 text-[13px] leading-relaxed text-ink/70">
            各コンテンツに担当者・最終確認日・次回確認日を記録し、担当者が不明なまま古い情報が残る状態を防ぐ。
          </p>
        </div>
        <StrategyNote>
          このConcept
          Projectのコンテンツ自体が「医師監修済み」であると主張するものではない。上記は実案件で運用する想定のワークフローである。
        </StrategyNote>
      </div>
    </div>
  );
}
