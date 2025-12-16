import { createElement } from '../render.js';

const createFilmsListTitleTemplate = (message) => `<h2 class="films-list__title ">${message}</h2>`;

export default class FilmsListTitle {
  constructor(message){
    this.message = message;
  }

  getTemplate() {
    return createFilmsListTitleTemplate(this.message);
  }

  getElement(){
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
