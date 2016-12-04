/*
--- Day 1: No Time for a Taxicab ---

Santa's sleigh uses a very high-precision clock to guide its movements, and the
clock's oscillator is regulated by stars. Unfortunately, the stars have been
stolen... by the Easter Bunny. To save Christmas, Santa needs you to retrieve
all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day
in the advent calendar; the second puzzle is unlocked when you complete the
first. Each puzzle grants one star. Good luck!

You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near",
unfortunately, is as close as you can get - the instructions on the Easter Bunny
Recruiting Document the Elves intercepted start here, and nobody had time to
work them out further.

The Document indicates that you should start at the given coordinates (where you
just landed) and face North. Then, follow the provided sequence: either turn
left (L) or right (R) 90 degrees, then walk forward the given number of blocks,
ending at a new intersection.

There's no time to follow such ridiculous instructions on foot, though, so you
take a moment and work out the destination. Given that you can only walk on the
street grid of the city, how far is the shortest path to the destination?

For example:

Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2
blocks away. R5, L5, R5, R3 leaves you 12 blocks away. How many blocks away is
Easter Bunny HQ?

Your puzzle answer was 252.

--- Part Two ---

Then, you notice the instructions continue on the back of the Recruiting
Document. Easter Bunny HQ is actually at the first location you visit twice.

For example, if your instructions are R8, R4, R4, R8, the first location you
visit twice is 4 blocks away, due East.

How many blocks away is the first location you visit twice?

Your puzzle answer was 143.
*/

function magnitude(v) {
  return v.map(Math.abs).reduce((x, y) => x + y);
}

function vectorSum(u, v) {
  return u.reduce((acc, _, i) => [...acc, u[i] + v[i]], []);
}

const North = [0, 1], East = [1, 0], South = [0, -1], West = [-1, 0];

function turnLeft(direction) {
  if (direction === North) { return West; }
  if (direction === West) { return South; }
  if (direction === South) { return East; }
  if (direction === East) { return North; }
}

function turnRight(direction) {
  if (direction === North) { return East; }
  if (direction === East) { return South; }
  if (direction === South) { return West; }
  if (direction === West) { return North; }
}

function turn(turnCommand, direction) {
  if (turnCommand === "L") { return turnLeft(direction); }
  if (turnCommand === "R") { return turnRight(direction); }
}

function step(state, command) {
  const turnCommand = command.slice(0, 1),
    steps = parseInt(command.slice(1)),
    direction = turn(turnCommand, state.direction);
  var position = [...state.position],
    visited = new Set(state.visited),
    firstVisitedTwice = state.firstVisitedTwice;
  for (let i = 0; i < steps; i++) {
    position = vectorSum(position, direction);
    if (visited.has(JSON.stringify(position)) && !firstVisitedTwice) {
      firstVisitedTwice = position;
    } else {
      /* We keep track of visited positions as strings because array equality
        is awkward. */
      visited.add(JSON.stringify(position));
    }
  }
  return {
    position: position,
    direction: direction,
    visited: visited,
    firstVisitedTwice: firstVisitedTwice
  };
}

const initialState = {
  position: [0, 0],
  direction: North,
  visited: new Set([JSON.stringify([0, 0])])
}

export function part1(input) {
  return magnitude(input.reduce(step, initialState).position);
}

export function part2(input) {
  return magnitude(input.reduce(step, initialState).firstVisitedTwice);
}
