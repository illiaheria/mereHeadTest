import { TEST_REQUEST, TEST_SUCCESS, TEST_FAIL } from './actionTypes';
import { IAction } from '../../models/actionModel';

interface IMainReducer {
  test: string;
  status: string;
}

export const InitialMainReducer: any = {};
// TODO describe all anyies
export const main: (state: any, action: IAction) => any = (
  state: IMainReducer = InitialMainReducer,
  action: IAction,
) => {
  switch (action.type) {
    case TEST_REQUEST:
      return { ...state, status: 'waiting' };
    case TEST_SUCCESS:
      return { ...state, data: action.payload, status: '' };
    case TEST_FAIL:
      return { ...state, error: action.payload, status: 'failed' };
    default:
      return state;
  }
};
