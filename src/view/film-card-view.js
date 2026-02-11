import { humanizeMovieDueDate, convertRunTime, checkDescLength } from '../utils.js';
import AbstractView from '../framework/view/abstract-view.js';


const createFilmCardTemplate = (movie) =>{
  const {film_info: filmInfo, comments, user_details: userDetails} = movie;

  const date = filmInfo['release'].date !== null
    ? humanizeMovieDueDate(filmInfo['release'].date)
    : '';

  const runTime = convertRunTime(filmInfo.runtime);

  const checkedDesc = checkDescLength(filmInfo.description);

  const watchlistClass = userDetails.watchlist ? 'film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active' :
    'film-card__controls-item film-card__controls-item--add-to-watchlist';

  const watchedClass = userDetails.already_watched ? 'film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active' :
    'film-card__controls-item film-card__controls-item--mark-as-watched';

  const favoriteClass = userDetails.favorite ? 'film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active' :
    'film-card__controls-item film-card__controls-item--favorite';


  return(
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${filmInfo.title}</h3>
        <p class="film-card__rating">${filmInfo.total_rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${date}</span>
          <span class="film-card__duration">${runTime}</span>
          <span class="film-card__genre">${filmInfo.genre[0]}</span>
        </p>
        <img src="./${filmInfo.poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${checkedDesc}</p>
        <span class="film-card__comments">${comments.length} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="${watchlistClass}" type="button">Add to watchlist</button>
        <button class="${watchedClass}" type="button">Mark as watched</button>
        <button class="${favoriteClass}" type="button">Mark as favorite</button>
      </div>
    </article>`);
};

export default class FilmCardView extends AbstractView{
  #movie = null;
  #card = null;
  #watchlistBtn = null;
  #watchedBtn = null;
  #favoriteBtn = null;

  constructor(movie){
    super();
    this.#movie = movie;
  }

  get template() {
    return createFilmCardTemplate(this.#movie);
  }

  setCardClickHandler = (callback) => {
    this.#card = this.element.querySelector('.film-card__link');
    if(this._callback.click){
      return;}
    this._callback.click = callback;
    this.#card.addEventListener('click', this.#cardHandler);
  };

  setWhatchlistClickHandler = (callback) => {
    this.#watchlistBtn = this.element.querySelector('.film-card__controls-item--add-to-watchlist');
    if(this._callback.watchlistClick){
      return;}
    this._callback.watchlistClick = callback;
    this.#watchlistBtn.addEventListener('click', this.#watchlistBtnHandler);
  };

  setWhatchedClickHandler = (callback) => {
    this.#watchedBtn = this.element.querySelector('.film-card__controls-item--mark-as-watched');
    if(this._callback.watchedClick){
      return;}
    this._callback.watchedClick = callback;
    this.#watchedBtn.addEventListener('click', this.#watchedBtnHandler);
  };

  setFavoriteClickHandler = (callback) => {
    this.#favoriteBtn = this.element.querySelector('.film-card__controls-item--favorite');
    if(this._callback.favoriteClick){
      return;}
    this._callback.favoriteClick = callback;
    this.#favoriteBtn.addEventListener('click', this.#favoriteBtnHandler);
  };

  #cardHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };

  #watchlistBtnHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchlistClick();
  };

  #watchedBtnHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchedClick();
  };

  #favoriteBtnHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  };
}
