import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, MapPin, ArrowUpRight, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { OtasLogo } from './OtasLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Team' },
    { id: 'competition', label: 'AEAC Roadmap' },
    { id: 'projects', label: 'Technical Projects' },
    { id: 'sponsor-us', label: 'Sponsorship' },
    { id: 'get-involved', label: 'Student Application' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <footer className="border-t border-[#3D4349] bg-[#5E666E] text-[#E2E4E2] text-xs">
      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Main Footer Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#444A50]">
          {/* Brand & Mission Column (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <OtasLogo className="h-8 w-auto" />
            </div>
            <p className="text-xs text-[#D8DAD8] leading-relaxed max-w-sm">
              Ontario Tech Aerial Systems is a student-led engineering design team at Ontario Tech University dedicated to developing autonomous unmanned aerial vehicles.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#D8DAD8]">
              <MapPin className="h-3.5 w-3.5 text-[#F15A32] shrink-0" />
              <span>Oshawa, Ontario, Canada</span>
            </div>
          </div>

          {/* Navigation Quick Links Grid (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#F15A32] font-semibold block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-[#E2E4E2] hover:text-[#F15A32] py-1 transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span className="text-[#979C9F] group-hover:text-[#F15A32] transition-colors">›</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact Grid (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#F15A32] font-semibold block">
              Connect With Us
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              <a
                href="https://www.instagram.com/ontariotechdrone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded bg-[#22252A]/60 hover:bg-[#22252A] border border-[#444A50]/60 hover:border-[#F15A32] transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-[#F15A32]" />
                  <span className="text-xs font-mono text-[#F1F0EC] group-hover:text-[#F15A32] transition-colors">
                    @ontariotechdrone
                  </span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#979C9F] group-hover:text-[#F15A32]" />
              </a>

              <a
                href="https://www.linkedin.com/company/ontario-tech-aerial-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded bg-[#22252A]/60 hover:bg-[#22252A] border border-[#444A50]/60 hover:border-[#2E78B7] transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-[#2E78B7]" />
                  <span className="text-xs font-mono text-[#F1F0EC] group-hover:text-[#2E78B7] transition-colors">
                    LinkedIn Team Page
                  </span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#979C9F] group-hover:text-[#2E78B7]" />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="flex items-center justify-between p-2 rounded bg-[#22252A]/60 hover:bg-[#22252A] border border-[#444A50]/60 hover:border-[#F15A32] transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#F15A32]" />
                  <span className="text-xs font-mono text-[#F1F0EC] group-hover:text-[#F15A32] transition-colors">
                    {SITE_CONFIG.contactEmail}
                  </span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-[#979C9F] group-hover:text-[#F15A32]" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Status Note at Bottom */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#C4C6C5]">
          <div className="max-w-xl">
            Operating in pre-launch planning phase at Ontario Tech University. Formal engineering design team recognition under administrative review.
          </div>
          <div className="font-mono text-[11px] text-[#D8DAD8]">
            © {new Date().getFullYear()} Ontario Tech Aerial Systems. All rights reserved.
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
