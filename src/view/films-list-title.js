import { createElement } from '../render.js';

const createFilmsListTitleTemplate = (message) => `<h2 class="films-list__title ">${message}</h2>`;

export default class FilmsListTitle {
  #element = null;
  #message = null;

  constructor(message){
    this.#message = message;
  }

  get template() {
    return createFilmsListTitleTemplate(this.#message);
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
