import { education } from "../data/profile";
import useReveal from "../hooks/useReveal";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" ref={ref} className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <span className="eyebrow reveal">-- education</span>
        <h2 className="section-heading reveal text-3xl md:text-4xl text-ink mt-2 mb-12">
          Academic background
        </h2>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-10">
            {education.map((edu) => (
              <div key={edu.degree} className="reveal relative">
                <span className="absolute -left-8 md:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-teal ring-4 ring-teal-soft" />
                <p className="font-mono text-xs text-teal mb-1">{edu.duration}</p>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {edu.degree}
                </h3>
                <p className="text-sm text-inkmuted mt-0.5">{edu.institution}</p>
                <p className="text-sm text-ink mt-3 max-w-2xl leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
