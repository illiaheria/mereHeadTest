import {
  GET_USERS_REQUEST,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
} from './actionTypes';
import { IAction } from '../../models/actionModel';

export interface IUser {
  id: number;
  name: string;
  surname: string;
  desc: string;
}

export interface IUsersReducer {
  users: IUser[];
  error: string;
}

export const InitialUserReducer: IUsersReducer = {
  users: [{ id: 0, name: '', surname: '', desc: '' }],
  error: '',
};

export const users: (state: IUsersReducer, action: IAction) => IUsersReducer = (
  state: IUsersReducer = InitialUserReducer,
  action: IAction,
) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state };
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case GET_USERS_FAILED:
      return { ...state, error: 'Something is wrong' };
    default:
      return state;
  }
};
