import React from "react";
import { Coordinate, RuleChess } from "../../global";

type Props = {
  name: string;
  color: string;
  location?: Coordinate;
  isCapturned?: boolean;
  isVisible: boolean;
  rule?: RuleChess;
  isSelect?: boolean;
};

const ChessPiece = (props: Props) => {
  const background = props.name ? props.color : "";
  return (
    <div
      className={`${props.isVisible ? "" : "hidden"} ${
        props.name ? "chess-piece" : ""
      }
        ${props.isSelect ? "select-chess" : ""}
        `}
      style={{
        background: background,
      }}
    >
      <p className={`text-${props.color}`}>{props.name}</p>
    </div>
  );
};

export default ChessPiece;
