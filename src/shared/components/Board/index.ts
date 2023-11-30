import {
  COLOR_CHESS,
  COLUMNS,
  INITIAL_POSITIONS,
  ROWS,
} from "../../constants/Board";
import { ChessPieceType, Coordinate } from "../../global";

export const checkExistenceCoordinateChess = (
  currentCoordinate: Coordinate,
  destinationCoordinate: Coordinate | null
) => {
  return (
    currentCoordinate.x === destinationCoordinate?.x &&
    currentCoordinate.y === destinationCoordinate?.y
  );
};

export const initBoardGame = () => {
  const chessBoard: ChessPieceType[][] = new Array(ROWS)
    .fill([])
    .map(() => new Array(COLUMNS).fill({ isVisible: false }));

  for (let i = 0; i < ROWS; i++) {
    const listPositions = INITIAL_POSITIONS[i];
    for (let j = 0; j < COLUMNS; j++) {
      const color = i <= 4 ? COLOR_CHESS.RED : COLOR_CHESS.BLUE;
      chessBoard[i][j] = {
        isVisible: listPositions[j].name !== "" ? true : false,
        isCaptured: false,
        name: listPositions[j].name,
        color: color,
        isPromoted: false,
        location: {
          x: i,
          y: j,
        },
      };
    }
  }
  return chessBoard;
};

export const swapPositionChess = (
  currentBoard: ChessPieceType[][],
  sourceCoordinate: Coordinate,
  targetCoordinate: Coordinate
) => {
  const updatedBoard = [...currentBoard];
  const targetPiece = updatedBoard[targetCoordinate.x][targetCoordinate.y];
  const sourcePiece = updatedBoard[sourceCoordinate.x][sourceCoordinate.y];

  updatedBoard[targetCoordinate.x][targetCoordinate.y] = sourcePiece;
  updatedBoard[sourceCoordinate.x][sourceCoordinate.y] = targetPiece;

  return updatedBoard;
};
