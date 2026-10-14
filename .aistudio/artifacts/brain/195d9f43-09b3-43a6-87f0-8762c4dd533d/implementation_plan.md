# Implementation Plan: Hero, Header, and Sponsorship System Overhaul

## 1. Header Visual Depth & "Join Us" Integration (`src/components/Navbar.tsx` & `src/data/content.ts`)
- **Frosted Dark Glass Header**:
  - Replace the flat solid tone with a modern **frosted glass header**: `bg-[#191B1F]/80 backdrop-blur-md border-b border-[#3D4349]/70 shadow-lg`.
  - When scrolling or resting, this gives clean structural separation, elevated depth, and makes the white SVG logo pop without blending into the background.
- **Remove Subtitle Text Line**:
  - Completely remove the `"Student Engineering Design Team"` text next to the OTAS logo for a crisp, clean brand presentation.
- **Top-Right "Join Us" Action Button**:
  - Add a dedicated `"Join Us"` CTA in the top right of the navbar that links to the recruitment form (`SITE_CONFIG.externalForms.studentApplicationUrl`).
  - Add a `recruitmentOpen: boolean` toggle in `SITE_CONFIG` so it can be disabled or hidden in seconds when intake closes.
  - Include it inside the mobile dropdown drawer as well.

## 2. Hero Section Refinements (`src/components/Hero.tsx`)
- **Remove Mini Mark & Context Line**:
  - Completely remove the top badge and `"OTAS | Ontario Tech Aerial Systems · Ontario Tech University"` text from both desktop and mobile views.
- **Full-Width Horizontal Headline**:
  - Make `"Ontario Tech’s Drone Design Team."` span horizontally across the desktop view with prominent typography and spacing.
- **Compact Mobile Drone Below CTAs**:
  - Position the animated drone directly below the action buttons (`Sponsor Us`, `Student Application`, `Read About the Team`) on mobile.
  - Set a compact size (`max-w-[240px] sm:max-w-[280px]`) so visitors see the headline and primary tap targets immediately without sacrificing the drone animation.

## 3. Sponsorship 3-Tier System & Condensed Needs (`src/data/content.ts` & `src/components/SponsorUsSection.tsx`)
- **3-Tier Sponsorship Grid**:
  - **Ground Link Tier** (`$500 – $999`): Website logo, social welcome spotlight, and term progress reports.
  - **Flight Path Tier** (`$1,000 – $2,500`): Medium logo on testbed airframe, recruitment shoutouts, lab visit invite, and talent engagement.
  - **Mission Partner Tier** (`$2,500+`): Premier logo on competition aircraft & team apparel, dedicated flight demonstration, and featured speaking access.
- **Condensed Foundational Needs (Two-Module Split)**:
  - Conserve vertical real estate by condensing into two side-by-side modules:
    1. **Monetary Sponsorship Funds**: Competition registration, AEAC travel logistics, avionics, sensor payloads, and prototyping materials.
    2. **In-Kind Equipment & Resources**: Drone hardware (motors, ESCs, frames, flight controllers), bench equipment & tools (soldering irons, DMMs, crimpers, storage), battery & charging safety gear (LiPo chargers, fire-safe bags, power supplies), and CAD/fabrication resources.

## 4. Dual Sponsorship Action Links & Auto-Copy Email System (`src/components/SponsorUsSection.tsx`)
- In the "Ready to Discuss a Partnership / Sponsor" callout:
  1. **Ready to Sponsor OTAS**: Direct link to the university clubs portal: `https://engineering.ontariotechu.ca/current-students/current-undergraduate/clubs_and_societies/index.php`.
  2. **Have Questions for OTAS?**: Direct `mailto:otudrone@gmail.com` link paired with a dedicated **"Copy Email"** button (`navigator.clipboard.writeText`) with instant checkmark feedback.
- Ensure all interactive email touchpoints provide both one-click email opening and one-click clipboard copying.

## 5. Lockfile & Cloudflare Pages Build Stability
- `bun.lock` has been deleted and added to `.gitignore` so local Bun/container lockfiles never get pushed to GitHub or disrupt Cloudflare Pages builds.

## 6. Verification & Testing
- Validate with `npm run lint` and `npm run build`.
- Verify responsive layout across desktop and mobile viewports.
