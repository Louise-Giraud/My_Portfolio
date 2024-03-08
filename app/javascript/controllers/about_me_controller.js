import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["black", "colored"]

  connect() {
    console.log("coucou")
  }

  toggle1() {
    this.coloredTarget.style.display = "flex"
    this.blackTarget.style.display = "none"
  }

  toggle2() {
    this.coloredTarget.style.display = "none"
    this.blackTarget.style.display = "flex"
  }
}
