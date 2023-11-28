import { configureStore } from "@reduxjs/toolkit";
import { manageBoardsReducer } from "./board/slice";

export const store = configureStore({
  reducer: {
    board: manageBoardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
