function isPossible(triangle) {
  const [a, b, c] = [...triangle].sort((x, y) => x - y);
  return a + b > c;
}

export function part1(input) {
  return input.filter(isPossible).length;
}

export function part2(input) {

}
