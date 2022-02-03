import { usersTypes } from '../types';

const initialState = {
  usersLoading: false,
  usersErrorMessage: null,
  users: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersTypes.FETCH_USERS_LOADING:
      return { ...state, usersLoading: true }
    case usersTypes.FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, usersLoading: false }
    case usersTypes.FETCH_USERS_FAILURE:
      return { ...state, usersErrorMessage: action.payload, usersLoading: false }
    
    default:
      return state;
  }
}

export { usersReducer }