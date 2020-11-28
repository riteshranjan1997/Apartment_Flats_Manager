import { combineReducers } from "redux";
import {
  FLAT_DATA_REQUEST,
  FLAT_DATA_SUCCESS,
  FLAT_DATA_FAILURE,
  SINGLE_FLAT_DATA_REQUEST,
  SINGLE_FLAT_DATA_SUCCESS,
  SINGLE_FLAT_DATA_FAILURE,
  ADD_FLAT_DETAILS_REQUEST,
  ADD_FLAT_DETAILS_SUCCESS,
  ADD_FLAT_DETAILS_FAILURE,
  UPDATE_FLAT_DETAILS_REQUEST,
  UPDATE_FLAT_DETAILS_SUCCESS,
  UPDATE_FLAT_DETAILS_FAILURE,
  DELETE_FLAT_REQUEST,
  DELETE_FLAT_SUCCESS,
  DELETE_FLAT_FAILURE,
  ADD_FLAT_RESIDENT_REQUEST,
  ADD_FLAT_RESIDENT_SUCCESS,
  ADD_FLAT_RESIDENT_FAILURE,
  UPDATE_FLAT_RESIDENT_DETAILS_REQUEST,
  UPDATE_FLAT_RESIDENT_DETAILS_SUCCESS,
  UPDATE_FLAT_RESIDENT_DETAILS_FAILURE,
  DELETE_FLAT_RESIDENT_REQUEST,
  DELETE_FLAT_RESIDENT_SUCCESS,
  DELETE_FLAT_RESIDENT_FAILURE,
  REMOVE_ERROR,
} from "./ActionType";

// for login user
export const getFlatDataRequest = () => ({
  type: FLAT_DATA_REQUEST,
});

export const getFlatDataSuccess = (payload) => ({
  type: FLAT_DATA_SUCCESS,
  payload,
});

export const getFlatDataFailure = (payload) => ({
  type: FLAT_DATA_FAILURE,
  payload,
});

export const flatDataRequest = (payload) => async (dispatch) => {
  console.log(payload,"in action")
  dispatch(getFlatDataRequest());
  let url = "";
  if (payload.resident_type && payload.block && payload.page && payload.limit) {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}&resident_type=${payload.resident_type}&block=${payload.block}&page=${payload.page}&limit=${payload.limit}`;
  } else if (payload.resident_type && payload.block && payload.page) {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}&resident_type=${payload.resident_type}&block=${payload.block}&page=${payload.page}`;
  } else if (payload.resident_type && payload.block && payload.limit) {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}&resident_type=${payload.resident_type}&block=${payload.block}&limit=${payload.limit}`;
  } else if (payload.resident_type && payload.block) {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}&resident_type=${payload.resident_type}&block=${payload.block}`;
  } else if (payload.resident_type && payload.page && payload.limit) {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}&resident_type=${payload.resident_type}&page=${payload.page}&limit=${payload.limit}`;
  } else if (payload.resident_type && payload.page) {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}&resident_type=${payload.resident_type}&page=${payload.page}`;
  } else if (payload.resident_type) {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}&resident_type=${payload.resident_type}`;
  } else if (payload.block && payload.page && payload.limit) {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}&block=${payload.block}&page=${payload.page}&limit=${payload.limit}`;
  } else if (payload.block && payload.page) {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}&block=${payload.block}&page=${payload.page}`;
  } else if (payload.block) {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}&block=${payload.block}`;
  } else {
    url = `http://localhost:5000/apartment/getFlat?apartment_id=${payload.apartment_id}`;
  }

  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(getFlatDataSuccess(res));
    })
    .catch((err) => {
      dispatch(getFlatDataFailure(err));
    });
};

export const getSingleFlatDataRequest = () => ({
  type: SINGLE_FLAT_DATA_REQUEST,
});
export const getSingleFlatDataSuccess = (payload) => ({
  type: SINGLE_FLAT_DATA_SUCCESS,
  payload,
});
export const getSingleFlatDataFailure = (payload) => ({
  type: SINGLE_FLAT_DATA_FAILURE,
  payload,
});
export const getSingleFlatRequest = (payload) => async (dispatch) => {
  console.log(payload,"in action")
  dispatch(getSingleFlatDataRequest());
  return await fetch(
    `http://localhost:5000/apartment/getFlatData/${payload.flat_id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(getSingleFlatDataSuccess(res));
    })
    .catch((err) => {
      dispatch(getSingleFlatDataFailure(err));
    });
};

export const addFlatDataRequest = () => ({
  type: ADD_FLAT_DETAILS_REQUEST,
});
export const addFlatDataSuccess = (payload) => ({
  type: ADD_FLAT_DETAILS_SUCCESS,
  payload,
});
export const addFlatDataFailure = (payload) => ({
  type: ADD_FLAT_DETAILS_FAILURE,
  payload,
});
export const addFlatRequest = (payload) => (dispatch) => {
  dispatch(addFlatDataRequest());

  return fetch("http://localhost:5000/apartment/addFlat", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ ...payload }),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            dispatch(addFlatDataSuccess(res))
        })
        .catch((err) => {
            dispatch(addFlatDataFailure(err))
        });

};

export const editFlatDataRequest = () => ({
  type: UPDATE_FLAT_DETAILS_REQUEST,
});
export const editFlatDataSuccess = (payload) => ({
  type: UPDATE_FLAT_DETAILS_SUCCESS,
  payload,
});
export const editFlatDataFailure = (payload) => ({
  type: UPDATE_FLAT_DETAILS_FAILURE,
  payload,
});
export const editFlatRequest = (payload) => (dispatch) => {
  dispatch(editFlatDataRequest());

  return fetch("http://localhost:5000/apartment/editFlatData", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ ...payload }),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            dispatch(editFlatDataSuccess(res))
        })
        .catch((err) => {
            dispatch(editFlatDataFailure(err))
        });

};

export const deleteFlatDataRequest = () => ({
  type: DELETE_FLAT_REQUEST,
});
export const deleteFlatDataSuccess = (payload) => ({
  type: DELETE_FLAT_SUCCESS,
  payload,
});
export const deleteFlatDataFailure = (payload) => ({
  type: DELETE_FLAT_FAILURE,
  payload,
});
export const deleteFlatRequest = (payload) => (dispatch) => {
  dispatch(deleteFlatDataRequest());

  return fetch("http://localhost:5000/apartment/deleteFlat", {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ ...payload }),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            dispatch(deleteFlatDataSuccess(res))
        })
        .catch((err) => {
            dispatch(deleteFlatDataFailure(err))
        });

};

export const addFlatResidentDataRequest = () => ({
  type: ADD_FLAT_RESIDENT_REQUEST,
});
export const addFlatResidentDataSuccess = (payload) => ({
  type: ADD_FLAT_RESIDENT_SUCCESS,
});
export const addFlatResidentDataFailure = (payload) => ({
  type: ADD_FLAT_RESIDENT_FAILURE,
});
export const addFlatResidentRequest = (payload) => (dispatch) => {
  dispatch(addFlatResidentDataRequest());
};

export const editFlatResidentDataRequest = () => ({
  type: UPDATE_FLAT_RESIDENT_DETAILS_REQUEST,
});
export const editFlatResidentDataSuccess = (payload) => ({
  type: UPDATE_FLAT_RESIDENT_DETAILS_SUCCESS,
});
export const editFlatResidentDataFailure = (payload) => ({
  type: UPDATE_FLAT_RESIDENT_DETAILS_FAILURE,
});
export const editFlatResidentRequest = (payload) => (dispatch) => {
  dispatch(editFlatResidentDataRequest());
};

export const deleteFlatResidentDataRequest = () => ({
  type: DELETE_FLAT_RESIDENT_REQUEST,
});
export const deleteFlatResidentDataSuccess = (payload) => ({
  type: DELETE_FLAT_RESIDENT_SUCCESS,
  payload
});
export const deleteFlatResidentDataFailure = (payload) => ({
  type: DELETE_FLAT_RESIDENT_FAILURE,
  payload
});
export const deleteFlatResidentRequest = (payload) => (dispatch) => {
  dispatch(deleteFlatResidentDataRequest());

  return fetch("http://localhost:5000/apartment/deleteResident", {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ ...payload }),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            dispatch(deleteFlatResidentDataSuccess(res))
        })
        .catch((err) => {
            dispatch(deleteFlatResidentDataFailure(err))
        });
};

// for handdling errors
export const handleError = () => (dispatch) => {
  setTimeout(function () {
    dispatch(removerError());
  }, 4000);
};

export const removerError = () => ({
  type: REMOVE_ERROR,
});
