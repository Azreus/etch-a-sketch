const mainContainer = document.querySelector(".main-container");

let divCellAll, clear, currentEventListener, black, randomRGB;

// Initial grid starts with 16x16 and 'change to black' feature
createGrid(16);
currentEventListener = changeToBlack;
addGridEventListener(currentEventListener);

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    let divRow = document.createElement("div");
    for (let j = 0; j < num; j++) {
      let divCell = document.createElement("div");
      divCell.classList.add("div-cell");
      divRow.appendChild(divCell);
    }
    mainContainer.appendChild(divRow);
  }
  divCellAll = document.querySelectorAll(".div-cell");
}

// Clears the grid and prompts user for new grid size

clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  //divCellAll.forEach(divCell => divCell.style.backgroundColor = "");
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

function removeGrid() {
  let mainContainerChild = mainContainer.lastElementChild;
  while (mainContainerChild) {
    mainContainer.removeChild(mainContainerChild);
    mainContainerChild = mainContainer.lastElementChild;
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
  return Math.floor(Math.random() * 255);
}