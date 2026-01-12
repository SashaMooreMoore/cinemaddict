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

export default class FilmsPresenter {
  loadingComponent = new LoadingView();
  filmsContainerComponent = new Films();
  filmsList = new FilmsList();
  filmsListDiv = new FilmsListDiv();
  filmsSectionExtraLeft = new FilmsListExtra();
  filmsSectionExtraRight = new FilmsListExtra();
  divFilmsExtraLeft = new FilmsListDiv();
  divFilmsExtraRight = new FilmsListDiv();

  init = (filmsContainer, filmModel) => {

    this.filmsContainer = filmsContainer;
    this.filmModel = filmModel;
    this.boardMovies = [...this.filmModel.getMovies()];
    console.log(this.boardMovies);
    this.sortedMoviesByRating = [...this.boardMovies].sort((a,b) => b['film_info']['total_rating'] - a['film_info']['total_rating']);
    this.sortedMoviesByComments = [...this.boardMovies].sort((a,b) => b['comments'].length - a['comments'].length);

    render(new FiltersView(), this.filmsContainer);
    render(this.filmsContainerComponent, this.filmsContainer);
    render(this.filmsList, this.filmsContainerComponent.getElement());
    render(new FilmsListTitle('All movies. Upcoming'), this.filmsList.getElement());
    render(this.filmsListDiv, this.filmsList.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(this.boardMovies[i]), this.filmsListDiv.getElement());
    }

    render(new ShowMoreButtonView(), this.filmsList.getElement());

    render(this.filmsSectionExtraLeft, this.filmsContainerComponent.getElement());
    render(new FilmsListTitle('Top rated'), this.filmsSectionExtraLeft.getElement());
    render(this.divFilmsExtraLeft, this.filmsSectionExtraLeft.getElement());
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(this.sortedMoviesByRating[i]), this.divFilmsExtraLeft.getElement());
    }

    render(this.filmsSectionExtraRight, this.filmsContainerComponent.getElement());
    render(new FilmsListTitle('Most commented'), this.filmsSectionExtraRight.getElement());
    render(this.divFilmsExtraRight, this.filmsSectionExtraRight.getElement());
    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(this.sortedMoviesByComments[i]), this.divFilmsExtraRight.getElement());
    }
  };

}
