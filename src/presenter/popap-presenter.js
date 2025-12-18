import { render, RenderPosition } from '../render';
import FilmDetailsSection from '../view/film-details-section';
import FilmDetailsForm from '../view/film-details-form';
import FilmDetailsTopContainer from '../view/film-details-top-container';
import FilmDetailsBottomContainer from '../view/film-details-bottom-container';


export default class PopapPresenter {
  filmDetailsSection = new FilmDetailsSection();
  filmDetailsForm = new FilmDetailsForm();
  filmDetailsTopContainer = new FilmDetailsTopContainer();
  filmDetailsBottomContainer = new FilmDetailsBottomContainer();

  init = (popapContainer) => {
    this.popapContainer = popapContainer;
    render(this.filmDetailsSection, popapContainer, RenderPosition.AFTEREND);
    render(this.filmDetailsForm, this.filmDetailsSection.getElement());
    render(this.filmDetailsTopContainer, this.filmDetailsForm.getElement());
    render(this.filmDetailsBottomContainer, this.filmDetailsForm.getElement());
  };
}
