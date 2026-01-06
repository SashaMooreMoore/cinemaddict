import {generateMovieObject} from '../mock/movie.js';

export default class MovieModel {
  movies = Array.from({length: 4}, generateMovieObject);

  getMovies = () => this.movies;
}

