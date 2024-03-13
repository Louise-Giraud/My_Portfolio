import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["skillsTitle", "skillsDetails", "projectsTitle", "projectsDetails"]

  connect() {
    console.log("coucou2")
  }

  toggleskills() {
    if ((this.skillsTitleTarget.innerHTML.includes("<h2>Skills</h2><h2>⌵</h2>")) && (this.skillsDetailsTarget.style.display = "none")) {
      this.skillsTitleTarget.innerHTML = "<h2>Skills</h2>";
      this.skillsDetailsTarget.style.display = "block";
    } else {
      this.skillsTitleTarget.innerHTML = "<h2>Skills</h2><h2>⌵</h2>";
      this.skillsDetailsTarget.style.display = "none"
    }
  }

  toggleprojects(event) {
    if ((this.projectsTitleTarget.innerHTML.includes("<h2>My projects</h2><h2>⌵</h2>")) && (this.projectsDetailsTarget.style.display = "none")) {
      this.projectsTitleTarget.innerHTML = "<h2>My projects</h2>";
      this.projectsDetailsTarget.style.display = "flex";
    } else {
      this.projectsTitleTarget.innerHTML = "<h2>My projects</h2><h2>⌵</h2>";
      this.projectsDetailsTarget.style.display = "none"
    }
  }
}
