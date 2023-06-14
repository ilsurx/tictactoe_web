import {Board} from "../main.js";
import {Evaluate} from "./SimpleEvaluator.js";

export function MainEvaluation (bot_symbol) {
  let EvaluatedBoard = [8];
  let SimpleBoard = [3];

  //rows
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      SimpleBoard[j] = Board[i][j];
    }
    EvaluatedBoard[i] = Evaluate(SimpleBoard, bot_symbol);
  }

  //columns
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      SimpleBoard[j] = Board[j][i];
    }
    EvaluatedBoard[i + 3] = Evaluate(SimpleBoard, bot_symbol);
  }

  //main diagonal
  for (let i = 0; i < 3; i++) {
    SimpleBoard[i] = Board[i][i];
  }
  EvaluatedBoard[6] = Evaluate(SimpleBoard, bot_symbol);

  //second diagonal
  for (let i = 0; i < 3; i++) {
    SimpleBoard[i] = Board[i][2 - i];
  }
  EvaluatedBoard[7] = Evaluate(SimpleBoard, bot_symbol);

  return EvaluatedBoard;
}
