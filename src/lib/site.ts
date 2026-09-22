/**
 * Brand configuration.
 * This is a fictional concept clinic built for portfolio purposes.
 * Change the values below to re-skin the entire site under a new name.
 */
export const site = {
  nameJa: "エノラ",
  nameEn: "ÉNORA AESTHETIC",
  shortEn: "ÉNORA",
  tagline: "美しさは、足すより選ぶ。",
  taglineEn: "NOT MORE. MORE CONSIDERED.",
  concept: "SELECTIVE AESTHETICS",
  url: "https://enora-aesthetic.example.com",
  // Used as the site-wide meta description, OGP, and Twitter card copy —
  // the one place search results and social link previews show text
  // without a page render, so "架空の" can't be left to the in-page
  // Concept Project badge alone (brief V4 §22: don't let metadata imply
  // a real clinic).
  description:
    "ÉNORA AESTHETICは、Web制作ポートフォリオのために制作された架空の美容医療クリニックのConcept Projectです。施術の数ではなく「何をしないか」まで一緒に選ぶ、選択制のブランド体験を検証しています。",
  email: "concierge@enora-aesthetic.example.com",
  areaLabel: "Urban Japan — Concept Project",
  social: {
    instagram: "https://instagram.com/example",
  },
} as const;

export const isConceptProject = true;
