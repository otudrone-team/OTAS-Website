import React from 'react';
import { WEBSITE_CONTENT, SITE_CONFIG } from '../data/content';
import {
  CheckCircle,
  ExternalLink,
  FileText,
  Cpu,
  Package,
  Wrench,
  Code2,
  Megaphone,
  Coins,
} from 'lucide-react';
import { FadeIn } from './FadeIn';

export const GetInvolvedSection: React.FC = () => {
  const { getInvolved } = WEBSITE_CONTENT;

  // Department icon mapping
  const getDepartmentIcon = (name: string) => {
    switch (name) {
      case 'Avionics':
        return <Cpu className="h-4 w-4 text-[#F15A32]" />;
      case 'Payload':
        return <Package className="h-4 w-4 text-[#2E78B7]" />;
      case 'Mechanical':
        return <Wrench className="h-4 w-4 text-[#F15A32]" />;
      case 'Software and Autonomy':
        return <Code2 className="h-4 w-4 text-[#2E78B7]" />;
      case 'Media and Outreach':
        return <Megaphone className="h-4 w-4 text-[#F15A32]" />;
      case 'Finance':
        return <Coins className="h-4 w-4 text-[#F15A32]" />;
      default:
        return <Wrench className="h-4 w-4 text-[#F15A32]" />;
    }
  };

  return (
    <section id="get-involved" className="py-16 md:py-20 bg-[#191B1F] border-b border-[#3D4349]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <FadeIn delay={40}>
          <div>
            <div className="text-xs font-mono text-[#F15A32] uppercase tracking-wider mb-1">
              Students & Recruits
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
              {getInvolved.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#C4C6C5] mt-2">
              {getInvolved.invitation}
            </p>
          </div>
        </FadeIn>

        {/* Experience reassurance callout */}
        <FadeIn delay={100}>
          <div className="p-4 rounded-lg border border-[#444A50] bg-[#22252A] flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#F1F0EC]">
            <CheckCircle className="h-4 w-4 text-[#F15A32] shrink-0 mt-0.5 sm:mt-0" />
            <span>{getInvolved.experienceNote}</span>
          </div>
        </FadeIn>

        {/* Departments List */}
        <div className="space-y-4">
          <FadeIn delay={140}>
            <div className="text-xs font-mono text-[#979C9F] uppercase tracking-wider">
              {getInvolved.departmentsHeading}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {getInvolved.departments.map((dept, idx) => (
              <FadeIn key={idx} delay={180 + idx * 50} distance={16}>
                <div className="h-full p-4 rounded-lg border border-[#444A50] bg-[#22252A] space-y-2 hover:border-[#5E666E] transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded bg-[#2B2E33] border border-[#444A50]">
                      {getDepartmentIcon(dept.name)}
                    </div>
                    <span className="text-sm font-bold text-[#F1F0EC]">
                      {dept.name}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#979C9F]">
                    Focus: {dept.focus}
                  </div>
                  <p className="text-xs text-[#C4C6C5] leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Application Link Banner */}
        <FadeIn delay={300} distance={20}>
          <div className="p-6 rounded-xl border border-[#444A50] bg-[#22252A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F1F0EC]">
                <FileText className="h-4 w-4 text-[#F15A32]" />
                <span>Ready to Join Our Organizing Cohort?</span>
              </div>
              <p className="text-xs text-[#C4C6C5]">
                We welcome motivated Ontario Tech students across all academic years and engineering disciplines.
              </p>
            </div>

            <a
              href={SITE_CONFIG.externalForms.studentApplicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded-md transition-colors shrink-0"
            >
              <span>Apply / Register Interest</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
