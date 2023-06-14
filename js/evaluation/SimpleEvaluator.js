
import {States} from "../States.js";
import {Board} from "../main.js";

export function Evaluate(SimpleBoard, bot_symbol) {
  let user_symbol;
  let counter_user = 0;
  let counter_bot = 0;
  let counter_empty = 0;
  let value;
  if (bot_symbol === States.Cross)
    user_symbol = States.Zero;
  else
    user_symbol = States.Cross;
  for (let i = 0; i < 3; i++) {
    if (SimpleBoard[i] === user_symbol) {
      counter_user++;
    }
    if (SimpleBoard[i] === bot_symbol) {
      counter_bot++;
    }
    if (SimpleBoard[i] === States.Empty) {
      counter_empty++;
    }
  }
  //user win
  if (counter_user === 3)
    value = 0;
  //bot win
  else if (counter_bot === 3)
    value = 1;
  //fast bot win
  else if (counter_bot === 2 && counter_empty === 1)
    value = 2;
  //prevent user win
  else if (counter_user === 2 && counter_empty === 1)
    value = 3;
  //occupy central square
  else if (Board[1][1] === States.Empty)
    value = 4;
  //empty row/column/diagonal
  else if (counter_empty === 3)
    value = 5;
  //has only 1 user move
  else if (counter_bot === 1 && counter_empty === 2)
    value = 6;
  //occupied, unable to make move
  else if (counter_empty === 0)
    value = 10;
  //other not evaluated situations
  else
    value = 7;
  return value;
}
