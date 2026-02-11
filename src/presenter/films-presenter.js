// import { render } from '../render';
import { render, RenderPosition } from '../framework/render.js';
import { generateFilter } from '../mock/filter.js';
import FiltersView from '../view/filter-view';
import Films from '../view/fllms-view';
import FilmsList from '../view/film-list-view';
import FilmsListTitle from '../view/films-list-title';
import FilmsListDiv from '../view/films-list-container';
import FilmsListExtra from '../view/flim-list-extra';
import PopapPresenter from './popap-presenter';
import FilmListEmptyView from '../view/empty-films';
import FooterFilmsStatisticsView from '../view/footer-statistics-view.js';
import MenuView from '../view/menu.js';
import UserRankView from '../view/user-rank.js';
import { sortMoviesByComments, sortMoviesByRating } from '../utils/sortMovies.js';
import FilmPresenter from './film-presenter.js';
import ShowMoreButtonPresenter from './show-more-button-presenter.js';
import { updateItem } from '../utils/common.js';


export default class FilmsPresenter {
  #filmsContainerComponent = new Films();
  #filmsList = new FilmsList();
  #filmsListDiv = new FilmsListDiv();
  #filmsSectionExtraLeft = new FilmsListExtra();
  #filmsSectionExtraRight = new FilmsListExtra();
  #divFilmsExtraLeft = new FilmsListDiv();
  #divFilmsExtraRight = new FilmsListDiv();

  #filmsContainer = null;
  #filmModel = null;
  #boardMovies = null;
  #sortedMoviesByRating = null;
  #sortedMoviesByComments = null;
  #currentPopapPresenter = null;
  #showMoreButtonPresenter = null;
  #renderedMoviesCount = 0;
  #filmPresenter = new Map();

  init = (filmsContainer, filmModel) => {

    this.#filmsContainer = filmsContainer;
    this.#filmModel = filmModel;
    this.#boardMovies = [...this.#filmModel.movies];
    this.#sortedMoviesByRating = sortMoviesByRating(this.#boardMovies);
    this.#sortedMoviesByComments = sortMoviesByComments(this.#boardMovies);
    this.#showMoreButtonPresenter = new ShowMoreButtonPresenter({
      container: this.#filmsList.element,
      onClick: () => this.#renderMovieCards(this.#filmsListDiv.element)
    });

    this.#renderBoardCards();
    this.#showMoreButtonPresenter.init();
  };

  #filmChangeHandler = (updatedFilm) => {
    this.#boardMovies = updateItem(this.#boardMovies, updatedFilm);
    this.#filmPresenter.get(updatedFilm.id).init(updatedFilm);
  };

  #openPopap = (movie) => {
    if(this.#currentPopapPresenter){
      this.#currentPopapPresenter.destroy();
    }

    this.#currentPopapPresenter = new PopapPresenter();
    this.#currentPopapPresenter.init(document.body, movie);
  };

  #renderMovieCards = (container) => {
    const remaining = this.#boardMovies.length - this.#renderedMoviesCount;
    const cardsToShow = Math.min(5, remaining);

    if(cardsToShow <= 0) {return;}

    const moviesToRender = [...this.#boardMovies].slice(
      this.#renderedMoviesCount,
      this.#renderedMoviesCount + cardsToShow
    );

    moviesToRender.forEach((movie) => {
      this.#renderFilm(movie, container);
    });
    this.#renderedMoviesCount += cardsToShow;
    this.#showMoreButtonPresenter.updateState(
      this.#boardMovies.length,
      this.#renderedMoviesCount
    );
  };

  #renderFilm = (movie, container) => {
    const filmCard = new FilmPresenter({
      container: container,
      onOpenPopap: (film) => this.#openPopap(film),
      changeData: this.#filmChangeHandler
    });
    filmCard.init(movie);
    this.#filmPresenter.set(movie.id, filmCard);
  };

  #renderTopRated = () => {
    render(this.#filmsSectionExtraLeft, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('Top rated'), this.#filmsSectionExtraLeft.element);
    render(this.#divFilmsExtraLeft, this.#filmsSectionExtraLeft.element);
    for (let i = 0; i < 2; i++) {
      const filmCard = new FilmPresenter({
        container: this.#divFilmsExtraLeft.element,
        onOpenPopap: (film) => this.#openPopap(film)
      });
      filmCard.init(this.#sortedMoviesByRating[i]);
    }
  };

  #renderMostCommented = () => {
    render(this.#filmsSectionExtraRight, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('Most commented'), this.#filmsSectionExtraRight.element);
    render(this.#divFilmsExtraRight, this.#filmsSectionExtraRight.element);
    for (let i = 0; i < 2; i++) {
      const filmCard = new FilmPresenter({
        container: this.#divFilmsExtraRight.element,
        onOpenPopap: (film) => this.#openPopap(film)
      });
      filmCard.init(this.#sortedMoviesByComments[i]);
    }
  };

  #renderBoardCards = () => {
    const siteHeaderElement = document.querySelector('.header');
    const footerStatisticsElement = document.querySelector('.footer__statistics');
    const filteredMoviesArray = generateFilter(this.#boardMovies);

    render(new UserRankView(this.#boardMovies), siteHeaderElement);
    render(new MenuView(filteredMoviesArray), this.#filmsContainer, RenderPosition.AFTERBEGIN);
    render(new FooterFilmsStatisticsView(this.#boardMovies.length), footerStatisticsElement);
    if (this.#boardMovies.length === 0) {
      render(new FilmListEmptyView(), this.#filmsContainer);
      return;
    }

    render(new FiltersView(), this.#filmsContainer);
    render(this.#filmsContainerComponent, this.#filmsContainer);
    render(this.#filmsList, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('All movies. Upcoming'), this.#filmsList.element);
    render(this.#filmsListDiv, this.#filmsList.element);

    this.#renderMovieCards(this.#filmsListDiv.element);
    this.#renderTopRated();
    this.#renderMostCommented();
  };
}
