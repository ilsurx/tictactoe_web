import {GameStates, States} from "./States.js";
import {Board, Container} from "../main.js";
import {MainEvaluation} from "./evaluation/MainEvaluator.js";

export function Verify (bot_symbol) {
  let state = States.Empty;
  let EvaluatedBoard = MainEvaluation(bot_symbol);
  let m = 100;
  for (let i = 0; i < 8; i++) {
    let equals = (bot_symbol === States.Cross);
    if (EvaluatedBoard[i] === 0) {
      Container.gameState = GameStates.UserWin;
      if (equals)
        state = States.ZeroCrossed;
      else
        state = States.CrossCrossed;
      m = i;
    }
    if (EvaluatedBoard[i] === 1) {
      Container.gameState = GameStates.BotWin
      if (equals)
        state = States.CrossCrossed;
      else
        state = States.ZeroCrossed;
      m = i;
    }
  }
//rows
  if (m < 3)
    for (let i = 0; i < 3; i++)
      Board[m][i] = state;
//columns
  if (m > 2 && m < 6)
    for (let i = 0; i < 3; i++)
      Board[i][m - 3] = state;
//main diagonal
  if (m === 6)
    for (let i = 0; i < 3; i++)
      Board[i][i] = state;
//second diagonal
  if (m === 7)
    for (let i = 0; i < 3; i++)
      Board[i][2 - i] = state;

  return m;
}
