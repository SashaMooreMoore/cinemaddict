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

const humanizeMovieDueDate = (dueDate) => dayjs(dueDate).format('D MMMM');


export {getRandomInteger, getUniqueInteger, generateRating, humanizeMovieDueDate};
