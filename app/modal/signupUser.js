import mongoose from "mongoose";

const signupuserModal = new mongoose.Schema({
  password: String,
  username: {
    type: String,
    unique: true,
    required: [true, "email required"],
  },
  name: String,
  address: String,
  token: String,
});

// modal
export const signupUser =
  mongoose.models.sign || mongoose.model("sign", signupuserModal);
