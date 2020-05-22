import { TEST } from './actionTypes';
import { apiActionCreator } from '../../utils/actionCreator';

export function getTest() {
  return apiActionCreator({
    type: TEST,
    endpoint: `https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=6cd33f76e223beefab317e542a910250`,
  });
}
