import {generateMovieObject} from '../mock/movie.js';

export default class MovieModel {
  movies = Array.from({length: 7}, generateMovieObject);

  getMovies = () => this.movies;
}

