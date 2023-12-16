import mongoose, { Schema } from "mongoose";

const getCartModal = Schema({
  token: String,
  data: [],
});

export const cart =
  mongoose.models.cart || mongoose.model("cart", getCartModal);
