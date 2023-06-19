import {getCursorPosition} from "../interaction/GetCursorPosition.js";
import {ResetWhenToggled} from "../logic/Reset.js";
import {BotSequence} from "../logic/BotSequence.js";
import {States} from "../logic/States.js";
import {Container} from "../main.js";

export function Toggle() {
  Container.toggle.addEventListener('change', function () {
    if (this.checked) {
      ResetWhenToggled();
      Container.botSymbol = States.Cross;
      Container.text.style.color = "blue";
      Container.text.innerHTML = "ο\t";
      BotSequence();
      getCursorPosition();
    } else {
      ResetWhenToggled();
      Container.botSymbol = States.Zero;
      Container.text.style.color = "cyan";
      Container.text.innerHTML = "x";
      getCursorPosition();
    }
  });
}
