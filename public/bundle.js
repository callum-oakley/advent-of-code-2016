(function () {
'use strict';

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function magnitude(v) {
  return v.map(Math.abs).reduce(function (x, y) {
    return x + y;
  }, 0);
}

function add(u, v) {
  var u = [].concat(u);
  var v = [].concat(v);
  var sum = [];
  while (u.length > 0 && v.length > 0) {
    sum.unshift(u.pop() + v.pop());
  }
  return sum;
}

var North = [0, 1];
var East = [1, 0];
var South = [0, -1];
var West = [-1, 0];
var Zero = [0, 0];

var initialState = {
  position: Zero,
  direction: North,
  visited: new Set([Zero.toString()])
};

function turnLeft(direction) {
  if (direction === North) {
    return West;
  }
  if (direction === West) {
    return South;
  }
  if (direction === South) {
    return East;
  }
  if (direction === East) {
    return North;
  }
}

function turnRight(direction) {
  if (direction === North) {
    return East;
  }
  if (direction === East) {
    return South;
  }
  if (direction === South) {
    return West;
  }
  if (direction === West) {
    return North;
  }
}

function turn(turnCommand, direction) {
  if (turnCommand == "L") {
    return turnLeft(direction);
  }
  if (turnCommand == "R") {
    return turnRight(direction);
  }
}

function step(state, command) {
  var turnCommand = command.slice(0, 1);
  var steps = parseInt(command.slice(1));
  var direction = turn(turnCommand, state.direction);
  var position = [].concat(toConsumableArray(state.position));
  var visited = new Set(state.visited);
  var firstVisitedTwice = state.firstVisitedTwice;
  for (var i = 0; i < steps; i++) {
    position = add(position, direction);
    if (visited.has(position.toString()) && !firstVisitedTwice) {
      firstVisitedTwice = position;
    } else {
      visited.add(position.toString());
    }
  }
  return {
    position: position,
    direction: direction,
    visited: visited,
    firstVisitedTwice: firstVisitedTwice
  };
}

function part1(input) {
  return magnitude(input.reduce(step, initialState).position);
}

function part2(input) {
  return magnitude(input.reduce(step, initialState).firstVisitedTwice);
}

var input01 = ["L3", "R1", "L4", "L1", "L2", "R4", "L3", "L3", "R2", "R3", "L5", "R1", "R3", "L4", "L1", "L2", "R2", "R1", "L4", "L4", "R2", "L5", "R3", "R2", "R1", "L1", "L2", "R2", "R2", "L1", "L1", "R2", "R1", "L3", "L5", "R4", "L3", "R3", "R3", "L5", "L190", "L4", "R4", "R51", "L4", "R5", "R5", "R2", "L1", "L3", "R1", "R4", "L3", "R1", "R3", "L5", "L4", "R2", "R5", "R2", "L1", "L5", "L1", "L1", "R78", "L3", "R2", "L3", "R5", "L2", "R2", "R4", "L1", "L4", "R1", "R185", "R3", "L4", "L1", "L1", "L3", "R4", "L4", "L1", "R5", "L5", "L1", "R5", "L1", "R2", "L5", "L2", "R4", "R3", "L2", "R3", "R1", "L3", "L5", "L4", "R3", "L2", "L4", "L5", "L4", "R1", "L1", "R5", "L2", "R4", "R2", "R3", "L1", "L1", "L4", "L3", "R4", "L3", "L5", "R2", "L5", "L1", "L1", "R2", "R3", "L5", "L3", "L2", "L1", "L4", "R4", "R4", "L2", "R3", "R1", "L2", "R1", "L2", "L2", "R3", "R3", "L1", "R4", "L5", "L3", "R4", "R4", "R1", "L2", "L5", "L3", "R1", "R4", "L2", "R5", "R4", "R2", "L5", "L3", "R4", "R1", "L1", "R5", "L3", "R1", "R5", "L2", "R1", "L5", "L2", "R2", "L2", "L3", "R3", "R3", "R1"]
;

console.log("day 01 - part 1: " + part1(input01));
console.log("       - part 2: " + part2(input01));

}());
