/**
 * Subtle line-art SVG icons for Curated Journeys
 *
 * Design principles:
 * - Single-stroke aesthetic matching museum-quality brand
 * - Minimal, evocative forms
 * - Consistent 24x24 viewBox
 * - Uses currentColor for theme compatibility
 */

import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

const defaultProps: IconProps = {
  size: 18,
};

// The Spice Road - stylized route/path
export function SpiceRoadIcon({ className, size = defaultProps.size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 17c3-2 6 2 9 0s6 2 9 0" />
      <circle cx="6" cy="17" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="18" cy="17" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 7v6" />
      <path d="M9 9l3-3 3 3" />
    </svg>
  );
}

// Words of War - crossed elements (abstract sword motif)
export function WarIcon({ className, size = defaultProps.size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

// Sacred Etymologies - flame/candle form
export function SacredIcon({ className, size = defaultProps.size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3c-1 3-3 5-3 8a3 3 0 0 0 6 0c0-3-2-5-3-8z" />
      <line x1="12" y1="14" x2="12" y2="21" />
      <line x1="9" y1="21" x2="15" y2="21" />
    </svg>
  );
}

// Untranslatable - abstract infinite/unique symbol
export function UntranslatableIcon({ className, size = defaultProps.size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3l2 4h4l-3 3 1 5-4-2-4 2 1-5-3-3h4z" />
    </svg>
  );
}

// Food's Travels - bowl/vessel form
export function FoodIcon({ className, size = defaultProps.size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M6 12c0 4 2.5 7 6 7s6-3 6-7" />
      <path d="M9 8c0-1 1-2 3-2s3 1 3 2" />
    </svg>
  );
}

// The Colonial Exchange - ship sail silhouette
export function ColonialIcon({ className, size = defaultProps.size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4v16" />
      <path d="M12 4c4 2 6 6 6 10H12" />
      <path d="M4 20h16" />
    </svg>
  );
}

// Breath & Soul - wind/breath curves
export function BreathIcon({ className, size = defaultProps.size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 8h12a3 3 0 1 0-3-3" />
      <path d="M4 12h16a3 3 0 1 1-3 3" />
      <path d="M4 16h8a2 2 0 1 0-2-2" />
    </svg>
  );
}

// Nature Named - wave/mountain form
export function NatureIcon({ className, size = defaultProps.size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 18c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      <path d="M8 14l4-8 4 8" />
    </svg>
  );
}

// The Scholar's Path - scroll/book form
export function ScholarIcon({ className, size = defaultProps.size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 5c0-1 1-2 2-2h12c1 0 2 1 2 2v14c0 1-1 2-2 2H6c-1 0-2-1-2-2V5z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="12" y2="16" />
    </svg>
  );
}

// Map journey ID to icon component
export const JOURNEY_ICONS: Record<string, React.ComponentType<IconProps>> = {
  "spice-road": SpiceRoadIcon,
  "words-of-war": WarIcon,
  "sacred-etymologies": SacredIcon,
  "untranslatable": UntranslatableIcon,
  "foods-travels": FoodIcon,
  "colonial-exchange": ColonialIcon,
  "breath-and-soul": BreathIcon,
  "nature-named": NatureIcon,
  "scholars-path": ScholarIcon,
};

// Helper component that renders the correct icon for a journey
export function JourneyIcon({ journeyId, ...props }: IconProps & { journeyId: string }) {
  const IconComponent = JOURNEY_ICONS[journeyId];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
