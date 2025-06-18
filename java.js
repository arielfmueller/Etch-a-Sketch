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
        square.style.background = "white"})
    // square.addEventListener("mouseleave", () => {
    //    square.style.background = "black"
    // });
}}

setGrid(totalSquares)

const btn = document.createElement("button")
btn.textContent = "Customize"
btn.addEventListener("click", () => {
    let input = prompt("Enter the number of squares per line:")
    let value = Number(input)
    if (value >= 1 && value <=100) {
        squaresPerLine = value
        totalSquares = squaresPerLine **2
        setGrid(totalSquares)
    } else {
        alert("Enter a number between 1 and 100.")
    }
})

const body = document.querySelector("body")
body.appendChild(btn)
