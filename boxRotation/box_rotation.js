const box = document.getElementById("box");
box.addEventListener("mouseover", () => {
  times++;
  if (times % 2 !== 0) {
    box.style.transform = "rotate(180deg)";
  } else {
    box.style.transform = "rotate(0deg)";
  }
});
var times = 0;
