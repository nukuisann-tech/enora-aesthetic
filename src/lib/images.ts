/**
 * Curated stand-in photography (Unsplash) used across the concept site.
 * All ids were verified reachable before use. Replace with commissioned
 * photography before any real-world use.
 *
 * Ratio target (brief §13): Beauty/Human 45% · Skin/Detail 20% ·
 * Clinic Interior 20% · Object/Material 15%.
 */
function unsplash(id: string, w: number) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

export type Img = {
  id: string;
  alt: string;
  category: "human" | "detail" | "interior" | "material";
};

const raw = {
  // Beauty / Human
  mirrorYoung: "1758272421224-551ea3145d4a",
  consultationRoom: "1758691461957-474a7686e388",

  // Skin / Detail
  skinDetail: "1710580889701-9fa8f2cd5927",
  handDetail: "1737289673854-b07162d8e93c",
  eyeDetail: "1542833807-ad5af0977050",

  // Clinic Interior
  interiorRoom: "1559965317-a430324b6780",
  interiorHallway: "1558180617-6b512e7f4172",
  interiorLobby: "1758448721205-8465cebc26af",

  // Object / Material
  curtainLight: "1780155968749-2b45bcd44884",
} as const;

export type ImageKey = keyof typeof raw;

export function image(key: ImageKey, w = 1600): string {
  return unsplash(raw[key], w);
}

export const heroImage = {
  key: "mirrorYoung" as ImageKey,
  alt: "自然光の入る鏡の前で、静かに自分と向き合う女性",
};
