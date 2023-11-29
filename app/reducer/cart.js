import { toast } from "react-toastify";

const initialStage = {
  cartItems: [],
  status: "pending",
  count: 0,
};

export const addToCart = "add";
export const removeToCart = "remove";
export const incrementQuantity = "incQuantity";
export const decrementQuantity = "decQuantity";
export const incrementcartcount = "incrementcartcount";
export const decrementcartcount = "decrementcartcount";
export const CLEAR_CART="clearData"
export const cartReducer = (state = initialStage, action) => {
  switch (action.type) {
    case addToCart:
      return {
        ...state,
        cartItems: state.cartItems ? [...state.cartItems, action.payload] : [action.payload],
        status: "pending",
        count: state.count + 1,
      };
    case removeToCart:
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: updatedCart,
        status: "pending",
        count: state.count - 1,
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
    case incrementcartcount:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrementcartcount:
      return {
        ...state,
        count: state.count - 1,
      };
      case CLEAR_CART:
        return{
          ...state,cart:{...state.cart,cartItems:[]}
        }
        
    default:
      return state;
  }
};
