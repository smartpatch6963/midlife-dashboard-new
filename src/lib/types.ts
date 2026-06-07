export type SectionId =
  | "overview"
  | "hormones"
  | "risk"
  | "tests"
  | "treatment"
  | "diet"
  | "exercise"
  | "sleep"
  | "medicines"
  | "surgery"
  | "myths"
  | "plan";

export type ToolKind = "risk" | "screen" | "pathway" | "action";

export interface MenuItem {
  /** Section id this nav button targets. */
  id: SectionId;
  label: string;
  /** Slide-range label shown on the right of the nav button. */
  range: string;
  /** Key into the icons map. */
  icon: string;
}

export interface Slide {
  id: number;
  title: string;
  topic: string;
  section: string;
  img: string;
  thumb: string;
}

export interface Section {
  title: string;
  intro: string;
  /** Patient-facing teaching note (doctor mode was dropped per requirements). */
  patient: string;
  /** Doctor-facing teaching note, retained in the data for future use. */
  doctor: string;
  cards?: [string, string][];
  faqs?: boolean;
  tools?: ToolKind;
}
