import type { ImageKey } from "@/lib/images";

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  pullQuote: string;
  image: ImageKey;
  imageAlt: string;
  body: string[];
  /**
   * Journal is decision support, not a blog — every article points back
   * into the Concern → Treatment → Consultation journey rather than
   * dead-ending. Either or both may be omitted when not relevant.
   */
  relatedConcernId?: string;
  relatedCategoryId?: string;
};

export const articles: Article[] = [
  {
    slug: "how-to-choose-only-what-you-need",
    category: "Before Consultation",
    title: "本当に必要なものだけを選ぶには",
    excerpt:
      "情報が多いほど、選択は難しくなります。ÉNORAのカウンセリングが最初に時間をかける理由。",
    pullQuote: "「気になること」の数だけ、施術が必要なわけではありません。",
    image: "mirrorYoung",
    imageAlt: "自然光の入る鏡の前で自分と向き合う女性",
    relatedConcernId: "texture",
    relatedCategoryId: "skin-quality",
    body: [
      "SNSやクリニックの発信を見れば見るほど、選択肢は増えていきます。増えた選択肢は、安心よりも「これも足りていないのでは」という不安を連れてくることがあります。",
      "ÉNORAのカウンセリングでは、最初に施術の説明をしません。代わりに、鏡を見たときに気になる瞬間、写真に写ったときに気になる部分、日常のどんな場面で気になるかを聞くことから始めます。",
      "気になることを並べたうえで、そのすべてに対処する必要はない、というのが私たちの立場です。優先順位をつけ、今回は扱わないものを明確にすることも、カウンセリングの成果のひとつだと考えています。",
      "「何をするか」を決める前に「何をしないか」を決める。遠回りに見えて、それが結果的にいちばん納得度の高い選択につながります。",
    ],
  },
  {
    slug: "the-word-natural",
    category: "Philosophy",
    title: "「ナチュラル」という言葉の使われすぎについて",
    excerpt:
      "美容医療の説明でよく使われる「自然な仕上がり」。その言葉が指しているものは、実はひとりひとり違います。",
    pullQuote: "自然に見えることと、何もしていないことは、同じではありません。",
    image: "skinDetail",
    imageAlt: "肌の質感を写したクローズアップ",
    relatedConcernId: "clarity",
    relatedCategoryId: "tone-texture",
    body: [
      "「自然な仕上がりにしてください」というご要望は、カウンセリングで最も多く聞く言葉のひとつです。同時に、最も解釈の幅が広い言葉でもあります。",
      "ある人にとっての自然は「変化に気づかれないこと」であり、別の人にとっては「以前より整って見えるが、施術をしたとは分からないこと」です。この違いを確認せずに施術を進めると、技術的には成功していても、本人の満足にはつながりません。",
      "ÉNORAでは「自然」という言葉が出た時点で、それが具体的にどの状態を指すのかを言語化することを大切にしています。抽象的な言葉のまま進めないというのは、地味に見えて、仕上がりの納得度に直結する工程です。",
    ],
  },
  {
    slug: "not-doing-is-also-a-choice",
    category: "Philosophy",
    title: "「しない」という選択について",
    excerpt:
      "施術を受けないという結論も、カウンセリングの正しい着地点のひとつです。",
    pullQuote: "今は必要ない、という説明にも、時間をかける価値があります。",
    image: "interiorRoom",
    imageAlt: "自然光が差し込む、静かで簡素な室内",
    relatedConcernId: "aging-signs",
    relatedCategoryId: "preventive-care",
    body: [
      "美容医療のカウンセリングは、施術の提案で終わることが前提のように語られがちです。しかし実際には「今回は様子を見ましょう」という結論が、その人にとって最も適切な場合があります。",
      "エイジングサインへの予防的なケアのように、時期が早すぎれば効果を実感しにくく、遅すぎれば選択肢が狭まる、というものもあります。適切なタイミングを見極めることも、専門性のうちだと考えています。",
      "「しない」という提案は、売上にはつながりません。それでも私たちがこの選択肢を残しているのは、次に相談したいと思ってもらえるかどうかが、一度の施術より長く関係を左右すると考えているからです。",
    ],
  },
  {
    slug: "downtime-and-daily-life",
    category: "Practical",
    title: "ダウンタイムと、日常の付き合い方",
    excerpt:
      "施術そのものより、施術後の数日をどう過ごすかで印象が変わることがあります。",
    pullQuote: "ダウンタイムの説明は、施術の説明と同じくらい重要です。",
    image: "handDetail",
    imageAlt: "手のひらのクローズアップ、静かな質感",
    relatedConcernId: "tired-look",
    relatedCategoryId: "body-wellness",
    body: [
      "「効果」の説明に比べて、「その後どう過ごすか」の説明は後回しにされがちです。ですが、仕事や家庭の予定との兼ね合いを事前に把握できているかどうかで、施術後の満足度は大きく変わります。",
      "ÉNORAでは、施術の提案と同時に、想定されるダウンタイムの目安と、その期間中の過ごし方を必ず説明します。「思っていたより長引いた」という感覚は、多くの場合、事前の情報不足から生まれます。",
      "予定が読みにくい時期には、ダウンタイムの少ないケアを優先する。逆算して施術を選ぶという視点も、カウンセリングの中でお伝えしています。",
    ],
  },
];

export function findArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
