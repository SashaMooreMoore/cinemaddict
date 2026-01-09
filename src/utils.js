import dayjs from 'dayjs';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getUniqueInteger = (arrayID) => {
  const errorMessage = 'Не удалось сгенерировать уникальный id';
  const MAX_ATTEMPTS = 1000;
  const MAX_ID = 1000;

  for (let i = 0; i < MAX_ATTEMPTS; i++){
    const id = getRandomInteger(0, MAX_ID);
    if(!arrayID.has(id)){
      arrayID.add(id);
      return id;
    }
  }
  throw new Error(errorMessage);
};

const generateRating = () =>  Number((Math.random() * 9 + 1).toFixed(1)); // от 1.0 до 10.0

const humanizeMovieDueDate = (dueDate) => dayjs(dueDate).format('YYYY');

const movieDateForPopap = (dueDate) => dayjs(dueDate).format('DD MMMM YYYY');

const convertRunTime = (minutes) => {
  const parts = [];
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0) parts.push(`${hours}h`);
  if (mins > 0) parts.push(`${mins}m`);

  return parts.join(' ') || '0m';
};

const checkDescLength = (str) => str.length > 140 ? str.slice(0, 139) + '\u2026' : str;


export {
  getRandomInteger,
  getUniqueInteger,
  generateRating,
  humanizeMovieDueDate,
  movieDateForPopap,
  convertRunTime,
  checkDescLength
};
