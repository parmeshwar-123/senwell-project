import { SET_TEAM } from "./modalType";
import { GET_TEAM } from "./modalType";
import { SET_PROJECT } from "./modalType";
import { GET_PROJECT } from "./modalType";

export const setTeam = (response) => {
  console.log("action", response);
  return {
    type: SET_TEAM,
    payload: response,
  };
};

export const getTeam = (response) => {
  return {
    type: GET_TEAM,
    payload: response,
  };
};
export const setProject = (response) => {
  return {
    type: SET_PROJECT,
    payload: response,
  };
};

export const getProject = (response) => {
  return {
    type: GET_PROJECT,
    payload: response,
  };
};
