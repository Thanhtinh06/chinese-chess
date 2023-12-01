import { COLOR_CHESS } from "../../constants/Board";
import {
  ConditionMovingChessPieces,
  NAME_CHESS_PIECE,
} from "../../constants/Chess";
import { ChessPieceType, Coordinate } from "../../global";

export default class ChessPieceController {
  static chess: ChessPieceType;
  static boardGame: ChessPieceType[][];
  static listCoordinateCanMove: Coordinate[];
  static listCapturedChess: Coordinate[];

  constructor(chess: ChessPieceType, boardGame: ChessPieceType[][]) {
    chess = chess;
    boardGame = boardGame;
  }
  static getCoditionMovingOfChessPieace() {
    return ConditionMovingChessPieces.filter(
      (chess) => chess.name === chess.name
    )[0];
  }
  static getConditionPromotion(): boolean {
    const isRedTotOnPromotionZone =
      this.chess.color === COLOR_CHESS.RED &&
      this.chess.name === NAME_CHESS_PIECE.TOT &&
      this.chess.location.x >= 5;
    const isBlueTotOnPromotionZone =
      this.chess.color === COLOR_CHESS.BLUE &&
      this.chess.name === NAME_CHESS_PIECE.TOT &&
      this.chess.location.x <= 4;
    if (isRedTotOnPromotionZone || isBlueTotOnPromotionZone) {
      return true;
    }
    return false;
  }
  static changeStatusPromote = (): void => {
    const updateChessBoard = [...this.boardGame];
    if (this.getConditionPromotion()) {
      updateChessBoard[this.chess.location.x][
        this.chess.location.y
      ].isPromoted = true;
    }

    this.boardGame = updateChessBoard;
  };
  static getListCapturedChess = (): void => {
    const listCaptured: Coordinate[] = [];
    for (let chess of this.listCoordinateCanMove) {
      if (this.chess.name && this.chess.color !== this.chess.color) {
        listCaptured.push(chess);
      }
    }
    this.listCapturedChess = listCaptured;
  };
  static checkTheSameColorInListCanMove = (): Coordinate[] => {
    return this.listCoordinateCanMove.filter((chess) => {
      const currentChess = this.boardGame[chess.x][chess.y];
      return (
        !currentChess.name ||
        currentChess.color !== this.chess.color ||
        undefined
      );
    });
  };
  static getListCoordinateChessCanMove(): void {
    const resultCoordinate: Coordinate[] = [];
    const rows = this.chess.location.x;
    const columns = this.chess.location.y;
    const conditionChess = this.getCoditionMovingOfChessPieace();
    switch (this.chess.name) {
      case NAME_CHESS_PIECE.TOT:
        const maxColumn = Math.min(columns + conditionChess.scope, 8);
        const minColumn = Math.max(0, columns - conditionChess.scope);

        const addCoordinate = (xOffset: number) => {
          resultCoordinate.push({ x: rows + xOffset, y: columns });
        };

        const addHorizontalCoordinates = (start: number, end: number) => {
          for (let j = start; j <= end; j++) {
            if (j !== columns) {
              resultCoordinate.push({ x: rows, y: j });
            }
          }
        };

        if (this.chess.isPromoted) {
          addHorizontalCoordinates(minColumn, maxColumn);

          if (this.chess.color === COLOR_CHESS.RED && rows <= 8) {
            addCoordinate(1);
          }

          if (this.chess.color === COLOR_CHESS.BLUE && rows >= 1) {
            addCoordinate(-1);
          }
        } else {
          if (this.chess.color === COLOR_CHESS.RED && rows <= 7) {
            addCoordinate(1);
          }

          if (this.chess.color === COLOR_CHESS.BLUE && rows >= 1) {
            addCoordinate(-1);
          }
        }
        this.listCoordinateCanMove = resultCoordinate;
        break;
      default:
        this.listCoordinateCanMove = [];
        break;
    }
  }
}
