# Design Audit Evidence

## Structural Evidence

- Home page structure is a long stacked marketing page: `Hero`, `Pillars`, `Tours`, `PastYatras`, `Philanthropy`, `TeamPreview`, `Testimonials`, `JoinUs` in `src/pages/Home.tsx:5-15`.
- Hero has 2 primary CTAs, `Explore Tours` and `Join Community`, on top of a full-screen changing background image: `src/components/Hero.tsx:26-80`.
- Hero uses a full viewport height section with a 592px minimum height: `src/components/Hero.tsx:26`.
- Hero rotates 6 images every 5 seconds and animates opacity/scale: `src/components/Hero.tsx:5-21`, `src/components/Hero.tsx:33-36`.
- Navigation repeats the join action already present in the hero: `src/components/Navbar.tsx:66-71`.
- Tours section has filter buttons, carousel arrows, horizontal scroll, card hover overlay, and view itinerary button: `src/components/Tours.tsx:63-97`, `src/components/Tours.tsx:102-131`.
- Tours imports `language` but does not use it, suggesting unfinished implementation: `src/components/Tours.tsx:7`.
- Pillars section has `Learn More` buttons that are actual `button` elements but have no click handler: `src/components/Pillars.tsx:80-82`.
- Footer includes many placeholder links with `href="#"`: `src/components/Footer.tsx:40`, `src/components/Footer.tsx:47-50`, `src/components/Footer.tsx:80-81`.
- Team page nests large white translucent panels containing individual member cards: `src/components/Team.tsx:155-168`, `src/components/Team.tsx:170-200`.
- Max apparent component nesting is highest in Team and Join sections due to card-in-panel patterns and repeated nested decoration: `src/components/Team.tsx:155-197`, `src/components/JoinUs.tsx:59-141`.

## Visual Evidence

- Global design tokens define two fonts and five named colors: `src/index.css:4-14`.
- Type styles are mostly Tailwind utility driven rather than centralized. Observed major heading sizes include `text-5xl`, `md:text-7xl`, `lg:text-[5.5rem]` in hero; `text-3xl`, `md:text-4xl`; `md:text-5xl`; `lg:text-7xl` across details: `src/components/Hero.tsx:58`, `src/components/Pillars.tsx:34`, `src/components/Tours.tsx:41`, `src/pages/PastYatraDetail.tsx:52`.
- Border radius is inconsistent: `rounded-full`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-[24px]`, `rounded-[28px]`, `rounded-lg`, `rounded-l-[100px]`: examples at `src/components/Hero.tsx:49`, `src/components/JoinUs.tsx:87`, `src/components/Pillars.tsx:57`, `src/components/Tours.tsx:115`, `src/components/Team.tsx:155`, `src/components/PastYatras.tsx:65`, `src/components/JoinUs.tsx:22`.
- Hero uses large white serif title over a black 60% overlay on moving photos: `src/components/Hero.tsx:28-40`, `src/components/Hero.tsx:54-60`.
- Multiple image-overlay patterns exist: hero black overlay, pillar gradient overlay, tour hover overlay, detail page gradient overlay: `src/components/Hero.tsx:40`, `src/components/Pillars.tsx:65`, `src/components/Tours.tsx:128`, `src/pages/PastYatraDetail.tsx:31`.
- Several decorative gradients and accent strips appear outside the base token system: `src/components/JoinUs.tsx:61`, `src/components/TeamPreview.tsx:49`, `src/components/Team.tsx:39-46`, `src/components/Team.tsx:98`, `src/components/Team.tsx:191`.
- Primary color contrast measured from source tokens: `#D96C4A` on white is about 3.39:1; white on `#D96C4A` is about 3.39:1. This is below WCAG AA for normal text and small button labels.
- Slate on alabaster contrast is strong at about 8.49:1 from `#4A4A4A` on `#FAFAFA`.
- Production CSS size is 51.36 KB raw / 8.31 KB gzip from `npm run build`.

## Copy And Honesty Evidence

- Main hero title uses motto text, not a clear product/organization claim: `src/components/Hero.tsx:60`.
- Header brand says "Jain Dosti Federation": `src/components/Navbar.tsx:30-32`.
- Hero image alt is generic, "Peaceful Journey", for all rotating images: `src/components/Hero.tsx:31`.
- The Join section has hard-coded English copy instead of translated strings: `src/components/JoinUs.tsx:32-39`, `src/components/JoinUs.tsx:74-75`, `src/components/JoinUs.tsx:80-136`.
- Team preview has hard-coded English copy instead of translated strings: `src/components/TeamPreview.tsx:20-35`.
- Team page has hard-coded English copy instead of translated strings: `src/components/Team.tsx:127-145`, `src/components/Team.tsx:158-177`, `src/components/Team.tsx:195-196`.
- Past Yatra components contain hard-coded mojibake Hindi labels: `src/components/PastYatras.tsx:22`, `src/components/PastYatras.tsx:47`, `src/components/PastYatras.tsx:102`, `src/pages/PastYatrasList.tsx:19`, `src/pages/PastYatrasList.tsx:90`, `src/pages/PastYatraDetail.tsx:39`.
- Navbar language toggle itself contains mojibake Hindi text: `src/components/Navbar.tsx:63`.
- Several claims need proof or better framing: "1K+ Active Members" in `src/components/JoinUs.tsx:44-48`; philanthropy counters `15000+`, `50+`, `1000+` in `src/components/Philanthropy.tsx:43-57`; "100% transparent funding" from translations used at `src/components/Philanthropy.tsx:119-122`.
- The join form is honest about submission only in the UI state, but no backend persistence is present; it sets a success state and clears fields after 4 seconds: `src/components/JoinUs.tsx:10-16`, `src/components/JoinUs.tsx:63-76`.

## Weight And Friction Evidence

- Production JS bundle is 450.68 KB raw / 138.06 KB gzip from `npm run build`.
- Production CSS bundle is 51.36 KB raw / 8.31 KB gzip from `npm run build`.
- External Google Fonts are loaded from CSS: `src/index.css:1`.
- Initial page references six local hero images and auto-rotates them: `src/components/Hero.tsx:5-21`.
- Multiple external Unsplash images are used in homepage content: `src/components/Pillars.tsx:14`, `src/components/Pillars.tsx:21`, tour and philanthropy image URLs in `src/i18n/translations.ts`.
- Idle/near-idle animations include hero image rotation, hero entrance animations, scroll-triggered animations throughout sections, carousel motion, counters, hover scales, and testimonial transitions: examples at `src/components/Hero.tsx:18-21`, `src/components/Hero.tsx:33-66`, `src/components/Philanthropy.tsx:8-31`, `src/components/Testimonials.tsx:45-50`.
- No `prefers-reduced-motion` gate is visible in source for Motion components or animated counters.

## Accessibility Evidence

- Main nav has a semantic `nav`: `src/components/Navbar.tsx:36`.
- Mobile menu button has no accessible label beyond the icon state; no `aria-label`, `aria-expanded`, or `aria-controls`: `src/components/Navbar.tsx:83-88`.
- Language toggle has `title` on desktop and sr-only text on mobile, but the visible mojibake label compromises clarity: `src/components/Navbar.tsx:57-64`, `src/components/Navbar.tsx:76-82`.
- Tour carousel arrow buttons lack accessible labels: `src/components/Tours.tsx:85-96`.
- Testimonial arrow buttons lack accessible labels: `src/components/Testimonials.tsx:29-40`.
- Testimonial dots have accessible labels: `src/components/Testimonials.tsx:69-75`.
- Form labels are present for name, phone, city, and email: `src/components/JoinUs.tsx:80-127`.
- Focus styles exist on form inputs, but many buttons/links rely on default focus or hover-only affordance: `src/components/JoinUs.tsx:87`, `src/components/Hero.tsx:69-80`, `src/components/Tours.tsx:69-96`.
- Footer social links have icon-only content with no accessible labels: `src/components/Footer.tsx:25-30`.
