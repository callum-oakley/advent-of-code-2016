// `group([0, 1, 1, 0, 0, 0, 3])` returns `[[0], [1, 1], [0, 0, 0], [3]]`
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

// sort groups by length first, and then alphabetically
function compare(x, y) {
  if (y.length - x.length) {
    return y.length - x.length;
  } else {
    return x[0] > y[0] ? 1 : -1;
  }
}

function checksum(name) {
  const letters = name.split("").filter(x => x !== "-").sort(),
    rankedLetters = group(letters).sort(compare).map(x => x[0]);
  return rankedLetters.slice(0, 5).reduce((x, y) => x + y, "");
}

function isReal(room) {
  return checksum(room.name) === room.checksum;
}

export function part1(input) {
  return input.filter(isReal).map(x => x.id).reduce((x, y) => x + y);
}

export function part2(input) {
}
