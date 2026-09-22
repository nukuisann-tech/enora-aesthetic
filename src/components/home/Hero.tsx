import Link from "next/link";
import Image from "next/image";
import { FadeText, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-base">
      <div className="canvas grid min-h-[86vh] grid-cols-1 items-center gap-10 py-16 md:min-h-[92vh] md:grid-cols-[1.05fr_1fr] md:gap-16 md:py-24">
        <div>
          <FadeText>
            <p className="eyebrow text-[12px] md:text-[13px]">{site.concept}</p>
          </FadeText>
          <FadeText delay={0.15}>
            <h1 className="font-heading-jp mt-6 text-[38px] leading-[1.35] text-ink md:text-[56px]">
              美しさは、
              <br />
              足すより選ぶ。
            </h1>
          </FadeText>
          <FadeText delay={0.3}>
            <p className="font-body-jp mt-7 max-w-sm text-[14.5px] leading-loose text-ink/70 md:text-[15px]">
              必要なことを、
              <br />
              一緒に整理するところから。
            </p>
          </FadeText>
          <FadeText delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/consultation"
                className="inline-flex items-center border border-ink bg-ink px-7 py-3.5 text-[13px] tracking-wide text-base transition-colors hover:bg-transparent hover:text-ink"
              >
                カウンセリングを予約する
              </Link>
              <Link
                href="/concerns"
                className="text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 hover:decoration-accent"
              >
                悩みから探す
              </Link>
            </div>
          </FadeText>
        </div>

        <ImageReveal delay={0.2} className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
          <Image
            src={image("mirrorYoung", 1400)}
            alt="自然光の入る鏡の前で、静かに自分と向き合う女性"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
            priority
          />
        </ImageReveal>
      </div>
    </section>
  );
}
