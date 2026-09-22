import { FadeText } from "@/components/Reveal";

export function PointOfView() {
  return (
    <section className="rhythm bg-base">
      <div className="canvas grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow text-[12px]">Our Point of View</p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <FadeText>
            <h2
              className="font-heading-jp text-ink"
              style={{ fontSize: "clamp(2.125rem, 5vw, 4.75rem)", lineHeight: 1.25 }}
            >
              すべてを、
              <br />
              やらない。
            </h2>
          </FadeText>
          <FadeText delay={0.15}>
            <p className="font-body-jp mt-8 max-w-md text-[14px] leading-loose text-ink/65">
              施術を売る前に、しない理由から考えるブランドでありたいと思っています。
            </p>
          </FadeText>
        </div>
      </div>
    </section>
  );
}
