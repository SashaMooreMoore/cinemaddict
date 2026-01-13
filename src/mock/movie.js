import {names, dates, titles, alternativeTitles, posters, countries, genres, descriptions} from './data.js';
import { getRandomInteger, getUniqueInteger, generateRating } from '../utils.js';
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
    .map((el) => el.id);
};

const generateMovieObject = () => {
  const movieObject = {};

  movieObject['id'] = String(getUniqueInteger(ID));

  movieObject['comments'] = generateArrayId(commentsObjects);

  movieObject['film_info'] = {
    'title': generateString(titles),
    'alternative_title': generateString(alternativeTitles),
    'total_rating': generateRating(),
    'poster': `images/posters/${generateString(posters)}`,
    'age_rating': getRandomInteger(6, 21),
    'director': generateString(names),
    'writers': Array.from({length: getRandomInteger(1,2)}, () => generateString(names)),
    'actors': Array.from({length: getRandomInteger(1,3)}, () => generateString(names)),
    'release': {
      'date': generateString(dates),
      'release_country': generateString(countries)
    },
    'runtime': getRandomInteger(70, 150),
    'genre': Array.from({length: getRandomInteger(1, 3)}, () => generateString(genres)),
    'description': generateString(descriptions)
  };

  movieObject['user_details'] = {
    'watchlist': Boolean(getRandomInteger(0,1)),
    'already_watched': Boolean(getRandomInteger(0,1)),
    'watching_date': generateString(dates),
    'favorite': Boolean(getRandomInteger(0,1))
  };

  return movieObject;

};

export{generateString, generateMovieObject};
