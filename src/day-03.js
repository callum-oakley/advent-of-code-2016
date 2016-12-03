function chunksOf(n, arr) {
  var chunks = [];
  for (let i = 0; i < arr.length; i += n) {
    chunks.push([...arr].splice(i, i + n));
  }
  return chunks;
}

function isPossible(triangle) {
  const [a, b, c] = [...triangle].sort((x, y) => x - y);
  return a + b > c;
}

function transpose([[a, b, c], [d, e, f], [g, h, i]]) {
  return [[a, d, g], [b, e, h], [c, f, i]];
}

function transform(input) {
  return chunksOf(3, input).map(transpose).reduce((s, t) => [...s, ...t]);
}

export function part1(input) {
  return input.filter(isPossible).length;
}

export function part2(input) {
  return transform(input).filter(isPossible).length;
}
