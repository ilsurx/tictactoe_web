import {MainEvaluation} from "./evaluation/MainEvaluator.js";
import {Board} from "../main.js";
import {States} from "./States.js";
import {Get2} from "../interaction/GetCellNumber.js";


export function BotMove (bot_symbol) {
  let EvaluatedBoard = MainEvaluation(bot_symbol);
  let targetIndex = 100;
  let target_priority = 100;
  let cellNumber = 0;
  for (let i = 0; i < 8; i++)
    if (EvaluatedBoard[i] !== 0 && EvaluatedBoard[i] !== 1 && EvaluatedBoard[i] < target_priority) {
      target_priority = EvaluatedBoard[i];
      targetIndex = i;
    }
  //central square
  if (target_priority == 4)
    if (Board[1][1] === States.Empty) {
      Board[1][1] = bot_symbol;
      cellNumber = 5;
    }
  //rows
  if (targetIndex < 3 && target_priority !== 4)
    for (let i = 0; i < 3; i++) {
      if (Board[targetIndex][2] === States.Empty) {
        Board[targetIndex][2] = bot_symbol;
        cellNumber = Get2(targetIndex, 2);
        break;
      }
      if (Board[targetIndex][i] === States.Empty) {
        Board[targetIndex][i] = bot_symbol;
        cellNumber = Get2(targetIndex, i);
        break;
      }
    }
  //columns
  if (targetIndex > 2 && targetIndex < 6 && target_priority !== 4)
    for (let i = 0; i < 3; i++) {
      if (Board[2][targetIndex - 3] === States.Empty) {
        Board[2][targetIndex - 3] = bot_symbol;
        cellNumber = Get2(2, targetIndex - 3);
        break;
      }
      if (Board[i][targetIndex - 3] === States.Empty) {
        Board[i][targetIndex - 3] = bot_symbol;
        cellNumber = Get2(i, targetIndex - 3);
        break;
      }
    }
  //main diagonal
  if (targetIndex === 6 && target_priority !== 4) {
    for (let i = 0; i < 3; i++)
      if (Board[i][i] === States.Empty) {
        Board[i][i] = bot_symbol;
        cellNumber = Get2(i, i);
        break;
      }
  }
  //second diagonal
  if (targetIndex === 7 && target_priority !== 4)
    for (let i = 0; i < 3; i++)
      if (Board[i][2 - i] === States.Empty) {
        Board[i][2 - i] = bot_symbol;
        cellNumber = Get2(i, 2 - i);
        break;
      }
  return cellNumber;
}
