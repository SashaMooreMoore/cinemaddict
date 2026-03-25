import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';


const createFilmDetailsNewCommentTemplate = (state) =>
  `<div class="film-details__new-comment">
          <div class="film-details__add-emoji-label">
            ${state.checkedEmotion ? `<img src="./images/emoji/${state.checkedEmotion}.png" width="55" height="55" alt="emoji">` : ''}
          </div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" ${state.checkedEmotion === 'smile' ? 'checked' : ''}>
            <label class="film-details__emoji-label" for="emoji-smile" data-emotion-type="smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping" ${state.checkedEmotion === 'sleeping' ? 'checked' : ''}>
            <label class="film-details__emoji-label" for="emoji-sleeping" data-emotion-type="sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke" ${state.checkedEmotion === 'puke' ? 'checked' : ''}>
            <label class="film-details__emoji-label" for="emoji-puke" data-emotion-type="puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry" ${state.checkedEmotion === 'angry' ? 'checked' : ''}>
            <label class="film-details__emoji-label" for="emoji-angry" data-emotion-type="angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>`;

export default class FilmDetailsNewComment extends AbstractStatefulView{

  constructor(movie){
    super();
    this._state = AbstractStatefulView.parseFilmToState(movie);
    this.#setInnerHandlers();
  }

  _restoreHandlers = () => {
    this.#setInnerHandlers();
    if(this._state.scrollPosition){
      this.element.scrollTop = this._state.scrollPosition;
    }
  };

  get template() {
    return createFilmDetailsNewCommentTemplate(this._state);
  }

  // Обработчик клика по эмоциям
  #emotionClickHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({
      checkedEmotion: evt.currentTarget.dataset.emotionType,
      scrollPosition: this.element.scrollTop
    });
  };

  // Обработчик ввода текста
  #commentInputChangeHandler = (evt) => {
    evt.preventDefault();
    this._setState({comment: evt.target.value});
  };

  #setInnerHandlers = () => {
    this.element
      .querySelectorAll('.film-details__emoji-label')
      .forEach((element) => {element.addEventListener('click', this.#emotionClickHandler);});
    this.element
      .querySelector('.film-details__comment-input')
      .addEventListener('input', this.#commentInputChangeHandler);
  };
}
