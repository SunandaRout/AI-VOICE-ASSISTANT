import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="max-w-content mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-inkmuted">
          © {year} {profile.name}. Built with intent, not templates.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-inkmuted hover:text-teal transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-inkmuted hover:text-teal transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-inkmuted hover:text-teal transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
