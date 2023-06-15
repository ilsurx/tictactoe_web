import {GameStates} from "../logic/States.js";
import {CanvasContainer} from "./DrawBoard.js";

export function DrawFinalMessage(state) {
  CanvasContainer.board.fillStyle = "LemonChiffon";
  if (state === GameStates.Draw) {
    CanvasContainer.board.fillRect(25, 105, 250, 90);
    CanvasContainer.board.fillStyle = "DarkSalmon";
    CanvasContainer.board.font = "75px Arial";
    CanvasContainer.board.fillText("Draw!", 50, 180);
  }
  if (state === GameStates.BotWin) {
    CanvasContainer.board.fillRect(25, 105, 250, 90);
    CanvasContainer.board.fillStyle = "DarkSalmon";
    CanvasContainer.board.font = "55px Arial";
    CanvasContainer.board.fillText("You lose!", 35, 170);
  }
  if (state === GameStates.UserWin) {
    CanvasContainer.board.fillRect(25, 105, 250, 90);
    CanvasContainer.board.fillStyle = "DarkSalmon";
    CanvasContainer.board.font = "60px Arial";
    CanvasContainer.board.fillText("You win!", 35, 170);
  }
}
