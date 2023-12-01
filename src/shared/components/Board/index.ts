import {
  COLOR_CHESS,
  COLUMNS,
  INITIAL_POSITIONS,
  ROWS,
} from "../../constants/Board";
import { ChessPieceType, Coordinate } from "../../global";
import { changeStatusPromote, getConditionPromotion } from "../Chess";

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
  targetCoordinate: Coordinate,
  listCapturedChess: Coordinate[]
) => {
  // Check if coordinates are valid
  if (
    !isValidCoordinate(sourceCoordinate, currentBoard) ||
    !isValidCoordinate(targetCoordinate, currentBoard)
  ) {
    throw new Error("Invalid coordinates");
  }

  // Deep copy of the board
  let updatedBoard = currentBoard.map((row) => [...row]);

  // Destructuring for swapping
  [
    updatedBoard[targetCoordinate.x][targetCoordinate.y],
    updatedBoard[sourceCoordinate.x][sourceCoordinate.y],
  ] = [
    updatedBoard[sourceCoordinate.x][sourceCoordinate.y],
    updatedBoard[targetCoordinate.x][targetCoordinate.y],
  ];
  const conditonCapture = listCapturedChess.some(
    (coordinate) =>
      coordinate.x === targetCoordinate.x && coordinate.y === targetCoordinate.y
  );

  if (conditonCapture) {
    [
      updatedBoard[targetCoordinate.x][targetCoordinate.y].isCaptured,
      updatedBoard[sourceCoordinate.x][sourceCoordinate.y].isCaptured,
    ] = [false, true];
    [
      updatedBoard[targetCoordinate.x][targetCoordinate.y].isVisible,
      updatedBoard[sourceCoordinate.x][sourceCoordinate.y].isVisible,
    ] = [true, false];
  
      updatedBoard[sourceCoordinate.x][sourceCoordinate.y].name = "";
      updatedBoard[sourceCoordinate.x][sourceCoordinate.y].color = "";
  }

  // Swap piece locations
  [
    updatedBoard[targetCoordinate.x][targetCoordinate.y].location,
    updatedBoard[sourceCoordinate.x][sourceCoordinate.y].location,
  ] = [
    updatedBoard[sourceCoordinate.x][sourceCoordinate.y].location,
    updatedBoard[targetCoordinate.x][targetCoordinate.y].location,
  ];

  // Update status isPromoted of Tot chess

  if (
    updatedBoard[targetCoordinate.x][targetCoordinate.y].location &&
    getConditionPromotion(
      updatedBoard[targetCoordinate.x][targetCoordinate.y].location,
      updatedBoard
    )
  ) {
    updatedBoard = changeStatusPromote(
      updatedBoard[targetCoordinate.x][targetCoordinate.y],
      updatedBoard
    );
  }

  return updatedBoard;
};

const isValidCoordinate = (
  coordinate: Coordinate,
  board: ChessPieceType[][]
) => {
  const { x, y } = coordinate;
  return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
};

