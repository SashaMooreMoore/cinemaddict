import { createElement } from '../render.js';

const createFilmDetailsCloseBtnTemplate = () =>
  `<div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>`;

export default class FilmDetailsCloseBtn {
  getTemplate() {
    return createFilmDetailsCloseBtnTemplate();
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
