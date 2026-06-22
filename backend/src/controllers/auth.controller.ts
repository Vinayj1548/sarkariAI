import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { generateToken } from "../utils/generateToken";

export const signup = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        message: "User already exists",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id.toString());

    res.status(201).json({
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const login = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      res.status(401).json({
        message: "Invalid Credentials",
      });
      return;
    }

    const token = generateToken(user._id.toString());

    res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};