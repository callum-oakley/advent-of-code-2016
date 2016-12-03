/*
--- Day 3: Squares With Three Sides ---

Now that you can think clearly, you move deeper into the labyrinth of hallways and office furniture that makes up this part of Easter Bunny HQ. This must be a graphic design department; the walls are covered in specifications for triangles.

Or are they?

The design document gives the side lengths of each triangle it describes, but... 5 10 25? Some of these aren't triangles. You can't help but mark the impossible ones.

In a valid triangle, the sum of any two sides must be larger than the remaining side. For example, the "triangle" given above is impossible, because 5 + 10 is not larger than 25.

In your puzzle input, how many of the listed triangles are possible?

Your puzzle answer was 869.

--- Part Two ---

Now that you've helpfully marked up their design documents, it occurs to you that triangles are specified in groups of three vertically. Each set of three numbers in a column specifies a triangle. Rows are unrelated.

For example, given the following specification, numbers with the same hundreds digit would be part of the same triangle:

101 301 501
102 302 502
103 303 503
201 401 601
202 402 602
203 403 603
In your puzzle input, and instead reading by columns, how many of the listed triangles are possible?

Your puzzle answer was 1544.
*/

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
