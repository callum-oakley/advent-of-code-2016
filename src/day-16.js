function dragon(data) {
  const rotated = data.split("").map(x => x === "0" ? "1" : "0")
    .reduce((x, y) => y + x);
  return `${data}0${rotated}`
}

function fillDisk(diskLength, initialState) {
  let data = initialState;
  while (data.length < diskLength) { data = dragon(data); }
  return data.slice(0, diskLength);
}

function checksum(data) {
  let check = data;
  while (check.length % 2 === 0) {
    let newCheck = "";
    for (let i = 0; i < check.length - 1; i += 2) {
      newCheck += check[i] === check[i + 1] ? "1" : "0";
    }
    check = newCheck;
  }
  return check;
}

export function part1(input) {
  const data = fillDisk(272, input);
  return checksum(data);
}

export function part2(input) {}
