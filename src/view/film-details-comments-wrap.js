import { createElement } from '../render.js';

const createFilmDetailsCommentsWrapTemplate = () =>
  '<section class="film-details__comments-wrap"></section>';

export default class FilmDetailsCommentsWrap {
  getTemplate() {
    return createFilmDetailsCommentsWrapTemplate();
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
