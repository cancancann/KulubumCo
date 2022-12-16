import { cities } from '../constants/data';

const getCityByCode = (code) => {
  return cities[parseInt(code) - 1];
};

export { getCityByCode };
