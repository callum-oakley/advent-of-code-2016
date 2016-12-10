class Screen {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pixels = [];
    for (let i = 0; i < width; i++) {
      this.pixels.push([]);
      for (let j = 0; j < height; j++) { this.pixels[i][j] = " "; }
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

  get displayed() {
    let display = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        display += this.pixels[j][i];
      }
      display += "\n";
    }
    return display;
  }
}

export function part1(input) {
  const screen = new Screen(50, 6);
  input.forEach(op => screen.process(op));
  return screen.litPixels;
}

export function part2(input) {
  const screen = new Screen(50, 6);
  input.forEach(op => screen.process(op));
  console.log(screen.displayed);
  return "See above."
}
