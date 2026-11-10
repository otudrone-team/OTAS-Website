# Implementation Plan: Targeted Enhancements & Polish

Based on your feedback, we are implementing all suggested enhancements **excluding** the metric spec row and PDF download.

---

## 1. Roadmap Copy & Typo Corrections
* **File**: `src/data/content.ts`
* **Change**:
  - Correct `"resiliant"` to `"resilient"`.
  - Correct `"next years"` to `"next year's"`.
  - Ensure the Year 1 milestone reads clean, professional, and natural.

---

## 2. Hero Secondary CTA Button Unification
* **File**: `src/components/Hero.tsx`
* **Change**:
  - Update the secondary button text from `"Student Application"` to `"Apply Now"`.
  - Retain the dark card styling with border hover transition (`hover:border-[#FF7045]`) to maintain visual hierarchy with the primary orange `"Sponsor Us"` button.
  - Ensures seamless CTA terminology across the Hero, Navigation Bar, and Join Us section.

---

## 3. Prospective Student FAQ Accordion in "Join Us"
* **Files**: `src/data/content.ts`, `src/components/GetInvolvedSection.tsx`
* **Design & Features**:
  - Place a lightweight, collapsible 3-item FAQ accordion directly above the "Ready to Join the Team?" application banner.
  - Topics covered:
    1. **Time Commitment**: ~3–5 hours/week, flexible around midterms, exams, and class schedules.
    2. **Eligible Programs**: All Ontario Tech students across any faculty (Engineering, Computer Science, Business, Science, etc.) are welcome.
    3. **Application Next Steps**: Continuous intake; team leads follow up via student email regarding meeting times and subteam onboarding.
  - Smooth animation with chevron indicator and Ontario Tech blue (`#0077CA`) accents.

---

## 4. Accessibility & Keyboard Navigation Focus Rings
* **Files**: `src/index.css`, `src/components/Navbar.tsx`, `src/components/Hero.tsx`, `src/components/SponsorUsSection.tsx`, `src/components/GetInvolvedSection.tsx`
* **Change**:
  - Add standard `focus-visible:ring-2 focus-visible:ring-[#F15A32] focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#191B1F]` across buttons, links, and interactive elements.
  - Ensures clean navigation for keyboard and screen-reader users without affecting mouse-click aesthetics.

---

## Verification Plan
* Run `lint_applet` and `compile_applet` to confirm zero syntax or type errors.
* Verify mobile layout and drawer functionality.
* Confirm that `bun.lock` remains deleted.
