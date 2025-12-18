import { createElement } from '../render.js';

const createFilmDetailsCommentsTitlsTemplate = () =>
  '<h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>';

export default class FilmDetailsCommentsTitle {
  getTemplate() {
    return createFilmDetailsCommentsTitlsTemplate();
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
