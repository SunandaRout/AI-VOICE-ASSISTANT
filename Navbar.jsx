import { useEffect, useState } from "react";
import { nav, profile } from "../data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-ink text-lg tracking-tight"
        >
          Sunanda<span className="text-teal">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  active === item.href
                    ? "text-teal"
                    : "text-inkmuted hover:text-ink"
                }`}
              >
                {item.label}
                {active === item.href && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-teal rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeFile}
          download
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium bg-ink text-white px-4 py-2 rounded-full hover:bg-teal transition-colors"
        >
          Resume
        </a>

        <button
          className="md:hidden inline-flex flex-col gap-1.5 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-b border-line px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 text-base font-medium ${
                    active === item.href ? "text-teal" : "text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeFile}
            download
            className="mt-3 inline-flex items-center justify-center w-full gap-2 text-sm font-medium bg-ink text-white px-4 py-2.5 rounded-full"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
