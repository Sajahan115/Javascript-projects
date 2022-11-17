const modalOverlay = document.querySelector(".modal-overlay");
const openModalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", function () {
  if (!modalOverlay.classList.contains("open-modal")) {
    modalOverlay.classList.add("open-modal");
  }
});

closeBtn.addEventListener("click", function () {
  if (modalOverlay.classList.contains("open-modal")) {
    modalOverlay.classList.remove("open-modal");
  }
});
