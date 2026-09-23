import { Reveal, FadeText } from "@/components/Reveal";
import { dataPrinciples, dataLayers } from "@/data/strategy/privacy";
import { StrategyNote } from "./StrategyNote";

// Quiet by design (brief §29/§40) — Privacy is not a Visual Peak. Plain
// text, no shield icons, no security-product styling.
export function PrivacyByDesign() {
  return (
    <div id="privacy" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">必要な情報だけ扱う</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-display mt-4 text-[20px] italic leading-[1.4] text-ink md:text-[24px]">
          VALUE BEFORE CAPTURE.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          Beauty Mapは、価値(自分の基準の整理)を先に渡し、個人情報の取得はConsultation Briefへ進む段階まで求めない。
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {dataPrinciples.map((p, i) => (
          <Reveal key={p.title} delay={0.05 * i}>
            <p className="font-heading-jp text-[15px] text-ink">{p.title}</p>
            <p className="font-body-jp mt-2 text-[12.5px] leading-relaxed text-ink/65">{p.body}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <p className="text-[11px] tracking-[0.04em] text-ink/45">
          3つに分けて扱うデータ
        </p>
        <div className="mt-6 flex flex-col divide-y divide-line border-t border-b border-line">
          {dataLayers.map((l, i) => (
            <Reveal key={l.name} delay={0.05 * i}>
              <div className="grid grid-cols-1 gap-1 py-4 md:grid-cols-[220px_1fr] md:gap-6">
                <p className="font-heading-jp text-[14px] text-ink">{l.name}</p>
                <div>
                  <p className="font-body-jp text-[13px] text-ink/70">{l.examples.join(" / ")}</p>
                  {l.note && (
                    <p className="font-body-jp mt-1 text-[10.5px] tracking-[0.02em] text-accent-text">
                      {l.note}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <StrategyNote>
          「あると便利だから」という理由で、Beauty Mapが既往歴や服薬情報を集めることはしない。それらはMedical
          Intakeという別の正式なプロセスで扱う。
        </StrategyNote>
      </div>
    </div>
  );
}
