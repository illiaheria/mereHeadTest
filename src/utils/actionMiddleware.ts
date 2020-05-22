import { Dispatch } from 'redux';
import { IAction } from '../models/actionModel';

export const apiMiddleware = (store: any) => (next: Dispatch) => (
  action: IAction,
) => {
  if (action.endpoint) {
    const fetchOption = {
      method: action.verb,
      headers: action.headers,
      body: action.payload,
    };
    next({
      type: action.type + '_REQUEST',
    });

    if (action.endpoint) {
      fetch(action.endpoint, fetchOption)
        .then((res: any) => res.json())
        .then((data: any) =>
          next({
            type: action.type + '_SUCCESS',
            payload: data,
          }),
        )
        .catch((error: any) =>
          next({
            type: action.type + '_FAIL',
            payload: error.message,
          }),
        );
    }
  } else {
    return next(action);
  }
};
