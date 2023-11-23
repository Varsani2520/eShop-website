import mongoose from "mongoose";
import { Schema } from "mongoose";

const getFavioriteModal = Schema({
  token: String,
  data: [],
});

// modal
export const faviorite =
  mongoose.models.getFaviourite ||
  mongoose.model("getFaviourite", getFavioriteModal);
