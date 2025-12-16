import { createElement } from '../render.js';

const createFilmsExtraTemplate = () => '<section class="films-list films-list--extra"></section>';

export default class FilmsListExtra {

  getTemplate() {
    return createFilmsExtraTemplate();
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
