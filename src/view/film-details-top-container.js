import { movieDateForPopap, convertRunTime } from '../utils.js';
import AbstractView from '../framework/view/abstract-view.js';


const createFilmDetailsTopContainerTemplate = (movie) => {
  const {film_info: filmInfo, user_details: userDetails} = movie;

  const date = movieDateForPopap(filmInfo['release']['date']);

  const runTime = convertRunTime(filmInfo.runtime);

  const genresHTML = filmInfo.genre
    .map((genre) => `<span class="film-details__genre">${genre}</span>`)
    .join('');

  const watchlistClass = userDetails.watchlist ? 'film-details__control-button film-details__control-button--active film-details__control-button--watchlist' :
    'film-details__control-button film-details__control-button--watchlist';

  const watchedClass = userDetails.already_watched ? 'film-details__control-button film-details__control-button--active film-details__control-button--watched' :
    'film-details__control-button film-details__control-button--watched';

  const favoriteClass = userDetails.favorite ? 'film-details__control-button film-details__control-button--active film-details__control-button--favorite' :
    'film-details__control-button film-details__control-button--favorite';


  return (
    `
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./${filmInfo.poster}" alt="">

          <p class="film-details__age">${filmInfo.age_rating}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${filmInfo.title}</h3>
              <p class="film-details__title-original">Original: ${filmInfo.title}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${filmInfo.total_rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${filmInfo.director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${filmInfo.writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${filmInfo.actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${date}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${runTime}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${filmInfo.release.release_country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">${genresHTML}</td>
            </tr>
          </table>

          <p class="film-details__film-description">
              ${filmInfo.description}</p>
        </div>
      </div>

      <section class="film-details__controls">
        <button type="button" class="${watchlistClass}" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="${watchedClass}" id="watched" name="watched">Already watched</button>
        <button type="button" class="${favoriteClass}" id="favorite" name="favorite">Add to favorites</button>
      </section>
    </div>`
  );
};

export default class FilmDetailsTopContainer extends AbstractView{
  #movie = null;
  #closeButton = null;

  constructor(movie){
    super();
    this.#movie = movie;
  }

  get template() {
    return createFilmDetailsTopContainerTemplate(this.#movie);
  }

  setBtnXHandler = (callback) => {
    this.#closeButton = this.element.querySelector('.film-details__close-btn');
    this._callback.click = callback;
    this.#closeButton.addEventListener('click', this.#btnXHandler);
  };

  #btnXHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };

  removeBtnXHandler = () => {
    if(this.#closeButton){
      this.#closeButton.removeEventListener('click', this.#btnXHandler);
      this.#closeButton = null;
    }
  };
}
