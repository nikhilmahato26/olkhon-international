import type { LucideIcon } from "lucide-react";
import { BookOpen, ClipboardCheck, GraduationCap, Languages } from "lucide-react";
import lectureImg from "../assets/images/lecture-classroom.webp";
import libraryImg from "../assets/images/students-library.webp";
import laptopsImg from "../assets/images/students-laptops.webp";
import notesImg from "../assets/images/study-notes.webp";
import type { PreferredProgram, PreferredUniversity } from "./options";

export type Program = {
  id: string;
  title: string;
  description: string;
  /** Short client-supplied detail from current Synergy University campaigns. */
  current?: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  prefill: { program?: PreferredProgram; university?: PreferredUniversity };
};

export const PROGRAMS: Program[] = [
  {
    id: "undergraduate",
    title: "Undergraduate Programs",
    description:
      "Explore undergraduate study opportunities in Russia, including BBA and other available undergraduate programs. Contact us to discuss university options and eligibility requirements.",
    current: "Now enrolling: BBA taught in English at Synergy University, Moscow",
    icon: GraduationCap,
    image: lectureImg,
    imageAlt: "Students attending a lecture in a university classroom",
    prefill: { program: "BBA" },
  },
  {
    id: "diploma-preparatory",
    title: "Diploma and Preparatory Courses",
    description:
      "Enquire about diploma and preparatory course options that may support your academic pathway in Russia.",
    icon: BookOpen,
    image: libraryImg,
    imageAlt: "Students studying together at a table in a university library",
    prefill: { program: "Diploma Course" },
  },
  {
    id: "russian-language",
    title: "Russian Language Courses",
    description:
      "Explore Russian language learning opportunities and ask about course options suitable for your study plans.",
    current: "January 2027 intake: 12-month language course in Moscow",
    icon: Languages,
    image: notesImg,
    imageAlt: "A student writing notes in a notebook beside a cup of coffee",
    prefill: { program: "Russian Language Course" },
  },
  {
    id: "admission-assistance",
    title: "University Admission Assistance",
    description:
      "Receive guidance on university selection, application documentation, and admission procedures for Russian universities.",
    icon: ClipboardCheck,
    image: laptopsImg,
    imageAlt: "Three students discussing plans around laptops",
    prefill: { university: "Need Guidance" },
  },
];
