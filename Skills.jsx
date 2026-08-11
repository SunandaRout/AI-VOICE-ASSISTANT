import { skills } from "../data/profile";
import useReveal from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref} className="py-20 md:py-28 scroll-mt-16 bg-white border-y border-line">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <span className="eyebrow reveal">-- skills</span>
        <h2 className="section-heading reveal text-3xl md:text-4xl text-ink mt-2 mb-12">
          What I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="reveal rounded-2xl border border-line bg-paper p-6 hover:border-teal hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-display text-sm font-semibold text-ink mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-white border border-line text-inkmuted"
                  >
                    {skill}
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
