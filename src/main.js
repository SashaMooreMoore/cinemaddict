import UserRankView from './view/user-rank.js';
import FooterFilmsStatisticsView from './view/footer-statistics-view.js';
import MenuView from './view/menu.js';
import FilmsPresenter from './presenter/films-presenter.js';
import { render, RenderPosition } from './render.js';
import PopapPresenter from './presenter/popap-presenter.js';
import MovieModel from './model/movie-model.js';

const siteHeaderElement = document.querySelector('.header');
const footerStatisticsElement = document.querySelector('.footer__statistics');
const siteMainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

const filmsPresenter = new FilmsPresenter();
// const popapPresenter = new PopapPresenter();
const movieModel = new MovieModel();

render(new UserRankView(), siteHeaderElement);
render(new FooterFilmsStatisticsView(), footerStatisticsElement);
render(new MenuView(), siteMainElement, RenderPosition.AFTERBEGIN);

filmsPresenter.init(siteMainElement, movieModel);
// popapPresenter.init(footerElement);
