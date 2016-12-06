/* Takes an array and returns an array of arrays, where adjacent equal elements
  are grouped together. For example, `group([0, 1, 1, 1, 0, 0])` returns `[[0],
  [1, 1, 1], [0, 0]]`. */
function group(arr) {
  var groups = [], i = 0;
  while (i < arr.length) {
    var group = [];
    do {
      group.push(arr[i++]);
    } while (arr[i] === group[0])
    groups.push(group);
  }
  return groups;
};

// Transpose an array of arrays (treated as a matrix).
function transpose(arr) {
  var transposed = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (!transposed[j]) { transposed[j] = []; }
      transposed[j][i] = arr[i][j];
    }
  }
  return transposed;
}

function mostFrequent(arr) {
  return group(arr.sort()).sort((x, y) => y.length - x.length)[0][0];
}

function leastFrequent(arr) {
  return group(arr.sort()).sort((x, y) => x.length - y.length)[0][0];
}

export function part1(input) {
  return transpose(input).map(mostFrequent).reduce((x, y) => x + y);
}

export function part2(input) {
  return transpose(input).map(leastFrequent).reduce((x, y) => x + y);
}
