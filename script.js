const container = document.querySelector(".container");
const sketchBox = document.createElement("div");
const menuBar = document.createElement("div");
const gridSizeButton = document.createElement("button");
let gridSize = 8;

//gridSizeButton
gridSizeButton.textContent = "Change grid size";
menuBar.appendChild(gridSizeButton);

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

function useDefaultColour(){
    const gridBox = document.querySelectorAll(".squareDiv");
    gridBox.forEach((box)=>{
        box.addEventListener("mousedown", ()=>{
            box.style.backgroundColor = "rgb(0,0,0)";
        })
    })
}
useDefaultColour();

function getGridSize(){
    gridSizeButton.addEventListener("click", ()=>{
        gridSize = prompt("Enter the value of row (row * row) (Maximum 100)");

        while(gridSize > 100){
            gridSize = prompt("Please enter value less than 100 because of performance issues");
        }

        while(gridSize <= 0){
            gridSize = prompt("Please enter value higher than 0");
        }

        while(gridSize==="" || gridSize===undefined || isNaN(gridSize)){
            gridSize = prompt("Please enter a valid number");
        }

        createGrid(gridSize);
    })
}
getGridSize();