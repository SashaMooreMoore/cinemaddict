import FilmCardView from '../view/film-card-view';
import { render, replace } from '../framework/render';

export default class FilmPresenter{
  #container = null;
  #film = null;
  #handleOpenPopap = null;
  #changeData = null;
  #element = null;
  #currentView = null;

  constructor({container, onOpenPopap, changeData}){
    this.#container = container;
    this.#handleOpenPopap = onOpenPopap;
    this.#changeData = changeData;
  }

  init = (film) => {
    this.#film = film;
    const newView = new FilmCardView(film);

    if(this.#currentView){
      replace(newView, this.#currentView);
    } else {
      render(newView, this.#container);
    }

    this.#currentView = newView;

    newView.setCardClickHandler(() => {this.#handleOpenPopap(this.#film);});
    newView.setWhatchlistClickHandler(() => {this.#watchlistBtnClickHandler(this.#film);});
    newView.setWhatchedClickHandler(() => {this.#watchedBtnClickHandler(this.#film);});
    newView.setFavoriteClickHandler(() => {this.#favoriteBtnClickHandler(this.#film);});

  };

  #watchlistBtnClickHandler = () => {
    // this.#changeData({
    //   ...this.#film,
    //   user_details: {
    //     ...this.#film.user_details,
    //     whatchlist: !this.#film.user_details.whatchlist
    //   }
    // });
    const updatedFilm = {
      ...this.#film,
      user_details: {
        ...this.#film.user_details,
        watchlist: !this.#film.user_details.watchlist
      }
    };
    this.#changeData(updatedFilm);
  };

  #watchedBtnClickHandler = () => {
    const updatedFilm = {
      ...this.#film,
      user_details: {
        ...this.#film.user_details,
        already_watched: !this.#film.user_details.already_watched
      }
    };
    this.#changeData(updatedFilm);
  };

  #favoriteBtnClickHandler = () => {
    const updatedFilm = {
      ...this.#film,
      user_details: {
        ...this.#film.user_details,
        favorite: !this.#film.user_details.favorite
      }
    };
    this.#changeData(updatedFilm);
  };
}
