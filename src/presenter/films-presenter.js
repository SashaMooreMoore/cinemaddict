import { render, RenderPosition } from '../render';
import LoadingView from '../view/loading-view';
import FilmsListContainer from '../view/film-list-container-view';
import FilmCardView from '../view/film-card-view';
import ShowMoreButtonView from '../view/show-more-button';
import FiltersView from '../view/filter-view';
import MenuView from '../view/menu';

export default class FilmsPresenter {
  loadingComponent = new LoadingView();

  init = (filmsContainer) => {
    this.filmsContainer = filmsContainer;

    // render(this.loadingComponent, this.filmsContainer);
    render(new FilmsListContainer, this.filmsContainer);
    render(new FiltersView(), this.filmsContainer, RenderPosition.AFTERBEGIN);
    render(new MenuView(), this.filmsContainer, RenderPosition.AFTERBEGIN);

    const CardsContainer = document.querySelector('.films-list__container');
    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), CardsContainer);
    }

    const filmListSection = document.querySelector('.films-list');
    render(new ShowMoreButtonView(), filmListSection);
  };

}
