export interface RuleBoard {
  isCheckmate(): boolean;
  isStatemate(): boolean;
}

export interface Player {
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

export interface Color {
  name: string;
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface RuleChess {
  validCoordinateList: Coordinate[];
  conditionMove: Condition;
  getVaildCoordinateList(): void;
  isValidMove(chess: ChessPiece): boolean;
  applyMove(chess: ChessPiece): void;
}

export interface Direction {
  type: {
    straight: string;
    L: string;
    cross: string;
  };
  direct: {
    up: string;
    down: string;
    left: string;
    right: string;
  };
}

export interface Condition {
  direction: string[];
  scope: number;
  getConditionChessPiece: () => {
    direction: string[];
    scope: number;
  };
  getListCoordinateCanMove: () => Coordinate[];
}

export interface ChessPieceType {
  name: string;
  color: string;
  location?: Coordinate;
  isCaptured?: boolean;
  isVisible?: boolean;
  isPromoted?: boolean;
  rule?: RuleChess;
  display?: string;
  move?(): boolean;
  capture?(): void;
  promote?(): void;
}

export type Piece = { name: string };

export type Position = [number, number];
