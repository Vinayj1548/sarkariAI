export interface Job {
  id: number;
  title: string;
  organization: string;

  minAge: number;
  maxAge: number;

  states: string[];
  categories: string[];
  qualifications: string[];

  minGraduationYear: number;

  salary: string;
  vacancies: number;
  lastDate: string;
}
