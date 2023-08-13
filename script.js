const container = document.querySelector(".container");
const sketchBox = document.createElement("div");
const menuBar = document.createElement("div");

//menuBar
menuBar.classList.add("menu");
container.appendChild(menuBar);

//sketchBox
sketchBox.classList.add("sketchBox");
container.appendChild(sketchBox);

function createGrid() {
    for (let i = 0; i < (16 * 16); i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        sketchBox.appendChild(squareDiv);
    }
}

createGrid();