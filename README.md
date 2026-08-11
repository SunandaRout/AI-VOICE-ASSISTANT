# Sunanda Rout — Portfolio

A personal portfolio website built with **React + Vite + Tailwind CSS**, generated from your resume.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build   # outputs to /dist
npm run preview # preview the production build locally
```

## 2. Project structure

```
src/
├── components/     Navbar, Footer, BackToTop, DashboardMark (hero visual)
├── sections/        Hero, About, Skills, Education, Experience,
│                     Projects, Certifications, Contact
├── data/
│   └── profile.js   ALL your content lives here — name, skills, projects,
│                     education, experience, socials, contact info
├── hooks/
│   └── useReveal.js scroll-in animation hook
├── styles/
│   └── index.css    Tailwind + global styles
├── App.jsx
└── main.jsx
```

## 3. Update your content

Almost everything on the site is driven by **`src/data/profile.js`**.
Open that file and edit the plain text/arrays — no need to touch any
component to change your bio, skills, education, experience, or project
descriptions.

## 4. Replace the resume PDF

Your uploaded resume has already been placed at `public/resume.pdf`, so the
"Download Resume" buttons work out of the box.

To swap in an updated resume, replace `public/resume.pdf` with your new file
(keep the same filename), or change the path in `src/data/profile.js`:

```js
resumeFile: "/resume.pdf",
```

## 5. Add a profile photo or project images

The site currently ships without a headshot or project screenshots (none
were in your resume, so none were invented). To add them:

1. Drop image files into `public/` (e.g. `public/profile.jpg`).
2. Reference them with an absolute path, e.g. `<img src="/profile.jpg" />`.
3. For the hero, you could swap `DashboardMark.jsx` for an `<img>` tag, or
   keep the SVG dashboard as a graphic-only hero.
4. For projects, add an `image` field to each project object in
   `src/data/profile.js` and render it inside the project card in
   `src/sections/Projects.jsx`.

## 6. GitHub, LinkedIn and email links

These all live at the top of `src/data/profile.js`:

```js
socials: {
  github: "https://github.com/SunandaRout",
  linkedin: "https://www.linkedin.com/in/sunanda-rout-038091329",
},
email: "routj345@gmail.com",
```

Change the values and every button/link on the site updates automatically.

As you finish each of the three data-analyst projects on your resume (Sales
Dashboard, Netflix Data Analysis, Customer Churn Analysis), add the real
repo URL to that project's `github` field (and a `demo` field if you deploy
a live version) in the same file — currently they're `null` so no fake
links are shown.

## 7. Connect the contact form

The contact form currently opens the visitor's email client with their
message pre-filled (no backend required, but it depends on the visitor
having a mail client configured). To collect submissions directly instead:

**Option A — Formspree (easiest, no code)**
1. Create a free form at [formspree.io](https://formspree.io).
2. In `src/sections/Contact.jsx`, replace the `handleSubmit` logic with a
   `fetch` POST to your Formspree endpoint, or simply set the `<form>`'s
   `action` to your Formspree URL and `method="POST"`.

**Option B — EmailJS**
1. Set up a service/template at [emailjs.com](https://www.emailjs.com).
2. Install `@emailjs/browser` and call `emailjs.send(...)` inside
   `handleSubmit`.

## 8. Deploy

**Vercel**
```bash
npm i -g vercel
vercel
```
Follow the prompts — Vercel auto-detects Vite.

**Netlify**
```bash
npm run build
```
Drag the generated `dist/` folder into [app.netlify.com/drop](https://app.netlify.com/drop),
or connect your GitHub repo with build command `npm run build` and publish
directory `dist`.

**GitHub Pages**
1. `npm install --save-dev gh-pages`
2. In `package.json`, add:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, set `base: "/<repo-name>/"`.
4. Run `npm run deploy`.

## 9. What was intentionally left out

Your resume didn't list an achievements/hackathons section, a profile
photo, or public repo/demo links for the three projects — so none were
invented. Add them to `src/data/profile.js` (and, for achievements, a new
`achievements` array + section) whenever you have them.
