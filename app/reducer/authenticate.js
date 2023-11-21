const initialStage = {
  authUser: [],
  messsage: "fail",
};
export const LOGIN_USER_SUCCESS = "loginSuccess";
export const LOGIN_USER_FAILURE = "loginFail";
export const LOGOUT_USER="logout"
const authReducer = (state = initialStage, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        authUser: action.payload,
        message: "success",
      };
    case "LOGIN_USER_FAILURE":
      return {
        authuser: [],
        message: "failure",
      };
    case LOGOUT_USER:
      return {
        authUser: [],
        message: "logout",
      };
    default:
      return state;
  }
};

export default authReducer;
