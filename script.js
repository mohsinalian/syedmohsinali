"use strict";

const bulb1 = document.querySelector(".bulb-1");
const bulb2 = document.querySelector(".bulb-2");
const bulb3 = document.querySelector(".bulb-3");

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const bulbProjects = document.querySelector(".bulb-projects");
const allProjects = document.querySelectorAll(".project");

const backHomeBtn = document.querySelectorAll(".back-home-btn");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

const projectSection = document.querySelector(".section");
const projectSectionTitle = document.querySelector(".project-section-title");
const loading = document.querySelector(".loading");
const previewImg = document.querySelector(".preview-box-img");

const about = document.querySelector(".footer");
const backToProjecctsBtn = document.querySelector(".back-to-projects-btn");
if (!window.outerWidth < 780) {
  btn1.addEventListener("mouseover", function (e) {
    bulb1.classList.add("bulb-on");
  });
  btn1.addEventListener("mouseout", function (e) {
    bulb1.classList.remove("bulb-on");
  });

  btn2.addEventListener("mouseover", function (e) {
    bulb2.classList.add("bulb-on");
  });
  btn2.addEventListener("mouseout", function (e) {
    bulb2.classList.remove("bulb-on");
  });

  btn3.addEventListener("mouseover", function (e) {
    bulb3.classList.add("bulb-on");
  });
  btn3.addEventListener("mouseout", function (e) {
    bulb3.classList.remove("bulb-on");
  });
}
const scrollToFuntion = function (element) {
  element.scrollIntoView({
    behavior: "smooth",
  });
};

btn1.addEventListener("click", function (e) {
  scrollToFuntion(projectSection);
});
backHomeBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    scrollToFuntion(nav);
  });
});

if (!window.outerWidth < 780) {
  allProjects.forEach((project) => {
    project.addEventListener("mouseover", function (e) {
      bulbProjects.classList.add("bulb-on");
    });
  });
  allProjects.forEach((project) => {
    project.addEventListener("mouseout", function (e) {
      bulbProjects.classList.remove("bulb-on");
    });
  });
}
console.log(previewImg);
allProjects.forEach((project) => {
  project.addEventListener("mouseover", function (e) {
    loading.classList.remove("hidden");

    if (project.classList.contains("mk-store")) {
      previewImg.src = "img/mk store.png";
    } else if (project.classList.contains("tele-pizza")) {
      previewImg.src = "img/tele-pizza.png";
    } else if (project.classList.contains("mossam")) {
      previewImg.src = "img/mossam.png";
    } else if (project.classList.contains("vouge")) {
      previewImg.src = "img/vouge-resume.png";
    } else if (project.classList.contains("know-it")) {
      previewImg.src = "img/know-it.png";
    } else if (project.classList.contains("quran")) {
      previewImg.src = "img/quran-code-of-life.png";
    } else if (project.classList.contains("gup-shup")) {
      previewImg.src = "img/gup shup.png";
    }
    previewImg.addEventListener("load", function () {
      previewImg.classList.remove("hidden");
      loading.classList.add("hidden");
    });
  });
});
allProjects.forEach((project) => {
  project.addEventListener("mouseout", function (e) {
    loading.classList.add("hidden");
    previewImg.classList.add("hidden");
  });
});

btn3.addEventListener("click", function () {
  scrollToFuntion(about);
});

backToProjecctsBtn.addEventListener("click", function () {
  scrollToFuntion(projectSection);
});
