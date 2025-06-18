const container = document.querySelector("#container")
let squaresPerLine = 16;
let totalSquares = squaresPerLine ** 2

function setGrid(totalSquares) {
    container.innerHTML = "" // clears the previous grid

    const containerWidth = container.offsetWidth;
    const squareSize = containerWidth/squaresPerLine

    for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div")
    square.setAttribute("class", "square")
    square.style.width = squareSize + "px"
    square.style.height = squareSize + "px"
    container.appendChild(square)
    square.addEventListener("mouseover", () => {
        square.style.background = "gray"})
    // square.addEventListener("mouseleave", () => {
    //    square.style.background = "black"
    // });
}}

setGrid(totalSquares)

const btn = document.createElement("button")
btn.textContent = "Customize"
btn.addEventListener("click", () => {
    let input = prompt("Enter the number of squares per line:")
    squaresPerLine = Number(input)
    totalSquares = squaresPerLine **2
    setGrid(totalSquares)
})

const body = document.querySelector("body")
body.appendChild(btn)
