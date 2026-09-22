import { Reveal, FadeText } from "@/components/Reveal";
import { existingAssets } from "@/data/strategy/existingAssets";

export function ExistingAssetLeverage() {
  return (
    <div id="assets" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Existing Asset Leverage</p>
      </FadeText>
      <Reveal delay={0.06}>
        <p className="font-body-jp mt-4 max-w-lg text-[13.5px] leading-loose text-ink/65">
          すでに完成しているWebsiteを、Growth Systemの中でどう機能させるか。
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-b border-line">
        {existingAssets.map((a, i) => (
          <Reveal key={a.name} delay={0.04 * i}>
            <div className="grid grid-cols-1 gap-1 py-4 md:grid-cols-[160px_1fr_auto] md:items-baseline md:gap-6">
              <p className="font-heading-jp text-[15px] text-ink">{a.name}</p>
              <p className="font-body-jp text-[12.5px] text-ink/65">{a.role}</p>
              <p className="font-ui-en text-[11px] text-accent-text">→ {a.next}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
