import {CanvasContainer} from "../gui/DrawBoard.js";
import {UserSequence} from "../logic/UserSequence.js";

export function GetCursorPosition() {
  let getCursorPosition = (canvas, event) => {
    let rect = CanvasContainer.canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    UserSequence(x, y);
  }
  CanvasContainer.canvas.addEventListener('click', (e) => {
    getCursorPosition(CanvasContainer.canvas, e);
  })
}
