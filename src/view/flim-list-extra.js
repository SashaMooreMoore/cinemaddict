import { createElement } from '../render.js';

const createFilmsExtraTemplate = () => '<section class="films-list films-list--extra"></section>';

export default class FilmsListExtra {
  #element = null;

  get template() {
    return createFilmsExtraTemplate();
  }

  get element(){
    if(!this.#element){
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement(){
    this.#element = null;
  }
}
