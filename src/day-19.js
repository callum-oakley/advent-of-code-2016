/*
--- Day 19: An Elephant Named Joseph ---

The Elves contact you over a highly secure emergency channel. Back at the North
Pole, the Elves are busy misunderstanding White Elephant parties.

Each Elf brings a present. They all sit in a circle, numbered starting with
position 1. Then, starting with the first Elf, they take turns stealing all the
presents from the Elf to their left. An Elf with no presents is removed from the
circle and does not take turns.

For example, with five Elves (numbered 1 to 5):

  1 5   2 4 3 Elf 1 takes Elf 2's present. Elf 2 has no presents and is skipped.
  Elf 3 takes Elf 4's present. Elf 4 has no presents and is also skipped. Elf 5
  takes Elf 1's two presents. Neither Elf 1 nor Elf 2 have any presents, so both
  are skipped. Elf 3 takes Elf 5's three presents. So, with five Elves, the Elf
  that sits starting in position 3 gets all the presents.

With the number of Elves given in your puzzle input, which Elf gets all the
presents?

Your puzzle answer was 1841611.

--- Part Two ---

Realizing the folly of their present-exchange rules, the Elves agree to instead
steal presents from the Elf directly across the circle. If two Elves are across
the circle, the one on the left (from the perspective of the stealer) is stolen
from. The other rules remain unchanged: Elves with no presents are removed from
the circle entirely, and the other elves move in slightly to keep the circle
evenly spaced.

For example, with five Elves (again numbered 1 to 5):

The Elves sit in a circle; Elf 1 goes first: 1 5   2 4 3 Elves 3 and 4 are
across the circle; Elf 3's present is stolen, being the one to the left. Elf 3
leaves the circle, and the rest of the Elves move in: 1           1 5   2  -->
5   2 4 -          4 Elf 2 steals from the Elf directly across the circle, Elf
5: 1         1  -   2  -->     2 4         4  Next is Elf 4 who, choosing
between Elves 1 and 2, steals from Elf 1: -          2   2  --> 4          4
Finally, Elf 2 steals from Elf 4: 2 -->  2   - So, with five Elves, the Elf that
sits starting in position 2 gets all the presents.

With the number of Elves given in your puzzle input, which Elf now gets all the
presents?

Your puzzle answer was 1423634.

Both parts of this puzzle are complete! They provide two gold stars: **

At this point, you should return to your advent calendar and try another puzzle.

Your puzzle input was 3017957.
*/

class Elves {
  constructor(n) {
    for (let i = 1; i <= n; i++) { this[i] = { id: i }; }
    for (let i = 1; i <= n; i++) { this[i].left = this[i % n + 1]; }
    this.size = n;
    this.top = this[1];
    this.bottom = this[(Math.floor(this.size / 2) - 1) % this.size + 1];
  }

  /* `rightOfVictim` is the elf to the right of the actual victim, we take this
    rather than the actual victim since we need access to both and it is easier
    to move left than right. */
  stealFrom(rightOfVictim) {
    const actualVictim = rightOfVictim.left;
    // Remove the actual victim from the table by orphaning them.
    rightOfVictim.left = actualVictim.left;
    this.size--;
    this.top = this.top.left;
    if (this.size % 2 === 0) { this.bottom = this.bottom.left; }
  }

  stealToTheLeft() { this.stealFrom(this.top.left, this.top); }

  stealAcross() { this.stealFrom(this.bottom.left, this.bottom); }
}

export function part1(input) {
  const elves = new Elves(input);
  while (elves.size > 1) { elves.stealToTheLeft(); };
  return elves.top.id;
}

export function part2(input) {
  const elves = new Elves(input);
  while (elves.size > 1) { elves.stealAcross(); };
  return elves.top.id;
}
