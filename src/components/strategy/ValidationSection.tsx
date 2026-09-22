import { Reveal, FadeText } from "@/components/Reveal";
import { validationItems } from "@/data/strategy/validation";

export function ValidationSection() {
  return (
    <div id="validation" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Before Implementation</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-xl text-[22px] leading-[1.6] text-ink md:text-[27px]">
          何が問題かを決める前に、
          <br />
          何が事実かを確認する。
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="font-ui-en mt-8 text-[11px] tracking-[0.08em] text-ink/45">
          WHAT WE WOULD VALIDATE FIRST
        </p>
        <div className="mt-4 grid grid-cols-1 gap-x-10 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {validationItems.map((item, i) => (
            <div key={item} className="flex items-baseline gap-3 border-b border-line py-2">
              <span className="font-ui-en text-[11px] text-ink/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-body-jp text-[13.5px] text-ink/80">{item}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.18} className="mt-12 max-w-xl border-l-2 border-accent pl-5">
        <p className="font-display text-[16px] italic leading-[1.6] text-ink md:text-[18px]">
          MORE BOOKINGS ARE NOT ALWAYS BETTER.
        </p>
        <p className="font-body-jp mt-2 text-[13px] leading-relaxed text-ink/65">
          予約枠以上にLeadを増やしても、Growthとは限らない。Volumeではなく、Capacity・Quality・Economicsまで確認して優先順位を決める。
        </p>
      </Reveal>
    </div>
  );
}
