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
  
  const savedUser = JSON.parse(localStorage.getItem("savedUser")) || {};
  
  let initState = {
    isLoading: false,
    flat_data: [],
    selected_flat:{},
    total_data: null,
    error: false,
    message: "",
  };
  
  const authReducer = (state = initState, { type, payload }) => {
    switch (type) {


      case FLAT_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case FLAT_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          flat_data:payload.data,
          total_data:payload.total_data,
          message: payload.message,
        };
  
      case FLAT_DATA_FAILURE:
        
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          message: payload.message,
        };


        case SINGLE_FLAT_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case SINGLE_FLAT_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          selected_flat:payload.data,
          message: payload.message,
        };
  
      case SINGLE_FLAT_DATA_FAILURE:
        
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          message: payload.message,
        };





        case ADD_FLAT_DETAILS_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case ADD_FLAT_DETAILS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          flat_data:payload.flat_data,
          message: payload.message,
        };
  
      case ADD_FLAT_DETAILS_FAILURE:
        
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          message: payload.message,
        };




        case UPDATE_FLAT_DETAILS_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case UPDATE_FLAT_DETAILS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          flat_data:payload.flat_data,
          message: payload.message,
        };
  
      case UPDATE_FLAT_DETAILS_FAILURE:
        
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          message: payload.message,
        };




        case DELETE_FLAT_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case DELETE_FLAT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          flat_data:payload.flat_data,
          message: payload.message,
        };
  
      case DELETE_FLAT_FAILURE:
        
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          message: payload.message,
        };



        case ADD_FLAT_RESIDENT_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case ADD_FLAT_RESIDENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          flat_data:payload.flat_data,
          message: payload.message,
        };
  
      case ADD_FLAT_RESIDENT_FAILURE:
        
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          message: payload.message,
        };



        case UPDATE_FLAT_RESIDENT_DETAILS_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case UPDATE_FLAT_RESIDENT_DETAILS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          flat_data:payload.flat_data,
          message: payload.message,
        };
  
      case UPDATE_FLAT_RESIDENT_DETAILS_FAILURE:
        
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          message: payload.message,
        };



        case DELETE_FLAT_RESIDENT_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case DELETE_FLAT_RESIDENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          flat_data:payload.flat_data,
          message: payload.message,
        };
  
      case DELETE_FLAT_RESIDENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          message: payload.message,
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
  