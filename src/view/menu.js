import AbstractView from '../framework/view/abstract-view.js';
import { capitalize } from '../utils/capitalize.js';


const createMenuTemplate = (movies) => {
  const filtMovies = movies;
  const watchList = filtMovies.find((film) => film.name === 'watchlist');
  const history = filtMovies.find((film) => film.name === 'history');
  const favorites = filtMovies.find((film) => film.name === 'favorites');

  return(
    `<nav class="main-navigation">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">${capitalize(watchList.name)} <span class="main-navigation__item-count">${watchList.count}</span></a>
      <a href="#history" class="main-navigation__item">${capitalize(history.name)} <span class="main-navigation__item-count">${history.count}</span></a>
      <a href="#favorites" class="main-navigation__item">${capitalize(favorites.name)} <span class="main-navigation__item-count">${favorites.count}</span></a>
    </nav>`);};

export default class MenuView extends AbstractView{
  #movies = null;

  constructor(movies){
    super();
    this.#movies = movies;
  }

  get template() {
    return createMenuTemplate(this.#movies);
  }
}
