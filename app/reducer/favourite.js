const initialStage = {
  cartItems: [],
  status: "pending",
};
export const addToFavourite = "add";
export const removeToFavourite = "remove";

export const favouriteReducer = (state = initialStage, action) => {
  switch (action.type) {
    case addToFavourite:
      return {
        ...state,
        cartItems: [...state.cartItems,action.payload],
        status: "pending",
      };

    case removeToFavourite:
      const updatedFav = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        
        cartItems: updatedFav,
        status: "pending",
      };
      default:
        return state
  }
};
