# MV Creatives Platform — Project Source Code & Spec Blueprint

This repository contains the complete responsive web platform codebase, mockup layouts, assets, and design specifications for **MV Creatives** (comprising the Home, Work, Studio, and Contact pages, along with the Case Study storytelling framework).

---

## 1. Project Architecture

The platform is designed around a **Vanilla Performance Architecture** to guarantee maximum rendering speed and layout fluidness:

*   **Logic (Vanilla JS):** High-performance script (`index.js`) utilizing lightweight requestAnimationFrame loops for spring-damper custom cursor tracking, native IntersectionObserver triggers for scroll reveals, and grid-row height interpolation for accordions. Zero dependencies.
*   **Styling (Vanilla CSS):** Standardized design variables in `index.css` implementing Colors, sizes, padding, and animations transition dynamically between viewport contexts (`.theme-dark`, `.theme-light`).
*   **Semantic Structure (HTML5):** Clean layout trees (`index.html`, etc.) mapped using semantic container tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) to secure WCAG AA compliance.

---

## 2. Folder Structure

```
/ (Root)
├── index.html                  # Homepage (Conviction Zone)
├── work.html                   # Filterable Portfolio Grid
├── studio.html                 # Philosophy, Mission & Process
├── contact.html                # Multi-Path tab selector & smart form
├── index.css                   # Core Design Tokens & Styles
├── index.js                    # Custom cursor follower & page scripts
├── .gitignore                  # Git commit exclusions
├── README.md                   # Repository Documentation (This file)
│
├── [Image Assets]              # Visual mockup layouts and source graphics
│   ├── portfolio_kinetic_data.png
│   ├── portfolio_relish.png
│   ├── case_study_mockup_1782055715116.png
│   ├── process_architecture_map_1782055742786.png
│   └── design_system_components_1782073720217.png
│
└── [Original Documents]        # Baseline architecture and blueprints
    ├── MV-Creatives-Complete-Page-Blueprint-v1.0.docx
    ├── MV-Creatives-Foundation-Architecture.docx
    ├── MV-Creatives-Homepage-Design-Blueprint-v1.0.docx
    └── ... (Other viewports mockup PNGs)
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

---

## 4. Asset Inventory

| Filename | Type | Purpose / Mockup Representation |
| :--- | :--- | :--- |
| `portfolio_kinetic_data.png` | Project Graphic | Asymmetric preview mockup card for the Kinetic Data case. |
| `portfolio_relish.png` | Project Graphic | Asymmetric preview mockup card for the Relish Medical Portal case. |
| `process_architecture_map_1782055742786.png` | Flow Graphic | Technical engineering architecture map rendering. |
| `case_study_mockup_1782055715116.png` | Redesign Graphic | MacBook mock interface of the Kinetic Data platform redesign. |
| `design_system_components_1782073720217.png` | Mockup Spec | Mockup representation of the global design system component style sheet. |

---

## 5. Design Spec Component Mapping Matrix

Below is the cross-reference mapping that highlights how visual definitions map to code implementations:

| Spec Definition | Code Selector | Implementation File | Rationale / Rule |
| :--- | :--- | :--- | :--- |
| Primary CTA Button | `.btn-primary` | `index.css` | Filled brand Indigo (`#4F46E5`) button scaling 1.02 on hover. |
| Secondary CTA Button| `.btn-secondary` | `index.css` | Transparent button with border currentcolor matching background context. |
| Custom Mouse Circle | `.custom-cursor` | `index.js` / `index.css` | View ring follower tracking on hover of elements. |
| Capabilities Accordions | `.capability-trigger` | `index.js` / `index.css` | Smooth accordion transitions. |
| Input Highlight | `.focus-line` | `index.css` | Line styling on input focus. |
| Form Validation | `initBriefBuilder()` | `index.js` | Manages project brief qualification state machine. |

---

## 6. Deployment Instructions

Since this project consists of raw Vanilla HTML, CSS, and JS files, it can be deployed for free instantly on static hosting platforms like GitHub Pages.
