import { apiMiddleware } from './../utils/actionMiddleware';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { main } from '../pages/main/main.reducer';
import { users } from '../pages/getUsers/getUsers.reducer';
const reducer = combineReducers({
  main,
  users,
});

export type RootState = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(apiMiddleware)),
);
