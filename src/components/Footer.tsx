import React from 'react';
import { SITE_CONFIG } from '../data/content';
import { OtasLogo } from './OtasLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-[#3D4349] bg-[#5E666E] text-[#E2E4E2] text-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <OtasLogo className="h-7 w-auto" />
            </div>
            <p className="text-[11px] text-[#D8DAD8]">
              {SITE_CONFIG.teamName} · {SITE_CONFIG.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#E2E4E2]">
            <button
              onClick={() => onNavigate('hero')}
              className="hover:text-[#F15A32] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#F15A32] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('competition')}
              className="hover:text-[#F15A32] transition-colors cursor-pointer"
            >
              Competition
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-[#F15A32] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('sponsor-us')}
              className="text-[#F15A32] font-semibold hover:text-white transition-colors cursor-pointer"
            >
              Sponsor Us
            </button>
            <button
              onClick={() => onNavigate('get-involved')}
              className="hover:text-[#F15A32] transition-colors cursor-pointer"
            >
              Student Application
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#F15A32] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#444A50] text-[11px] text-[#C4C6C5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            Operating in pre-launch planning phase at Ontario Tech University. Formal engineering design team recognition under administrative review.
          </div>
        </div>
      </div>
    </footer>
  );
};
