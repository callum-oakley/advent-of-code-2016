function magnitude(v) {
  return v.map(Math.abs).reduce((x, y) => x + y, 0);
};

function add(u, v) {
  var u = [...u];
  var v = [...v];
  var sum = [];
  while (u.length > 0 && v.length > 0) {
    sum.unshift(u.pop() + v.pop());
  }
  return sum;
}

const North = [0, 1];
const East = [1, 0];
const South = [0, -1];
const West = [-1, 0];
const Zero = [0, 0];

const initialState = {
  position: Zero,
  direction: North,
  visited: new Set([Zero.toString()])
}

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
  if (turnCommand == "L") { return turnLeft(direction); }
  if (turnCommand == "R") { return turnRight(direction); }
}

function step(state, command) {
  const turnCommand = command.slice(0, 1);
  const steps = parseInt(command.slice(1));
  const direction = turn(turnCommand, state.direction);
  var position = [...state.position];
  var visited = new Set(state.visited);
  var firstVisitedTwice = state.firstVisitedTwice;
  for (let i = 0; i < steps; i++) {
    position = add(position, direction);
    if (visited.has(position.toString()) && !firstVisitedTwice) {
      firstVisitedTwice = position;
    } else {
      visited.add(position.toString());
    }
  }
  return {
    position: position,
    direction: direction,
    visited: visited,
    firstVisitedTwice: firstVisitedTwice
  };
}

export function part1(input) {
  return magnitude(input.reduce(step, initialState).position);
}

export function part2(input) {
  return magnitude(input.reduce(step, initialState).firstVisitedTwice);
}
