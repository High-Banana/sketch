const container = document.querySelector(".container");
const sketchBox = document.createElement("div");
const menuBar = document.createElement("div");
const gridSizeButton = document.createElement("button");
const erasorButton = document.createElement("button");
const randomColourButton = document.createElement("button");
let gridSize = 8;

//randomColourButton
randomColourButton.textContent = "Random colour";
randomColourButton.classList.add("switch");
menuBar.appendChild(randomColourButton);

//erasorButton
erasorButton.textContent = "Erasor";
erasorButton.classList.add("switch");
menuBar.appendChild(erasorButton);

//gridSizeButton
gridSizeButton.textContent = "Change grid size";
menuBar.appendChild(gridSizeButton);

//menuBar
menuBar.classList.add("menu");
container.appendChild(menuBar);

//sketchBox
sketchBox.classList.add("sketchBox");
container.appendChild(sketchBox);

function createGrid(row) {
    sketchBox.style.setProperty("--grid-row", row);
    for (let i = 0; i < (row * row); i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        sketchBox.appendChild(squareDiv);
    }
}
createGrid(gridSize);

function getSquareDiv() {
    const gridBox = document.querySelectorAll(".squareDiv");
    return gridBox;
}

function useDefaultColour() {
    getSquareDiv().forEach((box) => {
        box.addEventListener("mousedown", () => {
            box.style.backgroundColor = "rgb(0,0,0)";
        })
    })
}
useDefaultColour();

function removeGrid(parent) {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

function getGridSize() {
    gridSizeButton.addEventListener("click", () => {
        gridSize = prompt("Enter the value of row (row * row) (Maximum 100)");

        while (gridSize > 100) {
            gridSize = prompt("Please enter value less than 100 because of performance issues");
        }

        while (gridSize <= 0) {
            gridSize = prompt("Please enter value higher than 0");
        }

        while (gridSize === "" || gridSize === undefined || isNaN(gridSize)) {
            gridSize = prompt("Please enter a valid number");
        }

        removeGrid(sketchBox);
        createGrid(gridSize);
        useDefaultColour();
    })
}
getGridSize();

setButtonClass();
function useErasor() {
        function eraseColour() {
            getSquareDiv().forEach((box) => {
                box.addEventListener("mousedown", () => {
                    box.style.backgroundColor = "rgb(255,255,255)";
                })
            })
        }
        erasorButton.classList.contains("active") ? eraseColour() : useDefaultColour();
}


function useRandomColour(){
    function generateColours(){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        const colours = `rgb(${r},${g},${b})`;
        return colours;
    }

    function useColours(){
        getSquareDiv().forEach((box)=>{
            box.addEventListener("mousedown", ()=>{
                box.style.backgroundColor = generateColours();
            })
        })
    }

    randomColourButton.classList.contains("active") ? useColours() : useDefaultColour();
}

function setButtonClass(){
    const buttons = document.querySelectorAll(".switch");

    buttons.forEach((button)=>{
        button.addEventListener("click", (event)=>{
            buttons.forEach((button)=>{
                if(event.target!==button) button.classList.remove("active");
            })
            button.classList.toggle("active");
        })
    })
}

erasorButton.addEventListener("click", useErasor);
randomColourButton.addEventListener("click", useRandomColour);
