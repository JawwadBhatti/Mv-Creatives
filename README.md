# MV Creatives Platform — Project Source Code & Spec Blueprint v1.0

This repository contains the complete responsive web platform codebase, mockup layouts, assets, and design specifications for **MV Creatives** (comprising the Home, Services, Work, Studio, and Contact pages, along with the Case Study storytelling framework).

---

## 1. Project Architecture

The platform is designed around a **Vanilla Performance Architecture** to guarantee maximum rendering speed and layout fluidness:

*   **Logic (Vanilla JS):** High-performance script (`index.js`) utilizing lightweight requestAnimationFrame loops for spring-damper custom cursor tracking, native IntersectionObserver triggers for scroll reveals, and grid-row height interpolation for accordions. Zero dependencies.
*   **Styling (Vanilla CSS):** Standardized design variables in `index.css` implementing **Direction C (Hybrid Theme)**. Colors, sizes, padding, and animations transition dynamically between viewport contexts (`.theme-dark`, `.theme-light`, `.theme-anchor-dark`).
*   **Semantic Structure (HTML5):** Clean layout trees (`index.html`, `services.html`, etc.) mapped using semantic container tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) to secure WCAG AA compliance and Cumulative Layout Shift (CLS) = 0.0 metrics.

---

## 2. Folder Structure

```
/ (Root)
├── index.html                  # Homepage (Conviction Zone)
├── services.html               # Capabilities & Accordion Deep-Dives
├── work.html                   # Filterable Portfolio Grid
├── studio.html                 # Philosophy, Mission & Team grid
├── contact.html                # Multi-Path tab selector & smart form
├── index.css                   # Core Design Tokens & Styles
├── index.js                    # Custom cursor follower & page scripts
├── .gitignore                  # Git commit exclusions
├── README.md                   # Repository Documentation (This file)
├── mv_creatives_master_design_spec.md # Root Master Visual Spec
│
├── specs/                      # Portable Markdown specifications
│   ├── mv_creatives_master_design_spec.md
│   ├── mv_creatives_high_fidelity_mockups.md
│   ├── mv_creatives_homepage_production_spec.md
│   ├── mv_creatives_homepage_chatgpt_prompt.md
│   └── walkthrough.md
│
├── [Image Assets]              # Visual mockup layouts and source graphics
│   ├── hero_abstract_3d_1782055669692.png
│   ├── portfolio_northlight_1782055685953.png
│   ├── portfolio_careflow_1782055700597.png
│   ├── case_study_mockup_1782055715116.png
│   ├── process_architecture_map_1782055742786.png
│   ├── sarah_chen_portrait_1782055729555.png
│   ├── design_system_components_1782073720217.png
│   ├── desktop_hero_dark_1782073614190.png
│   └── ... (Other viewports mockup PNGs)
│
└── [Original Documents]        # Baseline architecture and blueprints
    ├── MV-Creatives-Complete-Page-Blueprint-v1.0.docx
    ├── MV-Creatives-Foundation-Architecture.docx
    ├── MV-Creatives-Homepage-Design-Blueprint-v1.0.docx
    └── MV-Creatives-Homepage-Visual-Design-Specification-v1.0.docx
```

---

## 3. Build & Run Instructions

Since the code uses raw Vanilla assets, no node build/compilation tools are required. You can serve the project using any local static web server.

### Option A: VS Code Live Server
1. Open the repository folder in VS Code.
2. Click **Go Live** in the bottom-right status bar, or right-click `index.html` and select **Open with Live Server**.

### Option B: Python SimpleHTTPServer
Run the following terminal command at the root of the workspace directory:
```bash
python -m http.server 8000
```
Then navigate to [http://localhost:8000](http://localhost:8000) in your web browser.

### Option C: NodeJS Http-Server
If you have NodeJS installed globally:
```bash
npx http-server ./ -p 8080
```
Then navigate to [http://localhost:8080](http://localhost:8080) in your web browser.

---

## 4. Asset Inventory

| Filename | Type | Purpose / Mockup Representation |
| :--- | :--- | :--- |
| `hero_abstract_3d_1782055669692.png` | Art Graphic | Abstract 3D geometric glass sculpture displayed in the Homepage Hero section. |
| `portfolio_northlight_1782055685953.png` | Project Graphic | Asymmetric preview mockup card for the Northlight Fintech Platform case. |
| `portfolio_careflow_1782055700597.png` | Project Graphic | Asymmetric preview mockup card for the CareFlow Clinical Assistant case. |
| `process_architecture_map_1782055742786.png` | Flow Graphic | Technical engineering architecture map rendering displayed in the Process section. |
| `case_study_mockup_1782055715116.png` | Redesign Graphic | Full MacBook mock interface of the Northlight platform redesign. |
| `sarah_chen_portrait_1782055729555.png` | Portrait | Grayscale portrait of Sarah Chen (VP of Product, Northlight) for testimonials. |
| `design_system_components_1782073720217.png` | Mockup Spec | Mockup representation of the global design system component style sheet. |
| `desktop_hero_dark_1782073614190.png` | Mockup Spec | High-fidelity desktop view of the Homepage Hero section (Dark). |
| `desktop_capabilities_light_1782073628978.png`| Mockup Spec | High-fidelity desktop view of the Capabilities section (Light). |
| `desktop_featured_work_dark_1782073644798.png`| Mockup Spec | High-fidelity desktop view of the Featured Work section (Anchor Dark). |
| `desktop_why_mv_dark_1782073661106.png` | Mockup Spec | High-fidelity desktop view of the Why MV & competitive matrix (Anchor Dark). |
| `desktop_cta_dark_1782073677218.png` | Mockup Spec | High-fidelity desktop view of the Final CTA section (Dark). |
| `tablet_hero_dark_1782073691590.png` | Mockup Spec | High-fidelity responsive viewport rendering for Tablet layouts. |
| `mobile_hero_dark_1782073705291.png` | Mockup Spec | High-fidelity responsive viewport rendering for Mobile layouts. |
| `desktop_services_light_1782074078858.png` | Mockup Spec | High-fidelity desktop view of the Services subpage template. |
| `desktop_work_dark_1782074095354.png` | Mockup Spec | High-fidelity desktop view of the Work masonry grid portfolio. |
| `desktop_studio_dark_1782074108830.png` | Mockup Spec | High-fidelity desktop view of the Studio team profiles grid. |
| `desktop_contact_light_1782074125251.png` | Mockup Spec | High-fidelity desktop view of the Contact qualification form page. |

---

## 5. Design Spec Component Mapping Matrix

Below is the cross-reference mapping that highlights how visual definitions from the Master Specification map to code implementations:

| Spec Definition | Code Selector | Implementation File | Rationale / Rule |
| :--- | :--- | :--- | :--- |
| Primary CTA Button | `.btn-primary` | `index.css` | Filled brand Indigo (`#5C6CFA`) button scaling 1.02 on hover with an ambient drop-glow. |
| Secondary CTA Button| `.btn-secondary` | `index.css` | Transparent button with border currentcolor matching background context. |
| Trust CTA Link | `.link-trust` | `index.css` | Inline link with arrow right transition + expanding border-bottom width. |
| Custom Mouse Circle | `.custom-cursor` | `index.js` / `index.css` | VIEW label displays in 56px ring on hover of elements with `.portfolio-card`. |
| Services Accordions | `.accordion-item` | `index.js` / `index.css` | Smooth accordion transitions utilizing native CSS Grid `grid-template-rows: 0fr -> 1fr`. |
| Input Highlight | `.focus-line` | `index.js` / `index.css` | Absolutely positioned line scaling from center width `0%` to `100%` on input focus. |
| Form Validation | `validateField()` | `index.js` | Highlights warning border `#F59E0B` and triggers error copy on incorrect input. |
| Hybrid Themes | `.theme-light` / `.theme-dark` | `index.css` | Maps tokens `--bg-light` (`#FAFAFA`) and `--bg-hero` (`#0A0A0F`) dynamically on viewport wrapper. |

---

## 6. Known Limitations

*   **Cursor Hidden Behavior:** Custom cursor follower tracking relies on a desktop viewport hover state (`min-width: 1024px`). Touchscreen and mobile viewports fall back gracefully to native mobile tap cursors.
*   **Grid Row Expansion:** The CSS Grid height auto transition (`grid-template-rows: 0fr -> 1fr`) requires an internal child with `overflow: hidden`. Setting paddings directly on the expandable container will cause layout jumps; spacing must be kept on the internal inner wrapper.
*   **FLIP Reordering offsets:** The JS reordering of masonry items in the work page uses standard fade transitions. It does not perform full 2D position shifts on viewport changes unless a complete page reload or reflow is executed.

---

## 7. Deployment Instructions

Since this project consists of raw Vanilla HTML, CSS, and JS files, it can be deployed for free instantly on static hosting platforms.

### Option A: GitHub Pages
1. Go to your repository **Settings** tab on GitHub.
2. Select **Pages** from the left-hand sidebar menu.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Set the branch source to `main` and folder to `/ (root)`.
5. Click **Save**. Within 1–2 minutes, your website will be live at `https://<your-username>.github.io/Mv-Creatives/`.

### Option B: Netlify (Drag & Drop)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the complete local folder (`MV Creatives/` root folder) directly into the upload box.
3. Netlify will instantly build and generate a live URL for your website.

### Option C: Vercel (CLI or Import)
1. Go to [https://vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and import the `JawwadBhatti/Mv-Creatives` repository.
3. Set the **Framework Preset** to `Other` (Vanilla HTML).
4. Click **Deploy**. Vercel will launch your site and set up automatic redeployments on every git push.

