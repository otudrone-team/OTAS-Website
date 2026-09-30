import React from 'react';
import { Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export const StatusBanner: React.FC = () => {
  const config = SITE_CONFIG.provisionalStatusNotice;

  if (!config?.enabled) {
    return null;
  }

  const fullNoticeText = `${config.message}${config.subtext ? ` (${config.subtext})` : ''}`;

  return (
    <aside
      aria-label="University Recognition Status Notice"
      className="w-full border-b border-[#F15A32]/30 bg-[#1F1916] text-[#F1F0EC] shadow-xs overflow-hidden"
    >
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-3 sm:px-6 lg:px-8 text-xs">
        <div className="flex items-center gap-2.5 min-w-0 flex-1 overflow-hidden">
          {/* Compact Status Pill */}
          <span className="shrink-0 z-10 rounded bg-[#F15A32] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#191B1F]">
            {config.badge}
          </span>

          {/* Desktop/Tablet (>=md): Clean static text */}
          <div className="hidden md:flex items-center text-[#E2E4E2] truncate">
            <span>{config.message}</span>
            {config.subtext && (
              <span className="ml-1.5 text-[#F15A32] font-medium whitespace-nowrap">
                ({config.subtext})
              </span>
            )}
          </div>

          {/* Mobile/Smaller views (<md): Auto horizontally moving text loop */}
          <div className="flex md:hidden relative overflow-hidden flex-1 h-6 items-center">
            {/* Soft gradient edge masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-[#1F1916] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#1F1916] to-transparent z-10" />

            <div className="inline-flex whitespace-nowrap animate-marquee will-change-transform">
              <span className="text-[#E2E4E2] font-medium pr-10 text-xs">
                {fullNoticeText}
              </span>
              <span className="text-[#E2E4E2] font-medium pr-10 text-xs">
                {fullNoticeText}
              </span>
            </div>
          </div>
        </div>

        {/* Subtle status tag on desktop */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0 pl-3 font-mono text-[11px] text-[#979C9F]">
          <Clock className="h-3 w-3 text-[#F15A32]" />
          <span>Pending approval</span>
        </div>
      </div>
    </aside>
  );
};
