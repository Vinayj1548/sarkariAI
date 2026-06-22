import mongoose, { Document } from "mongoose";

export interface IProfile extends Document {
  userId: mongoose.Types.ObjectId;
  age: number;
  gender: string;
  state: string;
  category: string;
  qualification: string;
  graduationYear: number;
}

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    graduationYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProfile>(
  "Profile",
  profileSchema
);