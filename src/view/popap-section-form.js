import { createElement } from '../render.js';

const createFilmDetailsSectionTemplate = () =>
  `<section class="film-details">
      '<form class="film-details__inner" action="" method="get">  </form>';
  </section>`;

export default class PopapSectionForm {
  #element = null;

  get template() {
    return createFilmDetailsSectionTemplate();
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
