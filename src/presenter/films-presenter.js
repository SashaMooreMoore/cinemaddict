import { render } from '../render';
import LoadingView from '../view/loading-view';

export default class FilmsPresenter{
  loadingComponent = new LoadingView();

  init = (filmsContainer) => {
    this.filmsContainer = filmsContainer;

    render(this.loadingComponent, this.filmsContainer);
  };
}
