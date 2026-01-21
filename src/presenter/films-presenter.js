import { render } from '../render';
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

export default class FilmsPresenter {
  #loadingComponent = new LoadingView();
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

  init = (filmsContainer, filmModel) => {

    this.#filmsContainer = filmsContainer;
    this.#filmModel = filmModel;
    this.#boardMovies = [...this.#filmModel.movies];
    this.#sortedMoviesByRating = [...this.#boardMovies].sort((a,b) => b['film_info']['total_rating'] - a['film_info']['total_rating']);
    this.#sortedMoviesByComments = [...this.#boardMovies].sort((a,b) => b['comments'].length - a['comments'].length);

    render(new FiltersView(), this.#filmsContainer);
    render(this.#filmsContainerComponent, this.#filmsContainer);
    render(this.#filmsList, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('All movies. Upcoming'), this.#filmsList.element);
    render(this.#filmsListDiv, this.#filmsList.element);

    this.#renderMovieCards();

    render(new ShowMoreButtonView(), this.#filmsList.element);

    render(this.#filmsSectionExtraLeft, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('Top rated'), this.#filmsSectionExtraLeft.element);
    render(this.#divFilmsExtraLeft, this.#filmsSectionExtraLeft.element);
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(this.#sortedMoviesByRating[i]), this.#divFilmsExtraLeft.element);
      this.#topRatedHandler(this.#sortedMoviesByRating[i]);
    }

    render(this.#filmsSectionExtraRight, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('Most commented'), this.#filmsSectionExtraRight.element);
    render(this.#divFilmsExtraRight, this.#filmsSectionExtraRight.element);
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(this.#sortedMoviesByComments[i]), this.#divFilmsExtraRight.element);
      this.#mostCommentedHandler(this.#sortedMoviesByComments[i]);
    }

    this.#moreButtonHandler();
  };

  #moreButtonHandler = () => {
    const btn = this.#filmsList.element.querySelector('.films-list__show-more');
    btn.addEventListener('click', this.#renderMovieCards);
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
      // if(this.#boardMovies.length - renderedCardsCount >= 5){
      //   cardsToShowCount = 5;
      // } else {
      //   cardsToShowCount = this.#boardMovies.length - renderedCardsCount;
      // }
    }
    const arrToRender = [...this.#boardMovies].slice(renderedCardsCount, renderedCardsCount + cardsToShowCount);
    arrToRender.forEach((movie) => {
      render(new FilmCardView(movie), this.#filmsListDiv.element);
      const lastChild = [...this.#filmsList.element.querySelectorAll('.film-card__link')].pop();
      lastChild.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.#openPopap(movie);
      });
    });
  };

  #topRatedHandler = (movie) => {
    const lastChild = [...this.#divFilmsExtraLeft.element.querySelectorAll('.film-card__link')].pop();
    lastChild.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.#openPopap(movie);
    });
  };

  #mostCommentedHandler = (movie) => {
    const lastChild = [...this.#divFilmsExtraRight.element.querySelectorAll('.film-card__link')].pop();
    lastChild.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.#openPopap(movie);
    });
  };
}
