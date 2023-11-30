import mongoose from "mongoose";
import { Schema } from "mongoose";


const deleteAccount = Schema({
  token: String,
  data: [],
});

export const deleteaccount=mongoose.models.deleteUser || mongoose.model("deleteUser",deleteAccount)