/**
 * Treatment architecture (brief §08).
 * Five categories, each with fictional sample treatments — not a full
 * price menu. The goal is Concern → Care Direction → Treatment →
 * Consultation, not a catalogue of procedure names.
 */
export type Treatment = {
  slug: string;
  name: string;
  nameEn: string;
  forConcerns: string[];
  summary: string;
  careDirection: string;
  sessionNote: string;
  downtimeNote: string;
  consultationNote: string;
};

export type TreatmentCategory = {
  id: string;
  no: string;
  nameEn: string;
  nameJa: string;
  description: string;
  treatments: Treatment[];
};

export const categories: TreatmentCategory[] = [
  {
    id: "skin-quality",
    no: "01",
    nameEn: "SKIN QUALITY",
    nameJa: "肌質",
    description:
      "ハリ・潤い・きめを、足すのではなく整える方向で見直すカテゴリーです。乾燥や質感の変化は、多くの場合いくつかの要因が重なっています。",
    treatments: [
      {
        slug: "quiet-hydration",
        name: "クワイエット・ハイドレーション",
        nameEn: "Quiet Hydration Program",
        forConcerns: ["texture", "dryness"],
        summary:
          "肌内部の水分保持力を、複数回にわけて段階的に整えるサンプルプログラムです。",
        careDirection:
          "一度で劇的に変えるのではなく、肌が自分で潤いを保てる状態に近づけていく方向性です。",
        sessionNote: "サンプル：月1回 × 3〜4回を想定",
        downtimeNote: "ダウンタイムはほとんど想定していません",
        consultationNote:
          "乾燥の背景（季節性・生活習慣・他施術の影響など）を確認してから提案します",
      },
    ],
  },
  {
    id: "tone-texture",
    no: "02",
    nameEn: "TONE / TEXTURE",
    nameJa: "透明感・毛穴",
    description:
      "透明感、毛穴、くすみ、色むらなど「肌の見え方」に関わるカテゴリーです。何が原因で見え方が変わっているのかを、まず一緒に整理します。",
    treatments: [
      {
        slug: "clarity-reset",
        name: "クラリティ・リセット",
        nameEn: "Clarity Reset",
        forConcerns: ["clarity", "pores"],
        summary:
          "肌表面の透明感と毛穴の目立ちにアプローチするサンプルケアです。",
        careDirection:
          "毛穴や色むらは複数原因が重なることが多いため、原因の切り分けを優先します。",
        sessionNote: "サンプル：4〜6週間隔での複数回想定",
        downtimeNote: "軽い赤みが数時間〜1日程度出る場合があります(個人差)",
        consultationNote:
          "「毛穴を消す」ではなく「目立ちにくい状態を保つ」を目的として設計します",
      },
    ],
  },
  {
    id: "contour",
    no: "03",
    nameEn: "CONTOUR",
    nameJa: "輪郭",
    description:
      "フェイスラインや顔全体のバランスに関わるカテゴリーです。「削る・入れる」ではなく、その人の骨格・表情筋・生活習慣に合わせた整え方を優先します。",
    treatments: [
      {
        slug: "line-balance",
        name: "ライン・バランス",
        nameEn: "Line Balance Program",
        forConcerns: ["contour", "eye-area"],
        summary: "フェイスラインと目元まわりの印象を整えるサンプルプログラムです。",
        careDirection:
          "左右差や表情筋の使い方の癖を確認したうえで、必要な範囲だけを設計します。",
        sessionNote: "サンプル：個別カウンセリング後にプラン化",
        downtimeNote: "施術内容により異なるため、カウンセリング時に個別説明します",
        consultationNote:
          "「変化の少なさ」も選択肢として提示します。やらない判断も含めて相談してください",
      },
    ],
  },
  {
    id: "preventive-care",
    no: "04",
    nameEn: "PREVENTIVE CARE",
    nameJa: "予防的ケア",
    description:
      "将来的なエイジングサインへの備えとして行う、予防的な位置づけのカテゴリーです。今ある悩みの解決というより、変化を緩やかにする方向のケアです。",
    treatments: [
      {
        slug: "future-facing-care",
        name: "フューチャー・フェイシング・ケア",
        nameEn: "Future-Facing Care",
        forConcerns: ["aging-signs"],
        summary: "エイジングサインが目立つ前段階から取り入れる予防的なケアです。",
        careDirection:
          "「今すぐ必要」ではなく「将来の選択肢を広げる」という位置づけで案内します。",
        sessionNote: "サンプル：3〜6ヶ月に1回のペースを想定",
        downtimeNote: "ダウンタイムはほとんど想定していません",
        consultationNote:
          "年齢や状態によっては「まだ必要ない」という結論もあり得ます",
      },
    ],
  },
  {
    id: "body-wellness",
    no: "05",
    nameEn: "BODY / WELLNESS",
    nameJa: "身体・コンディション",
    description:
      "顔だけでなく、身体のコンディションが「疲れた印象」に影響していることがあります。睡眠・巡り・姿勢など、補助的なケアを扱うカテゴリーです。",
    treatments: [
      {
        slug: "condition-reset",
        name: "コンディション・リセット",
        nameEn: "Condition Reset",
        forConcerns: ["tired-look"],
        summary: "巡りや姿勢など、身体側からのコンディションを整える補助的なケアです。",
        careDirection:
          "肌のケアだけで解決しない「疲れて見える」印象は、身体側の要因が関わることがあります。",
        sessionNote: "サンプル：個別カウンセリング後にプラン化",
        downtimeNote: "ダウンタイムはほとんど想定していません",
        consultationNote:
          "生活習慣のヒアリングを踏まえ、施術以外の提案をすることもあります",
      },
    ],
  },
];

export const allTreatments: Treatment[] = categories.flatMap((c) => c.treatments);

export function findTreatment(slug: string) {
  return allTreatments.find((t) => t.slug === slug);
}

export function findCategory(id: string) {
  return categories.find((c) => c.id === id);
}
