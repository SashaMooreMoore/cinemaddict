import { render, RenderPosition } from '../render';
import FilmDetailsSection from '../view/film-details-section';

export default class PopapPresenter {
  filmDetailsSection = new FilmDetailsSection();

  init = (popapContainer) => {
    this.popapContainer = popapContainer;
    render(this.filmDetailsSection, popapContainer, RenderPosition.AFTEREND);
  };
}
