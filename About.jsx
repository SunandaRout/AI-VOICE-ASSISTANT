import { about, languages } from "../data/profile";
import useReveal from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <span className="eyebrow reveal">-- about_me</span>
        <h2 className="section-heading reveal text-3xl md:text-4xl text-ink mt-2 mb-10">
          A quick introduction
        </h2>

        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-16">
          <p className="reveal text-lg text-inkmuted leading-relaxed">
            {about.summary}
          </p>

          <div className="reveal space-y-6">
            <div>
              <p className="font-mono text-xs text-inkmuted uppercase tracking-wide mb-2">
                Focus areas
              </p>
              <ul className="space-y-2">
                {about.focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs text-inkmuted uppercase tracking-wide mb-2">
                Languages
              </p>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-teal-soft text-teal"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-l-2 border-teal pl-4">
              <p className="font-mono text-xs text-inkmuted uppercase tracking-wide mb-1">
                Looking for
              </p>
              <p className="text-sm text-ink leading-relaxed">
                {about.lookingFor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
