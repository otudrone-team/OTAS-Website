import React from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT } from '../data/content';
import { Info } from 'lucide-react';
import { SectionSubheading } from './SectionSubheading';

export const ProjectsSection: React.FC = () => {
  const { projects } = WEBSITE_CONTENT;
  const { plannedProject } = projects;

  return (
    <section id="projects" className="py-16 md:py-20 bg-[#191B1F]">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <SectionSubheading>{projects.eyebrow}</SectionSubheading>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
            {projects.heading}
          </h2>
        </div>

        {/* Honest pre-launch line */}
        <p className="text-sm sm:text-base text-[#C4C6C5] italic">
          {projects.preLaunchDisclaimer}
        </p>

        {/* Single Planned Placeholder Entry Card */}
        <div className="rounded-xl border border-[#444A50] bg-[#22252A] p-6 space-y-4 hover:border-[#5E666E] transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-1 border-b border-[#3D4349]">
            <h3 className="text-lg font-bold text-[#F1F0EC]">
              {plannedProject.title}
            </h3>
            <span className="font-mono text-xs text-[#0077CA] font-medium">
              Status: {plannedProject.status}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#C4C6C5] leading-relaxed">
            {plannedProject.description}
          </p>

          <div className="pt-2 border-t border-[#444A50] flex items-center gap-2 text-xs text-[#979C9F]">
            <Info className="h-3.5 w-3.5 text-[#0077CA] shrink-0" />
            <span>{plannedProject.nextSteps}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
