import { projects } from "../data/profile";
import useReveal from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" ref={ref} className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <span className="eyebrow reveal">-- projects</span>
        <h2 className="section-heading reveal text-3xl md:text-4xl text-ink mt-2 mb-12">
          Things I&rsquo;ve built
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="reveal group relative rounded-2xl border border-line bg-white p-7 flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/5 hover:border-teal/60 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-teal transition-colors">
                {project.name}
              </h3>

              <p className="text-sm text-inkmuted leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="font-mono text-[11px] text-inkmuted uppercase tracking-wide mb-1">
                  Problem
                </p>
                <p className="text-sm text-ink leading-relaxed">{project.problem}</p>
              </div>

              <div className="mb-5">
                <p className="font-mono text-[11px] text-inkmuted uppercase tracking-wide mb-1">
                  My contribution
                </p>
                <p className="text-sm text-ink leading-relaxed">
                  {project.contribution}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-teal-soft text-teal"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-line">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-ink hover:text-teal transition-colors"
                  >
                    View code →
                  </a>
                ) : (
                  <span className="text-xs font-mono text-inkmuted">
                    repo link coming soon
                  </span>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-ink hover:text-teal transition-colors"
                  >
                    Live demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="reveal font-mono text-xs text-inkmuted mt-8">
          -- more projects on{" "}
          <a
            href="https://github.com/SunandaRout"
            target="_blank"
            rel="noreferrer"
            className="text-teal hover:underline"
          >
            github.com/SunandaRout
          </a>
        </p>
      </div>
    </section>
  );
}
