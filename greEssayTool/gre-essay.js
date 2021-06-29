const h3 = document.getElementById("wordCount");

function save() {
  let count = 0;
  const txt = document.getElementById("evaluatedText").value;
  let words = txt.trim(" ").split(" ");
  console.log(words);
  for (let word of words) {
    if (word !== "") count++;
  }
  h3.innerHTML = count;
}
