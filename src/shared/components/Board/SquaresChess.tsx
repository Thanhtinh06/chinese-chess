import React, { useEffect } from "react";
import ChessPiece from "../Chess/ChessPiece";
import { Coordinate } from "../../global";
import { checkExistenceCoordinateChess } from "./index";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { manageBoardsActions } from "../../store/board/slice";

const SquaresChess = () => {
  const {
    boardGame,
    selectedChessCoordinate,
    destinationCoordinate,
    coordinateListCanMove,
    listCapturedChess,
  } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(manageBoardsActions.initValue());
  }, [dispatch]);

  useEffect(() => {
    if (destinationCoordinate && selectedChessCoordinate) {
      dispatch(manageBoardsActions.updateBoard());
      dispatch(manageBoardsActions.resetSelection());
    }
  }, [destinationCoordinate, selectedChessCoordinate]);

  const handleClick = (currentCoordinate: Coordinate): void => {
    const isEmptySpace =
      boardGame[currentCoordinate.x][currentCoordinate.y].name === "" &&
      !selectedChessCoordinate;
    const isUnselected = checkExistenceCoordinateChess(
      currentCoordinate,
      selectedChessCoordinate
    );
    if (isUnselected) {
      dispatch(manageBoardsActions.unSelectChess());
    } else if (isEmptySpace) {
      dispatch(manageBoardsActions.resetSelection());
    } else {
      if (!selectedChessCoordinate) {
        dispatch(manageBoardsActions.selectChess(currentCoordinate));
      } else if (
        coordinateListCanMove?.some((coordinate) => {
          return checkExistenceCoordinateChess(currentCoordinate, coordinate);
        })
      ) {
        dispatch(
          manageBoardsActions.updateDestinationCoordinate(currentCoordinate)
        );
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

  if (selectedChessCoordinate) {
    console.log(
      "selet",
      boardGame[selectedChessCoordinate.x][selectedChessCoordinate.y]
    );
    console.log("listCapturedChess", listCapturedChess);
    console.log("canmove", coordinateListCanMove);
  }
 
  return boardGame?.map((row, i) => {
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
