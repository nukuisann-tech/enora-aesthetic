import { Reveal, FadeText } from "@/components/Reveal";

export function PartDivider({
  id,
  no,
  label,
  thesis,
}: {
  id: string;
  no: string;
  label: string;
  thesis?: string;
}) {
  return (
    <div id={id} className="canvas scroll-mt-24 pt-16 md:pt-20">
      <Reveal className="flex items-baseline gap-5 border-t border-line-strong pt-6">
        <span className="font-display text-[36px] italic leading-none text-accent-text md:text-[48px]">
          {no}
        </span>
        <span className="font-ui-en text-[13px] tracking-[0.22em] text-ink/65 md:text-[14px]">
          {label.toUpperCase()}
        </span>
      </Reveal>
      {thesis && (
        <FadeText>
          <p className="font-heading-jp mt-4 max-w-md text-[14.5px] leading-[1.8] text-ink/60">
            {thesis}
          </p>
        </FadeText>
      )}
    </div>
  );
}
