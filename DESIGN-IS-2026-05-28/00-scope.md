# Design Audit Scope

Date: 2026-05-28

## Audited Surface

- Repository: `C:\Users\princ\OneDrive\Attachments\Documents\AI Projects\JDF_Website`
- Primary route: home page, composed in `src/pages/Home.tsx`
- Main audited components: `Hero`, `Navbar`, `Pillars`, `Tours`, `PastYatras`, `Philanthropy`, `TeamPreview`, `Testimonials`, `JoinUs`, `Footer`
- Secondary audited routes: `/past-yatras`, `/past-yatras/:id`, `/team`

## Primary User

Jain community members and families evaluating Jain Dosti Federation as a trustworthy organization for spiritual yatras, seva work, and membership.

## Primary Tasks

1. Understand what JDF is and why it is credible.
2. Explore upcoming and past yatras.
3. Join the community or contact JDF.
4. Understand seva/philanthropy activity without feeling sold to.

## Constraints

- Stack: React, Vite, Tailwind CSS v4, Motion, React Router.
- Brand direction inferred from code: warm spiritual/community tone, serif headings, cream/alabaster backgrounds, terracotta primary color.
- Accessibility floor: WCAG AA for body text and controls; keyboard-reachable primary actions; motion should honor reduced-motion preferences.
- User concern: current hero image/title treatment feels odd and not legible enough. Proposed direction: smaller centered image with title and CTAs below.

## Inspection Notes

- Production build was run successfully with `cmd.exe /c npm run build`.
- In-app browser automation failed in the current sandbox, so screenshot-dependent findings are marked as code-inferred rather than visually measured.
- Source text contains mojibake in several Hindi strings, visible in source excerpts. This is treated as a user-facing design quality issue because the app exposes a language toggle.
