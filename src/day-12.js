function isRegister(x) { return ["a", "b", "c", "d"].includes(x); }

function read(s, x) { return isRegister(x) ? s[x] : parseInt(x, 10); }

function execute(s, op, x, y) {
  if (op === "cpy") { s[y] = read(s, x); }
  if (op === "inc") { s[x]++; }
  if (op === "dec") { s[x]--; }
  if (op === "jnz") { if (read(s, x)) { s.head += read(s, y) - 1 }; }
  s.head++;
}

export function part1(input) {
  const state = { a: 0, b: 0, c: 0, d: 0, head: 0 };
  while (input[state.head]) { execute(state, ...input[state.head]); }
  return state.a;
}

export function part2(input) {
  const state = { a: 0, b: 0, c: 1, d: 0, head: 0 };
  while (input[state.head]) { execute(state, ...input[state.head]); }
  return state.a;
}
