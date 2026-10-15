import React from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT } from '../data/content';
import { ArrowRight } from 'lucide-react';
import HeroDrone from './HeroDrone';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { hero } = WEBSITE_CONTENT;

  return (
    <section id="hero" className="relative py-14 md:py-20 lg:py-24 bg-[#191B1F] overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Headline: Spans horizontally across the container */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F1F0EC] tracking-tight leading-[1.15] max-w-5xl">
            {hero.headline}
          </h1>

          {/* Two-Column Area on Desktop (Text & CTAs on left, Interactive Drone on right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-1">
            <div className="lg:col-span-7 xl:col-span-7 space-y-6">
              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-[#C4C6C5] leading-relaxed max-w-2xl">
                {hero.subheading}
              </p>

              {/* Action Buttons for Sponsors and Students */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('sponsor-us')}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded-md transition-colors cursor-pointer shadow-sm"
                >
                  Sponsor Us
                </button>
                <button
                  onClick={() => onNavigate('get-involved')}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#F1F0EC] bg-[#22252A] hover:bg-[#2B2E33] hover:border-[#FF7045] border border-[#444A50] rounded-md transition-colors cursor-pointer"
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
            </div>

            {/* Desktop Drone Column (lg+): Displayed alongside the description & CTAs */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 items-center justify-center">
              <div className="w-full max-w-[380px] xl:max-w-[420px]">
                <HeroDrone />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
