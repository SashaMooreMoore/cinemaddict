import AbstractView from '../framework/view/abstract-view.js';


const createFilmsListTitleTemplate = (message) => `<h2 class="films-list__title ">${message}</h2>`;

export default class FilmsListTitle extends AbstractView{
  #message = null;

  constructor(message){
    super();
    this.#message = message;
  }

  get template() {
    return createFilmsListTitleTemplate(this.#message);
  }
}
