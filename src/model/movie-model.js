import {generateMovieObject} from '../mock/movie.js';

export default class MovieModel {
  #movies = Array.from({length: 12}, generateMovieObject);

  get movies () {
    return this.#movies;
  }
}
