import mongoose, { Schema } from "mongoose";

const contactUserModal = Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "email required"],
  },
  message: String,
});

// modal
export const user =
  mongoose.model.names || mongoose.model("names", contactUserModal);
