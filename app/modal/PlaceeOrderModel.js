import mongoose, { Schema } from "mongoose";
// data ->string, status ->string, date -> date, token ->string
const summaryModal = new Schema({
  token: String,
  status: String,
  data: [],
  date: Date,
});
export const summaries =
  mongoose.models.summary || mongoose.model("summary", summaryModal);
