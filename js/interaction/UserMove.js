import {Board} from "../main.js";
import {States} from "../logic/States.js";

export function UserMove (cellNumber, user_symbol) {
  let state = false;
  let i = Math.ceil(cellNumber / 3) - 1;
  let j;
  if (cellNumber !== 0) {
    if (cellNumber % 3 === 0) {
      j = 2;
    } else {
      j = cellNumber % 3 - 1;
    }
    if (Board[i][j] === States.Empty) {
      Board[i][j] = user_symbol;
      state = true;
    }
  }
  return state;
}
