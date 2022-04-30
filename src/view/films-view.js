import { createElement } from '../render.js';

const FilmsTemplate = () => (`
  <section class="films"></section>
`);

export default class FilmsView {
  getTemplate() {
    return FilmsTemplate();
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
