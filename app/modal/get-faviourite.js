import mongoose, { Schema } from "mongoose";

const getFavioriteModal = Schema({
  id: Number,
  message: String,
});

// modal
export const faviorite =
  mongoose.models.get-faviourite || mongoose.model("get-faviourite", getFavioriteModal);
