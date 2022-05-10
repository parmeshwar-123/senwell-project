import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { applyMiddleware, compose } from "redux";

// import { composeWithDevTools } from "redux-devtools-extension";

const thunkMiddleWare = require("redux-thunk").default;
const middlewares = [thunkMiddleWare, logger];
const store = configureStore(
  { reducer: rootReducer },
  compose(applyMiddleware(...middlewares))
);

store.subscribe(() => console.log(store.getState()));

export default store;
