import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export const StatusBanner: React.FC = () => {
  const config = SITE_CONFIG.provisionalStatusNotice;

  if (!config?.enabled) {
    return null;
  }

  return (
    <aside
      aria-label="University Recognition Status Notice"
      className="w-full border-b border-[#F15A32]/40 bg-[#1F1916] text-[#F1F0EC] shadow-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 min-w-0 max-w-4xl">
          {/* Prominent High-Visibility Status Pill Badge */}
          <div className="inline-flex items-center gap-1.5 self-start shrink-0 rounded-md bg-[#F15A32] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#191B1F]">
            <AlertTriangle className="h-3.5 w-3.5 stroke-[2.5]" />
            <span>{config.badge}</span>
          </div>

          {/* Primary Statement & Disclaimer - with comfortable spacing and balanced width */}
          <div className="text-xs text-[#E2E4E2] leading-snug">
            <span className="font-semibold text-[#F1F0EC]">
              {config.message}
            </span>
            {config.subtext && (
              <span className="block sm:inline sm:ml-2 text-[#F15A32] font-medium text-[11px]">
                • {config.subtext}
              </span>
            )}
          </div>
        </div>

        {/* Live indicator showing ongoing review */}
        <div className="hidden lg:flex items-center gap-1.5 shrink-0 pl-4 ml-4 font-mono text-[11px] text-[#C4C6C5] border-l border-[#444A50]">
          <Clock className="h-3.5 w-3.5 text-[#F15A32]" />
          <span className="whitespace-nowrap">Pending Approval</span>
        </div>
      </div>
    </aside>
  );
};
