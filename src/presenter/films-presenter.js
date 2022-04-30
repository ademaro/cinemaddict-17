import NavigationView from '../view/navigation-view.js';
import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreView from '../view/show-more-view.js';
import PopupView from '../view/popup-view.js';
import { render } from '../render.js';

const FILMS_COUNT = 5;

export default class FilmsPresenter {
  constructor(mainElement) {
    this.mainElement = mainElement;
  }

  init() {
    render(new NavigationView(), this.mainElement);
    render(new SortView(), this.mainElement);
    render(new FilmsView(), this.mainElement);

    const filmListView = new FilmsListView();
    render(filmListView, this.mainElement);

    for (let i = 0; i < FILMS_COUNT; i++) {
      render(new FilmCardView(), filmListView.getElement().querySelector('.films-list__container'));
    }

    render(new ShowMoreView(), filmListView.getElement());

    render(new PopupView(), this.mainElement);
  }
}
