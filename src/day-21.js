function swap(w, x, y) {
  const [i, j] = [x, y].sort((x, y) => x - y);
  return w.slice(0, i) + w[j] + w.slice(i + 1, j) + w[i] + w.slice(j + 1);
}

function rotate(w, direction, x) {
  return w.split("").map((_, i) => {
    const j = (i + direction * x) % w.length;
    return j < 0 ? w[j + w.length] : w[j];
  }).join("");
}

function rotateBasedOn(w, x) {
  return x >= 4 ? rotate(w, -1, x + 2) : rotate(w, -1, x + 1);
}

function reverse(w, x, y) {
  const middle = w.slice(x, y + 1).split("").reverse().join("");
  return w.slice(0, x) + middle + w.slice(y + 1);
}

function move(w, x, y) {
  const letters = w.split(""), [letter] = letters.splice(x, 1);
  letters.splice(y, 0, letter);
  return letters.join("");
}

function scramble(word, { op, params }) {
  const indices = params.map(x => typeof x === "number" ? x : word.indexOf(x));
  if (op === "swap") { return swap(word, ...indices); }
  if (op === "rotate left") { return rotate(word, 1, ...indices); }
  if (op === "rotate right") { return rotate(word, -1, ...indices); }
  if (op === "rotate based on") { return rotateBasedOn(word, ...indices); }
  if (op === "reverse") { return reverse(word, ...indices); }
  if (op === "move") { return move(word, ...indices); }
}

function unscramble(word, { op, params }) {
  const indices = params.map(x => typeof x === "number" ? x : word.indexOf(x));
  if (op === "swap") { return swap(word, ...indices); }
  if (op === "rotate left") { return rotate(word, -1, ...indices); }
  if (op === "rotate right") { return rotate(word, 1, ...indices); }
  if (op === "rotate based on") { return rotateBasedOn(word, ...indices); }
  if (op === "reverse") { return reverse(word, ...indices); }
  if (op === "move") { return move(word, ...indices); }
}


export function part1(input) { return input.reduce(scramble, "abcdefgh"); }

export function part2(input) {}
