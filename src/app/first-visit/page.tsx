import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, FadeText } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "初めての方へ",
  description: "初回カウンセリングの流れと、来院前に知っておいてほしいこと。",
};

const flow = [
  { en: "Listen", ja: "聞く", body: "悩み、生活背景、これまでの美容医療の経験を伺います。" },
  { en: "Assess", ja: "確認する", body: "肌・輪郭の状態や既往歴を専門的に確認します。" },
  { en: "Discuss", ja: "話し合う", body: "選択肢と、あえて選ばない理由も含めてお話しします。" },
  { en: "Select", ja: "選ぶ", body: "必要な範囲だけをお客様ご自身が選びます。" },
  { en: "Decide", ja: "決める", body: "その場で決めなくて構いません。持ち帰ってご検討ください。" },
];

const faqs = [
  {
    q: "初回カウンセリングだけの利用はできますか？",
    a: "はい。カウンセリングのみでの終了も想定しています。「今回は様子を見る」という結論も、正しい着地点のひとつだと考えています。",
  },
  {
    q: "施術を強く勧められることはありますか？",
    a: "ありません。必要でないと判断した場合は、その理由も含めてお伝えします。",
  },
  {
    q: "どのくらいの時間がかかりますか？",
    a: "初回カウンセリングは、状態確認を含めて60分程度を想定しています。",
  },
];

export default function FirstVisitPage() {
  return (
    <div className="bg-base">
      {/* Timeline hero — the flow's stage names appear immediately as a
          quiet horizontal index under the heading, so the page opens
          already inside its own structure instead of a separate intro
          paragraph. */}
      <section className="rhythm-tight border-b rule">
        <div className="frame">
          <p className="eyebrow text-[12px]">First Visit</p>
          <FadeText delay={0.1}>
            <h1 className="font-heading-jp mt-5 text-[32px] leading-[1.5] text-ink md:text-[42px]">
              まだ、
              <br />
              何をするか決まっていなくて大丈夫です。
            </h1>
          </FadeText>
          <Reveal delay={0.2}>
            <p className="font-body-jp mt-6 max-w-lg text-[14.5px] leading-loose text-ink/70">
              初めての方は、まず「何が気になっているか」を言葉にすることから始めてください。
              施術の知識は必要ありません。
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 hidden items-center gap-3 sm:flex">
              {flow.map((s, i) => (
                <div key={s.en} className="flex items-center gap-3">
                  <span className="font-ui-en text-[11px] italic tracking-[0.1em] text-ink/40">
                    {s.en}
                  </span>
                  {i < flow.length - 1 && <span className="h-px w-6 bg-line-strong" />}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rhythm">
        <div className="frame">
          <FadeText>
            <p className="eyebrow text-[12px]">The Flow</p>
          </FadeText>
          <div className="mt-10 flex flex-col divide-y divide-line border-t border-b rule">
            {flow.map((s, i) => (
              <Reveal key={s.en} delay={0.05 * i}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 py-6 md:grid-cols-[40px_140px_1fr]">
                  <span className="font-display text-[13px] italic text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-[18px] italic text-ink">
                    {s.en}
                    <span className="font-heading-jp ml-2 text-[13px] not-italic text-ink/60">
                      {s.ja}
                    </span>
                  </p>
                  <p className="font-body-jp col-span-2 text-[13.5px] leading-relaxed text-ink/60 md:col-span-1">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rhythm border-t rule bg-surface">
        <div className="frame">
          <FadeText>
            <p className="eyebrow text-[12px]">よくある質問</p>
          </FadeText>
          <div className="mt-10 flex flex-col gap-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={0.06 * i}>
                <h2 className="font-heading-jp text-[16px] text-ink">{f.q}</h2>
                <p className="font-body-jp mt-3 text-[13.5px] leading-relaxed text-ink/65">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rhythm-tight text-center">
        <div className="frame">
          <Link
            href="/consultation"
            className="inline-flex items-center border border-ink bg-ink px-7 py-3.5 text-[13px] tracking-wide text-base transition-colors hover:bg-transparent hover:text-ink"
          >
            カウンセリングを予約する
          </Link>
        </div>
      </section>
    </div>
  );
}
