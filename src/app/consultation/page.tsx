import type { Metadata } from "next";
import { FadeText, Reveal } from "@/components/Reveal";
import { ConsultationForm } from "@/components/ConsultationForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "相談する",
  description: "カウンセリングのご予約・ご相談はこちらから。",
};

export default function ConsultationPage() {
  return (
    <div className="bg-base">
      <section className="rhythm-tight border-b rule">
        <div className="frame">
          <p className="eyebrow text-[12px]">Consultation</p>
          <FadeText delay={0.1}>
            <h1 className="font-heading-jp mt-5 text-[32px] leading-[1.5] text-ink md:text-[42px]">
              相談する
            </h1>
          </FadeText>
          <Reveal delay={0.2}>
            <p className="font-body-jp mt-6 max-w-lg text-[14.5px] leading-loose text-ink/70">
              施術の予約ではなく、まずはご相談として構いません。
              「今回は様子を見る」という結論も歓迎しています。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="flex flex-col gap-8">
              <div>
                <p className="eyebrow text-[12px]">Contact</p>
                <p className="font-body-jp mt-3 text-[14px] text-ink/70">{site.email}</p>
              </div>
              <div>
                <p className="eyebrow text-[12px]">Area</p>
                <p className="font-body-jp mt-3 text-[14px] text-ink/70">{site.areaLabel}</p>
              </div>
              <div className="border-t rule pt-6">
                <p className="font-body-jp text-[13px] leading-loose text-ink/55">
                  ÉNORA AESTHETICは、ポートフォリオ用に制作された架空のコンセプトプロジェクトです。
                  実在のクリニックではありません。
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ConsultationForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
