import { FadeText } from "@/components/Reveal";

export function BrandStatement() {
  return (
    <section className="rhythm-peak bg-dark text-base">
      <div className="frame flex flex-col items-center gap-14 text-center md:gap-20">
        <FadeText>
          <p
            className="font-display italic tracking-tight text-base"
            style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)", lineHeight: 1.05 }}
          >
            NOT MORE.
          </p>
        </FadeText>
        <FadeText delay={0.5}>
          <p
            className="font-display italic tracking-tight text-base"
            style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)", lineHeight: 1.05 }}
          >
            MORE CONSIDERED.
          </p>
        </FadeText>
        <FadeText delay={1}>
          <p className="font-heading-jp text-[15px] leading-loose text-metal md:text-[17px]">
            選択肢が多いことを、
            <br />
            良い美容とは考えません。
          </p>
        </FadeText>
      </div>
    </section>
  );
}
