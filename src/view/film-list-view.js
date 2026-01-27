import AbstractView from '../framework/view/abstract-view.js';


const createFilmsListTemplate = () => '<section class="films-list"></section>';

export default class FilmsList extends AbstractView{

  get template() {
    return createFilmsListTemplate();
  }
}
