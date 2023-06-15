import {States} from "../logic/States.js";
import {CanvasContainer} from "./DrawBoard.js";

export function DrawSymbol (state, cellNumber) {
  const size = 83.33;
  const margin = 25;
  let symbol;

  let l = Math.ceil(cellNumber / 3) - 1;
  let j;
  CanvasContainer.board.font = "85px Arial";
  if (state === States.Zero) {
    symbol = "O";
    CanvasContainer.board.fillStyle = "blue";
  } else if (state === States.Cross) {
    symbol = "X";
    CanvasContainer.board.fillStyle = "cyan";
  } else {
    symbol = "E";
    CanvasContainer.board.fillStyle = "red";
  }
  if (cellNumber % 3 === 0) {
    j = 2;
  } else {
    j = cellNumber % 3 - 1;
  }
  if (cellNumber !== 0)
    CanvasContainer.board.fillText(symbol, margin + j * size + 10, margin + l * size + 70);
}
