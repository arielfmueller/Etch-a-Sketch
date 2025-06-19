// Setting up the UI base elements
const body = document.querySelector("body");

const divMain = document.createElement("div")
divMain.setAttribute("class", "main")
body.appendChild(divMain) 

const divMenu = document.createElement("div");
divMenu.setAttribute("class", "menu");
divMain.appendChild(divMenu);

const title = document.createElement("h1");
title.textContent = "Etch-a-Sketch";
title.setAttribute("class", "title");
divMenu.appendChild(title);

const customizeBtn = document.createElement("button");
customizeBtn.textContent = "Custom Grid";
divMenu.appendChild(customizeBtn);

const colorBtn = document.createElement("button");
colorBtn.textContent = "Color Up!";
divMenu.appendChild(colorBtn);

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
divMenu.appendChild(clearBtn);

const container = document.createElement("div");
container.setAttribute("id", "container")
divMain.appendChild(container)

const footer = document.createElement("footer")
footer.textContent = "Built by mueller"
body.appendChild(footer)

// Setting up the starting grid
let squaresPerLine = 16;
let totalSquares = squaresPerLine ** 2;
setGrid(totalSquares);

// Setting up the Customize Grid button
customizeBtn.addEventListener("click", () => {
  let input = prompt("Enter the number of squares per line:");
  let value = Number(input);
  if (value >= 1 && value <= 100) {
    squaresPerLine = value;
    totalSquares = squaresPerLine ** 2;
    setGrid(totalSquares);
  } else {
    alert("Enter a number between 1 and 100.");
  }
});

// Setting up the Color button
colorBtn.addEventListener("click", () => {
  setGridRgb(totalSquares);
});

// Setting up the Clear button
clearBtn.addEventListener("click", () => {
  setGrid(totalSquares);
});

// Function to set-up the grid
function setGrid(totalSquares) {
  container.innerHTML = ""; // clears the previous grid

  const containerWidth = container.clientWidth;
  const squareSize = containerWidth / squaresPerLine;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.background = "#2196f3";
    });
}}

// Function to set-up the RGB coloring grid
function setGridRgb() {
  const squares = container.querySelectorAll(".square"); // Select all squares in the current grid
  squares.forEach((square) => {
    square.onmouseover = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      square.style.background = `rgb(${r},${g},${b})`;
    };
  });
}

// Function to resize the Squares when the page's width changes
function resizeSquares() {
  const containerWidth = container.clientWidth;
  const squareSize = containerWidth / squaresPerLine;
  const squares = container.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
  });
}

window.addEventListener('resize', resizeSquares);