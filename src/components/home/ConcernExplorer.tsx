import Link from "next/link";
import { Reveal, FadeText } from "@/components/Reveal";
import { concerns } from "@/data/concerns";

export function ConcernExplorer() {
  return (
    <section className="rhythm border-t rule bg-surface">
      <div className="frame">
        <FadeText>
          <h2 className="font-heading-jp text-[30px] leading-[1.4] text-ink md:text-[40px]">
            施術名が分からなくても、
            <br />
            大丈夫です。
          </h2>
        </FadeText>
        <Reveal delay={0.1}>
          <p className="font-body-jp mt-6 max-w-lg text-[14.5px] leading-loose text-ink/70">
            「何を受けるべきか」ではなく、「何が気になるか」から始めてください。
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {concerns.map((c, i) => (
            <Reveal key={c.id} delay={0.05 * i}>
              <Link
                href={`/concerns#${c.id}`}
                className="group flex h-full flex-col justify-between border rule bg-base p-5 transition-colors hover:border-accent"
              >
                <span className="font-heading-jp text-[16px] text-ink md:text-[17px]">
                  {c.label}
                </span>
                <span className="font-body-jp mt-4 text-[12px] leading-relaxed text-ink/55">
                  {c.description}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
