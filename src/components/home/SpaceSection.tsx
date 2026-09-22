import Image from "next/image";
import { ImageReveal, Reveal, FadeText } from "@/components/Reveal";
import { image } from "@/lib/images";

export function SpaceSection() {
  return (
    <section className="rhythm bg-base">
      <div className="canvas">
        <FadeText>
          <p className="eyebrow text-[12px]">The Space</p>
        </FadeText>
        <Reveal delay={0.1}>
          <h2 className="font-heading-jp mt-5 max-w-lg text-[26px] leading-[1.5] text-ink md:text-[32px]">
            急かされない時間のために、
            空間からつくっています。
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-[1.3fr_1fr] md:gap-6">
          <ImageReveal className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto">
            <Image
              src={image("interiorLobby", 1600)}
              alt="自然光の入る、簡素なクリニックのラウンジ"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-6">
            <ImageReveal delay={0.1} className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={image("interiorHallway", 1200)}
                alt="静かなクリニックの廊下"
                fill
                sizes="(min-width: 768px) 25vw, 45vw"
                className="object-cover"
              />
            </ImageReveal>
            <ImageReveal delay={0.2} className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={image("curtainLight", 1200)}
                alt="自然光がやわらかく差し込む、レースカーテン越しの窓辺"
                fill
                sizes="(min-width: 768px) 25vw, 45vw"
                className="object-cover"
              />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
