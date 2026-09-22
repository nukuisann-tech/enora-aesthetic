import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, FadeText, ImageReveal } from "@/components/Reveal";
import { image, focal } from "@/lib/images";

export const metadata: Metadata = {
  title: "私たちの考え",
  description: "ÉNORA AESTHETICが「選択制の美容医療」を掲げる理由。",
};

export default function PhilosophyPage() {
  return (
    <div className="bg-base">
      {/* Manifesto hero — dark, centered, no photo. The one page in the
          site where the statement stands entirely on its own. */}
      <section className="rhythm-peak bg-dark text-base">
        <div className="frame text-center">
          <p className="eyebrow text-[12px] text-accent-text">Philosophy</p>
          <FadeText delay={0.1}>
            <h1
              className="font-heading-jp mt-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", lineHeight: 1.5 }}
            >
              美しさを、
              <br />
              足し算では考えていません。
            </h1>
          </FadeText>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <h2 className="eyebrow text-[12px]">Beauty Curator, not Treatment Seller</h2>
            <p className="font-body-jp mt-5 text-[14.5px] leading-loose text-ink/70">
              「美容施術をたくさん受けること」を、私たちは美しさとは定義しません。肌・輪郭・年齢・生活・価値観・悩みを整理したうえで、「何をするか」だけでなく「何をしないか」まで一緒に選ぶ。
              それがÉNORAの立ち位置です。
            </p>
            <p className="font-body-jp mt-5 text-[14.5px] leading-loose text-ink/70">
              「何か施術しなきゃ」ではなく、「自分に必要なものだけを選びたい」と思っていただけることを目指しています。
            </p>
          </Reveal>
          <ImageReveal className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={image("skinDetail", 1200)}
              alt="肌の質感を写したクローズアップ"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className={`object-cover ${focal("skinDetail")}`}
            />
          </ImageReveal>
        </div>
      </section>

      <section className="rhythm border-t rule bg-surface">
        <div className="frame">
          <FadeText>
            <h2 className="font-heading-jp text-[26px] leading-[1.5] text-ink md:text-[32px]">
              約束しているのは、
              <br />
              静かな自信です。
            </h2>
          </FadeText>
          <Reveal delay={0.15}>
            <p className="font-body-jp mt-6 max-w-xl text-[14px] leading-loose text-ink/70">
              劇的に別人になることではありません。鏡を見るストレスが少し減る。写真に写る自分を以前より好きになれる。疲れて見える印象が整う。自分に合う美容が分かり、情報に振り回されなくなる。
              やりすぎない自分でいられる——それが、私たちが目指す変化です。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="eyebrow text-[12px]">Refinement, not Transformation</h2>
            <p className="font-body-jp mt-5 text-[14px] leading-loose text-ink/70">
              「別人になりたい」ではなく、「なんとなく最近いい感じ」を目指しています。
              強烈な変化ではなく、微妙なニュアンスの調整にこそ、私たちはラグジュアリーを感じています。
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="eyebrow text-[12px]">Quiet Luxury × Clinical Intelligence</h2>
            <p className="font-body-jp mt-5 text-[14px] leading-loose text-ink/70">
              低価格クリニックでも、豪華絢爛なラグジュアリークリニックでもありません。
              急かされない、何でも勧められない、美意識が合いそう、医療として安心できる——
              その掛け合わせを大切にしています。
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
