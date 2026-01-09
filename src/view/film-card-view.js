import { createElement } from '../render.js';
import { humanizeMovieDueDate, convertRunTime, checkDescLength } from '../utils.js';


const createFilmCardTemplate = (movie) =>{
  const {id, comments, film_info, user_details} = movie;

  const date = film_info['release'].date !== null
    ? humanizeMovieDueDate(film_info['release'].date)
    : '';

  const runTime = convertRunTime(film_info.runtime);

  const checkedDesc = checkDescLength(film_info.description);

  return(
  `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${film_info.title}</h3>
      <p class="film-card__rating">${film_info.total_rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${date}</span>
        <span class="film-card__duration">${runTime}</span>
        <span class="film-card__genre">${film_info.genre[0]}</span>
      </p>
      <img src="./${film_info.poster}" alt="" class="film-card__poster">
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
  constructor(movie){
    this.movie = movie;
  }

  getTemplate() {
    return createFilmCardTemplate(this.movie);
  }

  getElement(){
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
