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

function part1(input) {
  return magnitude(input.reduce(step, initialState).position);
}

function part2(input) {
  return magnitude(input.reduce(step, initialState).firstVisitedTwice);
}

// ["L3", "R1", "L4", "L1", "L2", "R4", "L3", "L3", "R2", "R3", "L5", "R1", "R3", "L4", "L1", "L2", "R2", "R1", "L4", "L4", "R2", "L5", "R3", "R2", "R1", "L1", "L2", "R2", "R2", "L1", "L1", "R2", "R1", "L3", "L5", "R4", "L3", "R3", "R3", "L5", "L190", "L4", "R4", "R51", "L4", "R5", "R5", "R2", "L1", "L3", "R1", "R4", "L3", "R1", "R3", "L5", "L4", "R2", "R5", "R2", "L1", "L5", "L1", "L1", "R78", "L3", "R2", "L3", "R5", "L2", "R2", "R4", "L1", "L4", "R1", "R185", "R3", "L4", "L1", "L1", "L3", "R4", "L4", "L1", "R5", "L5", "L1", "R5", "L1", "R2", "L5", "L2", "R4", "R3", "L2", "R3", "R1", "L3", "L5", "L4", "R3", "L2", "L4", "L5", "L4", "R1", "L1", "R5", "L2", "R4", "R2", "R3", "L1", "L1", "L4", "L3", "R4", "L3", "L5", "R2", "L5", "L1", "L1", "R2", "R3", "L5", "L3", "L2", "L1", "L4", "R4", "R4", "L2", "R3", "R1", "L2", "R1", "L2", "L2", "R3", "R3", "L1", "R4", "L5", "L3", "R4", "R4", "R1", "L2", "L5", "L3", "R1", "R4", "L2", "R5", "R4", "R2", "L5", "L3", "R4", "R1", "L1", "R5", "L3", "R1", "R5", "L2", "R1", "L5", "L2", "R2", "L2", "L3", "R3", "R3", "R1"]
