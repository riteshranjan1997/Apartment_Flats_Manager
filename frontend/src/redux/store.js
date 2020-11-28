import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import AuthReducer from "./Auth/AuthReducer"
import AppReducer from "./App/AppReducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({auth:AuthReducer, app:AppReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);