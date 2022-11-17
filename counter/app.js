// set initial and then count
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// select value and buttons

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (!count) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
