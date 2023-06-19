import {GameStates, States} from "./logic/States.js";
import {getCursorPosition} from "./interaction/GetCursorPosition.js";
import {DrawBoard} from "./gui/DrawBoard.js";
import {BoardInitialization} from "./logic/BoardInitialization.js";
import {Toggle} from "./gui/Display.js";
import {Reset} from "./logic/Reset.js";


export let Container = {
  gameState: GameStates.NotDefined,
  counter: 0,
  toggle: document.getElementById("toggle"),
  botSymbol: States.Zero,
  text: document.getElementById("text"),
}
export let Board = [];

BoardInitialization();
DrawBoard();
Reset();
getCursorPosition();
Toggle();
