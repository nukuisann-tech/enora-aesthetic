/**
 * Unified disclosure for any page that shows treatment or price
 * information (brief V3 §27) — one small, consistent component instead
 * of a different ad-hoc disclaimer paragraph per page.
 */
export function ConceptMedicalInfo() {
  return (
    <div className="border-t rule pt-6 text-center">
      <p className="font-ui-en text-[10px] italic tracking-[0.14em] text-ink/65">
        CONCEPT MEDICAL INFORMATION
      </p>
      <p className="font-body-jp mx-auto mt-3 max-w-xl text-[12px] leading-relaxed text-ink/65">
        本ページはConcept Projectであり、掲載している施術・料金は架空のサンプルです。実案件では、これらの情報は医師監修のもとで作成し、施術内容に応じた最新の医療広告関連ガイドライン等を確認したうえで制作する想定です。
      </p>
    </div>
  );
}
