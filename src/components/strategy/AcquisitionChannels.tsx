import { Reveal, FadeText } from "@/components/Reveal";
import { channels } from "@/data/strategy/channels";
import { StrategyNote } from "./StrategyNote";
import { ClaimTag } from "./ClaimTag";

export function AcquisitionChannels() {
  return (
    <div id="acquisition" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">集客 — チャネルの役割</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          チャネルの数ではなく、役割を明確にする。初期段階ではTikTok・YouTube・大量広告までは広げない。
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-b border-line">
        {channels.map((c, i) => (
          <Reveal key={c.id} delay={0.05 * i}>
            <div className="grid grid-cols-1 gap-2 py-7 md:grid-cols-[200px_1fr] md:gap-8">
              <div>
                <span className="font-display text-[13px] italic text-ink/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading-jp mt-1 text-[19px] text-ink">{c.name}</h3>
                <p className="font-ui-en text-[11px] italic tracking-[0.1em] text-accent-text">
                  {c.role}
                </p>
              </div>
              <div>
                {c.isHypothesis && (
                  <div className="mb-2">
                    <ClaimTag type="HYPOTHESIS" />
                  </div>
                )}
                <p className="font-body-jp text-[13.5px] leading-relaxed text-ink/75">{c.detail}</p>
                <p className="font-ui-en mt-2 text-[10px] tracking-[0.08em] text-ink/45">
                  DESTINATION — {c.destination}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <StrategyNote>チャネルを増やすより先に、各チャネルの役割を1文で言えることを優先する。</StrategyNote>
      </div>
    </div>
  );
}
