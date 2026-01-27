import AbstractView from '../framework/view/abstract-view.js';


const createFilmsListContainerTemplate = (emptyMessage = 'There are no movies in our database') => `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">${emptyMessage}</h2>
      <div class="films-list__container"></div>

      <!--
        Значение отображаемого текста зависит от выбранного фильтра:
          * All movies – 'There are no movies in our database'
          * Watchlist — 'There are no movies to watch now';
          * History — 'There are no watched movies now';
          * Favorites — 'There are no favorite movies now'.
      -->
    </section>
  </section>`;

export default class FilmsListContainer extends AbstractView{
  #emptyMessage = null;

  constructor(emptyMessage){
    super();
    this.#emptyMessage = emptyMessage;
  }

  get template() {
    return createFilmsListContainerTemplate(this.#emptyMessage);
  }
}
