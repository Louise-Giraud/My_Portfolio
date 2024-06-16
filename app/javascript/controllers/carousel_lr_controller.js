import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["onetwo", "threefour", "arrowright", "arrowleft"]

  connect() {
    console.log("hello lr carousel 💜")
  }

  slideright() {
    if (this.onetwoTarget.classList.contains('visible')) {
      this.onetwoTarget.classList.remove('visible');
      this.onetwoTarget.classList.add('hidden');
      this.threefourTarget.classList.remove('hidden')
      this.threefourTarget.classList.add('visible');
      this.arrowleftTarget.style.opacity = "1";
      this.arrowrightTarget.style.opacity = "0"

    } else if (this.threefourTarget.classList.contains('visible')) {
      this.threefourTarget.classList.remove('visible');
      this.threefourTarget.classList.add('hidden')
      this.arrowrightTarget.style.opacity = "0";
    }
  }

  slideleft() {
    if (this.threefourTarget.classList.contains('visible')) {
      this.threefourTarget.classList.remove('visible');
      this.threefourTarget.classList.add('hidden')
      this.onetwoTarget.classList.remove('hidden')
      this.onetwoTarget.classList.add('visible')
      this.arrowleftTarget.style.opacity = "0";
      this.arrowrightTarget.style.opacity = "1";

    } else if (this.onetwoTarget.classList.contains('visible')) {
      this.onetwoTarget.classList.remove('visible')
      this.onetwoTarget.classList.add('hidden');
      this.threefourTarget.classList.remove('hidden')
      this.threefourTarget.classList.add('visible')
      this.arrowrightTarget.style.opacity = "0";
    }
  }
}
