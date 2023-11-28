const btn = document.querySelector(".btn");
const backDrop = document.querySelector(".container");
const h1Text = document.getElementById("h1-text");

const randomColor = [
  "0D1B1E",
  "7798AB",
  "C3DBC5",
  "E8DCB9",
  "F2CEE6",
  "E5D9F2",
  "A594F9",
  "7371FC",
  "78BC61",
  "C59B76",
  "E9806E",
  "9E90A2",
  "3E2A35",
];

btn.addEventListener("click", () => {
  const generateRandom =
    randomColor[Math.floor(Math.random() * randomColor.length)];

  h1Text.innerHTML = `#${generateRandom}`;
  document.body.style.backgroundColor = `#${generateRandom}`;
});
