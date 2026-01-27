import AbstractView from '../framework/view/abstract-view.js';


const createFilmsListDivTemplate = () => '<div class="films-list__container"></div>';

export default class FilmsListDiv extends AbstractView{

  get template() {
    return createFilmsListDivTemplate();
  }
}
