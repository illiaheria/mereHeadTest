import { CREATE_USER } from './actionTypes';
import { apiActionCreator } from '../../utils/actionCreator';

export function createUserRequest(payload: string) {
  return apiActionCreator({
    type: CREATE_USER,
    endpoint: 'http://77.120.241.80:8911/api/users',
    verb: 'post',
    payload,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
