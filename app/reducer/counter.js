const initialStage = {
    count: 0,
  };
  export const increment = "increment";
  export const decrement = "decrement";
  export const counterReducer = (state = initialStage, action) => {
    switch (action.type) {
      case increment:
        return {
          ...state,
          count: state.count + 1,
        };
      case decrement:
        return {
          ...state,
          count: state.count - 1,
        };
        default:return state;
    }
  };
  