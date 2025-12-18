import { createElement } from '../render.js';

const createFilmDetailsInfoWrapTemplate = () =>
  '<div class="film-details__info-wrap"></div>';

export default class FilmDetailsInfoWrap {
  getTemplate() {
    return createFilmDetailsInfoWrapTemplate();
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
