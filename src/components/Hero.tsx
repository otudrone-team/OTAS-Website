import React from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT } from '../data/content';
import { OtasIcon } from './OtasIcon';
import { ArrowRight, Compass, Handshake } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { hero } = WEBSITE_CONTENT;

  return (
    <section id="hero" className="py-16 md:py-24 bg-[#191B1F]">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Context line */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#979C9F]">
          <OtasIcon className="h-4 w-4 shrink-0" />
          <span className="text-[#C4C6C5]">{hero.teamName}</span>
          <span>·</span>
          <span>Ontario Tech University</span>
        </div>

        {/* One-sentence headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F0EC] tracking-tight leading-tight">
          {hero.headline}
        </h1>

        {/* 2-3 sentence subheading */}
        <p className="text-base sm:text-lg text-[#C4C6C5] leading-relaxed">
          {hero.subheading}
        </p>

        {/* Current status note */}
        <div className="p-3.5 rounded-lg border border-[#444A50] bg-[#22252A] flex items-start sm:items-center gap-3 text-xs text-[#C4C6C5]">
          <Compass className="h-4 w-4 text-[#F15A32] shrink-0 mt-0.5 sm:mt-0" />
          <span>{hero.note}</span>
        </div>

        {/* Action Buttons for Sponsors and Students */}
        <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            onClick={() => onNavigate('sponsor-us')}
            className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded-md transition-colors cursor-pointer"
          >
            <Handshake className="h-4 w-4" />
            <span>Sponsor Us</span>
          </button>
          <button
            onClick={() => onNavigate('get-involved')}
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#F1F0EC] bg-[#2B2E33] hover:border-[#FF7045] border border-[#444A50] rounded-md transition-colors cursor-pointer"
          >
            <span>Student Application</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="text-xs sm:text-sm text-[#979C9F] hover:text-[#F1F0EC] px-3 py-2 transition-colors cursor-pointer"
          >
            Read About the Team →
          </button>
        </div>
      </motion.div>
    </section>
  );
};
