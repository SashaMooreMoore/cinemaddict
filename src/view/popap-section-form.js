import AbstractView from '../framework/view/abstract-view.js';


const createFilmDetailsSectionTemplate = () =>
  `<section class="film-details">
      '<form class="film-details__inner" action="" method="get">  </form>';
  </section>`;

export default class PopapSectionForm extends AbstractView{

  get template() {
    return createFilmDetailsSectionTemplate();
  }
}
