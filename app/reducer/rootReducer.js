import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { favouriteReducer } from "./favourite";

export const rootReducer = combineReducers({
  cart: cartReducer,
  favourite:favouriteReducer
});
