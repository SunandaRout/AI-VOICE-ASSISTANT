import { profile } from "../data/profile";
import DashboardMark from "../components/DashboardMark";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* subtle dot-grid backdrop, evokes a spreadsheet/data grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(#D8D9D2 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative max-w-content mx-auto px-6 md:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <span className="eyebrow inline-block mb-5">
            -- available for internships &amp; entry-level roles
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-ink leading-[1.08] tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-xl md:text-2xl text-teal font-medium">
            {profile.headline}
          </p>

          <p className="mt-6 text-base md:text-lg text-inkmuted max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-ink text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-teal transition-colors"
            >
              View My Projects
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 border border-line bg-surface text-ink text-sm font-medium px-5 py-3 rounded-full hover:border-teal hover:text-teal transition-colors"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
              </svg>
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <DashboardMark />
      </div>
    </section>
  );
}
