import userRankView from './view/user-rank.js';
import { render } from './render.js';

const siteHeaderElement = document.querySelector('.header');

render(new userRankView(), siteHeaderElement);
