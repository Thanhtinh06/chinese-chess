import React, { useEffect, useState } from "react";
import ChessPiece from "../Chess/ChessPiece";
import { ChessPieceType, Coordinate } from "./../../global";
import {
  checkExistenceCoordinateChess,
  initBoardGame,
  swapPositionChess,
} from "./index";
import { getListCoordinateChessCanMove } from "../Chess";

const SquaresChess = () => {
  const [selectedChessCoordinate, setSelectedChessCoordinate] =
    useState<Coordinate | null>(null);
  const [destinationCoordinate, setDestinationCoordinate] =
    useState<Coordinate | null>(null);
  const [board, setBoard] = useState<ChessPieceType[][]>([]);
  const [coordinateListCanMove, setCoordinateListCanMove] = useState<
    Coordinate[] | null
  >(null);

  const resetSelection = (): void => {
    setSelectedChessCoordinate(null);
    setDestinationCoordinate(null);
    setCoordinateListCanMove(null);
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
    const currentChess = board[currentCoordinate.x][currentCoordinate.y];

    const isEmptySpace =
      board[currentCoordinate.x][currentCoordinate.y].name === "" &&
      !selectedChessCoordinate;
    const isUnselected = checkExistenceCoordinateChess(
      currentCoordinate,
      selectedChessCoordinate
    );

    if (isUnselected) {
      setSelectedChessCoordinate(null);
      setCoordinateListCanMove(null);
    } else if (isEmptySpace) {
      resetSelection();
    } else {
      if (!selectedChessCoordinate) {
        setSelectedChessCoordinate(currentCoordinate);
        const listCoordinateCanMove = getListCoordinateChessCanMove(
          currentChess.name,
          currentChess.color,
          currentCoordinate,
          currentChess.isPromoted
        );
        setCoordinateListCanMove(listCoordinateCanMove);
      } else if (
        coordinateListCanMove?.some((coordinate) => {
          return checkExistenceCoordinateChess(currentCoordinate, coordinate);
        })
      ) {
        setDestinationCoordinate(currentCoordinate);
      }
    }
  };

  const conditionDisableChesses = (currentCoordinate: Coordinate) => {
    if (
      selectedChessCoordinate &&
      !coordinateListCanMove?.some((coordinate) => {
        return checkExistenceCoordinateChess(currentCoordinate, coordinate);
      }) &&
      currentCoordinate.x !== selectedChessCoordinate?.x &&
      currentCoordinate.y !== selectedChessCoordinate?.y
    ) {
      return true;
    }
    return false;
  };

  return board.map((row, i) => {
    return row.map((piece, j) => {
      const currentCoordinate: Coordinate = {
        x: i,
        y: j,
      };

      const isActiveMove = coordinateListCanMove?.some((coordinate) => {
        return checkExistenceCoordinateChess(currentCoordinate, coordinate);
      });

      return (
        <button
          disabled={conditionDisableChesses(currentCoordinate)}
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
              isPromoted={true}
            />
          )}
        </button>
      );
    });
  });
};

export default SquaresChess;
