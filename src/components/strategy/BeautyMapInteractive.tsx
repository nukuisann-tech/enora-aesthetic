"use client";

import { useState } from "react";
import { Reveal, FadeText } from "@/components/Reveal";
import { beautyMapQuestions, priorityGuides } from "@/data/strategy/beautyMap";

type Answers = { concern: string[]; avoid: string[]; priority: string };

const emptyAnswers: Answers = { concern: [], avoid: [], priority: "" };

// A real prototype (brief §14/§15) — every click updates React state only;
// nothing is sent anywhere, nothing is stored past a reload or a
// deliberate Reset. That is stated on screen, not just in this comment.
export function BeautyMapInteractive() {
  const [step, setStep] = useState(0); // 0..2 = questions, 3 = result
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);

  const question = beautyMapQuestions[step];
  const isResult = step >= beautyMapQuestions.length;

  function toggleMulti(id: "concern" | "avoid", option: string) {
    setAnswers((prev) => {
      const current = prev[id];
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [id]: next };
    });
  }

  function selectSingle(option: string) {
    setAnswers((prev) => ({ ...prev, priority: option }));
  }

  const canAdvance = question
    ? question.kind === "multi"
      ? answers[question.id as "concern" | "avoid"].length > 0
      : answers.priority !== ""
    : true;

  function reset() {
    setAnswers(emptyAnswers);
    setStep(0);
  }

  const guide = answers.priority ? priorityGuides[answers.priority] : undefined;

  return (
    <div id="beauty-map" className="rhythm-peak scroll-mt-24 bg-surface">
      <div className="canvas">
        <FadeText>
          <p className="eyebrow text-[12px]">実際に操作できるDemo</p>
        </FadeText>
        <Reveal delay={0.06} className="mt-4 max-w-lg">
          <p className="font-body-jp text-[13px] leading-loose text-ink/60">
            施術の診断ではない。おすすめの施術を提示することは絶対にしない。送信・保存は一切行われない。
          </p>
        </Reveal>
      </div>

      <div className="canvas mt-14">
        <div className="mx-auto flex w-full max-w-lg flex-col border border-line-strong bg-base p-6 md:p-10">
          <div className="flex items-center justify-between">
            <span className="font-ui-en text-[9px] italic tracking-[0.1em] text-ink/40">
              {isResult ? "Result" : `Screen ${question.no}`}
            </span>
            <div className="flex gap-1.5">
              {[...beautyMapQuestions.map((q) => q.no), "R"].map((no, i) => (
                <span
                  key={no}
                  className={`h-1 w-1 rounded-full ${
                    i === step || (isResult && i === beautyMapQuestions.length)
                      ? "bg-accent-text"
                      : "bg-line-strong"
                  }`}
                />
              ))}
            </div>
          </div>

          {!isResult && question && (
            <div>
              <p className="font-heading-jp mt-6 text-[17px] leading-[1.5] text-ink md:text-[19px]">
                {question.question}
              </p>

              <div className="mt-6 flex flex-col gap-2">
                {question.options.map((o) => {
                  const selected =
                    question.kind === "multi"
                      ? answers[question.id as "concern" | "avoid"].includes(o)
                      : answers.priority === o;
                  return (
                    <button
                      key={o}
                      type="button"
                      onClick={() =>
                        question.kind === "multi"
                          ? toggleMulti(question.id as "concern" | "avoid", o)
                          : selectSingle(o)
                      }
                      className={`flex items-center gap-3 border px-4 py-3 text-left text-[13px] transition-colors ${
                        selected ? "border-accent-text text-ink" : "border-line text-ink/60 hover:border-line-strong"
                      }`}
                    >
                      <span
                        className={`h-3.5 w-3.5 flex-shrink-0 border ${
                          question.kind === "multi" ? "" : "rounded-full"
                        } ${selected ? "border-accent-text bg-accent-text" : "border-line-strong"}`}
                      />
                      {o}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="text-[12px] tracking-[0.02em] text-ink/45 underline decoration-line underline-offset-4 disabled:opacity-0"
                >
                  ← 戻る
                </button>
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canAdvance}
                  className="border border-ink px-5 py-2 text-[12px] tracking-[0.04em] text-ink disabled:border-line disabled:text-ink/30"
                >
                  次へ →
                </button>
              </div>
            </div>
          )}

          {isResult && guide && (
            <div>
              <p className="font-heading-jp mt-6 text-[17px] leading-[1.5] text-ink md:text-[19px]">
                YOUR CONSULTATION BRIEF
              </p>

              <div className="mt-6 flex flex-col divide-y divide-line border-t border-b border-line">
                <div className="py-3">
                  <p className="text-[10px] tracking-[0.04em] text-ink/40">気になること</p>
                  <p className="font-body-jp mt-1 text-[13px] text-ink">
                    {answers.concern.join(" / ") || "—"}
                  </p>
                </div>
                <div className="py-3">
                  <p className="text-[10px] tracking-[0.04em] text-ink/40">避けたいこと</p>
                  <p className="font-body-jp mt-1 text-[13px] text-ink">
                    {answers.avoid.join(" / ") || "—"}
                  </p>
                </div>
                <div className="py-3">
                  <p className="text-[10px] tracking-[0.04em] text-ink/40">大切にしたいこと</p>
                  <p className="font-body-jp mt-1 text-[13px] text-ink">{answers.priority}</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[10.5px] tracking-[0.04em] text-accent-text">
                  相談で聞きたいこと
                </p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {guide.questionsToAsk.map((q) => (
                    <li key={q} className="text-[12.5px] leading-relaxed text-ink/75">
                      — {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-[10.5px] tracking-[0.04em] text-ink/45">
                  相談前に準備すること
                </p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {guide.prepareForConsultation.map((p) => (
                    <li key={p} className="text-[12.5px] leading-relaxed text-ink/75">
                      — {p}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={reset}
                className="mt-10 self-start border border-line-strong px-5 py-2 text-[12px] tracking-[0.04em] text-ink/70 hover:border-ink hover:text-ink"
              >
                最初からやり直す
              </button>
            </div>
          )}
        </div>

        <p className="font-ui-en mx-auto mt-4 max-w-lg text-center text-[10px] italic text-ink/40">
          DEMO ONLY — 入力内容はこのブラウザ上にのみ存在し、送信・保存されません。
        </p>
      </div>
    </div>
  );
}
