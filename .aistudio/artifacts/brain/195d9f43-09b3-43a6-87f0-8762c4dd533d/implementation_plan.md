# Implementation Plan: Navigation, CTA Buttons & Subtitle Consistency

## 1. Icon Cleanups in Buttons & Menus
- **Hero Section (`src/components/Hero.tsx`)**:
  - Remove the `<Handshake />` icon from the `"Sponsor Us"` button so it renders clean text only.
- **Top Bar & Mobile Drawer (`src/components/Navbar.tsx`)**:
  - In top bar buttons, change text from `"Join Us"` to `"Apply Now"`, remove `<ExternalLink />` icon, and keep Ontario Tech blue (`#0077CA`).
  - In mobile drawer:
    - Remove `<ExternalLink />` icon from the application form button and set text to `"Apply Now"`.
    - Remove `<Handshake />` icon from `"Sponsor OTAS"` button so both buttons render clean, icon-free text.

## 2. Rename 'Team Info' to 'JOIN US'
- **Navigation Links (`src/components/Navbar.tsx`)**:
  - Change nav item label from `"Team Info"` to `"JOIN US"`.
- **Footer Links (`src/components/Footer.tsx`)**:
  - Change `"Student Application"` to `"Join Us"`.
- **Get Involved Section (`src/data/content.ts` & `src/components/GetInvolvedSection.tsx`)**:
  - Update main section heading to `"Join Us"`.
  - In the application banner at the bottom of the section, update the CTA button to Ontario Tech light blue (`#0077CA`, `hover:bg-[#008AE6]`, text white) with text `"Apply Now"` (matching the top bar).

## 3. Contact Section Cleanup (`src/components/ContactSection.tsx`)
- Remove the redundant `"Connect with the team"` text inside the card header box.

## 4. Perfect Subtitle Consistency Across Entire Site
- **Rule**: Mini orange uppercase subtitles (`<SectionSubheading>`) are used **strictly at the Section-Top** above the main section title (e.g. `Our Mission & Origins`, `National Collegiate Challenge`, `Technical Development`, `Industry & Community Partners`, `Students & New Recruits`, `Official Inquiries`).
- **Remove from Inside Boxes**:
  - In `CompetitionSection.tsx`: Convert subsection headers (`About AEAC`, `Our Planned Path`) into clean standard bold headings (`h3`).
  - In `SponsorUsSection.tsx`: Convert `Why Support Our Team Now`, `Sponsorship Tiers`, `Foundational Hardware & Resource Needs`, `What We Offer Partners`, and `Ready to Discuss a Partnership?` into clean standard bold titles (`h3`) without mini orange eyebrow styling. Remove the redundant `"Collegiate Partnerships"` label.
  - In `GetInvolvedSection.tsx`: Convert `Team Departments` into a clean standard title (`h3`).
  - In `ContactSection.tsx`: Convert `Official Team Channels` into a clean standard title (`h3`).

## 5. Verification & Testing
- Validate with `lint_applet` and `compile_applet`.
- Ensure `bun.lock` is absent and `.gitignore` remains intact.
- Verify consistent styling across desktop and mobile.
