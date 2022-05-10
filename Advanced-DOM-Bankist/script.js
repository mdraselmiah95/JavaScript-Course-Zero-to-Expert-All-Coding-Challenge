"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();


