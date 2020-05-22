import { UPDATE_USER } from './actionTypes';
import { apiActionCreator } from '../../utils/actionCreator';

export function updateUserRequest(payload: string, id: number) {
  return apiActionCreator({
    type: UPDATE_USER,
    endpoint: `http://77.120.241.80:8911/api/user/${id}`,
    verb: 'PUT',
    payload,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
