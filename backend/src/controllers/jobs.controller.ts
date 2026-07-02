import { Request, Response } from "express";
import { filterJobsService } from "../services/jobs.service";

export const filterJobs = (
  req: Request,
  res: Response
) => {
  try {
    const filteredJobs = filterJobsService(req.body);

    return res.status(200).json({
      success: true,
      totalJobs: filteredJobs.length,
      jobs: filteredJobs,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};