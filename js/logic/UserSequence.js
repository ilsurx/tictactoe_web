import {GetCellNumber} from "../interaction/GetCellNumber.js";
import {Container} from "../main.js";
import {GameStates, States} from "./States.js";
import {UserMove} from "../interaction/UserMove.js";
import {DrawSymbol} from "../gui/DrawSymbol.js";
import {Verify} from "./Verification.js";
import {DrawWin} from "../gui/DrawWin.js";
import {BotMove} from "./BotMove.js";
import {DrawFinalMessage} from "../gui/DrawFinalMessage.js";


export function UserSequence(x, y) {
  let UserMoveState = false;
  let cellNumber = GetCellNumber(x, y);
  let botCellNumber;
  let V = 0;

  if (Container.gameState === GameStates.NotDefined)
    UserMoveState = UserMove(cellNumber, States.Cross);

  if (UserMoveState && Container.gameState === GameStates.NotDefined) {
    DrawSymbol(States.Cross, cellNumber);
    ++Container.counter;

    if (Container.gameState === GameStates.NotDefined)
      V = Verify(States.Zero);

    if (Container.gameState !== GameStates.NotDefined) {
      DrawWin(V);
    }

    if (Container.gameState === GameStates.NotDefined && Container.counter < 9) {
      botCellNumber = BotMove(States.Zero);
      DrawSymbol(States.Zero, botCellNumber);
      ++Container.counter;
    }

    if (Container.gameState === GameStates.NotDefined && Container.counter < 9)
      V = Verify(States.Zero);

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
