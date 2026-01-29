import FilmsPresenter from './presenter/films-presenter.js';
import MovieModel from './model/movie-model.js';

const siteMainElement = document.querySelector('.main');

const filmsPresenter = new FilmsPresenter();
const movieModel = new MovieModel();

filmsPresenter.init(siteMainElement, movieModel);
