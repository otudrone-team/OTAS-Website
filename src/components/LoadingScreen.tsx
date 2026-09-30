import React from 'react';
import { motion } from 'framer-motion';
import { OtasIcon } from './OtasIcon';

interface LoadingScreenProps {
  message?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = 'Initializing Ontario Tech Aerial Systems...',
}) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#191B1F] text-[#F1F0EC] px-4"
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Glowing Radar / Pulse ring container around the OTAS icon */}
        <div className="relative flex items-center justify-center">
          {/* Subtle expanding ping aura */}
          <span className="absolute inline-flex h-20 w-20 rounded-full bg-[#F15A32]/20 animate-ping" />
          
          {/* Outer glowing border ring */}
          <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#22252A] border border-[#F15A32]/40 shadow-[0_0_25px_rgba(241,90,50,0.25)]">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <OtasIcon className="w-9 h-9" />
            </motion.div>
          </div>
        </div>

        {/* Loading status indicator */}
        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F15A32] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#F15A32] font-semibold">
              OTAS Systems
            </span>
          </div>
          <p className="text-xs font-mono text-[#979C9F]">{message}</p>
        </div>

        {/* Minimal progress bar */}
        <div className="w-48 h-1 bg-[#2B2E33] rounded-full overflow-hidden border border-[#3D4349]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#2E78B7] via-[#F15A32] to-[#FF7045]"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
