import {GetCursorPosition} from "../interaction/GetCursorPosition.js";
import {DrawWin} from "./DrawWin.js";

export let CanvasContainer = {
  canvas: document.getElementById('tictactoe'),
  board: ""
}

export function DrawBoard () {

  let width = 300;
  let margin = 25;
  CanvasContainer.board = CanvasContainer.canvas.getContext('2d');
  CanvasContainer.board.fillStyle = "BlanchedAlmond";
  CanvasContainer.board.fillRect(0, 0, 300, 300);
  CanvasContainer.board.beginPath();
  for (let i = 1; i < 3; i++) {
    //horizontal
    CanvasContainer.board.moveTo(margin, margin + (width - 2 * margin)/3 * i);
    CanvasContainer.board.lineTo(width - margin, margin + (width - 2 * margin)/3 * i);
    //vertical
    CanvasContainer.board.moveTo(margin + (width - 2 * margin)/3 * i, margin);
    CanvasContainer.board.lineTo(margin + (width - 2 * margin)/3 * i, width - margin);
  }
  CanvasContainer.board.lineWidth = 7;
  CanvasContainer.board.strokeStyle = 'Gray';
  CanvasContainer.board.closePath();
  CanvasContainer.board.stroke();
}
