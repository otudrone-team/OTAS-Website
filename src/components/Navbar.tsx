import React, { useState } from 'react';
import { Menu, X, Handshake } from 'lucide-react';
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
    <header className="w-full border-b border-[#3D4349] bg-[#5E666E] shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Zone */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-2.5 focus:outline-none cursor-pointer"
          aria-label="OTAS | Ontario Tech Aerial Systems Home"
        >
          <OtasLogo className="h-8 sm:h-9 w-auto" />
          <span className="hidden sm:inline font-mono text-xs text-[#E2E4E2] font-semibold border-l border-[#444A50] pl-2.5">
            Student Engineering Design Team
          </span>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const isSponsor = link.id === 'sponsor-us';
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-all duration-150 py-1.5 px-3 rounded relative cursor-pointer text-xs uppercase tracking-wider font-mono flex items-center gap-2 will-change-transform ${
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

       

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
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
        <div className="md:hidden border-t border-[#3D4349] bg-[#5E666E] px-4 pt-2 pb-4 space-y-1 shadow-lg">
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
                {/* Persistent orange indicator bar to the side for mobile drawer as well */}
                <span
                  className={`w-1 h-3.5 rounded-full shrink-0 transition-all ${
                    isActive ? 'bg-[#F15A32] shadow-[0_0_8px_rgba(241,90,50,0.8)]' : 'bg-transparent'
                  }`}
                />
                <span>{link.label}</span>
              </button>
            );
          })}

          <div className="pt-2 border-t border-[#3D4349] mt-2">
            <button
              onClick={() => handleLinkClick('sponsor-us')}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded transition-colors"
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
