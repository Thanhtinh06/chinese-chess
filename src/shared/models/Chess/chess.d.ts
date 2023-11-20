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
  type: object;
  direct: object;
}

export interface Condition {
  direction: string[];
  scope: number;
  getConditionChessPiece: () => {
    direction: string[];
    scope: number;
  };
}

export interface ChessPiece {
  name: string;
  color: Color;
  location: Coordinate;
  isCapturned: boolean;
  isVisible: boolean;
  rule: RuleChess;
  display: string;
  move(): boolean;
  capture(): void;
  promote(): void;
}
