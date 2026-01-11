import { createElement } from '../render.js';

const createFilmDetailsCommentsWrapTemplate = (movie) =>{
  const {id, comments, film_info, user_details} = movie;

  return(
    `<div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">
        </ul>
      </section>
    </div>`
  );
};
export default class FilmDetailsCommentsWrap {
  constructor(movie){
    this.movie = movie;
  }

  getTemplate() {
    return createFilmDetailsCommentsWrapTemplate(this.movie);
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
