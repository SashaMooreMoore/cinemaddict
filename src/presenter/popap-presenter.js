import { render, RenderPosition } from '../framework/render';
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

  #popapSectionForm = new PopapSectionForm();
  #filmDetailsTopContainer;
  #popapContainer;
  #movie;

  init = (popapContainer, movie) => {
    this.#popapContainer = popapContainer;
    this.#movie = movie;
    this.#filmDetailsTopContainer = new FilmDetailsTopContainer(this.#movie);

    render(this.#popapSectionForm, this.#popapContainer, RenderPosition.AFTEREND);
    const formElement = this.#popapSectionForm.element.querySelector('.film-details__inner');
    // render(new FilmDetailsTopContainer(this.#movie), formElement, RenderPosition.BEFOREEND);
    render(this.#filmDetailsTopContainer, formElement, RenderPosition.BEFOREEND);

    render(new FilmDetailsCommentsWrap(this.#movie), formElement);
    const commentsList = this.#popapSectionForm.element.querySelector('.film-details__comments-list');
    this.#movie.comments.slice(0,4).forEach((id) => {
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

    document.body.classList.add('hide-overflow');

    this.#filmDetailsTopContainer.setBtnXHandler(() => {
      this.destroy();
    });
    document.body.addEventListener('keydown', this.onEscKeyDown);
  };

  destroy = () => {
    // Удаляем обработчик клика Крестика
    this.#filmDetailsTopContainer.removeBtnXHandler();
    // Удаляем элемент из DOM
    const element = this.#popapSectionForm.element;
    if(element.parentNode) {
      element.parentNode.removeChild(element);
    }
    // Очищаем ссылки
    this.#popapSectionForm.removeElement();

    document.body.classList.remove('hide-overflow');
    document.body.removeEventListener('keydown', this.onEscKeyDown);
  };

  onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'esc'){
      this.destroy();
    }
  };

}
