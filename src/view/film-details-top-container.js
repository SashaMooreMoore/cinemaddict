import { createElement } from '../render.js';
import { movieDateForPopap, convertRunTime } from '../utils.js';


const createFilmDetailsTopContainerTemplate = (movie) => {
  const {id, comments, film_info, user_details} = movie;

  const date = movieDateForPopap(film_info['release']['date']);

  const runTime = convertRunTime(film_info.runtime);

  const genresHTML = film_info.genre
    .map(genre => `<span class="film-details__genre">${genre}</span>`)
    .join('');


  return (
  `
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./${film_info.poster}" alt="">

          <p class="film-details__age">${film_info.age_rating}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${film_info.title}</h3>
              <p class="film-details__title-original">Original: ${film_info.title}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${film_info.total_rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${film_info.director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${film_info.writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${film_info.actors}</td>
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
              <td class="film-details__cell">${film_info.release.release_country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">${genresHTML}</td>
            </tr>
          </table>

          <p class="film-details__film-description">
              ${film_info.description}</p>
        </div>
      </div>

      <section class="film-details__controls">
        <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
        <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
      </section>
    </div>`
  );
};

export default class FilmDetailsTopContainer {
  constructor(movie){
    this.movie = movie;
  }

  getTemplate() {
    return createFilmDetailsTopContainerTemplate(this.movie);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
