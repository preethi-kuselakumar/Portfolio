# Portfolio Project — Interview Q&A Notes

> **Target level:** ~1 year frontend experience  
> **Project:** Preethi Portfolio (React + Vite SPA)  
> **Last updated:** September 2026

Use this document to prepare for technical interviews. Answers are tied to **this codebase** and your **Textellent** work experience listed on the site.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [React & JavaScript](#2-react--javascript)
3. [Vite (Build Tool)](#3-vite-build-tool)
4. [Framer Motion (Animations)](#4-framer-motion-animations)
5. [React Icons](#5-react-icons)
6. [EmailJS (Contact Form)](#6-emailjs-contact-form)
7. [CSS & Responsive Design](#7-css--responsive-design)
8. [ESLint (Code Quality)](#8-eslint-code-quality)
9. [Git, GitHub & Deployment](#9-git-github--deployment)
10. [Architecture & Best Practices](#10-architecture--best-practices)
11. [Professional Experience Tools (Textellent)](#11-professional-experience-tools-textellent)
12. [Quick Reference](#12-quick-reference)
13. [Interview Tips](#13-interview-tips)

---

## 1. Project Overview

### Q1: Tell me about this portfolio project.

**A:** It is a single-page portfolio website built with **React 19** and **Vite**. It includes sections — Hero, About, Skills, Experience, Projects, Workflow, Contact, and Footer. The site is responsive, uses scroll animations, includes a contact form powered by **EmailJS**, and is deployed on **Netlify**. I organized the code into reusable components (`Navbar`, `Hero`, `GlassCard`, etc.) and separated static data into files like `projects.js` and `skills.js`.

---

### Q2: Why did you choose React for this project?

**A:** React fits well for a portfolio because the UI is made of reusable sections and components. React's component model makes it easy to split the page into `Navbar`, `Hero`, `Projects`, etc. State handling (form inputs, navbar scroll, resume menu) is straightforward with `useState`. React also has strong ecosystem support for animations (Framer Motion) and icons (React Icons).

---

### Q3: What is the folder structure of your project?

**A:**

```
src/
├── components/       # UI sections (Hero, About, Contact...)
│   └── ui/           # Reusable UI (GlassCard, SectionTitle...)
├── data/             # Static content (projects, skills, nav links)
├── hooks/            # Custom hooks (useTypingEffect)
├── styles/           # Global CSS
├── assets/           # Resume PDF
├── theme.js          # Shared colors & spacing
├── App.jsx           # Main layout
└── main.jsx          # Entry point
```

This keeps UI, data, and logic separated and easy to maintain.

---

## 2. React & JavaScript

### Q4: What is JSX? How is it used in your project?

**A:** JSX lets you write HTML-like syntax inside JavaScript. In files like `Hero.jsx` and `Contact.jsx`, components return JSX:

```jsx
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* ...other sections */}
    </div>
  );
}
```

JSX is compiled to JavaScript function calls by Vite/Babel during the build.

---

### Q5: What React hooks did you use and why?

**A:**

| Hook | Where Used | Purpose |
|------|------------|---------|
| `useState` | Contact form, Navbar scroll, Resume menu | Manage changing UI state |
| `useEffect` | Navbar scroll listener, `useTypingEffect` | Side effects like event listeners & timers |
| Custom `useTypingEffect` | Hero section | Typing animation for job titles |

Example from `Contact.jsx`:

```jsx
const [form, setForm] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState('idle'); // idle | sending | sent | error | config_error
```

---

### Q6: Explain your custom hook `useTypingEffect`.

**A:** It cycles through words like "Frontend Developer", "React Developer" with a typewriter effect. It uses:

- `useState` for current text, word index, character index, and delete mode
- `useEffect` with `setTimeout` to add/remove characters one at a time
- Cleanup with `clearTimeout` to avoid memory leaks when the component unmounts

This shows I can extract reusable logic into custom hooks instead of duplicating code in components.

**File:** `src/hooks/useTypingEffect.js`

---

### Q7: What is React StrictMode and why is it in `main.jsx`?

**A:** In `main.jsx`, the app is wrapped in `<StrictMode>`. StrictMode helps catch potential problems during development — like side effects that aren't cleaned up properly. It does **not** affect the production build behavior.

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

---

### Q8: Why did you use inline styles instead of CSS modules or Tailwind?

**A:** I used a mix of:

- **Global CSS** (`global.css`) — resets, fonts, keyframe animations, media queries
- **Inline styles** in components — section-specific styling
- **Central theme** (`theme.js`) — shared colors and spacing constants

For a portfolio of this size, inline styles plus a theme object kept things simple without adding another CSS framework. Colors like cyan (`#00E5CC`) and navy (`#050D1A`) are defined once in `theme.js` and reused across components.

---

## 3. Vite (Build Tool)

### Q9: What is Vite and why did you use it instead of Create React App?

**A:** **Vite** is a modern build tool that provides:

- **Fast dev server** with Hot Module Replacement (HMR)
- **Quick production builds** using Rollup
- **Native ES modules** in development for faster startup

I chose it over Create React App because CRA is slower and less actively maintained. Vite starts the dev server almost instantly with `npm run dev`.

**Config file:** `vite.config.js`

---

### Q10: What do your npm scripts do?

**A:**

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `vite` | Start local development server |
| `build` | `vite build` | Create optimized production build in `dist/` |
| `preview` | `vite preview` | Preview production build locally |
| `lint` | `eslint .` | Check code quality and catch errors |

---

### Q11: What is `import.meta.env` in your Contact form?

**A:** Vite exposes environment variables through `import.meta.env`. Only variables prefixed with `VITE_` are exposed to the client-side code:

```jsx
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

These are stored in a `.env` file (gitignored) so secrets are not committed to GitHub. In production, the same variables are set in the Netlify dashboard.

---

## 4. Framer Motion (Animations)

### Q12: What is Framer Motion and how did you use it?

**A:** **Framer Motion** is an animation library for React. I used it for:

1. **Entry animations** — `initial`, `animate`, `transition` on page load
2. **Scroll animations** — `whileInView` with `viewport={{ once: true }}`
3. **Hover effects** — `whileHover`, `whileTap` on buttons and cards
4. **Parallax scrolling** — `useScroll` + `useTransform` in the Hero section
5. **Conditional UI transitions** — `AnimatePresence` for contact form success/error states

Example from `Projects.jsx`:

```jsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
>
```

---

### Q13: What is `whileInView` vs `react-intersection-observer`?

**A:** `whileInView` is built into Framer Motion — it triggers animations when an element enters the viewport. I have `react-intersection-observer` listed in `package.json`, but the project actually uses Framer Motion's built-in viewport detection instead. I preferred Framer Motion's API since I was already using it for other animations throughout the site.

---

### Q14: Explain the parallax effect in your Hero section.

**A:** I used Framer Motion's scroll hooks in `Hero.jsx`:

```jsx
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, 150]);
const opacity = useTransform(scrollY, [0, 400], [1, 0]);
```

As the user scrolls down:
- The hero content moves downward (`y` goes from 0 to 150px)
- The content fades out (`opacity` goes from 1 to 0)

This creates a smooth parallax effect without heavy JavaScript.

---

## 5. React Icons

### Q15: What is React Icons and how did you use it?

**A:** **React Icons** provides icon components from popular icon sets (Feather, Font Awesome, Simple Icons). I imported icons like:

```jsx
import { FiChevronDown, FiDownload } from 'react-icons/fi';   // Feather icons
import { SiReact, SiJavascript } from 'react-icons/si';      // Brand/tech icons
```

Used in:
- **Hero** — resume download/view buttons
- **About** — feature cards (Fast Learner, API Integration, etc.)
- **Skills** — tech stack grid with brand icons

Icons are React components, so they scale with CSS and stay crisp at any size.

**Data file:** `src/data/skills.js`

---

## 6. EmailJS (Contact Form)

### Q16: How does your contact form work without a backend?

**A:** I used **EmailJS**, a client-side email service:

1. User fills in name, email, and message
2. On submit, `emailjs.send()` sends the data to EmailJS servers
3. EmailJS triggers an email template and delivers it to my inbox
4. UI shows sending → success/error feedback states

```jsx
await emailjs.send(
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  {
    from_name: form.name,
    reply_to: form.email,
    message: form.message,
  },
  { publicKey: EMAILJS_PUBLIC_KEY },
);
```

This avoids building a custom backend server just for a portfolio contact form.

---

### Q17: How do you handle missing EmailJS configuration?

**A:** I check if environment variables exist before attempting to send:

```jsx
const hasConfig = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
```

If config is missing, the UI shows a friendly `config_error` message instead of crashing. This makes local development easier when the `.env` file isn't set up yet.

---

## 7. CSS & Responsive Design

### Q18: How did you make the portfolio responsive?

**A:**

1. **`clamp()`** for fluid typography — `fontSize: 'clamp(3rem, 8vw, 4.5rem)'`
2. **CSS Grid** with `auto-fill` and `minmax()` for project cards
3. **Media queries** in `global.css`:
   - `@media (max-width: 768px)` — hide desktop nav, reduce section padding
   - `@media (max-width: 980px)` — stack 2-column and 3-column grids to single column
4. **`flexWrap: 'wrap'`** on button groups and tag lists

---

### Q19: What CSS techniques did you use for the glassmorphism effect?

**A:** In `GlassCard` and cards across the site:

```jsx
background: 'rgba(255,255,255,0.04)',
border: '1px solid rgba(0,229,204,0.15)',
backdropFilter: 'blur(12px)',
borderRadius: 16,
```

Semi-transparent background + blur behind the element creates the frosted glass look. Combined with subtle border glow on hover via Framer Motion.

**Component:** `src/components/ui/GlassCard.jsx`

---

## 8. ESLint (Code Quality)

### Q20: What is ESLint and how is it configured in your project?

**A:** **ESLint** is a static analysis tool that finds bugs and enforces code style. My config (`eslint.config.js`) uses:

- `@eslint/js` — recommended JavaScript rules
- `eslint-plugin-react-hooks` — enforces Rules of Hooks
- `eslint-plugin-react-refresh` — ensures components work with Vite HMR
- Custom rule: unused vars allowed if they start with uppercase (for React components)

Run with: `npm run lint`

---

## 9. Git, GitHub & Deployment

### Q21: How do you deploy this portfolio?

**A:** Deployed on **Netlify**:

1. Push code to GitHub
2. Netlify connects to the repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Netlify auto-deploys on every push to the connected branch

`netlify.toml` configures the build environment, including EmailJS env var keys for Netlify's secrets scanner.

---

### Q22: Why is `.env` in `.gitignore`?

**A:** `.env` contains sensitive keys (EmailJS public key, service ID, template ID). Committing them would expose them publicly on GitHub. Instead:

- **Local dev:** `.env` file with `VITE_*` variables
- **Production:** same variables set in Netlify dashboard environment settings
- **`.gitignore`** prevents accidental commits of secrets

---

## 10. Architecture & Best Practices

### Q23: How did you keep components reusable?

**A:** I created shared UI components:

- `SectionLabel` — small uppercase section tag
- `SectionTitle` — consistent heading style
- `GlassCard` — reusable card wrapper with hover animation

Data is separated into `data/projects.js`, `data/skills.js`, and `data/navLinks.js` so content updates don't require touching component logic.

---

### Q24: How does navigation work without React Router?

**A:** It's a single-page site with section IDs (`#hero`, `#about`, `#contact`). Navigation uses native browser scrolling:

```jsx
document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
```

Plus `scroll-behavior: smooth` in `global.css`. No router is needed because there's only one page with multiple sections.

---

### Q25: How do you import and serve the resume PDF?

**A:** Vite treats imported assets as module URLs:

```jsx
import resumePdf from '../assets/resume.pdf';
// Used as href for view/download links
<a href={resumePdf} target="_blank">View PDF</a>
<a href={resumePdf} download="Preethi_K_Resume.pdf">Download PDF</a>
```

Vite bundles the PDF and provides the correct path in both development and production.

---

## 11. Professional Experience Tools (Textellent)

These tools appear in your Experience/Skills sections. Connect them to your Textellent work during interviews.

### Q26: What is Axios and how have you used it?

**A:** **Axios** is a promise-based HTTP client for making API calls. At Textellent, I used it with REST APIs for login, messaging, and campaign features. It supports interceptors, automatic JSON parsing, and works cleanly with async/await in React components.

---

### Q27: What is React Query and why use it?

**A:** **React Query (TanStack Query)** manages server state — caching, background refetching, and loading/error states. At Textellent I used it with Axios so the UI didn't re-fetch the same data unnecessarily and showed proper loading states during API calls. It reduces boilerplate compared to managing fetch state manually with `useState` + `useEffect`.

---

### Q28: Explain OAuth Bearer authentication.

**A:** After login, the server returns a **Bearer token** (usually a JWT). For protected API calls, the token is sent in the request header:

```
Authorization: Bearer <token>
```

Axios interceptors can attach this token automatically to every request. If the token expires or is invalid, the app redirects the user to the login page.

---

### Q29: What is WebSocket and where did you use it?

**A:** **WebSocket** provides a persistent two-way connection between client and server — unlike REST, which is request-response only. At Textellent I used it for **real-time messaging** so new messages appeared instantly in the UI without the user needing to refresh or poll the server repeatedly.

---

### Q30: What is Jenkins and how does CI/CD work?

**A:** **Jenkins** automates the build and deployment pipeline. At Textellent the flow was:

1. Developer pushes code to GitHub
2. Jenkins triggers a pipeline automatically
3. Code is built and tested
4. Deployed to staging/production environments

This reduces manual deployment errors and keeps releases consistent and repeatable.

---

### Q31: How do you use Postman?

**A:** **Postman** is an API testing tool. I use it to:

- Send GET/POST/PUT/DELETE requests to endpoints
- Verify request/response format and status codes
- Test authentication headers before integrating in React
- Debug failed endpoints and share findings with the backend team

---

### Q32: What is Bootstrap 5 and when do you use it?

**A:** **Bootstrap 5** is a CSS framework with a grid system and pre-built UI components. At Textellent I used it for responsive layouts across desktop and mobile. In my portfolio I used custom CSS instead because I wanted full design control for a unique, branded look.

---

## 12. Quick Reference

### Tech Stack Cheat Sheet

| Category | Tools Used |
|----------|-----------|
| **Frontend** | React 19, JavaScript (JSX), HTML5, CSS3 |
| **Build Tool** | Vite 7 |
| **Animation** | Framer Motion |
| **Icons** | React Icons |
| **Email** | EmailJS |
| **Linting** | ESLint 9 |
| **Deployment** | Netlify |
| **Version Control** | Git, GitHub |
| **Professional (Textellent)** | Axios, React Query, Bootstrap 5, OAuth, WebSocket, Postman, Jenkins, ClickUp |

---

### 30-Second Elevator Pitch

> *"I built a React portfolio using Vite as the build tool. It's a single-page app with animated sections using Framer Motion, a contact form powered by EmailJS, and responsive design with CSS Grid and media queries. I organized it with reusable components, a central theme file, and separated data from UI logic. It's deployed on Netlify with environment variables for API keys, and the code is linted with ESLint."*

---

### Behavioral / Project Questions

**Q33: What was the hardest part of building this portfolio?**

**A:** Getting animations smooth without hurting performance — balancing Framer Motion scroll effects, parallax, and the typing animation while keeping the site fast on mobile. I used `viewport={{ once: true }}` so scroll animations run only once, and kept CSS keyframe animations (pulse, float) on simple divs instead of heavy JavaScript loops.

---

**Q34: If you had more time, what would you improve?**

**A:**

- Add a mobile hamburger menu (desktop nav hides on mobile but there's no mobile menu yet)
- Add a dark/light theme toggle
- Lazy-load sections with `React.lazy` for better initial load performance
- Add unit tests with Vitest
- Migrate to TypeScript for type safety

---

**Q35: How does this portfolio connect to your professional work?**

**A:** The portfolio demonstrates my UI/UX skills — component architecture, animations, responsive design, and clean code organization. My Textellent experience shows I can take those skills into production: integrating REST APIs with Axios and React Query, handling OAuth authentication, building real-time features with WebSocket, and working in an Agile team with Git, Jenkins CI/CD, and ClickUp.

---

## 13. Interview Tips

1. **Walk through the live site** — open DevTools, show components in React DevTools, explain one animation live.
2. **Mention trade-offs honestly** — e.g., inline styles vs Tailwind, EmailJS vs custom backend, Framer Motion vs CSS-only animations.
3. **Connect portfolio to work experience** — portfolio = UI craft; Textellent = API integration, auth, real-time, CI/CD.
4. **Be honest about unused dependencies** — `react-intersection-observer` is installed but Framer Motion's `whileInView` is what's actually used.
5. **Show the code on GitHub** — interviewers may ask you to explain a specific file or function live. Know your `useTypingEffect` hook and `Contact.jsx` form flow well.
6. **Practice explaining component props** — e.g., `GlassCard` accepts `children`, `style`, and `hover` props for flexibility.

---

*Good luck with your interview!*
