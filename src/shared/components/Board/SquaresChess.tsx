import React, { useEffect, useState } from "react";
import ChessPiece from "../Chess/ChessPiece";
import { ChessPieceType, Position } from "@/shared/global";
import {
  checkExistancePositonChess,
  initBoardGame,
} from "@/shared/components/Board";

const SquaresChess = () => {
  const [countSelect, setCountSelect] = useState<number>(0);
  const [selectChess, setSelectChess] = useState<Position[]>([]);
  const [positionMove, setPositionMove] = useState<Position[]>([]);
  const [boardGame, setBoardGame] = useState<ChessPieceType[][]>([]);

  const resetSelection = (): void => {
    setSelectChess([]);
    setPositionMove([]);
  };
  useEffect(() => {
    const initBoard = initBoardGame();
    setBoardGame(initBoard);
  }, []);

  useEffect(() => {
    if (positionMove.length > 0 && selectChess.length > 0) {
      const updatedBoardGame = [...boardGame]; // Create a copy of the state
      const term = updatedBoardGame[positionMove[0][0]][positionMove[0][1]];
      const currentSelectPositionChess =
        updatedBoardGame[selectChess[0][0]][selectChess[0][1]];

      // Swap the values correctly
      updatedBoardGame[positionMove[0][0]][positionMove[0][1]] =
        currentSelectPositionChess;
      updatedBoardGame[selectChess[0][0]][selectChess[0][1]] = term;

      setBoardGame(updatedBoardGame);
      resetSelection();
    }
  }, [positionMove, selectChess]);

  useEffect(() => {
    if (countSelect >= 2) {
      setCountSelect(0);
    }
  }, [countSelect]);

  const handleClick = (i: number, j: number): void => {
    if (countSelect < 1) {
      setSelectChess([[i, j]]);
    } else {
      setPositionMove([[i, j]]);
    }
    setCountSelect((preCount) => preCount + 1);
    if (checkExistancePositonChess(i, j, selectChess)) {
      setSelectChess([]);
      setCountSelect((preCount) => preCount - 1);
    }
  };

  return boardGame.map((row, i) => {
    return row.map((piece, j) => {
      return (
        <button
          className={`btn-chess ${
            checkExistancePositonChess(i, j, positionMove)
              ? "active-select-move"
              : ""
          }`}
          key={j}
          onClick={() => handleClick(i, j)}
        >
          {piece.isVisible && (
            <ChessPiece
              isVisible={piece.isVisible}
              isCapturned={piece.isCapturned}
              name={piece.name}
              color={piece.color}
              location={{
                x: i,
                y: j,
              }}
              isSelect={checkExistancePositonChess(i, j, selectChess)}
            />
          )}
        </button>
      );
    });
  });
};

export default SquaresChess;
