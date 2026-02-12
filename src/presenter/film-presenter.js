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
    // Тот самый колбэк, который получает измененную карточку фильма
    // обновляет общий список фильмов и вызывает отрисовку обновленной карточки
    this.#changeData = changeData;
  }

  init = (film) => {
    //Объект карточки
    this.#film = film;
    //Презентер фильма с данными
    const newView = new FilmCardView(film);

    if(this.#currentView){
      replace(newView, this.#currentView);
    } else {
      render(newView, this.#container);
    }

    this.#currentView = newView;

    newView.setCardClickHandler(() => {this.#handleOpenPopap(this.#film);});
    // При помощи метода установщика передаем в представление колбэк с данными карточки
    // Он берет данные и создает новый объект, в котором меняет определенное свойство на противоположное
    // И передает обновленный объект в changeData, который обновляет общие данные и перерисовываает карточку
    newView.setWhatchlistClickHandler(() => {this.#watchlistBtnClickHandler(this.#film);});
    newView.setWhatchedClickHandler(() => {this.#watchedBtnClickHandler(this.#film);});
    newView.setFavoriteClickHandler(() => {this.#favoriteBtnClickHandler(this.#film);});

  };

  #watchlistBtnClickHandler = () => {
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
