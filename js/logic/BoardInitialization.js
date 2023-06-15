import {States} from "./States.js";
import {Board} from "../main.js";

export function BoardInitialization() {
  for (let i = 0; i < 3; i++) {
    Board[i] = [];
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      Board[i][j] = States.Empty;
    }
  }
}
