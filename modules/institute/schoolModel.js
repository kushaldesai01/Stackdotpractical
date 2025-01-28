import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  user_id: { type: String, ref: "users" },
  education_board: { type: String },
  medium: { type: String },
  class_category: { type: String },
  standard: { type: String },
  subjects: { type: Array },
  created_at: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
});

export const schoolModel = mongoose.model("schools", schoolSchema);
