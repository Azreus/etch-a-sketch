const mainContainer = document.querySelector(".main-container");

createGrid();

let divCellAll = document.querySelectorAll(".div-cell");

addGridEventListener();

function createGrid() {
  for (let i = 0; i < 32; i++) {
    let divRow = document.createElement("div");
    for (let j = 0; j < 32; j++) {
      let divCell = document.createElement("div");
      divCell.classList.add("div-cell");
      divRow.appendChild(divCell);
    }
    mainContainer.appendChild(divRow);
  }
}

// Functionality to change colours on mouseover

function addGridEventListener() {
  divCellAll.forEach(divCell => divCell.addEventListener("mouseover", changeColour));
}

function changeColour(evt) {
  evt.target.style.backgroundColor = "black";
}

// Clears the grid

let clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  divCellAll.forEach(divCell => divCell.style.backgroundColor = "")
});