import mongoose from "mongoose";
import { Schema } from "mongoose";

const providerModal = new mongoose.Schema({
  name: String,
  title: String,
  img: String,
  alt: String,
  description: String,
  price: Number,
  offer: Number,
  rating: Number,
  review: String,
});
//modal
export const provider =
  mongoose.models.providers || mongoose.model("providers", providerModal);
