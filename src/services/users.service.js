import axios from 'axios';
import { ROOT_URL } from './rootUrl';

const getUsers = () => {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/users?page=2`,
  }).then(res => res)
}

export const usersService = {
  getUsers
}
