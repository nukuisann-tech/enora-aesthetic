import Image from "next/image";
import { ImageReveal, FadeText } from "@/components/Reveal";
import { image, focal } from "@/lib/images";

export function SpaceSection() {
  return (
    <section className="bg-ink pb-2 pt-16 text-base md:pt-24">
      <div className="frame">
        <FadeText>
          <p className="eyebrow text-[12px]">The Space</p>
        </FadeText>
      </div>

      {/* Full-bleed — the section's dominant image, no side padding. */}
      <ImageReveal className="relative mt-8 aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
        <Image
          src={image("interiorLobby", 2000)}
          alt="自然光の入る、簡素なクリニックのラウンジ"
          fill
          sizes="100vw"
          className={`object-cover ${focal("interiorLobby")}`}
        />
        <span className="font-ui-en absolute bottom-5 left-5 text-[11px] italic tracking-[0.24em] text-base/90 md:bottom-8 md:left-12">
          PRIVATE
        </span>
      </ImageReveal>

      {/* Second beat, deliberately unequal: a narrow vertical detail
          against a wider architectural crop — not two equal thumbnails. */}
      <div className="mt-2 grid grid-cols-[2fr_3fr] gap-2">
        <ImageReveal className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={image("curtainLight", 900)}
            alt="レースカーテン越しにやわらかく差し込む自然光"
            fill
            sizes="40vw"
            className={`object-cover ${focal("curtainLight")}`}
          />
          <span className="font-ui-en absolute bottom-4 left-4 text-[10px] italic tracking-[0.2em] text-base/90">
            QUIET
          </span>
        </ImageReveal>
        <ImageReveal delay={0.1} className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={image("interiorHallway", 1200)}
            alt="静かなクリニックの廊下"
            fill
            sizes="60vw"
            className={`object-cover ${focal("interiorHallway")}`}
          />
          <span className="font-ui-en absolute bottom-4 left-4 text-[10px] italic tracking-[0.2em] text-base/90">
            CONSIDERED
          </span>
        </ImageReveal>
      </div>
    </section>
  );
}
