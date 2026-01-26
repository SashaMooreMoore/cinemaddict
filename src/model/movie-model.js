import {generateMovieObject} from '../mock/movie.js';

export default class MovieModel {
  #movies = Array.from({length: 0}, generateMovieObject);

  get movies () {
    return this.#movies;
  }
}
