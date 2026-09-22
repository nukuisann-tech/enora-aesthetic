import Image from "next/image";
import { Reveal, FadeText } from "@/components/Reveal";
import { image, focal } from "@/lib/images";

function StepHeading({ no, en, ja }: { no: string; en: string; ja: string }) {
  return (
    <div className="flex items-baseline gap-4 border-t-2 border-accent pt-5">
      <span className="font-display text-[13px] italic text-ink/35">{no}</span>
      <h3 className="font-display text-[22px] italic text-ink">{en}</h3>
      <span className="font-heading-jp text-[13px] text-ink/55">{ja}</span>
    </div>
  );
}

export function SelectiveApproach() {
  return (
    <section className="rhythm bg-base">
      <div className="canvas">
        <FadeText>
          <p className="eyebrow text-[12px]">The Selective Approach</p>
        </FadeText>

        {/* 01 — Observe: a wide, quiet image carries the section; the
            reading happens in the caption, not a paragraph. */}
        <Reveal className="mt-12">
          <StepHeading no="01" en="Observe" ja="観察する" />
          <div className="relative mt-6 aspect-[21/9] w-full overflow-hidden">
            <Image
              src={image("interiorRoom", 1800)}
              alt="静かな室内、観察の時間を象徴するミニマルな空間"
              fill
              sizes="90vw"
              className={`object-cover ${focal("interiorRoom")}`}
            />
          </div>
          <p className="font-body-jp mt-4 max-w-sm text-[12.5px] leading-relaxed text-ink/50">
            肌・輪郭・生活・価値観を、施術ありきではなくまず観察します。
          </p>
        </Reveal>

        {/* 02 — Select: typography only. No image, no card — the
            emptiest section on the page is here on purpose. */}
        <Reveal className="mt-24 md:mt-32">
          <StepHeading no="02" en="Select" ja="選ぶ" />
          <p
            className="font-heading-jp mt-8 max-w-xl text-ink"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.4 }}
          >
            必要なものと、必要でないものを一緒に切り分けます。
          </p>
        </Reveal>

        {/* 03 — Plan: split layout, text against a small detail image. */}
        <Reveal className="mt-24 md:mt-32">
          <StepHeading no="03" en="Plan" ja="計画する" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr] md:items-center md:gap-16">
            <p className="font-body-jp text-[15px] leading-loose text-ink/65">
              無理のないペースと順番で、施術計画に落とし込みます。急かず、必要になったときに必要な分だけ。
            </p>
            <div className="relative aspect-[3/2] w-full overflow-hidden md:aspect-[4/3]">
              <Image
                src={image("handDetail", 1000)}
                alt="落ち着いた手もとのクローズアップ"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className={`object-cover ${focal("handDetail")}`}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
