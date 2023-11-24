import React from "react";
import { Coordinate, RuleChess } from "../../global";

type Props = {
  name: string;
  color: string;
  location?: Coordinate | undefined;
  isCaptured?: boolean;
  isVisible: boolean;
  rule?: RuleChess;
  isSelected?: boolean;
  isPromoted?: boolean;
};

const ChessPiece = (props: Props) => {
  const background = props.name ? props.color : "";
  return (
    <div
      className={`${props.isVisible ? "" : "hidden"} ${
        props.name ? "chess-piece" : ""
      }
        ${props.isSelected ? "select-chess" : ""}
        `}
      style={{
        background: background,
      }}
    >
      <p className="name-chess">{props.name}</p>
    </div>
  );
};

export default ChessPiece;
