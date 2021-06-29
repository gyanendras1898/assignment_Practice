const displayNum = document.getElementById("num");
function displayRandomNumber() {
  var sign = Math.random() > 0.5 ? 1 : -1;
  var rand = sign * Math.floor(Math.random() * 21);
  displayNum.innerHTML = rand;
}
