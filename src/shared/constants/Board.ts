import { Piece } from "../global";
import { NAME_CHESS_PIECE } from "./Chess";

export const ROWS: number = 10;
export const COLUMNS: number = 9;
export const INITIAL_POSITIONS: Piece[][] = [
  [
    {
      name: NAME_CHESS_PIECE.XE,
    },
    {
      name: NAME_CHESS_PIECE.MA,
    },
    {
      name: NAME_CHESS_PIECE.TUONG,
    },
    {
      name: NAME_CHESS_PIECE.SI,
    },
    {
      name: NAME_CHESS_PIECE.KING,
    },
    {
      name: NAME_CHESS_PIECE.SI,
    },
    {
      name: NAME_CHESS_PIECE.TUONG,
    },
    {
      name: NAME_CHESS_PIECE.MA,
    },
    {
      name: NAME_CHESS_PIECE.XE,
    },
  ],
  [
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ],
  [
    { name: "" },
    { name: NAME_CHESS_PIECE.PHAO },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: NAME_CHESS_PIECE.PHAO },
    { name: "" },
  ],
  [
    { name: NAME_CHESS_PIECE.TOT },
    { name: "" },
    { name: NAME_CHESS_PIECE.TOT },
    { name: "" },
    { name: NAME_CHESS_PIECE.TOT },
    { name: "" },
    { name: NAME_CHESS_PIECE.TOT },
    { name: "" },
    { name: NAME_CHESS_PIECE.TOT },
  ],
  [
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ],
  [
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ],
  [
    { name: NAME_CHESS_PIECE.TOT },
    { name: "" },
    { name: NAME_CHESS_PIECE.TOT },
    { name: "" },
    { name: NAME_CHESS_PIECE.TOT },
    { name: "" },
    { name: NAME_CHESS_PIECE.TOT },
    { name: "" },
    { name: NAME_CHESS_PIECE.TOT },
  ],
  [
    { name: "" },
    { name: NAME_CHESS_PIECE.PHAO },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: NAME_CHESS_PIECE.PHAO },
    { name: "" },
  ],
  [
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ],
  [
    {
      name: NAME_CHESS_PIECE.XE,
    },
    {
      name: NAME_CHESS_PIECE.MA,
    },
    {
      name: NAME_CHESS_PIECE.TUONG,
    },
    {
      name: NAME_CHESS_PIECE.SI,
    },
    {
      name: NAME_CHESS_PIECE.KING,
    },
    {
      name: NAME_CHESS_PIECE.SI,
    },
    {
      name: NAME_CHESS_PIECE.TUONG,
    },
    {
      name: NAME_CHESS_PIECE.MA,
    },
    {
      name: NAME_CHESS_PIECE.XE,
    },
  ],
];

export const COLOR_CHESS = {
  RED: "red",
  BLUE: "blue",
};
