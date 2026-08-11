import { useState } from "react";
import { profile } from "../data/profile";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend/email service is wired up yet — see the note below the
    // form for how to connect one (Formspree, EmailJS, etc.).
    // For now this opens the visitor's email client pre-filled with the message.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <span className="eyebrow reveal">-- contact</span>
        <h2 className="section-heading reveal text-3xl md:text-4xl text-ink mt-2 mb-12">
          Let&rsquo;s talk
        </h2>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div className="reveal space-y-5">
            <p className="text-inkmuted leading-relaxed">
              I&rsquo;m open to internship and entry-level data analytics
              opportunities. Reach out directly, or use the form.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-ink hover:text-teal transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-teal-soft flex items-center justify-center shrink-0">
                  ✉
                </span>
                {profile.email}
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-ink hover:text-teal transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-teal-soft flex items-center justify-center shrink-0">
                  in
                </span>
                LinkedIn
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-ink hover:text-teal transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-teal-soft flex items-center justify-center shrink-0">
                  {"</>"}
                </span>
                GitHub
              </a>
              <div className="flex items-center gap-3 text-sm text-ink">
                <span className="w-9 h-9 rounded-full bg-teal-soft flex items-center justify-center shrink-0">
                  ⚲
                </span>
                {profile.location}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal rounded-2xl border border-line bg-white p-7 md:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none focus:border-teal"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none focus:border-teal"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none focus:border-teal resize-none"
                placeholder="Tell me about the opportunity..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-teal transition-colors"
            >
              Send message
            </button>

            {status === "sent" && (
              <p className="text-sm text-teal">
                Opening your email client with this message pre-filled...
              </p>
            )}

            <p className="font-mono text-[11px] text-inkmuted leading-relaxed pt-2 border-t border-line">
              -- note: this form currently opens your email client directly.
              To collect submissions without one, connect a service like
              Formspree or EmailJS — see the README for the two-line setup.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
