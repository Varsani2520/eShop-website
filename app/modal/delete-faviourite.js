import mongoose from "mongoose";
import { Schema } from "mongoose";

const deleteFaviourite = Schema({
  token: String,
  data: [],
});
export const deletefav =
  mongoose.models.deleteFaviourite ||
  mongoose.model("deleteFaviourite", deleteFaviourite);
