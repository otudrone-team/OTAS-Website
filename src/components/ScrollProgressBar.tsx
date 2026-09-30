import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressBarProps {
  className?: string;
}

/**
 * ScrollProgressBar
 * A thin, fixed progress indicator positioned at the very top of the viewport/header
 * that tracks document scroll progress from 0% to 100% using the official OTAS orange (#F15A32).
 */
export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  className = '',
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-[#F15A32] origin-left shadow-[0_0_8px_rgba(241,90,50,0.85)]"
        style={{ scaleX }}
      />
    </div>
  );
};
