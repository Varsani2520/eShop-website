import { addToCart, decrementQuantity, incrementQuantity, removeToCart } from "../reducer/cart";
import { decrement, increment } from "../reducer/counter";

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
export const incrementTotal = () => ({
  type: increment,
});
export const decrementTotal = () => ({
  type: decrement,
});
