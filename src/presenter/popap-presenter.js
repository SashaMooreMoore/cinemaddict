import { render, RenderPosition } from '../render';
import FilmDetailsSection from '../view/film-details-section';
import FilmDetailsForm from '../view/film-details-form';
import FilmDetailsTopContainer from '../view/film-details-top-container';
import FilmDetailsBottomContainer from '../view/film-details-bottom-container';
import FilmDetailsCloseBtn from '../view/film-details-close-btn';
import FilmDetailsInfoWrap from '../view/film-details-info-wrap';
import FilmDetailsPosterImg from '../view/film-details-poster';
import FilmDetailsInfo from '../view/film-details-info';
import FilmDetailsControlsSection from '../view/film-details-controls-section';


export default class PopapPresenter {
  filmDetailsSection = new FilmDetailsSection();
  filmDetailsForm = new FilmDetailsForm();
  filmDetailsTopContainer = new FilmDetailsTopContainer();
  filmDetailsBottomContainer = new FilmDetailsBottomContainer();
  filmDetailsCloseBtn = new FilmDetailsCloseBtn();
  filmDetailsInfoWrap = new FilmDetailsInfoWrap();
  filmDetailsPosterImg = new FilmDetailsPosterImg();
  filmDetailsInfo = new FilmDetailsInfo();
  filmDetailsControlsSection = new FilmDetailsControlsSection();

  init = (popapContainer) => {
    this.popapContainer = popapContainer;
    render(this.filmDetailsSection, popapContainer, RenderPosition.AFTEREND);
    render(this.filmDetailsForm, this.filmDetailsSection.getElement());
    render(this.filmDetailsTopContainer, this.filmDetailsForm.getElement());
    render(this.filmDetailsBottomContainer, this.filmDetailsForm.getElement());
    render(this.filmDetailsCloseBtn, this.filmDetailsTopContainer.getElement());
    render(this.filmDetailsInfoWrap, this.filmDetailsTopContainer.getElement());
    render(this.filmDetailsPosterImg, this.filmDetailsInfoWrap.getElement());
    render(this.filmDetailsInfo, this.filmDetailsInfoWrap.getElement());
    render(this.filmDetailsControlsSection, this.filmDetailsInfoWrap.getElement());

  };
}
