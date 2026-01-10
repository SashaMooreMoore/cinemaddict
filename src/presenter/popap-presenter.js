import { render, RenderPosition } from '../render';
// import FilmDetailsSection from '../view/film-details-section';
// import FilmDetailsForm from '../view/film-details-form';
import FilmDetailsTopContainer from '../view/film-details-top-container';
// import FilmDetailsBottomContainer from '../view/film-details-bottom-container';
// import FilmDetailsCloseBtn from '../view/film-details-close-btn';
// import FilmDetailsInfoWrap from '../view/film-details-info-wrap';
// import FilmDetailsPosterImg from '../view/film-details-poster';
// import FilmDetailsInfo from '../view/film-details-info';
// import FilmDetailsControlsSection from '../view/film-details-controls-section';
// import FilmDetailsCommentsWrap from '../view/film-details-comments-wrap';
// import FilmDetailsCommentsTitle from '../view/film-details-comments-title';
// import FilmDetailsCommentsList from '../view/film-details-comments-list';
// import FilmDetailsNewComment from '../view/film-details-new-comment';
// import PopapView from '../view/popap';
import PopapSectionForm from '../view/popap-section-form';


export default class PopapPresenter {
  // filmDetailsSection = new FilmDetailsSection();
  // filmDetailsForm = new FilmDetailsForm();
  // filmDetailsTopContainer = new FilmDetailsTopContainer();
  // filmDetailsBottomContainer = new FilmDetailsBottomContainer();
  // filmDetailsCloseBtn = new FilmDetailsCloseBtn();
  // filmDetailsInfoWrap = new FilmDetailsInfoWrap();
  // filmDetailsPosterImg = new FilmDetailsPosterImg();
  // filmDetailsInfo = new FilmDetailsInfo();
  // filmDetailsControlsSection = new FilmDetailsControlsSection();
  // filmDetailsCommentsWrap = new FilmDetailsCommentsWrap();
  // filmDetailsCommentsTitle = new FilmDetailsCommentsTitle();
  // filmDetailsCommentsList = new FilmDetailsCommentsList();
  // filmDetailsNewComment = new FilmDetailsNewComment();
  popapSectionForm = new PopapSectionForm();

  init = (popapContainer, filmModel) => {
    this.popapContainer = popapContainer;
    this.filmModel = filmModel;
    this.boardMovies = [...this.filmModel.getMovies()];


    render(this.popapSectionForm, this.popapContainer, RenderPosition.AFTEREND);
    const formElement = this.popapSectionForm.getElement().querySelector('.film-details__inner');
    console.log(formElement);
    render(new FilmDetailsTopContainer(this.boardMovies[0]), formElement, RenderPosition.BEFOREEND);
    // render(this.filmDetailsTopContainer(this.boardMovies[0]), this.popapSectionForm.getElement());

    // render(new PopapView(this.boardMovies[0]), this.popapContainer, RenderPosition.AFTEREND);

    // render(this.filmDetailsSection, popapContainer, RenderPosition.AFTEREND);
    // render(this.filmDetailsForm, this.filmDetailsSection.getElement());
    // render(this.filmDetailsTopContainer, this.filmDetailsForm.getElement());
    // render(this.filmDetailsBottomContainer, this.filmDetailsForm.getElement());
    // render(this.filmDetailsCloseBtn, this.filmDetailsTopContainer.getElement());
    // render(this.filmDetailsInfoWrap, this.filmDetailsTopContainer.getElement());
    // render(this.filmDetailsPosterImg, this.filmDetailsInfoWrap.getElement());
    // render(this.filmDetailsInfo, this.filmDetailsInfoWrap.getElement());
    // render(this.filmDetailsControlsSection, this.filmDetailsTopContainer.getElement());
    // render(this.filmDetailsCommentsWrap, this.filmDetailsBottomContainer.getElement());
    // render(this.filmDetailsCommentsTitle, this.filmDetailsCommentsWrap.getElement());
    // render(this.filmDetailsCommentsList, this.filmDetailsCommentsWrap.getElement());
    // render(this.filmDetailsNewComment, this.filmDetailsCommentsWrap.getElement());
  };
}
