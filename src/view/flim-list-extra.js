import AbstractView from '../framework/view/abstract-view.js';


const createFilmsExtraTemplate = () => '<section class="films-list films-list--extra"></section>';

export default class FilmsListExtra extends AbstractView{

  get template() {
    return createFilmsExtraTemplate();
  }
}
