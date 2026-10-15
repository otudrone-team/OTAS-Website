import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { OtasLogo } from './OtasLogo';
import { SITE_CONFIG } from '../data/content';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'competition', label: 'Competition' },
    { id: 'projects', label: 'Projects' },
    { id: 'sponsor-us', label: 'Sponsor Us' },
    { id: 'get-involved', label: 'JOIN US' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      // Wait for the mobile drawer DOM removal before calculating scroll position
      window.requestAnimationFrame(() => {
        setTimeout(() => {
          onNavigate(id);
        }, 20);
      });
    } else {
      onNavigate(id);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#3D4349]/70 bg-[#191B1F]/80 backdrop-blur-md shadow-lg transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Zone - Clean white OTAS logo only */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center focus:outline-none cursor-pointer py-1"
          aria-label="OTAS | Ontario Tech Aerial Systems Home"
        >
          <OtasLogo className="h-8 sm:h-9 w-auto" />
        </button>

        {/* Navigation Links & Action */}
        <div className="hidden md:flex items-center gap-3">
          <nav className="flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-all duration-150 py-1.5 px-3 rounded relative cursor-pointer text-xs uppercase tracking-wider font-mono flex items-center gap-2 will-change-transform ${
                    isActive
                      ? 'text-white font-bold bg-[#22252A]/90 shadow-sm border border-[#444A50]'
                      : 'text-[#E2E4E2] hover:text-white hover:bg-[#2B2E33]/40 border border-transparent'
                  }`}
                >
                  {/* Persistent orange indicator bar to the side of the active navigation item */}
                  <span
                    className={`rounded-full shrink-0 transition-all duration-200 ease-out ${
                      isActive
                        ? 'w-1 h-3.5 bg-[#F15A32] opacity-100 scale-y-100 shadow-[0_0_8px_rgba(241,90,50,0.8)]'
                        : 'w-0 h-3.5 opacity-0 scale-y-0'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Configurable "Apply Now" button linking to Microsoft Forms (toggled via SITE_CONFIG.recruitmentOpen) */}
          {SITE_CONFIG.recruitmentOpen && (
            <a
              href={SITE_CONFIG.externalForms.studentApplicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1.5 rounded-md text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#0077CA] hover:bg-[#008AE6] shadow-sm transition-all"
            >
              Apply Now
            </a>
          )}
        </div>

        {/* Mobile Top Right - Apply Now Pill (if open) + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          {SITE_CONFIG.recruitmentOpen && (
            <a
              href={SITE_CONFIG.externalForms.studentApplicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider text-white bg-[#0077CA] hover:bg-[#008AE6] transition-colors"
            >
              Apply Now
            </a>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#E2E4E2] hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#3D4349]/70 bg-[#191B1F]/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center gap-2.5 w-full text-left px-3 py-2 rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#22252A] text-white font-bold border border-[#444A50]'
                    : 'text-[#E2E4E2] hover:bg-[#2B2E33] hover:text-white'
                }`}
              >
                <span
                  className={`w-1 h-3.5 rounded-full shrink-0 transition-all ${
                    isActive ? 'bg-[#F15A32] shadow-[0_0_8px_rgba(241,90,50,0.8)]' : 'bg-transparent'
                  }`}
                />
                <span>{link.label}</span>
              </button>
            );
          })}

          <div className="pt-2 border-t border-[#3D4349]/80 mt-2 space-y-2">
            {SITE_CONFIG.recruitmentOpen && (
              <a
                href={SITE_CONFIG.externalForms.studentApplicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#0077CA] hover:bg-[#008AE6] rounded transition-colors"
              >
                Apply Now
              </a>
            )}
            <button
              onClick={() => handleLinkClick('sponsor-us')}
              className="w-full flex items-center justify-center px-4 py-2 text-xs font-semibold text-[#F1F0EC] bg-[#22252A] hover:bg-[#2B2E33] border border-[#444A50] rounded transition-colors"
            >
              Sponsor OTAS
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
