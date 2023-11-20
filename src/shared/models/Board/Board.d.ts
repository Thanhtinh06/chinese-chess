import { ChessPiece } from "../Chess/chess";

export interface RuleBoard {
  isCheckmate(): boolean;
  isStatemate(): boolean;
}

export class Player {
  playerName: string;
  color: Color;
}

export interface Board {
  squares: ChessPiece[][];
  currentPlayer: Player;
  isGameOver: boolean;
  startGame(): void;
  endGame(): void;
  resetBoard(): void;
  displayBoard(): void;
}
