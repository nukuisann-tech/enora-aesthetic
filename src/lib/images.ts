/**
 * Curated stand-in photography (Unsplash) used across the concept site.
 * Every id was resolved from its Unsplash page, then re-verified by
 * rendering it in a browser and reviewing the actual pixels — not by
 * trusting the search result title or alt text. (An earlier pass shipped
 * two images whose auto-generated captions didn't match their content;
 * this file's ids have since been individually confirmed.)
 *
 * Each entry also carries a focal point per viewport, because in an
 * editorial layout the crop is part of the composition, not an
 * afterthought: where a photo is cropped decides where the type next to
 * it can sit.
 */
function unsplash(id: string, w: number) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

type Entry = {
  id: string;
  /** CSS object-position, mobile-first default. */
  mobilePosition: string;
  /** CSS object-position at md: and up. */
  desktopPosition: string;
};

const raw = {
  // Beauty / Human
  mirrorYoung: {
    id: "1758272421224-551ea3145d4a",
    mobilePosition: "66% 20%",
    desktopPosition: "70% 28%",
  },
  consultationRoom: {
    id: "1758691461957-474a7686e388",
    mobilePosition: "72% 35%",
    desktopPosition: "78% 32%",
  },

  // Skin / Detail
  skinDetail: {
    id: "1710580889701-9fa8f2cd5927",
    mobilePosition: "50% 50%",
    desktopPosition: "50% 50%",
  },
  handDetail: {
    id: "1737289673854-b07162d8e93c",
    mobilePosition: "40% 55%",
    desktopPosition: "40% 55%",
  },
  eyeDetail: {
    id: "1542833807-ad5af0977050",
    mobilePosition: "55% 60%",
    desktopPosition: "55% 60%",
  },

  // Clinic Interior
  interiorRoom: {
    id: "1559965317-a430324b6780",
    mobilePosition: "50% 40%",
    desktopPosition: "50% 40%",
  },
  interiorHallway: {
    id: "1558180617-6b512e7f4172",
    mobilePosition: "50% 55%",
    desktopPosition: "50% 55%",
  },
  interiorLobby: {
    id: "1758448721205-8465cebc26af",
    mobilePosition: "62% 50%",
    desktopPosition: "58% 45%",
  },

  // Object / Material
  // Replaced during the V3 site-wide photo-set audit (brief §16/§17):
  // the original was desaturated/black-and-white against an otherwise
  // all-color set, which stood out as a different shoot entirely on a
  // contact sheet. This one keeps the same warm, low-key window light.
  curtainLight: {
    id: "1759752784239-d54abca7da0d",
    mobilePosition: "35% 45%",
    desktopPosition: "30% 40%",
  },
} as const satisfies Record<string, Entry>;

export type ImageKey = keyof typeof raw;

export function image(key: ImageKey, w = 1600): string {
  return unsplash(raw[key].id, w);
}

/**
 * Tailwind arbitrary-value object-position classes, mobile value first
 * so it wins below md:, desktop value overriding at md: and up.
 */
export function focal(key: ImageKey): string {
  const { mobilePosition, desktopPosition } = raw[key];
  return `object-[${mobilePosition.replace(/ /g, "_")}] md:object-[${desktopPosition.replace(/ /g, "_")}]`;
}

export const heroImage = {
  key: "mirrorYoung" as ImageKey,
  alt: "自然光の入る鏡の前で、静かに自分と向き合う女性",
};
