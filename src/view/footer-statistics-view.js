import { createElement } from '../render.js';

const createFooterFilmsStatisticsTemplate = () => '<p>130 291 movies inside</p>';

export default class FooterFilmsStatisticsView {
  getTemplate() {
    return createFooterFilmsStatisticsTemplate();
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
