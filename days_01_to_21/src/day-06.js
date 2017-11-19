/*
--- Day 6: Signals and Noise ---

Something is jamming your communications with Santa. Fortunately, your signal is
only partially jammed, and protocol in situations like this is to switch to a
simple repetition code to get the message through.

In this model, the same message is sent repeatedly. You've recorded the
repeating message signal (your puzzle input), but the data seems quite corrupted -
almost too badly to recover. Almost.

All you need to do is figure out which character is most frequent for each
position. For example, suppose you had recorded the following messages:

eedadn drvtee eandsr raavrd atevrs tsrnev sdttsa rasrtv nssdts ntnada svetve
tesnvt vntsnd vrdear dvrsen enarar The most common character in the first column
is e; in the second, a; in the third, s, and so on. Combining these characters
returns the error-corrected message, easter.

Given the recording in your puzzle input, what is the error-corrected version of
the message being sent?

Your puzzle answer was zcreqgiv.

--- Part Two ---

Of course, that would be the message - if you hadn't agreed to use a modified
repetition code instead.

In this modified code, the sender instead transmits what looks like random data,
but for each character, the character they actually want to send is slightly
less likely than the others. Even after signal-jamming noise, you can look at
the letter distributions in each column and choose the least common letter to
reconstruct the original message.

In the above example, the least common character in the first column is a; in
the second, d, and so on. Repeating this process for the remaining characters
produces the original message, advent.

Given the recording in your puzzle input and this new decoding methodology, what
is the original message that Santa is trying to send?

Your puzzle answer was pljvorrk.
*/

/* Takes an array and returns an array of arrays, where adjacent equal elements
  are grouped together. For example, `group([0, 1, 1, 1, 0, 0])` returns `[[0],
  [1, 1, 1], [0, 0]]`. */
function group(arr) {
  let groups = [], i = 0;
  while (i < arr.length) {
    let group = [];
    do {
      group.push(arr[i++]);
    } while (arr[i] === group[0])
    groups.push(group);
  }
  return groups;
};

// Transpose an array of arrays (treated as a matrix).
function transpose(arr) {
  let transposed = [];
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
