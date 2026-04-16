# Design System Specification: Scientific Precision & Simulation

## 1. Overview & Creative North Star: "The Digital Astral"
The Creative North Star for this design system is **The Digital Astral**. We are moving away from the "cluttered cockpit" cliché of scientific tools and toward a high-end, editorial approach to complex data. This system treats simulation data as a high-fidelity art form—clean, authoritative, and deeply immersive.

To break the "template" look, we utilize **intentional asymmetry**. Primary simulation viewports should dominate the layout, while control panels use overlapping glassmorphism layers to create a sense of three-dimensional space. We don't just show data; we curate an environment where the physical and digital twins merge.

---

## 2. Colors: Tonal Depth & Luminous Accents
This system relies on a deep, obsidian foundation to let the scientific data "glow" with purpose.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for defining sections. Structural separation must be achieved through **Background Color Shifts**. For example, a global navigation sidebar should use `surface-container-low` while the main simulation stage uses `surface`. The transition between these tones is the boundary.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of glass lenses.
*   **Base Layer:** `surface` (#0c0c1f) for the primary application background.
*   **Secondary Context:** `surface-container-low` (#111127) for inactive side panels.
*   **Active Interaction:** `surface-container-high` (#1d1d37) for modal overlays or active control hubs.
*   **Floating Elements:** Use `surface-variant` (#23233f) with a 60% opacity and 20px backdrop blur to create a "glass" panel that inherits the underlying simulation's colors.

### The "Glass & Gradient" Rule
Main Call-to-Actions (CTAs) and critical data headers should utilize a subtle linear gradient: `primary` (#72dcff) to `primary-container` (#00d2ff) at a 135-degree angle. This adds "soul" and depth to the interface, preventing the flat, sterile look of standard bootstrap-style dashboards.

---

## 3. Typography: The Engineering/Editorial Dualism
We use a high-contrast typographic pairing to balance technical rigor with premium readability.

*   **Display & Headline (Space Grotesk):** This is our "Editorial" voice. The geometric quirks of Space Grotesk lend a futuristic, aerospace aesthetic. Use `display-lg` for mission-critical metrics and `headline-sm` for section headers.
*   **Body & Labels (Inter):** Our workhorse. Inter provides maximum legibility for complex descriptions and UI labels. Use `label-md` for all non-numerical UI elements.
*   **Numerical Data (Monospaced Fallback):** While not in the primary tokens, all numerical simulation values (coordinates, vectors, timestamps) must use a monospaced font (JetBrains Mono) to ensure tabular alignment and a "technical" feel.

---

## 4. Elevation & Depth: Tonal Layering
We reject traditional drop shadows in favor of **Ambient Luminosity**.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-highest` card inside a `surface-container-low` parent. This creates a "lift" via value contrast rather than artificial light.
*   **Ambient Shadows:** For floating glass panels, use a shadow with a 40px blur, 0px offset, and 6% opacity using the `on-surface` (#e5e3ff) color. This creates a soft "nebula" glow around the panel.
*   **The "Ghost Border" Fallback:** If a technical boundary is required for high-density data grids, use the `outline-variant` (#46465c) token at **15% opacity**. It should feel like a faint laser-etched line, not a box.

---

## 5. Components: Precision Engineered

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`). `md` (0.375rem) roundedness. No border.
*   **Secondary:** Ghost style. `outline` border at 30% opacity. Text in `primary`.
*   **Tertiary (Status):** Small `label-sm` text with a 4px glowing dot using `tertiary` (#8eff71) for "Active" or `secondary` (#fd9d1a) for "Warning."

### Input Fields & Controls
*   **Inputs:** Background: `surface-container-highest`. Bottom-only border (2px) using `outline-variant` that transitions to `primary` on focus.
*   **Chips:** Use for simulation parameters. Background: `surface-variant` at 40% opacity. `sm` (0.125rem) roundedness for a sharper, technical look.

### Cards & Lists
*   **The Rule of No Dividers:** Forbid the use of line dividers between list items. Use 12px of vertical spacing (`body-md` scale) or alternate background tones between `surface-container-low` and `surface-container-lowest`.

### Technical Gauges (Custom Component)
*   For rotation and coordinates, use "Circular Trackers." A 2px stroke of `outline-variant` for the track, with a `primary` glow indicating the current value.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetry:** Place technical readouts in a 1/3 column on the right, leaving the left 2/3 for the immersive 3D simulation.
*   **Leverage Luminous Status:** Use `tertiary` (#8eff71) for "System Healthy" indicators—the neon green should feel like a light source.
*   **Embrace Space:** Use generous margins between data clusters to prevent cognitive overload.

### Don't:
*   **Don't use 100% Black:** Never use `#000000` for backgrounds (except `surface-container-lowest`). It kills the depth of the glassmorphism.
*   **Don't use Rounded Corners for Everything:** While we have a scale, keep simulation viewports and main panels at `sm` (0.125rem) or `none`. Use `xl` only for floating "pill" buttons to create a visual hierarchy of "UI vs. Content."
*   **Don't use standard icons:** Avoid generic "Home" or "Settings" icons. Use technical, thin-stroke (1px) SVG icons that feel like architectural blueprints.