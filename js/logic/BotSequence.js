import {Container} from "../main.js";
import {GameStates, States} from "./States.js";
import {DrawSymbol} from "../gui/DrawSymbol.js";
import {BotMove} from "./BotMove.js";


export function BotSequence() {
  let botCellNumber;
  //bot
  if (Container.gameState === GameStates.NotDefined && Container.counter < 9) {
    botCellNumber = BotMove(States.Cross);
    DrawSymbol(States.Cross, botCellNumber);
    ++Container.counter;
  }
}
