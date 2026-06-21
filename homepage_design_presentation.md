# MV Creatives: Homepage Design System & Visual Presentation

*Presented by the Design Director*

This presentation details the final visual screen design decisions and high-fidelity mockups for the new **MV Creatives** homepage. We have completed the final design refinement pass, focusing entirely on visual identity, atmospheric depth, and user interaction.

---

## 1. High-Fidelity UI Mockup Showcase

Use the slides below to review the final design variations and layouts:

````carousel
![Hero Version A — Headline: "DIGITAL PRODUCTS BUILT FOR THE UNCOMPROMISING", complete CTA stack, desaturated liquid chrome background](C:/Users/HP/.gemini/antigravity/brain/d4657c8c-7795-4b38-a753-c17677fce007/hero_mockup_a_1782078991052.png)
<!-- slide -->
![Hero Version B — Headline: "WE DESIGN WHAT COMES NEXT", complete CTA stack, ebonite grey backdrop, desaturated macro glass prism shadows](C:/Users/HP/.gemini/antigravity/brain/d4657c8c-7795-4b38-a753-c17677fce007/hero_mockup_b_1782079004311.png)
<!-- slide -->
![Hero Version C — Headline: "IDEAS ARE CHEAP. EXECUTION IS DESIGN.", complete CTA stack, desaturated sketches and technical gridlines](C:/Users/HP/.gemini/antigravity/brain/d4657c8c-7795-4b38-a753-c17677fce007/hero_mockup_c_1782079019776.png)
<!-- slide -->
![Interactive Capability Explorer — Left vertical service index, right capability viewport showing wireframes and design notes](C:/Users/HP/.gemini/antigravity/brain/d4657c8c-7795-4b38-a753-c17677fce007/capability_explorer_1782079032848.png)
<!-- slide -->
![Featured Work Editorial Gallery — Asymmetric layout, technical metadata, outcomes-first alignment](C:/Users/HP/.gemini/antigravity/brain/d4657c8c-7795-4b38-a753-c17677fce007/featured_work_mockup_1782079046056.png)
<!-- slide -->
![Final CTA Section — Pulses indigo gradient glow behind centered typography, complete CTA options](C:/Users/HP/.gemini/antigravity/brain/d4657c8c-7795-4b38-a753-c17677fce007/final_cta_mockup_1782079057924.png)
````

---

## 2. Refined Section-by-Section Screen Design Decisions

### 1. Hero Section (Deep Void / Hook)

#### A. Visual Composition
*   **Grid System:** 12-column grid with `80px` left/right margins. Display headline spans Columns 1 to 10. Secondary metadata (Timezone clock and primary CTA button) occupies Columns 7 to 12.
*   **Layout:** Left-aligned asymmetrical block layout. Display headline is set at `120px` sizing with a `-0.03em` tracking offset, occupying the upper two-thirds of the viewport.
*   **Framing Lines:** A thin `1px` carbon vertical line (`#1C1C24`) separates Column 6 and Column 7, dividing the headline area from the action items.

#### B. Art Direction (3 Headline Variations)
*   **Background:** Deep Obsidian Black (`#060608`) with a subtle, low-opacity indigo radial gradient glowing behind Column 11.
*   **Typography:** Satoshi Display (Heavy, 900) set in uppercase. The three variations are:
    1.  **Version A:** `"DIGITAL PRODUCTS BUILT FOR THE UNCOMPROMISING."` (Project studio statement)
    2.  **Version B:** `"WE DESIGN WHAT COMES NEXT."` (Future-looking engineering hook)
    3.  **Version C:** `"IDEAS ARE CHEAP. EXECUTION IS DESIGN."` (Creative leadership statement)
*   **Complete CTA Stack:** Stacked horizontally or vertically:
    1.  *Primary CTA:* `Start a Project` (Electric Indigo `#5C6CFA` background fill).
    2.  *Secondary CTA:* `View Our Work` (Ghost outline button).
    3.  *Trust CTA:* `Hire on Contra` (Clean monospaced text link stacked below).

#### C. Video Direction
*   **Asset:** `hero_ambient_refraction.webm` (1.8MB local loop).
*   **Visual Style:** A desaturated, slow-moving macro shot of refractive glass shards shifting under a moving light source. Layered at `opacity: 0.12` beneath the text layers to avoid distracting from readability.

#### D. Motion Direction
*   **Reveal:** Headline lines mask and reveal sequentially on page load using scroll-linked clip-paths, sliding up with a fluid spring coefficient (`damping: 25`, `stiffness: 120`).
*   **Cursor interaction:** Custom trailing cursor distorts the glass refractions slightly on movement.

#### E. Interaction Design
*   **CTAs:** Hovering over the `Start a Project` CTA triggers a kinetic magnetic snap. The button pulls toward the cursor within a `40px` radius, and its background fills with solid Indigo.

#### F. Mobile Experience
*   **Grid:** 4-column layout with `24px` margins. Display headline drops to `48px` sizing. 
*   **Video:** Video backdrop remains active but is desaturated further (`opacity: 0.08`) to preserve legibility. Timezone clock stacks directly below the main CTA.

---

### 2. Outcomes-First Trust Strip (Expanded)

#### A. Visual Composition
*   **Grid System:** Full-bleed horizontal band (`120px` height) crossing the 12-column grid.
*   **Layout:** Continuous marquee belt running horizontally.

#### B. Art Direction
*   **Background:** Deep Obsidian Black (`#060608`) bordered top and bottom by `1px solid #1C1C24` lines.
*   **Typography:** Display elements set in JetBrains Mono (`48px`). The text combines business outcomes, delivery speed, product categories, and client achievements:
    *   `[ +220% REVENUE // 12-WEEK SHIPPED // FINTECH PLATFORM // NORTHLIGHT ]`
    *   `[ -40% OPERATIONAL TIME // 16-WEEK RUNTIME // CLINICAL SUITE // CAREFLOW ]`
*   **Text Weights:** Outlined text marquee (`-webkit-text-stroke: 1px #8888A4`) to prioritize light typographic weight, with solid highlights on hover.

#### C. Video Direction
*   **Asset:** No video elements used. Purely typographic and motion-led to give visual pacing contrast.

#### D. Motion Direction
*   **Marquee Behavior:** The ticker moves continuously from right to left at a constant velocity (`40px/sec`).
*   **Scroll Sync:** Scrolling down speeds up the marquee slightly in the scroll direction, creating a physical sense of momentum.

#### E. Interaction Design
*   **Hover Interaction:** Placing the cursor over a specific metric pauses the ticker marquee. The text outlines fill with solid Indigo (`#5C6CFA`) while showing a subtle glowing shadow behind the numbers.

#### F. Mobile Experience
*   **Grid:** Fits full width. Typography scales down to `20px` JetBrains Mono. Marquee speed is reduced to `25px/sec` to prevent visual noise on small touch displays.

---

### 3. Interactive Capability Explorer

#### A. Visual Composition
*   **Grid System:** 12-column layout. Columns 1–4 contain the vertical index of capabilities. Columns 5–12 contain the dynamic preview viewport.
*   **Layout:** Side-by-side split screen. A thin, carbon vertical border (`1px`) divides Column 4 and Column 5.

#### B. Art Direction
*   **Background:** Dynamic contrast shifting. Selecting a service category changes the background theme instantly:
    *   *Websites & Ecommerce / Design & Branding:* Chalk White (`#FAFAFC`) background with dark charcoal typography (`#0A0A0F`).
    *   *Software & SaaS / AI & Enterprise Solutions:* Ebonite Dark (`#0E0E12`) background with clean white typography (`#F0F0F8`).
*   **Typography:** Capability titles set in Satoshi (Bold, `36px`). Selection numbers set in JetBrains Mono (`14px`, `#5C6CFA`).

#### C. Video & Atmosphere Direction
*   **Asset:** Category-specific local video loops (e.g., `capabilities_ecommerce.webm`, `capabilities_ai.webm`).
*   **Visual Style:** Grayscale product interactions and high-fidelity wireframe drawings in motion, playing at `opacity: 0.15` in the right viewport column.
*   **Subtle Studio Atmosphere:** Integrated desaturated wireframe sketches, design notes, color palette blocks, and digital workshop elements layered into the background of the viewport (no team photos).

#### D. Motion Direction
*   **Transition:** Selecting a new capability triggers a split-second color inversion. The right viewport clips and slides open from left to right using a clean curtain transition (`0.4s cubic-bezier(0.16, 1, 0.3, 1)`).

#### E. Interaction Design
*   **Capability Index:** Clicking or hovering over a capability row triggers the split transition. The selected item displays a small Indigo indicator block next to its monospaced step counter (e.g., `[ 01 // DESIGN & BRANDING ]`).

#### F. Mobile Experience
*   **Grid:** Stacked layout. The 4 capability items act as accordions. Tapping an item expands it vertically to reveal its custom viewport preview, rather than shifting columns.

---

### 4. Featured Work Editorial Gallery

#### A. Visual Composition
*   **Grid System:** 12-column layout. 
    *   Card 1 (Northlight Platform Redesign): Spans Columns 1–6.
    *   Card 2 (CareFlow Clinical Assistant): Spans Columns 8–12, offset vertically by `240px` (asymmetric alignment).
*   **Layout:** Asymmetric, alternating vertical columns. Looks like a luxury fashion editorial grid.

#### B. Art Direction
*   **Background:** Deep Obsidian Black (`#060608`).
*   **Typography:** Technical headers set in JetBrains Mono (`12px`, `#8888A4`) showing outcome metrics first (e.g. `[ IMPACT: +220% REVENUE // CLIENT: NORTHLIGHT // STACK: NEXTJS ]`). Project titles set in Satoshi (`32px`, `#F0F0F8`).

#### C. Video & Atmosphere Direction
*   **Asset:** Dedicated case study silent video loops (`work_northlight.webm`, `work_careflow.webm`).
*   **Default State:** Static, high-resolution desaturated thumbnail image showing real design files and sketches.
*   **Active State:** Triggers only on hover/tap. The video plays smoothly, transitioning the thumbnail from grayscale to rich color with an Indigo color overlay.

#### D. Motion Direction
*   **Asymmetric Scrolling:** A custom parallax scrolling script links the speed of the columns. Column 1 (Left side) scrolls at normal rate (`1.0x`), while Column 2 (Right side) scrolls at `0.75x` rate.

#### E. Interaction Design
*   **Hover Reels:** Hovering the cursor over a card plays the video reel. The cursor follower morphs into a small glass ring containing the label `[ VIEW ]`.

#### F. Mobile Experience
*   **Grid:** Single-column layout. Column offsets and parallax scrolling are disabled to optimize page performance.
*   **Reels:** Users tap once to activate and play the video loop, and tap again to open the case study link.

---

### 5. Why MV Creatives (The Strategic Apex)

#### A. Visual Composition
*   **Grid System:** 12-column grid. Left block (Core philosophy) spans Columns 1–5. Right block (Interactive architectural grid) spans Columns 7–12.
*   **Layout:** Side-by-side block alignment.

#### B. Art Direction
*   **Background:** Ebonite Dark (`#0E0E12`).
*   **Typography:** Section header in Satoshi (`48px`). Tech metrics in JetBrains Mono (`14px`, `#5C6CFA`).

#### C. Video & Atmosphere Direction
*   **Asset:** No video files. Instead, a real-time, lightweight canvas drawing engine runs in the right column.
*   **Studio References:** Displays engineering wireframe schemas, sketch lines, and mathematical design review grids.

#### D. Motion Direction
*   **Architectural Drawing:** A subtle particle canvas displaying points along geometric blueprint lines. The particles drift slowly on load, maintaining a quiet, structured grid rather than dynamic glowing webs.

#### E. Interaction Design
*   **Cursor Tracking:** Hovering over the drawing viewport pulls the nearest vertices toward the cursor coordinate, temporarily forming a structured bounding box (wireframe box outline) around the mouse point.

#### F. Mobile Experience
*   **Grid:** Stacked. The interactive canvas is moved below the text block and sized down to a fixed height of `300px` with cursor tracking disabled (replaced by touch drag events).

---

### 6. Testimonials

#### A. Visual Composition
*   **Grid System:** 12-column layout. Portrait photo spans Columns 1–4. Quote blocks and client credentials span Columns 6–12.
*   **Layout:** Editorial magazine interview spread.

#### B. Art Direction
*   **Background:** Chalk White (`#FAFAFC`) with a thin carbon dividing line between photo and quote.
*   **Typography:** Quote set in Satoshi Italic (`40px`, `#0A0A0F`), styled like a luxury print block quote. Client details set in JetBrains Mono (`12px`, `#8888A4`).

#### C. Video & Atmosphere Direction
*   **Asset:** No video files. Includes subtle background grid patterns reminiscent of product sketches.

#### D. Motion Direction
*   **Entrance Reveal:** Quote letters fade in line-by-line as the section enters the viewport, using a smooth opacity mask transition.

#### E. Interaction Design
*   **Grayscale-to-Color Portrait:** The client portrait is displayed in high-contrast grayscale. Hovering over the photo fades in natural, warm colors over a `300ms` transition window.

#### F. Mobile Experience
*   **Grid:** Stacked. The portrait photo is centered above the quote block and scaled down to a circular aspect ratio of `120px` diameter. Typographical size scales down to `24px` Satoshi Italic.

---

### 7. Final CTA (The Atmospheric Void)

#### A. Visual Composition
*   **Grid System:** 12-column layout. Contents centered across Columns 3–10.
*   **Layout:** Centered display block inside a high-contrast viewport.

#### B. Art Direction
*   **Background:** Deep Obsidian Black (`#060608`). A large, soft electric-indigo radial glow (`rgba(92,108,250,0.08)`) pulses slowly behind the content container.
*   **Typography:** Headline set in Satoshi (`72px`, `#F0F0F8`): **"BUILD WHAT OTHERS SAY IS IMPOSSIBLE."** CTAs set in JetBrains Mono (`14px`).
*   **CTA Stack:** Primary button (`Start a Project`), secondary ghost button (`View Our Work`), and trust link (`Hire on Contra`) stacked below.

#### C. Video Direction
*   **Asset:** No video files. Driven by typography and background light gradients.

#### D. Motion Direction
*   **Radial Glow Pulse:** The background radial indigo glow pulses slowly using a keyframe ease-in-out transition (`12s` period, scaling between `opacity: 0.05` and `opacity: 0.12`).

#### E. Interaction Design
*   **CTA Options:** Hovering over the primary CTA (`Start a Project`) triggers the magnetic cursor snap and expands the background aura. Hovering over the trust CTA (`Hire on Contra`) triggers a clean underline slide animation.

#### F. Mobile Experience
*   **Grid:** Centered 4-column layout. Headline scales down to `36px` Satoshi. CTAs stack vertically to maximize button tap zones.

---

## Wireframe Blueprints

### 1. Homepage Desktop Wireframe (12-Column Grid)

```
[ Col 1 - 2 ]  [ Col 3 - 4 ]  [ Col 5 - 6 ]  [ Col 7 - 8 ]  [ Col 9 - 10 ] [ Col 11 - 12 ]
==========================================================================================
HEADER:
MV CREATIVES                 [   Home   Services   Work   Studio   ]         [Start a Project]
------------------------------------------------------------------------------------------
HERO:
[Headline Variation A, B, or C]                              | [JetBrains Mono Timezone]
                                                             | [Start a Project CTA (Glow)]
                                                             | [View Our Work]  [Hire on Contra]
==========================================================================================
TRUST TICKER (Expanded):
------------------------------------------------------------------------------------------
<<<  +220% REVENUE // 12-WK RUN // FINTECH // NORTHLIGHT  <<<  -40% TIME // 16-WK RUN  <<<
==========================================================================================
CAPABILITY EXPLORER:
[ 01 // DESIGN & BRANDING ] | Design & Branding [ Selected ]
[ 02 // WEBSITES & ECOMM ]  | ------------------------------------------------------------
[ 03 // SOFTWARE & SAAS ]   | [ Asymmetric Editorial Grid Viewport ]
[ 04 // AI & ENTERPRISE ]   | [ Grayscale Wireframe sketches + design reviews ]
==========================================================================================
FEATURED WORK:
[ IMPACT: +220% // NORTHLIGHT ]           |
[ Static Preview / Play on Hover ]        |
[ Satoshi Project Title ]                 |
                                          | [ IMPACT: -40% // CAREFLOW ]
                                          | [ Offset Card: scrolls at 0.75x rate ]
                                          | [ Satoshi Project Title ]
==========================================================================================
WHY MV:
THE STRATEGIC APEX                        | [ Architectural blueprint drawing canvas ]
[ JetBrains Mono Metrics ]                | [ Subtle vertices tracking cursor ]
==========================================================================================
TESTIMONIALS:
[ Portrait Image ]                        | "We refuse to compromise on design quality.
[ Grayscale default ]                     |  MV Creatives delivered precisely that."
[ Color on Hover ]                        | - Sarah Chen // Northlight Lead
==========================================================================================
FINAL CTA:
                       [ Pulsing Indigo Radial Aura ]
                BUILD WHAT OTHERS SAY IS IMPOSSIBLE.
                     [Start a Project]   [View Our Work]
                               [Hire on Contra]
==========================================================================================
FOOTER:
MV CREATIVES                                                   Serving Clients Across US,
Copyright 2026                                                 Australia & Beyond.
```

### 2. Homepage Tablet Wireframe (8-Column Grid)

```
[ Col 1 - 2 ]     [ Col 3 - 4 ]     [ Col 5 - 6 ]     [ Col 7 - 8 ]
===================================================================
HEADER:
MV CREATIVES                                              [ = (Menu) ]
-------------------------------------------------------------------
HERO:
[Headline Variation A, B, or C]
                                    [Start a Project CTA]
                                    [View Our Work]  [Hire on Contra]
===================================================================
TRUST TICKER:
-------------------------------------------------------------------
<<<  +220% REVENUE // 12-WK // FINTECH // NORTHLIGHT  <<<
===================================================================
CAPABILITY EXPLORER:
[ 01 DESIGN ]   [ 02 WEBSITES ]   [ 03 SOFTWARE ]   [ 04 AI ]
-------------------------------------------------------------------
[ Expanded Viewport of Selected Capability ]
[ Wireframe preview sketches + Monospaced metrics ]
===================================================================
FEATURED WORK:
[ IMPACT: +220% // NORTHLIGHT ]
[ Static Preview / Play on Hover ]
[ Project Title ]
-------------------------------------------------------------------
[ IMPACT: -40% // CAREFLOW ]
[ Project Title ]
===================================================================
WHY MV:
THE STRATEGIC APEX                  | [ Subtle vertices grid ]
===================================================================
TESTIMONIALS:
[ Portrait ]                        "We refuse to compromise. MV
                                     delivered precisely that."
===================================================================
FINAL CTA:
                BUILD WHAT OTHERS SAY IS IMPOSSIBLE.
             [Start a Project]  [View Our Work]  [Hire on Contra]
```

### 3. Homepage Mobile Wireframe (4-Column Grid)

```
[ Col 1 - 2 ]     [ Col 3 - 4 ]
===================================
HEADER:
MV CREATIVES           [ = (Menu) ]
-----------------------------------
HERO:
[Headline Variation]

[Start a Project CTA]
[View Our Work]
[Hire on Contra]
===================================
TRUST TICKER:
<<<  +220% REVENUE // NORTHLIGHT  <<<
===================================
CAPABILITY EXPLORER:
[ 01 // DESIGN & BRANDING     - ]
  [ Desaturated wireframe sketches ]
  [ +180% Conversion Metric Badge  ]
[ 02 // WEBSITES & ECOMMERCE  + ]
[ 03 // SOFTWARE & SAAS       + ]
[ 04 // AI & ENTERPRISE       + ]
===================================
FEATURED WORK:
[ IMPACT: +220% // NORTHLIGHT ]
[ Tap to play video loop ]
[ Project Title ]
-----------------------------------
[ IMPACT: -40% // CAREFLOW ]
[ Project Title ]
===================================
WHY MV:
THE STRATEGIC APEX
[ Subtle blueprint canvas ]
===================================
TESTIMONIALS:
   [ Portrait ]
"We refuse to compromise. MV
 delivered precisely that."
===================================
FINAL CTA:
BUILD WHAT OTHERS 
SAY IS IMPOSSIBLE.

[Start a Project]
[View Our Work]
[Hire on Contra]
```

---

## Moodboard Registers

### 1. Video Moodboard References
*   **Reference Loop A (Ambient Chrome Refraction):** High-framerate slow-motion capture of liquid chrome morphing under studio lighting, heavily desaturated. Emits technological mystery and cinematic atmosphere (inspired by *Mont Fort* background loops).
*   **Reference Loop B (Macro Glass Prisms):** 3D render of architectural frosted glass columns rotating slowly, creating sharp light refractions and shadow lines. Emits architectural luxury and precise engineering.
*   **Reference Loop C (Interface Telemetry):** Clean terminal telemetry loops (monospaced parameters changing rapidly, data graphs drawing lines) rendered at `opacity: 0.1` inside ebonite dark capability viewports. Emits innovation lab precision.

### 2. Imagery Moodboard References
*   **Portrait Style:** High-contrast, desaturated black-and-white portraits of people, lit with dramatic side-lighting (chiaroscuro). Backgrounds are neutral charcoal white or flat black. Emits creative confidence (inspired by *Xulfi* portraits).
*   **Product Visuals:** Macro details of raw mechanical structures (frosted glass sheets, textured brushed steel plates, matte-finished ebonite surfaces, architectural sketches, wireframe outlines, design notes). No generic software screens or stock laptop mockups. Emits tactile realism and product studio depth.
