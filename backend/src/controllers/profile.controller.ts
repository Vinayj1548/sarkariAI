import { Response } from "express";

import Profile from "../models/Profile";
import { AuthRequest } from "../middleware/auth.middleware";

export const createProfile = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const {
      age,
      gender,
      state,
      category,
      qualification,
      graduationYear,
    } = req.body;

    const existingProfile =
      await Profile.findOne({
        userId: req.user?.id,
      });

    if (existingProfile) {
      return res.status(400).json({
        message: "Profile already exists",
      });
    }

    const profile =
      await Profile.create({
        userId: req.user?.id,
        age,
        gender,
        state,
        category,
        qualification,
        graduationYear,
      });

    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getProfile = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const profile =
      await Profile.findOne({
        userId: req.user?.id,
      });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};