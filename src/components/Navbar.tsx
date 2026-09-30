import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Handshake } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { OtasLogo } from './OtasLogo';

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
    <header className="sticky top-0 z-50 w-full border-b border-[#3D4349] bg-[#5E666E] shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Zone */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-2.5 focus:outline-none cursor-pointer"
          aria-label="OTAS | Ontario Tech Aerial Systems Home"
        >
          <OtasLogo className="h-8 sm:h-9 w-auto" />
          <span className="hidden sm:inline font-mono text-xs text-[#E2E4E2] font-semibold border-l border-[#444A50] pl-2.5">
            Pre-Launch
          </span>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const isSponsor = link.id === 'sponsor-us';
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors py-1 relative cursor-pointer text-xs uppercase tracking-wider font-mono ${
                  isActive
                    ? 'text-[#F1F0EC] font-semibold'
                    : isSponsor
                    ? 'text-[#F15A32] font-bold hover:text-white'
                    : 'text-[#E2E4E2] hover:text-[#F15A32]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#F15A32] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary Action Group: Sponsor Us & Student Application */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={() => handleLinkClick('sponsor-us')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded-md transition-colors cursor-pointer"
          >
            <Handshake className="h-3.5 w-3.5" />
            <span>Sponsor Us</span>
          </button>
          <button
            onClick={() => handleLinkClick('get-involved')}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#F1F0EC] bg-[#3D4349] hover:bg-[#4E565E] rounded-md transition-colors cursor-pointer font-mono"
          >
            <span>Apply</span>
            <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#191B1F] hover:text-[#081D32] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 stroke-[2.5]" /> : <Menu className="h-5 w-5 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#3D4349] bg-[#5E666E] px-4 pt-3 pb-6 space-y-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2 text-sm rounded-md transition-colors font-mono ${
                  activeSection === link.id
                    ? 'bg-[#3D4349] text-[#F1F0EC] font-semibold'
                    : 'text-[#F1F0EC] hover:bg-[#4E565E] hover:text-[#FF7045]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#3D4349] flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('sponsor-us')}
              className="w-full py-2 text-center text-xs font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded-md transition-colors flex items-center justify-center gap-1.5"
            >
              <Handshake className="h-3.5 w-3.5" />
              <span>Sponsor Us</span>
            </button>
            <button
              onClick={() => handleLinkClick('get-involved')}
              className="w-full py-2 text-center text-xs font-medium text-[#F1F0EC] bg-[#3D4349] hover:bg-[#4E565E] rounded-md transition-colors"
            >
              Student Application Form
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
