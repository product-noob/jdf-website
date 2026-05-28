# Implementation Handoff Prompt

```text
/make-plan Redesign Jain Dosti Federation website. Current design failed audit at 15/30 with critical gaps in principles #3 aesthetic, #4 understandable, #5 unobtrusive, #6 honest, #7 long-lasting, #8 thorough, and #10 as little design as possible.

Verdict paragraph (quoted from 03-verdict.md):
> REDESIGN: The current website has strong brand ingredients and useful content, but it scores 15/30 because the first screen, copy system, visual system, and interaction detail layer are not cohesive enough for a highly professional public-facing organization.

Why redesign and not refine: The hero, language/copy system, visual system, and interaction-state layer all need structural correction; isolated styling changes would leave the same unclear first impression and inconsistent experience.

Preserve from current design:
- Warm terracotta/cream/charcoal brand direction. Evidence: src/index.css:8-13.
- Serif/sans pairing as a foundation. Evidence: src/index.css:5-6.
- Core information architecture: yatras, seva, past yatras, team, join/contact. Evidence: src/pages/Home.tsx:5-15.
- Past-yatra historical content and timeline concept. Evidence: src/components/PastYatras.tsx:52-103 and src/pages/PastYatrasList.tsx:38-95.

Discard:
- Full-screen hero slideshow with headline over image. Evidence: src/components/Hero.tsx:26-40 and src/components/Hero.tsx:54-60. Caused failure on principles #3, #4, #5.
- Untranslated/hard-coded copy mixed with translation-driven content. Evidence: src/components/JoinUs.tsx:32-39, src/components/TeamPreview.tsx:20-35, src/components/PastYatras.tsx:22. Caused failure on principles #4 and #8.
- Placeholder and inert actions. Evidence: src/components/Pillars.tsx:80-82, src/components/Footer.tsx:40, src/components/Footer.tsx:47-50. Caused failure on principles #2 and #10.
- Decorative gradients/radii/card styles without a single rule. Evidence: src/components/JoinUs.tsx:61, src/components/Team.tsx:39-46, src/components/Team.tsx:155-197. Caused failure on principles #3, #7, #10.

Top 3-5 moves from the audit (verbatim):
1. Principle #4 - Understandable: Rebuild the hero around a clear organization claim, not the motto. Use "Jain Dosti Federation" or a direct offer as the first-read headline, then place "A step towards service" as a supporting line. Evidence: src/components/Hero.tsx:54-60.
2. Principle #3 - Aesthetic: Replace the full-screen background slideshow with a restrained centered image module or editorial image panel and put the headline/CTAs below or beside it on a stable cream/alabaster surface. Evidence: src/components/Hero.tsx:26-40, src/components/Hero.tsx:54-80.
3. Principle #8 - Thorough: Add a single interaction standard for focus, disabled, loading, success, and reduced-motion across nav, carousel controls, forms, and animated sections. Evidence: src/components/Navbar.tsx:83-88, src/components/Tours.tsx:85-96, src/components/Testimonials.tsx:29-40, src/components/JoinUs.tsx:63-80.
4. Principle #6 - Honest: Replace simulated or unsupported claims with evidence-backed copy. Either connect the join form to real submission or label it as an inquiry/demo until backend support exists. Evidence: src/components/JoinUs.tsx:10-16, src/components/JoinUs.tsx:63-76, src/components/Philanthropy.tsx:43-57.
5. Principle #10 - Less, But Better: Consolidate card, radius, badge, overlay, and gradient patterns into one small design system. Remove placeholder footer links and dead buttons. Evidence: src/components/Pillars.tsx:80-82, src/components/Footer.tsx:40, src/components/Footer.tsx:47-50, src/components/Team.tsx:155-197.

Redesign principles in priority order:
1. Principle #4 - Understandable: A first-time visitor should know within 5 seconds that JDF offers Jain spiritual yatras, seva initiatives, and community membership.
2. Principle #3 - Aesthetic: Use one restrained visual system for type scale, spacing, cards, image crops, radii, shadows, and color states.
3. Principle #10 - As little design as possible: Remove every decorative or duplicate element that does not help visitors understand, explore, join, or contact.

Hero direction to plan:
- First viewport should feel calm, premium, and legible on a solid cream/alabaster surface.
- Do not place the title over the current rotating image slideshow.
- Use one carefully cropped central image or editorial image panel with stable aspect ratio.
- Place title and CTAs below or beside the image depending on viewport.
- Suggested hierarchy: eyebrow "Jain Dosti Federation"; H1 "A step towards service"; supporting copy "Spiritual yatras, seva initiatives, and lifelong community bonds rooted in Jain values."; primary CTA "Explore Yatras"; secondary CTA "Join the Community".

Deliverables for the plan:
- New information architecture for home page and secondary pages.
- New primary flow, compared side-by-side to current hero/home structure.
- Token spec: color roles, type scale, spacing scale, radius scale, shadow scale, image crop rules.
- State checklist: empty, loading, error, success, focus, disabled, reduced-motion.
- Copy system: all user-facing strings through translations, no mojibake, no hard-coded mixed-language labels.
- Accessibility checklist: labels for icon-only controls, keyboard reachability, contrast fixes, skip link or landmark plan.
- Migration path for current components: which components to rewrite first, which can be salvaged, and verification steps.
- Cutover criteria: build passes, visual QA on desktop/mobile, no placeholder links, no inert buttons, all hero text legible.

Anti-patterns to guard against:
- Porting the old full-screen hero under new styling.
- Adding more cards, gradients, or pills to create polish.
- Keeping placeholder links or fake success states.
- Treating the hero as a photo showcase instead of the first explanation of the organization.
```
