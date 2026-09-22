"use client";

import { useState, type FormEvent } from "react";
import { concerns } from "@/data/concerns";

const visitOptions = ["初めて相談する", "以前に相談したことがある"];

const fieldClass =
  "w-full border-0 border-b rule bg-transparent py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-accent";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t rule py-16 text-center">
        <p className="font-ui-en text-[11px] italic tracking-[0.16em] text-accent">
          DEMO COMPLETE
        </p>
        <p className="font-heading-jp mt-4 text-[22px] text-ink md:text-[24px]">
          ご相談ありがとうございます。
        </p>
        <p className="mt-5 text-[14px] leading-loose text-ink/60">
          本フォームはポートフォリオ用のデモのため、実際の送信・保存は行われません。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="border rule bg-surface px-5 py-4">
        <p className="font-ui-en text-[11px] italic tracking-[0.16em] text-accent">DEMO FORM</p>
        <p className="mt-1.5 text-[12px] leading-relaxed text-ink/60">
          本フォームはポートフォリオ用のデモフォームです。実際のクリニックへ送信されることはありません。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-ink/55">
            お名前 <span className="text-accent">必須</span>
          </span>
          <input required type="text" name="name" placeholder="山田 花子" className={fieldClass} />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-ink/55">
            メールアドレス <span className="text-accent">必須</span>
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
          <span className="text-[12px] tracking-wide text-ink/55">
            電話番号 <span className="text-ink/40">任意</span>
          </span>
          <input type="tel" name="phone" placeholder="00-0000-0000" className={fieldClass} />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-ink/55">
            相談は初めてですか <span className="text-accent">必須</span>
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

      <label className="flex flex-col gap-2">
        <span className="text-[12px] tracking-wide text-ink/55">
          気になること <span className="text-ink/40">任意・複数選択可</span>
        </span>
        <select multiple name="concerns" className={`${fieldClass} h-32`}>
          {concerns.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-[12px] tracking-wide text-ink/55">
          メッセージ <span className="text-ink/40">任意</span>
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="気になっていること、これまでの美容医療の経験など、お気軽にお書きください。"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="mt-4 flex flex-col gap-6">
        <p className="text-[12px] leading-relaxed text-ink/55">
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
