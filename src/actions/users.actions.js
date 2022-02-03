import { usersTypes } from '../types';
import { usersService } from '../services';

const getUsers = () => {
  const loading = () => ({ type: usersTypes.FETCH_USERS_LOADING });
  const success = (payload) => ({ type: usersTypes.FETCH_USERS_SUCCESS, payload });
  const failure = (payload) => ({ type: usersTypes.FETCH_USERS_FAILURE, payload });

  return async function (dispatch) {
    loading();
    try {
      let users = localStorage.getItem('users');
      if (users && users.length > 0) {
        users = JSON.parse(users);
        dispatch(success(users));
        return;
      }
      const result = await usersService.getUsers();
      dispatch(success(result.data));
      localStorage.setItem('users', JSON.stringify(result.data));
    } catch (err) {
      const errorMessage = err.response.data;
      dispatch(failure(errorMessage))
    }
  }
}

export const usersAction = {
  getUsers
}