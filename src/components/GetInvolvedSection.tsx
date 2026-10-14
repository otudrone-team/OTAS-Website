import React from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT, SITE_CONFIG } from '../data/content';
import {
  ExternalLink,
  Cpu,
  Package,
  Wrench,
  Code2,
  Megaphone,
  Coins,
} from 'lucide-react';
import { SectionSubheading } from './SectionSubheading';

export const GetInvolvedSection: React.FC = () => {
  const { getInvolved } = WEBSITE_CONTENT;

  // Department icon mapping - all departments styled with Ontario Tech blue (#0077CA)
  const getDepartmentIcon = (name: string) => {
    switch (name) {
      case 'Avionics':
        return <Cpu className="h-4 w-4 text-[#0077CA]" />;
      case 'Payload':
        return <Package className="h-4 w-4 text-[#0077CA]" />;
      case 'Mechanical':
        return <Wrench className="h-4 w-4 text-[#0077CA]" />;
      case 'Software and Autonomy':
        return <Code2 className="h-4 w-4 text-[#0077CA]" />;
      case 'Media and Outreach':
        return <Megaphone className="h-4 w-4 text-[#0077CA]" />;
      case 'Finance':
        return <Coins className="h-4 w-4 text-[#0077CA]" />;
      default:
        return <Wrench className="h-4 w-4 text-[#0077CA]" />;
    }
  };

  return (
    <section id="get-involved" className="py-16 md:py-20 bg-[#191B1F]">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <SectionSubheading>{getInvolved.eyebrow}</SectionSubheading>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
            {getInvolved.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#C4C6C5] mt-3 leading-relaxed max-w-2xl">
            {getInvolved.invitation}
          </p>
        </div>

        {/* Departments List */}
        <div className="space-y-4">
          <SectionSubheading as="h3" className="mb-0">
            {getInvolved.departmentsHeading}
          </SectionSubheading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {getInvolved.departments.map((dept, idx) => (
              <div
                key={idx}
                className="h-full p-4 rounded-lg border border-[#444A50] bg-[#22252A] space-y-2 hover:border-[#5E666E] transition-colors"
              >
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
            ))}
          </div>
        </div>

        {/* Application Link Banner */}
        <div className="p-6 rounded-xl border border-[#444A50] bg-[#22252A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#F1F0EC]">
              Ready to Join the Team?
            </h3>
            <p className="text-xs text-[#C4C6C5]">
              We welcome Ontario Tech students from all years and disciplines.
            </p>
          </div>

          <a
            href={SITE_CONFIG.externalForms.studentApplicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded-md transition-colors shrink-0"
          >
            <span>Apply Now</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
