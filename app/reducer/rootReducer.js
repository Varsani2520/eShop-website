import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { favouriteReducer } from "./favourite";
import authReducer from "./authenticate";

export const rootReducer = combineReducers({
  cart: cartReducer,
  likes: favouriteReducer,
  auth: authReducer,
});
