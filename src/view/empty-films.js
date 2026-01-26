import { createElement } from '../render.js';
// import { AbstractView } from '../framework/view/abstract-view.js';

const createEmptyListTemplate = () => `
   <section class="films">
    <section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>
  </section>
`;

export default class FilmListEmptyView {
  #element = null;

  get template() {
    return createEmptyListTemplate();
  }

  get element(){
    if(!this.#element){
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement(){
    this.#element = null;
  }
}
