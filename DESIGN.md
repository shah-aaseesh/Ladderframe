---
name: LadderFrame Growth Architects
description: Executive B2B Advisory & Growth Engineering Platform
colors:
  primary: "#121417"
  accent-gold: "#800020"
  neutral-bg: "#ffffff"
  bg-light: "#f8fafc"
  bg-cream: "#faf8f5"
  text-muted: "#475569"
  bg-border: "#e2e8f0"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3rem, 5.5vw, 4.75rem)"
    fontWeight: 600
    lineHeight: "1.06"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.2rem, 3.8vw, 3.25rem)"
    fontWeight: 500
    lineHeight: "1.15"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.65"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  pill: "9999px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.85rem"
  button-gold:
    backgroundColor: "{colors.accent-gold}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.85rem"
  card-porcelain:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "2rem"
---

# Design System: LadderFrame Growth Architects

## Overview

**Creative North Star: "The Executive Architectural Sanctuary"**

LadderFrame presents an authoritative, high-taste editorial design system crafted for B2B Enterprise Founders and C-level executives. The aesthetic blends classic publishing typography with crisp modern UI geometry, avoiding tech-startup noise in favor of weight, precision, and confidence.

Key Characteristics:
- Dual-font pairing: Regal serif display headers paired with clean geometric body type.
- High-contrast porcelain surfaces punctuated by warm Antique Bronze accents.
- Staggered multi-column motion and 3D architectural visual metaphors.

## Colors

The palette balances deep dark charcoal, warm porcelain white, and muted antique gold.

### Primary
- **Deep Midnight Navy** (`#121417`): Used for primary headlines, dark-mode highlight sections, footers, and executive buttons.

### Secondary
- **Antique Gold** (`#9a6b32`): Used for section overline badges, metric highlights, key action links, and hover state rings.

### Neutral
- **Porcelain White** (`#ffffff`): Card surfaces, drawer backdrops, and active stage elements.
- **Linen Porcelain** (`#f8fafc`): Light background stage canvas.
- **Warm Cream Ivory** (`#faf8f5`): Interactive process stage backdrops.
- **Hairline Border** (`#e2e8f0`): Subtle 1px structural grid lines.

### Named Rules
**The Rarity Rule.** The Antique Gold accent is used sparingly on ≤10% of any screen viewport. Its rarity establishes instant visual authority.

## Typography

**Display Font:** Cormorant Garamond (Georgia, serif)
**Body Font:** Plus Jakarta Sans (system-ui, sans-serif)

### Hierarchy
- **Display** (Cormorant Garamond 600, clamp 3rem–4.75rem, line-height 1.06): Hero main headline.
- **Headline** (Cormorant Garamond 500, clamp 2.2rem–3.25rem, line-height 1.15): Section titles.
- **Title** (Cormorant Garamond 500, 1.4rem–1.8rem): Card titles and bottleneck headers.
- **Body** (Plus Jakarta Sans 400, 1rem, line-height 1.65): Paragraph copy, descriptions, and ledes.
- **Label** (Plus Jakarta Sans 700, 0.75rem, uppercase, letter-spacing 0.05em): Overline pills and status tags.

## Layout

Standardized container width (1200px max-width) with uniform 4.5rem top/bottom section vertical padding. Interactive sections use a 2-halved split screen grid (`360px 1fr`) with sticky left headers.

## Elevation & Depth

Surfaces rely on subtle hairline borders (`1px solid rgba(18, 20, 23, 0.07)`) and soft ambient drop shadows (`box-shadow: 0 12px 36px rgba(18, 20, 23, 0.05)`). Hover states elevate elements by `-5px` with gold shadow glows.

## Shapes

Card containers use uniform 16px corner radiuses (`var(--radius-lg)`). Interactive buttons and overline badges use full pill geometry (`var(--radius-pill)`).

## Components

### Buttons
- **Shape:** Full pill radius (`border-radius: 9999px`)
- **Primary:** Deep Midnight Navy background (`#121417`), white text, `padding: 0.75rem 1.85rem`.
- **Gold CTA:** Antique Gold background (`#9a6b32`), white text.

### Cards
- **Porcelain Executive Card:** `#ffffff` surface, 1px hairline border, 16px radius, `padding: 2rem`, shadow elevation.

## Do's and Don'ts

### Do:
- **Do** maintain strict font separation: Cormorant Garamond for titles & numbers; Plus Jakarta Sans for body prose.
- **Do** preserve 2-column staggered layout physics for bottleneck marquee cards.

### Don't:
- **Don't** use bright neon colors or generic blue accents.
- **Don't** clutter section headers with unneeded extra card boxes.
