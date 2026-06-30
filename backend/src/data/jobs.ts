import { Job } from "../types/job.types";

export const jobs: Job[] = [
  {
    id: 1,
    title: "SSC CGL",
    organization: "Staff Selection Commission",

    minAge: 18,
    maxAge: 32,

    states: ["All India"],

    categories: [
      "General",
      "OBC",
      "SC",
      "ST",
      "EWS"
    ],

    qualifications: [
      "BSc",
      "BA",
      "BCom",
      "BTech"
    ],

    minGraduationYear: 2015,

    salary: "₹44,900 - ₹1,42,400",

    vacancies: 14582,

    lastDate: "2026-08-20"
  },

  {
    id: 2,
    title: "Rajasthan Patwari",
    organization: "RSMSSB",

    minAge: 18,
    maxAge: 40,

    states: ["Rajasthan"],

    categories: [
      "General",
      "OBC",
      "SC",
      "ST",
      "EWS"
    ],

    qualifications: [
      "Graduation",
      "BA",
      "BSc",
      "BCom"
    ],

    minGraduationYear: 2014,

    salary: "₹20,800 - ₹65,900",

    vacancies: 2998,

    lastDate: "2026-09-15"
  }
];