import { UserStatusValue } from '../const';
import { UserStatusTitle } from '../const';

const getUserStatus = (films) => {
  const watchedFilmsCount = films.filter((film) =>
    film['user_details']['already_watched']).length;

  if (
    watchedFilmsCount <= UserStatusValue.NOVICE
  ){
    return UserStatusTitle.NOVICE;
  }

  if (
    watchedFilmsCount <= UserStatusValue.FAN
  ){
    return UserStatusTitle.FAN;
  }

  if (
    watchedFilmsCount >= UserStatusValue.MOVIE_BUFF
  ){
    return UserStatusTitle.MOVIE_BUFF;
  }
  return null;
};

export { getUserStatus };
