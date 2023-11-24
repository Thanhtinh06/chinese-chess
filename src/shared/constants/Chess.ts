import { directionType } from "./Direction";

export const NAME_CHESS_PIECE = {
  XE: "车",
  PHAO: "炮",
  MA: "马",
  TUONG: "象",
  SI: "士",
  KING: "将",
  TOT: "兵",
};

export const SCOPE_MOVING = {
  1: 1,
  2: 2,
  3: 3,
  UNLIMIT: 9,
};

export const ConditionMovingChessPieces = [
  {
    name: NAME_CHESS_PIECE.TOT,
    scope: SCOPE_MOVING[1],
    direction: [
      {
        type: directionType.type.straight,
        direct: [directionType.direct.up, directionType.direct.down],
        promoteDirect: [
          directionType.direct.left,
          directionType.direct.right,
          directionType.direct.up,
          directionType.direct.down,
        ],
      },
    ],
  },
  {
    name: NAME_CHESS_PIECE.XE,
    scope: SCOPE_MOVING.UNLIMIT,
    direction: [
      {
        type: directionType.type.straight,
        direct: [
          directionType.direct.left,
          directionType.direct.right,
          directionType.direct.up,
          directionType.direct.down,
        ],
      },
    ],
  },
  {
    name: NAME_CHESS_PIECE.MA,
    scope: SCOPE_MOVING[3],
    direction: [
      {
        type: directionType.type.L,
        direct: [
          directionType.direct.left,
          directionType.direct.right,
          directionType.direct.up,
          directionType.direct.down,
        ],
      },
    ],
  },
  {
    name: NAME_CHESS_PIECE.TUONG,
    scope: SCOPE_MOVING[2],
    direction: [
      {
        type: directionType.type.cross,
        direct: [
          directionType.direct.left,
          directionType.direct.right,
          directionType.direct.up,
          directionType.direct.down,
        ],
      },
    ],
  },
  {
    name: NAME_CHESS_PIECE.SI,
    scope: SCOPE_MOVING[1],
    direction: [
      {
        type: directionType.type.cross,
        direct: [
          directionType.direct.left,
          directionType.direct.right,
          directionType.direct.up,
          directionType.direct.down,
        ],
      },
    ],
    place: {
      RED: [],
      BLUE: [],
    },
  },
  {
    name: NAME_CHESS_PIECE.TUONG,
    scope: SCOPE_MOVING[1],
    direction: [
      {
        type: directionType.type.straight,
        direct: [
          directionType.direct.left,
          directionType.direct.right,
          directionType.direct.up,
          directionType.direct.down,
        ],
      },
    ],
    place: {
      RED: [],
      BLUE: [],
    },
  },
];
