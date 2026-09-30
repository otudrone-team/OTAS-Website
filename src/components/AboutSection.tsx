import React from 'react';
import { WEBSITE_CONTENT } from '../data/content';
import { AlertCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const AboutSection: React.FC = () => {
  const { about } = WEBSITE_CONTENT;

  return (
    <section id="about" className="py-16 md:py-20 bg-[#191B1F] border-b border-[#3D4349]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <FadeIn delay={40}>
          <div>
            <div className="text-xs font-mono text-[#F15A32] uppercase tracking-wider mb-1">
              Section 02
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
              {about.heading}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="space-y-4 text-sm sm:text-base text-[#C4C6C5] leading-relaxed">
            {about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </FadeIn>

        {/* Explicit Honest Disclaimer */}
        <FadeIn delay={180}>
          <div className="mt-6 p-4 rounded-lg border border-[#444A50] bg-[#22252A] flex items-center gap-3 text-xs sm:text-sm font-mono text-[#F1F0EC]">
            <AlertCircle className="h-4 w-4 text-[#F15A32] shrink-0" />
            <span>{about.noProjectsDisclaimer}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
