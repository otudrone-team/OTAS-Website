import React from 'react';
import otasLogoSvg from '../assets/OTAS_Logo.svg';

interface OtasLogoProps {
  className?: string;
  height?: number | string;
}

export const OtasLogo: React.FC<OtasLogoProps> = ({ className = 'h-9 w-auto', height }) => {
  return (
    <img
      src={otasLogoSvg}
      alt="Ontario Tech Aerial Systems Logo"
      className={className}
      style={height ? { height } : undefined}
    />
  );
};
