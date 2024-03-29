import { COLOR_CHESS } from "../../constants/Board";
import {
  ConditionMovingChessPieces,
  NAME_CHESS_PIECE,
} from "../../constants/Chess";
import { ChessPieceType, Coordinate } from "../../global";

export const getCondition = (name: string) =>
  ConditionMovingChessPieces.filter((chess) => chess.name === name)[0];

export const getConditionPromotion = (
  currentCoordinate?: Coordinate,
  board?: ChessPieceType[][]
) => {
  if (currentCoordinate && board) {
    const currentChess = board[currentCoordinate.x][currentCoordinate.y];
    if (
      currentChess.name === NAME_CHESS_PIECE.TOT &&
      currentChess.color === COLOR_CHESS.RED &&
      currentCoordinate.x >= 5
    ) {
      return true;
    }
    if (
      currentChess.color === COLOR_CHESS.BLUE &&
      currentCoordinate.x <= 4 &&
      currentChess.name === NAME_CHESS_PIECE.TOT
    ) {
      return true;
    }
  }
  return false;
};

export const changeStatusPromote = (
  chess: ChessPieceType,
  board: ChessPieceType[][]
) => {
  const updateChessBoard = [...board];
  if (chess.location) {
    if (
      chess.color === COLOR_CHESS.RED &&
      chess.location.x >= 5 &&
      chess.name === NAME_CHESS_PIECE.TOT
    ) {
      chess.isPromoted = true;
    }

    if (
      chess.color === COLOR_CHESS.BLUE &&
      chess.location.x <= 4 &&
      chess.name === NAME_CHESS_PIECE.TOT
    ) {
      chess.isPromoted = true;
    }
    updateChessBoard[chess.location.x][chess.location.y] = chess;
  }

  return updateChessBoard;
};

export const listCapturedChess = (
  chessPiece: ChessPieceType,
  listCanMoveOfChess: Coordinate[],
  board: ChessPieceType[][]
): Coordinate[] => {
  const listCaptured: Coordinate[] = [];
  for (let chess of listCanMoveOfChess) {
    const currentChess = board[chess.x][chess.y];
    if (currentChess.name && currentChess.color !== chessPiece.color) {
      listCaptured.push(chess);
    }
  }
  return listCaptured;
};

export const checkTheSameColorInListCanMove = (
  chessPiece: ChessPieceType,
  listCanMoveOfChess: Coordinate[],
  board: ChessPieceType[][]
): Coordinate[] => {
  return listCanMoveOfChess.filter((chess) => {
    const currentChess = board[chess.x][chess.y];
    return (
      !currentChess.name || currentChess.color !== chessPiece.color || undefined
    );
  });
};

export const getListCoordinateChessCanMove = (
  name: string,
  color: string,
  location: Coordinate,
  board: ChessPieceType[][],
  isPromoted?: boolean
): Coordinate[] => {
  const resultCoordinate: Coordinate[] = [];
  const rows = location.x;
  const columns = location.y;
  const conditionChess = getCondition(name);
  switch (name) {
    case NAME_CHESS_PIECE.TOT:
      if (color === COLOR_CHESS.RED) {
        if (isPromoted) {
          for (
            let j = Math.max(0, columns - conditionChess.scope);
            j <= Math.min(columns + conditionChess.scope, 8);
            j++
          ) {
            if (j !== columns) {
              resultCoordinate.push({
                x: rows,
                y: j,
              });
            }
          }
          if (rows <= 8) {
            resultCoordinate.push({
              x: rows + 1,
              y: columns,
            });
          }
        } else {
          if (rows <= 8) {
            resultCoordinate.push({
              x: rows + 1,
              y: columns,
            });
          }
        }
      }
      if (color === COLOR_CHESS.BLUE) {
        if (isPromoted) {
          for (
            let j = Math.max(0, columns - conditionChess.scope);
            j <= Math.min(columns + conditionChess.scope, 8);
            j++
          ) {
            if (j !== columns) {
              resultCoordinate.push({
                x: rows,
                y: j,
              });
            }
          }
          if (rows >= 1) {
            resultCoordinate.push({
              x: rows - 1,
              y: columns,
            });
          }
        } else {
          if (rows >= 1) {
            resultCoordinate.push({
              x: rows - 1,
              y: columns,
            });
          }
        }
      }
      return resultCoordinate;
    case NAME_CHESS_PIECE.PHAO:
      for (let i = columns - 1; i >= 0; i--) {
        if (board[rows][i].name) {
          for (let j = i - 1; j >= 0; j--) {
            if (board[rows][j].name && board[rows][j].color !== color) {
              resultCoordinate.push({
                x: rows,
                y: j,
              });
              break;
            }
            if (board[rows][j].name) {
              break;
            }
          }
          break;
        }
        resultCoordinate.push({
          x: rows,
          y: i,
        });
      }
      for (let i = columns + 1; i < 9; i++) {
        if (board[rows][i].name) {
          for (let j = i + 1; j < 9; j++) {
            if (board[rows][j].name && board[rows][j].color !== color) {
              resultCoordinate.push({
                x: rows,
                y: j,
              });
              break;
            }
            if (board[rows][j].name) {
              break;
            }
          }
          break;
        }
        resultCoordinate.push({
          x: rows,
          y: i,
        });
      }
      for (let i = rows - 1; i >= 0; i--) {
        if (board[i][columns].name) {
          for (let j = i - 1; j >= 0; j--) {
            if (board[j][columns].name && board[j][columns].color !== color) {
              resultCoordinate.push({
                x: j,
                y: columns,
              });
              break;
            }
            if (board[j][columns].name) {
              break;
            }
          }
          break;
        }
        resultCoordinate.push({
          x: i,
          y: columns,
        });
      }
      for (let i = rows + 1; i < 10; i++) {
        if (board[i][columns].name) {
          for (let j = i + 1; j < 10; j++) {
            if (board[j][columns].name && board[j][columns].color !== color) {
              resultCoordinate.push({
                x: j,
                y: columns,
              });
              break;
            }
            if (board[j][columns].name) {
              break;
            }
          }
          break;
        }
        resultCoordinate.push({
          x: i,
          y: columns,
        });
      }
      return resultCoordinate;
    default:
      return [];
  }
};

