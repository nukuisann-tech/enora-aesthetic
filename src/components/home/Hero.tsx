import Link from "next/link";
import Image from "next/image";
import { FadeText } from "@/components/Reveal";
import { image, focal } from "@/lib/images";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative -mt-[64px] h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink md:-mt-[80px]">
      <Image
        src={image("mirrorYoung", 2000)}
        alt="自然光の入る鏡の前で、静かに自分と向き合う女性"
        fill
        sizes="100vw"
        priority
        className={`object-cover ${focal("mirrorYoung")}`}
      />

      {/* Editorial index — a quiet signature in the corner, not a UI element. */}
      <div className="absolute left-5 top-20 md:left-12 md:top-28">
        <p className="font-ui-en text-[11px] italic tracking-[0.2em] text-base/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
          01 / {site.concept}
        </p>
      </div>

      {/* Copy panel — a solid card in the corner rather than text laid
          over the photo, so legibility never depends on tuning a
          gradient against whatever the image happens to do there. */}
      <div className="absolute inset-x-0 bottom-0 md:inset-x-auto md:bottom-12 md:left-12 md:right-auto">
        <div className="bg-base/95 px-5 pb-8 pt-7 backdrop-blur-sm md:max-w-[420px] md:px-9 md:py-9">
          <FadeText>
            <h1 className="font-heading-jp text-hero text-ink" style={{ fontSize: "clamp(2rem, 5.2vw, 3.4rem)" }}>
              美しさは、
              <br />
              足すより選ぶ。
            </h1>
          </FadeText>
          <FadeText delay={0.15}>
            <p className="font-body-jp mt-5 text-[13.5px] leading-loose text-ink/65 md:text-[14px]">
              必要なことを、一緒に整理するところから。
            </p>
          </FadeText>
          <FadeText delay={0.3}>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                href="/consultation"
                className="inline-flex items-center border-b border-ink pb-1 text-[13px] tracking-wide text-ink transition-colors hover:border-accent hover:text-accent-text"
              >
                カウンセリングを予約する
              </Link>
              <Link
                href="/concerns"
                className="text-[13px] tracking-wide text-ink/65 underline decoration-line underline-offset-8 hover:text-ink hover:decoration-accent"
              >
                悩みから探す
              </Link>
            </div>
          </FadeText>
        </div>
      </div>
    </section>
  );
}
