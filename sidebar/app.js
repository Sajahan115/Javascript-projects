const closeBtn = document.querySelector(".close-btn");
const sideBarToggle = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");

sideBarToggle.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});
