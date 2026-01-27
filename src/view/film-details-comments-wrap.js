import AbstractView from '../framework/view/abstract-view.js';


const createFilmDetailsCommentsWrapTemplate = (movie) =>{
  const {comments} = movie;

  return(
    `<div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">
        </ul>
      </section>
    </div>`
  );
};
export default class FilmDetailsCommentsWrap extends AbstractView{
  #movie = null;

  constructor(movie){
    super();
    this.#movie = movie;
  }

  get template() {
    return createFilmDetailsCommentsWrapTemplate(this.#movie);
  }
}
