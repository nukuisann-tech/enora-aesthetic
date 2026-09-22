import Link from "next/link";
import { Reveal, FadeText } from "@/components/Reveal";

const points = [
  "カウンセリング料金は事前に明示します",
  "追加費用が発生しうる条件は施術前に説明します",
  "「今日決めないと」という誘導はしません",
];

export function PriceTransparency() {
  return (
    <section className="rhythm bg-base">
      <div className="frame grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <FadeText>
          <h2 className="font-heading-jp text-[28px] leading-[1.5] text-ink md:text-[36px]">
            価格も、
            <br />
            判断材料のひとつだから。
          </h2>
        </FadeText>
        <Reveal delay={0.15}>
          <ul className="flex flex-col gap-5">
            {points.map((pt) => (
              <li key={pt} className="flex gap-4 border-b rule pb-5 text-[14px] leading-relaxed text-ink/70">
                <span className="font-display italic text-accent">—</span>
                {pt}
              </li>
            ))}
          </ul>
          <Link
            href="/price"
            className="mt-8 inline-block text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 hover:decoration-accent"
          >
            料金についての考え方を見る →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
