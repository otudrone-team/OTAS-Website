import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEBSITE_CONTENT, SITE_CONFIG } from '../data/content';
import {
  ChevronDown,
  Cpu,
  Package,
  Wrench,
  Code2,
  Megaphone,
  Coins,
  Mail,
} from 'lucide-react';
import { SectionSubheading } from './SectionSubheading';

export const GetInvolvedSection: React.FC = () => {
  const { getInvolved } = WEBSITE_CONTENT;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
          <h3 className="text-base sm:text-lg font-bold text-[#F1F0EC]">
            {getInvolved.departmentsHeading}
          </h3>

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

        {/* Technical & Industry Advisor Roles */}
        <div className="p-6 rounded-xl border border-[#444A50] bg-[#22252A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-base font-bold text-[#F1F0EC]">
              {getInvolved.advisorRole.heading}
            </h3>
            <p className="text-xs sm:text-sm text-[#C4C6C5] leading-relaxed">
              {getInvolved.advisorRole.description}
            </p>
          </div>

          <a
            href={`mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(getInvolved.advisorRole.ctaSubject)}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#F1F0EC] bg-[#191B1F] hover:bg-[#2B2E33] border border-[#444A50] hover:border-[#0077CA] rounded-md transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#191B1F]"
          >
            <Mail className="h-4 w-4 text-[#0077CA] shrink-0" />
            <span>{getInvolved.advisorRole.ctaLabel}</span>
          </a>
        </div>

        {/* Prospective Student FAQ Accordion */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-[#F1F0EC]">
            {getInvolved.faqHeading}
          </h3>

          <div className="divide-y divide-[#3D4349] rounded-xl border border-[#444A50] bg-[#22252A] overflow-hidden">
            {getInvolved.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-xs sm:text-sm font-semibold text-[#F1F0EC] hover:bg-[#2B2E33]/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F15A32]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#0077CA] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-xs sm:text-sm text-[#C4C6C5] leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
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
            className="inline-flex items-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0077CA] hover:bg-[#008AE6] rounded-md transition-colors shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#191B1F]"
          >
            Apply Now
          </a>
        </div>
      </motion.div>
    </section>
  );
};
