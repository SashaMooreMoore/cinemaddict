import { createElement } from '../render.js';

const createFilmDetailsCommentsWrapTemplate = (movie) =>{
  const {comments} = movie;

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
  #element = null;
  #movie = null;

  constructor(movie){
    this.#movie = movie;
  }

  get template() {
    return createFilmDetailsCommentsWrapTemplate(this.#movie);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
