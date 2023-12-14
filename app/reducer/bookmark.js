const initialStage = {
  bookmarkItems: [],
  status: "pending",
  count: 0,
};
export const addToBookmark = "addBookmarkItem";
export const removeToBookmark = "removeBookmarkItem";
export const clearBookmark = "removeBookmark";
export const SET_BOOKMARK_ITEMS="setPermentBook"
export const bookmarkReducer = (state = initialStage, action) => {
  switch (action.type) {
    case addToBookmark:
      return {
        ...state,
        bookmarkItems: [...state.bookmarkItems, action.payload],
        status: "pending",
      };
    case removeToBookmark:
      const updatedBookmark = state.bookmarkItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        bookmarkItems: updatedBookmark,
        status: "pending",
      };
    case clearBookmark:
      return {
        ...state,
        bookmarkItems: [],
      };
      case SET_BOOKMARK_ITEMS:
      return {
        ...state,
        bookmarkItems: action.payload,
      };
    default:
      return state;
  }
};
