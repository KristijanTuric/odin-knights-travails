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
                clearBtn.click();

                // Place knight
                knightPosition = [row, col];
                td.innerHTML = "♞";
                placeBtnClicked = false;
                td.classList.add("cell-active");
            } else if (selectEndBtnClicked) {

            }
        });

        tr.appendChild(td);
    }
    chessboard.appendChild(tr);
}

placeKnightBtn.addEventListener("click", () => {
    placeBtnClicked = true;
});

knightMoves([0, 0], [3, 3], 8);