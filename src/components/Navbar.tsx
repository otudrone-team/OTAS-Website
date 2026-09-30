import React, { useState } from 'react';
import { Menu, X, Handshake, Mail, Instagram, Linkedin } from 'lucide-react';
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
    { id: 'get-involved', label: 'Join' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full border-b border-[#3D4349] bg-[#5E666E] shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Zone */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-2.5 focus:outline-none cursor-pointer shrink-0"
          aria-label="OTAS | Ontario Tech Aerial Systems Home"
        >
          <OtasLogo className="h-8 sm:h-9 w-auto" />
          <span className="hidden sm:inline font-mono text-xs text-[#E2E4E2] font-semibold border-l border-[#444A50] pl-2.5">
            Pre-Launch
          </span>
        </button>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const isSponsor = link.id === 'sponsor-us';
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-all duration-150 py-1.5 px-2.5 lg:px-3 rounded relative cursor-pointer text-xs uppercase tracking-wider font-mono flex items-center gap-1.5 lg:gap-2 will-change-transform ${
                  isActive
                    ? 'text-white font-bold bg-[#22252A]/70 shadow-sm border border-[#444A50]/60'
                    : isSponsor
                    ? 'text-[#F15A32] font-bold hover:text-white hover:bg-[#2B2E33]/40 border border-transparent'
                    : 'text-[#E2E4E2] hover:text-white hover:bg-[#2B2E33]/30 border border-transparent'
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

        {/* Header Right Action & Quick Links */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          {/* Direct Social & Contact Mini Grid */}
          <div className="flex items-center gap-2 border-r border-[#444A50] pr-4">
            <a
              href="https://www.instagram.com/ontariotechdrone"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1.5 rounded text-[#E2E4E2] hover:text-[#F15A32] hover:bg-[#2B2E33]/50 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/ontario-tech-aerial-systems"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 rounded text-[#E2E4E2] hover:text-[#2E78B7] hover:bg-[#2B2E33]/50 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              aria-label="Email OTAS"
              className="p-1.5 rounded text-[#E2E4E2] hover:text-[#F15A32] hover:bg-[#2B2E33]/50 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => handleLinkClick('sponsor-us')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded transition-colors cursor-pointer"
          >
            <Handshake className="h-3.5 w-3.5" />
            <span>Sponsor</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleLinkClick('sponsor-us')}
            className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded transition-colors cursor-pointer"
          >
            <Handshake className="h-3 w-3" />
            <span>Sponsor</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#E2E4E2] hover:text-white focus:outline-none cursor-pointer rounded bg-[#2B2E33]/50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#3D4349] bg-[#5E666E] px-4 pt-3 pb-5 space-y-3 shadow-xl">
          {/* Nav links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-2.5 w-full text-left px-3 py-2 rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#22252A] text-white font-bold'
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
          </div>

          {/* Social and Quick Contact Links in Mobile Drawer */}
          <div className="pt-3 border-t border-[#3D4349] flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <a
                href="https://www.instagram.com/ontariotechdrone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded bg-[#22252A] text-[#E2E4E2] hover:text-[#F15A32] transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/ontario-tech-aerial-systems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded bg-[#22252A] text-[#E2E4E2] hover:text-[#2E78B7] transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                aria-label="Email OTAS"
                className="p-2 rounded bg-[#22252A] text-[#E2E4E2] hover:text-[#F15A32] transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <button
              onClick={() => handleLinkClick('sponsor-us')}
              className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded transition-colors"
            >
              <Handshake className="h-3.5 w-3.5" />
              <span>Sponsor OTAS</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
