import React, { useEffect, useState } from "react";
import ChessPiece from "../Chess/ChessPiece";
import { ChessPieceType, Coordinate } from "./../../global";
import {
  checkExistenceCoordinateChess,
  initBoardGame,
  swapPositionChess,
} from "./index";

const SquaresChess = () => {
  const [selectedChessCoordinate, setSelectedChessCoordinate] =
    useState<Coordinate | null>(null);
  const [destinationCoordinate, setDestinationCoordinate] =
    useState<Coordinate | null>(null);
  const [board, setBoard] = useState<ChessPieceType[][]>([]);

  const resetSelection = (): void => {
    setSelectedChessCoordinate(null);
    setDestinationCoordinate(null);
  };

  useEffect(() => {
    const initialBoard = initBoardGame();
    setBoard(initialBoard);
  }, []);

  useEffect(() => {
    if (destinationCoordinate && selectedChessCoordinate) {
      const updatedBoard = swapPositionChess(
        board,
        selectedChessCoordinate,
        destinationCoordinate
      );
      setBoard(updatedBoard);
      resetSelection();
    }
  }, [destinationCoordinate, selectedChessCoordinate]);

  const handleClick = (currentCoordinate: Coordinate): void => {
    const isEmptySpace =
      board[currentCoordinate.x][currentCoordinate.y].name === "" &&
      !selectedChessCoordinate;
    const isUnselected = checkExistenceCoordinateChess(
      currentCoordinate,
      selectedChessCoordinate
    );

    if (isUnselected) {
      setSelectedChessCoordinate(null);
    } else if (isEmptySpace) {
      resetSelection();
    } else {
      if (!selectedChessCoordinate) {
        setSelectedChessCoordinate(currentCoordinate);
      } else {
        setDestinationCoordinate(currentCoordinate);
      }
    }
  };

  return board.map((row, i) => {
    return row.map((piece, j) => {
      const currentCoordinate: Coordinate = {
        x: i,
        y: j,
      };

      const isActiveMove = checkExistenceCoordinateChess(
        currentCoordinate,
        destinationCoordinate
      );

      return (
        <button
          className={`btn-chess ${isActiveMove ? "active-select-move" : ""}`}
          key={j}
          onClick={() => handleClick(currentCoordinate)}
        >
          {piece.isVisible && (
            <ChessPiece
              isVisible={piece.isVisible}
              isCaptured={piece.isCaptured}
              name={piece.name}
              color={piece.color}
              location={currentCoordinate}
              isSelected={checkExistenceCoordinateChess(
                currentCoordinate,
                selectedChessCoordinate
              )}
            />
          )}
        </button>
      );
    });
  });
};

export default SquaresChess;
