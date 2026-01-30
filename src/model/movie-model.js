import {generateMovieObject} from '../mock/movie.js';

export default class MovieModel {
  #movies = Array.from({length: 200}, generateMovieObject);

  get movies () {
    return this.#movies;
  }
}
