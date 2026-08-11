import { experience } from "../data/profile";
import useReveal from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" ref={ref} className="py-20 md:py-28 scroll-mt-16 bg-white border-y border-line">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <span className="eyebrow reveal">-- experience</span>
        <h2 className="section-heading reveal text-3xl md:text-4xl text-ink mt-2 mb-12">
          Hands-on experience
        </h2>

        <div className="space-y-6">
          {experience.map((role) => (
            <div
              key={role.role}
              className="reveal rounded-2xl border border-line bg-paper p-7 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {role.role}
                  </h3>
                  <p className="text-sm text-inkmuted mt-0.5">
                    {role.organization}
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-teal-soft text-teal shrink-0">
                  {role.duration}
                </span>
              </div>

              <ul className="space-y-2.5 mb-5">
                {role.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white border border-line text-inkmuted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
