import { COLOR_CHESS } from "../../constants/Board";
import {
  ConditionMovingChessPieces,
  NAME_CHESS_PIECE,
} from "../../constants/Chess";
import { Coordinate } from "../../global";

export const getCondition = (name: string) =>
  ConditionMovingChessPieces.filter((chess) => chess.name === name)[0];

export const getListCoordinateChessCanMove = (
  name: string,
  color: string,
  location?: Coordinate | undefined,
  isPromoted?: boolean
): Coordinate[] => {
  const resultCoordinate: Coordinate[] = [];
  const rows = location?.x;
  const columns = location?.y;
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
          resultCoordinate.push({
            x: rows + 1,
            y: columns,
          });
        } else {
          resultCoordinate.push({
            x: rows + 1,
            y: columns,
          });
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
          resultCoordinate.push({
            x: rows - 1,
            y: columns,
          });
        } else {
          resultCoordinate.push({
            x: rows - 1,
            y: columns,
          });
        }
      }
      return resultCoordinate;

    default:
      return [];
  }
};
