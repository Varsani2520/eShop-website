import { CLEAR_ADDRESS } from "../reducer/address";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "../reducer/authenticate";
import {
  SET_BOOKMARK_ITEMS,
  addToBookmark,
  clearBookmark,
  removeToBookmark,
} from "../reducer/bookmark";
import {
  CLEAR_CART,
  addToCart,
  decrementQuantity,
  decrementcartcount,
  incrementQuantity,
  incrementcartcount,
  removeToCart,
} from "../reducer/cart";

import {
  addToFavourite,
  clearFav,
  decrementfav,
  incrementfav,
  removeToFavourite,
} from "../reducer/favourite";
import { SET_PAYMENT_DETAILS } from "../reducer/payment";

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
export const clearCart = () => ({
  type: CLEAR_CART,
});
// favroute

export const addToFavouriteItem = (item) => ({
  type: addToFavourite,
  payload: item,
});
export const removeToFavouriteItem = (item) => ({
  type: removeToFavourite,
  payload: item,
});
export const incrementTotalfav = () => ({
  type: incrementfav,
});
export const decrementTotalfav = () => ({
  type: decrementfav,
});
export const removefav = () => ({
  type: clearFav,
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
export const bookmarkitem = (item) => ({
  type: addToBookmark,
  payload: item,
});
export const bookmarkitemremove = (item) => ({
  type: removeToBookmark,
  payload: item,
});
export const clearBookmarkItem = () => ({ type: clearBookmark });

export const setBookmarkItems = (items) => ({
  type: SET_BOOKMARK_ITEMS,
  payload: items,
});

// payment
export const setpaymentdetaail = () => ({ type: SET_PAYMENT_DETAILS });

export const clearADress = () => ({
  type: CLEAR_ADDRESS,
});
