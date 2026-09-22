"use client";

import { useState } from "react";

const explanation =
  "本サイトはWeb制作・ブランド設計のポートフォリオとして制作された架空プロジェクトです。クリニック名、人物、施術内容、数値等はコンセプト設計上のものです。";

function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:var(--color-dark)]/50 px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="max-w-sm border border-line bg-base p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-ui-en text-[11px] italic tracking-[0.2em] text-[color:var(--color-accent)]">
          Concept Project / Portfolio Study
        </p>
        <p className="mt-4 text-[14px] leading-loose text-[color:var(--color-ink)]">{explanation}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 block text-[13px] tracking-wide text-[color:var(--color-accent)] underline decoration-[color:var(--color-line)] underline-offset-8 hover:text-[color:var(--color-ink)]"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}

export function ConceptBadgeFixed() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="no-print fixed bottom-5 left-5 z-40 hidden border border-line bg-base/90 px-3 py-2 text-[10px] tracking-[0.12em] text-[color:var(--color-ink)]/60 backdrop-blur-md transition-colors hover:text-[color:var(--color-ink)] lg:block"
      >
        CONCEPT PROJECT
      </button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function ConceptBadgeInline() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-left text-[11px] tracking-[0.12em] text-[color:var(--color-ink)]/60 underline decoration-[color:var(--color-line)] underline-offset-4"
      >
        CONCEPT PROJECT — このサイトについて
      </button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
