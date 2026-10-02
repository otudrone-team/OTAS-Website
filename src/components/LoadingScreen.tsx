import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedOtasIcon } from './AnimatedOtasIcon';

interface LoadingScreenProps {
  message?: string;
  onAnimationComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = 'Initializing Ontario Tech Aerial Systems...',
  onAnimationComplete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#191B1F] text-[#F1F0EC] px-4"
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Glow & Aura Container */}
        <div className="relative flex items-center justify-center">
          {/* Subtle expanding ping aura */}
          <span className="absolute inline-flex h-32 w-32 rounded-full bg-[#F15A32]/15 animate-ping" />

          {/* Outer glowing shield housing */}
          <div className="relative flex items-center justify-center w-28 h-28 rounded-2xl bg-[#22252A]/90 border border-[#F15A32]/40 shadow-[0_0_35px_rgba(241,90,50,0.3)] backdrop-blur-sm p-3">
            {/* Anime.js SVG path draw-in animated logo */}
            <AnimatedOtasIcon size={88} onComplete={onAnimationComplete} />
          </div>
        </div>

        {/* Loading status indicator */}
        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#F15A32] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#F15A32] font-semibold">
              OTAS Systems
            </span>
          </div>
          <p className="text-xs font-mono text-[#979C9F]">{message}</p>
        </div>

        {/* Minimal progress bar */}
        <div className="w-52 h-1 bg-[#2B2E33] rounded-full overflow-hidden border border-[#3D4349]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#2E78B7] via-[#F15A32] to-[#FF7045]"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
