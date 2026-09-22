import Image from "next/image";
import Link from "next/link";
import { ImageReveal, Reveal, FadeText } from "@/components/Reveal";
import { image } from "@/lib/images";
import { people } from "@/data/team";

export function PeopleSection() {
  return (
    <section className="rhythm border-t rule bg-base">
      <div className="frame">
        <FadeText>
          <h2 className="font-heading-jp text-[28px] leading-[1.5] text-ink md:text-[36px]">
            何ができるかより、
            <br />
            何を勧めないかまで話せる人へ。
          </h2>
        </FadeText>

        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {people.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={p.slug}
                className={`grid grid-cols-1 items-center gap-8 md:grid-cols-[0.8fr_1fr] md:gap-16 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ImageReveal className="relative aspect-[4/5] w-full max-w-sm overflow-hidden">
                  <Image
                    src={image(p.image, 1000)}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover"
                  />
                </ImageReveal>
                <Reveal delay={0.1}>
                  <p className="font-ui-en text-[11px] italic tracking-[0.2em] text-accent">
                    {p.roleEn}
                  </p>
                  <p className="font-heading-jp mt-2 text-[13px] text-ink/60">{p.role}</p>
                  <h3 className="font-display mt-4 text-[26px] italic text-ink">{p.name}</h3>
                  <p className="font-heading-jp mt-6 whitespace-pre-line text-[19px] leading-[1.7] text-ink">
                    {p.thought}
                  </p>
                  <p className="font-body-jp mt-5 max-w-sm text-[13px] leading-loose text-ink/60">
                    {p.bio}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/team"
            className="text-[13px] tracking-wide text-ink underline decoration-line underline-offset-8 hover:decoration-accent"
          >
            practitionerをすべて見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
