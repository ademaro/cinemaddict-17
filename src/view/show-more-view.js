import { createElement } from '../render.js';

const ShowMoreTemplate = () => (`
  <button class="films-list__show-more">Show more</button>
`);

export default class ShowMoreView {
  getTemplate() {
    return ShowMoreTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
