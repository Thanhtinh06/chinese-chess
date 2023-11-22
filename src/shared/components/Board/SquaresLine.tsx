import React from "react";
import { COLUMNS, ROWS } from "../../constants/Board";

const SquaresLine = () => {
  const boardLine: string[][] = new Array(ROWS - 1)
    .fill([])
    .map(() => new Array(COLUMNS - 1).fill(" "));
  return boardLine.map((ele) => {
    return ele.map((e, index) => {
      return (
        <div
          className="line"
          style={{
            border: "1px solid white",
            width: "100%",
            height: "100%",
          }}
          key={index}
        >
          {e}
        </div>
      );
    });
  });
};

export default SquaresLine;
