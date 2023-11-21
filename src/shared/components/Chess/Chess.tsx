import React from "react";
import { Color, Coordinate, RuleChess } from "./../../models/Chess/chess";

type Props = {
  name: string;
  color: Color;
  location?: Coordinate;
  isCapturned?: boolean;
  isVisible: boolean;
  rule?: RuleChess;
};

const Chess = (props: Props) => {
  return (
    <div className={`${props.isVisible ? "" : "hidden"}`}>
      <p className={`text-${props.color}`}>{props.name}</p>
      {/* <img src={props.name} alt="" /> */}
    </div>
  );
};

export default Chess;
