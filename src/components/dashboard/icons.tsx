import type { ReactNode } from "react";

// SVG icon set ported verbatim from the original dashboard.
// Rendered inside <span class="icon"> which applies stroke/fill via CSS.
export const icons: Record<string, ReactNode> = {
  overview: (
    <svg viewBox="0 0 24 24">
      <path d="M4 13h6V4H4zM14 20h6V4h-6zM4 20h6v-3H4z" />
    </svg>
  ),
  hormones: (
    <svg viewBox="0 0 24 24">
      <path d="M12 3v18M8 7h8M7 17h10" />
      <path d="M6 7c-2 3-2 6 0 9M18 7c2 3 2 6 0 9" />
    </svg>
  ),
  risk: (
    <svg viewBox="0 0 24 24">
      <path d="M12 20a8 8 0 1 0-8-8" />
      <path d="M12 12l4-4" />
    </svg>
  ),
  tests: (
    <svg viewBox="0 0 24 24">
      <path d="M9 3h6M10 3v5l-5 9a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-5-9V3" />
    </svg>
  ),
  treatment: (
    <svg viewBox="0 0 24 24">
      <path d="M12 21s-7-4.5-9-10a5 5 0 0 1 8-5 5 5 0 0 1 8 5c-2 5.5-9 10-9 10z" />
    </svg>
  ),
  food: (
    <svg viewBox="0 0 24 24">
      <path d="M4 3v8a4 4 0 0 0 8 0V3M4 8h8M18 3v18" />
    </svg>
  ),
  exercise: (
    <svg viewBox="0 0 24 24">
      <path d="M6 7v10M18 7v10M3 12h18M9 9v6M15 9v6" />
    </svg>
  ),
  sleep: (
    <svg viewBox="0 0 24 24">
      <path d="M20 15.5A8 8 0 0 1 8.5 4 8 8 0 1 0 20 15.5z" />
    </svg>
  ),
  medicine: (
    <svg viewBox="0 0 24 24">
      <path d="M10 21a4 4 0 0 1-4-4V7a4 4 0 0 1 8 0v10a4 4 0 0 1-4 4z" />
      <path d="M6 12h8M16 7l5 5-5 5" />
    </svg>
  ),
  surgery: (
    <svg viewBox="0 0 24 24">
      <path d="M14 4l6 6-10 10H4v-6z" />
      <path d="M13 5l6 6" />
    </svg>
  ),
  myth: (
    <svg viewBox="0 0 24 24">
      <path d="M9 9a3 3 0 1 1 5 2.2c-1 .6-2 1.3-2 2.8" />
      <path d="M12 18h.01" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  plan: (
    <svg viewBox="0 0 24 24">
      <path d="M9 11l2 2 4-5" />
      <path d="M5 4h14v16H5z" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  chevronLeft: (
    <svg viewBox="0 0 24 24">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  ),
  chevronRight: (
    <svg viewBox="0 0 24 24">
      <path d="M9 6l6 6-6 6" />
    </svg>
  ),
};
