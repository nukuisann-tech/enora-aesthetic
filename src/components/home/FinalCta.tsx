import Link from "next/link";
import { FadeText, Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="rhythm-peak bg-dark text-base">
      <div className="frame text-center">
        <FadeText>
          <h2 className="font-heading-jp text-[26px] leading-[1.7] md:text-[36px]">
            まだ、
            <br />
            何をするか決まっていなくて大丈夫です。
          </h2>
        </FadeText>
        <Reveal delay={0.25}>
          <div className="mt-14 flex flex-col items-center gap-6">
            <Link
              href="/consultation"
              className="group inline-flex items-center gap-3 border-b border-base/40 pb-1.5 text-[14px] tracking-wide text-base transition-colors hover:border-accent hover:text-accent"
            >
              カウンセリングを予約する
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/first-visit"
              className="text-[12.5px] tracking-wide text-metal underline decoration-white/20 underline-offset-8 hover:text-base hover:decoration-accent"
            >
              初めての方へ
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
