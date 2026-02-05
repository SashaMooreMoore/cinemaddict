import FilmCardView from '../view/film-card-view';
import { render } from '../framework/render';

export default class FilmPresenter{
  #container = null;
  #film = null;
  #handleOpenPopap = null;

  constructor({container, onOpenPopap}){
    this.#container = container;
    this.#handleOpenPopap = onOpenPopap;
  }

  init = (film) => {
    this.#film = film;
    const cardView = new FilmCardView(film);
    render(cardView, this.#container);
    cardView.setCardClickHandler(() => {this.#handleOpenPopap(this.#film);});
  };
}
