import axios from "axios";
import * as types from "./actionTypes";
import { baseUrl } from "../../util";

export const loginRequest = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios({
    url: `${baseUrl}/user/login`,
    method: "POST",
    data: payload,
  })
    .then((r) => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: r.data,
      });
      console.log(r.data);
    })
    .catch((e) => {
      dispatch({
        type: types.LOGIN_FAILURE,
      });
      return false;
    });
};

export const createUser = (payload) => (dispatch) => {
  return axios({
    url: `${baseUrl}/user/register`,
    method: "POST",
    data: payload,
  })
    .then((r) => {
      console.log(r.data);
    })
    .catch((e) => {
      return false;
    });
};
