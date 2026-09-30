import React from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT, SITE_CONFIG } from '../data/content';
import { Briefcase, CheckCircle2, Mail, Cpu, Hammer, BatteryCharging, Box } from 'lucide-react';
import { SectionSubheading } from './SectionSubheading';

export const SponsorUsSection: React.FC = () => {
  const { sponsorUs } = WEBSITE_CONTENT;

  const getNeedIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="h-4 w-4 text-[#F15A32]" />;
      case 1:
        return <Hammer className="h-4 w-4 text-[#F15A32]" />;
      case 2:
        return <BatteryCharging className="h-4 w-4 text-[#F15A32]" />;
      default:
        return <Box className="h-4 w-4 text-[#F15A32]" />;
    }
  };

  return (
    <section id="sponsor-us" className="py-16 md:py-20 bg-[#191B1F]">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <SectionSubheading>{sponsorUs.eyebrow}</SectionSubheading>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
            {sponsorUs.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#C4C6C5] mt-2 font-medium">
            {sponsorUs.subheading}
          </p>
        </div>

        {/* Value Proposition for Sponsors */}
        <div className="p-5 rounded-lg border border-[#444A50] bg-[#22252A] space-y-3">
          <SectionSubheading as="h3" className="flex items-center gap-2 mb-0">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Why Support Our Team Now</span>
          </SectionSubheading>
          <p className="text-xs sm:text-sm text-[#C4C6C5] leading-relaxed">
            {sponsorUs.whySponsor}
          </p>
        </div>

        {/* Current Foundational Needs */}
        <div className="space-y-3">
          <SectionSubheading as="h3" className="mb-0">
            {sponsorUs.currentNeedsHeading}
          </SectionSubheading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sponsorUs.currentNeeds.map((need, idx) => (
              <div
                key={idx}
                className="h-full p-4 rounded-lg border border-[#444A50] bg-[#22252A] space-y-1.5 hover:border-[#5E666E] transition-colors"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-[#F1F0EC]">
                  <div className="p-1 rounded bg-[#2B2E33] border border-[#444A50]">
                    {getNeedIcon(idx)}
                  </div>
                  <span>{need.title}</span>
                </div>
                <p className="text-xs text-[#C4C6C5] leading-relaxed">
                  {need.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Can Offer in Return */}
        <div className="space-y-3">
          <SectionSubheading as="h3" className="mb-0">
            {sponsorUs.whatWeOfferHeading}
          </SectionSubheading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {sponsorUs.whatWeOffer.map((offer, idx) => (
              <div
                key={idx}
                className="h-full p-4 rounded-lg border border-[#444A50] bg-[#22252A] space-y-2 hover:border-[#5E666E] transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#F1F0EC]">
                  <CheckCircle2 className="h-4 w-4 text-[#F15A32] shrink-0" />
                  <span>{offer.title}</span>
                </div>
                <p className="text-xs text-[#C4C6C5] leading-relaxed">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Contact Callout */}
        <div className="p-6 rounded-xl border border-[#F15A32]/40 bg-[#22252A] space-y-4">
          <div className="space-y-2">
            <SectionSubheading as="h3" className="mb-0">
              Ready to Discuss a Partnership?
            </SectionSubheading>
            <p className="text-xs sm:text-sm text-[#C4C6C5]">
              {sponsorUs.contactPrompt}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}?subject=Sponsorship%20Inquiry%20-%20Ontario%20Tech%20Aerial%20Systems`}
              className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded-md transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Organizer Directly</span>
            </a>
            <span className="text-xs font-mono text-[#979C9F]">
              {SITE_CONFIG.contactEmail}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
