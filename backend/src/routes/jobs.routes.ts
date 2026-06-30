import { Router } from "express";
import {filterJobs} from "../controllers/jobs.controller";

const router = Router();

router.post("/filter",filterJobs);

export default router;
