import React from 'react';
import { WEBSITE_CONTENT, SITE_CONFIG } from '../data/content';
import { Briefcase, CheckCircle2, Mail, ShieldAlert, Cpu, Hammer, BatteryCharging, Box } from 'lucide-react';
import { FadeIn } from './FadeIn';

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
    <section id="sponsor-us" className="py-16 md:py-20 bg-[#191B1F] border-b border-[#3D4349]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <FadeIn delay={40}>
          <div>
            <div className="text-xs font-mono text-[#F15A32] uppercase tracking-wider mb-1">
              Industry & Community Partners
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
              {sponsorUs.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#C4C6C5] mt-2 font-medium">
              {sponsorUs.subheading}
            </p>
          </div>
        </FadeIn>

        {/* Value Proposition for Sponsors */}
        <FadeIn delay={120}>
          <div className="p-5 rounded-lg border border-[#444A50] bg-[#22252A] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F15A32] uppercase tracking-wider">
              <Briefcase className="h-4 w-4" />
              <span>Why Support Our Team Now</span>
            </div>
            <p className="text-xs sm:text-sm text-[#C4C6C5] leading-relaxed">
              {sponsorUs.whySponsor}
            </p>
          </div>
        </FadeIn>

        {/* Current Foundational Needs */}
        <div className="space-y-3">
          <FadeIn delay={160}>
            <div className="text-xs font-mono text-[#979C9F] uppercase tracking-wider">
              {sponsorUs.currentNeedsHeading}
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sponsorUs.currentNeeds.map((need, idx) => (
              <FadeIn key={idx} delay={200 + idx * 60} distance={16}>
                <div className="h-full p-4 rounded-lg border border-[#444A50] bg-[#22252A] space-y-1.5 hover:border-[#5E666E] transition-colors">
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
              </FadeIn>
            ))}
          </div>
        </div>

        {/* What We Can Offer in Return */}
        <div className="space-y-3">
          <FadeIn delay={240}>
            <div className="text-xs font-mono text-[#979C9F] uppercase tracking-wider">
              {sponsorUs.whatWeOfferHeading}
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {sponsorUs.whatWeOffer.map((offer, idx) => (
              <FadeIn key={idx} delay={280 + idx * 70} distance={16}>
                <div className="h-full p-4 rounded-lg border border-[#444A50] bg-[#22252A] space-y-2 hover:border-[#5E666E] transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F1F0EC]">
                    <CheckCircle2 className="h-4 w-4 text-[#F15A32] shrink-0" />
                    <span>{offer.title}</span>
                  </div>
                  <p className="text-xs text-[#C4C6C5] leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Direct Contact Callout */}
        <FadeIn delay={340}>
          <div className="p-6 rounded-xl border border-[#F15A32]/40 bg-[#22252A] space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#F1F0EC]">
                Ready to Discuss a Partnership?
              </h3>
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
                <span>Contact Organizer directly</span>
              </a>
              <span className="text-xs font-mono text-[#979C9F]">
                {SITE_CONFIG.contactEmail}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
