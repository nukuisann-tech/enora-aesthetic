import { Reveal, FadeText } from "@/components/Reveal";

const challenges = [
  "SNS等で認知は得られる",
  "しかしTreatment中心の情報が多い",
  "ユーザーが自分に必要なことを判断しにくい",
  "価格やリスクへの不安が残る",
  "問い合わせ前に離脱する",
  "予約後も期待値のズレが発生する可能性",
];

export function StrategicPremise() {
  return (
    <div id="premise" className="canvas rhythm-tight scroll-mt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <FadeText>
          <p className="eyebrow text-[12px]">Strategic Premise</p>
        </FadeText>
        <span className="font-ui-en text-[10px] italic tracking-[0.12em] text-ink/45">
          STRATEGY HYPOTHESIS — NOT ACTUAL CLIENT DATA
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">ASSUMED CLIENT</p>
          <p className="font-heading-jp mt-2 text-[18px] leading-[1.7] text-ink">
            都市部の、高単価・美容皮膚科系Clinic。
          </p>

          <p className="font-ui-en mt-8 text-[11px] tracking-[0.1em] text-ink/45">
            PRIMARY AUDIENCE
          </p>
          <p className="font-body-jp mt-2 text-[14px] leading-loose text-ink/75">
            30〜45歳前後。美容感度は高いが、過剰Treatment・過剰営業・情報過多を避けたい女性。
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">ASSUMED CHALLENGES</p>
          <ul className="mt-3 flex flex-col gap-2.5">
            {challenges.map((c) => (
              <li key={c} className="flex gap-3 text-[13.5px] leading-relaxed text-ink/75">
                <span className="text-accent-text">—</span>
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-14 border-t border-line-strong pt-8">
        <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">GROWTH OBJECTIVE</p>
        <p className="font-heading-jp mt-3 max-w-2xl text-[19px] leading-[1.7] text-ink md:text-[22px]">
          より多く予約させる、ではなく、
          <br />
          より整理された状態で相談してもらう。
        </p>
      </Reveal>
    </div>
  );
}
