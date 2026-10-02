import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_CONTENT } from '../data/content';
import { Mail, ExternalLink, Instagram, Linkedin, Copy, Check } from 'lucide-react';
import { SectionSubheading } from './SectionSubheading';

export const ContactSection: React.FC = () => {
  const { contact } = WEBSITE_CONTENT;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getChannelIcon = (name: string) => {
    switch (name) {
      case 'Email':
        return <Mail className="h-4 w-4 text-[#F15A32]" />;
      case 'Instagram':
        return <Instagram className="h-4 w-4 text-[#F15A32]" />;
      case 'LinkedIn':
        return <Linkedin className="h-4 w-4 text-[#2E78B7]" />;
      default:
        return <ExternalLink className="h-4 w-4 text-[#C4C6C5]" />;
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#191B1F]">
      <motion.div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <SectionSubheading>{contact.eyebrow}</SectionSubheading>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
            {contact.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#C4C6C5] mt-2">
            {contact.description}
          </p>
        </div>

        {/* Professional & Social Channels */}
        <div className="p-6 rounded-lg border border-[#444A50] bg-[#22252A] space-y-4">
          <div className="flex items-center justify-between">
            <SectionSubheading as="h3" className="mb-0">
              Official Team Channels
            </SectionSubheading>
            <span className="text-[11px] font-mono text-[#979C9F]">Connect with our organizers</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch">
            {contact.socials.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target={channel.url.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-4 rounded-md bg-[#191B1F] border border-[#444A50] hover:border-[#F15A32] transition-all h-full"
              >
                {/* Top content area with fixed min-height so horizontal dividing bars align across all 3 cards */}
                <div className="space-y-2 flex-1 flex flex-col justify-start">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-[#2B2E33] border border-[#444A50]">
                        {getChannelIcon(channel.name)}
                      </div>
                      <span className="text-xs font-bold text-[#F1F0EC] group-hover:text-[#F15A32] transition-colors">
                        {channel.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {channel.name === 'Email' && (
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          title={copied ? "Copied!" : "Copy email to clipboard"}
                          className="p-1 rounded text-[#979C9F] hover:text-[#F1F0EC] hover:bg-[#2B2E33] transition-colors cursor-pointer"
                        >
                          {copied ? (
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                          <span className="sr-only">Copy email address</span>
                        </button>
                      )}
                      <ExternalLink className="h-3 w-3 text-[#979C9F] group-hover:text-[#F15A32] transition-colors" />
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-[#F1F0EC] group-hover:text-[#F15A32] transition-colors truncate">
                    {channel.handle}
                  </div>
                </div>

                {/* Horizontal dividing bar pinned to the bottom of the content */}
                <p className="text-[11px] text-[#979C9F] pt-2.5 border-t border-[#3D4349] mt-3">
                  {channel.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
