import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["arrowright", "arrowleft", "one", "two", "three", "four"]

  connect() {
    console.log("hello sv carousel 🛸")
  }
  // applies to stellarvenues page

  slideright() {
    if (this.oneTarget.classList.contains('visible')) {
      this.oneTarget.classList.remove('visible')
      this.oneTarget.classList.add('hidden')
      this.twoTarget.classList.remove('hidden')
      this.twoTarget.classList.add('visible')
      this.arrowleftTarget.style.opacity = "1";
  } else if (this.twoTarget.classList.contains('visible')) {
      this.twoTarget.classList.remove('visible')
      this.twoTarget.classList.add('hidden')
      this.threeTarget.classList.remove('hidden')
      this.threeTarget.classList.add('visible')
  } else if (this.threeTarget.classList.contains('visible')) {
      this.threeTarget.classList.remove('visible')
      this.threeTarget.classList.add('hidden')
      this.fourTarget.classList.remove('hidden')
      this.fourTarget.classList.add('visible')
      this.arrowrightTarget.style.opacity = "0";
  }
}

  slideleft() {
    if (this.twoTarget.classList.contains('visible')) {
      this.twoTarget.classList.remove('visible')
      this.twoTarget.classList.add('hidden')
      this.oneTarget.classList.remove('hidden')
      this.oneTarget.classList.add('visible')
      this.arrowleftTarget.style.opacity = "0";
  } else if (this.threeTarget.classList.contains('visible')) {
      this.threeTarget.classList.remove('visible')
      this.threeTarget.classList.add('hidden')
      this.twoTarget.classList.remove('hidden')
      this.twoTarget.classList.add('visible')
  } else if (this.fourTarget.classList.contains('visible')) {
      this.fourTarget.classList.remove('visible')
      this.fourTarget.classList.add('hidden')
      this.threeTarget.classList.remove('hidden')
      this.threeTarget.classList.add('visible')
      this.arrowrightTarget.style.opacity = "1";
  }
  }
}
