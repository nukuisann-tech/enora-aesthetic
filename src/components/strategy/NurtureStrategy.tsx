import { Reveal, FadeText } from "@/components/Reveal";
import { nurtureMessages } from "@/data/strategy/nurture";
import { StrategyNote } from "./StrategyNote";

export function NurtureStrategy() {
  return (
    <div id="nurture" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">フォローアップ — 販売ではなく判断支援の連続性</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          LINEを前提にしない。メール、または実案件のCRMチャネルを使う想定。
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-b border-line">
        {nurtureMessages.map((m, i) => (
          <Reveal key={m.no} delay={0.04 * i}>
            <div className="grid grid-cols-1 gap-1 py-5 md:grid-cols-[60px_1fr] md:gap-6">
              <span className="font-display text-[13px] italic text-ink/35">{m.no}</span>
              <div>
                <p className="font-heading-jp text-[15px] text-ink">{m.title}</p>
                {m.body && (
                  <p className="font-body-jp mt-1 text-[12.5px] leading-relaxed text-ink/60">
                    {m.body}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <StrategyNote>
          即決を促すのではなく、判断材料を提供しながら継続的な接点を維持する仕組みとして設計する。
        </StrategyNote>
      </div>
    </div>
  );
}
