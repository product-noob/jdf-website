# Verdict

REDESIGN: The current website has strong brand ingredients and useful content, but it scores 15/30 because the first screen, copy system, visual system, and interaction detail layer are not cohesive enough for a highly professional public-facing organization.

## Why Redesign, Not Refine

This is not just a styling cleanup. The hero is the load-bearing first impression, and it currently combines a moving image background, large motto title, overlay, drop shadow, and multiple pill/CTA elements in a way that makes the page feel less clear and less premium. The language system and state system also need structural correction, not isolated polish.

## Highest-Leverage Moves

1. Principle #4 - Understandable: Rebuild the hero around a clear organization claim, not the motto. Use "Jain Dosti Federation" or a direct offer as the first-read headline, then place "A step towards service" as a supporting line. Evidence: `src/components/Hero.tsx:54-60`.
2. Principle #3 - Aesthetic: Replace the full-screen background slideshow with a restrained centered image module or editorial image panel and put the headline/CTAs below or beside it on a stable cream/alabaster surface. Evidence: `src/components/Hero.tsx:26-40`, `src/components/Hero.tsx:54-80`.
3. Principle #8 - Thorough: Add a single interaction standard for focus, disabled, loading, success, and reduced-motion across nav, carousel controls, forms, and animated sections. Evidence: `src/components/Navbar.tsx:83-88`, `src/components/Tours.tsx:85-96`, `src/components/Testimonials.tsx:29-40`, `src/components/JoinUs.tsx:63-80`.
4. Principle #6 - Honest: Replace simulated or unsupported claims with evidence-backed copy. Either connect the join form to real submission or label it as an inquiry/demo until backend support exists. Evidence: `src/components/JoinUs.tsx:10-16`, `src/components/JoinUs.tsx:63-76`, `src/components/Philanthropy.tsx:43-57`.
5. Principle #10 - Less, But Better: Consolidate card, radius, badge, overlay, and gradient patterns into one small design system. Remove placeholder footer links and dead buttons. Evidence: `src/components/Pillars.tsx:80-82`, `src/components/Footer.tsx:40`, `src/components/Footer.tsx:47-50`, `src/components/Team.tsx:155-197`.

## Recommended Hero Direction

The user's proposed idea is directionally right: separate image and text instead of forcing the title onto a busy image. The best version is not simply "make the current image smaller"; it is to make the hero a composed editorial introduction.

Recommended layout:

- Keep the first viewport calm and bright: cream/alabaster background, fixed navbar, clear brand presence.
- Place a carefully cropped hero image in the center or upper center with a stable aspect ratio, soft but restrained radius, and no rotating slideshow.
- Put the main title below the image on solid background for maximum legibility.
- Suggested hierarchy:
  - Eyebrow: "Jain Dosti Federation"
  - H1: "A step towards service"
  - Supporting copy: "Spiritual yatras, seva initiatives, and lifelong community bonds rooted in Jain values."
  - Primary CTA: "Explore Yatras"
  - Secondary CTA: "Join the Community"
- If the image remains above the text, keep it around 52-64% viewport width on desktop and a 16:9 or 5:3 crop; on mobile, make it full-width within page padding and keep text below.
- Avoid title over image unless the image is deliberately dark/quiet and selected for text placement. The current rotating images do not provide that stability.

## Preserve

- Warm terracotta/cream/charcoal brand direction: `src/index.css:8-13`.
- Serif/sans pairing as a foundation: `src/index.css:5-6`.
- Core information architecture: yatras, seva, past yatras, team, join/contact: `src/pages/Home.tsx:5-15`.
- Past-yatra historical content and timeline concept: `src/components/PastYatras.tsx:52-103`, `src/pages/PastYatrasList.tsx:38-95`.

## Discard

- Full-screen hero slideshow with headline over image. Evidence: `src/components/Hero.tsx:26-40`, `src/components/Hero.tsx:54-60`. Caused failure on principles #3, #4, #5.
- Untranslated/hard-coded copy mixed with translation-driven content. Evidence: `src/components/JoinUs.tsx:32-39`, `src/components/TeamPreview.tsx:20-35`, `src/components/PastYatras.tsx:22`. Caused failure on principles #4 and #8.
- Placeholder and inert actions. Evidence: `src/components/Pillars.tsx:80-82`, `src/components/Footer.tsx:40`, `src/components/Footer.tsx:47-50`. Caused failure on principles #2 and #10.
- Decorative gradients/radii/card styles without a single rule. Evidence: `src/components/JoinUs.tsx:61`, `src/components/Team.tsx:39-46`, `src/components/Team.tsx:155-197`. Caused failure on principles #3, #7, #10.
