import React from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT } from '../data/content';
import { OtasIcon } from './OtasIcon';
import { ArrowRight, Handshake } from 'lucide-react';
import HeroDrone from './HeroDrone';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { hero } = WEBSITE_CONTENT;

  return (
    <section id="hero" className="relative py-16 md:py-24 bg-[#191B1F] overflow-hidden">
      {/*
        LAYOUT EXPLANATION:
        - Mobile / Tablet: The drone is positioned subtly in the top-right / background with reduced opacity
          so it does not compete with or overlap headlines, status badges, or CTA tap targets.
        - Desktop (lg+): Uses a responsive two-column grid. The text & CTAs occupy the left column, while
          HeroDrone is prominently showcased in the right column at full clarity without text collisions.
        
        TWEAKING SIZE & POSITION:
        - Desktop Drone Column Size: Modify `lg:max-w-[420px]` in the desktop container below.
        - Mobile Drone Visibility/Position: Modify `opacity-25 sm:opacity-35 max-w-[220px]` in the mobile container below.
      */}

      {/* Subtle Mobile/Small-screen Background Accent (Hidden on lg+ where grid takes over) */}
      <div className="lg:hidden absolute -top-4 -right-10 pointer-events-none opacity-25 sm:opacity-35 max-w-[240px] sm:max-w-[280px]">
        <HeroDrone />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Text Column - Preserves exact Framer Motion animations & content */}
          <motion.div
            className="lg:col-span-7 xl:col-span-7 space-y-6"
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

          {/* Large Screen Drone Column (lg+) - Side-by-side with zero text overlap */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 items-center justify-center">
            <div className="w-full max-w-[380px] xl:max-w-[420px]">
              <HeroDrone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
