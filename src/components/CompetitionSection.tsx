import React from 'react';
import { WEBSITE_CONTENT } from '../data/content';
import { Flag, Milestone, ShieldCheck } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const CompetitionSection: React.FC = () => {
  const { competition } = WEBSITE_CONTENT;

  return (
    <section id="competition" className="py-16 md:py-20 bg-[#191B1F] border-b border-[#3D4349]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <FadeIn delay={40}>
          <div>
            <div className="text-xs font-mono text-[#F15A32] uppercase tracking-wider mb-1.5 font-semibold">
              {competition.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
              {competition.heading}
            </h2>
          </div>
        </FadeIn>

        {/* Explanation of AEAC */}
        <FadeIn delay={100}>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-[#F1F0EC] flex items-center gap-2">
              <Flag className="h-4 w-4 text-[#F15A32]" />
              <span>About AEAC</span>
            </h3>
            <p className="text-sm sm:text-base text-[#C4C6C5] leading-relaxed">
              {competition.whatIsAeac}
            </p>
          </div>
        </FadeIn>

        {/* Planned Path */}
        <div className="space-y-4">
          <FadeIn delay={140}>
            <h3 className="text-base font-semibold text-[#F1F0EC] flex items-center gap-2">
              <Milestone className="h-4 w-4 text-[#2E78B7]" />
              <span>Our Planned Path</span>
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {competition.roadmap.map((item, idx) => (
              <FadeIn key={idx} delay={180 + idx * 80} distance={18}>
                <div className="h-full p-5 rounded-lg border border-[#444A50] bg-[#22252A] space-y-2 hover:border-[#5E666E] transition-colors">
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
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Honest Status Note */}
        <FadeIn delay={280}>
          <div className="p-3.5 rounded-lg border border-[#444A50] bg-[#22252A] flex items-center gap-3 text-xs text-[#C4C6C5]">
            <ShieldCheck className="h-4 w-4 text-[#2E78B7] shrink-0" />
            <span>{competition.statusNote}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
