"use client";
import React from "react";
import Board from "./../shared/components/Board/Board";
import { Provider } from "react-redux";
import { store } from "../shared/store";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <Provider store={store}>
        <Board />
      </Provider>
    </main>
  );
}
