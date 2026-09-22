import { Reveal, FadeText, ImageReveal } from "@/components/Reveal";
import { StrategyNote } from "./StrategyNote";

type Screen = {
  no: string;
  kicker: string;
  question: string;
  kind: "multi" | "single" | "result" | "brief";
  options?: string[];
  result?: { label: string; value: string }[];
};

const screens: Screen[] = [
  {
    no: "01",
    kicker: "Screen 01",
    question: "WHAT CONCERNS YOU?",
    kind: "multi",
    options: ["肌の質感", "透明感", "毛穴", "フェイスライン", "目元"],
  },
  {
    no: "02",
    kicker: "Screen 02",
    question: "WHAT DO YOU WANT TO AVOID?",
    kind: "multi",
    options: ["大きな変化", "長いダウンタイム", "頻繁な通院"],
  },
  {
    no: "03",
    kicker: "Screen 03",
    question: "WHAT MATTERS MOST?",
    kind: "single",
    options: ["Natural Result", "Minimal Downtime", "Budget Clarity"],
  },
  {
    no: "04",
    kicker: "Screen 04",
    question: "YOUR BEAUTY PRIORITIES",
    kind: "result",
    result: [
      { label: "01", value: "Natural Result" },
      { label: "02", value: "Minimal Downtime" },
      { label: "03", value: "Price Clarity" },
    ],
  },
  {
    no: "05",
    kicker: "Screen 05",
    question: "YOUR CONSULTATION BRIEF",
    kind: "brief",
    result: [
      { label: "MAIN CONCERN", value: "肌の質感" },
      { label: "AVOID", value: "長いダウンタイム" },
      { label: "PRIORITY", value: "Natural Result" },
    ],
  },
];

function ScreenCard({ screen, delay }: { screen: Screen; delay: number }) {
  return (
    <ImageReveal delay={delay} className="w-[240px] flex-shrink-0 md:w-[260px]">
      <div className="flex h-[340px] flex-col border border-line-strong bg-base p-5 md:h-[360px]">
        <div className="flex items-center justify-between">
          <span className="font-ui-en text-[9px] italic tracking-[0.1em] text-ink/40">
            {screen.kicker}
          </span>
          <div className="flex gap-1">
            {screens.map((s) => (
              <span
                key={s.no}
                className={`h-1 w-1 rounded-full ${
                  s.no === screen.no ? "bg-accent-text" : "bg-line-strong"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="font-heading-jp mt-6 text-[16px] leading-[1.5] text-ink">{screen.question}</p>

        <div className="mt-6 flex flex-1 flex-col justify-end gap-2">
          {screen.kind === "multi" &&
            screen.options?.map((o, i) => (
              <div
                key={o}
                className={`flex items-center gap-2 border px-3 py-2 text-[11.5px] ${
                  i < 2 ? "border-accent-text text-ink" : "border-line text-ink/55"
                }`}
              >
                <span
                  className={`h-3 w-3 flex-shrink-0 border ${
                    i < 2 ? "border-accent-text bg-accent-text" : "border-line-strong"
                  }`}
                />
                {o}
              </div>
            ))}

          {screen.kind === "single" &&
            screen.options?.map((o, i) => (
              <div
                key={o}
                className={`flex items-center gap-2 border px-3 py-2 text-[11.5px] ${
                  i === 0 ? "border-accent-text text-ink" : "border-line text-ink/55"
                }`}
              >
                <span
                  className={`h-3 w-3 flex-shrink-0 rounded-full border ${
                    i === 0 ? "border-accent-text bg-accent-text" : "border-line-strong"
                  }`}
                />
                {o}
              </div>
            ))}

          {(screen.kind === "result" || screen.kind === "brief") &&
            screen.result?.map((r) => (
              <div key={r.label} className="border-b border-line py-1.5">
                <p className="font-ui-en text-[9px] tracking-[0.08em] text-ink/40">{r.label}</p>
                <p className="font-body-jp text-[13px] text-ink">{r.value}</p>
              </div>
            ))}
        </div>
      </div>
    </ImageReveal>
  );
}

export function BeautyMapMockup() {
  return (
    <div id="beauty-map" className="rhythm-peak scroll-mt-24 border-t border-line bg-surface">
      <div className="canvas">
        <FadeText>
          <p className="eyebrow text-[12px]">Flagship Growth Asset</p>
        </FadeText>
        <Reveal delay={0.06}>
          <h2 className="font-display mt-4 text-[32px] italic text-ink md:text-[44px]">
            Selective Beauty Map
          </h2>
          <p className="font-heading-jp mt-2 text-[16px] leading-[1.7] text-ink/80 md:text-[18px]">
            施術を選ぶ前に、自分の基準を整理する。
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-4 max-w-lg">
          <p className="font-body-jp text-[13.5px] leading-loose text-ink/65">
            これはTreatment診断ではない。「あなたにおすすめの施術は◯◯」という結果は絶対に出さない。5つの質問を通じて、本人の考えを整理するだけのツールとして機能する。
          </p>
        </Reveal>
      </div>

      <div className="canvas mt-14 overflow-x-auto">
        <div className="flex w-max gap-5">
          {screens.map((s, i) => (
            <ScreenCard key={s.no} screen={s} delay={0.04 * i} />
          ))}
        </div>
      </div>

      <div className="canvas mt-12 grid grid-cols-1 gap-8 border-t border-line pt-10 md:grid-cols-2">
        <Reveal>
          <p className="font-ui-en text-[11px] tracking-[0.1em] text-ink/45">NOT A DIAGNOSIS</p>
          <p className="font-body-jp mt-2 text-[13px] leading-relaxed text-ink/70">
            医学的診断・Treatment推薦・適応判断は行わない。役割はSelf-Organization Toolであり、最終判断はMedical
            Professionalが行う。この位置づけはツール上にも明記する。
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <StrategyNote>
            結果画面の直後は、Recommended Reading・Questions to Ask・Consultation Briefへ接続し、単一のTreatmentへ誘導しない。
          </StrategyNote>
        </Reveal>
      </div>
    </div>
  );
}
