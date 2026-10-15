import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT, SITE_CONFIG } from '../data/content';
import {
  CheckCircle2,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import { SectionSubheading } from './SectionSubheading';

export const SponsorUsSection: React.FC = () => {
  const { sponsorUs } = WEBSITE_CONTENT;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(SITE_CONFIG.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="sponsor-us" className="py-16 md:py-24 bg-[#191B1F]">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10"
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
          <h3 className="text-base sm:text-lg font-bold text-[#F1F0EC]">
            Why Support Our Team Now
          </h3>
          <p className="text-xs sm:text-sm text-[#C4C6C5] leading-relaxed">
            {sponsorUs.whySponsor}
          </p>
        </div>

        {/* 3-Tier Sponsorship Packages */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-[#F1F0EC]">
            {sponsorUs.tiersHeading}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {sponsorUs.tiers.map((tier, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-5 rounded-xl border border-[#444A50] bg-[#22252A] hover:border-[#5E666E] transition-all"
              >
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#F1F0EC]">
                      {tier.name}
                    </h4>
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
            ))}
          </div>
        </div>

        {/* Condensed Foundational Needs (Split into 2 Modules) */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-[#F1F0EC]">
            {sponsorUs.currentNeedsHeading}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Monetary Sponsorship Funds */}
            <div className="p-5 rounded-xl border border-[#444A50] bg-[#22252A] space-y-3 hover:border-[#5E666E] transition-colors">
              <div className="text-sm font-bold text-[#F1F0EC]">
                {sponsorUs.needsSplit.monetary.title}
              </div>
              <p className="text-xs text-[#979C9F]">
                {sponsorUs.needsSplit.monetary.tagline}
              </p>
              <ul className="space-y-2 pt-1 border-t border-[#3D4349] text-xs text-[#C4C6C5]">
                {sponsorUs.needsSplit.monetary.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0077CA] shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In-Kind Equipment & Resources */}
            <div className="p-5 rounded-xl border border-[#444A50] bg-[#22252A] space-y-3 hover:border-[#5E666E] transition-colors">
              <div className="text-sm font-bold text-[#F1F0EC]">
                {sponsorUs.needsSplit.inKind.title}
              </div>
              <p className="text-xs text-[#979C9F]">
                {sponsorUs.needsSplit.inKind.tagline}
              </p>
              <ul className="space-y-2 pt-1 border-t border-[#3D4349] text-xs text-[#C4C6C5]">
                {sponsorUs.needsSplit.inKind.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0077CA] shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What We Can Offer in Return */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-[#F1F0EC]">
            {sponsorUs.whatWeOfferHeading}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {sponsorUs.whatWeOffer.map((offer, idx) => (
              <div
                key={idx}
                className="h-full p-4 rounded-lg border border-[#444A50] bg-[#22252A] space-y-2 hover:border-[#5E666E] transition-colors"
              >
                <div className="text-xs font-bold text-[#F1F0EC]">
                  {offer.title}
                </div>
                <p className="text-xs text-[#C4C6C5] leading-relaxed">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Sponsorship Action Callouts */}
        <div className="p-6 rounded-xl border border-[#F15A32]/50 bg-[#22252A] space-y-5 shadow-lg">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-[#F1F0EC]">
              Ready to Discuss a Partnership?
            </h3>
            <p className="text-xs sm:text-sm text-[#C4C6C5] leading-relaxed">
              {sponsorUs.contactPrompt}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Option 1: Official University Design Team Portal Link */}
            <a
              href={sponsorUs.officialClubsPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-[#F15A32] hover:bg-[#FF7045] text-[#191B1F] font-bold text-xs sm:text-sm transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="h-4 w-4 shrink-0" />
                <span>Ready to Sponsor Us? Click Here</span>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Option 2: Have Any Questions For OTAS? (Mailto + Quick Copy Email Button) */}
            <div className="flex items-center justify-between rounded-lg bg-[#191B1F] border border-[#444A50] p-1.5 sm:p-2 gap-2">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}?subject=Sponsorship%20Inquiry%20-%20Ontario%20Tech%20Aerial%20Systems`}
                className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-semibold text-[#F1F0EC] hover:text-[#0077CA] transition-colors min-w-0"
              >
                <Mail className="h-4 w-4 text-[#0077CA] shrink-0" />
                <span className="whitespace-nowrap">Questions? Email Us</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                title={copied ? 'Copied to clipboard!' : 'Copy email address'}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono font-medium rounded bg-[#2B2E33] hover:bg-[#3D4349] text-[#E2E4E2] transition-colors cursor-pointer shrink-0"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-[#979C9F] shrink-0" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
