---
name: LadderFrame Growth Architects
description: Executive B2B Advisory & Growth Engineering Platform
colors:
  primary: "#121417"
  accent-maroon: "#800020"
  neutral-bg: "#ffffff"
  bg-light: "#f8fafc"
  bg-cream: "#faf8f5"
  text-muted: "#525b67"
  bg-border: "rgba(18, 20, 23, 0.08)"
typography:
  display:
    fontFamily: "Aptos Display, Plus Jakarta Sans, Inter, -apple-system, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 4.25rem)"
    fontWeight: 700
    lineHeight: "1.08"
  headline:
    fontFamily: "Aptos Display, Plus Jakarta Sans, Inter, -apple-system, sans-serif"
    fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)"
    fontWeight: 700
    lineHeight: "1.14"
  body:
    fontFamily: "Aptos, Bierstadt, Plus Jakarta Sans, Inter, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.65"
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "28px"
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
  button-maroon:
    backgroundColor: "{colors.accent-maroon}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.85rem"
  card-porcelain:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.lg}"
    padding: "2.25rem 2rem"
---

# Design System: LadderFrame Growth Architects

## Overview

**Creative North Star: "The Executive Architectural Sanctuary"**

LadderFrame presents an authoritative, high-taste editorial design system crafted for B2B Enterprise Founders and C-level executives. The aesthetic combines modern architectural geometry with rich editorial accents, avoiding tech-startup noise in favor of weight, precision, and confidence.

Key Characteristics:
- Universal Aptos typography system with refined neo-grotesque fallbacks.
- High-contrast warm porcelain surfaces (`#FAF8F5`) punctuated by Regal Maroon (`#800020`) accents for all italics and highlights.
- Staggered multi-column motion, 3D architectural visual metaphors, and integrated partner ecosystem networks.

## Colors

The palette balances deep dark charcoal, warm porcelain white, and regal maroon.

### Primary
- **Deep Midnight Ink** (`#121417`): Used for primary headlines, dark-mode highlight sections, footers, and executive buttons.

### Accent
- **Regal Maroon** (`#800020`): Used universally for all italic text elements, section overline badges, active indicators, and key action buttons.

### Neutral Surfaces
- **Porcelain White** (`#ffffff`): Card surfaces, drawer backdrops, and active stage elements.
- **Warm Linen Porcelain** (`#faf8f5`): Light background stage canvas and section backgrounds.
- **Hairline Border** (`rgba(18, 20, 23, 0.08)`): Subtle 1px structural grid lines.

### Named Rules
**The Universal Maroon Rule.** All italic typography (`em`, `i`, italic headings, and emphasis spans) is rendered in Regal Maroon (`#800020`) to establish instant visual rhythm and editorial prestige.

## Typography

**Primary Font:** Aptos (with Plus Jakarta Sans, Inter, and system fallbacks)
**Display Headings:** Aptos Display (bold weight 700 with italic maroon accents)

### Hierarchy
- **Display** (Aptos Display 700, clamp 2.75rem–4.25rem, line-height 1.08): Hero main headline.
- **Headline** (Aptos Display 700, clamp 2.2rem–3.2rem, line-height 1.14): Section titles.
- **Title** (Aptos Display 700, 1.35rem–1.55rem): Card titles and bottleneck headers.
- **Body** (Aptos 400, 1rem, line-height 1.65): Paragraph copy, descriptions, and ledes.
- **Label** (Aptos 700, 0.75rem, uppercase, letter-spacing 0.1em): Overline pills and status tags.

## Layout

Standardized container width (1280px max-width) with uniform 5.5rem–6.5rem top/bottom section vertical padding.

## Elevation & Depth

Surfaces rely on subtle hairline borders (`1px solid rgba(18, 20, 23, 0.08)`) and soft ambient drop shadows (`box-shadow: 0 4px 20px rgba(18, 20, 23, 0.04)`). Hover states elevate elements by `-6px` to `-8px` with refined elevation shadows.

## Shapes

Card containers use uniform 20px corner radiuses (`var(--radius-lg)`). Interactive buttons and overline badges use full pill geometry (`var(--radius-pill)`).
