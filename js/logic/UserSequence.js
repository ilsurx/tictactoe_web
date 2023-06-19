import {GetCellNumber} from "../interaction/GetCellNumber.js";
import {Container} from "../main.js";
import {GameStates, States} from "./States.js";
import {UserMove} from "../interaction/UserMove.js";
import {DrawSymbol} from "../gui/DrawSymbol.js";
import {Verify} from "./Verification.js";
import {DrawWin} from "../gui/DrawWin.js";
import {BotMove} from "./BotMove.js";
import {DrawFinalMessage} from "../gui/DrawFinalMessage.js";


export function UserSequence(x, y, botSymbol) {
  let userSymbol;

  if (botSymbol === States.Cross)
    userSymbol = States.Zero;
  else userSymbol = States.Cross;

  let UserMoveState = false;
  let cellNumber = GetCellNumber(x, y);
  let botCellNumber;
  let V = 0;

  //user
  if (Container.gameState === GameStates.NotDefined)
    UserMoveState = UserMove(cellNumber, userSymbol);

  if (UserMoveState && Container.gameState === GameStates.NotDefined) {
    DrawSymbol(userSymbol, cellNumber);
    ++Container.counter;

    if (Container.gameState === GameStates.NotDefined)
      V = Verify(botSymbol);

    if (Container.gameState !== GameStates.NotDefined) {
      DrawWin(V);
    }

    //bot
    if (Container.gameState === GameStates.NotDefined && Container.counter < 9) {
      botCellNumber = BotMove(botSymbol);
      DrawSymbol(botSymbol, botCellNumber);
      ++Container.counter;
    }

    if (Container.gameState === GameStates.NotDefined && Container.counter < 9)
      V = Verify(botSymbol);

    if (Container.gameState !== GameStates.NotDefined && Container.counter < 9) {
      DrawWin(V);
    }

    if (Container.counter === 9 && Container.gameState === GameStates.NotDefined) {
      Container.gameState = GameStates.Draw;
      DrawFinalMessage(GameStates.Draw);
    }
    if (Container.gameState !== GameStates.NotDefined && Container.counter < 9) {
      if (Container.gameState === GameStates.BotWin)
        DrawFinalMessage(GameStates.BotWin);
      else DrawFinalMessage(GameStates.UserWin);
    }
  }
}
