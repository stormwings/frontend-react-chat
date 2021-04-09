import * as types from "../types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  users: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USERS_PENDING: {
      return {
        ...state,
        loading: true
      };
    }
    case types.FETCH_USERS_FULLFILLED: {
      const { users } = action.payload;

      return {
        ...state,
        loading: false,
        error: null,
        users: [...users],
      };
    }
    case types.FETCH_USERS_REJECTED: {
      const { error } = action.payload;

      return {
        ...state,
        loading: false,
        users: [],
        error: error,
      };
    }
    default:
      return state;
  }
};

export default reducer;