import { FadeText, Reveal } from "@/components/Reveal";

export function PointOfView() {
  return (
    <section className="rhythm bg-base">
      <div className="frame">
        <Reveal>
          <p className="eyebrow text-[12px]">Our Point of View</p>
        </Reveal>
        <FadeText delay={0.1}>
          <h2 className="font-heading-jp mt-6 text-[34px] leading-[1.4] text-ink md:text-[46px]">
            すべてを、
            <br />
            やらない。
          </h2>
        </FadeText>
        <Reveal delay={0.2}>
          <p className="font-body-jp mt-8 max-w-xl text-[15px] leading-loose text-ink/70">
            流行っているから、施術数が多いから、という理由でメニューを増やすことをしません。
            ÉNORAが向き合うのは「あなたに何が必要で、何が不要か」という一点です。
            施術を売る前に、施術をしない理由から考えるブランドでありたいと思っています。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
