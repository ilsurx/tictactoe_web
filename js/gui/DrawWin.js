import {CanvasContainer} from "./DrawBoard.js";


export function DrawWin(i) {
  const size = 83.33;
  const margin = 25;
  const width = 300;

  CanvasContainer.board.beginPath();

  //horizontal
  if (i < 3) {
    CanvasContainer.board.moveTo(margin, margin + size*(i + 0.5));
    CanvasContainer.board.lineTo(width - margin, margin + size*(i + 0.5));
  }
  //vertical
  else if (i < 6) {
    i = i - 3;
    CanvasContainer.board.moveTo(margin + size*(i + 0.5), margin);
    CanvasContainer.board.lineTo(margin + size*(i + 0.5), width - margin );
  }
  //main diagonal
  else if (i === 6) {
    CanvasContainer.board.moveTo(margin, margin);
    CanvasContainer.board.lineTo(width - margin, width - margin );
  }
  //second diagonal
  else if (i === 7) {
    CanvasContainer.board.moveTo(width - margin, margin);
    CanvasContainer.board.lineTo(margin, width - margin);
  }

  CanvasContainer.board.lineWidth = 7;
  CanvasContainer.board.strokeStyle = 'Red';
  CanvasContainer.board.closePath();
  CanvasContainer.board.stroke();
}
