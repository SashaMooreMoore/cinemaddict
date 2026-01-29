import { FilterType } from '../const.js';

const filter = {
  [FilterType.ALL]: (films) => [...films],
  [FilterType.WATCHLIST]: (films) => films.filter((film) => film.user_details.watchlist),
  [FilterType.HISTORY]: (films) => films.filter((film) => film.user_details.already_watched),
  [FilterType.FAVORITES]: (films) => films.filter((film) => film.user_details.favorite)
};

export { filter };
