const btnClicked = document.querySelectorAll(".btn");

btnClicked.forEach((btn) => {
  btn.addEventListener("click", () => {
    boldText(btn);
  });
});

function boldText(btn) {
  if (btn.classList.contains("bold-text") && btn.querySelector(".icon-arrow-down").classList.contains("icon-arrow-up")) {
    btn.classList.remove("bold-text");
    btn.querySelector(".icon-arrow-down").classList.remove("icon-arrow-up");
  } else {
    btn.classList.add("bold-text");
    btn.querySelector(".icon-arrow-down").classList.add("icon-arrow-up");
  }
}
