/**
 * Treatment architecture (brief §08, restructured per V2 §29/§30).
 * Five categories, each with a fictional sample treatment — not a full
 * price menu. Each treatment is documented like a medical information
 * sheet (what it is, who may consider it, risks, aftercare) rather than
 * a marketing card, per the medical/advertising safeguard: no guaranteed
 * results, no fabricated cases, no specific numeric cost or % claims.
 */
export type Treatment = {
  slug: string;
  name: string;
  nameEn: string;
  forConcerns: string[];
  /** One-line definition shown at the top of the detail page. */
  summary: string;
  whoMayConsiderIt: string;
  whatItIs: string;
  discussFirst: string;
  content: string;
  cost: string;
  durationFrequency: string;
  downtime: string;
  risks: string;
  aftercare: string;
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
      "ハリ・潤い・きめを、足すのではなく整える方向で見直すカテゴリーです。",
    treatments: [
      {
        slug: "quiet-hydration",
        name: "クワイエット・ハイドレーション",
        nameEn: "Quiet Hydration Program",
        forConcerns: ["texture", "dryness"],
        summary: "肌内部の水分保持力を段階的に整える、サンプルの複数回プログラムです。",
        whoMayConsiderIt:
          "季節や年齢による乾燥、肌の質感の変化が気になっている方が対象として想定されます。",
        whatItIs:
          "一度で劇的に変えるのではなく、肌が自分で潤いを保てる状態に近づけていく方向のケアです。",
        discussFirst:
          "乾燥の背景(季節性・生活習慣・他施術の影響など)を確認したうえで、必要な回数を相談します。",
        content: "水分保持を目的としたサンプル施術(架空の技術詳細)。",
        cost: "カウンセリング時に個別提示(本ページでは金額を記載していません)",
        durationFrequency: "サンプル：月1回 × 3〜4回を想定",
        downtime: "ほとんど想定していません(個人差があります)",
        risks: "一時的な赤み・乾燥感が生じる場合があります。体質により合わない可能性もあります。",
        aftercare: "保湿と紫外線対策の継続をご案内します。",
      },
    ],
  },
  {
    id: "tone-texture",
    no: "02",
    nameEn: "TONE / TEXTURE",
    nameJa: "透明感・毛穴",
    description: "透明感、毛穴、くすみ、色むらなど「肌の見え方」に関わるカテゴリーです。",
    treatments: [
      {
        slug: "clarity-reset",
        name: "クラリティ・リセット",
        nameEn: "Clarity Reset",
        forConcerns: ["clarity", "pores"],
        summary: "肌表面の透明感と毛穴の目立ちにアプローチするサンプルケアです。",
        whoMayConsiderIt: "毛穴の目立ちや顔全体のくすみが気になっている方が対象として想定されます。",
        whatItIs:
          "毛穴や色むらは複数の原因が重なることが多いため、原因の切り分けを優先するケアです。",
        discussFirst:
          "「毛穴を消す」ではなく「目立ちにくい状態を保つ」ことを目的として設計するかどうかを相談します。",
        content: "肌表面の質感にアプローチするサンプル施術(架空の技術詳細)。",
        cost: "カウンセリング時に個別提示(本ページでは金額を記載していません)",
        durationFrequency: "サンプル：4〜6週間隔での複数回想定",
        downtime: "軽い赤みが数時間〜1日程度出る場合があります(個人差)",
        risks: "施術部位の赤み・乾燥・一時的な刺激感が生じる可能性があります。",
        aftercare: "施術後数日の紫外線対策を特に丁寧にご案内します。",
      },
    ],
  },
  {
    id: "contour",
    no: "03",
    nameEn: "CONTOUR",
    nameJa: "輪郭",
    description: "フェイスラインや顔全体のバランスに関わるカテゴリーです。",
    treatments: [
      {
        slug: "line-balance",
        name: "ライン・バランス",
        nameEn: "Line Balance Program",
        forConcerns: ["contour", "eye-area"],
        summary: "フェイスラインと目元まわりの印象を整えるサンプルプログラムです。",
        whoMayConsiderIt: "輪郭のもたつきや、目元の印象の変化が気になっている方が対象として想定されます。",
        whatItIs:
          "「削る・入れる」ではなく、骨格・表情筋・生活習慣に合わせて整える方向のケアです。",
        discussFirst: "左右差や表情筋の使い方の癖を確認し、変化を望まない選択肢も含めて相談します。",
        content: "個別カウンセリング後にプラン化するサンプル施術(架空の技術詳細)。",
        cost: "カウンセリング時に個別提示(本ページでは金額を記載していません)",
        durationFrequency: "サンプル：個別カウンセリング後にプラン化",
        downtime: "施術内容により異なるため、カウンセリング時に個別に説明します。",
        risks: "内出血・腫れ・左右差が一時的に生じる可能性があります。",
        aftercare: "施術後の経過確認のご連絡先をお伝えします。",
      },
    ],
  },
  {
    id: "preventive-care",
    no: "04",
    nameEn: "PREVENTIVE CARE",
    nameJa: "予防的ケア",
    description: "将来的なエイジングサインへの備えとして行う、予防的な位置づけのカテゴリーです。",
    treatments: [
      {
        slug: "future-facing-care",
        name: "フューチャー・フェイシング・ケア",
        nameEn: "Future-Facing Care",
        forConcerns: ["aging-signs"],
        summary: "エイジングサインが目立つ前段階から取り入れる予防的なケアです。",
        whoMayConsiderIt: "将来的な変化に備えておきたいと考えている方が対象として想定されます。",
        whatItIs: "「今すぐ必要」ではなく「将来の選択肢を広げる」という位置づけのケアです。",
        discussFirst: "年齢や状態によっては「まだ必要ない」という結論もあり得ることを前提に相談します。",
        content: "予防的な位置づけのサンプル施術(架空の技術詳細)。",
        cost: "カウンセリング時に個別提示(本ページでは金額を記載していません)",
        durationFrequency: "サンプル：3〜6ヶ月に1回のペースを想定",
        downtime: "ほとんど想定していません。",
        risks: "施術部位の一時的な赤み・腫れが生じる可能性があります。",
        aftercare: "次回タイミングの目安をご案内します。",
      },
    ],
  },
  {
    id: "body-wellness",
    no: "05",
    nameEn: "BODY / WELLNESS",
    nameJa: "身体・コンディション",
    description: "顔だけでなく、身体のコンディションが「疲れた印象」に影響していることがあります。",
    treatments: [
      {
        slug: "condition-reset",
        name: "コンディション・リセット",
        nameEn: "Condition Reset",
        forConcerns: ["tired-look"],
        summary: "巡りや姿勢など、身体側からのコンディションを整える補助的なケアです。",
        whoMayConsiderIt: "肌のケアだけでは解決しない「疲れて見える」印象が気になっている方が対象です。",
        whatItIs: "顔の施術ではなく、身体側の要因にアプローチする補助的なケアです。",
        discussFirst: "生活習慣のヒアリングを踏まえ、施術以外の提案をすることもあります。",
        content: "身体のコンディションを整えるサンプル施術(架空の技術詳細)。",
        cost: "カウンセリング時に個別提示(本ページでは金額を記載していません)",
        durationFrequency: "サンプル：個別カウンセリング後にプラン化",
        downtime: "ほとんど想定していません。",
        risks: "一時的なだるさ・違和感が生じる場合があります。",
        aftercare: "水分補給と十分な睡眠をご案内します。",
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
