export default class DisplayBoard {
  rows: number = 10;
  columns: number = 9;
  chessBoard: string[][] = new Array(this.rows)
    .fill([])
    .map(() => new Array(this.columns).fill(" "));
  boardLine: string[][] = new Array(this.rows - 1)
    .fill([])
    .map(() => new Array(this.columns - 1).fill(" "));

  initialPositions: string[] = [
    "rcnhmnhcr", // red side
    "         ",
    " x     x ", // empty spaces
    "p p p p p", // red soldiers
    "         ",
    "         ",
    "P P P P P", // blue soldiers
    " x     x ",
    "         ",
    "RCNHMHNCR", // blue side
  ];

  fillValue() {
    for (let i = 0; i < this.rows; i++) {
      const listPositions = this.initialPositions[i].split("");
      for (let j = 0; j < this.columns; j++) {
        this.chessBoard[i][j] = listPositions[j];
      }
    }
  }
}
