import mongoose, { Schema } from "mongoose";

const bookmarkModal = Schema({
  token: String,
  data: [],
});
export const bookmark =
  mongoose.models.bookmark || mongoose.model("bookmark", bookmarkModal);
