import { createElement } from '../render.js';

const createFooterFilmsStatisticsTemplate = (movies) => `<p>${movies} movies inside</p>`;

export default class FooterFilmsStatisticsView {
  #element = null;
  #movies = null;

  constructor(movies){
    this.#movies = movies;
  }

  get template() {
    return createFooterFilmsStatisticsTemplate(this.#movies);
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
