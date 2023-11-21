"use client";
import React from "react";
import DisplayBoard from "./BoardControll";

const Board = () => {
  const displayBoard = new DisplayBoard();
  displayBoard.fillValue();
  const renderGrid = () => {
    return displayBoard.boardLine.map((ele) => {
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
  const renderGridChess = () => {
    return displayBoard.chessBoard.map((ele, i) => {
      return ele.map((e, j) => {
        return (
          <button
            style={{
              border: "none",
              color: "red",
            }}
            key={j}
            onClick={() => {
              console.log([i, j]);
            }}
          >
            {e}
          </button>
        );
      });
    });
  };

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
        {renderGrid()}
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
          {renderGridChess()}
        </div>
      </section>
    </>
  );
};

export default Board;
