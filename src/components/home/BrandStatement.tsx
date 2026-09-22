import { FadeText } from "@/components/Reveal";

export function BrandStatement() {
  return (
    <section className="rhythm bg-dark text-base">
      <div className="frame text-center">
        <FadeText>
          <p className="font-display text-[13vw] italic leading-[1.05] tracking-tight text-base sm:text-[9vw] md:text-[72px]">
            NOT MORE.
            <br />
            MORE CONSIDERED.
          </p>
        </FadeText>
        <FadeText delay={0.3}>
          <p className="font-body-jp mt-8 text-[13px] tracking-[0.08em] text-metal">
            ÉNORA AESTHETIC — Selective Aesthetics
          </p>
        </FadeText>
      </div>
    </section>
  );
}
