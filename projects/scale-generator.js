function generateScale() {
  let newKey = document.querySelector("#new-scale");
  const scales = [
    "C",
    "F",
    "B-flat",
    "E-flat",
    "A-flat",
    "D-flat",
    "G-flat",
    "B",
    "E",
    "A",
    "D",
    "G",
  ];
  const random = Math.floor(Math.random() * scales.length);
  console.log(random, scales[random]);
  newKey.innerHTML = "<h1>" + (random, scales[random]) + "🎶</h1>" + "<br />";
}

let button = document.querySelector("#button");
button.addEventListener("click", generateScale);
