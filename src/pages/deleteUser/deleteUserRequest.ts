import { DELETE_USER } from './actionTypes';
import { apiActionCreator } from '../../utils/actionCreator';

export function deleteUserRequest(id: number) {
  return apiActionCreator({
    type: DELETE_USER,
    endpoint: `http://77.120.241.80:8911/api/user/${id}`,
    verb: 'DELETE',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
