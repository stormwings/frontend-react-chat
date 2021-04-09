
import { useDispatch, useSelector } from 'react-redux';
import { urlUser } from '../urls';
import Http from './../../utils/http';
import * as types from '../types';

const fetchUsers = () => (dispatch) => {
  dispatch({ type: types.FETCH_USERS_PENDING });

  Http.instance
    .get(urlUser)
    .then(({ body }) => {
      const users = body;

      dispatch({
        type: types.FETCH_USERS_FULLFILLED,
        payload: { users },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_USERS_REJECTED,
        payload: { error },
      });
    });
};

export const useUsersReducer = () => {
  const { usersReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getUsers = () => {
    dispatch(fetchUsers())
  }

  const usersActions = {
    getUsers,
  };

  return { usersReducer, usersActions };
};