import { Reveal, FadeText } from "@/components/Reveal";

const fields = [
  { label: "MAIN CONCERN", status: "実装済み" },
  { label: "AVOID", status: "実装済み" },
  { label: "PRIORITY", status: "実装済み" },
  { label: "EXPERIENCE", status: "拡張案" },
  { label: "QUESTIONS", status: "拡張案" },
];

export function ConsultationBriefSection() {
  return (
    <div id="brief-asset" className="canvas rhythm-tight scroll-mt-24 border-t border-line pt-16">
      <FadeText>
        <p className="eyebrow text-[12px]">Consultation Brief — Central Asset</p>
      </FadeText>
      <Reveal delay={0.06}>
        <h2 className="font-heading-jp mt-4 max-w-lg text-[22px] leading-[1.6] text-ink md:text-[27px]">
          既存WebsiteのYOUR CONSULTATION BRIEFを、
          <br />
          Growth Systemの中心資産として再利用する。
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">CAPTURED FIELDS</p>
          <div className="mt-4 flex flex-col divide-y divide-line border-t border-b border-line">
            {fields.map((f) => (
              <div key={f.label} className="flex items-center justify-between py-2.5">
                <span className="font-body-jp text-[13.5px] text-ink">{f.label}</span>
                <span className="font-ui-en text-[10px] tracking-[0.08em] text-ink/45">
                  {f.status}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">PURPOSE</p>
          <p className="font-body-jp mt-3 text-[14px] leading-loose text-ink/75">
            担当者は相談前にConcern・Avoid・Priorityを確認する。Consultation時間を基本情報の収集ではなく、Better
            Conversationのために使う。
          </p>
        </Reveal>
      </div>
    </div>
  );
}
