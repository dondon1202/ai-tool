function toggle() {
  const hideArea1 = document.querySelector("#hide");
  const hideArea2 = document.querySelector("#hide-2");
  const hideArea3 = document.querySelector("#hide-3");
  const hideArea4 = document.querySelector("#hide-4");
  const bar = document.querySelector(".bar");

  hideArea1.classList.toggle("hide");
  hideArea2.classList.toggle("hide");
  hideArea3.classList.toggle("hide");
  hideArea4.classList.toggle("hide");

  if (bar.getAttribute("name") === "bar") {
    bar.src = "images/x.svg";
    bar.setAttribute("name", "x");
  } else {
    bar.src = "images/Vector.svg";
    bar.setAttribute("name", "bar");
  }
}

function openlist() {
  const p = document.querySelector("#hidden");
  // open.classList.toggle("open");
  p.classList.toggle("hidden");
}
