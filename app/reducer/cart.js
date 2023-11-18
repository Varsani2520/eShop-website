import { toast } from "react-toastify";

const initialStage = {
  cartItems: [],
  status: "pending",
};
export const addToCart = "add";
export const removeToCart = "remove";
export const incrementQuantity = "incQuantity";
export const decrementQuantity = "decQuantity";

export const cartReducer = (state = initialStage, action) => {
  switch (action.type) {
    case addToCart:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        status: "pending",
      };
    case removeToCart:
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: updatedCart,
        status: "pending",
      };
    case incrementQuantity:
      if (action.payload.quantity >= 5) {
        toast.error("Limited quantity available");
        return state;
      }
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
        status: "pending",
      };
    case decrementQuantity:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: Math.max(1, item.quantity - 1),
              }
            : item
        ),
        status: "pending",
      };
    default:
      return state;
  }
};
