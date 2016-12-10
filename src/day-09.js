function parseMarker(buffer) {
  return buffer.slice(1).split("x").map(x => parseInt(x, 10));
}

function decompress(input) {
  let buffer = "", output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ")") {
      const [jump, reps] = parseMarker(buffer);
      buffer = "";
      output += input.slice(i + 1, i + jump + 1).repeat(reps);
      i += jump;
    } else if (buffer || input[i] === "(") {
      buffer += input[i];
    } else {
      output += input[i];
    }
  }
  return output;
}

export function part1(input) {
  return decompress(input).length;
}

export function part2(input) {}
