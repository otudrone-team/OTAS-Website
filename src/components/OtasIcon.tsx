import React from 'react';
import otasIconSvg from '../assets/OTAS_Icon.svg';

interface OtasIconProps {
  className?: string;
  size?: number | string;
}

export const OtasIcon: React.FC<OtasIconProps> = ({ className = 'h-6 w-6', size }) => {
  return (
    <img
      src={otasIconSvg}
      alt="OTAS Aircraft Mark"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    />
  );
};
