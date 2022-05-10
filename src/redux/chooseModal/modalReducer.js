/* eslint-disable default-case */
import { SET_TEAM } from "./modalType";
import { GET_TEAM } from "./modalType";
import { SET_PROJECT } from "./modalType";
import { GET_PROJECT } from "./modalType";

const initialState = {
  loading: true,
  error: "",
  data: [],
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_TEAM:
      return {
        ...state,
        loading: false,
        error: "",
      };

    case SET_PROJECT:
      return {
        ...state,
        loading: false,
        error: "",
      };

    case GET_PROJECT:
      return {
        ...state,
        loading: false,
        error: "",
      };

    default:
      return {};
  }
};
