import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ChessPieceType, Coordinate } from "../../global";
import { initBoardGame, swapPositionChess } from "../../components/Board";
import {
  checkTheSameColorInListCanMove,
  getListCoordinateChessCanMove,
  listCapturedChess,
} from "../../components/Chess";

export interface ininialStateType {
  boardGame: ChessPieceType[][];
  selectedChessCoordinate: Coordinate | null;
  destinationCoordinate: Coordinate | null;
  coordinateListCanMove: Coordinate[] | null;
  listCapturedChess: Coordinate[];
}

const initialState: ininialStateType = {
  boardGame: [],
  selectedChessCoordinate: null,
  destinationCoordinate: null,
  coordinateListCanMove: null,
  listCapturedChess: [],
};

export const { reducer: manageBoardsReducer, actions: manageBoardsActions } =
  createSlice({
    name: "board",
    initialState,
    reducers: {
      initValue: (state) => {
        state.boardGame = initBoardGame();
      },
      updateBoard: (state) => {
        if (
          state.boardGame &&
          state.selectedChessCoordinate &&
          state.destinationCoordinate
        ) {
          const updatedBoard = swapPositionChess(
            state.boardGame,
            state.selectedChessCoordinate,
            state.destinationCoordinate,
            state.listCapturedChess
          );

          state.boardGame = updatedBoard;
        }
      },
      updateDestinationCoordinate: (
        state,
        action: PayloadAction<Coordinate | null>
      ) => {
        state.destinationCoordinate = action.payload;
      },
      resetSelection: (state) => {
        state.destinationCoordinate = null;
        state.selectedChessCoordinate = null;
        state.coordinateListCanMove = null;
        state.listCapturedChess = [];
      },
      unSelectChess: (state) => {
        state.selectedChessCoordinate = null;
        state.coordinateListCanMove = null;
      },
      selectChess: (state, action: PayloadAction<Coordinate | null>) => {
        state.selectedChessCoordinate = action.payload;
        if (action.payload) {
          const currentChess =
            state.boardGame[action.payload.x][action.payload.y];

          state.coordinateListCanMove = getListCoordinateChessCanMove(
            currentChess.name,
            currentChess.color,
            action.payload,
            state.boardGame,
            currentChess.isPromoted
          );

          let listCanMove = [...state.coordinateListCanMove];
          listCanMove = checkTheSameColorInListCanMove(
            currentChess,
            listCanMove,
            state.boardGame
          );
          state.coordinateListCanMove = listCanMove;
          state.listCapturedChess = listCapturedChess(
            currentChess,
            state.coordinateListCanMove,
            state.boardGame
          );
        } else {
          state.coordinateListCanMove = null;
        }
      },
    },
  });
