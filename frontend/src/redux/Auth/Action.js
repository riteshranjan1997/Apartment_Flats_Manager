import {
  LOGIN_USERS_REQUEST,
  LOGIN_USERS_SUCCESS,
  LOGIN_USERS_FAILURE,
  LOGOUT_USER,
  REMOVE_ERROR,
} from "./ActionTypes";

// for login user
export const loginUserRequest = () => ({
  type: LOGIN_USERS_REQUEST,
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USERS_SUCCESS,
  payload,
});

export const loginUserFailure = (payload) => ({
  type: LOGIN_USERS_FAILURE,
  payload,
});

export const loginRequest = (payload) => (dispatch) => {
  dispatch(loginUserRequest());
  return fetch("http://localhost:5000/manager/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ...payload }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(loginUserSuccess(res));
    })
    .catch((err) => {
      dispatch(loginUserFailure(err));
    });
};

// logging out user
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

// for handdling errors
export const handleError = () => (dispatch) => {
  setTimeout(function () {
    dispatch(removerError());
  }, 4000);
};

export const removerError = () => ({
  type: REMOVE_ERROR,
});
