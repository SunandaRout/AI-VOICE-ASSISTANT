import { certifications } from "../data/profile";
import useReveal from "../hooks/useReveal";

export default function Certifications() {
  const ref = useReveal();

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 md:py-28 scroll-mt-16 bg-white border-y border-line"
    >
      <div className="max-w-content mx-auto px-6 md:px-8">
        <span className="eyebrow reveal">-- certifications</span>
        <h2 className="section-heading reveal text-3xl md:text-4xl text-ink mt-2 mb-12">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={`${cert.name}-${cert.issuer}`}
              className="reveal rounded-2xl border border-line bg-paper p-6 flex items-start gap-4 hover:border-teal transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-soft flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
                    stroke="#0F766E"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5"
                    stroke="#0F766E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-ink">
                  {cert.name}
                </h3>
                <p className="text-sm text-inkmuted mt-0.5">{cert.issuer}</p>
                {cert.date && (
                  <p className="font-mono text-xs text-inkmuted mt-1">{cert.date}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
