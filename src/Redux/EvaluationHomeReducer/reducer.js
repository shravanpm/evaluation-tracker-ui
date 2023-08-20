import * as types from "./actionTypes";

const initialState = {
  evaluations: [],
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_EVALUATION_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_EVALUATION_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        evaluations: payload.evaluations,
      };
    }
    case types.GET_EVALUATION_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
