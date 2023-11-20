const initialStage = {
  favouriteItems: [],
  status: "pending",
};
export const addToFavourite = "add";
export const removeToFavourite = "remove";

export const favouriteReducer = (state = initialStage, action) => {
  switch (action.type) {
    case addToFavourite:
      return {
        ...state,
        favouriteItems: [...state.favouriteItems,action.payload],
        status: "pending",
      };

    case removeToFavourite:
      const updatedFav = state.favouriteItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        
        favouriteItems: updatedFav,
        status: "pending",
      };
      default:
        return state
  }
};
