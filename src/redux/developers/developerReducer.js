/* eslint-disable default-case */
import { SET_DEVELOPER } from "./developerType";
import { GET_DEVELOPER } from "./developerType";

const initialState = {
  loading: true,
  error: "",
  data: [],
};

export const developerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVELOPER:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_DEVELOPER:
      return {
        ...state,
        loading: false,
        error: "",
      };

    default:
      return {};
  }
};
