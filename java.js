// Setting up the UI base elements
const body = document.querySelector("body");

const divMenu = document.createElement("div");
divMenu.setAttribute("class", "menu");
body.appendChild(divMenu);

const title = document.createElement("h1");
title.textContent = "Etch-a-Sketch";
title.setAttribute("class", "title");
divMenu.appendChild(title);

// Setting up the starting grid
const container = document.querySelector("#container");
let squaresPerLine = 16;
let totalSquares = squaresPerLine ** 2;
setGrid(totalSquares);

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
    // square.addEventListener("mouseleave", () => {
    //    square.style.background = "black"
    // });
  }
}

// Setting up the Customize Grid button
const customizeBtn = document.createElement("button");
customizeBtn.textContent = "Custom Grid";
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
divMenu.appendChild(customizeBtn);

// Setting up the Clear button
const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
clearBtn.addEventListener("click", () => {
  setGrid(totalSquares);
});
divMenu.appendChild(clearBtn);

// Setting up the Pride button
const colorBtn = document.createElement("button");
colorBtn.textContent = "Color Up!";
colorBtn.addEventListener("click", () => {
  setGridRgb(totalSquares);
});
divMenu.appendChild(colorBtn);

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
