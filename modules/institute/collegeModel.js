import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  user_id: { type: String, ref: "users" },
  university: { type: String },
  degree: { type: String },
  created_at: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
});

export const collegeModel = mongoose.model("colleges", collegeSchema);
