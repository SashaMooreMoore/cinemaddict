import UserRankView from './view/user-rank.js';
import MenuView from './view/menu.js';
import FilmsPresenter from './presenter/films-presenter.js';
import { render, RenderPosition } from './render.js';
import MovieModel from './model/movie-model.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

const filmsPresenter = new FilmsPresenter();
const movieModel = new MovieModel();

render(new UserRankView(), siteHeaderElement);
render(new MenuView(), siteMainElement, RenderPosition.AFTERBEGIN);

filmsPresenter.init(siteMainElement, movieModel);
