import Link from "next/link";
import { FadeText, Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="rhythm bg-dark text-base">
      <div className="frame text-center">
        <FadeText>
          <h2 className="font-heading-jp text-[28px] leading-[1.6] md:text-[38px]">
            まだ、
            <br />
            何をするか決まっていなくて大丈夫です。
          </h2>
        </FadeText>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
              href="/consultation"
              className="inline-flex items-center border border-base bg-base px-7 py-3.5 text-[13px] tracking-wide text-dark transition-colors hover:bg-transparent hover:text-base"
            >
              カウンセリングを予約する
            </Link>
            <Link
              href="/first-visit"
              className="text-[13px] tracking-wide text-base underline decoration-white/30 underline-offset-8 hover:decoration-accent"
            >
              初めての方へ
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
