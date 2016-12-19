class Elves {
  constructor(n) {
    for (let position = 1; position <= n; position++) {
      this[position] = { presents: 1, left: position % n + 1 };
    }
    this.currentPosition = 1;
    this.size = n;
  }

  stealToTheLeft(position) {
    const elf = this[this.currentPosition], nextElf = this[elf.left];
    elf.presents += nextElf.presents;
    elf.left = nextElf.left;
    this.currentPosition = elf.left;
    this.size--;
  }

  get currentElf() {
    return this[this.currentPosition];
  }
}

export function part1(input) {
  const elves = new Elves(input);
  while (elves.size > 1) { elves.stealToTheLeft() };
  return elves.currentPosition;
}

export function part2(input) {}
