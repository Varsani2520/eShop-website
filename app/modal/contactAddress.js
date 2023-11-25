import mongoose, { Schema } from "mongoose";

const contactAddressModal = Schema({
  name: String,
  contactNo: String,
  house: String,
  area: String,
  pin: String,
  city: String,
  state: String,
});

// modal
export const contactAddress =
  mongoose.models.address || mongoose.model("address", contactAddressModal);
