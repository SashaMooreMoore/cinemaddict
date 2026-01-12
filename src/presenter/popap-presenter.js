import { render, RenderPosition } from '../render';
import FilmDetailsTopContainer from '../view/film-details-top-container';
import FilmDetailsCommentsWrap from '../view/film-details-comments-wrap';
import PopapSectionForm from '../view/popap-section-form';
import FilmDetailsNewComment from '../view/film-details-new-comment';
import {commentsObjects} from '../mock/comments';
import { createElement } from '../render';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// Подключаем плагин
dayjs.extend(relativeTime);

export default class PopapPresenter {

  popapSectionForm = new PopapSectionForm();

  init = (popapContainer, filmModel) => {
    this.popapContainer = popapContainer;
    this.filmModel = filmModel;
    this.boardMovies = [...this.filmModel.getMovies()];


    render(this.popapSectionForm, this.popapContainer, RenderPosition.AFTEREND);
    const formElement = this.popapSectionForm.getElement().querySelector('.film-details__inner');
    render(new FilmDetailsTopContainer(this.boardMovies[0]), formElement, RenderPosition.BEFOREEND);
    render(new FilmDetailsCommentsWrap(this.boardMovies[0]), formElement);
    const commentsList = this.popapSectionForm.getElement().querySelector('.film-details__comments-list');
    this.boardMovies[0].comments.slice(0,4).forEach((id) => {
      const comment = commentsObjects.find((c) => c.id === id);
      if (!comment) {return '';}

      const commentElement = createElement(`
        <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-${comment.emotion}">
              </span>
              <div>
                <p class="film-details__comment-text">${comment.comment}</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">${comment.author}</span>
                  <span class="film-details__comment-day">${dayjs(comment.date).fromNow()}</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>`
      );
      commentsList.append(commentElement);
    });
    const commentsWrap = formElement.querySelector('.film-details__comments-wrap');
    render(new FilmDetailsNewComment(), commentsWrap);
  };
}
