import React from 'react';
import { WEBSITE_CONTENT } from '../data/content';
import { Mail, MapPin, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const ContactSection: React.FC = () => {
  const { contact } = WEBSITE_CONTENT;

  const getChannelIcon = (name: string) => {
    switch (name) {
      case 'Instagram':
        return <Instagram className="h-4 w-4 text-[#F15A32]" />;
      case 'LinkedIn':
        return <Linkedin className="h-4 w-4 text-[#2E78B7]" />;
      case 'Email':
        return <Mail className="h-4 w-4 text-[#F15A32]" />;
      default:
        return <ExternalLink className="h-4 w-4 text-[#C4C6C5]" />;
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#191B1F]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <FadeIn delay={40}>
          <div>
            <div className="text-xs font-mono text-[#F15A32] uppercase tracking-wider mb-1.5 font-semibold">
              {contact.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F0EC] tracking-tight">
              {contact.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#C4C6C5] mt-2">
              {contact.description}
            </p>
          </div>
        </FadeIn>

        {/* Primary Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Email Card */}
          <FadeIn delay={120} distance={18}>
            <div className="h-full p-5 rounded-lg border border-[#444A50] bg-[#22252A] space-y-2 hover:border-[#5E666E] transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-[#979C9F] uppercase">
                <Mail className="h-4 w-4 text-[#F15A32]" />
                <span>Direct Email</span>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="block text-sm font-semibold text-[#F1F0EC] hover:text-[#F15A32] transition-colors font-mono"
              >
                {contact.email}
              </a>
              <p className="text-xs text-[#979C9F]">
                Direct inbox for sponsors, advisors, and student applicants
              </p>
            </div>
          </FadeIn>

          {/* Location Card */}
          <FadeIn delay={180} distance={18}>
            <div className="h-full p-5 rounded-lg border border-[#444A50] bg-[#22252A] space-y-2 hover:border-[#5E666E] transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-[#979C9F] uppercase">
                <MapPin className="h-4 w-4 text-[#F15A32]" />
                <span>Location</span>
              </div>
              <p className="text-sm font-medium text-[#F1F0EC]">
                {contact.location}
              </p>
              <p className="text-xs text-[#979C9F]">
                Faculty of Engineering and Applied Science
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Professional & Social Channels */}
        <FadeIn delay={240} distance={20}>
          <div className="p-6 rounded-lg border border-[#444A50] bg-[#22252A] space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono text-[#979C9F] uppercase tracking-wider">
                Official Team Channels
              </div>
              <span className="text-[11px] font-mono text-[#979C9F]">Connect with our organizers</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {contact.socials.map((channel, idx) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target={channel.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-4 rounded-md bg-[#191B1F] border border-[#444A50] hover:border-[#F15A32] transition-all"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-[#2B2E33] border border-[#444A50]">
                          {getChannelIcon(channel.name)}
                        </div>
                        <span className="text-xs font-bold text-[#F1F0EC] group-hover:text-[#F15A32] transition-colors">
                          {channel.name}
                        </span>
                      </div>
                      <ExternalLink className="h-3 w-3 text-[#979C9F] group-hover:text-[#F15A32] transition-colors" />
                    </div>

                    <div className="text-sm font-semibold text-[#F1F0EC] group-hover:text-[#F15A32] transition-colors">
                      {channel.handle}
                    </div>
                  </div>

                  <p className="text-[11px] text-[#979C9F] pt-2 border-t border-[#3D4349] mt-2">
                    {channel.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
