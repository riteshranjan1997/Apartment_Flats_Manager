import {
  LOGIN_USERS_REQUEST,
  LOGIN_USERS_SUCCESS,
  LOGIN_USERS_FAILURE,
  LOGOUT_USER,
  REMOVE_ERROR,
} from "./ActionTypes";

const savedUser = JSON.parse(localStorage.getItem("savedUser"));

let initState = {
  isLoading: false,
  user_data: savedUser || {},
  error: false,
  message: "",
  isAuth: savedUser ? true : false,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case LOGIN_USERS_SUCCESS:
      localStorage.setItem('savedUser', JSON.stringify(payload.userData));
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        user_data:payload.userData,
        isAuth: true,
        message: "Login Successful!",
      };

    case LOGIN_USERS_FAILURE:
      console.log("payload", payload);
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        message: payload.message,
      };


    case LOGOUT_USER:
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        user_data: {},
      };

    // handling error
    case REMOVE_ERROR:
      return {
        ...state,
        message: "",
        isError: false,
      };
    default:
      return state;
  }
};

export default authReducer;
