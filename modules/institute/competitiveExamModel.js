import mongoose from "mongoose";

const competitiveExamSchema = new mongoose.Schema({
  user_id: { type: String, ref: "users" },
  exam_name: {type: String},
  exam_type: { type: String },
  created_at: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
});

export const competitiveExamModel = mongoose.model("competitiveexams", competitiveExamSchema);
