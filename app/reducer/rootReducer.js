import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { favouriteReducer } from "./favourite";
import authReducer from "./authenticate";
import { bookmarkReducer } from "./bookmark";
import { paymentReducer } from "./payment";

export const rootReducer = combineReducers({
  cart: cartReducer,
  likes: favouriteReducer,
  auth: authReducer,
  bookmark: bookmarkReducer,
  payment: paymentReducer,
});
