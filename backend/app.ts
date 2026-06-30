import express from "express";
import cors from "cors";

import authRoutes from "./src/routes/auth.routes";
import profileRoutes from "./src/routes/profile.routes";
import jobsRoutes from "./src/routes/jobs.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/profile",
  profileRoutes
);

app.use(
  "/api/jobs",
  jobsRoutes
);

export default app;