class Vector {
  constructor(x, y) { this.x = x; this.y = y; }

  get magnitude() { return Math.abs(this.x) + Math.abs(this.y); }

  scale(t) { return new Vector(this.x * t, this.y * t); }

  static add(u, v) { return new Vector(u.x + v.x, u.y + v.y); }
}

const North = new Vector(0, 1);
const East = new Vector(1, 0);
const South = new Vector(0, -1);
const West = new Vector(-1, 0);

const initialState = { position: new Vector(0, 0), direction: North }

function turnLeft(direction) {
  if (direction == North) { return West; }
  if (direction == West) { return South; }
  if (direction == South) { return East; }
  if (direction == East) { return North; }
}

function turnRight(direction) {
  if (direction == North) { return East; }
  if (direction == East) { return South; }
  if (direction == South) { return West; }
  if (direction == West) { return North; }
}

function turn(turnCommand, direction) {
  if (turnCommand == "L") { return turnLeft(direction); }
  if (turnCommand == "R") { return turnRight(direction); }
}

function step(state, command) {
  const turnCommand = command.slice(0, 1);
  const steps = parseInt(command.slice(1));
  const newDirection = turn(turnCommand, state.direction)
  return {
    position: Vector.add(state.position, newDirection.scale(steps)),
    direction: newDirection
  };
}

function solve(input) {
  return input.reduce(step, initialState).position.magnitude;
}

// ["L3", "R1", "L4", "L1", "L2", "R4", "L3", "L3", "R2", "R3", "L5", "R1", "R3", "L4", "L1", "L2", "R2", "R1", "L4", "L4", "R2", "L5", "R3", "R2", "R1", "L1", "L2", "R2", "R2", "L1", "L1", "R2", "R1", "L3", "L5", "R4", "L3", "R3", "R3", "L5", "L190", "L4", "R4", "R51", "L4", "R5", "R5", "R2", "L1", "L3", "R1", "R4", "L3", "R1", "R3", "L5", "L4", "R2", "R5", "R2", "L1", "L5", "L1", "L1", "R78", "L3", "R2", "L3", "R5", "L2", "R2", "R4", "L1", "L4", "R1", "R185", "R3", "L4", "L1", "L1", "L3", "R4", "L4", "L1", "R5", "L5", "L1", "R5", "L1", "R2", "L5", "L2", "R4", "R3", "L2", "R3", "R1", "L3", "L5", "L4", "R3", "L2", "L4", "L5", "L4", "R1", "L1", "R5", "L2", "R4", "R2", "R3", "L1", "L1", "L4", "L3", "R4", "L3", "L5", "R2", "L5", "L1", "L1", "R2", "R3", "L5", "L3", "L2", "L1", "L4", "R4", "R4", "L2", "R3", "R1", "L2", "R1", "L2", "L2", "R3", "R3", "L1", "R4", "L5", "L3", "R4", "R4", "R1", "L2", "L5", "L3", "R1", "R4", "L2", "R5", "R4", "R2", "L5", "L3", "R4", "R1", "L1", "R5", "L3", "R1", "R5", "L2", "R1", "L5", "L2", "R2", "L2", "L3", "R3", "R3", "R1"]
