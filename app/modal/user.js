// models/User.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  // Add other user fields as needed
});

const user = mongoose.model.User || mongoose.model("User", userSchema);

export default user;
