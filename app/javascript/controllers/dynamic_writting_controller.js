import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';

export default class extends Controller {
  static values = { hi: String };


  connect() {
    console.log(this.hiValue)
    const headerElement = this.element.querySelector("h1");

    if (this.hasHiValue) {
      this.activateTyped(headerElement, this.hiValue);
    }
  }

  activateTyped(element, text) {
    new Typed(element, {
      strings: [text],
      typeSpeed: 120,
      startDelay: 500,
      showCursor: false,
    });
  }
}
