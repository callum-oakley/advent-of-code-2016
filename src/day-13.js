function is([x0, y0], [x1, y1]) { return x0 === x1 && y0 === y1; }

class Maze {
  constructor(faveNum, start) {
    this.faveNum = faveNum;
    // A two dimensional array of booleans indicating if a cubicle is a wall.
    this.cubicles = [];
    this.hasSeen(start);
  }

  hasSeen([x, y]) {
    if (!this.cubicles[x]) { this.cubicles[x] = []; }
    if (this.cubicles[x][y] === undefined) {
      this.cubicles[x][y] =
        (x * x + 3 * x + 2 * x * y + y + y * y + this.faveNum)
        .toString(2).split("").filter(c => c === "1").length % 2 === 1;
      return false;
    }
    return true;
  }

  isWall([x, y]) { return this.cubicles[x][y]; }

  newlyReachable([x, y]) {
    const potential = [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]];
    return potential.filter(([x, y]) => x >= 0 && y >= 0)
      .filter(c => !this.hasSeen(c) && !this.isWall(c));
  }
}

function distance(faveNum, start, end) {
  let boundary = [start], steps = 0, maze = new Maze(faveNum, start);
  while (!boundary.some(c => is(end, c))) {
    boundary = boundary.map(c => maze.newlyReachable(c))
      .reduce((x, y) => [...x, ...y]);
    steps++;
  }
  return steps;
}

export function part1(input) {
  return distance(input, [1, 1], [31, 39]);
}

export function part2(input) {}
