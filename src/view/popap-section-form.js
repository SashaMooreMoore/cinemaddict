import { createElement } from '../render.js';

const createFilmDetailsSectionTemplate = () =>
  `<section class="film-details">
      '<form class="film-details__inner" action="" method="get">  </form>';
  </section>`;

export default class PopapSectionForm {
  getTemplate() {
    return createFilmDetailsSectionTemplate();
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
