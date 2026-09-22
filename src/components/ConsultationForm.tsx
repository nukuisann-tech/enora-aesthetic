"use client";

import { useState, type FormEvent } from "react";
import { concerns } from "@/data/concerns";

const visitOptions = ["初めて相談する", "以前に相談したことがある"];

const avoidOptions = [
  "大きな変化は避けたい",
  "長いダウンタイムは避けたい",
  "頻繁な通院は避けたい",
  "予算が不明確なのは避けたい",
  "まだ施術を決めたくない",
  "注入系は今は考えていない",
  "まず話だけ聞きたい",
];

const priorityOptions = [
  { value: "natural", label: "自然な変化", en: "Natural Result" },
  { value: "downtime", label: "ダウンタイムを抑える", en: "Minimal Downtime" },
  { value: "budget", label: "費用感を明確に", en: "Budget Clarity" },
  { value: "longterm", label: "長期的な計画", en: "Long-term Plan" },
  { value: "privacy", label: "プライバシー", en: "Privacy" },
  { value: "unsure", label: "まだ決めていない", en: "Not Sure Yet" },
];

const fieldClass =
  "w-full border-0 border-b rule bg-transparent py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent";

type Brief = {
  concernLabels: string[];
  avoid: string[];
  priorityLabel: string | null;
};

function CheckboxGroup({
  name,
  options,
}: {
  name: string;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-6">
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-2.5 text-[13.5px] text-ink/80">
          <input
            type="checkbox"
            name={name}
            value={opt.value}
            className="h-4 w-4 accent-[color:var(--color-accent)]"
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

export function ConsultationForm() {
  const [brief, setBrief] = useState<Brief | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const selectedConcerns = data.getAll("concerns") as string[];
    const concernLabels = selectedConcerns
      .map((id) => concerns.find((c) => c.id === id)?.label)
      .filter((v): v is string => Boolean(v));
    const avoid = data.getAll("avoid") as string[];
    const priorityValue = data.get("priority") as string | null;
    const priorityLabel = priorityOptions.find((p) => p.value === priorityValue)?.label ?? null;

    setBrief({ concernLabels, avoid, priorityLabel });
  }

  if (brief) {
    return (
      <div className="border-t rule py-16">
        <p className="font-ui-en text-center text-[11px] italic tracking-[0.16em] text-accent-text">
          YOUR CONSULTATION BRIEF
        </p>
        <p className="font-heading-jp mt-4 text-center text-[20px] text-ink md:text-[22px]">
          ご相談ありがとうございます。
        </p>

        <dl className="mx-auto mt-10 flex max-w-sm flex-col gap-5 border-t border-b rule py-6">
          <div>
            <dt className="font-ui-en text-[10px] tracking-[0.1em] text-ink/65">MAIN CONCERN</dt>
            <dd className="font-body-jp mt-1 text-[14px] text-ink">
              {brief.concernLabels.length > 0 ? brief.concernLabels.join(" / ") : "特になし"}
            </dd>
          </div>
          <div>
            <dt className="font-ui-en text-[10px] tracking-[0.1em] text-ink/65">AVOID</dt>
            <dd className="font-body-jp mt-1 text-[14px] text-ink">
              {brief.avoid.length > 0 ? brief.avoid.join(" / ") : "特になし"}
            </dd>
          </div>
          <div>
            <dt className="font-ui-en text-[10px] tracking-[0.1em] text-ink/65">PRIORITY</dt>
            <dd className="font-body-jp mt-1 text-[14px] text-ink">
              {brief.priorityLabel ?? "未選択"}
            </dd>
          </div>
        </dl>

        <p className="mx-auto mt-8 max-w-sm text-center text-[12.5px] leading-loose text-ink/65">
          実案件では、この内容をカウンセリング前の事前ヒアリングとして活用する想定です。
          本フォームはポートフォリオ用のデモのため、実際の送信・保存は行われません。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="border rule bg-surface px-5 py-4">
        <p className="font-ui-en text-[11px] italic tracking-[0.16em] text-accent-text">DEMO FORM</p>
        <p className="mt-1.5 text-[12px] leading-relaxed text-ink/65">
          本フォームはポートフォリオ用のデモフォームです。実際のクリニックへ送信されることはありません。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-ink/65">
            お名前 <span className="text-accent-text">必須</span>
          </span>
          <input required type="text" name="name" placeholder="山田 花子" className={fieldClass} />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-ink/65">
            メールアドレス <span className="text-accent-text">必須</span>
          </span>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-ink/65">
            電話番号 <span className="text-ink/65">任意</span>
          </span>
          <input type="tel" name="phone" placeholder="00-0000-0000" className={fieldClass} />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-ink/65">
            相談は初めてですか <span className="text-accent-text">必須</span>
          </span>
          <select required name="visitType" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              選択してください
            </option>
            {visitOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[12px] tracking-wide text-ink/65">
          気になること <span className="text-ink/65">任意・複数選択可</span>
        </span>
        <CheckboxGroup
          name="concerns"
          options={concerns.map((c) => ({ value: c.id, label: c.label }))}
        />
      </div>

      <div className="flex flex-col gap-3 border-t rule pt-8">
        <span className="text-[12px] tracking-wide text-ink/65">
          避けたいこと <span className="text-ink/65">任意・複数選択可</span>
        </span>
        <p className="text-[12px] leading-relaxed text-ink/65">
          何を選ぶかと同じくらい、何を避けたいかも大切な情報です。
        </p>
        <CheckboxGroup name="avoid" options={avoidOptions.map((v) => ({ value: v, label: v }))} />
      </div>

      <div className="flex flex-col gap-3 border-t rule pt-8">
        <span className="text-[12px] tracking-wide text-ink/65">
          今回いちばん大切にしたいこと <span className="text-ink/65">任意</span>
        </span>
        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-6">
          {priorityOptions.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2.5 text-[13.5px] text-ink/80">
              <input
                type="radio"
                name="priority"
                value={opt.value}
                className="h-4 w-4 accent-[color:var(--color-accent)]"
              />
              {opt.label}
              <span className="font-ui-en text-[10px] italic text-ink/65">{opt.en}</span>
            </label>
          ))}
        </div>
      </div>

      <label className="flex flex-col gap-2 border-t rule pt-8">
        <span className="text-[12px] tracking-wide text-ink/65">
          メッセージ <span className="text-ink/65">任意</span>
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="気になっていること、これまでの美容医療の経験など、お気軽にお書きください。"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="mt-4 flex flex-col gap-6">
        <p className="text-[12px] leading-relaxed text-ink/65">
          いただいた内容をもとに、施術を強くお勧めするようなお電話は行いません。
          まずはメールにて、ご相談内容を確認したうえでお返事いたします。
        </p>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center bg-dark px-8 py-4 text-[13px] tracking-wide text-base transition-opacity hover:opacity-90 md:w-auto"
        >
          この内容で相談する
        </button>
      </div>
    </form>
  );
}
