"use client";
import React from "react";
import SquaresLine from "./SquaresLine";
import SquaresChess from "./SquaresChess";

const Board = () => {
  return (
    <>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8,80px)",
          gridTemplateRows: "repeat(9,80px)",
          alignItems: "center",
          justifyContent: "center",
          border: "5px solid white",
          position: "relative",
        }}
        className="board"
      >
        <SquaresLine />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(9,80px)",
            gridTemplateRows: "repeat(10,80px)",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            top: "-5%",
            left: 0,
            zIndex: 999,
          }}
          className="board-chess"
        >
          <SquaresChess />
        </div>
      </section>
    </>
  );
};

export default Board;
