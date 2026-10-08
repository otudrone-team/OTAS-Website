import React from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT } from '../data/content';
import { SectionSubheading } from './SectionSubheading';
import teamPhotoWebp from '../assets/images/team_picture.webp';
import teamPhotoJpg from '../assets/images/team_picture.jpg';

export const AboutSection: React.FC = () => {
  const { about } = WEBSITE_CONTENT;

  return (
    <section id="about" className="py-16 md:py-20 bg-[#191B1F]">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8"
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

        {/* Team Photo Container with download & right-click protections */}
        <div
          className="relative rounded-xl overflow-hidden border border-[#444A50] bg-[#22252A] shadow-xl select-none"
          onContextMenu={(e) => e.preventDefault()}
        >
          <picture>
            <source srcSet={teamPhotoWebp} type="image/webp" />
            <img
              src={teamPhotoJpg}
              alt="Ontario Tech Aerial Systems Team"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="w-full h-auto max-h-[520px] object-cover object-center pointer-events-none select-none"
            />
          </picture>

          {/* Transparent protection shield layer prevents direct right-click or drag-to-desktop */}
          <div
            className="absolute inset-0 z-10 bg-transparent pointer-events-auto cursor-default"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            aria-hidden="true"
          />

          {/* Subtle gradient & caption overlay */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#191B1F]/90 via-[#191B1F]/40 to-transparent p-4 sm:p-5 pointer-events-none">
            <span className="text-xs sm:text-sm font-medium text-[#F1F0EC] drop-shadow-sm">
              Ontario Tech Aerial Systems · Team Cohort
            </span>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[#C4C6C5] leading-relaxed">
          {about.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
