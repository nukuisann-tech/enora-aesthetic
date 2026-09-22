import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, FadeText, ImageReveal } from "@/components/Reveal";
import { image, focal } from "@/lib/images";
import { people } from "@/data/team";

export const metadata: Metadata = {
  title: "チーム",
  description: "何ができるかより、何を勧めないかまで話せる人たち。",
};

export default function TeamPage() {
  const [director, ...rest] = people;

  return (
    <div className="bg-base">
      {/* Portrait-led hero — the Director's photo opens the page before
          any heading text, at the largest scale any portrait gets on
          the site. */}
      <section className="relative h-[72vh] min-h-[440px] w-full overflow-hidden bg-ink">
        <Image
          src={image(director.image, 1800)}
          alt={director.imageAlt}
          fill
          sizes="100vw"
          priority
          className={`object-cover ${focal(director.image)}`}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent px-5 pb-8 pt-24 md:px-12 md:pb-12">
          <p className="eyebrow text-[12px] text-base/95 [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">
            Our People
          </p>
          <FadeText delay={0.1}>
            <h1 className="font-heading-jp mt-3 max-w-lg text-[26px] leading-[1.5] text-base md:text-[38px]">
              何ができるかより、
              <br />
              何を勧めないかまで話せる人へ。
            </h1>
          </FadeText>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame">
          <Reveal>
            <div className="flex items-center gap-3">
              <p className="font-ui-en text-[11px] italic tracking-[0.2em] text-accent-text">
                {director.roleEn}
              </p>
              <span className="font-ui-en border border-line-strong px-1.5 py-0.5 text-[9px] italic tracking-[0.1em] text-ink/65">
                CONCEPT PROFILE
              </span>
            </div>
            <p className="font-heading-jp mt-2 text-[13px] text-ink/65">{director.role}</p>
            <h2 className="font-display mt-4 text-[30px] italic text-ink">{director.name}</h2>
            <p className="font-heading-jp mt-6 max-w-xl whitespace-pre-line text-[22px] leading-[1.7] text-ink">
              {director.thought}
            </p>
            <p className="font-body-jp mt-5 max-w-md text-[14px] leading-loose text-ink/65">
              {director.bio}
            </p>
          </Reveal>
        </div>

        {/* The rest are deliberately smaller — a different scale of
            attention, not a matching row of staff cards. */}
        <div className="frame mt-20 grid grid-cols-1 gap-16 border-t rule pt-16 md:grid-cols-2 md:gap-20">
          {rest.map((p) => (
            <div key={p.slug} className="flex flex-col gap-5 sm:flex-row">
              <ImageReveal className="relative aspect-[3/4] w-full max-w-[160px] flex-shrink-0 overflow-hidden">
                <Image
                  src={image(p.image, 500)}
                  alt={p.imageAlt}
                  fill
                  sizes="160px"
                  className={`object-cover ${focal(p.image)}`}
                />
              </ImageReveal>
              <div>
                <p className="font-ui-en text-[11px] italic tracking-[0.18em] text-accent-text">
                  {p.roleEn}
                </p>
                <p className="font-body-jp text-[12px] text-ink/65">{p.role}</p>
                <h3 className="font-display mt-2 text-[20px] italic text-ink">{p.name}</h3>
                <p className="font-heading-jp mt-3 whitespace-pre-line text-[15px] leading-[1.7] text-ink/85">
                  {p.thought}
                </p>
                <p className="font-body-jp mt-3 text-[13px] leading-loose text-ink/65">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="frame mt-12 text-[11px] leading-relaxed text-ink/65">
          ※「ビューティー・キュレーター」「ケア・コーディネーター」はÉNORA内部の役割上の呼称であり、医療資格の名称ではありません。施術の医学的な適応判断は医師が行います。
        </p>
      </section>
    </div>
  );
}
