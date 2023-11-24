import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "../reducer/authenticate";
import { addToBookmark, removeToBookmark } from "../reducer/bookmark";
import {
  addToCart,
  decrementQuantity,
  decrementcartcount,
  incrementQuantity,
  incrementcartcount,
  removeToCart,
} from "../reducer/cart";

import {
  addToFavourite,
  decrementfav,
  incrementfav,
  removeToFavourite,
} from "../reducer/favourite";

export const addToCartItem = (item) => ({
  type: addToCart,
  payload: item,
});
export const incrementQuantityItem = (item) => ({
  type: incrementQuantity,
  payload: item,
});
export const decrementQuantityItem = (item) => ({
  type: decrementQuantity,
  payload: item,
});
export const removeToCartItem = (item) => ({
  type: removeToCart,
  payload: item,
});
export const incrementTotalCard = () => ({
  type: incrementcartcount,
});
export const decrementTotalCard = () => ({
  type: decrementcartcount,
});
// favroute

export const addToFavouriteItem = (Items) => ({
  type: addToFavourite,
  payload: Items,
});
export const removeToFavouriteItem = (Items) => ({
  type: removeToFavourite,
  payload: Items,
});
export const incrementTotalfav = () => ({
  type: incrementfav,
});
export const decrementTotalfav = () => ({
  type: decrementfav,
});
// auth action
export const loginUserSuccess = (userData) => ({
  type: LOGIN_USER_SUCCESS,
  payload: userData,
});

export const loginUserFailure = () => ({
  type: LOGIN_USER_FAILURE,
});
export const logoutuser = () => ({
  type: LOGOUT_USER,
});

// bookamrk item
export const bookmarkitem = (Items) => ({
  type: addToBookmark,
  payload: Items,
});
export const bookmarkitemremove = (Items) => ({
  type: removeToBookmark,
  payload: Items,
});
