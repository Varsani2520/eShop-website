const initialStage = {
  favouriteItems: [],
  status: "pending",
  count: 0,
};
export const addToFavourite = "addToFav";
export const removeToFavourite = "removeFromFav";
export const incrementfav = "increment";
export const decrementfav = "decrement";
export const favouriteReducer = (state = initialStage, action) => {
  switch (action.type) {
    case addToFavourite:
      return {
        ...state,
        favouriteItems: state.favouriteItems
          ? [...state.favouriteItems, action.payload]
          : [action.payload],
        status: "pending",
        count: state.count + 1,
      };

    case removeToFavourite:
      const updatedFavourites = state.favouriteItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        favouriteItems: updatedFavourites,
        status:'pending',
        count: state.count - 1,
      };
    case incrementfav:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrementfav:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
