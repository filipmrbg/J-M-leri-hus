import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Paint Roller / Interior Painting Icon
 */
export function PaintRollerIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      <rect x="2" y="2" width="16" height="6" rx="2" />
      <path d="M10 8v2a2 2 0 0 0 2 2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v4" />
      <path d="M14 18h-4" />
    </svg>
  );
}

/**
 * 2. Facade / Exterior Painting Icon
 */
export function FacadeIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
      <line x1="3" y1="9" x2="21" y2="9" />
    </svg>
  );
}

/**
 * 3. Wallpaper / Brush / Pattern Icon
 */
export function WallpaperIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <path d="M8 21V3" />
      <path d="M16 21V3" />
      <path d="M3 8h18" />
      <path d="M3 16h18" />
    </svg>
  );
}

/**
 * 4. Totalentreprenad / Clipboard Checklist Icon
 */
export function TotalentreprenadIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

export function ServiceIcon({ type, color = 'var(--color-primary)', size = 38 }: { type: string; color?: string; size?: number }) {
  switch (type) {
    case 'invandigt-maleri':
    case 'renovering':
      return <PaintRollerIcon color={color} size={size} />;
    case 'fasadmalning':
    case 'nybyggnation':
      return <FacadeIcon color={color} size={size} />;
    case 'tapetsering':
    case 'tillbyggnad':
    case 'ombyggnation':
      return <WallpaperIcon color={color} size={size} />;
    case 'totalentreprenad':
      return <TotalentreprenadIcon color={color} size={size} />;
    default:
      return <PaintRollerIcon color={color} size={size} />;
  }
}

export default ServiceIcon;
