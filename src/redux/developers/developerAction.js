import { SET_DEVELOPER } from "./developerType";
import { GET_DEVELOPER } from "./developerType";

export const setDeveloper = (response) => {
  console.log("dev action", response);
  return {
    type: SET_DEVELOPER,
    payload: response,
  };
};

export const getDeveloper = (response) => {
  return {
    type: GET_DEVELOPER,
    payload: response,
  };
};
