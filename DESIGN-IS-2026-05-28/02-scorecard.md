# Dieter Rams Scorecard

Total: 15/30

## 1. Good design is innovative - Score: 1/3

Evidence: The homepage uses familiar full-screen hero, card grids, carousels, counters, testimonials, and join form patterns (`01-evidence.md`, Structural Evidence).

Justification: It is not a copied flow, but it mostly imitates standard nonprofit/landing-page patterns with small stylistic variation.

## 2. Good design makes a product useful - Score: 2/3

Evidence: The primary tasks are present: explore yatras, join, view past yatras, view team, and contact details (`src/pages/Home.tsx:5-15`, `src/components/Navbar.tsx:14-19`, `src/components/Footer.tsx:54-72`).

Justification: The site supports the task, but inactive placeholder actions and dead links weaken utility (`src/components/Pillars.tsx:80-82`, `src/components/Footer.tsx:40`, `src/components/Footer.tsx:47-50`).

## 3. Good design is aesthetic - Score: 1/3

Evidence: The core tokens are warm and promising (`src/index.css:4-14`), but radii, gradients, overlays, shadows, and card treatments vary widely across components (`01-evidence.md`, Visual Evidence).

Justification: There is a visible visual language, but there are more than five inconsistencies and the hero title over moving imagery is a jarring load-bearing violation.

## 4. Good design makes a product understandable - Score: 1/3

Evidence: The hero uses a motto as the main H1 (`src/components/Hero.tsx:54-60`) and several actions are unclear or inert, including `Learn More` buttons without handlers (`src/components/Pillars.tsx:80-82`).

Justification: A first-time user can understand "Jain Dosti Federation", but the first screen does not clearly state what the organization offers or why the visitor should act.

## 5. Good design is unobtrusive - Score: 1/3

Evidence: The hero has a full-screen rotating image, black overlay, pill label, huge title, drop shadow, two CTAs, and animated entrance stack (`src/components/Hero.tsx:26-80`).

Justification: The chrome and image treatment compete with the message instead of quietly supporting it.

## 6. Good design is honest - Score: 1/3

Evidence: The join form shows success without persistence (`src/components/JoinUs.tsx:10-16`, `src/components/JoinUs.tsx:63-76`), and large claims/counters are not backed by citations in the interface (`src/components/Philanthropy.tsx:43-57`, `src/components/JoinUs.tsx:44-48`).

Justification: There is no dark pattern, but multiple claims and simulated submission behavior need more transparent framing.

## 7. Good design is long-lasting - Score: 1/3

Evidence: Repeated large rounded cards, pill badges, hover zooms, blur overlays, gradient accent strips, and carousel-heavy sections appear throughout (`01-evidence.md`, Visual Evidence).

Justification: The warm brand could age well, but the current visual language leans on contemporary landing-page trends.

## 8. Good design is thorough down to the last detail - Score: 1/3

Evidence: Success and form labels exist in Join (`src/components/JoinUs.tsx:63-80`), but empty/loading/error/disabled states and reduced-motion handling are not visible; icon-only controls lack labels in several places (`src/components/Tours.tsx:85-96`, `src/components/Testimonials.tsx:29-40`, `src/components/Footer.tsx:25-30`).

Justification: Some detail work is present, but at least three important states/interaction details are missing or rough.

## 9. Good design is environmentally friendly - Score: 2/3

Evidence: Production JS is 450.68 KB raw / 138.06 KB gzip and CSS is 51.36 KB raw / 8.31 KB gzip; however, motion is not visibly gated and external fonts/images add network weight.

Justification: The bundle is under 500 KB raw, but idle hero animation and scroll animation should respect reduced-motion and image loading should be more intentional.

## 10. Good design is as little design as possible - Score: 1/3

Evidence: The page includes duplicated join prompts, multiple carousel/overlay/card systems, placeholder footer resources, dead Learn More buttons, decorative flair, and nested card panels (`src/components/Navbar.tsx:66-71`, `src/components/Hero.tsx:69-80`, `src/components/JoinUs.tsx:21-22`, `src/components/Team.tsx:155-197`).

Justification: Several elements can be removed or simplified without harming the primary tasks; in fact, removing them would make the site clearer.
