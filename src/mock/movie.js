import {names, comments, dates} from './data.js';
import { getRandomInteger, getUniqueInteger,  } from '../utils.js';
import {commentsObjects} from './comments.js';

const ID = new Set();


const generateString = (array) => {
  const randomIndex = getRandomInteger(0, array.length -1);

  return array[randomIndex];
};

const generateArrayId = (array) => {
  const divisor = getRandomInteger(2,3);
  return array
    .filter((_, index) => index % divisor === 0)
    .map(el => el.id);
};

const generateMovieObject = () => {
  const movieObject = {};

  movieObject['id'] = String(getUniqueInteger(ID));

  movieObject['comments'] = generateArrayId(commentsObjects);

  return movieObject;

};

export{generateString};
