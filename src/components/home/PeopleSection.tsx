import Image from "next/image";
import Link from "next/link";
import { ImageReveal, Reveal, FadeText } from "@/components/Reveal";
import { image, focal } from "@/lib/images";
import { people } from "@/data/team";

export function PeopleSection() {
  const [director, ...rest] = people;

  return (
    <section className="rhythm border-t rule bg-base">
      <div className="frame">
        <FadeText>
          <h2 className="font-heading-jp text-h2 text-ink">
            何ができるかより、
            <br />
            何を勧めないかまで話せる人へ。
          </h2>
        </FadeText>

        {/* Director carries the most visual weight — the only large
            portrait on the page, deliberately not matched by the other
            two. */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <ImageReveal className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={image(director.image, 1400)}
              alt={director.imageAlt}
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className={`object-cover ${focal(director.image)}`}
            />
          </ImageReveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <p className="font-ui-en text-[11px] italic tracking-[0.2em] text-accent-text">
                {director.roleEn}
              </p>
              <span className="font-ui-en border border-line-strong px-1.5 py-0.5 text-[9px] italic tracking-[0.1em] text-ink/65">
                CONCEPT PROFILE
              </span>
            </div>
            <p className="font-heading-jp mt-2 text-[13px] text-ink/65">{director.role}</p>
            <h3 className="font-display mt-4 text-[30px] italic text-ink">{director.name}</h3>
            <p className="font-heading-jp mt-6 whitespace-pre-line text-[22px] leading-[1.7] text-ink">
              {director.thought}
            </p>
            <p className="font-body-jp mt-5 max-w-sm text-[13px] leading-loose text-ink/65">
              {director.bio}
            </p>
          </Reveal>
        </div>

        {/* The remaining two are deliberately smaller and quieter —
            editorial captions, not a matching second row of staff
            cards. */}
        <div className="mt-20 grid grid-cols-1 gap-12 border-t rule pt-14 md:grid-cols-2 md:gap-16">
          {rest.map((p) => (
            <div key={p.slug} className="flex gap-5">
              <div className="relative aspect-[3/4] w-24 flex-shrink-0 overflow-hidden md:w-28">
                <Image
                  src={image(p.image, 400)}
                  alt={p.imageAlt}
                  fill
                  sizes="112px"
                  className={`object-cover ${focal(p.image)}`}
                />
              </div>
              <div>
                <p className="font-ui-en text-[10px] italic tracking-[0.16em] text-accent-text">
                  {p.roleEn}
                </p>
                <p className="font-body-jp text-[11px] text-ink/65">{p.role}</p>
                <h4 className="font-display mt-2 text-[18px] italic text-ink">{p.name}</h4>
                <p className="font-heading-jp mt-3 whitespace-pre-line text-[14px] leading-[1.7] text-ink/80">
                  {p.thought}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body-jp mt-10 text-[11px] leading-relaxed text-ink/65">
          ※「ビューティー・キュレーター」「ケア・コーディネーター」はÉNORA内部の役割上の呼称であり、医療資格の名称ではありません。施術の医学的な適応判断は医師が行います。
        </p>

        <div className="mt-10 text-center">
          <Link
            href="/team"
            className="text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 hover:decoration-accent"
          >
            チームをすべて見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
