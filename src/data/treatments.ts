/**
 * Treatment architecture (brief §08, restructured per V2 §29/§30 and
 * V3 §05/§06/§07).
 *
 * Five categories, each with a fictional sample treatment. This is not
 * a page that tries to look medically convincing — it exists to show
 * the information architecture a real treatment page needs (who it's
 * for, what to discuss first, sample price, risks, aftercare) without
 * inventing a mechanism of action for a treatment that doesn't exist.
 * `whatItIs` and `content` describe how the treatment would be framed
 * in a consultation, not how it physiologically works — a fabricated
 * "how it works" claim would be a false medical claim in a real launch,
 * concept project or not.
 */
export type Treatment = {
  slug: string;
  name: string;
  nameEn: string;
  forConcerns: string[];
  /** One-line definition shown at the top of the detail page (OVERVIEW). */
  summary: string;
  whoMayConsiderIt: string;
  whatItIs: string;
  discussFirst: string;
  content: string;
  /** Illustrative only — see SAMPLE PRICE disclosure on the page itself. */
  samplePriceRange: string;
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
  /** Illustrative sample range shown on the Price page — concept only. */
  samplePriceRange: string;
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
    samplePriceRange: "¥22,000 – ¥38,000",
    treatments: [
      {
        slug: "quiet-hydration",
        name: "クワイエット・ハイドレーション",
        nameEn: "Quiet Hydration Program",
        forConcerns: ["texture", "dryness"],
        summary:
          "乾燥や肌の質感について相談するケースを想定した、Concept Project上のサンプルTreatmentです。",
        whoMayConsiderIt:
          "季節や年齢による乾燥、肌の質感の変化が気になっている方が対象として想定されます。",
        whatItIs:
          "特定の技術や成分の効果を示すものではなく、一度で終えず複数回にわけて経過を見ながら進める、という関わり方を示すサンプルです。",
        discussFirst:
          "乾燥の背景(季節性・生活習慣・他施術の影響など)を確認したうえで、必要な回数を相談します。",
        content: "サンプルTreatmentの内容です。実際の技術・工程はConcept Project上のプレースホルダーです。",
        samplePriceRange: "¥22,000 – ¥38,000",
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
    samplePriceRange: "¥28,000 – ¥48,000",
    treatments: [
      {
        slug: "clarity-reset",
        name: "クラリティ・リセット",
        nameEn: "Clarity Reset",
        forConcerns: ["clarity", "pores"],
        summary:
          "透明感や毛穴の見え方について相談するケースを想定した、Concept Project上のサンプルTreatmentです。",
        whoMayConsiderIt: "毛穴の目立ちや顔全体のくすみが気になっている方が対象として想定されます。",
        whatItIs:
          "「消す」ことを目的にするのではなく、原因の切り分けを優先して進める、という相談の設計を示すサンプルです。",
        discussFirst:
          "「毛穴を消す」ではなく「目立ちにくい状態を保つ」ことを目的として設計するかどうかを相談します。",
        content: "サンプルTreatmentの内容です。実際の技術・工程はConcept Project上のプレースホルダーです。",
        samplePriceRange: "¥28,000 – ¥48,000",
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
    samplePriceRange: "¥45,000 – ¥85,000",
    treatments: [
      {
        slug: "line-balance",
        name: "ライン・バランス",
        nameEn: "Line Balance Program",
        forConcerns: ["contour", "eye-area"],
        summary:
          "フェイスラインや目元の印象について相談するケースを想定した、Concept Project上のサンプルTreatmentです。",
        whoMayConsiderIt: "輪郭のもたつきや、目元の印象の変化が気になっている方が対象として想定されます。",
        whatItIs:
          "「削る・入れる」という特定の技術を前提にせず、個別カウンセリングをもとに範囲を設計する、という進め方のサンプルです。",
        discussFirst: "左右差や表情筋の使い方の癖を確認し、変化を望まない選択肢も含めて相談します。",
        content: "サンプルTreatmentの内容です。実際の技術・工程はConcept Project上のプレースホルダーです。",
        samplePriceRange: "¥45,000 – ¥85,000",
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
    samplePriceRange: "¥30,000 – ¥55,000",
    treatments: [
      {
        slug: "future-facing-care",
        name: "フューチャー・フェイシング・ケア",
        nameEn: "Future-Facing Care",
        forConcerns: ["aging-signs"],
        summary:
          "将来的なエイジングサインへの備えについて相談するケースを想定した、Concept Project上のサンプルTreatmentです。",
        whoMayConsiderIt: "将来的な変化に備えておきたいと考えている方が対象として想定されます。",
        whatItIs:
          "「今すぐ必要」ではなく「将来の選択肢を広げる」という位置づけを示す、予防的な関わり方のサンプルです。",
        discussFirst: "年齢や状態によっては「まだ必要ない」という結論もあり得ることを前提に相談します。",
        content: "サンプルTreatmentの内容です。実際の技術・工程はConcept Project上のプレースホルダーです。",
        samplePriceRange: "¥30,000 – ¥55,000",
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
    description: "顔だけでなく、身体のコンディションが印象に影響していることがあります。",
    samplePriceRange: "¥18,000 – ¥32,000",
    treatments: [
      {
        slug: "condition-reset",
        name: "コンディション・リセット",
        nameEn: "Condition Reset",
        forConcerns: ["tired-look"],
        summary:
          "身体のコンディションが印象に影響していると感じる場合に相談するケースを想定した、Concept Project上のサンプルTreatmentです。",
        whoMayConsiderIt: "肌のケアだけでは解決しない「疲れて見える」印象が気になっている方が対象です。",
        whatItIs:
          "顔の施術としてではなく、生活習慣を含めた身体側の要因を一緒に整理する、という関わり方のサンプルです。",
        discussFirst: "生活習慣のヒアリングを踏まえ、施術以外の提案をすることもあります。",
        content: "サンプルTreatmentの内容です。実際の技術・工程はConcept Project上のプレースホルダーです。",
        samplePriceRange: "¥18,000 – ¥32,000",
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
