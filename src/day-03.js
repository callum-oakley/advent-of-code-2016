function isPossible(triangle) {
  const [a, b, c] = [...triangle].sort((x, y) => x - y);
  return a + b > c;
}

function rotate([
  [a, b, c],
  [d, e, f],
  [g, h, i]
]) {
  return [
    [a, d, g],
    [b, e, h],
    [c, f, i]
  ];
}

function transform(input) {
  var rotated = [];
  for (let i = 0; i < input.length; i += 3) {
    const block = [...input].splice(i, i + 3);
    rotated = [...rotated, ...rotate(block)];
  }
  return rotated;
}

export function part1(input) {
  return input.filter(isPossible).length;
}

export function part2(input) {
  return transform(input).filter(isPossible).length;
}
