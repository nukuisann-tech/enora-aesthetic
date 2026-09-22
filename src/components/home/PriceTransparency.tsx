import Link from "next/link";
import { Reveal, FadeText } from "@/components/Reveal";

const points = [
  { en: "Consultation Fee", ja: "カウンセリング料金", body: "予約時点で事前に明示します。" },
  { en: "Additional Cost", ja: "追加費用", body: "発生しうる条件を施術前に説明します。" },
  { en: "No Pressure", ja: "急かさない", body: "「今日決めないと」という誘導はしません。" },
];

export function PriceTransparency() {
  return (
    <section className="rhythm bg-[#fbfaf7]">
      <div className="frame grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <FadeText>
          <h2 className="font-heading-jp text-[26px] leading-[1.5] text-ink md:text-[32px]">
            価格も、
            <br />
            判断材料のひとつだから。
          </h2>
        </FadeText>
        <div>
          {points.map((pt, i) => (
            <Reveal key={pt.en} delay={0.08 * i}>
              <div className="flex items-baseline gap-5 border-b rule py-5">
                <span className="font-ui-en text-[12px] text-ink/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-ui-en text-[14px] font-medium text-ink">
                    {pt.en}
                    <span className="font-body-jp ml-2 text-[12px] font-normal text-ink/45">{pt.ja}</span>
                  </p>
                  <p className="font-body-jp mt-1 text-[13px] leading-relaxed text-ink/55">{pt.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Link
            href="/price"
            className="mt-6 inline-block text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 hover:decoration-accent"
          >
            料金についての考え方を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
