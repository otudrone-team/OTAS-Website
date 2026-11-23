import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ExternalLink, Mail } from 'lucide-react';
import {
  WEBSITE_CONTENT,
  SITE_CONFIG,
  SponsorTierId,
  SponsorEntry,
} from '../data/content';
import { SectionSubheading } from './SectionSubheading';

interface SponsorsPageProps {
  onNavigate: (targetId: string) => void;
}

const TIER_DISPLAY_ORDER: SponsorTierId[] = [
  'mission-partner',
  'flight-path',
  'ground-link',
];

export const SponsorsPage: React.FC<SponsorsPageProps> = ({ onNavigate }) => {
  const { sponsorsPage, sponsorUs } = WEBSITE_CONTENT;

  const getGridClass = (tierId: SponsorTierId) => {
    switch (tierId) {
      case 'mission-partner':
        return 'grid-cols-1 md:grid-cols-2 gap-5';
      case 'flight-path':
        return 'grid-cols-1 sm:grid-cols-2 gap-4';
      case 'ground-link':
        return 'grid-cols-1 sm:grid-cols-3 gap-4';
    }
  };

  const getLogoBoxClass = (tierId: SponsorTierId) => {
    switch (tierId) {
      case 'mission-partner':
        return 'h-28 p-5';
      case 'flight-path':
        return 'h-20 p-4';
      case 'ground-link':
        return 'h-16 p-3';
    }
  };

  const renderSponsorCard = (sponsor: SponsorEntry, tierId: SponsorTierId) => {
    const content = (
      <div className="h-full flex flex-col justify-between rounded-xl border border-[#444A50] bg-[#22252A] p-5 space-y-4 hover:border-[#0077CA] transition-colors">
        <div className="space-y-3">
          <div
            className={`w-full rounded-lg ${sponsor.logoUrl ? 'bg-white border border-[#E2E4E2]' : 'bg-[#191B1F] border border-[#3D4349]'} flex items-center justify-center ${getLogoBoxClass(tierId)}`}
          >
            {sponsor.logoUrl ? (
              <img
                src={sponsor.logoUrl}
                alt={`${sponsor.name} logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            ) : (
              <span className="text-sm sm:text-base font-bold text-[#F1F0EC] text-center tracking-tight">
                {sponsor.name}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm sm:text-base font-bold text-[#F1F0EC]">
              {sponsor.name}
            </h3>
            {sponsor.websiteUrl && (
              <ExternalLink className="h-3.5 w-3.5 text-[#0077CA] shrink-0" />
            )}
          </div>

          {sponsor.description && (
            <p className="text-xs text-[#C4C6C5] leading-relaxed">
              {sponsor.description}
            </p>
          )}
        </div>

        {sponsor.websiteUrl && (
          <div className="pt-2 border-t border-[#3D4349] text-[11px] font-mono text-[#0077CA]">
            Visit Partner Website →
          </div>
        )}
      </div>
    );

    if (sponsor.websiteUrl) {
      return (
        <a
          key={sponsor.name}
          href={sponsor.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#191B1F]"
        >
          {content}
        </a>
      );
    }

    return (
      <div key={sponsor.name} className="h-full">
        {content}
      </div>
    );
  };

  return (
    <section className="py-14 md:py-20 bg-[#191B1F]">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top Thank-You Header */}
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => onNavigate('hero')}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#979C9F] hover:text-[#F1F0EC] rounded transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-[#0077CA]" />
            <span>Back to Main Site</span>
          </button>

          <div>
            <SectionSubheading>{sponsorsPage.eyebrow}</SectionSubheading>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F1F0EC] tracking-tight">
              {sponsorsPage.heading}
            </h1>
            <p className="text-sm sm:text-base text-[#C4C6C5] mt-3 leading-relaxed max-w-3xl">
              {sponsorsPage.description}
            </p>
          </div>
        </div>

        {/* Sponsor Showcase by Category */}
        <div className="space-y-8">
          {TIER_DISPLAY_ORDER.map((id) => {
            const tier = sponsorUs.tiers.find((t) => t.id === id);
            if (!tier) return null;

            const tierSponsors = sponsorsPage.sponsors.filter(
              (s) => s.tier === id
            );

            return (
              <div
                key={id}
                className="rounded-xl border border-[#444A50] bg-[#22252A]/60 p-6 sm:p-7 space-y-5"
              >
                <div className="pb-3 border-b border-[#3D4349]">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#F1F0EC]">
                    {tier.name}
                  </h2>
                </div>

                {tierSponsors.length > 0 ? (
                  <div className={`grid ${getGridClass(id)} items-stretch`}>
                    {tierSponsors.map((sponsor) =>
                      renderSponsorCard(sponsor, id)
                    )}
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed border-[#444A50] bg-[#191B1F]/70 p-6">
                    <div className="text-sm font-semibold text-[#F1F0EC]">
                      Founding sponsor positions are open in this category
                    </div>
                    <p className="text-xs text-[#979C9F] mt-1">
                      Organizations partnering with OTAS at the {tier.name} level will be recognized here with their logo and link.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Sponsorship Tiers & Benefits Showcase */}
        <div className="pt-8 border-t border-[#3D4349] space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
              Sponsorship Tiers & Benefits
            </h2>
            <p className="text-xs sm:text-sm text-[#C4C6C5] leading-relaxed max-w-2xl">
              Every sponsorship directly funds aircraft hardware, lab tooling, and competition readiness. Each tier includes the following partner benefits and recognition:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {TIER_DISPLAY_ORDER.map((id) => {
              const tier = sponsorUs.tiers.find((t) => t.id === id);
              if (!tier) return null;

              return (
                <div
                  key={id}
                  className="flex flex-col justify-between p-5 rounded-xl border border-[#444A50] bg-[#22252A] space-y-4"
                >
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#F1F0EC]">
                        {tier.name}
                      </h3>
                      <div className="text-lg font-extrabold font-mono text-[#F1F0EC] mt-0.5">
                        {tier.range}
                      </div>
                    </div>

                    <p className="text-xs text-[#C4C6C5] leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="pt-3 border-t border-[#3D4349] space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#979C9F] font-semibold">
                        Package Inclusions:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#E2E4E2]">
                        {tier.perks.map((perk, perkIdx) => (
                          <li key={perkIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#0077CA] shrink-0 mt-0.5" />
                            <span className="leading-tight">{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Become a Sponsor Callout */}
          <div className="p-6 rounded-xl border border-[#444A50] bg-[#22252A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#F1F0EC]">
                Interested in Becoming a Sponsor?
              </h3>
              <p className="text-xs sm:text-sm text-[#C4C6C5]">
                Review our funding needs, in-kind donation options, and official Ontario Tech design team sponsorship portal.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}?subject=Sponsorship%20Inquiry%20-%20Ontario%20Tech%20Aerial%20Systems`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#F1F0EC] bg-[#191B1F] hover:bg-[#2B2E33] border border-[#444A50] hover:border-[#0077CA] rounded-md transition-colors"
              >
                <Mail className="h-4 w-4 text-[#0077CA]" />
                <span>Email Sponsorship Team</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('sponsor-us')}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#191B1F] bg-[#F15A32] hover:bg-[#FF7045] rounded-md transition-colors cursor-pointer"
              >
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
