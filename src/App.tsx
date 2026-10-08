/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { StatusBanner } from './components/StatusBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CompetitionSection } from './components/CompetitionSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SponsorUsSection } from './components/SponsorUsSection';
import { GetInvolvedSection } from './components/GetInvolvedSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { SectionDivider } from './components/SectionDivider';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const isProgrammaticScroll = useRef<boolean>(false);
  const scrollTimeout = useRef<number | null>(null);

  // Initialize and simulate load sequence to display the OTAS draw-in animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  // Smooth navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    isProgrammaticScroll.current = true;

    if (scrollTimeout.current) {
      window.clearTimeout(scrollTimeout.current);
    }
    // Re-enable scroll spy after programmatic scroll settles
    scrollTimeout.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 800);

    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Dynamically measure the sticky header height or fall back to 64px
      const headerElement = document.querySelector('.sticky');
      const headerHeight = headerElement ? headerElement.getBoundingClientRect().height : 64;
      
      // Calculate target position with comfortable breathing room below sticky nav
      const elementRect = element.getBoundingClientRect();
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      const targetTop = elementRect.top + currentScrollY - headerHeight - 12;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      });
    }
  };

  // Scroll spy with debounced RAF to update active nav tab smoothly
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['hero', 'about', 'competition', 'projects', 'sponsor-us', 'get-involved', 'contact'];
          const scrollPosition = window.scrollY + 130;

          if (window.scrollY < 200) {
            setActiveSection('hero');
            ticking = false;
            return;
          }

          // Check if at the bottom of the page -> set to contact
          if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
            setActiveSection('contact');
            ticking = false;
            return;
          }

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              if (scrollPosition >= top) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#191B1F] text-[#F1F0EC] flex flex-col font-sans selection:bg-[#F15A32] selection:text-white">
        {/* Persistent Combined Sticky Header Container */}
        <div className="sticky top-0 z-40 w-full shadow-md">
          {/* Super Top Notice Banner (Provisional Recognition / Under Review) */}
          <StatusBanner />

          {/* Top Bar Navigation */}
          <Navbar
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
        </div>

        {/* Main Page Content */}
        <main className="flex-1">
          {/* 1. Home / Hero */}
          <Hero onNavigate={handleNavigate} />

          <SectionDivider />

          {/* 2. About */}
          <AboutSection />

          <SectionDivider />

          {/* 3. Competition / AEAC */}
          <CompetitionSection />

          <SectionDivider />

          {/* 4. Projects */}
          <ProjectsSection />

          <SectionDivider />

          {/* 5. Sponsor Us (Public Face for Sponsors & Industry Partners) */}
          <SponsorUsSection />

          <SectionDivider />

          {/* 6. Get Involved / Join (Student Application Form) */}
          <GetInvolvedSection />

          <SectionDivider />

          {/* 7. Contact */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </>
  );
}
