import { createElement } from '../render.js';

const createFilmsListDivTemplate = () => ' <div class="films-list__container"></div>';

export default class FilmsListDiv {

  getTemplate() {
    return createFilmsListDivTemplate();
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
