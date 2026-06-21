# MV Creatives Platform — Complete Unified Master Specification & Design Blueprint v1.0

This master document is the unified pre-production visual design specification, component library guide, responsive layout mapping, and consolidated prompt package for the entire **MV Creatives** digital platform: **Home, Services, Work, Studio, and Contact**, along with the **Case Study Framework**.

It serves as the single source of truth for both human UI designers/developers and LLM code-generation engines (such as ChatGPT, Claude, and Gemini) to produce pixel-perfect, highly performant digital layouts.

---

## TABLE OF CONTENTS
1. **Interactive Design Gallery & Mockup Breakdown**
2. **Core Design System Tokens & Theme Matrix**
3. **Global Design System Components**
4. **Responsive Visual Architecture (Page by Page)**
5. **Motion, Performance & Page Transitions**
6. **Cross-Page Conversion Strategy & Metrics**
7. **ChatGPT Prompt: Unified Code-Generation Prompt Package**
8. **Handoff Revisions Log & File Reference Map**

---

## 1. Interactive Design Gallery & Mockup Breakdown

Use the carousel below to view the visual mockups of the desktop layouts, responsive tablet/mobile screens, subpage interfaces, and the core style guide.

````carousel
![Desktop Hero Mockup (Dark Mode)](./desktop_hero_dark_1782073614190.png)
<!-- slide -->
![Capabilities Section Mockup (Light Mode)](./desktop_capabilities_light_1782073628978.png)
<!-- slide -->
![Featured Work Section Mockup (Dark Mode)](./desktop_featured_work_dark_1782073644798.png)
<!-- slide -->
![Why MV Creatives Matrix Mockup (Dark Mode)](./desktop_why_mv_dark_1782073661106.png)
<!-- slide -->
![Final CTA Section Mockup (Dark Mode)](./desktop_cta_dark_1782073677218.png)
<!-- slide -->
![Tablet Hero Viewport Mockup (Dark Mode)](./tablet_hero_dark_1782073691590.png)
<!-- slide -->
![Mobile Hero Viewport Mockup (Dark Mode)](./mobile_hero_dark_1782073705291.png)
<!-- slide -->
![Services Subpage Mockup (Light Mode)](./desktop_services_light_1782074078858.png)
<!-- slide -->
![Work Portfolio Mockup (Dark Mode)](./desktop_work_dark_1782074095354.png)
<!-- slide -->
![Studio Profile Mockup (Dark Mode)](./desktop_studio_dark_1782074108830.png)
<!-- slide -->
![Contact Qualification Mockup (Light Mode)](./desktop_contact_light_1782074125251.png)
<!-- slide -->
![Design System Style Guide (Components)](./design_system_components_1782073720217.png)
````

### Mockup Breakdown & Design Logic

*   **Desktop Hero Section (Dark Mode):** Radially blended True Dark background (`#0A0A0F` base, shifting toward `#0F0F1A` center). Left-aligned geometric Display headline set at `96px` with a line-height of `0.95` and `-2px` letter-spacing. An abstract glass sculpture refraction visual emerges from the right margin, bleeding off the screen to indicate continuous depth. Logo header is a premium text-based logotype `"MV CREATIVES"` set in Plus Jakarta Sans 24px/700, #F0F0F8, without any graphic icon. Nav menu strictly includes: **Home**, **Services**, **Work**, **Studio**, and **Contact**.
*   **Capabilities Section (Light Mode):** Warm, anti-glare white (`#FAFAFA` base) to give visual contrast when transitioning from the hero. A grid of elevated cards containing geometric vector icons in brand Indigo (`#5C6CFA`). Services are strictly grouped under: **Design & Branding**, **Websites & Ecommerce**, **Software & SaaS**, and **AI & Enterprise Solutions**. Headlines and paragraphs align to the spacing tokens, maintaining a line length below `65` characters.
*   **Featured Work (Dark Mode):** Dark anchor background (`#0F0F1A`). Highlights the asymmetric diagonal card offset. Card 1 and Card 2 run at different column heights and vertical levels, mirroring premium editorial magazine layouts. Real-world case study previews (Northlight Fintech Platform and CareFlow Clinical Assistant) feature prominent metric overlays (`+220%` and `-40%`) immediately.
*   **Why MV Creatives & Matrix (Dark Mode):** Dark anchor background (`#0F0F1A`). Shows the vertical left accent lines and the minimal, quad-based competitive matrix diagram. The indigo glowing dot marks MV's position at the transformational strategic apex.
*   **Final CTA (Dark Mode):** True Dark background (`#0A0A0F`). Centered around the massive display CTA headline with a soft, slow-pulsing background indigo glow behind the buttons. The CTA system consists of: **Start a Project** (Primary Accent Button), **View Our Work** (Secondary Ghost Button), and **Hire on Contra** (Trust CTA Text Link). Features the global presence tagline: `"Serving Clients Across US, Australia & Beyond"`.
*   **Responsive Tablet & Mobile Viewports:**
    *   *Tablet (768px):* 4-column layout, hiding the right-side visual assets to focus attention on typography; hamburger navigation active.
    *   *Mobile (390px):* Single column stack, vertical CTA buttons, full-width blocks, and centered navigation drawer targets.
*   **Services Subpage Layout (Light Mode):** Alternating light background (`#FAFAFA`) to dark process blocks (`#0F0F1A`). Visualizes the vertical accordion for Service Deep-Dives, presenting clean typographic titles and a right-aligned indicator arrow that rotates smoothly. Services are grouped under the 4 pillars: Design & Branding, Websites & Ecommerce, Software & SaaS, and AI & Enterprise Solutions. The pricing section presents three clean tiers horizontally (Project-based starting at $25K, Retainer-based partnership starting at $15K/month, and Custom strategic enterprise scopes) with the CTA button "Start a Project".
*   **Work Portfolio & Filter Bar (Dark Mode):** Dark anchor background (`#0F0F1A`) transitioning to warm white (`#FAFAFA`) for the masonry gallery grid. Displays the sticky horizontal category filter bar (All, Design & Branding, Websites & Ecommerce, Software & SaaS, AI & Enterprise Solutions). Flagship projects feature magazine-style custom grids. The masonry layout is populated only by real projects: Northlight platform redesign, CareFlow clinical assistant, and ApexRetail support automation.
*   **Studio Profile & Leadership (Dark Mode):** True Dark background (`#0A0A0F`) with `#0F0F1A` panels. Humanizes the studio by showcasing a leadership-focused editorial profile grid (Grayscale default photos of directors and leads, transitioning to full color on hover) with detailed biographies. The bottom lists technology credentials and platform certifications.
*   **Contact Page & Smart Form (Light Mode):** Warm off-white (`#FAFAFA`) to optimize readability. Focuses attention on the smart qualification form. Demonstrates the standardized 3-path selector card system (Start a Project, View Our Work, Hire on Contra). Displays the 5-field inputs (Name, Email, Company, Project Type dropdown, Project Brief textarea) with active blue bottom-border focus rings. Side panels showcase Contra booking details and Calendly meeting setups.
*   **Design System Components & Style Guide:** Visual guide compiling the font sizes (Plus Jakarta Sans display and Inter body), state matrices for buttons (primary Indigo, ghost secondary, and tertiary text-link), input focus highlights, and the interactive cursor ring follower states.

---

## 2. Core Design System Tokens & Theme Matrix

The design system operates on **Direction C (Hybrid System)**, which balances the premium authority of dark viewports with the high-contrast readability of light, data-rich viewports.

### 2.1 Color Tokens

```mermaid
graph TD
    classDef dark bg:#0A0A0F,stroke:#333,stroke-width:2px,color:#fff;
    classDef light bg:#FAFAFA,stroke:#ccc,stroke-width:2px,color:#000;
    classDef accent bg:#5C6CFA,stroke:#fff,stroke-width:1px,color:#fff;
    
    Sub1[Dark Viewports:<br>Hero, Trust, Testimonials, CTA, Footer] --> |#0A0A0F| BaseDark[Background Primary]:::dark
    Sub2[Light Viewports:<br>Capabilities, Process, Case Narrative, Form] --> |#FAFAFA| BaseLight[Background Secondary]:::light
    Sub3[Featured Work, Why MV, Team Grid] --> |#0F0F1A| AnchorDark[Background Tertiary]:::dark
    
    Acc[Brand Accent] --> |#5C6CFA| PrimaryAccent[Indigo Accent]:::accent
```

| Token Name | Value | Context | Usage Description |
| :--- | :--- | :--- | :--- |
| `--bg-hero` | `#0A0A0F` | Dark Context | Deep black background for Hero viewports, testimonials, final CTA sections, and the footer. |
| `--bg-light` | `#FAFAFA` | Light Context | Warm, anti-glare off-white background for capabilities, timeline charts, and forms. |
| `--bg-dark-anchor` | `#0F0F1A` | Dark Context | Slightly lighter anchor dark background for portfolio grids, competitive matrices, and team blocks. |
| `--surface-dark-card`| `#1A1A28` | Dark Context | Cards, panels, and elevated surfaces in dark sections. |
| `--surface-light-card`| `#FFFFFF` | Light Context | Cards, panels, and elevated surfaces in light sections. |
| `--border-dark` | `rgba(255,255,255,0.06)` | Dark Context | Divider lines, grid borders, and panel edges in dark viewports. |
| `--border-light` | `#E2E2EC` | Light Context | Divider lines and borders in light viewports. |
| `--text-primary-dark` | `#F0F0F8` | Dark Context | Headings, titles, and body copy on dark backgrounds. |
| `--text-primary-light`| `#0A0A0F` | Light Context | Headings, titles, and body copy on light backgrounds. |
| `--text-secondary` | `#8888A4` | Shared | Secondary text, captions, descriptions, and labels. |
| `--accent-primary` | `#5C6CFA` | Shared | Brand primary CTA fill, hyperlinks, markers. Electric Indigo. |
| `--accent-hover` | `#7B88FF` | Shared | Brightened hover state for accent elements in dark contexts. |
| `--accent-pressed` | `#4A5AE0` | Shared | Darkened active state for accent elements in light contexts. |
| `--accent-glow` | `rgba(92,108,250,0.12)`| Shared | Ambient backdrop glow behind primary buttons and interactive nodes. |
| `--gold-signal` | `#D4A853` | Shared | Luxury gold marker used sparingly for specific metrics or highlight elements. |

---

### 2.2 Typography Stack & Scaling (Pairing A - Approved)

*   **Primary Display Stack (Headers):** `Plus Jakarta Sans, system-ui, -apple-system, sans-serif` (weights: `600`, `700`, `800`).
*   **Body/UI Stack (Interface/Text):** `Inter, system-ui, -apple-system, sans-serif` (weights: `400`, `600`, `700`).
*   **Monospace Stack (Data/Metrics):** `JetBrains Mono, Courier New, monospace` (weight: `400`).

| Scale Token | Font | Mobile (390px) | Tablet (768px) | Desktop (1440px) | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display` | Plus Jakarta Sans | `48px` | `72px` | `96px` | `700` | `0.95` | `-2px` |
| `h1` | Plus Jakarta Sans | `36px` | `56px` | `64px` | `700` | `1.0` | `-1.5px` |
| `h2` | Plus Jakarta Sans | `32px` | `40px` | `48px` | `600` | `1.1` | `-1px` |
| `h3` | Plus Jakarta Sans | `24px` | `28px` | `32px` | `600` | `1.2` | `-0.5px` |
| `h4` | Plus Jakarta Sans | `20px` | `22px` | `24px` | `500` | `1.3` | `0px` |
| `h5` | Inter | `16px` | `18px` | `18px` | `600` | `1.4` | `0.5px` |
| `h6-label` | Inter | `11px` | `12px` | `12px` | `700` | `1.5` | `1.5px` (ALL CAPS) |
| `body-large` | Inter | `18px` | `20px` | `20px` | `400` | `1.7` | `0.2px` |
| `body-regular`| Inter | `15px` | `16px` | `16px` | `400` | `1.7` | `0.15px` |
| `body-small` | Inter | `13px` | `14px` | `14px` | `400` | `1.65` | `0.1px` |
| `caption` | Inter | `11px` | `12px` | `12px` | `400` | `1.6` | `0.1px` |
| `metric` | Plus Jakarta Sans | `56px` | `72px` | `80px` | `700` | `1.0` | `-3px` |

> [!TIP]
> Line length for content copy must never exceed `65` characters per line (approx. `700px`). No light heading weights (below `600`) are permitted.

---

### 2.3 Grid, Layout, & Spacing System
*   **Desktop Grid:** 12-column layout, max content width `1280px`. Gutters: `24px` (cards) to `32px` (asymmetric grids). Outer margins: `8vw` to `10vw`.
*   **Tablet Grid:** 4-column layout, max width `720px`. Outer margins: `6vw`. Gutters: `24px`.
*   **Mobile Grid:** 2-column layout, full width, `24px` side margins. Gutters: `16px`.
*   **Vertical Padding Scale:**
    *   *Major Page Sections:* `200px` top/bottom (desktop), `120px` (tablet), `80px` (mobile).
    *   *Standard Sections:* `120px` top/bottom (desktop), `80px` (tablet), `60px` (mobile).
    *   *Inter-Element Spacing:* `16px` (eyebrow to heading), `24px` (heading to paragraph), `32px` (text to CTA row).

---

### 2.4 Depth, Elevation, & Glassmorphism
*   **Level 0 (Flat):** Zero shadow. Muted divider borders (`1px`).
*   **Level 1 (Subtle Lift):** `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04)`. Card defaults in light contexts.
*   **Level 2 (Elevated):** `box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08)`. Card hover states in light contexts.
*   **Level 4 (Glow):** `filter: drop-shadow(0 0 40px rgba(92, 108, 250, 0.12))`. Backglow on CTA regions in dark viewports.
*   **Frosted Glass Panel (Navigation):** `background: rgba(10, 10, 15, 0.92)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid rgba(255, 255, 255, 0.06)`.

---

## 3. Global Design System Components

### 3.1 Standardized Buttons & CTA Components

*   **Primary Button (Start a Project):**
    *   *Default:* Background `#5C6CFA`, text `#F0F0F8`, font `Inter 16px/600`, padding `16px 32px`, border-radius `4px`.
    *   *Hover:* Background `#6B7AFB`, scale `1.02`, `box-shadow: 0 0 40px rgba(92, 108, 250, 0.2)`. Transition: `250ms cubic-bezier(0.16, 1, 0.3, 1)`.
    *   *Active:* Background `#4A5AE0`, scale `0.98`.
*   **Secondary Button (View Our Work):**
    *   *Default:* Background transparent, border `1px solid` (`#F0F0F8` in dark context, `#0A0A0F` in light context), text matching border, padding `16px 32px`, border-radius `4px`.
    *   *Hover:* Background `rgba(255,255,255,0.06)` (dark) or `rgba(0,0,0,0.04)` (light), scale `1.02`. Transition: `250ms ease`.
*   **Trust CTA Link (Hire on Contra):**
    *   *Default:* Text `#8888A4` (dark) or `#5C6CFA` (light), font `Inter 14px/600`, right-aligned vector arrow icon (width `12px`).
    *   *Hover:* Underline expands from `0%` to `100%` width, text goes to `#F0F0F8` (dark) or `#0A0A0F` (light), arrow translates `+4px` right.

### 3.2 UI Form Input Fields
*   **Input Field (Text & Dropdown):**
    *   *Default:* Background transparent, border-bottom `1px solid rgba(255,255,255,0.08)` (dark) or `#E2E2EC` (light), padding `12px 0`, text color matching context primary text.
    *   *Focus:* Border-bottom transitions to `2px solid #5C6CFA`. Label above shifts color to `#5C6CFA`.
    *   *Error:* Border-bottom transitions to `2px solid #F59E0B` (warning tone), error text fades in below.

### 3.3 Custom Cursor Follower (Desktop Only)
*   **Default State:** Solid circle `#5C6CFA` (diameter `8px`), opacity `30%`, centered on mouse coordinates. Standard system pointer hidden.
*   **Hover Interactive:** Expands to `40px` targeting ring, opacity `15%`. Underline/button readable inside.
*   **Card Hover (Portfolio):** Expands to `56px` targeting ring, opacity `20%`. Bold uppercase label `"VIEW"` (JetBrains Mono, `10px`) fades in at center.
*   **Click active:** Compresses to `4px` solid dot, snapping back on release with spring ease.

---

## 4. Responsive Visual Architecture (Page by Page)

### 4.1 Global Header & Navigation
*   **Grid Layout:** Logo on Columns 1–2. Nav Items on Columns 7–10 (centered flex). Primary CTA ("Start a Project") on Columns 11–12 (right-aligned). Height: `72px` desktop, `64px` mobile.
*   **Logotype:** Text-only `"MV CREATIVES"` set in `Plus Jakarta Sans 24px/700`, color `#F0F0F8`. No graphic icon or logo mark is used.
*   **Nav Links:** Strictly contains **Home**, **Services**, **Work**, **Studio**, and **Contact** (no Insights/Blog links).
*   **Scrolled Transition:** Transitions from transparent on load to scrolled frosted glass panel after scrolling `100px`.
*   **Mobile adaptation:** Hamburger icon right-aligned. Tapping hamburger opens overlay drawer (`#0A0A0F`, slides from right). Navigation links stack vertically at `32px` gaps, styled in `Plus Jakarta Sans 32px/600`. Primary CTA sits full-width at the bottom.

---

### 4.2 Homepage Layout & Sections

*   **Hero (Section 01):** Dark theme (`#0A0A0F`). Text spans Columns 2–8. Abstract 3D glass sculpture mockup (`./hero_abstract_3d_1782055669692.png`) on Columns 9–12. Staggered fade and slide entrance triggers.
    *   *Eyebrow:* `"DIGITAL PRODUCT STUDIO"` (`h6-label`, `#8888A4`)
    *   *Headline:* `"The distance between a good idea and a product people love is design intelligence. We close that distance."` (`display`, `#F0F0F8`)
    *   *Subheadline:* `"We architect digital products, brand systems, and AI-powered experiences for organizations that refuse to compromise."` (`body-large`, `#8888A4`)
*   **Trust Strip (Section 02):** Dark theme (`#0A0A0F`). 4 client logos (Northlight, SafeHealth, ApexRetail, CareFlow) distribute evenly on Columns 2–11. 3 metrics count up on scroll:
    *   `+220%` / `"QUALIFIED LEADS"`
    *   `-40%` / `"FORM FRICTION REDUCED"`
    *   `-42%` / `"SUPPORT TICKETS DECREASED"`
*   **Capabilities (Section 03):** Light theme (`#FAFAFA`). 4 capability group cards stack asymmetrically on Columns 2–11:
    1.  *Design & Branding:* Identity systems, brand strategy, visual guidelines, UI/UX research.
    2.  *Websites & Ecommerce:* Custom builds, platform optimization, headless CMS, performance tuning.
    3.  *Software & SaaS:* Product design, component-level design systems, frontend engineering.
    4.  *AI & Enterprise Solutions:* AI-native interfaces, database automation, intelligent integrations.
    *   *Card interaction:* Hover lifts card `translateY(-4px)` and reveals Indigo left border (`3px solid #5C6CFA`).
*   **Featured Work (Section 04):** Dark anchor theme (`#0F0F1A`). Asymmetric magazine layout:
    *   Card 1 (`./portfolio_northlight_1782055685953.png`) spans Columns 2–7 (height `500px`), featuring metric `+220%`.
    *   Card 2 (`./portfolio_careflow_1782055700597.png`) spans Columns 8–12 (height `420px`, pushed `80px` down), featuring metric `-40%`.
*   **Process (Section 05):** Light theme (`#FAFAFA`). 4 horizontal timeline phases (Discover, Architect, Build, Evolve) on Columns 2–12 with scale-X connecting line drawing on scroll. Technical architecture map (`./process_architecture_map_1782055742786.png`) on Columns 9–12.
*   **Why MV Creatives (Section 06):** Dark anchor theme (`#0F0F1A`). 4 differentiators stack on 2x2 layout (Strategic Depth, Technical Rigor, AI-Native Thinking, Enterprise Scale). Competitor matrix centered below showing MV positioned at apex quadrant.
*   **Case Study Highlight (Section 07):** Light theme (`#FAFAFA`). Left column (Columns 2–7) for Northlight narrative + highlighted insight card. Right column (Columns 8–12) for metric `+220%` + supporting items. MacBook platform redesign mockup (`./case_study_mockup_1782055715116.png`) full-width below.
*   **Testimonials (Section 08):** Dark theme (`#0A0A0F`). Featured quote spans Columns 2–10 with Sarah Chen circular portrait (`./sarah_chen_portrait_1782055729555.png`) below (grayscale to color hover). Secondary cards (Marcus Vance, Elena Rostova) stack in Columns 2–6 and 7–11.
*   **Final CTA (Section 09):** Dark theme (`#0A0A0F`). Copy on Columns 2–10. Primary ("Start a Project") and Secondary ("View Our Work") CTAs below. Trust signals stack at Column 2: `"Serving Clients Across US, Australia & Beyond"` + `"Hire on Contra"`.

---

### 4.3 Services Page Layout & Accordions
*   **Rhythm:** Alternate between `#FAFAFA` (light) and `#0F0F1A` (dark anchor).
*   **Hero (Section 01):** Dark theme (`#0A0A0F`), 100vh height. Headline: `"Capabilities that move business forward"` (`display` size). Subheadline: `"We do not add AI to our process. We think AI-first, then design for humans."` (`body-large` size). Right visual is an abstract 3D grid render showing system nodes.
*   **Capability Groups (Section 02):** Light theme (`#FAFAFA`). 4 large cards on a 2x2 grid representing the core categories: Design & Branding, Websites & Ecommerce, Software & SaaS, and AI & Enterprise Solutions.
*   **Deep-Dives Accordion (Section 03):** Accordion items representing the four categories. Collapsed items expand to reveal descriptions, 3-column feature tags, and real project linkings (e.g. links to Northlight case study). Transition: `450ms` height auto (using `grid-template-rows: 1fr` transition). Only one item open at a time.
*   **Investment Tiers (Section 04):** 3 tiers horizontally:
    1.  *Project-Based:* Starting at $25K — fixed scope and timeline.
    2.  *Partnership:* Starting at $15K/month — retainer-based model, embedded team.
    3.  *Enterprise:* Custom strategic Enterprise advisory.
    *   *CTA Button:* Every card features the standardized Primary CTA: `"Start a Project"`. No checklist tables are used.
*   **FAQ Accordion (Section 05):** Dark theme (`#0A0A0F`). Accordion dropdowns answering scale and AI process questions, following the same interaction logic as the Deep-Dives.
*   **Final CTA (Section 06):** Reuses the homepage Final CTA system.
*   **Visual Asset:** Services mockup layout (`./desktop_services_light_1782074078858.png`).

---

### 4.4 Work Page Layout & Masonry Grid
*   **Hero (Section 01):** Dark theme (`#0A0A0F`), 80vh height. Headline: `"What possible looks like"` (`h1` size). Subheadline: `"Every project starts with a business problem and ends with a measurable outcome."`. Background is a desaturated composite of real MV project screens.
*   **Sticky Filter Bar (Section 02):** Sticks at `top: 72px`. Horizontal category pills: All, Design & Branding, Websites & Ecommerce, Software & SaaS, AI & Enterprise Solutions. Grid filtering uses FLIP reordering (fade-out `200ms`, recalculate, fade-in `400ms`). Active pill uses `#5C6CFA` fill.
*   **Masonry Grid (Section 03):** Asymmetric 3-column layout. Hovering a card changes custom cursor to `56px` ring with `VIEW` label. Real projects only:
    *   *Northlight:* Fintech platform redesign, metrics (`+220%` leads, `34%` onboarding, `2X` demos).
    *   *CareFlow:* AI assistant platform, metrics (`-40%` friction, `42%` support tickets).
    *   *ApexRetail:* Support automation, metrics (`-42%` tickets, `30-day` integration).
*   **Results Strip (Section 04):** Dark theme (`#0A0A0F`). Metric strip displaying cumulative achievements from real projects: `+220% Leads`, `-40% Friction`, `-42% Support Tickets`, and `12-WK Delivery`.
*   **Visual Asset:** Work mockup layout (`./desktop_work_dark_1782074095354.png`).

---

### 4.5 Case Study Storytelling Framework
*   **7-Beat Narrative:**
    *   *Beat 1: The Hook:* Full-screen project cover image (`100vh`), client logo, single outcome statement (e.g., `+220% Qualified Leads` for Northlight), and context label (`FINTECH • SERIES B`).
    *   *Beat 2: The Context:* Light theme (`#FAFAFA`). Two-column block. Left: italic client quote. Right: business challenge detail, avoiding design jargon.
    *   *Beat 3: The Insight:* Accent tint background (`#EEF0FF`). Highlighted block with left indigo accent border (`3px solid #5C6CFA`, `24px` padding) detailing strategic discovery.
    *   *Beat 4: The Approach:* Light theme (`#FAFAFA`). Horizontal scroll gallery of engineering/design artifacts (wireframes, flows, system schemas). Swipeable on mobile; snap-scrolling active.
    *   *Beat 5: The Solution:* Alternating dark anchor (`#0F0F1A`) and light (`#FAFAFA`) viewports showing high-fidelity screenshots in real MacBook/iPhone contexts alongside rationale.
    *   *Beat 6: The Impact:* Dark theme (`#0A0A0F`). Massive hero metric (`96px` display text) + 3-card grid of supporting data. Underneath features Sarah Chen client quote with portrait headshot.
    *   *Beat 7: The Invitation:* Light theme (`#FAFAFA`). Related projects grid followed by the final CTA block linking to the Contact form.

---

### 4.6 Studio Page Layout & Leadership Focus
*   **Hero (Section 01):** Dark theme (`#0A0A0F`), 100vh. Headline: `"We are the minds behind the possible"`. Subhead: `"A team of designers, engineers, and strategists who believe AI and design are not separate disciplines."`. Visual: Grayscale desaturated leadership portrait overlay.
*   **Philosophy & Differentiators (Section 02-04):** Light theme (`#FAFAFA`). Text spans Columns 2–8 (`max-width: 700px`).
*   **Leadership Team Grid (Section 05):** Dark anchor theme (`#0F0F1A`). Asymmetric profile grid focusing strictly on leadership team members:
    *   *Featured Leader:* Large grayscale photo left (Columns 2-6) with detailed biography right (Columns 7-12).
    *   *Supporting Leaders:* 3 smaller cards. Photo + name + role.
    *   *Photo Interaction:* Portraits scale `1.05` and transition from desaturated grayscale (`90%` default) to full color over `400ms` with an indigo border halo on hover.
*   **Visual Asset:** Studio mockup layout (`./desktop_studio_dark_1782074108830.png`).

---

### 4.7 Contact Page Layout & Smart Form
*   **Hero (Section 01):** Dark theme (`#0A0A0F`), 60vh height. Headline: `"Let us make your possible, actual."` (`h1` size). Subheadline: `"Start with a project brief, or a Contra contract conversation."`.
*   **Multi-Path Tab Selector (Section 02):** 3 selection cards (Start a Project, View Our Work, Hire on Contra). Clicking a tab expands its height to reveal details.
*   **5-Field Smart Form (Section 03):** Light theme (`#FAFAFA`).
    1.  *Name* (text, required)
    2.  *Email* (email, required)
    3.  *Company* (text, optional)
    4.  *Project Type* (Select dropdown: Design & Branding / Websites & Ecommerce / Software & SaaS / AI & Enterprise Solutions)
    5.  *Project Brief* (textarea, 3 rows)
    *   *Form Validation:* Real-time validation highlights errors using a warning bottom-border (`2px #F59E0B`). Success fades form out (`300ms`) and shows success screen (`400ms`). Side panel links to Contra contract routing.
*   **Visual Asset:** Contact mockup layout (`./desktop_contact_light_1782074125251.png`).

---

## 5. Motion, Performance & Page Transitions

*   **Easing Curves:**
    *   *Entrance Ease:* `cubic-bezier(0.16, 1, 0.3, 1)` (Ultra-premium ease-out, duration `600ms`).
    *   *Feedback Ease:* `cubic-bezier(0.25, 1, 0.5, 1)` (Duration `200-250ms`).
    *   *Odometer roll duration:* `800ms`.
*   **Page Transitions:** Fade-out outgoing page (`200ms`), short hold (`50ms`), fade-in incoming page (`400ms`).
*   **Intersection Observer:** Thresholds set to trigger reveals when `15%` of an element becomes visible, using a rootMargin top/bottom of `-10%`.
*   **Performance:** Animations strictly limited to hardware-accelerated transforms (`translate`, `scale`) and `opacity`. No layout repaints or reflows allowed. Target page load time: TTI < 3.0s, LCP < 2.2s, CLS = 0.0.

---

## 6. Cross-Page Conversion Strategy & Metrics

```mermaid
graph TD
    Home[1. Home: Position & Hook] --> Work[2. Work: Desire & Proof]
    Work --> Case[3. Case Study: Metric Validation]
    Case --> Services[4. Services: Scope & Fit]
    Services --> Studio[5. Studio: Team Trust]
    Studio --> Contact[6. Contact: Smart Conversion]
    
    subgraph Conversion Goals
        HomeTarget[Bounce < 35%, Scroll >= 60%]
        WorkTarget[Case study click-through >= 70%]
        CaseTarget[Testimonial read >= 70%]
        ServicesTarget[Contact click-through > 18%]
        StudioTarget[Inquiry conversion rate increase]
        ContactTarget[100% completion on entry]
    end
    
    Home -.-> HomeTarget
    Work -.-> WorkTarget
    Case -.-> CaseTarget
    Services -.-> ServicesTarget
    Studio -.-> StudioTarget
    Contact -.-> ContactTarget
```

*   **Page Handoff Funnel:** Each subpage ends in a final CTA that funnels the user:
    *   *Home / Work:* Final CTAs focus on **View Our Work** and **Start a Project**.
    *   *Case Studies / Services:* Final CTAs drive directly to **Start a Project** (revealing the pre-selected Services category form on Contact).
    *   *Studio:* Final CTAs build human validation to convert trust-sensitive buyers into **Start a Project** inquiries.

---

## 7. ChatGPT Prompt: Unified Code-Generation Prompt Package

Copy and paste the system prompt instructions below to feed into an LLM code-generation assistant to implement the platform:

```markdown
You are a Senior Frontend Engineer & UI Experience Developer.
Your task is to build the complete, pixel-perfect, high-fidelity multi-page website for MV Creatives based on the visual specifications and design rules provided below.

### Tech Stack Constraints
1. Core Tech: Vanilla HTML5 (semantic layout), Vanilla CSS3 (Custom Properties, Flexbox/Grid, transforms, and transitions), and Vanilla JavaScript (cursor physics, accordion animations, portfolio filters, and real-time form validation).
2. Frameworks: Strictly NO external frameworks (React, Vue, TailwindCSS, etc.) or heavy JS animation libraries (GSAP, Framer Motion). Use custom-crafted native solutions for maximum performance.
3. Performance Targets: Time to Interactive (TTI) < 3.0s, Largest Contentful Paint (LCP) < 2.2s, Cumulative Layout Shift (CLS) = 0.0. Use hardware-accelerated CSS properties only (transform, opacity).

### Global Brand Constraints
1. V1 Page Navigation: Enforce a 5-page structure strictly: Home, Services, Work, Studio, and Contact. Remove all references, files, or navigation links pointing to "Insights" or "Blog".
2. CTA System Standardization:
   - Primary Accent CTA: "Start a Project" (Button element with background color #5C6CFA)
   - Secondary CTA: "View Our Work" (Button element with border outline, transparent fill)
   - Trust CTA: "Hire on Contra" (Text link with right vector arrow, referencing Contra redirect)
   - Note: Delete all references to "Book a Call", "Book a Discovery Call", "Discuss Your Project", or "Partner with Us".
3. Service Category Architecture: All services must be grouped under these four category headings:
   - Design & Branding
   - Websites & Ecommerce
   - Software & SaaS
   - AI & Enterprise Solutions
4. Nav Logotype: Use a premium text-based mark "MV CREATIVES" set in Plus Jakarta Sans 24px/700, color #F0F0F8 (no graphic icon/mark).
5. Real Content Rule: Do not write placeholder copy, metrics, or client names. Use real MV Creatives projects:
   - Northlight (FinTech platform, metric: "+220% Qualified Leads")
   - CareFlow (HealthTech Assistant, metric: "-40% Form Friction")
   - ApexRetail (Retail Support Automation, metric: "-42% Support Tickets")
   - SafeHealth (Enterprise healthcare integration)
6. Accent Color: Brand Indigo accent color (#5C6CFA) is the primary interactive brand signifier.

---

### Global CSS Foundation Setup (index.css)
Initialize the CSS custom properties and baseline layouts using this exact token system:

```css
:root {
  --bg-hero: #0A0A0F;
  --bg-light: #FAFAFA;
  --bg-dark-anchor: #0F0F1A;
  --surface-dark-card: #1A1A28;
  --surface-light-card: #FFFFFF;
  --border-dark: rgba(255, 255, 255, 0.06);
  --border-light: #E2E2EC;
  --text-primary-dark: #F0F0F8;
  --text-primary-light: #0A0A0F;
  --text-secondary: #8888A4;
  --accent-primary: #5C6CFA;
  --accent-hover: #7B88FF;
  --accent-pressed: #4A5AE0;
  --accent-glow: rgba(92, 108, 250, 0.12);
  --gold-signal: #D4A853;
  
  --font-display: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* Base styles and custom cursor defaults */
body {
  font-family: var(--font-body);
  background-color: var(--bg-hero);
  color: var(--text-primary-dark);
  margin: 0;
  overflow-x: hidden;
  cursor: none; /* Hide native cursor for desktop custom follower */
}

/* Layout widths */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}
```

---

### Core Reusable Components (To be written in HTML and CSS)

1. **Standardized Buttons & CTAs:**
   * **Primary Button (.btn-primary):** Background `var(--accent-primary)`, text `#F0F0F8`, font-weight `600`, padding `16px 32px`, border-radius `4px`. Transition: `250ms cubic-bezier(0.16, 1, 0.3, 1)`. On hover: scale to `1.02`, background shifts to `var(--accent-hover)`, and adds a shadow glow `0 0 40px rgba(92, 108, 250, 0.2)`. Active state scales to `0.98`.
   * **Secondary Button (.btn-secondary):** Background transparent, border `1px solid`, text color matching current context, radius `4px`. Hover adds translucent color fill background `rgba(255,255,255,0.06)` or `rgba(0,0,0,0.04)`.
   * **Trust Link (.link-trust):** Text `var(--text-secondary)`, hover shifts to `#F0F0F8` or `#0A0A0F` with expanding underline transition.

2. **Custom Cursor Follower:**
   * Implement a viewport fixed `div` (.custom-cursor) centered on mouse coordinates. Default state: solid dot `#5C6CFA`, diameter `8px`, opacity `0.3`. On hovering clickable links/buttons: scale to `40px` ring, opacity `0.15`. On hovering portfolio item cards: scale to `56px` ring with centered uppercase text `"VIEW"` (font-size `10px`, monospace). Transition cursor using a lightweight requestAnimationFrame spring-damper interpolation in JS for smooth lag physics.

3. **Service Accordions (Expanded transitions):**
   * Services page deep-dives must toggle smooth height transitions. In CSS, use the CSS grid rows hack: `.accordion-content { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 450ms cubic-bezier(0.16, 1, 0.3, 1); } .accordion-content.expanded { grid-template-rows: 1fr; }`. Keep internal content wrapped in a child with `overflow: hidden` to allow layout to expand smoothly without hardcoding heights.

4. **Input Focus Line (Smart Form):**
   * Standard inputs require a bottom border-line that animates width from center outward (`0%` to `100%`) when focused. Position an absolute helper `.focus-line` under the text input, default `scaleX(0)`, transition `transform 300ms ease`. On focus, transition `scaleX(1)`.

---

### Detailed Page Implementations

#### Page 1: Home (index.html)
* **Theme Rhythm:** Hybrid System (Alternates background coloring).
* **Section 01 (Hero):** `#0A0A0F`. Spans 100vh. Logo and nav top. Two-column split: left column (col-span-7) holds text & button cluster. Right column (col-span-5) holds abstract refraction graphic (`hero_abstract_3d_1782055669692.png`) bleeding off right page bounds.
* **Section 02 (Trust Strip):** `#0A0A0F`. Clean monochrome logo row (Northlight, SafeHealth, ApexRetail, CareFlow) + 3 metric blocks.
* **Section 03 (Capabilities):** `#FAFAFA` (Light). Asymmetric 4-card layout mapping Design & Branding, Websites & Ecommerce, Software & SaaS, AI & Enterprise Solutions.
* **Section 04 (Featured Work):** `#0F0F1A`. Magazine layout. Card 1 (Northlight, spans Columns 2-7, height 500px). Card 2 (CareFlow, spans Columns 8-12, height 420px, offset 80px down).
* **Section 0PROCESS (Process):** `#FAFAFA`. 4 horizontal phases with dynamic connecting baseline scaleX animation on scroll.
* **Section 06 (Why MV Matrix):** `#0F0F1A`. 2x2 differentiator grid and competitive quadrant map positioned below.
* **Section 07 (Case Study Highlight):** `#FAFAFA`. Left fintech narrative, right `+220%` metrics. MacBook platform redesign mockup (`case_study_mockup_1782055715116.png`) centered below.
* **Section 08 (Testimonials):** `#0A0A0F`. Sarah Chen quote, grayscale headshot portrait (`sarah_chen_portrait_1782055729555.png`), secondary quotes.
* **Section 09 (Final CTA & Footer):** `#0A0A0F`. Centered headline cluster, CTA row, global navigation, and socials.

#### Page 2: Services (services.html)
* Alternating layout theme. Main deep-dive section uses the CSS Grid transition accordion list. Displays 3 pricing investment tiers (Project, Retainer, Enterprise) with primary CTA button "Start a Project". Include FAQ sections.

#### Page 3: Work (work.html)
* Sticky filter bar. All category cards filter on click using JavaScript. Real projects only: Northlight platform redesign, CareFlow Clinical Assistant, ApexRetail support automation.

#### Page 4: Studio (studio.html)
* Editorial layout. Large featured profile (Grayscale portrait with bio) and smaller leader cards below. Portrait hover transitions from desaturated grayscale to full color in `400ms` with scale `1.05`.

#### Page 5: Contact (contact.html)
* 3 selector tabs (Start a Project, View Our Work, Hire on Contra). Tab clicking expands height. Smart 5-field form validation with error boundary styling (warning bottom-border `2px #F59E0B`) and success animation transition.
```

---

## 8. Handoff Revisions Log & File Reference Map

This log lists the revisions and constraints implemented in this master specification:

*   **Standardized CTAs:** Primary "Start a Project", Secondary "View Our Work", Trust "Hire on Contra" are the only conversion hooks.
*   **Service Category Realignment:** Grouped capabilities strictly under: Design & Branding, Websites & Ecommerce, Software & SaaS, and AI & Enterprise Solutions.
*   **Real Project Consolidation:** Replaced all placeholder names and metrics with:
    *   *Northlight:* Fintech platform redesign, metrics (`+220%` leads, `34%` onboarding, `2X` demos).
    *   *CareFlow:* AI assistant platform, metrics (`-40%` friction, `42%` support tickets).
    *   *ApexRetail:* Support automation, metrics (`-42%` tickets, `30-day` integration).
*   **Text-only logotype:** Nav logo is text-based `"MV CREATIVES"` (no graphic icon mark).
*   **Omitted Pages:** Insights/Blog page is completely removed from the header navigation, footer, and funnel logic.

### Workspace File Reference Map
Use these actual file assets in the workspace directory when staging layouts:
*   **HTML interactive specimen:** `mv_creatives_homepage_production_spec.html`
*   **Desktop Hero Layout:** `desktop_hero_dark_1782073614190.png`
*   **Desktop Capabilities Layout:** `desktop_capabilities_light_1782073628978.png`
*   **Desktop Featured Work Layout:** `desktop_featured_work_dark_1782073644798.png`
*   **Why MV Section Layout:** `desktop_why_mv_dark_1782073661106.png`
*   **Final CTA Layout:** `desktop_cta_dark_1782073677218.png`
*   **Tablet Viewport Layout:** `tablet_hero_dark_1782073691590.png`
*   **Mobile Viewport Layout:** `mobile_hero_dark_1782073705291.png`
*   **Services Subpage Layout:** `desktop_services_light_1782074078858.png`
*   **Work Subpage Layout:** `desktop_work_dark_1782074095354.png`
*   **Studio Subpage Layout:** `desktop_studio_dark_1782074108830.png`
*   **Contact Subpage Layout:** `desktop_contact_light_1782074125251.png`
*   **Component UI Style Guide:** `design_system_components_1782073720217.png`
*   **Abstract 3D Art asset:** `hero_abstract_3d_1782055669692.png`
*   **Northlight Card art:** `portfolio_northlight_1782055685953.png`
*   **CareFlow Card art:** `portfolio_careflow_1782055700597.png`
*   **Architecture Map:** `process_architecture_map_1782055742786.png`
*   **MacBook Case Study Mockup:** `case_study_mockup_1782055715116.png`
*   **Sarah Chen portrait:** `sarah_chen_portrait_1782055729555.png`
