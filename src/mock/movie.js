import {names, comments, dates} from './data.js';
import { getRandomInteger, getUhiqueInteger } from '../utils.js';

const ID = new Set();


const generateString = (array) => {
  const randomIndex = getRandomInteger(0, array.length -1);

  return array[randomIndex];
};

export{generateString};
