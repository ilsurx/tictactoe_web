import {BoardInitialization} from "./BoardInitialization.js";
import {Clear} from "../gui/Clear.js";
import {Container} from "../main.js";
import {GameStates, States} from "./States.js";
import {CanvasContainer} from "../gui/DrawBoard.js";
import {CursorPosition, getCursorPosition} from "../interaction/GetCursorPosition.js";

export function Reset() {
  let button = document.getElementById("reset");
    button.addEventListener("click", function() {
      CanvasContainer.canvas.removeEventListener('click', CursorPosition);
      BoardInitialization();
      Container.counter = 0;
      Container.gameState = GameStates.NotDefined;
      Container.botSymbol = States.Zero;
      Clear();
      Container.text.style.color = "cyan";
      Container.text.innerHTML = "x";
      Container.toggle.checked = false;
      getCursorPosition();
  });
}

export function ResetWhenToggled() {
  CanvasContainer.canvas.removeEventListener('click', CursorPosition);
  BoardInitialization();
  Container.counter = 0;
  Container.gameState = GameStates.NotDefined;
  Clear();
}
