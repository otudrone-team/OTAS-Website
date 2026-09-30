import React from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT } from '../data/content';
import { AlertCircle } from 'lucide-react';
import { SectionSubheading } from './SectionSubheading';

export const AboutSection: React.FC = () => {
  const { about } = WEBSITE_CONTENT;

  return (
    <section id="about" className="py-16 md:py-20 bg-[#191B1F]">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <SectionSubheading>{about.eyebrow}</SectionSubheading>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
            {about.heading}
          </h2>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[#C4C6C5] leading-relaxed">
          {about.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Explicit Honest Disclaimer */}
        <div className="mt-6 p-4 rounded-lg border border-[#444A50] bg-[#22252A] flex items-center gap-3 text-xs sm:text-sm font-mono text-[#F1F0EC]">
          <AlertCircle className="h-4 w-4 text-[#F15A32] shrink-0" />
          <span>{about.noProjectsDisclaimer}</span>
        </div>
      </motion.div>
    </section>
  );
};
