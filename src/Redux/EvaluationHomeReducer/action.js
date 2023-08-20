import axios from "axios";
import * as types from "./actionTypes";
import { baseUrl } from "../../util";

export const getEvaluationListForInvigilator =
  ({ invigilatorId, page, limit }) =>
  (dispatch) => {
    dispatch({ type: types.GET_EVALUATION_LIST_REQUEST });
    return axios({
      url: `${baseUrl}/evaluation-user-mapping/instructor/${invigilatorId}?page=${page}&limit=${limit}`,
      method: "GET",
    })
      .then((r) => {
        dispatch({
          type: types.GET_EVALUATION_LIST_SUCCESS,
          payload: r.data,
        });
        console.log(r.data);
      })
      .catch((e) => {
        dispatch({
          type: types.GET_EVALUATION_LIST_FAILURE,
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
