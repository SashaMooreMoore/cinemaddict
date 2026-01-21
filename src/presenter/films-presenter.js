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
  #renderMovies = null;

  init = (filmsContainer, filmModel) => {

    this.#filmsContainer = filmsContainer;
    this.#filmModel = filmModel;
    this.#boardMovies = [...this.#filmModel.movies];
    this.#sortedMoviesByRating = [...this.#boardMovies].sort((a,b) => b['film_info']['total_rating'] - a['film_info']['total_rating']);
    this.#sortedMoviesByComments = [...this.#boardMovies].sort((a,b) => b['comments'].length - a['comments'].length);
    this.#renderMovies = [
      ...this.#boardMovies.slice(0,5),
      ...this.#sortedMoviesByRating.slice(0,2),
      ...this.#sortedMoviesByComments.slice(0,2)
    ];

    render(new FiltersView(), this.#filmsContainer);
    render(this.#filmsContainerComponent, this.#filmsContainer);
    render(this.#filmsList, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('All movies. Upcoming'), this.#filmsList.element);
    render(this.#filmsListDiv, this.#filmsList.element);

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(this.#boardMovies[i]), this.#filmsListDiv.element);
    }

    render(new ShowMoreButtonView(), this.#filmsList.element);

    render(this.#filmsSectionExtraLeft, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('Top rated'), this.#filmsSectionExtraLeft.element);
    render(this.#divFilmsExtraLeft, this.#filmsSectionExtraLeft.element);
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(this.#sortedMoviesByRating[i]), this.#divFilmsExtraLeft.element);
    }

    render(this.#filmsSectionExtraRight, this.#filmsContainerComponent.element);
    render(new FilmsListTitle('Most commented'), this.#filmsSectionExtraRight.element);
    render(this.#divFilmsExtraRight, this.#filmsSectionExtraRight.element);
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(this.#sortedMoviesByComments[i]), this.#divFilmsExtraRight.element);
    }

    this.#addCardClickHandlers();
  };

  #addCardClickHandlers = () => {
    const cards = this.#filmsContainerComponent.element.querySelectorAll('.film-card__link');
    cards.forEach((cardLink, index) => {
      cardLink.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.#openPopap(this.#renderMovies[index]);
      });
    });
  };

  #openPopap = (movie) => {
    if(this.#currentPopapPresenter){
      this.#currentPopapPresenter.destroy();
    }

    this.#currentPopapPresenter = new PopapPresenter();
    this.#currentPopapPresenter.init(document.body, movie);
  };
}
