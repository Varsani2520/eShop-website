
const initialState = {
  address: null,
};
export const CLEAR_ADDRESS="clearAddress"
export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ADDRESS:
      return {
        ...state,
        address: null, 
      };
    default:
      return state;
  }
};

