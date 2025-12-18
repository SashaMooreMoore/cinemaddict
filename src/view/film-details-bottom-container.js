import { createElement } from '../render.js';

const createFilmDetailsBottomContainerTemplate = () =>
  '<div class="film-details__top-container"></div>';

export default class FilmDetailsBottomContainer {
  getTemplate() {
    return createFilmDetailsBottomContainerTemplate();
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
