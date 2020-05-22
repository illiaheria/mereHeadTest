import { IAction } from './../models/actionModel';

export const apiActionCreator = (action: IAction): IAction => {
  const httpActionTemp = {
    type: '',
    endpoint: null,
    verb: 'GET',
    payload: null,
    headers: {},
  };
  return Object.assign({}, httpActionTemp, action);
};
