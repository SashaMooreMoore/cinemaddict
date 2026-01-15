import { createElement } from '../render.js';
import { humanizeMovieDueDate, convertRunTime, checkDescLength } from '../utils.js';


const createFilmCardTemplate = (movie) =>{
  const {film_info: filmInfo, comments} = movie;

  const date = filmInfo['release'].date !== null
    ? humanizeMovieDueDate(filmInfo['release'].date)
    : '';

  const runTime = convertRunTime(filmInfo.runtime);

  const checkedDesc = checkDescLength(filmInfo.description);

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
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>`);
};

export default class FilmCardView {
  #element = null;
  #movie = null;

  constructor(movie){
    this.#movie = movie;
  }

  get template() {
    return createFilmCardTemplate(this.#movie);
  }

  get element(){
    if(!this.#element){
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement(){
    this.#element = null;
  }
}
