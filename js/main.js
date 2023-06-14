
import {GameStates, States} from "./States.js";
import {ConsoleBoardOutput} from "./ConsoleBoardOutput.js";
import {Verify} from "./Verification.js";
import {BotMove} from "./BotMove.js";


export let Container = {
gameState: GameStates.NotDefined
}

export let Board = [];

for (let i = 0; i < 3; i++) {
    Board[i] = [];
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    Board[i][j] = States.Empty;
  }
}

Board[0][0] = States.Zero;
Board[0][1] = States.Zero;
//Board[0][2] = States.Zero;
Board[2][2] = States.Cross;

ConsoleBoardOutput(Board);

let bot_symbol = States.Zero;
let bot_move_cell_number = BotMove(bot_symbol);
ConsoleBoardOutput(Board);
let verification_var = Verify(bot_symbol);

//console.log(verification_var);
console.log(bot_move_cell_number);
console.log(verification_var);
ConsoleBoardOutput(Board);
console.log(Container.gameState);

//document.getElementById("test").innerHTML = EvaluatedBoard[i].toString() + ' ';

