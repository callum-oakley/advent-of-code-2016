class Screen {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pixels = [];
    for (let i = 0; i < width; i++) {
      this.pixels.push([]);
      for (let j = 0; j < height; j++) { this.pixels[i][j] = "."; }
    }
  }

  process({ operation, ...args }) {
    if (operation === "rect") { this.rect(args); }
    if (operation === "rotate row") { this.rotateRow(args); }
    if (operation === "rotate column") { this.rotateColumn(args); }
  }

  rect({ width, height }) {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) { this.pixels[i][j] = "#"; }
    }
  }

  rotateRow({ row, distance }) {
    const oldRow = [];
    for (let i = 0; i < this.width; i++) {
      oldRow.push(this.pixels[i][row]);
      const rotatedIndex = (i - distance + this.width) % this.width;
      this.pixels[i][row] =
        oldRow[rotatedIndex] || this.pixels[rotatedIndex][row];
    }
  }

  rotateColumn({ column, distance }) {
    const oldColumn = [];
    for (let i = 0; i < this.height; i++) {
      oldColumn.push(this.pixels[column][i]);
      const rotatedIndex = (i - distance + this.height) % this.height;
      this.pixels[column][i] =
        oldColumn[rotatedIndex] || this.pixels[column][rotatedIndex];
    }
  }

  get litPixels() {
    return this.pixels
      .reduce((x, y) => [...x, ...y]).filter(p => p === "#").length;
  }
}

export function part1(input) {
  const screen = new Screen(50, 6);
  input.forEach(op => screen.process(op));
  return screen.litPixels;
  // const screen = new Screen(7, 3);
  // screen.rect({ width: 3, height: 2 });
  // screen.rotateColumn({ column: 1, distance: 1 });
  // screen.rotateRow({ row: 0, distance: 4 });
  // console.log(screen.pixels);
  // screen.rotateColumn({ column: 1, distance: 1 });
}

export function part2(input) {

}
