const gridContainer = document.querySelector(".grid-container");

let divCellAll, clear, currentEventListener, black, randomRGB;

// Initial grid starts with 16x16 and 'change to black' feature
createGrid(16);
// Tracks which eventListener is in effect for the mouseover function
currentEventListener = changeToBlack;
addGridEventListener(currentEventListener);

// Creates rows of divs first, then populates the rows with divs
function createGrid(num) {
  for (let i = 0; i < num; i++) {
    let divRow = document.createElement("div");
    for (let j = 0; j < num; j++) {
      let divCell = document.createElement("div");
      divCell.classList.add("div-cell");
      divRow.appendChild(divCell);
    }
    gridContainer.appendChild(divRow);
  }
  divCellAll = document.querySelectorAll(".div-cell");
}

// Clears the grid and prompts user for new grid size

clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  removeGrid();
  let newGridNumber = prompt("Please enter a number for the size of the new grid.");
  if (isNaN(newGridNumber) || newGridNumber === null || newGridNumber === "") {
    alert("Not a valid number. Generating 16x16 grid.");
    createGrid(16);
  } else if (newGridNumber > 100) {
    alert("Max is 100. Generating 100x100 grid.");
    createGrid(100);
  } else {
    alert(`Generating ${newGridNumber}x${newGridNumber} grid.`);
    createGrid(newGridNumber);
  }
  addGridEventListener(currentEventListener);
});

// Removes all div cells from the grid, starting from the last div cell

function removeGrid() {
  let gridContainerChild = gridContainer.lastElementChild;
  while (gridContainerChild) {
    gridContainer.removeChild(gridContainerChild);
    gridContainerChild = gridContainer.lastElementChild;
  }
}

// Functionality to change colours on mouseover

function addGridEventListener(current) {
  divCellAll.forEach(divCell => divCell.addEventListener("mouseover", current));
}

// Change to black feature

black = document.querySelector(".black");
black.addEventListener("click", () => {
  divCellAll.forEach(divCell => divCell.removeEventListener("mouseover", currentEventListener));
  currentEventListener = changeToBlack;
  addGridEventListener(currentEventListener);
});


function changeToBlack(evt) {
  evt.target.style.backgroundColor = "black";
}

// Change to random RGB value feature

randomRGB = document.querySelector(".random-rgb");

randomRGB.addEventListener("click", () => {
  divCellAll.forEach(divCell => divCell.removeEventListener("mouseover", currentEventListener));
  currentEventListener = changeToRandomRGB;
  addGridEventListener(currentEventListener);
});

function changeToRandomRGB(evt) {
  evt.target.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
}

// Helper functions

function random() {
  return Math.floor(Math.random() * 256);
}