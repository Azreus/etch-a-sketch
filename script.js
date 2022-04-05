const mainContainer = document.querySelector(".main-container");

for (let i = 0; i < 16; i++) {
  let divRow = document.createElement("div");
  for (let j = 0; j < 16; j++) {
    let divCell = document.createElement("div");
    divCell.classList.add("div-cell");
    divRow.appendChild(divCell);
  }
  mainContainer.appendChild(divRow);
}

let divCellAll = document.querySelectorAll(".div-cell");

divCellAll.forEach(divCell => divCell.addEventListener("mouseover", changeColour));

function changeColour(evt) {
  evt.target.style.backgroundColor = "black";
}