import React from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT } from '../data/content';
import { Flag, Milestone } from 'lucide-react';
import { SectionSubheading } from './SectionSubheading';

export const CompetitionSection: React.FC = () => {
  const { competition } = WEBSITE_CONTENT;

  return (
    <section id="competition" className="py-16 md:py-20 bg-[#191B1F]">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <SectionSubheading>{competition.eyebrow}</SectionSubheading>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
            {competition.heading}
          </h2>
        </div>

        {/* Explanation of AEAC */}
        <div className="space-y-3">
          <SectionSubheading as="h3" className="flex items-center gap-2 mb-0">
            <Flag className="h-3.5 w-3.5" />
            <span>About AEAC</span>
          </SectionSubheading>
          <p className="text-sm sm:text-base text-[#C4C6C5] leading-relaxed">
            {competition.whatIsAeac}
          </p>
        </div>

        {/* Planned Path */}
        <div className="space-y-4">
          <SectionSubheading as="h3" className="flex items-center gap-2 mb-0">
            <Milestone className="h-3.5 w-3.5" />
            <span>Our Planned Path</span>
          </SectionSubheading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {competition.roadmap.map((item, idx) => (
              <div
                key={idx}
                className="h-full p-5 rounded-lg border border-[#444A50] bg-[#22252A] space-y-2 hover:border-[#5E666E] transition-colors"
              >
                <div className="text-xs font-mono font-bold text-[#F15A32]">
                  {item.phase}
                </div>
                <div className="text-sm font-bold text-[#F1F0EC]">
                  {item.title}
                </div>
                <p className="text-xs text-[#C4C6C5] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
