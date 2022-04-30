import ProfileView from './view/profile-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import { render } from './render.js';

const headerElement = document.querySelector('.header');
render(new ProfileView(), headerElement);

const mainElement = document.querySelector('.main');
const filmsPresenter = new FilmsPresenter(mainElement);
filmsPresenter.init();
