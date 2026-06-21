# ChatGPT Prompt: Implement the MV Creatives Complete Platform UI

> [!NOTE]
> Feed this entire document directly to ChatGPT (or any LLM). It acts as a comprehensive design system prompt and engineering specification, giving it the exact visual layouts, copy, spacing rules, motion curves, and interaction states needed to write the production code for the entire platform.

---

## LLM System Context & Role Instructions

**Role:** Senior Frontend Engineer & UI Experience Developer.
**Task:** Implement the complete high-fidelity multi-page digital platform for **MV Creatives** based on the visual design specification below.

**Coding Constraints:**
1.  **Tech Stack:** Vanilla HTML5 (semantic structure), Vanilla CSS3 (variables, grid/flex layouts, transitions), and Vanilla JavaScript (cursor physics, reveals, accordion toggles, filtering, form validation). No external grids, frameworks, or heavy libraries.
2.  **Theme Integration:** Direction C (Hybrid System) with alternating viewport backgrounds.
3.  **V1 Navigation & Pages:** Incorporate 5 pages only: **Home, Services, Work, Studio, and Contact**. Insights/Blog is completely removed for V1.
4.  **CTA System Standardization:** The CTA system consists strictly of: **Start a Project** (Primary/Accent Button), **View Our Work** (Secondary Ghost Button), and **Hire on Contra** (Trust CTA/Text link). All references to "Book a Call", "Partner with Us", and "Discuss Your Project" are removed.
5.  **Service Architecture:** All individual services are grouped under: **Design & Branding**, **Websites & Ecommerce**, **Software & SaaS**, and **AI & Enterprise Solutions**.
6.  **Logotype:** MV Creatives uses a premium text-based logotype `"MV CREATIVES"` set in `Plus Jakarta Sans 24px/700`, color `#F0F0F8`. No graphic icon or mark is used in headers or footers.
7.  **No Placeholders:** All client references, metrics, testimonials, and portfolio entries utilize real MV Creatives content: **Northlight**, **CareFlow**, **SafeHealth**, and **ApexRetail**.
8.  **Accessibility & Performance:** WCAG AA compliance (4.5:1 text contrast minimum, keyboard focusable interactive paths, ARIA tags). Target page load time (TTI) < 3.0 seconds on 4G. CLS = 0.0.

---

# Complete Production Design Specification

*(This section contains the exact visual system details, spacing coordinates, and copy parameters)*

## 1. Design System Tokens & Theme Matrix

### 1.1 Color Tokens

```css
:root {
  --bg-hero: #0A0A0F;                 /* Deep black background for Hero, Testimonials, CTA, Footer */
  --bg-light: #FAFAFA;                /* Warm white background for Capabilities, Process, Form, Case beat */
  --bg-dark-anchor: #0F0F1A;          /* Anchor dark for Featured Work, Why MV matrix, Team grid */
  --surface-dark-card: #1A1A28;       /* Cards/elevated boxes in dark viewports */
  --surface-light-card: #FFFFFF;      /* Cards/elevated boxes in light viewports */
  --border-dark: rgba(255,255,255,0.06); /* Translucent dividers in dark viewports */
  --border-light: #E2E2EC;            /* Translucent dividers in light viewports */
  --text-primary-dark: #F0F0F8;       /* Heading and body text in dark contexts */
  --text-primary-light: #0A0A0F;      /* Heading and body text in light contexts */
  --text-secondary: #8888A4;          /* Caption, labels, descriptions */
  --accent-primary: #5C6CFA;          /* Indigo brand primary accent color */
  --accent-hover: #7B88FF;            /* Highlight hover indigo for buttons */
  --accent-pressed: #4A5AE0;          /* Darkened pressed active indigo */
  --accent-glow: rgba(92, 108, 250, 0.12); /* Ambient background radial glow */
  --gold-signal: #D4A853;             /* Luxury marker used sparingly */
}
```

### 1.2 Typography Stack & Scaling (Pairing A - Approved)

*   **Primary Display Font (Headings):** `Plus Jakarta Sans, system-ui, sans-serif`
*   **Body/Interface Font:** `Inter, system-ui, sans-serif`
*   **Monospace Font:** `JetBrains Mono, monospace`

| Scale Token | Mobile (390px) | Tablet (768px) | Desktop (1440px) | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display` | `48px` | `72px` | `96px` | `700` | `0.95` | `-2px` |
| `h1` | `36px` | `56px` | `64px` | `700` | `1.0` | `-1.5px` |
| `h2` | `32px` | `40px` | `48px` | `600` | `1.1` | `-1px` |
| `h3` | `24px` | `28px` | `32px` | `600` | `1.2` | `-0.5px` |
| `h4` | `20px` | `22px` | `24px` | `500` | `1.3` | `0px` |
| `h6-label` | `11px` | `12px` | `12px` | `700` | `1.5` | `1.5px` (ALL CAPS) |
| `body-large` | `18px` | `20px` | `20px` | `400` | `1.7` | `0.2px` |
| `body-regular`| `15px` | `16px` | `16px` | `400` | `1.7` | `0.15px` |
| `metric` | `56px` | `72px` | `80px` | `700` | `1.0` | `-3px` |

> Typographic Rules: Text columns must never exceed 65 characters per line (approx. 700px at body size). Body line-height must sit at `1.65–1.75`. Heading weights never go below `600`.

### 1.3 Grid, Layout, & Spacing System
*   **Desktop Grid:** 12-column layout, max content width `1280px`. Gutters: `24px` (cards) to `32px` (asymmetric grids). Outer margins: `8vw` to `10vw`.
*   **Tablet Grid:** 4-column layout, max width `720px`. Outer margins: `6vw`. Gutters: `24px`.
*   **Mobile Grid:** 2-column layout, full width, `24px` side margins. Gutters: `16px`.
*   **Vertical Padding:** `200px` top/bottom for major section entries. `120px` top/bottom for standard content.

---

## 2. Global Components Library

### 2.1 Buttons & CTA Component Specifications
*   **Primary Button (Start a Project):** Fill `#5C6CFA`, text `#F0F0F8`, font `Inter 16px/600`, padding `16px 32px`, radius `4px`. Hover scale `1.02` with an indigo outer glow (`box-shadow 0 0 40px rgba(92,108,250,0.2)`). Click state compresses slightly (`scale 0.98`, `100ms`).
*   **Secondary Button (View Our Work):** Background transparent, border `1px solid` (`#F0F0F8` in dark context, `#0A0A0F` in light context), text matching border, padding `16px 32px`, radius `4px`. Hover adds translucent color fill background (`rgba(255,255,255,0.06)` or `rgba(0,0,0,0.04)`), scale `1.02`.
*   **Trust CTA Link (Hire on Contra):** Text `#8888A4` (dark) or `#5C6CFA` (light), font `Inter 14px/600`, right-aligned vector arrow icon (width `12px`). Hover scales underline from left (`0%` to `100%`) and translates the arrow right (`+4px`).

### 2.2 Interactive Custom Cursor Follower (Desktop Only)
*   **Default:** Standard pointer hidden. Follower is an 8px solid circle `#5C6CFA`, opacity `30%`, tracking mouse coordinates.
*   **Interactive Hover (Links/Buttons):** Follower expands to a `40px` targeting ring, opacity `15%`, borders matching the accent color. Text is fully readable inside the ring.
*   **Card Hover (Portfolio Grid):** Follower expands to `56px` targeting ring with the text label `"VIEW"` centered (`10px` JetBrains Mono, uppercase, bold).
*   **Click State:** follower compresses to a `4px` solid dot on mousedown, snapping back to target size on mouseup.

---

## 3. Responsive Visual Architecture (Section by Section)

### 3.1 Global Header & Navigation
*   **Layout:** Fixed top. Logo on Columns 1-2. Nav links on Columns 7-10. Primary CTA ("Start a Project") on Columns 11-12. Height: `72px` desktop, `64px` mobile.
*   **Logo Brand:** Text-only `"MV CREATIVES"` set in `Plus Jakarta Sans 24px/700`, color `#F0F0F8`. No graphic icon is used.
*   **Links:** Strictly includes: **Home**, **Services**, **Work**, **Studio**, and **Contact** (no Insights/Blog links).
*   **Behavior:** Starts transparent on hero viewport, transitions to scrolled frosted glass panel after `100px` scroll. Mobile hamburger drawer slides in from right, layout centers vertically with full-width stack CTAs.

### 3.2 Section 01: Hero (The Conviction Zone)
*   **Theme:** Dark background (`#0A0A0F`). Radial gradient to `#0F0F1A` in center. Accent glow behind CTAs.
*   **Layout:** Text spans Columns 2-8, vertically centered. Right visual spans Columns 9-12, bleeding off the right screen margin.
*   **Copy:**
    *   Eyebrow: `"DIGITAL PRODUCT STUDIO"` (mapped to `h6-label`, color `#8888A4`).
    *   Headline: `"The distance between a good idea and a product people love is design intelligence. We close that distance."` (mapped to `display`, color `#F0F0F8`).
    *   Subheadline: `"We architect digital products, brand systems, and AI-powered experiences for organizations that refuse to compromise."` (mapped to `body-large`, color `#8888A4`).
    *   Primary CTA: `"Start a Project"`, Secondary CTA: `"View Our Work"`, Trust Link: `"Hire on Contra"`.
*   **Visual Asset:** Abstract 3D architectural glass sculpture with internal light refraction (`./hero_abstract_3d_1782055669692.png`).
*   **Reveal Motion:** Eyebrow slides up & fades (`500ms`, `400ms` delay), headline reveals staggered by line (`700ms`, `600ms` delay), right visual scales and fades (`1000ms`, `800ms` delay).

### 3.3 Section 02: Trust Signals (The Credibility Zone)
*   **Theme:** Dark background (`#0A0A0F` base, continuous from Hero).
*   **Layout:** Section label on Columns 2-12. Logo strip on Columns 2-11 (4 monochrome client logos: Northlight, SafeHealth, ApexRetail, CareFlow, uniform height `32px`, default opacity `50%`). 3 metrics in a horizontal sub-grid on Columns 2-11.
*   **Copy:**
    *   Eyebrow: `"TRUSTED BY INDUSTRY LEADERS"`
    *   Metric 1: `"+220%"` / Label: `"QUALIFIED LEADS"` (mapped to H5).
    *   Metric 2: `"-40%"` / Label: `"FORM FRICTION REDUCED"`.
    *   Metric 3: `"-42%"` / Label: `"SUPPORT TICKETS DECREASED"`.
*   **Interactions:** Hovering over a client logo scales it (`1.05`, `300ms`) and increases its opacity to `100%`, while other logos dim to `30%`.
*   **Animation:** Metric numbers execute odometer rolling count up from `0` to final values when scrolled into view.

### 3.4 Section 03: Capabilities (The Authority Zone - Part 1)
*   **Theme:** Warm light background (`#FAFAFA`). Spacing: `200px` top padding, `160px` bottom padding.
*   **Layout:** Section header on Columns 2-8. Subhead on Columns 2-7. Card grid on Columns 2-11 (Row 1: 2 cards, Row 2: 2 cards, centered, `24px` gap).
*   **Copy:**
    *   Headline: `"Capabilities that move business forward"` (mapped to `h2`, color `#0A0A0F`).
    *   Subheadline: `"We don't add AI to our process. We think AI-first, then design for humans. The result is products that are faster to build, easier to use, and smarter over time."` (mapped to `body-large`, color `#555568`).
    *   Cards (Design & Branding, Websites & Ecommerce, Software & SaaS, AI & Enterprise Solutions). Mapped to `h6-label` (category), `h4` (title), and `body-small` (description).
    *   Trust Link CTA: `"Hire on Contra"`.
*   **Interactions:** Card hover lifts card (`translateY(-4px)`), increases shadow to Level 2, and reveals a left border accent (`3px solid #5C6CFA`), shifting internal content right by `3px`.

### 3.5 Section 04: Featured Work (The Desire Zone - Part 1)
*   **Theme:** Dark anchor background (`#0F0F1A`). Spacing: `200px` top, `160px` bottom.
*   **Layout:** Headline on Columns 2-8. Subhead on Columns 2-7. Asymmetric columns:
    *   Card 1 (Large): Columns 2-7 (spans 6 columns, height `500px`).
    *   Card 2 (Medium): Columns 8-12 (spans 5 columns, height `420px`, pushed `80px` lower).
*   **Copy:**
    *   Headline: `"What possible looks like"` (mapped to `h2`, color `#F0F0F8`).
    *   Card 1 (Northlight Platform Redesign): Metric `"+220%"`, Category `"WEBSITES & ECOMMERCE"`, Industry `"FinTech"`. Visual: `./portfolio_northlight_1782055685953.png`.
    *   Card 2 (CareFlow Abstract Assistant): Metric `"-40%"`, Category `"AI & ENTERPRISE SOLUTIONS"`, Industry `"HealthTech"`. Visual: `./portfolio_careflow_1782055700597.png`.
*   **Interactions:** Hovering cards triggers cursor `VIEW` label inside targeting ring, scales the image (`1.05`), brightens it (`brightness(1.1)`), and shifts content band up by `10px`.

### 3.6 Section 05: Process (The Authority Zone - Part 2)
*   **Theme:** Warm light background (`#FAFAFA`). Spacing: `200px` top, `160px` bottom.
*   **Layout:** Headline on Columns 2-8. Subhead on Columns 2-7. 4 process phases (01 Discover, 02 Architect, 03 Build, 04 Evolve) distributed horizontally in Columns 2-12. Connecting line runs behind numbers baseline. Technical architecture map graphic (`./process_architecture_map_1782055742786.png`) aligned on Columns 9-12.
*   **Animation:** Connecting line draws left-to-right (`scaleX(0 -> 1)`, `transform-origin: left`) as user scrolls past, followed by phase stagger-reveal.

### 3.7 Section 06: Why MV Creatives (The Authority Zone - Part 3)
*   **Theme:** Dark anchor background (`#0F0F1A`).
*   **Layout:** Headline on Columns 2-10 (`h1`, `64px`, line-height `1.0`). 2x2 grid of differentiators (Strategic Depth, Technical Rigor, AI-Native Thinking, Enterprise Scale). Centered competitive matrix below (Columns 3-10, minimal axes, MV marked as indigo glowing apex dot).
*   **Interactions:** Hovering a differentiator block shifts it (`translateX(4px)`) and brightens its left border accent from `#5C6CFA` to `#7B88FF`.

### 3.8 Section 07: Case Study Highlight (The Desire Zone - Part 2)
*   **Theme:** Warm light background (`#FAFAFA`).
*   **Layout:** Asymmetric columns: Left Column (Columns 2-7) hosts Northlight fintech case narrative with an highlighted strategic insight card. Right Column (Columns 8-12) hosts massive hero metric `+220%` and vertical stack of supporting metric cards. MacBook platform redesign mockup (`./case_study_mockup_1782055715116.png`) centered below full-width.

### 3.9 Section 08: Testimonials (The Human Proof)
*   **Theme:** Dark background (`#0A0A0F` base, matching Hero).
*   **Layout:** Headline on Columns 2-10. Featured quote spans Columns 2-10 (VP of Product, Sarah Chen, Northlight) with a large structural quotation mark behind it. Sarah Chen circular masked headshot (`./sarah_chen_portrait_1782055729555.png`, grayscale by default) positioned below. Secondary quote cards occupy Columns 2-6 (CTO, Marcus Vance, SafeHealth) and 7-11 (COO, Elena Rostova, ApexRetail).
*   **Interactions:** Portrait headshot transitions from grayscale to full color and scales (`1.05`) on hover. Secondary cards lift and reveal indigo border highlights on hover.

### 3.10 Section 09: Final CTA (The Conversion Zone)
*   **Theme:** Dark background (`#0A0A0F`). Large background glow pulses slowly.
*   **Layout:** Headline on Columns 2-10. Subheadline on Columns 2-7. Horizontal CTA cluster below: Primary button ("Start a Project") and Secondary button ("View Our Work"). Trust signals stacked vertically below CTA row.
*   **Copy:**
    *   Headline: `"Let's make your possible, actual."` (mapped to `display`, color `#F0F0F8`).
    *   Subheadline: `"Start with a project brief, or a Contra contract conversation."`
    *   Trust Signal 1: `"WE RESPOND WITHIN 24 HOURS"` (mapped to `h6-label`, color `#8888A4`).
    *   Trust Signal 2: `"Serving Clients Across US, Australia & Beyond"` (mapped to `h5`, color `#8888A4`).
    *   Trust Link: `"Hire on Contra"` (mapped to `caption`, color `#9898A8`).

### 3.11 Footer Section
*   **Layout:** Border top separator (`1px solid rgba(255,255,255,0.06)`). Top Row: Logotype "MV CREATIVES" (Columns 2-4, text-only), Tagline on Columns 5-8, Navigation on Columns 9-12. Bottom Row: Social links (left: LinkedIn, Twitter/X, Contra), legal copyright (right). Nav Links strictly match Header links.

---

### 3.12 Services Subpage
*   **Rhythm:** Alternate between `#FAFAFA` (light) and `#0F0F1A` (dark anchor).
*   **Accordion Deep-Dives:** Grouped under: Design & Branding, Websites & Ecommerce, Software & SaaS, AI & Enterprise Solutions. Collapsed items expand to reveal descriptions, 3-column feature list, and case study links. Transition: `450ms` height auto (using `grid-template-rows: 1fr` transition). Only one item open at a time.
*   **Investment Tiers:** 3 tiers horizontally: Project-Based starting at $25K, Retainer Partnership starting at $15K/month, and Custom strategic Enterprise advisory. CTA is `"Start a Project"`. No checklist tables.
*   **Visual Asset:** Services mockup layout (`./desktop_services_light_1782074078858.png`).

### 3.13 Work Subpage
*   **Sticky Filter Bar:** Sticks at `top: 72px`. Horizontal category pills: All, Design & Branding, Websites & Ecommerce, Software & SaaS, AI & Enterprise Solutions. Grid filtering uses FLIP reordering (fade-out `200ms`, recalculate, fade-in `400ms`).
*   **Masonry Grid:** Asymmetric 3-column layout. Hovering a card changes custom cursor to `56px` ring with `VIEW` label. Real projects only: Northlight, CareFlow, ApexRetail.
*   **Visual Asset:** Work mockup layout (`./desktop_work_dark_1782074095354.png`).

### 3.14 Case Study Framework
*   **7-Beat Narrative:** Cover & Outcome Hook &rarr; Business Context &quote &rarr; Discovery Insight card (`#EEF0FF`, left border `3px solid #5C6CFA`) &rarr; Process artifacts snap-gallery (horizontal) &rarr; Final redesigned system context &rarr; Quantified Business Impact &quote &rarr; Standardized CTA: `"Start a Project"`.

### 3.15 Studio Subpage & Leadership Focus
*   **Asymmetric Team Grid:** Featured leader grayscale photo left (Columns 2-6, e.g. Design Director) with detailed biography right (Columns 7-12). Secondary leaders stack below on smaller grid cards, focusing strictly on leadership team members.
*   **Photo Interaction:** Portraits scale `1.05` and transition from desaturated grayscale to full color over `400ms` on hover.
*   **Visual Asset:** Studio mockup layout (`./desktop_studio_dark_1782074108830.png`).

### 3.16 Contact Page & Multi-Path Smart Form
*   **Tab Selector:** 3 selection cards (Start a Project, View Our Work, Hire on Contra). Clicking a tab expands its height to reveal details.
*   **5-Field Smart Form:** Name, Email, Company, Project Type dropdown (Design & Branding / Websites & Ecommerce / Software & SaaS / AI & Enterprise Solutions), Project Brief. Real-time validation highlights errors using a warning bottom-border (`2px #F59E0B`). Success fades form out (`300ms`) and shows success screen (`400ms`). Side panel links to Contra.
*   **Visual Asset:** Contact mockup layout (`./desktop_contact_light_1782074125251.png`).

---

## 4. Motion, Performance & Page Routing

*   **Page Transitions:** Fade-out outgoing page (`200ms`), short hold (`50ms`), fade-in incoming page (`400ms`). Above-the-fold content staggers first.
*   **Scroll-Triggered Reveals:** Trigger entrance classes when `15%` of an element becomes visible (`Intersection Observer`).
*   **GPU Restrictions:** Transitions are strictly limited to `transform` (scale, translation) and `opacity` properties. No layout reflow animation permitted.
*   **Web Vitals Targets:** TTI < 3.0s, LCP < 2.2s, CLS = 0.0.

---

## 5. Visual Layout References (Workspace Assets)

Refer to these files in the workspace directory for layout styling:
*   Desktop Hero Layout: `desktop_hero_dark_1782073614190.png`
*   Desktop Capabilities Layout: `desktop_capabilities_light_1782073628978.png`
*   Desktop Featured Work Layout: `desktop_featured_work_dark_1782073644798.png`
*   Why MV Section Layout: `desktop_why_mv_dark_1782073661106.png`
*   Final CTA Layout: `desktop_cta_dark_1782073677218.png`
*   Tablet Viewport Layout: `tablet_hero_dark_1782073691590.png`
*   Mobile Viewport Layout: `mobile_hero_dark_1782073705291.png`
*   Services Subpage Layout: `desktop_services_light_1782074078858.png`
*   Work Subpage Layout: `desktop_work_dark_1782074095354.png`
*   Studio Subpage Layout: `desktop_studio_dark_1782074108830.png`
*   Contact Subpage Layout: `desktop_contact_light_1782074125251.png`
*   Component UI Style Guide: `design_system_components_1782073720217.png`
