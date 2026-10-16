import bbaPoster from "../assets/images/synergy-bba-poster.jpg";
import languagePoster from "../assets/images/synergy-language-poster.jpg";
import type { PreferredProgram, PreferredUniversity } from "./options";

/**
 * Current Synergy University intakes, taken from the campaign posters
 * supplied by the client. Update or remove entries as campaigns change.
 * Each intake hides its "open" state automatically after `closesOn`.
 */
export type Intake = {
  id: string;
  title: string;
  campaign: string;
  location: string;
  /** Last day applications are accepted, ISO date (inclusive). */
  closesOn: string;
  closingLabel: string;
  intakeLabel?: string;
  highlights: string[];
  poster: string;
  posterAlt: string;
  prefill: { program: PreferredProgram; university: PreferredUniversity; intake?: string };
};

export const INTAKES: Intake[] = [
  {
    id: "bba-english",
    title: "BBA in English",
    campaign: "Last call to study in Moscow",
    location: "Moscow",
    closesOn: "2026-10-31",
    closingLabel: "Open until the end of October 2026",
    highlights: ["Bachelor of Business Administration taught in English", "Study in Moscow", "Part-time job opportunities"],
    poster: bbaPoster,
    posterAlt:
      "Synergy University poster: Last call to study in Moscow. BBA in English, study in Moscow, part-time job opportunities, open until the end of October 2026.",
    prefill: { program: "BBA", university: "Synergy University" },
  },
  {
    id: "russian-language",
    title: "Russian Language Course",
    campaign: "Learn Russian. Experience Moscow. Build your future.",
    location: "Moscow",
    closesOn: "2026-10-30",
    closingLabel: "Admission deadline 30 October 2026",
    intakeLabel: "January 2027 intake",
    highlights: ["12-month language course", "Study in Moscow", "European standard of living", "Affordable fee structure"],
    poster: languagePoster,
    posterAlt:
      "Synergy University poster: Learn Russian, experience Moscow, build your future. January 2027 intake open. Language course in Moscow, 12 months, admission deadline 30 October 2026.",
    prefill: { program: "Russian Language Course", university: "Synergy University", intake: "January 2027" },
  },
];

/** True while today (local time) is on or before the closing date. */
export function isIntakeOpen(intake: Pick<Intake, "closesOn">, now = new Date()): boolean {
  const [y, m, d] = intake.closesOn.split("-").map(Number);
  const endOfDay = new Date(y, m - 1, d, 23, 59, 59);
  return now <= endOfDay;
}

/** The soonest still-open intake, used by the announcement bar. */
export function nextOpenIntake(now = new Date()): Intake | undefined {
  return INTAKES.filter((i) => isIntakeOpen(i, now)).sort((a, b) => a.closesOn.localeCompare(b.closesOn))[0];
}
