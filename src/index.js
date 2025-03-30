import "./style.css";
import knightMoves from "./knightTravails";

const chessboard = document.getElementById("chessboard");

// Buttons
const placeKnightBtn = document.getElementById("place-knight-btn");
const randomKnightBtn = document.getElementById("random-knight-btn");
const selectEndBtn = document.getElementById("select-end-btn");
const travailBtn = document.getElementById("travail-btn");
const clearBtn = document.getElementById("clear-btn");

let knightPosition = null;
let endPosition = null;

let placeBtnClicked = null;
let selectEndBtnClicked = null;

// Draw chessboard
for (let row = 0; row < 8; row++) {
    let tr = document.createElement("tr");
    for (let col = 0; col < 8; col++ ) {
        let td = document.createElement("td");
        td.className = (row + col) % 2 === 0 ? "white" : "black";
        td.id = row + ", " + col;
        td.addEventListener("click", () => {
            if (placeBtnClicked) {
                clearKnightPosition();

                if (endPosition != null) {
                    let lastEndPosition = document.getElementById(`${endPosition[0]}, ${endPosition[1]}`);
                    lastEndPosition.classList.add("cell-end");
                }

                // Place knight
                knightPosition = [row, col];
                td.innerHTML = "♞";
                placeBtnClicked = false;
                td.classList.add("cell-active");
            } else if (selectEndBtnClicked) {
                if (td.innerHTML != "♞") {
                    if (endPosition != null) {
                        let lastEndPosition = document.getElementById(`${endPosition[0]}, ${endPosition[1]}`);
                        lastEndPosition.classList.remove("cell-end");
                    }
    
                    // Place end point
                    td.classList.add("cell-end");
                    endPosition = [row, col];
                    selectEndBtnClicked = false;
                }                
            }
        });

        tr.appendChild(td);
    }
    chessboard.appendChild(tr);
}

function clearKnightPosition() {
    knightPosition = null;
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let cell = document.getElementById(`${row}, ${col}`);

            cell.innerHTML = null;
            cell.classList.remove("cell-active");
            placeBtnClicked = false;
        }
    }
}

placeKnightBtn.addEventListener("click", () => {
    placeBtnClicked = true;
});

randomKnightBtn.addEventListener("click", () => {
    let randomRow = Math.floor(Math.random() * 8);
    let randomCol = Math.floor(Math.random() * 8);

    let randomCell = document.getElementById(`${randomRow}, ${randomCol}`);
    placeBtnClicked = true;
    randomCell.click();
});

selectEndBtn.addEventListener("click", () => {
    selectEndBtnClicked = true;
});

clearBtn.addEventListener("click", () => {
    knightPosition = null;
    endPosition = null;
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let cell = document.getElementById(`${row}, ${col}`);

            cell.innerHTML = null;
            cell.classList.remove("cell-active");
            cell.classList.remove("cell-end");
            placeBtnClicked = false;
            selectEndBtnClicked = false;
        }
    }
});

knightMoves([0, 0], [3, 3], 8);