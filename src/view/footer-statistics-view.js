import AbstractView from '../framework/view/abstract-view.js';


const createFooterFilmsStatisticsTemplate = (movies) => `<p>${movies} movies inside</p>`;

export default class FooterFilmsStatisticsView extends AbstractView{
  #movies = null;

  constructor(movies){
    super();
    this.#movies = movies;
  }

  get template() {
    return createFooterFilmsStatisticsTemplate(this.#movies);
  }
}
