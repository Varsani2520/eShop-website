import { Schema } from "mongoose";
import { favouriteReducer } from "../reducer/favourite";

const getFavioriteModal = Schema({
  token: token,
  favdata: favouriteReducer,
  status: "pending",
});

// modal
export const faviorite =
  mongoose.models.getFaviourite ||
  mongoose.model("getFaviourite", getFavioriteModal);
