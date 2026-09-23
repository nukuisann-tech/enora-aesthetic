import { Reveal, FadeText } from "@/components/Reveal";

// Trimmed for the Main Story (editorial rebuild §10/§33) — client/audience
// detail collapsed into one line each; challenges cut from 6 to 4;
// Research moved out entirely (now just a one-line mention, full detail
// lives in 調査・設計根拠 near the end).
const challenges = [
  "施術中心の情報が多く、自分に必要なことを判断しにくい",
  "価格やリスクへの不安が残る",
  "問い合わせ前に離脱する",
  "予約後も期待値のズレが生まれることがある",
];

export function StrategicPremise() {
  return (
    <div id="premise" className="canvas rhythm-tight scroll-mt-24">
      <FadeText>
        <p className="eyebrow text-[12px]">前提</p>
      </FadeText>

      <Reveal delay={0.05} className="mt-6">
        <p className="font-heading-jp text-[16px] leading-[1.8] text-ink/80">
          都市部の高単価・美容皮膚科系クリニックを想定。過剰な施術・過剰な営業・情報過多を避けたい30〜45歳前後の女性が主な顧客像。
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">想定される課題</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          {challenges.map((c) => (
            <li key={c} className="flex gap-3 text-[13.5px] leading-relaxed text-ink/75">
              <span className="text-accent-text">—</span>
              {c}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.16} className="mt-8">
        <p className="font-ui-en text-[10px] italic tracking-[0.08em] text-ink/40">
          市場調査・行政資料を参考にした戦略仮説(詳細は後半「調査・設計根拠」)
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mt-10 border-t border-line-strong pt-8">
        <p className="font-heading-jp max-w-2xl text-[19px] leading-[1.7] text-ink md:text-[22px]">
          より多く予約させる、ではなく、
          <br />
          より整理された状態で相談してもらう。
        </p>
      </Reveal>
    </div>
  );
}
