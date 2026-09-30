import React from 'react';

interface SectionDividerProps {
  className?: string;
  maxWidth?: string;
}

/**
 * Reusable SectionDivider component
 * Renders a subtle horizontal line using the OTAS divider color (--color-otas-divider / #3D4349)
 * for clean, consistent visual separation between major sections.
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  maxWidth = 'max-w-6xl',
}) => {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 mx-auto ${maxWidth} ${className}`} aria-hidden="true">
      <hr className="border-0 h-px bg-[#3D4349]" />
    </div>
  );
};
