import { Direction } from "../models/Chess/chess";

export const directionType: Direction = {
  type: { 1: "straight", 2: "L", 3: "cross" },
  direct: {
    1: "up",
    2: "down",
    3: "left",
    4: "right",
  },
};
