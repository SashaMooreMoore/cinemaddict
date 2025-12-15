import UserRankView from './view/user-rank.js';
import FooterFilmsStatisticsView from './view/footer-statistics-view.js';
// import MenuView from './view/menu.js';
import FilmsPresenter from './presenter/films-presenter.js';
import { render } from './render.js';

const siteHeaderElement = document.querySelector('.header');
const footerStatisticsElement = document.querySelector('.footer__statistics');
const siteMainElement = document.querySelector('.main');
const filmsPresenter = new FilmsPresenter();

render(new UserRankView(), siteHeaderElement);
render(new FooterFilmsStatisticsView(), footerStatisticsElement);
// render(new MenuView(), siteMainElement, RenderPosition.AFTERBEGIN);

filmsPresenter.init(siteMainElement);
