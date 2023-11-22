import {
  COLOR_CHESS,
  COLUMNS,
  INITIAL_POSITIONS,
  ROWS,
} from "../../constants/Board";
import { ChessPieceType, Position } from "../../global";

export const checkExistancePositonChess = (
  i: number,
  j: number,
  listPositions: Position[]
) => {
  return listPositions?.some((pos) => pos[0] === i && pos[1] === j);
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
        isVisible: true,
        isCapturned: false,
        name: listPositions[j].name,
        color: color,
      };
    }
  }
  return chessBoard;
};
