import { ADD_DEATIL, REMOVE_DETAIL, GET_DETAIL, UPDATE_DETAIL } from "./types";
import { Details } from "../constants/types";

export const addDetails = (detail: Details) => (dispatch: any) => {
  dispatch({
    type: ADD_DEATIL,
    payload: detail,
  });
};

export const removeDetailsById = (id: string) => (dispatch: any) => {
  dispatch({
    type: REMOVE_DETAIL,
    payload: { id },
  });
};

export const getDetailsById = (id: string) => (dispatch: any) => {
  console.log(dispatch);
  dispatch({
    type: GET_DETAIL,
    payload: { id },
  });
};

export const updateDetailsById = (detail: Details) => (dispatch: any) => {
  dispatch({
    type: UPDATE_DETAIL,
    payload: detail,
  });
};
