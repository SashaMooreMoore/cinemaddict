import { commentsObjects } from '../mock/comments.js';
import AbstractView from '../framework/view/abstract-view.js';


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

export default class FilmDetailsCommentsList extends AbstractView{
  #movie = null;

  constructor(movie){
    super();
    this.#movie = movie;
  }

  get template() {
    return createFilmDetailsCommentsListTemplate(this.#movie);
  }
}
