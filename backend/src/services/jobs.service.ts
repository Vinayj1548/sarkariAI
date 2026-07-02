import { jobs } from "../data/jobs";

export const filterJobsService = (userData: any) => {

  const {
    age,
    state,
    category,
    qualification,
    graduationYear,
  } = userData;

  return jobs.filter((job) => {

    const ageMatch =
      Number(age) >= job.minAge &&
      Number(age) <= job.maxAge;

    const stateMatch =
      job.states.includes("All India") ||
      job.states.includes(state);

    const categoryMatch =
      job.categories.includes(category);

    const qualificationMatch =
      job.qualifications.includes(qualification);

    const graduationYearMatch =
      Number(graduationYear) >=
      job.minGraduationYear;

    console.log({
    title: job.title,
    ageMatch,
    stateMatch,
    categoryMatch,
    qualificationMatch,
    graduationYearMatch,
  });

    return (
      ageMatch &&
      stateMatch &&
      categoryMatch &&
      qualificationMatch &&
      graduationYearMatch
    );
  });
};