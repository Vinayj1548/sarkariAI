import express from "express";

import {
  createProfile,
  getProfile,
} from "../controllers/profile.controller";

import {
  protect,
} from "../middleware/auth.middleware";

const router = express.Router();

router.post(
  "/create",
  protect,
  createProfile
);

router.get(
  "/me",
  protect,
  getProfile
);

export default router;