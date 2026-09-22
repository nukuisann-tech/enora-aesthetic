import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, FadeText, ImageReveal } from "@/components/Reveal";
import { image } from "@/lib/images";
import { people } from "@/data/team";

export const metadata: Metadata = {
  title: "practitioner",
  description: "何ができるかより、何を勧めないかまで話せる人たち。",
};

export default function TeamPage() {
  return (
    <div className="bg-base">
      <section className="rhythm-tight border-b rule">
        <div className="frame">
          <p className="eyebrow text-[12px]">Practitioner</p>
          <FadeText delay={0.1}>
            <h1 className="font-heading-jp mt-5 text-[32px] leading-[1.5] text-ink md:text-[42px]">
              何ができるかより、
              <br />
              何を勧めないかまで話せる人へ。
            </h1>
          </FadeText>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame flex flex-col gap-20 md:gap-28">
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
                  <h2 className="font-display mt-4 text-[28px] italic text-ink">{p.name}</h2>
                  <p className="font-heading-jp mt-6 whitespace-pre-line text-[20px] leading-[1.7] text-ink">
                    {p.thought}
                  </p>
                  <p className="font-body-jp mt-5 max-w-md text-[14px] leading-loose text-ink/65">
                    {p.bio}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
