import React from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT, SITE_CONFIG } from '../data/content';
import { Mail } from 'lucide-react';
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

        {/* Visually Distinct Technical & Industry Advisor Roles Section */}
        <div className="rounded-xl border border-[#444A50] border-l-4 border-l-[#0077CA] bg-[#22252A] p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-base sm:text-lg font-bold text-[#F1F0EC]">
              {about.advisors.heading}
            </h3>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(about.advisors.ctaSubject)}`}
              className="inline-flex self-start sm:self-auto items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#F1F0EC] bg-[#191B1F] hover:bg-[#2B2E33] border border-[#444A50] hover:border-[#0077CA] rounded-md transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#191B1F]"
            >
              <Mail className="h-3.5 w-3.5 text-[#0077CA] shrink-0" />
              <span>{about.advisors.ctaLabel}</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-[#C4C6C5] leading-relaxed">
            {about.advisors.summary}
          </p>

          <ul className="space-y-2 pt-2 border-t border-[#3D4349] text-xs sm:text-sm text-[#C4C6C5]">
            {about.advisors.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0077CA] shrink-0 mt-2" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
