import {generateMovieObject} from '../mock/movie.js';

export default class MovieModel {
  #movies = Array.from({length: 22}, generateMovieObject);

  get movies () {
    return this.#movies;
  }
}
