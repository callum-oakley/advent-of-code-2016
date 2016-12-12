function isRegister(x) { return ["a", "b", "c", "d"].includes(x); }

function read(s, x) { return isRegister(x) ? s[x] : parseInt(x, 10); }

function executeCpy(s, x, y) { s[y] = read(s, x); }

function executeInc(s, x) { s[x]++; }

function executeDec(s, x) { s[x]--; }

function executeJnz(s, x, y) { if (read(s, x)) { s.head += read(s, y) - 1 }; }

function execute(state, line) {
  if (line.op === "cpy") { executeCpy(state, ...line.args); }
  if (line.op === "inc") { executeInc(state, ...line.args); }
  if (line.op === "dec") { executeDec(state, ...line.args); }
  if (line.op === "jnz") { executeJnz(state, ...line.args); }
  state.head++;
}

export function part1(input) {
  const state = { a: 0, b: 0, c: 0, d: 0, head: 0 };
  while (input[state.head]) { execute(state, input[state.head]); }
  return state.a;
}

export function part2(input) {}
