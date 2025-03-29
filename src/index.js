import "./style.css";
import knightMoves from "./knightTravails";

const chessboard = document.getElementById("chessboard");

for (let row = 0; row < 8; row++) {
    let tr = document.createElement("tr");
    for (let col = 0; col < 8; col++ ) {
        let td = document.createElement("td");
        td.className = (row + col) % 2 === 0 ? "white" : "black";
        tr.appendChild(td);
    }
    chessboard.appendChild(tr);
}

knightMoves([0, 0], [3, 3], 8);