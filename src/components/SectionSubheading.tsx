import React from 'react';

interface SectionSubheadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'span' | 'h3' | 'h4' | 'p';
}

/**
 * Reusable SectionSubheading component
 * Standardizes the OTAS orange uppercase font-mono subheadings
 * placed above main section titles or internal subsections.
 */
export const SectionSubheading: React.FC<SectionSubheadingProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  return (
    <Component
      className={`text-xs font-mono text-[#F15A32] uppercase tracking-wider mb-1.5 font-semibold ${className}`}
    >
      {children}
    </Component>
  );
};
