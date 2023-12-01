"use client";
import React from "react";
import SquaresLine from "./SquaresLine";
import SquaresChess from "./SquaresChess";

const Board = () => {
  return (
    <section className="board">
      <SquaresLine />
      <div className="board-chess">
        <SquaresChess />
      </div>
    </section>
  );
};

export default Board;
