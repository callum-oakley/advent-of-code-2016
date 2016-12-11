function compare(x, y) {
  if (x.element + x.device < y.element + y.device) { return -1; }
  if (x.element + x.device > y.element + y.device) { return 1; }
  return 0;
}

class StateTracker {
  constructor(states) {
    this.traversed = new Set();
    states.forEach(s => this.seen(s));
  }

  seen(state) {
    const stateCopy = JSON.parse(JSON.stringify(state));
    for (let i = 1; i <= 4; i++) { stateCopy[`floor ${i}`].sort(compare); }
    if (this.traversed.has(JSON.stringify(stateCopy))) { return true; }
    this.traversed.add(JSON.stringify(stateCopy));
    return false;
  }
}

function hasFriedMicrochips(floor) {
  return floor.some(m =>
    m.device === "microchip" &&
      !floor.some(g => g.device === "generator" && g.element === m.element) &&
      floor.some(g => g.device === "generator" && g.element !== m.element));
}

function isGood(state) {
  for (let i = 1; i <= 4; i++) {
    if (hasFriedMicrochips(state[`floor ${i}`])) { return false; }
  }
  return true;
}

function isComplete(state) {
  for (let i = 1; i <= 3; i++) {
    if (state[`floor ${i}`].length) { return false; }
  }
  return true;
}

function possibleSelections(state, i = 0) {
  const floor = state[state.elevator];
  if (i === floor.length) { return [[]]; }
  const rest = possibleSelections(state, i + 1);
  return [...rest, ...rest.map(s => [floor[i], ...s])];
}

function is(x, y) {
  return x.element === y.element && x.device === y.device;
}

function move(state, selection, newFloor) {
  const newState = { ...JSON.parse(JSON.stringify(state)), elevator: newFloor };
  selection.forEach(s => {
    const i = newState[state.elevator].findIndex(x => is(x, s)),
      [toMove] = newState[state.elevator].splice(i, 1);
    newState[newFloor].push(toMove);
  });
  return newState;
}

function floorUp(floor) {
  return `floor ${parseInt(floor.split(" ")[1]) + 1}`;
}

function floorDown(floor) {
  return `floor ${parseInt(floor.split(" ")[1]) - 1}`;
}

function possibleSteps(state) {
  const selections = possibleSelections(state)
    .filter(s => s.length == 1 || s.length == 2);
  if (state.elevator === "floor 4") {
    return selections.map(s => move(state, s, floorDown(state.elevator)));
  } else if (state.elevator === "floor 1") {
    return selections.map(s => move(state, s, floorUp(state.elevator)));
  }
  return [
    ...selections.map(s => move(state, s, floorUp(state.elevator))),
    ...selections.map(s => move(state, s, floorDown(state.elevator)))
  ];
}

export function part1(input) {
  let states = [input], steps = 0;
  const tracker = new StateTracker(states);
  while (!states.some(isComplete)) {
    states = states.map(possibleSteps).reduce((x, y) => [...x, ...y])
      .filter(s => isGood(s) && !tracker.seen(s));
    steps++;
    console.log(`At step ${steps} with ${states.length} states...`);
  }
  return steps;
}

export function part2(input) { }
