import {CanvasContainer, DrawBoard} from "./DrawBoard.js";


export function Clear() {
  CanvasContainer.board.clearRect(300, 300, CanvasContainer.board.width, CanvasContainer.board.height);
  DrawBoard();
}
