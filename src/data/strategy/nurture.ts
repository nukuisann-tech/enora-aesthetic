// Decision Nurture sequence (brief §16) — a Decision Sequence, not a
// Sale Sequence. No LINE assumption; email or the client's actual CRM
// channel.
export type NurtureMessage = {
  no: string;
  title: string;
  body: string;
};

export const nurtureMessages: NurtureMessage[] = [
  { no: "01", title: "YOUR BEAUTY PRIORITIES", body: "Beauty Map完了直後の確認メッセージ。" },
  { no: "02", title: "施術名より先に、整理しておきたい3つのこと", body: "" },
  { no: "03", title: "Downtimeを生活予定から考える", body: "" },
  { no: "04", title: "価格を見るときに確認したいこと", body: "" },
  { no: "05", title: "カウンセリングで聞いておきたいこと", body: "" },
  {
    no: "06",
    title: "まだ迷っている場合",
    body: "「まだ決めなくて大丈夫です。」— Consultation CTAへ静かに接続する。",
  },
];
