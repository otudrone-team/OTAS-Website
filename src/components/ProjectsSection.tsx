import React from 'react';
import { WEBSITE_CONTENT } from '../data/content';
import { Wrench, Info } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ProjectsSection: React.FC = () => {
  const { projects } = WEBSITE_CONTENT;
  const { plannedProject } = projects;

  return (
    <section id="projects" className="py-16 md:py-20 bg-[#191B1F] border-b border-[#3D4349]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <FadeIn delay={40}>
          <div>
            <div className="text-xs font-mono text-[#F15A32] uppercase tracking-wider mb-1.5 font-semibold">
              {projects.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
              {projects.heading}
            </h2>
          </div>
        </FadeIn>

        {/* Honest pre-launch line */}
        <FadeIn delay={100}>
          <p className="text-sm sm:text-base text-[#C4C6C5] italic">
            {projects.preLaunchDisclaimer}
          </p>
        </FadeIn>

        {/* Single Planned Placeholder Entry Card */}
        <FadeIn delay={160} distance={20}>
          <div className="rounded-xl border border-[#444A50] bg-[#22252A] p-6 space-y-4 hover:border-[#5E666E] transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded bg-[#2B2E33] border border-[#444A50]">
                  <Wrench className="h-4 w-4 text-[#F15A32]" />
                </div>
                <h3 className="text-lg font-bold text-[#F1F0EC]">
                  {plannedProject.title}
                </h3>
              </div>
              <span className="inline-flex self-start sm:self-auto font-mono text-[11px] text-[#F15A32] bg-[#2B2E33] px-2.5 py-1 rounded border border-[#444A50]">
                Status: {plannedProject.status}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#C4C6C5] leading-relaxed">
              {plannedProject.description}
            </p>

            <div className="pt-2 border-t border-[#444A50] flex items-center gap-2 text-xs text-[#979C9F]">
              <Info className="h-3.5 w-3.5 text-[#2E78B7] shrink-0" />
              <span>{plannedProject.nextSteps}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
