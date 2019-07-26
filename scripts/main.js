const projects = document.querySelectorAll(".projects__box");

const showProject = e => {
  const el = e.target;
  if (!e.target.classList.contains("projects__short")) {
    if (!e.target.classList.contains("projects__box--active")) {
      projects.forEach(project => {
        project.classList.remove("projects__box--active");
        project
          .querySelector(".projects__view")
          .classList.remove("projects__view--active");
        project
          .querySelector(".projects__title")
          .classList.remove("projects__title--active");
      });
    }
    el.classList.toggle("projects__box--active");
    el.querySelector(".projects__view").classList.toggle(
      "projects__view--active"
    );
    el.querySelector(".projects__title").classList.toggle(
      "projects__title--active"
    );
  }
};

projects.forEach(project => {
  project.addEventListener("click", showProject);
});
