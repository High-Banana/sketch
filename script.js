const container = document.querySelector(".container");
const sketchBox = document.createElement("div");
const menuBar = document.createElement("div");
const gridSizeButton = document.createElement("button");

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