function add(u, v) {
  return u.reduce((acc, _, i) => [...acc, u[i] + v[i]], []);
}

function toButton(p) {
  return p[0] + 3 * p[1] + 1
}

function isOnKeypad(p) {
  return p[0] >= 0 && p[0] < 3 && p[1] >= 0 && p[1] < 3;
}

function move(p, m) {
  return isOnKeypad(add(p, m)) ? add(p, m) : p;
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
