import { createElement } from '../render.js';
import { commentsObjects } from '../mock/comments.js';

const createFilmDetailsCommentsListTemplate = (movie) => {
  const {comments} = movie;

  const commentsHTML = comments.slice(0,4)
    .map((id) => {
      const comment = commentsObjects.find((el) => el.id === id);
      if (!comment) {return '';}

      return `
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-${comment.emotion}">
              </span>
              <div>
                <p class="film-details__comment-text">${comment.comment}</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">${comment.author}</span>
                  <span class="film-details__comment-day">${comment.date}</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>`;
    })
    .join('');
  return commentsHTML;
};

export default class FilmDetailsCommentsList {
  #element = null;
  #movie = null;

  constructor(movie){
    this.#movie = movie;
  }

  get template() {
    return createFilmDetailsCommentsListTemplate(this.#movie);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
