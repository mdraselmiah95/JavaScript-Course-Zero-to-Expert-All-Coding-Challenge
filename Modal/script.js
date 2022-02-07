"use strict";

const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModel = document.querySelectorAll(".show-modal");

const openModel = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModel = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener("click", openModel);

  btnCloseModal.addEventListener("click", closeModel);
    overlay.addEventListener("click", closeModel);
    
    document.addEventListener("keydown", function (e)){
        console.log(e.key)
    }
}
