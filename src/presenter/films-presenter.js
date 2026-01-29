// import { render } from '../render';
import { render, RenderPosition } from '../framework/render.js';
import LoadingView from '../view/loading-view';
import FilmCardView from '../view/film-card-view';
import ShowMoreButtonView from '../view/show-more-button';
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


export default class FilmsPresenter {
  #loadingComponent = new LoadingView();
  #filmsContainerComponent = new Films();
  #filmsList = new FilmsList();
  #filmsListDiv = new FilmsListDiv();
  #filmsSectionExtraLeft = new FilmsListExtra();
  #filmsSectionExtraRight = new FilmsListExtra();
  #divFilmsExtraLeft = new FilmsListDiv();
  #divFilmsExtraRight = new FilmsListDiv();
  #showMoreButton = new ShowMoreButtonView();
  // #menuView = new MenuView();

  #filmsContainer = null;
  #filmModel = null;
  #boardMovies = null;
  #sortedMoviesByRating = null;
  #sortedMoviesByComments = null;
  #currentPopapPresenter = null;

  init = (filmsContainer, filmModel) => {

    this.#filmsContainer = filmsContainer;
    this.#filmModel = filmModel;
    this.#boardMovies = [...this.#filmModel.movies];
    this.#sortedMoviesByRating = [...this.#boardMovies].sort((a,b) => b['film_info']['total_rating'] - a['film_info']['total_rating']);
    this.#sortedMoviesByComments = [...this.#boardMovies].sort((a,b) => b['comments'].length - a['comments'].length);
    console.log(this.#boardMovies);

    this.#renderBoardCards();
  };

  #openPopap = (movie) => {
    if(this.#currentPopapPresenter){
      this.#currentPopapPresenter.destroy();
    }

    this.#currentPopapPresenter = new PopapPresenter();
    this.#currentPopapPresenter.init(document.body, movie);
  };

  #renderMovieCards = () => {
    let cardsToShowCount;
    const renderedCardsCount = this.#filmsListDiv.element.querySelectorAll('.film-card__link').length;
    if (this.#boardMovies){
      cardsToShowCount = this.#boardMovies.length - renderedCardsCount >= 5 ?
        5 : this.#boardMovies.length - renderedCardsCount;
    }
    const arrToRender = [...this.#boardMovies].slice(renderedCardsCount, renderedCardsCount + cardsToShowCount);
    arrToRender.forEach((movie) => {
      const cardView = new FilmCardView(movie);
      render(cardView, this.#filmsListDiv.element);
      // Навешиваем обработчик по клику на карточку для открытия попапа
      // При помощи встроего в представление метода
      cardView.setCardClickHandler(() => {this.#openPopap(movie);});
    });
    this.#hideButton(this.#boardMovies.length);
  };

  #hideButton = (totalMovies) => {
    const renderedCardsCount = this.#filmsListDiv.element.querySelectorAll('.film-card__link').length;

    if (renderedCardsCount === totalMovies) {
      this.#showMoreButton.element.remove();
      this.#showMoreButton.removeElement();
    }
  };

  #renderTopRated = () => {
    render(this.#filmsSectionExtraLeft, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('Top rated'), this.#filmsSectionExtraLeft.element);
    render(this.#divFilmsExtraLeft, this.#filmsSectionExtraLeft.element);
    for (let i = 0; i < 2; i++) {
      const filmCard = new FilmCardView(this.#sortedMoviesByRating[i]);
      render(filmCard, this.#divFilmsExtraLeft.element);
      // Вешаем подписку по клику на карточку фильма на открытие попапа.
      filmCard.setCardClickHandler(() => {this.#openPopap(this.#sortedMoviesByRating[i]);});
    }
  };

  #renderMostCommented = () => {
    render(this.#filmsSectionExtraRight, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('Most commented'), this.#filmsSectionExtraRight.element);
    render(this.#divFilmsExtraRight, this.#filmsSectionExtraRight.element);
    for (let i = 0; i < 2; i++) {
      const filmCard = new FilmCardView(this.#sortedMoviesByComments[i]);
      render(filmCard, this.#divFilmsExtraRight.element);
      // Вешаем подписку по клику на карточку фильма на открытие попапа.
      filmCard.setCardClickHandler(() => {this.#openPopap(this.#sortedMoviesByComments[i]);});
    }
  };

  #renderBoardCards = () => {
    const siteHeaderElement = document.querySelector('.header');
    // const siteMainElement = document.querySelector('.main');
    const footerStatisticsElement = document.querySelector('.footer__statistics');

    render(new UserRankView(), siteHeaderElement);
    render(new MenuView(), this.#filmsContainer, RenderPosition.AFTERBEGIN);
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

    this.#renderMovieCards();

    render(this.#showMoreButton, this.#filmsList.element);
    this.#showMoreButton.setClickHandler(() => {this.#renderMovieCards();});
    this.#renderTopRated();
    this.#renderMostCommented();
  };
}
