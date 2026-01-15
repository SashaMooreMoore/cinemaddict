import { createElement } from '../render.js';

const createFooterFilmsStatisticsTemplate = () => '<p>130 291 movies inside</p>';

export default class FooterFilmsStatisticsView {
  #element = null;

  get template() {
    return createFooterFilmsStatisticsTemplate();
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
