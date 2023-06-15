import {GameStates, States} from "./logic/States.js";
import {GetCursorPosition} from "./interaction/GetCursorPosition.js";
import {DrawBoard} from "./gui/DrawBoard.js";
import {BoardInitialization} from "./logic/BoardInitialization.js";

export let Container = {
  gameState: GameStates.NotDefined,
  counter: 0
}
export let Board = [];

BoardInitialization();
DrawBoard();
GetCursorPosition();
