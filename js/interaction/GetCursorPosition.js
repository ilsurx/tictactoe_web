import {CanvasContainer} from "../gui/DrawBoard.js";
import {UserSequence} from "../logic/UserSequence.js";
import {States} from "../logic/States.js";
import {Container} from "../main.js";


export function CursorPosition (e) {
  let rect = CanvasContainer.canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  UserSequence(x, y, Container.botSymbol);
}

export function getCursorPosition() {
  CanvasContainer.canvas.addEventListener('click', CursorPosition);
}
