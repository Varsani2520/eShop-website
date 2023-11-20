import mongoose from "mongoose";

const loginuserModal = new mongoose.Schema({
  password: String,
  username: {
    type: String,
    unique: true,
    required: [true, "email required"],
  },
  
});

// modal
export const loginUser =
  mongoose.models.login || mongoose.model("login", loginuserModal);
