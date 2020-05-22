import { GET_USERS } from './actionTypes';
import { apiActionCreator } from '../../utils/actionCreator';

export function getUsersRequest() {
  return apiActionCreator({
    type: GET_USERS,
    endpoint: 'http://77.120.241.80:8911/api/users',
  });
}
