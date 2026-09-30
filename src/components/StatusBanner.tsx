import React from 'react';
import { Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export const StatusBanner: React.FC = () => {
  const config = SITE_CONFIG.provisionalStatusNotice;

  if (!config?.enabled) {
    return null;
  }

  return (
    <aside
      aria-label="University Recognition Status Notice"
      className="w-full border-b border-[#F15A32]/30 bg-[#1F1916] text-[#F1F0EC] shadow-xs"
    >
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 text-xs">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Compact Status Pill */}
          <span className="shrink-0 rounded bg-[#F15A32] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#191B1F]">
            {config.badge}
          </span>

          {/* Crisp, concise statement */}
          <span className="text-[#E2E4E2] truncate">
            {config.message}
            {config.subtext && (
              <span className="hidden sm:inline ml-1.5 text-[#F15A32] font-medium">
                ({config.subtext})
              </span>
            )}
          </span>
        </div>

        {/* Subtle status tag */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0 pl-3 font-mono text-[11px] text-[#979C9F]">
          <Clock className="h-3 w-3 text-[#F15A32]" />
          <span>Pending approval</span>
        </div>
      </div>
    </aside>
  );
};
