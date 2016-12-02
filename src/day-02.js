function add(u, v) {
  return u.reduce((acc, _, i) => [...acc, u[i] + v[i]], []);
}

function toButton(position) {
  return position[0] + 3 * position[1] + 1
}

function isOnKeypad(position) {
  const x = position[0];
  const y = position[1];
  return x >= 0 && x < 3 && y >= 0 && y < 3;
}

function move(position, movement) {
  const newPosition = add(position, movement);
  return isOnKeypad(newPosition) ? newPosition : position;
}

function toMovement(instruction) {
  if (instruction === "U") { return [0, -1]; }
  if (instruction === "D") { return [0, +1]; }
  if (instruction === "L") { return [-1, 0]; }
  if (instruction === "R") { return [+1, 0]; }
}

function processLine(acc, line) {
  const position = line.split("").map(toMovement).reduce(move, acc.position);
  return {
    position: position,
    keyCode: acc.keyCode + toButton(position).toString()
  }
}

export function part1(input) {
  return input.reduce(processLine, { position: [1, 1], keyCode: [] }).keyCode;
}
