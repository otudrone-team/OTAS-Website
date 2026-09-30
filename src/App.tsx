/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Smooth navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll spy to update active nav tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'competition', 'projects', 'sponsor-us', 'get-involved', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section === 'hero' && window.scrollY < 300) {
          setActiveSection('hero');
          break;
        }
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#191B1F] text-[#F1F0EC] flex flex-col font-sans selection:bg-[#F15A32] selection:text-white">
      {/* Super Top Notice Banner (Provisional Recognition / Under Review) */}
      <StatusBanner />

      {/* Top Bar Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Home / Hero */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Competition / AEAC */}
        <CompetitionSection />

        {/* 4. Projects */}
        <ProjectsSection />

        {/* 5. Sponsor Us (Public Face for Sponsors & Industry Partners) */}
        <SponsorUsSection />

        {/* 6. Get Involved / Join (Student Application Form) */}
        <GetInvolvedSection />

        {/* 7. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
