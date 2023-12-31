const container = document.querySelector(".container");
const sketchBox = document.createElement("div");
const menuBar = document.createElement("div");
const gridSizeButton = document.createElement("button");
const erasorButton = document.createElement("button");
const randomColourButton = document.createElement("button");
const toggleGridButton = document.createElement("button");
const clearGridButton = document.createElement("button");
// const shadingButton = document.createElement("button");
let gridSize = 8;
let setToggleGrid = false;

//shadingButton
// shadingButton.textContent = "Add shading";
// shadingButton.classList.add("switch");
// menuBar.appendChild(shadingButton);

//clearGridButton
clearGridButton.textContent = "Clear grid";
menuBar.appendChild(clearGridButton);

//toggleGridLines
toggleGridButton.textContent = "Toggle grid"
menuBar.appendChild(toggleGridButton);

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
        squareDiv.style.backgroundColor = "rgb(255,255,255)";
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
            box.style.opacity = 1;
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
}

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

function useRandomColour() {
    function generateColours() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        const colours = `rgb(${r},${g},${b})`;
        return colours;
    }

    function useColours() {
        getSquareDiv().forEach((box) => {
            box.addEventListener("mousedown", () => {
                box.style.backgroundColor = generateColours();
                box.style.opacity = 1;
                console.log("coaklsdf");
            })
        })
    }
    randomColourButton.classList.contains("active") ? useColours() : useDefaultColour();
}

function toggleGrid() {
    setToggleGrid = !setToggleGrid;
    getSquareDiv().forEach((button) => {
        button.style.border = setToggleGrid ? "none" : "1px solid black";
    })
}

function clearGrid() {
    getSquareDiv().forEach((box) => {
        box.style.backgroundColor = "rgb(255,255,255)";
        box.style.opacity = 1;
    })
}



// function addShading() {
//     function shadeBox() {
//         getSquareDiv().forEach((box) => {
//             box.addEventListener("mousedown", () => {
//                 box.style.backgroundColor = "rgb(0,0,0,0.5)";
//             })
//         })
//     }
//     shadingButton.classList.contains("active") ? shadeBox() : useDefaultColour();
// }

const buttons = document.querySelectorAll(".switch");
function setButtonClass() {
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            buttons.forEach((button) => {
                if (event.target !== button) button.classList.remove("active");
            })
            button.classList.toggle("active");
        })
    })
}
setButtonClass();

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!button.classList.contains("active")) {
            useDefaultColour();
        }
    })
})

erasorButton.addEventListener("click", useErasor);
randomColourButton.addEventListener("click", useRandomColour);
toggleGridButton.addEventListener("click", toggleGrid);
gridSizeButton.addEventListener("click", getGridSize);
clearGridButton.addEventListener("click", clearGrid);
// shadingButton.addEventListener("click", addShading);