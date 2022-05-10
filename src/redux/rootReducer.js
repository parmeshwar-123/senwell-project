import { combineReducers } from "redux";

import { modalReducer } from "./chooseModal/modalReducer";
import { developerReducer } from "./developers/developerReducer";

const rootReducer = combineReducers({
  modalReducer,
  developerReducer,
});

export default rootReducer;
