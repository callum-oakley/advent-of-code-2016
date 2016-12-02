function add(u, v) {
  return u.reduce((acc, _, i) => [...acc, u[i] + v[i]], []);
}

function toButton(keypad, p) {
  return (keypad.indexOf(p.toString()) + 1).toString(16);
}

function move(keypad) {
  return (p, m) => keypad.includes(add(p, m).toString()) ? add(p, m) : p;
}

function toMovement(instruction) {
  if (instruction === "U") { return [0, -1]; }
  if (instruction === "D") { return [0, +1]; }
  if (instruction === "L") { return [-1, 0]; }
  if (instruction === "R") { return [+1, 0]; }
}

function processLine(keypad) {
  return (acc, line) => {
    const p = line.split("").map(toMovement).reduce(move(keypad), acc.position);
    return {
      position: p,
      keyCode: acc.keyCode + toButton(keypad, p).toString()
    };
  }
}

export function part1(input) {
  const keypad = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ].map(x => x.toString());
  const initialState = { position: [1, 1], keyCode: [] };
  return input.reduce(processLine(keypad), initialState).keyCode;
}

export function part2(input) {
  const keypad = [
                    [2, 0],
            [1, 1], [2, 1], [3, 1],
    [0, 2], [1, 2], [2, 2], [3, 2], [4, 2],
            [1, 3], [2, 3], [3, 3],
                    [2, 4]
  ].map(x => x.toString());
  const initialState = { position: [0, 2], keyCode: [] };
  return input.reduce(processLine(keypad), initialState).keyCode;
}
