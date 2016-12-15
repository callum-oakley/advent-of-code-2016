(function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
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











var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
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

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/*
--- Day 1: No Time for a Taxicab ---

Santa's sleigh uses a very high-precision clock to guide its movements, and the
clock's oscillator is regulated by stars. Unfortunately, the stars have been
stolen... by the Easter Bunny. To save Christmas, Santa needs you to retrieve
all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day
in the advent calendar; the second puzzle is unlocked when you complete the
first. Each puzzle grants one star. Good luck!

You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near",
unfortunately, is as close as you can get - the instructions on the Easter Bunny
Recruiting Document the Elves intercepted start here, and nobody had time to
work them out further.

The Document indicates that you should start at the given coordinates (where you
just landed) and face North. Then, follow the provided sequence: either turn
left (L) or right (R) 90 degrees, then walk forward the given number of blocks,
ending at a new intersection.

There's no time to follow such ridiculous instructions on foot, though, so you
take a moment and work out the destination. Given that you can only walk on the
street grid of the city, how far is the shortest path to the destination?

For example:

Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2
blocks away. R5, L5, R5, R3 leaves you 12 blocks away. How many blocks away is
Easter Bunny HQ?

Your puzzle answer was 252.

--- Part Two ---

Then, you notice the instructions continue on the back of the Recruiting
Document. Easter Bunny HQ is actually at the first location you visit twice.

For example, if your instructions are R8, R4, R4, R8, the first location you
visit twice is 4 blocks away, due East.

How many blocks away is the first location you visit twice?

Your puzzle answer was 143.
*/

function magnitude(v) {
  return v.map(Math.abs).reduce(function (x, y) {
    return x + y;
  });
}

function vectorSum(u, v) {
  return u.reduce(function (acc, _, i) {
    return [].concat(toConsumableArray(acc), [u[i] + v[i]]);
  }, []);
}

var North = [0, 1];
var East = [1, 0];
var South = [0, -1];
var West = [-1, 0];

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
  if (turnCommand === "L") {
    return turnLeft(direction);
  }
  if (turnCommand === "R") {
    return turnRight(direction);
  }
}

function step(state, command) {
  var turnCommand = command.slice(0, 1),
      steps = parseInt(command.slice(1)),
      direction = turn(turnCommand, state.direction);
  var position = [].concat(toConsumableArray(state.position)),
      visited = new Set(state.visited),
      firstVisitedTwice = state.firstVisitedTwice;
  for (var i = 0; i < steps; i++) {
    position = vectorSum(position, direction);
    if (visited.has(JSON.stringify(position)) && !firstVisitedTwice) {
      firstVisitedTwice = position;
    } else {
      /* We keep track of visited positions as strings because array equality
        is awkward. */
      visited.add(JSON.stringify(position));
    }
  }
  return {
    position: position,
    direction: direction,
    visited: visited,
    firstVisitedTwice: firstVisitedTwice
  };
}

var initialState = {
  position: [0, 0],
  direction: North,
  visited: new Set([JSON.stringify([0, 0])])
};

function part1(input) {
  return magnitude(input.reduce(step, initialState).position);
}

function part2(input) {
  return magnitude(input.reduce(step, initialState).firstVisitedTwice);
}

var input01 = ["L3", "R1", "L4", "L1", "L2", "R4", "L3", "L3", "R2", "R3", "L5", "R1", "R3", "L4", "L1", "L2", "R2", "R1", "L4", "L4", "R2", "L5", "R3", "R2", "R1", "L1", "L2", "R2", "R2", "L1", "L1", "R2", "R1", "L3", "L5", "R4", "L3", "R3", "R3", "L5", "L190", "L4", "R4", "R51", "L4", "R5", "R5", "R2", "L1", "L3", "R1", "R4", "L3", "R1", "R3", "L5", "L4", "R2", "R5", "R2", "L1", "L5", "L1", "L1", "R78", "L3", "R2", "L3", "R5", "L2", "R2", "R4", "L1", "L4", "R1", "R185", "R3", "L4", "L1", "L1", "L3", "R4", "L4", "L1", "R5", "L5", "L1", "R5", "L1", "R2", "L5", "L2", "R4", "R3", "L2", "R3", "R1", "L3", "L5", "L4", "R3", "L2", "L4", "L5", "L4", "R1", "L1", "R5", "L2", "R4", "R2", "R3", "L1", "L1", "L4", "L3", "R4", "L3", "L5", "R2", "L5", "L1", "L1", "R2", "R3", "L5", "L3", "L2", "L1", "L4", "R4", "R4", "L2", "R3", "R1", "L2", "R1", "L2", "L2", "R3", "R3", "L1", "R4", "L5", "L3", "R4", "R4", "R1", "L2", "L5", "L3", "R1", "R4", "L2", "R5", "R4", "R2", "L5", "L3", "R4", "R1", "L1", "R5", "L3", "R1", "R5", "L2", "R1", "L5", "L2", "R2", "L2", "L3", "R3", "R3", "R1"]
;

/*
--- Day 2: Bathroom Security ---

You arrive at Easter Bunny Headquarters under cover of darkness. However, you
left in such a rush that you forgot to use the bathroom! Fancy office buildings
like this one usually have keypad locks on their bathrooms, so you search the
front desk for the code.

"In order to improve security," the document you find says, "bathroom codes will
no longer be written down. Instead, please memorize and follow the procedure
below to access the bathrooms."

The document goes on to explain that each button to be pressed can be found by
starting on the previous button and moving to adjacent buttons on the keypad: U
moves up, D moves down, L moves left, and R moves right. Each line of
instructions corresponds to one button, starting at the previous button (or, for
the first line, the "5" button); press whatever button you're on at the end of
each line. If a move doesn't lead to a button, ignore it.

You can't hold it much longer, so you decide to figure out the code as you walk
to the bathroom. You picture a keypad like this:

1 2 3 4 5 6 7 8 9 Suppose your instructions are:

ULL RRDDD LURDL UUUUD You start at "5" and move up (to "2"), left (to "1"), and
left (you can't, and stay on "1"), so the first button is 1. Starting from the
previous button ("1"), you move right twice (to "3") and then down three times
(stopping at "9" after two moves and ignoring the third), ending up with 9.
Continuing from "9", you move left, up, right, down, and left, ending with 8.
Finally, you move up four times (stopping at "2"), then down once, ending with
5. So, in this example, the bathroom code is 1985.

Your puzzle input is the instructions from the document you found at the front
desk. What is the bathroom code?

Your puzzle answer was 78985.

--- Part Two ---

You finally arrive at the bathroom (it's a several minute walk from the lobby so
visitors can behold the many fancy conference rooms and water coolers on this
floor) and go to punch in the code. Much to your bladder's dismay, the keypad is
not at all like you imagined it. Instead, you are confronted with the result of
hundreds of man-hours of bathroom-keypad-design meetings:

    1 2 3 4 5 6 7 8 9 A B C D You still start at "5" and stop when you're at an
    edge, but given the same instructions as above, the outcome is very
    different:

You start at "5" and don't move at all (up and left are both edges), ending at
5. Continuing from "5", you move right twice and down three times (through "6",
"7", "B", "D", "D"), ending at D. Then, from "D", you move five more times
(through "D", "B", "C", "C", "B"), ending at B. Finally, after five more moves,
you end at 3. So, given the actual keypad layout, the code would be 5DB3.

Using the same instructions in your puzzle input, what is the correct bathroom
code?

Your puzzle answer was 57DD8.
*/

function vectorSum$1(u, v) {
  return u.reduce(function (acc, _, i) {
    return [].concat(toConsumableArray(acc), [u[i] + v[i]]);
  }, []);
}

function toButton(keypad, p) {
  // `toString(36)` so that the 10th index gives us "a", 11th gives us "b", etc.
  return (keypad.indexOf(JSON.stringify(p)) + 1).toString(36);
}

function move(keypad) {
  return function (p, m) {
    return keypad.includes(JSON.stringify(vectorSum$1(p, m))) ? vectorSum$1(p, m) : p;
  };
}

function toMovement(instruction) {
  if (instruction === "U") {
    return [0, -1];
  }
  if (instruction === "D") {
    return [0, 1];
  }
  if (instruction === "L") {
    return [-1, 0];
  }
  if (instruction === "R") {
    return [1, 0];
  }
}

function processLine(keypad) {
  return function (acc, line) {
    var p = line.split("").map(toMovement).reduce(move(keypad), acc.position);
    return {
      position: p,
      keyCode: acc.keyCode + toButton(keypad, p)
    };
  };
}

function part1$1(input) {
  /* The keypad is defined as a list of the coordinates it contains, ordered so
    that button n is in the (n - 1)th position. Again, we store the coordinates
    as strings, to avoid array equality awkwardness. */
  var keypad = [[0, 0], [1, 0], [2, 0], //     1  2  3
  [0, 1], [1, 1], [2, 1], //     4  5  6
  [0, 2], [1, 2], [2, 2] //     7  8  9
  ].map(JSON.stringify);
  var initialState = { position: [1, 1], keyCode: [] };
  return input.reduce(processLine(keypad), initialState).keyCode;
}

function part2$1(input) {
  var keypad = [[2, 0], //        1
  [1, 1], [2, 1], [3, 1], //     2  3  4
  [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], //  5  6  7  8  9
  [1, 3], [2, 3], [3, 3], //     A  B  C
  [2, 4] //        D
  ].map(JSON.stringify);
  var initialState = { position: [0, 2], keyCode: [] };
  return input.reduce(processLine(keypad), initialState).keyCode;
}

var input02 = ["UULDRRRDDLRLURUUURUURDRUURRDRRURUDRURRDLLDRRRDLRUDULLRDURLULRUUURLDDRURUDRULRDDDUDRDLDDRDDRUURURRDDRLRLUDLUURURLULLLRRDRLDRLRDLULULRDRDDUURUDRRURDLRRDDDLUULDURDLDLLRLRLLUDUDLRDDLUURUUDDRDULDDLDLLDULULRLDDDUDDDRLLRURLRDUUUDUUDDURRDLDDLRDLLUDDLDRLDULDRURLUUDLURLUDRULRLRUUUURLUUUDDULLRLLURDRURLLRLRLDDRURURULRULLUUUULUDULDDDRDDLURLUURRLDDRDRUDDRRLURRDURRLDUULRRLLRDLLDDUURULLRUURRRRDRRURLULLRLRDDULULRDLDDLULLD", "UUDUDDRRURRUDDRLDLURURLRLLDRLULLUURLLURDRLLURLLRRLURDLDURUDRURURDLRDRRDULRLLLRDLULDRLLDLDRLDDRUUUUULRLDUURDUUUURUUDLRDLLDRLURULDURURLDLLRDLULLULLLLLUDUDDLRLLLUDLRUUDDUUDUDDDLULDDUDUULUUDUDRRULRRRURUDUUULDDRURLLULLULURLUDRDLUUUDLDRRLRRRULLRRURRUDDDRDLDDDLDUDLLDRRDURRURRURRLDLURUULRLDLUDUDUUULULUUDDDLDDULRDULLULDRDDURRURRRULRDURULUDURRDLLUURRUURLLLULDRRULUUUURLRLRDDDDULLUUUDRRLRRLRRLLLUDDDLRDDURURRDULLLUDLUDURRLRDURUURURDRDUUURURRUDRURRULLDDURRLRRRUULDRLDRRURUDLULRLLRRDLDDRLRRULDDLLUURUDDUDRLUD", "DDDUDDRRDRRRUULDRULDLDLURRRUURULRUDDRLLLLURRLRULDLURRULDRUDRRLLLLDULRDLUUURDDLDLURRLLUUURLLUDLUDRRDDULLULURDULRRDLRLDRRUUUUDLRRDLDDLDULDRUULRLLDLRURRUDLDDDRUUULLDDLULDULDUURUDDDLULUDLUURLRURUURDDUDRRLDRRRDDDDRDLUDRRDURDLDRURDDDRRLLLRDDRRRDDLDRLLUURRLDRDDRDLRDDLLDRLRDRDDDURLULLRUURDLULRURRUUDLDRLDRRDDRLDDUULLRDDRRLLLDDDUURDUDRUDUDULDULRUURLDURRDLUURRDLLDDLLURUUUDRLUURRDLUDUULRURLUDDLLRUDURRDRRRDRDLULRRLRUDULUUDRLURRRRLULURRDLLDRDDRLULURDURRDUUULLRDUUDLDUDURUDRUDDLRLULRLRLRRRLRUULLDDLUDDLDRRRLDDLLRLRLRUDULRLLLUULLDRDLDRRDULLRRLLDLDUDULUDDUUDLRDRLUUULLRLDLDDLLRUDDRDD", "DDUURRLULDLULULLDUDDRURDDRLRDULUURURRLURDLRRDUUDLULDRDLDLRLULLRULLDRLDRRULUDRLDURUURLLDLLDDLUULLRLRULRLUURDDDDDRLDRLLLDLULDLDLULRRURLLLLLLRLUDLRRLRULUULLLLURDLLRLLDDUDLLULDLLURUUDLRDRDUDDDRDDUULRLLDDDLLRLURLUDLULRRUUUULLDLDLLLDRLUDRDRDLUDLRUDRDRUDRDLLDDLRRLRDLDURDLDRUUUDRLULUULDURDLUUUDDDDDLDRDURDLULDDLLUDUURRUDDLURUDDLRLUUDURUDUULULUDLDLUURDULURURULDDDLUUUUDLUUDUDLLLRDDLRDDLRURRRLLLULLURULLRDLLDRULRDDULULRLUDRRRDULRLLUDUULLRDRDDDULULRURULDLDLDRDLDUDRDULLUUUUUDLRDURDUUULLLRUULLRUULDRRUUDLLLULLUURLDDLUULLRLRLRDRLLLRLURDDURUDUULULDLRLRLLUDURRURDRUDLRDLLRDDRDUULRDRLLRULLUDDRLDLDDDDUDRDD", "URDLUDUDLULURUDRLUDLUDLRLRLLDDDDDLURURUURLRDUDLRRUUDUURDURUULDRRRDDDLDUURRRDLRULRRDLRUDUDLDDDLLLRLRLRUUUUUULURRRLRLUDULURLDLLDUUDDRUDLDUDRRLULLULLDURDDRRLLRLDLLLLRLULLDDDDLDULLRDUURDUDURRUULLDRULUDLUULUUDDLDDRDLULLULDLDRLDLRULLRLURDURUDRLDURDRULRLLLLURRURLRURUDUDRRUDUUDURDDRRDRLURLURRLDRRLLRLRUDLRLLRLDLDDRDLURLLDURUDDUUDRRLRUDLUDULDRUDDRDRDRURDLRLLRULDDURLUUUUDLUDRRURDDUUURRLRRDDLULLLDLRULRRRLDRRURRURRUUDDDLDRRURLRRRRDLDLDUDURRDDLLLUULDDLRLURLRRURDRUULDDDUDRDRUDRRLRLLLLLURDULDUDRLULDRLUULUDDDDUDDRDDLDDRLLRULRRURDDDRDDLDLULRDDRRURRUDRDDDDRURDRRURUUDUDDUURULLDRDULURUDUD"]
;

/*
--- Day 3: Squares With Three Sides ---

Now that you can think clearly, you move deeper into the labyrinth of hallways
and office furniture that makes up this part of Easter Bunny HQ. This must be a
graphic design department; the walls are covered in specifications for
triangles.

Or are they?

The design document gives the side lengths of each triangle it describes, but...
5 10 25? Some of these aren't triangles. You can't help but mark the impossible
ones.

In a valid triangle, the sum of any two sides must be larger than the remaining
side. For example, the "triangle" given above is impossible, because 5 + 10 is
not larger than 25.

In your puzzle input, how many of the listed triangles are possible?

Your puzzle answer was 869.

--- Part Two ---

Now that you've helpfully marked up their design documents, it occurs to you
that triangles are specified in groups of three vertically. Each set of three
numbers in a column specifies a triangle. Rows are unrelated.

For example, given the following specification, numbers with the same hundreds
digit would be part of the same triangle:

101 301 501 102 302 502 103 303 503 201 401 601 202 402 602 203 403 603 In your
puzzle input, and instead reading by columns, how many of the listed triangles
are possible?

Your puzzle answer was 1544.
*/

function chunksOf(n, arr) {
  var chunks = [];
  for (var i = 0; i < arr.length; i += n) {
    chunks.push([].concat(toConsumableArray(arr)).splice(i, i + n));
  }
  return chunks;
}

function isPossible(_ref) {
  var _ref2 = slicedToArray(_ref, 3),
      a = _ref2[0],
      b = _ref2[1],
      c = _ref2[2];

  return a + b > c && a + c > b && b + c > a;
}

function transpose(_ref3) {
  var _ref4 = slicedToArray(_ref3, 3),
      _ref4$ = slicedToArray(_ref4[0], 3),
      a = _ref4$[0],
      b = _ref4$[1],
      c = _ref4$[2],
      _ref4$2 = slicedToArray(_ref4[1], 3),
      d = _ref4$2[0],
      e = _ref4$2[1],
      f = _ref4$2[2],
      _ref4$3 = slicedToArray(_ref4[2], 3),
      g = _ref4$3[0],
      h = _ref4$3[1],
      i = _ref4$3[2];

  return [[a, d, g], [b, e, h], [c, f, i]];
}

function transform(input) {
  return chunksOf(3, input).map(transpose).reduce(function (s, t) {
    return [].concat(toConsumableArray(s), toConsumableArray(t));
  });
}

function part1$2(input) {
  return input.filter(isPossible).length;
}

function part2$2(input) {
  return transform(input).filter(isPossible).length;
}

var input03 = [
  [810, 679,  10],
  [783, 255, 616],
  [545, 626, 626],
  [ 84, 910, 149],
  [607, 425, 901],
  [556, 616, 883],
  [938, 900, 621],
  [638, 749, 188],
  [981, 415, 634],
  [680, 557, 571],
  [523, 604, 270],
  [910, 954, 484],
  [464, 392, 514],
  [458,  52, 687],
  [696, 438, 832],
  [213, 583, 966],
  [572, 571, 922],
  [451,  42, 686],
  [177, 390, 688],
  [151, 136, 705],
  [ 92, 413, 191],
  [789, 676, 377],
  [486, 262, 600],
  [450, 708, 472],
  [556,   9, 481],
  [157,  85,  94],
  [574,  93, 549],
  [539, 165, 487],
  [815, 742,  73],
  [353, 773, 428],
  [526, 152, 680],
  [433, 711, 557],
  [168, 632, 306],
  [848, 992, 757],
  [885, 786, 890],
  [469, 475, 146],
  [899, 833, 137],
  [864, 202, 688],
  [101, 902, 620],
  [529, 937, 826],
  [ 41, 381, 521],
  [562, 883, 804],
  [468, 197, 272],
  [451,   8, 420],
  [561, 193, 630],
  [597, 951, 383],
  [171, 845, 251],
  [541, 810, 157],
  [268,  46, 712],
  [332,   2, 397],
  [100,  47, 436],
  [194, 665, 205],
  [325, 277,  21],
  [170, 652, 205],
  [765, 165, 506],
  [ 15, 257, 144],
  [762, 124, 401],
  [662, 543, 531],
  [ 29, 425, 308],
  [667, 785, 299],
  [935, 758, 405],
  [504, 998, 367],
  [771, 947, 630],
  [490, 933, 978],
  [441, 498, 896],
  [862, 896, 607],
  [655, 935, 194],
  [286, 240, 324],
  [368, 723, 311],
  [419, 762, 600],
  [316, 903, 529],
  [197, 215, 215],
  [551, 461,  77],
  [855, 318,   7],
  [894, 690,  86],
  [451, 648, 416],
  [608, 132, 385],
  [420, 761, 112],
  [560, 711, 195],
  [371, 750, 506],
  [188, 307, 584],
  [ 26, 377, 622],
  [304, 701, 292],
  [286, 630, 642],
  [883, 880, 379],
  [774, 564, 597],
  [300, 692, 701],
  [529, 595,  27],
  [740,  76, 445],
  [567, 648, 422],
  [340, 163, 901],
  [374, 775, 902],
  [308, 827, 882],
  [529, 371, 374],
  [996, 587, 162],
  [534, 360, 516],
  [924, 160, 276],
  [724, 896, 687],
  [929, 971, 578],
  [798, 252, 761],
  [512, 991, 812],
  [465, 758,  49],
  [724, 446, 571],
  [482, 196, 544],
  [553, 247,  86],
  [624, 552, 778],
  [ 73, 143, 127],
  [556, 471, 749],
  [224, 927, 383],
  [133, 636, 847],
  [174, 985, 569],
  [572, 819, 881],
  [282, 818, 383],
  [535, 429, 780],
  [953, 540, 815],
  [577, 302, 494],
  [530, 654, 370],
  [670, 739, 168],
  [700, 695, 806],
  [196,  48, 928],
  [255, 805, 749],
  [ 65,  96, 969],
  [292, 860, 929],
  [556, 269, 297],
  [ 43, 832, 407],
  [542, 723, 438],
  [919, 139, 407],
  [709, 194, 955],
  [847, 237, 933],
  [321,  41, 216],
  [778, 749, 374],
  [782, 745, 529],
  [716, 572, 251],
  [ 90,  49, 976],
  [639, 557, 740],
  [148, 125, 784],
  [143, 819, 382],
  [ 71, 729, 563],
  [309, 500, 806],
  [ 25, 412, 594],
  [296, 600, 237],
  [681, 187, 142],
  [758, 913, 288],
  [163, 972, 266],
  [197, 352, 190],
  [383, 190, 562],
  [206, 214, 393],
  [566, 307, 294],
  [  2, 284, 335],
  [564, 472, 394],
  [635, 928, 589],
  [169, 744, 574],
  [710, 386, 589],
  [970, 386, 827],
  [943, 424, 134],
  [846, 269, 712],
  [266, 765, 615],
  [344, 824, 685],
  [250, 222, 554],
  [377, 586, 859],
  [398, 526, 275],
  [317, 996, 937],
  [503, 364, 389],
  [212, 782, 533],
  [584, 539, 589],
  [731, 200, 584],
  [773, 389, 578],
  [ 43, 482, 104],
  [432, 140, 339],
  [193, 758, 673],
  [612, 882, 582],
  [314, 920, 130],
  [522,  40,  26],
  [695, 939, 149],
  [955, 121, 552],
  [728, 850, 661],
  [524, 766, 433],
  [817, 221, 992],
  [753, 580, 543],
  [ 72, 392, 873],
  [445, 897,   3],
  [144, 508, 567],
  [354, 990, 566],
  [477, 392, 687],
  [602, 846, 520],
  [321, 577, 677],
  [716, 518,  55],
  [367,  77, 545],
  [361, 473, 504],
  [ 98, 893, 887],
  [854, 920, 887],
  [860, 174,  30],
  [389, 857, 797],
  [686, 968, 907],
  [613, 275, 595],
  [855, 440, 906],
  [749, 494, 735],
  [527, 895, 550],
  [767, 971, 488],
  [118, 814, 148],
  [854, 193, 480],
  [847, 425, 378],
  [697, 159, 357],
  [282, 476,  48],
  [ 96, 314, 176],
  [949, 597, 903],
  [956, 478, 885],
  [714, 754, 278],
  [757, 547, 210],
  [ 53, 223, 170],
  [355, 725, 928],
  [930, 780, 762],
  [924, 581, 266],
  [570, 132, 283],
  [625, 674, 529],
  [159, 719, 325],
  [316, 670, 929],
  [ 55, 655, 542],
  [344,  19, 791],
  [437, 805, 312],
  [327, 867, 647],
  [521, 405, 496],
  [383,  58, 117],
  [638,  36, 175],
  [924,  59, 112],
  [401,  66, 353],
  [740, 785, 823],
  [713, 725, 622],
  [821, 702, 246],
  [378,  24, 958],
  [690, 718, 924],
  [486, 788, 537],
  [377, 214, 670],
  [514, 720, 427],
  [451, 927, 877],
  [808, 868, 872],
  [554,  94,   2],
  [534, 516, 715],
  [735, 318, 125],
  [880, 496, 755],
  [724, 115, 567],
  [ 23, 105,  89],
  [725,  55, 561],
  [599,  44, 581],
  [378, 661, 173],
  [628, 640, 632],
  [747, 817, 448],
  [557, 248, 338],
  [743, 833, 776],
  [309, 895, 759],
  [ 18, 696, 851],
  [328, 775, 356],
  [220,  37, 499],
  [865, 390, 651],
  [736, 397, 205],
  [645, 949, 170],
  [638, 860, 143],
  [ 23, 262,  98],
  [822,  46, 842],
  [663, 687, 860],
  [941, 700, 745],
  [762, 304, 509],
  [154, 275, 369],
  [728, 155, 324],
  [ 99, 113, 485],
  [245,  82,  62],
  [294,  76, 484],
  [215, 664, 398],
  [146, 336, 461],
  [102, 591, 503],
  [535, 814, 749],
  [250, 410, 892],
  [672, 467, 212],
  [304, 108, 285],
  [300, 246,  11],
  [  4, 304, 284],
  [115, 132, 112],
  [460, 334, 739],
  [453, 281, 792],
  [505, 591,   6],
  [482, 413, 975],
  [ 26, 763, 980],
  [226, 377, 727],
  [406,  59,  39],
  [570, 325, 691],
  [333, 438, 966],
  [267, 792, 229],
  [130, 384, 854],
  [375, 165, 187],
  [ 37, 498, 403],
  [357, 509, 242],
  [710, 796, 296],
  [708, 187, 265],
  [ 46, 762, 279],
  [ 84, 589, 760],
  [578,  38, 226],
  [624, 558, 570],
  [338, 517, 276],
  [547, 498, 648],
  [626, 265, 677],
  [144, 662, 193],
  [581, 820, 407],
  [477, 567, 232],
  [582, 890, 926],
  [167, 458, 502],
  [635, 841, 607],
  [505, 346, 239],
  [522, 970, 506],
  [608, 830, 686],
  [100,  89, 353],
  [ 95, 159, 652],
  [ 24, 163, 786],
  [328, 313, 534],
  [793,  52, 249],
  [750, 274, 683],
  [885, 463, 247],
  [534, 326, 391],
  [938, 726, 199],
  [893, 620, 120],
  [899, 410, 508],
  [226, 896, 459],
  [677, 694, 780],
  [880,  15, 831],
  [909, 683, 903],
  [ 55,   7, 541],
  [294, 221, 109],
  [286, 216, 507],
  [239, 652, 380],
  [948, 760, 431],
  [772, 258, 275],
  [562, 226, 631],
  [503, 264, 765],
  [690,  42, 369],
  [761, 541, 373],
  [232, 596,  75],
  [925,  60, 402],
  [550, 181,  16],
  [600, 579, 701],
  [ 92, 419, 696],
  [ 26, 117, 290],
  [  4, 487, 157],
  [ 21, 474, 308],
  [ 99, 827, 835],
  [279, 216, 451],
  [267, 739, 749],
  [309, 456, 262],
  [320,  91, 282],
  [ 52, 431, 304],
  [773, 784, 932],
  [474, 483, 932],
  [703, 975, 257],
  [851, 227, 584],
  [ 17, 224, 365],
  [845,  96, 536],
  [258, 150, 905],
  [797, 119, 876],
  [862, 196, 220],
  [954, 964, 355],
  [534, 979, 302],
  [905, 509, 628],
  [153, 185, 273],
  [169, 538, 509],
  [ 43, 477, 356],
  [702, 357, 940],
  [340, 403, 284],
  [638,  86, 744],
  [329, 426, 903],
  [222, 720, 682],
  [127, 624, 253],
  [ 28, 849, 485],
  [555, 158, 599],
  [553, 690, 443],
  [598, 926, 185],
  [611, 934, 868],
  [986,   8, 983],
  [166, 396, 946],
  [500, 822, 662],
  [507, 715, 828],
  [294, 790, 587],
  [661, 779, 235],
  [549, 594, 657],
  [771, 918, 800],
  [923, 896, 983],
  [866, 203, 437],
  [723, 465, 852],
  [589, 717, 731],
  [332, 331, 710],
  [984, 484, 794],
  [750, 479, 886],
  [857,   5, 286],
  [400, 841,  63],
  [665, 513, 508],
  [841, 739, 513],
  [331, 586, 669],
  [420, 561, 690],
  [346, 104,  22],
  [847, 758, 149],
  [570, 211, 816],
  [524, 868, 962],
  [483, 229, 317],
  [408, 555, 325],
  [682, 650, 285],
  [646, 987, 974],
  [467, 368, 779],
  [442, 640, 968],
  [644, 131, 184],
  [903, 916, 162],
  [565, 890,  91],
  [474, 763, 351],
  [569, 178, 709],
  [520, 618, 666],
  [437,  75, 213],
  [509, 471, 758],
  [298, 486, 904],
  [364, 416, 429],
  [513, 971, 271],
  [169, 863, 202],
  [ 15, 206, 565],
  [163,  69, 713],
  [167, 186, 542],
  [908, 550,  89],
  [936, 764, 451],
  [118, 467, 464],
  [ 89, 385, 375],
  [179, 165, 545],
  [143, 514, 187],
  [313,  47, 636],
  [477, 830, 550],
  [769, 808, 577],
  [ 74, 756, 630],
  [698, 799, 654],
  [721, 387,  36],
  [993, 763, 945],
  [707, 746,   7],
  [955, 113, 948],
  [723, 532, 526],
  [174, 795, 204],
  [671, 968, 575],
  [523, 256, 109],
  [570, 186, 296],
  [350, 351, 215],
  [141, 251,  22],
  [532, 217, 695],
  [460,  37, 719],
  [695,  69, 516],
  [ 36, 597, 350],
  [670, 552, 556],
  [287, 143,  35],
  [400, 801,  45],
  [133, 921,  71],
  [637, 169, 646],
  [108, 721, 890],
  [655, 681, 311],
  [885, 393, 603],
  [375, 388, 113],
  [976, 522, 534],
  [ 15, 516, 627],
  [685, 602, 535],
  [669, 390, 781],
  [845, 950, 348],
  [388,  30, 379],
  [825, 955,  46],
  [360, 579, 898],
  [363, 573, 660],
  [ 33,  30, 864],
  [905, 723, 916],
  [968, 648, 655],
  [178, 181, 363],
  [754, 262, 268],
  [883, 837,  45],
  [216, 687, 222],
  [520, 973, 909],
  [808, 968, 943],
  [335,   3, 202],
  [211, 605, 517],
  [ 32, 298, 358],
  [184, 488, 173],
  [741,  23, 328],
  [400, 482, 144],
  [626, 491, 451],
  [920, 546, 219],
  [363, 734, 861],
  [739, 417, 685],
  [954, 470, 541],
  [598, 679, 950],
  [550, 372, 450],
  [980, 459, 213],
  [353, 374, 293],
  [720, 220, 256],
  [173,  29, 571],
  [289, 769, 833],
  [372, 793, 345],
  [578, 298, 332],
  [763, 225, 167],
  [258, 519, 307],
  [504,   7, 649],
  [186, 319, 883],
  [358, 322, 918],
  [293,  60, 330],
  [373, 562, 550],
  [310, 532, 573],
  [741, 129, 533],
  [701, 614, 869],
  [ 54, 736, 587],
  [451, 131, 817],
  [499, 784, 651],
  [931, 681, 193],
  [674, 311, 500],
  [900, 312, 197],
  [553,  94, 331],
  [  9, 715, 572],
  [590,  97, 275],
  [579, 713, 299],
  [ 20, 345, 741],
  [817, 738, 534],
  [819, 963, 497],
  [168, 303, 997],
  [462, 599, 698],
  [400, 772, 485],
  [755, 922, 928],
  [591, 847, 180],
  [500, 135, 977],
  [946, 940, 751],
  [658, 368, 790],
  [720, 714, 141],
  [850, 261, 594],
  [615, 116, 476],
  [660, 156, 488],
  [485, 895, 378],
  [797, 992, 614],
  [847, 652, 838],
  [842, 516, 364],
  [745, 444, 329],
  [175, 362,  84],
  [684, 223, 578],
  [ 43, 291, 394],
  [702, 222, 862],
  [208, 247, 494],
  [601, 236, 234],
  [780,  53, 675],
  [754, 135, 126],
  [ 26, 776,  52],
  [735, 716, 136],
  [591, 829, 171],
  [606, 373, 824],
  [ 51, 926, 766],
  [273, 161, 558],
  [215, 557, 149],
  [393, 703, 653],
  [318, 208, 207],
  [891,  54, 570],
  [790, 153, 689],
  [521, 693, 423],
  [559, 986, 542],
  [ 58, 611, 404],
  [178, 509, 602],
  [684, 120, 975],
  [791, 407, 811],
  [ 94, 321,  66],
  [ 14, 317, 266],
  [108,  14, 271],
  [580, 454, 391],
  [781,  82, 849],
  [419, 406, 775],
  [396, 298, 237],
  [448, 375, 330],
  [747, 301, 322],
  [103, 835, 120],
  [138, 897, 630],
  [127, 102, 546],
  [518, 552, 412],
  [398, 442,  43],
  [586, 972, 380],
  [ 30, 535,  91],
  [ 42, 384, 962],
  [ 61, 414, 942],
  [610, 147,  65],
  [945, 155, 418],
  [667,  54, 375],
  [473, 251, 187],
  [440, 222, 124],
  [886, 158, 163],
  [862, 493, 149],
  [805, 451, 536],
  [ 59, 108, 458],
  [663, 613, 719],
  [264, 525, 574],
  [755, 176, 168],
  [390,   6, 783],
  [ 50, 561, 233],
  [401, 568, 582],
  [121, 979, 769],
  [ 94,  77, 830],
  [195, 938, 201],
  [124, 626, 161],
  [668, 633,  35],
  [662,  29, 164],
  [394, 658, 768],
  [203, 918, 850],
  [466, 425, 399],
  [353, 804, 714],
  [323, 851, 640],
  [152, 939, 642],
  [ 29, 309, 484],
  [579, 529, 822],
  [608, 262, 731],
  [ 38, 756, 450],
  [433, 828, 740],
  [431, 895, 693],
  [392, 477, 399],
  [ 25, 925, 513],
  [368, 969, 491],
  [671, 736, 911],
  [307, 198, 660],
  [662, 859, 311],
  [853, 596, 526],
  [917,  24, 461],
  [677, 574, 960],
  [697, 220,  90],
  [203, 458, 102],
  [499, 284,  29],
  [400,  79, 582],
  [484, 195, 597],
  [575, 276, 912],
  [493, 269, 347],
  [ 23, 593, 223],
  [476, 802, 358],
  [ 33, 944, 255],
  [715, 117, 460],
  [739, 885, 586],
  [748, 954, 527],
  [734, 773, 643],
  [542, 202, 117],
  [ 15, 976, 460],
  [309, 830, 331],
  [319, 208, 557],
  [458, 822, 461],
  [545, 784, 690],
  [878, 372, 858],
  [ 57, 295, 470],
  [268, 537, 822],
  [271, 301, 699],
  [806, 909, 878],
  [744, 182, 571],
  [106, 895, 468],
  [121, 778,  28],
  [641, 202, 593],
  [710, 724, 592],
  [125, 784, 603],
  [654, 771,  83],
  [721,  87, 543],
  [585, 724,  89],
  [381, 739, 524],
  [623,  28, 494],
  [869, 729, 292],
  [228, 736, 298],
  [803,  10,  95],
  [700, 224, 786],
  [738, 512,   9],
  [708, 407, 775],
  [558, 645, 863],
  [ 45, 209, 466],
  [540, 809, 587],
  [372, 512, 717],
  [416, 203, 974],
  [272, 496, 928],
  [816, 141, 903],
  [675, 894,  84],
  [567, 900, 957],
  [827, 122, 189],
  [882, 860,  56],
  [ 98, 792, 196],
  [861, 461, 209],
  [685, 339,  87],
  [585, 464, 235],
  [640, 156, 703],
  [817, 596, 321],
  [893, 462, 996],
  [679, 536, 208],
  [199, 455, 365],
  [873, 260, 492],
  [528, 179, 563],
  [689, 563, 849],
  [887, 417, 507],
  [ 64, 270, 198],
  [595, 214, 166],
  [566, 232, 242],
  [921, 102, 212],
  [187, 202, 335],
  [992, 169, 475],
  [736, 754, 200],
  [655, 374, 127],
  [ 84, 492, 193],
  [ 21, 709, 972],
  [199, 208, 236],
  [216, 683, 926],
  [479, 669, 604],
  [437, 872, 293],
  [789, 256, 515],
  [341, 948, 637],
  [142, 933, 536],
  [207,  82, 218],
  [702, 249, 779],
  [253, 369, 874],
  [508, 255, 254],
  [ 91, 536, 541],
  [212, 813,  28],
  [144, 406, 563],
  [180, 513, 277],
  [421, 842, 639],
  [570, 520, 522],
  [224, 830, 592],
  [153, 582, 606],
  [ 81, 415, 239],
  [160, 553, 735],
  [525, 348, 778],
  [454, 352, 626],
  [609, 460, 169],
  [559,  57, 334],
  [784, 428, 242],
  [706, 867, 289],
  [637, 914, 281],
  [620, 407,  83],
  [152, 446,  90],
  [260, 331, 799],
  [301, 677, 725],
  [708, 254, 328],
  [418, 147, 798],
  [732, 344, 963],
  [627, 626, 302],
  [670, 241,  76],
  [220, 383, 376],
  [733, 124,  50],
  [795, 673, 466],
  [136, 637, 423],
  [823, 258, 700],
  [204, 936, 878],
  [730, 976, 981],
  [272, 310, 894],
  [333, 201, 863],
  [ 90, 122, 621],
  [ 90, 811, 209],
  [275, 904, 283],
  [193, 125, 189],
  [127, 961, 283],
  [347, 529, 829],
  [352, 738, 734],
  [878, 726, 411],
  [942,  54,  34],
  [429, 750, 426],
  [367, 938, 424],
  [501, 447, 757],
  [566, 773, 648],
  [382, 140, 899],
  [462, 353,  90],
  [230, 493, 945],
  [425, 290, 415],
  [894, 360,  21],
  [897, 529, 431],
  [914, 124, 338],
  [ 78, 766, 876],
  [858, 664, 764],
  [598, 664, 317],
  [630, 548, 772],
  [ 30, 483, 604],
  [642, 331, 545],
  [518, 702, 474],
  [546, 750, 887],
  [252, 663, 547],
  [813, 917, 671],
  [852, 367, 894],
  [ 97, 192, 265],
  [661, 587, 858],
  [726, 674, 748],
  [578, 178, 878],
  [327, 535, 608],
  [426, 419, 871],
  [559, 837, 229],
  [851, 721, 708],
  [860, 978, 770],
  [308, 604, 626],
  [198, 168, 408],
  [138, 628, 799],
  [669, 525, 918],
  [804, 762, 652],
  [389, 429, 554],
  [618, 566, 360],
  [814, 648, 887],
  [677, 697, 659],
  [600, 660, 162],
  [256, 749, 195],
  [840, 734, 216],
  [445, 192, 960],
  [341, 226, 975],
  [699, 140, 114],
  [763, 833, 533],
  [234, 835,  38],
  [798,  10, 569],
  [190, 745, 418],
  [183, 563, 486],
  [295, 224, 197],
  [437, 724, 885],
  [197, 706, 328],
  [268, 709, 702],
  [351, 679, 694],
  [642, 555, 769],
  [333, 521, 883],
  [182, 532, 772],
  [517, 543, 711],
  [657, 154, 169],
  [134, 888, 300],
  [217, 121, 209],
  [346, 796, 100],
  [755, 681, 817],
  [277, 733, 980],
  [677, 162, 481],
  [527, 191, 433],
  [293, 999, 653],
  [429, 850, 503],
  [562, 205, 402],
  [217, 323, 414],
  [565, 402,  43],
  [730, 223, 537],
  [  4, 701, 567],
  [737, 570, 523],
  [644, 510, 459],
  [390, 252, 367],
  [344, 715, 179],
  [ 62, 236, 586],
  [527, 310, 137],
  [526,  96, 548],
  [585, 357, 407],
  [768, 532, 384],
  [591, 421,  43],
  [928, 129, 533],
  [228, 469, 848],
  [886, 349, 596],
  [392, 231, 867],
  [507, 664, 870],
  [546, 881, 121],
  [ 28, 306, 275],
  [688, 284, 261],
  [683, 495,  31],
  [733, 191, 899],
  [ 83, 785, 730],
  [738, 668, 220],
  [795,  69, 237],
  [148, 175, 238],
  [872, 139, 100],
  [673, 671, 744],
  [222, 421, 346],
  [824, 971, 589],
  [283, 135, 474],
  [626,  48, 487],
  [426, 172, 548],
  [796, 463, 616],
  [547, 349, 568],
  [717, 798, 428],
  [248, 977, 192],
  [337, 683, 128],
  [480, 487, 231],
  [817, 559, 882],
  [413, 935, 879],
  [694, 724, 447],
  [221, 458, 449],
  [649, 523, 725],
  [689, 131, 311],
  [726, 707, 273],
  [712, 689, 127],
  [ 65, 338, 183],
  [612, 523, 679],
  [631, 834, 297],
  [701, 320, 433],
  [265, 518, 602],
  [691, 519, 160],
  [463,   4, 575],
  [777, 590, 394],
  [790, 975, 201],
  [ 22, 449, 242],
  [578, 308, 911],
  [371, 157, 191],
  [489, 263, 789],
  [962, 696, 390],
  [494, 760, 494],
  [760, 656, 350],
  [ 57, 322, 551],
  [639, 105, 616],
  [676, 402, 236],
  [269, 464, 893],
  [265, 573, 312],
  [472, 822, 682],
  [410, 385, 584],
  [882,  56, 493],
  [596, 330, 827],
  [184, 494, 873],
  [ 61, 580, 793],
  [157, 260, 128],
  [440, 239, 390],
  [701, 174, 230],
  [946, 357, 394],
  [273, 423, 258],
  [529, 438, 733],
  [552,  75, 892],
  [946, 755, 996],
  [ 64, 836, 112],
  [971, 192, 928],
  [188, 378, 692],
  [179, 299, 676],
  [ 91, 177, 202],
  [748, 644, 634],
  [551, 355, 345],
  [265, 504, 410],
  [644,  58, 450],
  [103, 716, 556],
  [691, 679, 128],
  [166, 255, 174],
  [415, 682, 368],
  [474, 862, 434],
  [348, 462, 133],
  [704, 626, 374],
  [979, 835, 426],
  [239, 897, 288],
  [381, 953, 234],
  [181,  65, 504],
  [ 61, 803, 297],
  [761,  22, 946],
  [771, 822, 908],
  [900, 914, 563],
  [656, 948, 114],
  [349, 202, 594],
  [322, 294, 811],
  [535, 484, 837],
  [532, 438, 869],
  [700,  94, 814],
  [691, 557, 159],
  [201, 512, 738],
  [598, 652, 742],
  [269, 642, 772],
  [698,  23,  49],
  [376, 375, 689],
  [375, 476, 819],
  [426, 421, 559],
  [683, 775, 420],
  [876, 374, 995],
  [281, 556, 587],
  [990, 137, 273],
  [782, 928, 299],
  [895, 829,  65],
  [228, 687, 764],
  [ 62, 496, 905],
  [210, 277, 352],
  [732, 461, 535],
  [418, 364, 561],
  [958, 373, 189],
  [640, 617,  27],
  [185, 680, 698],
  [697, 507, 688],
  [324, 836, 143],
  [434, 868, 658],
  [342, 516, 628],
  [351, 760, 280],
  [796, 663, 876],
  [977, 133, 813],
  [169, 326, 101],
  [139, 575, 796],
  [236, 597, 851],
  [191, 704, 375],
  [568, 733, 436],
  [615,  68, 728],
  [478, 768, 617],
  [531, 594, 596],
  [898, 898,  64],
  [596, 181, 707],
  [371, 381, 259],
  [609, 406, 528],
  [810, 271, 308],
  [211, 975, 596],
  [963, 896, 551],
  [ 94, 362, 418],
  [812, 351, 848],
  [732, 495, 708],
  [866, 246, 209],
  [973, 682, 792],
  [898, 535, 672],
  [667, 237, 783],
  [325, 642, 229],
  [419, 654, 754],
  [328, 374,   7],
  [359, 468,  93],
  [ 91, 453,  93],
  [923, 741,  53],
  [721, 938, 589],
  [235, 716, 605],
  [466, 387, 199],
  [554, 430, 681],
  [166, 181, 864],
  [699, 998, 953],
  [999, 962, 718],
  [330, 124, 822],
  [443, 536, 930],
  [293, 631, 674],
  [197, 574, 315],
  [407, 183, 293],
  [432, 417, 537],
  [ 31, 571, 657],
  [901, 555, 463],
  [686, 456, 465],
  [217, 259,   3],
  [742, 535, 427],
  [881, 347, 555],
  [769, 659, 299],
  [134, 577,  20],
  [252, 566, 877],
  [181,  10, 885],
  [191, 829, 994],
  [744, 649, 867],
  [910, 354, 781],
  [ 68, 767, 930],
  [ 88, 716, 850],
  [ 22, 290, 121],
  [226, 212, 666],
  [266, 327, 812],
  [356, 112, 148],
  [252, 397, 741],
  [325, 674, 834],
  [389, 442, 946],
  [898,  83, 618],
  [ 51, 807, 862],
  [844, 772, 461],
  [831, 546, 467],
  [644, 476, 539],
  [758, 758, 722],
  [346, 512, 463],
  [157, 427, 697],
  [439, 672, 243],
  [192, 869, 150],
  [890, 977, 753],
  [962, 767, 607],
  [818, 926, 500],
  [960, 927, 219],
  [377,   9, 389],
  [661, 191, 869],
  [695, 149, 368],
  [358, 342, 778],
  [474, 396, 202],
  [546, 585, 853],
  [ 74, 281, 734],
  [830, 295, 611],
  [ 19, 813, 388],
  [847, 963, 378],
  [ 78, 140, 278],
  [531, 580, 246],
  [550, 546, 415],
  [739, 419, 197],
  [803, 266, 247],
  [285, 672, 123],
  [669,  51, 665],
  [525, 662,   5],
  [998, 619, 667],
  [737, 368, 910],
  [533, 550, 245],
  [899, 667, 932],
  [ 80, 302, 566],
  [508,   1, 576],
  [454, 303,  15],
  [752, 463, 159],
  [119, 380, 906],
  [702, 279, 942],
  [234, 198, 326],
  [262, 207, 305],
  [214, 388,  64],
  [975, 779, 523],
  [975, 243, 519],
  [694, 895,  79],
  [750, 477, 112],
  [746, 470, 108],
  [201, 299, 119],
  [748, 890, 652],
  [808, 897, 387],
  [908, 617, 466],
  [739, 750, 302],
  [887, 765, 558],
  [464,  97, 662],
  [ 11, 745, 109],
  [454, 537,  27],
  [446, 363, 118],
  [265,  33, 670],
  [862, 497, 147],
  [681, 488, 582],
  [370, 131, 389],
  [645, 652, 560],
  [496, 548, 779],
  [910, 434, 642],
  [793, 105, 303],
  [232, 468, 916],
  [932,   5, 657],
  [782, 634, 626],
  [429, 642, 326],
  [946, 618, 408],
  [760, 711, 553],
  [561, 391, 385],
  [614, 834, 961],
  [585, 853, 375],
  [188, 562, 635],
  [775, 758, 496],
  [300, 128, 476],
  [747, 817, 333],
  [288, 608, 259],
  [410, 883, 700],
  [142, 691, 562],
  [222, 270, 870],
  [654, 341, 896],
  [548, 133, 474],
  [ 49, 712, 796],
  [486, 607, 561],
  [483, 920, 970],
  [510, 553, 658],
  [876, 682, 369],
  [654, 744, 670],
  [508, 888, 671],
  [648, 111, 694],
  [213, 954, 529],
  [548, 879, 258],
  [342,  15, 155],
  [265, 880, 313],
  [613,  36, 583],
  [285, 774, 605],
  [696, 776, 742],
  [772, 230, 561],
  [239, 304, 710],
  [602, 387, 940],
  [871, 107, 512],
  [182, 321, 376],
  [927, 392, 527],
  [677, 124, 195],
  [312, 270, 938],
  [755, 308, 986],
  [400, 779, 601],
  [876, 843, 690],
  [964, 719, 119],
  [925, 665, 237],
  [730, 719, 310],
  [352,  86, 123],
  [583, 801, 629],
  [697, 340, 198],
  [150, 635, 446],
  [905, 183, 133],
  [648, 654, 298],
  [445, 743, 383],
  [483, 628, 344],
  [460, 822,  64],
  [264, 872, 384],
  [496, 291, 691],
  [130, 742, 608],
  [491, 590, 986],
  [737, 317, 602],
  [442, 179, 684],
  [617, 256, 642],
  [711, 688, 915],
  [679, 804,  29],
  [127, 869, 890],
  [621, 677, 347],
  [306, 486, 533],
  [645, 198, 481],
  [706, 855, 997],
  [686, 743, 117],
  [152, 947, 939],
  [271, 251, 352],
  [324, 621,  83],
  [562, 745, 349],
  [901, 797, 273],
  [  7,  84, 696],
  [895, 857, 751],
  [692, 663, 805],
  [692, 489, 122],
  [876, 848, 930],
  [667, 851, 155],
  [226, 218, 502],
  [447, 876, 635],
  [395,  40, 430],
  [652, 999, 312],
  [362, 992, 135],
  [714, 360, 668],
  [603, 393, 858],
  [176,  36, 470],
  [956, 803, 884],
  [678, 829, 391],
  [340, 128, 810],
  [643, 777, 545],
  [ 71, 314, 335],
  [705, 667, 881],
  [119, 708, 664],
  [480, 524, 560],
  [432, 183, 165],
  [983, 946, 881],
  [788, 472, 442],
  [386, 767, 510],
  [864, 823, 566],
  [764, 684, 955],
  [155, 309, 725],
  [459, 300, 826],
  [627,  85, 796],
  [497, 376, 448],
  [827, 969, 784],
  [408, 875, 120],
  [764, 883, 698],
  [ 81, 590, 675],
  [128, 549, 653],
  [127, 606, 712],
  [668, 989, 706],
  [776, 440, 615],
  [121, 840, 169],
  [641, 648, 803],
  [224, 671, 825],
  [733, 419, 107],
  [ 86, 208, 359],
  [383, 809, 426],
  [322, 741, 122],
  [772,  75, 577],
  [844, 100, 782],
  [128, 139, 344],
  [702, 420, 230],
  [311, 488, 724],
  [633, 209, 661],
  [ 33, 564, 249],
  [459, 120, 886],
  [493, 473, 761],
  [252, 719, 939],
  [506, 628, 748],
  [673, 843, 501],
  [124,  54, 798],
  [421, 761, 726],
  [521, 732,  70],
  [395, 438, 839],
  [600, 434, 851],
  [464, 374,  29],
  [598, 900, 349],
  [817, 637, 266],
  [558, 625, 311],
  [503, 806, 254],
  [527, 415, 447],
  [131, 972, 675],
  [816,  36, 481],
  [870, 880, 637],
  [215, 908, 266],
  [973,  18, 622],
  [973, 940, 514],
  [463, 923, 875],
  [472, 982, 282],
  [868, 808, 269],
  [544, 272, 456],
  [961, 836,  90],
  [130, 888, 215],
  [974, 276, 275],
  [309, 233, 253],
  [973,  46, 438],
  [842, 277, 438],
  [366,  80, 179],
  [419, 901, 846],
  [ 82, 907, 966],
  [596, 354, 513],
  [381, 362, 490],
  [846,  11, 884],
  [ 22, 718, 970],
  [396, 766, 862],
  [397,  62, 598],
  [222, 158, 646],
  [814, 712, 225],
  [732, 629, 623],
  [809, 626, 692],
  [979, 632, 811],
  [503, 139, 372],
  [462, 517, 811],
  [256, 899, 609],
  [216, 570, 483],
  [902, 733, 385],
  [ 89, 928,   4],
  [887, 695, 386],
  [ 35, 568, 155],
  [781,  58, 203],
  [775, 604, 291],
  [367, 692, 689],
  [101, 158, 677],
  [336, 580, 368],
  [981, 337, 174],
  [900, 880, 593],
  [275, 613, 463],
  [311, 907, 363],
  [368,  83, 832],
  [ 64, 974, 980],
  [157, 562, 421],
  [ 12, 820, 590],
  [160, 464, 322],
  [245, 444, 382],
  [  9, 312, 134],
  [257, 306, 288],
  [237, 449, 297],
  [142, 600, 661],
  [320, 363, 821],
  [721,  84,  89],
  [589, 509, 116],
  [413, 594, 181],
  [890, 477, 712],
  [742,  65, 245],
  [229, 432, 917],
  [536, 189, 821],
  [732, 401, 407],
  [515, 210, 512],
  [733, 778,   2],
  [852, 451, 210],
  [130, 360, 208],
  [230, 408, 748],
  [667, 499,  94],
  [467, 112, 789],
  [649, 764, 715],
  [253, 908,  53],
  [775, 878, 673],
  [265,   5,  24],
  [717, 434,  72],
  [687, 428,  72],
  [268, 436, 903],
  [678, 450, 742],
  [636,  40, 792],
  [555, 104, 649],
  [538, 608, 340],
  [370, 525, 847],
  [555, 830, 585],
  [763,  92, 375],
  [754, 898, 314],
  [153, 560, 139],
  [224, 663, 666],
  [138, 344, 595],
  [278, 448, 532],
  [413, 492, 470],
  [432,  98, 335],
  [148, 795, 903],
  [729, 903, 101],
  [818, 186, 960],
  [853, 631, 290],
  [761, 170, 666],
  [171, 582, 732],
  [189, 731, 633],
  [779,  20, 287],
  [883, 726, 449],
  [701, 139, 747],
  [571,  29, 567],
  [918, 166, 232],
  [ 98, 356, 853],
  [815, 512, 449],
  [911, 504, 671],
  [728, 414, 257],
  [515, 517, 657],
  [590, 854, 517],
  [388, 526, 831],
  [646, 217, 989],
  [845, 355, 289],
  [573, 306, 156],
  [563,  11, 456],
  [107, 320, 601],
  [ 37, 287, 714],
  [167, 290, 958],
  [198,  37, 287],
  [896, 491, 695],
  [712, 282, 239],
  [223, 252, 604],
  [524, 955, 584],
  [883, 890, 665],
  [818, 817, 242],
  [518, 236, 632],
  [410, 222, 191],
  [310, 135, 666],
  [983, 634, 348],
  [671, 476, 306],
  [986, 665, 111],
  [109, 220, 399],
  [717, 738, 695],
  [764, 825, 534],
  [616, 315, 977],
  [628, 142, 873],
  [ 19, 287, 155],
  [967, 255, 868],
  [191,  80, 844],
  [986, 220, 988],
  [419, 521, 444],
  [454, 916, 489],
  [ 71, 859, 500],
  [897, 459, 731],
  [823, 791, 216],
  [351, 677, 556],
  [840, 208, 612],
  [983, 156,  22],
  [988, 318, 633],
  [472, 628, 495],
  [341, 608, 343],
  [771, 779, 528],
  [818, 149, 422],
  [598,  52, 436],
  [678, 130, 285],
  [455, 502, 177],
  [461, 245,  81],
  [466, 382, 258],
  [181, 661,  64],
  [808, 499,  22],
  [892, 243,  76],
  [341, 643, 531],
  [717, 328, 856],
  [811, 779, 683],
  [666, 220, 797],
  [613, 453, 417],
  [978, 632, 462],
  [457, 620, 387],
  [558, 681, 351],
  [105, 337, 432],
  [880,  55, 818],
  [438,  63, 136],
  [709, 100, 700],
  [229, 792, 280],
  [427, 985,  53],
  [442, 385, 325],
  [918, 328, 642],
  [754, 291, 642],
  [970,  74, 973],
  [296,  55, 952],
  [577, 458, 924],
  [645, 507, 523],
  [589, 149,   6],
  [491, 933, 297],
  [871, 822, 303],
  [436, 938, 577],
  [ 98, 762, 322],
  [368, 875, 708],
  [607, 636, 385],
  [488, 362, 722],
  [642, 379, 510],
  [271,  30, 954],
  [338, 296, 210],
  [125, 279, 887],
  [614, 178, 645],
  [268, 237, 471],
  [578,  60, 720],
  [776, 691, 995],
  [814, 565, 784],
  [ 58, 358, 474],
  [968, 573, 398],
  [358, 613, 323],
  [851, 694, 665],
  [109,   4, 181],
  [366, 741, 777],
  [447, 747, 870],
  [738, 460, 241],
  [905, 694, 448],
  [440, 901, 565],
  [293, 278, 940],
  [822, 276, 877],
  [746,   2, 338],
  [227, 915,  30],
  [604, 733, 486],
  [501, 359, 493],
  [536,  79, 751],
  [621, 623, 135],
  [524, 547, 812],
  [917,  11, 982],
  [505,  55, 826],
  [580,  55, 287],
  [228, 805, 345],
  [586, 101, 202],
  [624, 829, 465],
  [262, 645, 636],
  [942, 775, 496],
  [724, 942, 398],
  [803, 499,  16],
  [326, 565, 969],
  [751, 977, 964],
  [320, 725, 153],
  [258, 772, 689],
  [107, 421, 839],
  [402, 399, 578],
  [116, 927, 560],
  [508, 685, 100],
  [970, 581, 680],
  [119,  98, 451],
  [904, 580, 314],
  [207, 186, 373],
  [791, 286,  21],
  [917, 199, 388],
  [210, 549, 203],
  [212, 270, 266],
  [  2, 429, 355],
  [297, 647, 659],
  [233, 537, 895],
  [142, 284, 332],
  [219, 237, 361],
  [246, 247, 401],
  [288,  81, 328],
  [360, 346, 279],
  [ 21, 262, 298],
  [343, 211,  50],
  [637, 778, 813],
  [820, 240,  32],
  [660, 781, 805],
  [638, 470, 759],
  [779, 198, 372],
  [158, 392, 433],
  [  5, 274, 133],
  [189, 346, 169],
  [194,  74,  37],
  [ 13, 767, 447],
  [167, 546, 364],
  [176, 618, 336],
  [554, 638, 712],
  [615, 663, 776],
  [824,  62, 142],
  [582, 320, 499],
  [302, 278, 545],
  [751, 296,  71],
  [366,  35, 493],
  [196, 657, 381],
  [364, 685, 134],
  [888, 756, 128],
  [ 17, 799, 479],
  [872, 685, 363],
  [879, 279, 556],
  [665, 164,  40],
  [264, 418, 539],
  [627, 575, 589],
  [978, 792, 584],
  [662, 693,   9],
  [988, 838, 552],
  [870, 299,  11],
  [141, 674, 546],
  [460, 912, 693],
  [216, 795, 292],
  [531, 699, 441],
  [207, 795, 373],
  [719, 461, 831],
  [571, 491, 664],
  [142, 282,  59],
  [ 48,  89, 556],
  [147, 278, 506],
  [334, 990, 607],
  [483,  42, 370],
  [766, 978, 303],
  [343, 336, 215],
  [283, 745, 857],
  [306, 587, 642],
  [566, 764, 323],
  [372, 267, 609],
  [878, 505, 315],
  [282, 877, 342],
  [283, 369, 682],
  [  4, 823, 926],
  [339, 831, 891],
  [521,  33, 942],
  [704, 816, 318],
  [416, 621, 503],
  [163, 684, 625],
  [514, 141, 646],
  [362,  81, 368],
  [134, 819, 425],
  [324, 768, 190],
  [985, 309, 356],
  [ 41, 491, 802],
  [997, 793, 905],
  [976, 684, 837],
  [368, 954, 863],
  [878, 407,  43],
  [216, 662, 557],
  [ 82, 425, 547],
  [286, 486,  43],
  [841, 595, 727],
  [809, 169, 417],
  [233, 566, 654],
  [547, 419, 783],
  [ 91, 422, 981],
  [628,   1, 945],
  [ 83, 747, 306],
  [399, 806, 592],
  [346, 708, 392],
  [813, 865, 624],
  [516, 636,  29],
  [592, 753, 610],
  [440, 460, 145],
  [457, 457, 114],
  [ 40,  19, 165],
  [494, 659, 248],
  [647, 950, 224],
  [810, 965, 241],
  [913, 630, 245],
  [919, 652, 409],
  [ 38, 151, 355],
  [430, 239,  96],
  [372, 597, 360],
  [711, 494, 370],
  [176, 710, 108],
  [130, 230, 503],
  [188, 509, 421],
  [850, 394, 702],
  [ 68, 744, 665],
  [919, 923, 873]
]
;

/*
--- Day 4: Security Through Obscurity ---

Finally, you come across an information kiosk with a list of rooms. Of course,
the list is encrypted and full of decoy data, but the instructions to decode the
list are barely hidden nearby. Better remove the decoy data first.

Each room consists of an encrypted name (lowercase letters separated by dashes)
followed by a dash, a sector ID, and a checksum in square brackets.

A room is real (not a decoy) if the checksum is the five most common letters in
the encrypted name, in order, with ties broken by alphabetization. For example:

aaaaa-bbb-z-y-x-123[abxyz] is a real room because the most common letters are a
(5), b (3), and then a tie between x, y, and z, which are listed alphabetically.
a-b-c-d-e-f-g-h-987[abcde] is a real room because although the letters are all
tied (1 of each), the first five are listed alphabetically.
not-a-real-room-404[oarel] is a real room. totally-real-room-200[decoy] is not.
Of the real rooms from the list above, the sum of their sector IDs is 1514.

What is the sum of the sector IDs of the real rooms?

Your puzzle answer was 173787.

--- Part Two ---

With all the decoy data out of the way, it's time to decrypt this list and get
moving.

The room names are encrypted by a state-of-the-art shift cipher, which is nearly
unbreakable without the right software. However, the information kiosk designers
at Easter Bunny HQ were not expecting to deal with a master cryptographer like
yourself.

To decrypt a room name, rotate each letter forward through the alphabet a number
of times equal to the room's sector ID. A becomes B, B becomes C, Z becomes A,
and so on. Dashes become spaces.

For example, the real name for qzmt-zixmtkozy-ivhz-343 is very encrypted name.

What is the sector ID of the room where North Pole objects are stored?

Your puzzle answer was 548. */

/* Takes an array and returns an array of arrays, where adjacent equal elements
  are grouped together. For example, `group([0, 1, 1, 1, 0, 0])` returns `[[0],
  [1, 1, 1], [0, 0]]`. */
function group(arr) {
  var groups = [],
      i = 0;
  while (i < arr.length) {
    var _group = [];
    do {
      _group.push(arr[i++]);
    } while (arr[i] === _group[0]);
    groups.push(_group);
  }
  return groups;
}

function shift(char) {
  if (char === "-") {
    return " ";
  }
  if (char === " ") {
    return " ";
  }
  if (char === "z") {
    return "a";
  }
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

function decrypt(iterations, code) {
  var chars = code.split("");
  for (var i = 0; i < iterations; i++) {
    chars = chars.map(shift);
  }
  return chars.reduce(function (x, y) {
    return x + y;
  }, "");
}

// Facilitates sorting groups by length first, and then alphabetically.
function compareGroups(x, y) {
  if (y.length - x.length) {
    return y.length - x.length;
  }
  return x[0] > y[0] ? 1 : -1;
}

function checksum(name) {
  var letters = name.split("").filter(function (x) {
    return x !== "-";
  }).sort(),
      rankedLetters = group(letters).sort(compareGroups).map(function (x) {
    return x[0];
  });
  return rankedLetters.slice(0, 5).reduce(function (x, y) {
    return x + y;
  }, "");
}

function isReal(room) {
  return checksum(room.name) === room.checksum;
}

function part1$3(input) {
  return input.filter(isReal).map(function (x) {
    return x.id;
  }).reduce(function (x, y) {
    return x + y;
  });
}

function part2$3(input) {
  return input.filter(isReal).filter(function (room) {
    return decrypt(room.id, room.name).includes("pole");
  })[0].id;
}

var input04 = [
  {
    "name": "fubrjhqlf-edvnhw-dftxlvlwlrq",
    "id": 803,
    "checksum": "wjvzd"
  },
  {
    "name": "kzgwomvqk-rmttgjmiv-lmxizbumvb",
    "id": 902,
    "checksum": "zmnji"
  },
  {
    "name": "dkqjcbctfqwu-dwppa-fgukip",
    "id": 596,
    "checksum": "syiua"
  },
  {
    "name": "xjinphzm-bmvyz-ytz-gjbdnodxn",
    "id": 135,
    "checksum": "nzbdj"
  },
  {
    "name": "uwtojhynqj-hfsid-xytwflj",
    "id": 177,
    "checksum": "ztsqu"
  },
  {
    "name": "udpsdjlqj-fkrfrodwh-ilqdqflqj",
    "id": 491,
    "checksum": "uscwt"
  },
  {
    "name": "kdijqrbu-fbqijys-whqii-sedjqydcudj",
    "id": 790,
    "checksum": "dijqb"
  },
  {
    "name": "udpsdjlqj-hjj-uhdftxlvlwlrq",
    "id": 439,
    "checksum": "jldhq"
  },
  {
    "name": "bnmrtldq-fqzcd-bqxnfdmhb-bgnbnkzsd-zmzkxrhr",
    "id": 105,
    "checksum": "bdnzm"
  },
  {
    "name": "lejkrscv-wlqqp-sleep-ivrthlzjzkzfe",
    "id": 789,
    "checksum": "elzjk"
  },
  {
    "name": "zlilocri-ciltbo-obxznrfpfqflk",
    "id": 419,
    "checksum": "spmzt"
  },
  {
    "name": "tyepcyletzylw-nsznzwlep-qtylyntyr",
    "id": 821,
    "checksum": "shmzu"
  },
  {
    "name": "ynssr-vtgwr-lmhktzx",
    "id": 865,
    "checksum": "kyqlr"
  },
  {
    "name": "crwwv-pzxsbkdbo-erkq-pxibp",
    "id": 991,
    "checksum": "bpkrw"
  },
  {
    "name": "uiovmbqk-ziuxioqvo-zijjqb-bmkpvwtwog",
    "id": 616,
    "checksum": "sizek"
  },
  {
    "name": "qfmcusbwq-foppwh-cdsfohwcbg",
    "id": 194,
    "checksum": "cfwbh"
  },
  {
    "name": "nvrgfezqvu-irsszk-drerxvdvek",
    "id": 477,
    "checksum": "tvzgs"
  },
  {
    "name": "otzkxtgzoutgr-hatte-jkbkruvsktz",
    "id": 748,
    "checksum": "yutkm"
  },
  {
    "name": "ksodcbwnsr-qcbgiasf-ufors-pibbm-rsdzcmasbh",
    "id": 298,
    "checksum": "sbcra"
  },
  {
    "name": "dmbttjgjfe-qmbtujd-hsbtt-bobmztjt",
    "id": 259,
    "checksum": "mkyef"
  },
  {
    "name": "lnkfaypeha-bhksan-wymqeoepekj",
    "id": 836,
    "checksum": "lcygv"
  },
  {
    "name": "zekvierkzferc-treup-ljvi-kvjkzex",
    "id": 789,
    "checksum": "ekrvz"
  },
  {
    "name": "ajyqqgdgcb-djmucp-mncpyrgmlq",
    "id": 626,
    "checksum": "cyuom"
  },
  {
    "name": "sbnqbhjoh-fhh-bdrvjtjujpo",
    "id": 857,
    "checksum": "bmhse"
  },
  {
    "name": "surmhfwloh-iorzhu-vklsslqj",
    "id": 829,
    "checksum": "hlsor"
  },
  {
    "name": "ymszqfuo-nmewqf-iadwetab",
    "id": 690,
    "checksum": "unsbc"
  },
  {
    "name": "gpewwmjmih-tpewxmg-kveww-xvemrmrk",
    "id": 464,
    "checksum": "mrtux"
  },
  {
    "name": "rzvkjiduzy-nxvqzibzm-cpio-mzxzdqdib",
    "id": 395,
    "checksum": "lnkyz"
  },
  {
    "name": "qzoggwtwsr-suu-kcfygvcd",
    "id": 766,
    "checksum": "gcsuw"
  },
  {
    "name": "molgbzqfib-bdd-rpbo-qbpqfkd",
    "id": 679,
    "checksum": "tljei"
  },
  {
    "name": "gcfcnuls-aluxy-vcibutulxiom-vohhs-uhufsmcm",
    "id": 110,
    "checksum": "mstvf"
  },
  {
    "name": "nzcczdtgp-clmmte-lylwjdtd",
    "id": 561,
    "checksum": "puhls"
  },
  {
    "name": "hqcfqwydw-fbqijys-whqii-ijehqwu",
    "id": 166,
    "checksum": "czvwd"
  },
  {
    "name": "ytu-xjhwjy-wfintfhynaj-uqfxynh-lwfxx-xjwanhjx",
    "id": 567,
    "checksum": "syfzw"
  },
  {
    "name": "ujoon-ytaanqtpc-itrwcdadvn",
    "id": 895,
    "checksum": "ntmsp"
  },
  {
    "name": "xzwrmkbqtm-xtiabqk-oziaa-zmamizkp",
    "id": 460,
    "checksum": "amzik"
  },
  {
    "name": "rwcnawjcrxwju-snuuhknjw-jlzdrbrcrxw",
    "id": 979,
    "checksum": "rwjcn"
  },
  {
    "name": "oknkvcta-itcfg-ecpfa-octmgvkpi",
    "id": 414,
    "checksum": "cktaf"
  },
  {
    "name": "kdijqrbu-uww-mehaixef",
    "id": 348,
    "checksum": "oyzxu"
  },
  {
    "name": "ncjzrpytn-hplazytkpo-prr-hzcvdsza",
    "id": 249,
    "checksum": "yvxgz"
  },
  {
    "name": "qczcftiz-pibbm-hfowbwbu",
    "id": 870,
    "checksum": "bcfiw"
  },
  {
    "name": "xqvwdeoh-fdqgb-dftxlvlwlrq",
    "id": 777,
    "checksum": "ymaiz"
  },
  {
    "name": "rgllk-qss-ruzmzouzs",
    "id": 482,
    "checksum": "ynsqw"
  },
  {
    "name": "eadalsjq-yjsvw-jsttal-ksdwk",
    "id": 112,
    "checksum": "mlgwj"
  },
  {
    "name": "sbqiiyvyut-isqludwuh-xkdj-efuhqjyedi",
    "id": 166,
    "checksum": "iudqy"
  },
  {
    "name": "ziuxioqvo-kpwkwtibm-xczkpiaqvo",
    "id": 382,
    "checksum": "jucqm"
  },
  {
    "name": "jef-iushuj-sqdto-seqjydw-skijecuh-iuhlysu",
    "id": 322,
    "checksum": "sbnmo"
  },
  {
    "name": "hqcfqwydw-uww-sedjqydcudj",
    "id": 816,
    "checksum": "krxlq"
  },
  {
    "name": "shmml-qlr-znexrgvat",
    "id": 741,
    "checksum": "twjzq"
  },
  {
    "name": "elrkdcdugrxv-gbh-pdunhwlqj",
    "id": 153,
    "checksum": "sunto"
  },
  {
    "name": "nsyjwsfyntsfq-gfxpjy-hzxytrjw-xjwanhj",
    "id": 385,
    "checksum": "jyfns"
  },
  {
    "name": "irdgrxzex-sleep-jkfirxv",
    "id": 867,
    "checksum": "ikstj"
  },
  {
    "name": "mybbycsfo-mkxni-dbksxsxq",
    "id": 666,
    "checksum": "nmotl"
  },
  {
    "name": "xmtjbzidx-xcjxjgvoz-mznzvmxc",
    "id": 525,
    "checksum": "acpvh"
  },
  {
    "name": "zilqwikbqdm-ntwemz-zmikycqaqbqwv",
    "id": 642,
    "checksum": "cxfge"
  },
  {
    "name": "pkl-oaynap-xwogap-iwjwcaiajp",
    "id": 290,
    "checksum": "cedyr"
  },
  {
    "name": "zlilocri-ciltbo-zrpqljbo-pbosfzb",
    "id": 757,
    "checksum": "bloiz"
  },
  {
    "name": "foadouwbu-suu-aobousasbh",
    "id": 896,
    "checksum": "uoabs"
  },
  {
    "name": "lzfmdshb-okzrshb-fqzrr-zbpthrhshnm",
    "id": 859,
    "checksum": "poznx"
  },
  {
    "name": "wifilzof-mwupyhayl-bohn-nywbhifias",
    "id": 994,
    "checksum": "neotf"
  },
  {
    "name": "pbybeshy-rtt-ynobengbel",
    "id": 845,
    "checksum": "beynt"
  },
  {
    "name": "ohmnuvfy-mwupyhayl-bohn-guleyncha",
    "id": 188,
    "checksum": "sdqab"
  },
  {
    "name": "mvhkvbdib-wpiit-mzvxlpdndodji",
    "id": 811,
    "checksum": "uxmls"
  },
  {
    "name": "jxdkbqfz-oxyyfq-pqloxdb",
    "id": 991,
    "checksum": "qxbdf"
  },
  {
    "name": "sxdobxkdsyxkv-lexxi-nocsqx",
    "id": 640,
    "checksum": "jlfha"
  },
  {
    "name": "shoewudys-sqdto-jhqydydw",
    "id": 478,
    "checksum": "dsyho"
  },
  {
    "name": "xtwtelcj-rclop-upwwjmply-epnsyzwzrj",
    "id": 821,
    "checksum": "kdcvu"
  },
  {
    "name": "sehheiylu-vbemuh-qsgkyiyjyed",
    "id": 192,
    "checksum": "rmqpn"
  },
  {
    "name": "fmsledevhsyw-fyrrc-wxsveki",
    "id": 516,
    "checksum": "bzgvw"
  },
  {
    "name": "jfifqxov-doxab-pzxsbkdbo-erkq-jxkxdbjbkq",
    "id": 939,
    "checksum": "bxkdj"
  },
  {
    "name": "bnknqetk-cxd-bnmszhmldms",
    "id": 547,
    "checksum": "jcdas"
  },
  {
    "name": "jsehsyafy-vqw-dgyaklauk",
    "id": 996,
    "checksum": "ayksd"
  },
  {
    "name": "rdadguja-qjccn-uxcpcrxcv",
    "id": 921,
    "checksum": "gyvhm"
  },
  {
    "name": "lxuxaodu-mhn-bnaerlnb",
    "id": 693,
    "checksum": "nablu"
  },
  {
    "name": "ymszqfuo-otaoaxmfq-pqhqxabyqzf",
    "id": 794,
    "checksum": "kvfeg"
  },
  {
    "name": "ykhknbqh-bhksan-hwxknwpknu",
    "id": 238,
    "checksum": "hswtq"
  },
  {
    "name": "veqtekmrk-tpewxmg-kveww-hitpscqirx",
    "id": 646,
    "checksum": "mpoxs"
  },
  {
    "name": "zhdsrqlchg-pdjqhwlf-edvnhw-vwrudjh",
    "id": 491,
    "checksum": "hdwjl"
  },
  {
    "name": "tcrjjzwzvu-upv-jvimztvj",
    "id": 867,
    "checksum": "xbyim"
  },
  {
    "name": "qzchnzbshud-qzaahs-dmfhmddqhmf",
    "id": 261,
    "checksum": "gxmsf"
  },
  {
    "name": "vxupkizork-xghhoz-zkinturume",
    "id": 488,
    "checksum": "brhyz"
  },
  {
    "name": "raphhxuxts-hrpktcvtg-wjci-sthxvc",
    "id": 765,
    "checksum": "htcxp"
  },
  {
    "name": "ujqgywfau-wyy-mkwj-lwklafy",
    "id": 164,
    "checksum": "wyafj"
  },
  {
    "name": "ubhatstkwhnl-unggr-wxiehrfxgm",
    "id": 553,
    "checksum": "yqtez"
  },
  {
    "name": "gifavtkzcv-vxx-jkfirxv",
    "id": 971,
    "checksum": "vxfik"
  },
  {
    "name": "xgjougizobk-hatte-xkgiwaoyozout",
    "id": 150,
    "checksum": "vsazb"
  },
  {
    "name": "nij-mywlyn-mwupyhayl-bohn-womnigyl-mylpcwy",
    "id": 734,
    "checksum": "ysutv"
  },
  {
    "name": "kwtwznct-kivlg-kwibqvo-tijwzibwzg",
    "id": 850,
    "checksum": "wiktz"
  },
  {
    "name": "nij-mywlyn-wuhxs-wiuncha-yhachyylcha",
    "id": 266,
    "checksum": "aznkv"
  },
  {
    "name": "pkl-oaynap-bhksan-nayaerejc",
    "id": 602,
    "checksum": "phqso"
  },
  {
    "name": "oxjmxdfkd-zxkav-zlxqfkd-lmboxqflkp",
    "id": 419,
    "checksum": "xkdfl"
  },
  {
    "name": "jshzzpmplk-zjhclunly-obua-zopwwpun",
    "id": 617,
    "checksum": "vzouh"
  },
  {
    "name": "xgvnndadzy-ezggtwzvi-xpnojhzm-nzmqdxz",
    "id": 499,
    "checksum": "zndgx"
  },
  {
    "name": "glrcplyrgmlyj-aylbw-amyrgle-amlryglkclr",
    "id": 938,
    "checksum": "abmon"
  },
  {
    "name": "xcitgcpixdcpa-hrpktcvtg-wjci-igpxcxcv",
    "id": 219,
    "checksum": "cipxg"
  },
  {
    "name": "muqfedyput-isqludwuh-xkdj-udwyduuhydw",
    "id": 868,
    "checksum": "udwyh"
  },
  {
    "name": "fkqbokxqflkxi-yflexwxoalrp-pzxsbkdbo-erkq-absbilmjbkq",
    "id": 159,
    "checksum": "bkxlq"
  },
  {
    "name": "tmrszakd-cxd-zbpthrhshnm",
    "id": 781,
    "checksum": "hdmrs"
  },
  {
    "name": "kpvgtpcvkqpcn-ejqeqncvg-wugt-vguvkpi",
    "id": 284,
    "checksum": "efhns"
  },
  {
    "name": "xqvwdeoh-mhoobehdq-frqwdlqphqw",
    "id": 933,
    "checksum": "jzuyw"
  },
  {
    "name": "pynffvsvrq-wryylorna-bcrengvbaf",
    "id": 689,
    "checksum": "rfnvy"
  },
  {
    "name": "qmpmxevc-kvehi-fyrrc-wepiw",
    "id": 932,
    "checksum": "entmr"
  },
  {
    "name": "qzlozfhmf-bzmcx-bnzshmf-knfhrshbr",
    "id": 755,
    "checksum": "fhzbm"
  },
  {
    "name": "awzwhofm-ufors-rms-obozmgwg",
    "id": 610,
    "checksum": "omwfg"
  },
  {
    "name": "emixwvqhml-kpwkwtibm-lmxizbumvb",
    "id": 460,
    "checksum": "nkcey"
  },
  {
    "name": "zgmfyxypbmsq-hcjjwzcyl-asqrmkcp-qcptgac",
    "id": 652,
    "checksum": "fnjvm"
  },
  {
    "name": "yaxsnlcrun-ljwmh-mnyjacvnwc",
    "id": 901,
    "checksum": "vbxwn"
  },
  {
    "name": "buzahisl-jhukf-jvhapun-thyrlapun",
    "id": 435,
    "checksum": "gcdyo"
  },
  {
    "name": "jsvagsulanw-hdsklau-yjskk-kzahhafy",
    "id": 476,
    "checksum": "qkyzs"
  },
  {
    "name": "rzvkjiduzy-agjrzm-yzqzgjkhzio",
    "id": 135,
    "checksum": "zjgik"
  },
  {
    "name": "udglrdfwlyh-edvnhw-zrunvkrs",
    "id": 205,
    "checksum": "drhln"
  },
  {
    "name": "mrxivrexmsrep-jpsaiv-pefsvexsvc",
    "id": 698,
    "checksum": "esvpr"
  },
  {
    "name": "xzwrmkbqtm-kzgwomvqk-zijjqb-nqvivkqvo",
    "id": 642,
    "checksum": "cabgs"
  },
  {
    "name": "rzvkjiduzy-zbb-nvgzn",
    "id": 551,
    "checksum": "zbnvd"
  },
  {
    "name": "ncjzrpytn-nsznzwlep-ecltytyr",
    "id": 327,
    "checksum": "ntyzc"
  },
  {
    "name": "raphhxuxts-gpqqxi-bpcpvtbtci",
    "id": 115,
    "checksum": "nzslk"
  },
  {
    "name": "fmsledevhsyw-gerhc-wxsveki",
    "id": 100,
    "checksum": "stmxw"
  },
  {
    "name": "rgndvtcxr-xcitgcpixdcpa-uadltg-rdcipxcbtci",
    "id": 531,
    "checksum": "cditx"
  },
  {
    "name": "rdadguja-snt-igpxcxcv",
    "id": 895,
    "checksum": "acdgx"
  },
  {
    "name": "ide-htrgti-rdggdhxkt-ytaanqtpc-htgkxrth",
    "id": 921,
    "checksum": "tcpfv"
  },
  {
    "name": "sawlkjevaz-ywjzu-klanwpekjo",
    "id": 758,
    "checksum": "ajkwe"
  },
  {
    "name": "hjgbwuladw-jsvagsulanw-hdsklau-yjskk-kwjnauwk",
    "id": 996,
    "checksum": "ucavp"
  },
  {
    "name": "wfummczcyx-dyffsvyuh-xyjulngyhn",
    "id": 188,
    "checksum": "xnufp"
  },
  {
    "name": "yuxufmdk-sdmpq-omzpk-pqbxakyqzf",
    "id": 690,
    "checksum": "pstoj"
  },
  {
    "name": "wfummczcyx-willimcpy-vumeyn-yhachyylcha",
    "id": 708,
    "checksum": "piodu"
  },
  {
    "name": "sxdobxkdsyxkv-cmkfoxqob-rexd-nozkbdwoxd",
    "id": 614,
    "checksum": "nmdwp"
  },
  {
    "name": "dmbttjgjfe-gmpxfs-vtfs-uftujoh",
    "id": 961,
    "checksum": "ftjgm"
  },
  {
    "name": "lnkfaypeha-zua-skngodkl",
    "id": 732,
    "checksum": "zyntx"
  },
  {
    "name": "hqtyeqsjylu-uww-kiuh-juijydw",
    "id": 530,
    "checksum": "ujwyh"
  },
  {
    "name": "mbiyqoxsm-zvkcdsm-qbkcc-yzobkdsyxc",
    "id": 146,
    "checksum": "onlmp"
  },
  {
    "name": "wlqqp-upv-ivtvzmzex",
    "id": 165,
    "checksum": "fmczd"
  },
  {
    "name": "cjpibabsepvt-fhh-dvtupnfs-tfswjdf",
    "id": 389,
    "checksum": "bzdyv"
  },
  {
    "name": "kzgwomvqk-jcvvg-bmkpvwtwog",
    "id": 252,
    "checksum": "zelhm"
  },
  {
    "name": "htsxzrjw-lwfij-hfsid-htfynsl-ywfnsnsl",
    "id": 567,
    "checksum": "ivjzs"
  },
  {
    "name": "ide-htrgti-qphzti-gtprfjxhxixdc",
    "id": 401,
    "checksum": "fcapt"
  },
  {
    "name": "qvbmzvibqwvit-uiovmbqk-xtiabqk-oziaa-lmxizbumvb",
    "id": 564,
    "checksum": "rotyq"
  },
  {
    "name": "diozmivodjivg-ytz-yzkvmohzio",
    "id": 109,
    "checksum": "omrxn"
  },
  {
    "name": "njmjubsz-hsbef-qmbtujd-hsbtt-eftjho",
    "id": 701,
    "checksum": "bjths"
  },
  {
    "name": "krxqjijamxdb-snuuhknjw-anbnjalq",
    "id": 433,
    "checksum": "tkemh"
  },
  {
    "name": "avw-zljyla-yhiipa-ylzlhyjo",
    "id": 149,
    "checksum": "zphyt"
  },
  {
    "name": "nzydfxpc-rclop-clmmte-pyrtyppctyr",
    "id": 899,
    "checksum": "mjzsr"
  },
  {
    "name": "bqxnfdmhb-oqnidbshkd-rbzudmfdq-gtms-knfhrshbr",
    "id": 365,
    "checksum": "bdhfm"
  },
  {
    "name": "nvrgfezqvu-treup-tfrkzex-rercpjzj",
    "id": 347,
    "checksum": "rezfj"
  },
  {
    "name": "gcfcnuls-aluxy-wuhxs-wiuncha-fiacmncwm",
    "id": 526,
    "checksum": "cuanw"
  },
  {
    "name": "amjmpdsj-djmucp-kypicrgle",
    "id": 964,
    "checksum": "ftznh"
  },
  {
    "name": "hvbizodx-wvnfzo-mzxzdqdib",
    "id": 655,
    "checksum": "dzcnu"
  },
  {
    "name": "tagzsrsjvgmk-jsvagsulanw-vqw-vwhsjlewfl",
    "id": 892,
    "checksum": "tjlop"
  },
  {
    "name": "mvkccspson-mrymyvkdo-bomosfsxq",
    "id": 952,
    "checksum": "mosck"
  },
  {
    "name": "lqwhuqdwlrqdo-fkrfrodwh-frqwdlqphqw",
    "id": 153,
    "checksum": "jnwkm"
  },
  {
    "name": "surmhfwloh-mhoobehdq-uhdftxlvlwlrq",
    "id": 153,
    "checksum": "nyvqs"
  },
  {
    "name": "dlhwvupglk-ibuuf-klclsvwtlua",
    "id": 565,
    "checksum": "doeyn"
  },
  {
    "name": "pwcvonofrcig-gqojsbusf-vibh-fsoqeiwgwhwcb",
    "id": 376,
    "checksum": "jcdlh"
  },
  {
    "name": "muqfedyput-hqrryj-efuhqjyedi",
    "id": 998,
    "checksum": "equyd"
  },
  {
    "name": "hwbba-hnqygt-fgrctvogpv",
    "id": 466,
    "checksum": "slvyu"
  },
  {
    "name": "wfummczcyx-wbiwifuny-xyjulngyhn",
    "id": 916,
    "checksum": "spycn"
  },
  {
    "name": "zilqwikbqdm-xtiabqk-oziaa-mvoqvmmzqvo",
    "id": 304,
    "checksum": "rxhzs"
  },
  {
    "name": "xzwrmkbqtm-ntwemz-nqvivkqvo",
    "id": 954,
    "checksum": "gztdk"
  },
  {
    "name": "dyz-combod-lkcuod-bomosfsxq",
    "id": 198,
    "checksum": "zyvju"
  },
  {
    "name": "pbafhzre-tenqr-enoovg-phfgbzre-freivpr",
    "id": 455,
    "checksum": "cakfs"
  },
  {
    "name": "tfcfiwlc-avccpsvre-jkfirxv",
    "id": 217,
    "checksum": "obgiy"
  },
  {
    "name": "udpsdjlqj-gbh-vdohv",
    "id": 257,
    "checksum": "fpnes"
  },
  {
    "name": "bwx-amkzmb-moo-zmkmqdqvo",
    "id": 330,
    "checksum": "whxfs"
  },
  {
    "name": "raphhxuxts-tvv-jhtg-ithixcv",
    "id": 401,
    "checksum": "fyiab"
  },
  {
    "name": "sorozgxe-mxgjk-laffe-vrgyzoi-mxgyy-xkykgxin",
    "id": 878,
    "checksum": "vkjnu"
  },
  {
    "name": "clotzlnetgp-mldvpe-epnsyzwzrj",
    "id": 613,
    "checksum": "qdmpu"
  },
  {
    "name": "gokzyxsjon-zvkcdsm-qbkcc-domrxyvyqi",
    "id": 224,
    "checksum": "ckoyd"
  },
  {
    "name": "mtzslklcozfd-ojp-hzcvdsza",
    "id": 795,
    "checksum": "hvasg"
  },
  {
    "name": "pxtihgbsxw-cxeeruxtg-labiibgz",
    "id": 475,
    "checksum": "ztyng"
  },
  {
    "name": "mtzslklcozfd-nsznzwlep-cplnbftdtetzy",
    "id": 353,
    "checksum": "zuofx"
  },
  {
    "name": "emixwvqhml-moo-zmamizkp",
    "id": 538,
    "checksum": "hvrjm"
  },
  {
    "name": "foadouwbu-pibbm-oqeiwgwhwcb",
    "id": 168,
    "checksum": "mfiwn"
  },
  {
    "name": "qyujihctyx-mwupyhayl-bohn-jolwbumcha",
    "id": 240,
    "checksum": "hyuab"
  },
  {
    "name": "sxdobxkdsyxkv-pejji-mkxni-ckvoc",
    "id": 926,
    "checksum": "bktwh"
  },
  {
    "name": "nglmtuex-ietlmbv-zktll-etuhktmhkr",
    "id": 345,
    "checksum": "tlekm"
  },
  {
    "name": "qekrixmg-tpewxmg-kveww-wepiw",
    "id": 724,
    "checksum": "wegik"
  },
  {
    "name": "oaddaeuhq-dmnnuf-fdmuzuzs",
    "id": 326,
    "checksum": "ersqt"
  },
  {
    "name": "ktwbhtvmbox-xzz-vnlmhfxk-lxkobvx",
    "id": 943,
    "checksum": "yzabx"
  },
  {
    "name": "zvyvgnel-tenqr-enoovg-npdhvfvgvba",
    "id": 117,
    "checksum": "cadbz"
  },
  {
    "name": "vhehkyne-vtgwr-lmhktzx",
    "id": 579,
    "checksum": "hektv"
  },
  {
    "name": "kzgwomvqk-zijjqb-bmkpvwtwog",
    "id": 148,
    "checksum": "njtma"
  },
  {
    "name": "fubrjhqlf-fdqgb-zrunvkrs",
    "id": 907,
    "checksum": "ormsl"
  },
  {
    "name": "oqnidbshkd-rbzudmfdq-gtms-kzanqzsnqx",
    "id": 859,
    "checksum": "suagv"
  },
  {
    "name": "upq-tfdsfu-dboez-mbcpsbupsz",
    "id": 779,
    "checksum": "srtpm"
  },
  {
    "name": "ugjjgkanw-hdsklau-yjskk-lwuzfgdgyq",
    "id": 632,
    "checksum": "gkjua"
  },
  {
    "name": "oxmeeuruqp-ngzzk-fqotzaxask",
    "id": 326,
    "checksum": "aymzt"
  },
  {
    "name": "eqnqthwn-dcumgv-ugtxkegu",
    "id": 596,
    "checksum": "nfath"
  },
  {
    "name": "ygcrqpkbgf-uecxgpigt-jwpv-eqpvckpogpv",
    "id": 648,
    "checksum": "qsxvr"
  },
  {
    "name": "udglrdfwlyh-hjj-zrunvkrs",
    "id": 829,
    "checksum": "csnzf"
  },
  {
    "name": "vhkkhlbox-vtgwr-vhtmbgz-ftgtzxfxgm",
    "id": 657,
    "checksum": "sojpi"
  },
  {
    "name": "luxciuwncpy-vcibutulxiom-vumeyn-ijyluncihm",
    "id": 708,
    "checksum": "dtmyw"
  },
  {
    "name": "xst-wigvix-ikk-qevoixmrk",
    "id": 646,
    "checksum": "wuqfg"
  },
  {
    "name": "ide-htrgti-gpqqxi-gtrtxkxcv",
    "id": 947,
    "checksum": "lzybn"
  },
  {
    "name": "udglrdfwlyh-fdqgb-frdwlqj-vwrudjh",
    "id": 179,
    "checksum": "oqkrh"
  },
  {
    "name": "ipvohghykvbz-kfl-klzpnu",
    "id": 617,
    "checksum": "khlpv"
  },
  {
    "name": "oxaflxzqfsb-yxphbq-pxibp",
    "id": 653,
    "checksum": "afqdk"
  },
  {
    "name": "bkzrrhehdc-idkkxadzm-cdudknoldms",
    "id": 105,
    "checksum": "dkchm"
  },
  {
    "name": "zsxyfgqj-gfxpjy-hzxytrjw-xjwanhj",
    "id": 723,
    "checksum": "zstyw"
  },
  {
    "name": "kfg-jvtivk-treup-tfrkzex-ivrthlzjzkzfe",
    "id": 997,
    "checksum": "ktzef"
  },
  {
    "name": "zekvierkzferc-treup-tfrkzex-uvgcfpdvek",
    "id": 971,
    "checksum": "ekwcg"
  },
  {
    "name": "xgsvgmotm-igtje-iugzotm-xkykgxin",
    "id": 358,
    "checksum": "mzwst"
  },
  {
    "name": "jyfvnlupj-ihzrla-yljlpcpun",
    "id": 539,
    "checksum": "ljpnu"
  },
  {
    "name": "bkwzkqsxq-zbytomdsvo-lkcuod-domrxyvyqi",
    "id": 692,
    "checksum": "odkqy"
  },
  {
    "name": "pyknyegle-cee-qfgnngle",
    "id": 756,
    "checksum": "muevb"
  },
  {
    "name": "buzahisl-zjhclunly-obua-yljlpcpun",
    "id": 461,
    "checksum": "cfmdj"
  },
  {
    "name": "oxjmxdfkd-gbiivybxk-absbilmjbkq",
    "id": 731,
    "checksum": "uhjdc"
  },
  {
    "name": "uqtqbizg-ozilm-kzgwomvqk-jcvvg-ikycqaqbqwv",
    "id": 798,
    "checksum": "qvgik"
  },
  {
    "name": "ohmnuvfy-wbiwifuny-nluchcha",
    "id": 786,
    "checksum": "hnucf"
  },
  {
    "name": "sbnqbhjoh-dboez-bdrvjtjujpo",
    "id": 753,
    "checksum": "dpmzu"
  },
  {
    "name": "jyddc-glsgspexi-pskmwxmgw",
    "id": 100,
    "checksum": "aeylk"
  },
  {
    "name": "qvbmzvibqwvit-xzwrmkbqtm-jiasmb-ikycqaqbqwv",
    "id": 902,
    "checksum": "qbimv"
  },
  {
    "name": "htqtwkzq-idj-zxjw-yjxynsl",
    "id": 983,
    "checksum": "zvyre"
  },
  {
    "name": "xekdwvwnzkqo-ejpanjwpekjwh-ywjzu-oanreyao",
    "id": 914,
    "checksum": "wejak"
  },
  {
    "name": "sedikcuh-whqtu-sbqiiyvyut-isqludwuh-xkdj-skijecuh-iuhlysu",
    "id": 322,
    "checksum": "sktui"
  },
  {
    "name": "rkpqxyib-bdd-xkxivpfp",
    "id": 471,
    "checksum": "pxbdi"
  },
  {
    "name": "qxdwpopgsdjh-rpcsn-rdpixcv-jhtg-ithixcv",
    "id": 895,
    "checksum": "pcdhi"
  },
  {
    "name": "mbggf-yhiipa-klclsvwtlua",
    "id": 955,
    "checksum": "oelkb"
  },
  {
    "name": "eadalsjq-yjsvw-hjgbwuladw-bwddqtwsf-jwsuimakalagf",
    "id": 372,
    "checksum": "rpxet"
  },
  {
    "name": "hmsdqmzshnmzk-rbzudmfdq-gtms-cdoknxldms",
    "id": 859,
    "checksum": "ywtqf"
  },
  {
    "name": "bnqqnrhud-bzmcx-bnzshmf-qdbdhuhmf",
    "id": 625,
    "checksum": "smnwl"
  },
  {
    "name": "vagreangvbany-onfxrg-qrcyblzrag",
    "id": 195,
    "checksum": "szmkx"
  },
  {
    "name": "nij-mywlyn-wuhxs-mufym",
    "id": 916,
    "checksum": "sbczy"
  },
  {
    "name": "xst-wigvix-hci-asvowlst",
    "id": 958,
    "checksum": "istvw"
  },
  {
    "name": "lnkfaypeha-lhwopey-cnwoo-paydjkhkcu",
    "id": 680,
    "checksum": "lstyr"
  },
  {
    "name": "veqtekmrk-fewoix-gywxsqiv-wivzmgi",
    "id": 646,
    "checksum": "kvuxl"
  },
  {
    "name": "jvyyvzpcl-wshzapj-nyhzz-klzpnu",
    "id": 929,
    "checksum": "zpyhj"
  },
  {
    "name": "amlqskcp-epybc-djmucp-sqcp-rcqrgle",
    "id": 730,
    "checksum": "opija"
  },
  {
    "name": "sbqiiyvyut-isqludwuh-xkdj-cqhaujydw",
    "id": 998,
    "checksum": "yqrzk"
  },
  {
    "name": "kwzzwaqdm-rmttgjmiv-xczkpiaqvo",
    "id": 928,
    "checksum": "smyzo"
  },
  {
    "name": "zekvierkzferc-lejkrscv-gcrjkzt-xirjj-uvjzxe",
    "id": 321,
    "checksum": "svyma"
  },
  {
    "name": "pbybeshy-rtt-fuvccvat",
    "id": 949,
    "checksum": "izmnw"
  },
  {
    "name": "oxaflxzqfsb-zxkav-ixyloxqlov",
    "id": 133,
    "checksum": "mplun"
  },
  {
    "name": "apwmeclga-aylbw-amyrgle-pcqcypaf",
    "id": 600,
    "checksum": "bimqc"
  },
  {
    "name": "iqmbazulqp-nmewqf-mzmxkeue",
    "id": 144,
    "checksum": "oveiw"
  },
  {
    "name": "udglrdfwlyh-edvnhw-hqjlqhhulqj",
    "id": 985,
    "checksum": "cpsor"
  },
  {
    "name": "pinovwgz-zbb-gvwjmvojmt",
    "id": 655,
    "checksum": "dvsby"
  },
  {
    "name": "qfmcusbwq-rms-kcfygvcd",
    "id": 688,
    "checksum": "cfmqs"
  },
  {
    "name": "tbxmlkfwba-zxkav-zlxqfkd-jxohbqfkd",
    "id": 523,
    "checksum": "ljhnt"
  },
  {
    "name": "gsrwyqiv-kvehi-gsvvswmzi-wgezirkiv-lyrx-hitevxqirx",
    "id": 100,
    "checksum": "yfbno"
  },
  {
    "name": "etyyx-qzaahs-bnmszhmldms",
    "id": 599,
    "checksum": "msahy"
  },
  {
    "name": "mvhkvbdib-nxvqzibzm-cpio-mzvxlpdndodji",
    "id": 473,
    "checksum": "rtjeu"
  },
  {
    "name": "wlsiayhcw-vumeyn-ijyluncihm",
    "id": 994,
    "checksum": "yziwj"
  },
  {
    "name": "oaddaeuhq-dmpuamofuhq-qss-fqotzaxask",
    "id": 898,
    "checksum": "ycmns"
  },
  {
    "name": "ynukcajey-ywjzu-zalwnpiajp",
    "id": 108,
    "checksum": "vmosc"
  },
  {
    "name": "dzczkrip-xiruv-tyftfcrkv-uvgrikdvek",
    "id": 529,
    "checksum": "bdmtn"
  },
  {
    "name": "clxalrtyr-nlyoj-xlcvpetyr",
    "id": 379,
    "checksum": "wexcp"
  },
  {
    "name": "zlkprjbo-doxab-bdd-ixyloxqlov",
    "id": 419,
    "checksum": "nitur"
  },
  {
    "name": "uiovmbqk-rmttgjmiv-bmkpvwtwog",
    "id": 850,
    "checksum": "lsyvi"
  },
  {
    "name": "dfcxsqhwzs-pibbm-aofyshwbu",
    "id": 168,
    "checksum": "mtsnf"
  },
  {
    "name": "lhkhszqx-fqzcd-eknvdq-cdrhfm",
    "id": 287,
    "checksum": "dhqcf"
  },
  {
    "name": "cvabijtm-lgm-ivitgaqa",
    "id": 694,
    "checksum": "rpzkl"
  },
  {
    "name": "qzlozfhmf-rbzudmfdq-gtms-zbpthrhshnm",
    "id": 963,
    "checksum": "hmzfb"
  },
  {
    "name": "bxaxipgn-vgpst-qjccn-detgpixdch",
    "id": 921,
    "checksum": "cgpxd"
  },
  {
    "name": "krxqjijamxdb-kjbtnc-cajrwrwp",
    "id": 771,
    "checksum": "liezd"
  },
  {
    "name": "surmhfwloh-vfdyhqjhu-kxqw-rshudwlrqv",
    "id": 387,
    "checksum": "bzfdx"
  },
  {
    "name": "dlhwvupglk-ihzrla-dvyrzovw",
    "id": 643,
    "checksum": "lvdhr"
  },
  {
    "name": "dlhwvupglk-lnn-zopwwpun",
    "id": 435,
    "checksum": "lnpwu"
  },
  {
    "name": "sbnqbhjoh-sbccju-ufdiopmphz",
    "id": 519,
    "checksum": "bhcjo"
  },
  {
    "name": "oaxadrgx-otaoaxmfq-etubbuzs",
    "id": 820,
    "checksum": "aoxbt"
  },
  {
    "name": "encuukhkgf-lgnnadgcp-nqikuvkeu",
    "id": 648,
    "checksum": "jhcwv"
  },
  {
    "name": "ajyqqgdgcb-zyqicr-bcqgel",
    "id": 964,
    "checksum": "zyesc"
  },
  {
    "name": "kmjezxodgz-wvnfzo-xpnojhzm-nzmqdxz",
    "id": 681,
    "checksum": "wrjtn"
  },
  {
    "name": "fnjyxwrinm-kjbtnc-mnyjacvnwc",
    "id": 277,
    "checksum": "mjtln"
  },
  {
    "name": "ktfitzbgz-cxeeruxtg-nlxk-mxlmbgz",
    "id": 527,
    "checksum": "yiwvu"
  },
  {
    "name": "tbxmlkfwba-avb-pqloxdb",
    "id": 887,
    "checksum": "balxd"
  },
  {
    "name": "pbybeshy-fpniratre-uhag-ynobengbel",
    "id": 689,
    "checksum": "nqied"
  },
  {
    "name": "emixwvqhml-lgm-aitma",
    "id": 174,
    "checksum": "maile"
  },
  {
    "name": "ryexqpqhteki-rqiauj-husuylydw",
    "id": 686,
    "checksum": "pmutv"
  },
  {
    "name": "njmjubsz-hsbef-tdbwfohfs-ivou-fohjoffsjoh",
    "id": 337,
    "checksum": "fohjs"
  },
  {
    "name": "lnkfaypeha-ydkykhwpa-nayaerejc",
    "id": 394,
    "checksum": "mwhrf"
  },
  {
    "name": "pybgmyargtc-zsllw-qyjcq",
    "id": 964,
    "checksum": "ctgad"
  },
  {
    "name": "myvybpev-cmkfoxqob-rexd-ckvoc",
    "id": 198,
    "checksum": "ueqjn"
  },
  {
    "name": "votubcmf-ezf-sftfbsdi",
    "id": 285,
    "checksum": "nvymk"
  },
  {
    "name": "hwdtljsnh-gzssd-jslnsjjwnsl",
    "id": 671,
    "checksum": "pimqy"
  },
  {
    "name": "votubcmf-dipdpmbuf-mbcpsbupsz",
    "id": 441,
    "checksum": "lckdr"
  },
  {
    "name": "ide-htrgti-gpqqxi-rjhidbtg-htgkxrt",
    "id": 193,
    "checksum": "gynxm"
  },
  {
    "name": "yhwooebeaz-ydkykhwpa-opknwca",
    "id": 290,
    "checksum": "yqzkj"
  },
  {
    "name": "nbhofujd-tdbwfohfs-ivou-tbmft",
    "id": 493,
    "checksum": "tjgzf"
  },
  {
    "name": "xgsvgmotm-kmm-rumoyzoiy",
    "id": 358,
    "checksum": "vzysu"
  },
  {
    "name": "etaqigpke-fag-fgukip",
    "id": 154,
    "checksum": "gaefi"
  },
  {
    "name": "sbnqbhjoh-sbccju-tfswjdft",
    "id": 961,
    "checksum": "bjscf"
  },
  {
    "name": "hvbizodx-kgvnodx-bmvnn-adivixdib",
    "id": 629,
    "checksum": "pabrd"
  },
  {
    "name": "xfbqpojafe-qmbtujd-hsbtt-usbjojoh",
    "id": 103,
    "checksum": "bjotf"
  },
  {
    "name": "ohmnuvfy-wbiwifuny-wihnuchgyhn",
    "id": 422,
    "checksum": "fdwyt"
  },
  {
    "name": "wifilzof-vohhs-lymyulwb",
    "id": 448,
    "checksum": "iuvhx"
  },
  {
    "name": "owshgfarwv-hdsklau-yjskk-ogjckzgh",
    "id": 606,
    "checksum": "kghsa"
  },
  {
    "name": "sorozgxe-mxgjk-yigbktmkx-natz-zxgototm",
    "id": 800,
    "checksum": "gotxk"
  },
  {
    "name": "lejkrscv-tyftfcrkv-jvimztvj",
    "id": 399,
    "checksum": "tjimr"
  },
  {
    "name": "gsvvswmzi-nippcfier-wivzmgiw",
    "id": 932,
    "checksum": "zybmh"
  },
  {
    "name": "odiih-ljwmh-lxjcrwp-uxprbcrlb",
    "id": 979,
    "checksum": "lrbch"
  },
  {
    "name": "uzfqdzmfuazmx-vqxxknqmz-ruzmzouzs",
    "id": 404,
    "checksum": "oglmz"
  },
  {
    "name": "kyelcrga-bwc-qyjcq",
    "id": 366,
    "checksum": "mzens"
  },
  {
    "name": "foadouwbu-gqojsbusf-vibh-gsfjwqsg",
    "id": 688,
    "checksum": "yfqzi"
  },
  {
    "name": "kfg-jvtivk-gcrjkzt-xirjj-ivtvzmzex",
    "id": 581,
    "checksum": "jvikt"
  },
  {
    "name": "ckgvutofkj-igtje-giwaoyozout",
    "id": 332,
    "checksum": "cwijt"
  },
  {
    "name": "pbybeshy-pubpbyngr-erfrnepu",
    "id": 923,
    "checksum": "bpery"
  },
  {
    "name": "hcd-gsqfsh-dzoghwq-ufogg-gozsg",
    "id": 532,
    "checksum": "mqopr"
  },
  {
    "name": "wfummczcyx-wuhxs-wiuncha-yhachyylcha",
    "id": 188,
    "checksum": "hxcrd"
  },
  {
    "name": "ujqgywfau-tmffq-ljsafafy",
    "id": 112,
    "checksum": "bfytz"
  },
  {
    "name": "clxalrtyr-ojp-qtylyntyr",
    "id": 119,
    "checksum": "gijln"
  },
  {
    "name": "lmprfnmjc-mzhcar-qrmpyec",
    "id": 548,
    "checksum": "mcrpa"
  },
  {
    "name": "yhwooebeaz-oywrajcan-dqjp-ajcejaanejc",
    "id": 316,
    "checksum": "gbruk"
  },
  {
    "name": "wifilzof-xsy-yhachyylcha",
    "id": 604,
    "checksum": "hstyz"
  },
  {
    "name": "ziuxioqvo-ntwemz-tijwzibwzg",
    "id": 460,
    "checksum": "qjaft"
  },
  {
    "name": "qspkfdujmf-kfmmzcfbo-gjobodjoh",
    "id": 103,
    "checksum": "qcemb"
  },
  {
    "name": "sbqiiyvyut-tou-jusxdebewo",
    "id": 764,
    "checksum": "rwmyx"
  },
  {
    "name": "surmhfwloh-edvnhw-pdunhwlqj",
    "id": 699,
    "checksum": "retcb"
  },
  {
    "name": "mvkccspson-zvkcdsm-qbkcc-ecob-docdsxq",
    "id": 198,
    "checksum": "csdko"
  },
  {
    "name": "pbybeshy-wryylorna-pbagnvazrag",
    "id": 429,
    "checksum": "vnjmx"
  },
  {
    "name": "vdzonmhydc-bzmcx-trdq-sdrshmf",
    "id": 937,
    "checksum": "kigbu"
  },
  {
    "name": "qzoggwtwsr-pibbm-rsdzcmasbh",
    "id": 454,
    "checksum": "lnqsc"
  },
  {
    "name": "fodvvlilhg-gbh-dqdobvlv",
    "id": 153,
    "checksum": "vdlbg"
  },
  {
    "name": "iuruxlar-xgjougizobk-igtje-vaxingyotm",
    "id": 696,
    "checksum": "gioux"
  },
  {
    "name": "rmn-qcapcr-qaytclecp-fslr-qrmpyec",
    "id": 314,
    "checksum": "cztqy"
  },
  {
    "name": "nvrgfezqvu-srjbvk-crsfirkfip",
    "id": 373,
    "checksum": "rfvik"
  },
  {
    "name": "xtwtelcj-rclop-tyepcyletzylw-qwzhpc-opgpwzaxpye",
    "id": 717,
    "checksum": "mdzsw"
  },
  {
    "name": "sxdobxkdsyxkv-lexxi-dbksxsxq",
    "id": 744,
    "checksum": "wzmfo"
  },
  {
    "name": "bnqqnrhud-cxd-otqbgzrhmf",
    "id": 911,
    "checksum": "zqmyx"
  },
  {
    "name": "kmjezxodgz-xjinphzm-bmvyz-ytz-gvwjmvojmt",
    "id": 343,
    "checksum": "mzjvg"
  },
  {
    "name": "hplazytkpo-mldvpe-pyrtyppctyr",
    "id": 951,
    "checksum": "pgoxs"
  },
  {
    "name": "dzczkrip-xiruv-treup-ljvi-kvjkzex",
    "id": 867,
    "checksum": "newix"
  },
  {
    "name": "gsrwyqiv-kvehi-gerhc-vieguymwmxmsr",
    "id": 516,
    "checksum": "egimr"
  },
  {
    "name": "rgllk-otaoaxmfq-ymdwqfuzs",
    "id": 924,
    "checksum": "aflmo"
  },
  {
    "name": "pualyuhapvuhs-kfl-wbyjohzpun",
    "id": 461,
    "checksum": "uhpal"
  },
  {
    "name": "vagreangvbany-cebwrpgvyr-pnaql-erfrnepu",
    "id": 481,
    "checksum": "hmnwj"
  },
  {
    "name": "wsvsdkbi-qbkno-oqq-domrxyvyqi",
    "id": 354,
    "checksum": "xyfjg"
  },
  {
    "name": "ykjoqian-cnwza-xwogap-odellejc",
    "id": 992,
    "checksum": "utznj"
  },
  {
    "name": "bkwzkqsxq-oqq-ecob-docdsxq",
    "id": 718,
    "checksum": "vhbka"
  },
  {
    "name": "yaxsnlcrun-kjbtnc-fxatbqxy",
    "id": 745,
    "checksum": "ysrtb"
  },
  {
    "name": "uwtojhynqj-rflsjynh-uqfxynh-lwfxx-tujwfyntsx",
    "id": 307,
    "checksum": "vulsb"
  },
  {
    "name": "dmybmsuzs-otaoaxmfq-eqdhuoqe",
    "id": 950,
    "checksum": "zhwyv"
  },
  {
    "name": "gokzyxsjon-tovvilokx-nocsqx",
    "id": 978,
    "checksum": "oxkns"
  },
  {
    "name": "oazegyqd-sdmpq-rgllk-otaoaxmfq-pqeusz",
    "id": 976,
    "checksum": "qaode"
  },
  {
    "name": "pejji-bkllsd-vyqscdsmc",
    "id": 614,
    "checksum": "scdjl"
  },
  {
    "name": "nwzekwypera-ywjzu-zarahkliajp",
    "id": 758,
    "checksum": "bahgf"
  },
  {
    "name": "zuv-ykixkz-laffe-yigbktmkx-natz-jkvruesktz",
    "id": 774,
    "checksum": "trdse"
  },
  {
    "name": "pelbtravp-cynfgvp-tenff-npdhvfvgvba",
    "id": 845,
    "checksum": "lgrst"
  },
  {
    "name": "zlkprjbo-doxab-avb-obpbxoze",
    "id": 549,
    "checksum": "cobza"
  },
  {
    "name": "ujqgywfau-aflwjfslagfsd-bwddqtwsf-ljsafafy",
    "id": 424,
    "checksum": "wcozk"
  },
  {
    "name": "rdchjbtg-vgpst-hrpktcvtg-wjci-gthtpgrw",
    "id": 193,
    "checksum": "jsqvi"
  },
  {
    "name": "ixeumktoi-vrgyzoi-mxgyy-ygrky",
    "id": 514,
    "checksum": "grzvh"
  },
  {
    "name": "wkqxodsm-nio-bomosfsxq",
    "id": 588,
    "checksum": "osmqx"
  },
  {
    "name": "pbybeshy-onfxrg-fgbentr",
    "id": 715,
    "checksum": "ahftx"
  },
  {
    "name": "pdjqhwlf-fdqgb-dftxlvlwlrq",
    "id": 829,
    "checksum": "lbrgj"
  },
  {
    "name": "ejpanjwpekjwh-nwxxep-ykjpwejiajp",
    "id": 602,
    "checksum": "mtcnj"
  },
  {
    "name": "npmhcargjc-cee-rcaflmjmew",
    "id": 860,
    "checksum": "cemaj"
  },
  {
    "name": "zuv-ykixkz-lruckx-ygrky",
    "id": 748,
    "checksum": "kyrux"
  },
  {
    "name": "myvybpev-lexxi-bomosfsxq",
    "id": 822,
    "checksum": "xbemo"
  },
  {
    "name": "ipvohghykvbz-qlssfilhu-aljouvsvnf",
    "id": 591,
    "checksum": "frsvt"
  },
  {
    "name": "hqtyeqsjylu-fbqijys-whqii-huqsgkyiyjyed",
    "id": 660,
    "checksum": "stpzn"
  },
  {
    "name": "irgyyolokj-inuiurgzk-rghuxgzuxe",
    "id": 124,
    "checksum": "guirk"
  },
  {
    "name": "xmrrq-ugjjgkanw-wyy-umklgewj-kwjnauw",
    "id": 736,
    "checksum": "wjgku"
  },
  {
    "name": "fydelmwp-clmmte-xlylrpxpye",
    "id": 847,
    "checksum": "lempy"
  },
  {
    "name": "tfiifjzmv-avccpsvre-dribvkzex",
    "id": 685,
    "checksum": "tvxrq"
  },
  {
    "name": "iqmbazulqp-qss-pqbxakyqzf",
    "id": 508,
    "checksum": "yxnth"
  },
  {
    "name": "iuruxlar-houngfgxjuay-igtje-iugzotm-ktmotkkxotm",
    "id": 618,
    "checksum": "dtvzi"
  },
  {
    "name": "lhkhszqx-fqzcd-bzmcx-rsnqzfd",
    "id": 495,
    "checksum": "wtxeb"
  },
  {
    "name": "sebehvkb-sqdto-cqdqwucudj",
    "id": 348,
    "checksum": "dqbce"
  },
  {
    "name": "hdgdovmt-bmvyz-agjrzm-xpnojhzm-nzmqdxz",
    "id": 343,
    "checksum": "tsxdr"
  },
  {
    "name": "tfcfiwlc-irsszk-wzeretzex",
    "id": 477,
    "checksum": "thmsr"
  },
  {
    "name": "awzwhofm-ufors-qobrm-cdsfohwcbg",
    "id": 168,
    "checksum": "tofxm"
  },
  {
    "name": "gpewwmjmih-hci-eguymwmxmsr",
    "id": 958,
    "checksum": "mjnya"
  },
  {
    "name": "clxalrtyr-clotzlnetgp-awldetn-rcldd-opdtry",
    "id": 171,
    "checksum": "hynzs"
  },
  {
    "name": "rgllk-otaoaxmfq-ruzmzouzs",
    "id": 118,
    "checksum": "ozalm"
  },
  {
    "name": "zgmfyxypbmsq-djmucp-qyjcq",
    "id": 574,
    "checksum": "hbayt"
  },
  {
    "name": "shoewudys-sqdto-seqjydw-tuiywd",
    "id": 608,
    "checksum": "kdalb"
  },
  {
    "name": "gokzyxsjon-mkxni-vyqscdsmc",
    "id": 432,
    "checksum": "sckmn"
  },
  {
    "name": "enzcntvat-pnaql-grpuabybtl",
    "id": 585,
    "checksum": "antbl"
  },
  {
    "name": "sehheiylu-isqludwuh-xkdj-jusxdebewo",
    "id": 400,
    "checksum": "pjhum"
  },
  {
    "name": "kmjezxodgz-ezggtwzvi-jkzmvodjin",
    "id": 369,
    "checksum": "zgjde"
  },
  {
    "name": "xcitgcpixdcpa-qjccn-detgpixdch",
    "id": 739,
    "checksum": "aohtz"
  },
  {
    "name": "ksodcbwnsr-tzcksf-fsqswjwbu",
    "id": 714,
    "checksum": "swbcf"
  },
  {
    "name": "lxaaxbren-kjbtnc-jlzdrbrcrxw",
    "id": 225,
    "checksum": "nwkot"
  },
  {
    "name": "mvydjvxodqz-nxvqzibzm-cpio-hvmfzodib",
    "id": 733,
    "checksum": "vzdim"
  },
  {
    "name": "sbejpbdujwf-dboez-dvtupnfs-tfswjdf",
    "id": 363,
    "checksum": "youlh"
  },
  {
    "name": "mtzslklcozfd-mldvpe-cpdplcns",
    "id": 275,
    "checksum": "lzyck"
  },
  {
    "name": "nvrgfezqvu-sleep-kirzezex",
    "id": 607,
    "checksum": "bwxna"
  },
  {
    "name": "qekrixmg-gerhc-xiglrspskc",
    "id": 204,
    "checksum": "dcozr"
  },
  {
    "name": "ktwbhtvmbox-vtgwr-vhtmbgz-wxiehrfxgm",
    "id": 449,
    "checksum": "tbghm"
  },
  {
    "name": "etaqigpke-ecpfa-tgegkxkpi",
    "id": 674,
    "checksum": "bopve"
  },
  {
    "name": "kwtwznct-jiasmb-ikycqaqbqwv",
    "id": 252,
    "checksum": "qwabc"
  },
  {
    "name": "oxaflxzqfsb-yxphbq-ildfpqfzp",
    "id": 939,
    "checksum": "endsq"
  },
  {
    "name": "qcffcgwjs-suu-gvwddwbu",
    "id": 272,
    "checksum": "byfto"
  },
  {
    "name": "lhkhszqx-fqzcd-cxd-lzmzfdldms",
    "id": 391,
    "checksum": "dzlcf"
  },
  {
    "name": "iutyaskx-mxgjk-lruckx-uvkxgzouty",
    "id": 254,
    "checksum": "uvfmo"
  },
  {
    "name": "nzwzcqfw-mldvpe-zapcletzyd",
    "id": 483,
    "checksum": "aznms"
  },
  {
    "name": "luxciuwncpy-wbiwifuny-ijyluncihm",
    "id": 396,
    "checksum": "xuqsy"
  },
  {
    "name": "rgndvtcxr-hrpktcvtg-wjci-sthxvc",
    "id": 401,
    "checksum": "krmqs"
  },
  {
    "name": "tyepcyletzylw-nlyoj-nzletyr-ecltytyr",
    "id": 457,
    "checksum": "zrxqh"
  },
  {
    "name": "zsxyfgqj-rnqnyfwd-lwfij-kqtbjw-uzwhmfxnsl",
    "id": 307,
    "checksum": "fwjnq"
  },
  {
    "name": "qjopwxha-oywrajcan-dqjp-oanreyao",
    "id": 862,
    "checksum": "zwomt"
  },
  {
    "name": "pwcvonofrcig-dzoghwq-ufogg-hfowbwbu",
    "id": 844,
    "checksum": "ogwfb"
  },
  {
    "name": "bgmxkgtmbhgte-ietlmbv-zktll-vhgmtbgfxgm",
    "id": 787,
    "checksum": "gmtbl"
  },
  {
    "name": "eza-dpncpe-mldvpe-cpdplcns",
    "id": 405,
    "checksum": "uobym"
  },
  {
    "name": "qmpmxevc-kvehi-gerhc-gsexmrk-gywxsqiv-wivzmgi",
    "id": 464,
    "checksum": "dafcm"
  },
  {
    "name": "joufsobujpobm-dpssptjwf-kfmmzcfbo-tbmft",
    "id": 961,
    "checksum": "fbmoj"
  },
  {
    "name": "foadouwbu-xszzmpsob-rsgwub",
    "id": 324,
    "checksum": "ubxcr"
  },
  {
    "name": "ucynmlgxcb-aylbw-qfgnngle",
    "id": 210,
    "checksum": "tfzcn"
  },
  {
    "name": "sorozgxe-mxgjk-lruckx-uvkxgzouty",
    "id": 254,
    "checksum": "mnvbw"
  },
  {
    "name": "vxupkizork-kmm-jkyomt",
    "id": 384,
    "checksum": "kmoij"
  },
  {
    "name": "mhi-lxvkxm-vtgwr-phkdlahi",
    "id": 761,
    "checksum": "hiklm"
  },
  {
    "name": "ixccb-fkrfrodwh-ghyhorsphqw",
    "id": 335,
    "checksum": "hrcfo"
  },
  {
    "name": "hcd-gsqfsh-dzoghwq-ufogg-rsjszcdasbh",
    "id": 168,
    "checksum": "rfxyw"
  },
  {
    "name": "tbxmlkfwba-zxkav-pbosfzbp",
    "id": 965,
    "checksum": "ipmzy"
  },
  {
    "name": "xcitgcpixdcpa-qxdwpopgsdjh-uadltg-uxcpcrxcv",
    "id": 167,
    "checksum": "bjvrp"
  },
  {
    "name": "etyyx-cxd-kzanqzsnqx",
    "id": 573,
    "checksum": "bmaui"
  },
  {
    "name": "cybyjqho-whqtu-hqrryj-efuhqjyedi",
    "id": 530,
    "checksum": "czdbf"
  },
  {
    "name": "votubcmf-kfmmzcfbo-efqbsunfou",
    "id": 597,
    "checksum": "fbmou"
  },
  {
    "name": "awzwhofm-ufors-tzcksf-sbuwbssfwbu",
    "id": 272,
    "checksum": "rsubo"
  },
  {
    "name": "kwzzwaqdm-kivlg-kwibqvo-amzdqkma",
    "id": 356,
    "checksum": "inmyj"
  },
  {
    "name": "ixccb-fdqgb-zrunvkrs",
    "id": 569,
    "checksum": "etxgi"
  },
  {
    "name": "rdchjbtg-vgpst-egdytrixat-qjccn-rdcipxcbtci",
    "id": 713,
    "checksum": "duwnc"
  },
  {
    "name": "mbiyqoxsm-tovvilokx-psxkxmsxq",
    "id": 978,
    "checksum": "xmosi"
  },
  {
    "name": "xgvnndadzy-xviyt-rjmfncjk",
    "id": 707,
    "checksum": "josem"
  },
  {
    "name": "aczupnetwp-awldetn-rcldd-nfdezxpc-dpcgtnp",
    "id": 873,
    "checksum": "svdjf"
  },
  {
    "name": "ahngzyzqcntr-bzmcx-sdbgmnknfx",
    "id": 859,
    "checksum": "nzbcg"
  },
  {
    "name": "sorozgxe-mxgjk-igtje-jkvgxzsktz",
    "id": 696,
    "checksum": "gjkxz"
  },
  {
    "name": "rgllk-dmybmsuzs-omzpk-oamfuzs-pqhqxabyqzf",
    "id": 456,
    "checksum": "alknr"
  },
  {
    "name": "aflwjfslagfsd-xdgowj-hmjuzskafy",
    "id": 528,
    "checksum": "fajsd"
  },
  {
    "name": "htwwtxnaj-hmthtqfyj-htsyfnsrjsy",
    "id": 879,
    "checksum": "hnldm"
  },
  {
    "name": "gokzyxsjon-lexxi-nozvyiwoxd",
    "id": 640,
    "checksum": "fziuy"
  },
  {
    "name": "pbeebfvir-cynfgvp-tenff-genvavat",
    "id": 819,
    "checksum": "efvna"
  },
  {
    "name": "pybgmyargtc-djmucp-bcqgel",
    "id": 184,
    "checksum": "rfmta"
  },
  {
    "name": "myvybpev-mbiyqoxsm-oqq-dbksxsxq",
    "id": 926,
    "checksum": "tbqzr"
  },
  {
    "name": "xmtjbzidx-xviyt-yzqzgjkhzio",
    "id": 499,
    "checksum": "sptmq"
  },
  {
    "name": "iruzfrtkzmv-irsszk-ivtvzmzex",
    "id": 659,
    "checksum": "zirvk"
  },
  {
    "name": "xst-wigvix-nippcfier-erepcwmw",
    "id": 126,
    "checksum": "iepwc"
  },
  {
    "name": "amlqskcp-epybc-aylbw-amyrgle-pcacgtgle",
    "id": 730,
    "checksum": "mpskn"
  },
  {
    "name": "pybgmyargtc-qaytclecp-fslr-jyzmpyrmpw",
    "id": 756,
    "checksum": "syuvq"
  },
  {
    "name": "kwzzwaqdm-kivlg-kwibqvo-tijwzibwzg",
    "id": 746,
    "checksum": "zrpnw"
  },
  {
    "name": "frqvxphu-judgh-hjj-vklsslqj",
    "id": 543,
    "checksum": "myczb"
  },
  {
    "name": "tcorcikpi-tcfkqcevkxg-rncuvke-itcuu-rwtejcukpi",
    "id": 154,
    "checksum": "jyoui"
  },
  {
    "name": "mybbycsfo-excdklvo-zvkcdsm-qbkcc-nocsqx",
    "id": 744,
    "checksum": "rpzts"
  },
  {
    "name": "emixwvqhml-xtiabqk-oziaa-nqvivkqvo",
    "id": 850,
    "checksum": "voxnr"
  },
  {
    "name": "wlqqp-avccpsvre-jrcvj",
    "id": 945,
    "checksum": "cvjpq"
  },
  {
    "name": "rgndvtcxr-qphzti-itrwcdadvn",
    "id": 713,
    "checksum": "drtci"
  },
  {
    "name": "zhdsrqlchg-sodvwlf-judvv-fxvwrphu-vhuylfh",
    "id": 335,
    "checksum": "sgotp"
  },
  {
    "name": "jchipqat-uadltg-tcvxcttgxcv",
    "id": 219,
    "checksum": "lquds"
  },
  {
    "name": "gntmfefwitzx-hfsid-rfwpjynsl",
    "id": 931,
    "checksum": "ubayg"
  },
  {
    "name": "apwmeclga-njyqrga-epyqq-nspafyqgle",
    "id": 964,
    "checksum": "aqegp"
  },
  {
    "name": "xgjougizobk-hatte-xkykgxin",
    "id": 592,
    "checksum": "hczyv"
  },
  {
    "name": "zgmfyxypbmsq-afmamjyrc-nspafyqgle",
    "id": 106,
    "checksum": "nltfa"
  },
  {
    "name": "jshzzpmplk-ihzrla-jbzavtly-zlycpjl",
    "id": 721,
    "checksum": "kzovn"
  },
  {
    "name": "apwmeclga-hcjjwzcyl-rpyglgle",
    "id": 496,
    "checksum": "lvmqk"
  },
  {
    "name": "kwtwznct-akidmvomz-pcvb-mvoqvmmzqvo",
    "id": 746,
    "checksum": "hgszx"
  },
  {
    "name": "surmhfwloh-exqqb-dftxlvlwlrq",
    "id": 621,
    "checksum": "lqfhr"
  },
  {
    "name": "dfcxsqhwzs-rms-sbuwbssfwbu",
    "id": 844,
    "checksum": "qcrnm"
  },
  {
    "name": "ytu-xjhwjy-wfggny-jslnsjjwnsl",
    "id": 541,
    "checksum": "jnswy"
  },
  {
    "name": "zovldbkfz-gbiivybxk-obzbfsfkd",
    "id": 809,
    "checksum": "bfkzd"
  },
  {
    "name": "lxwbdvna-pajmn-ajkkrc-anlnrerwp",
    "id": 147,
    "checksum": "amynk"
  },
  {
    "name": "xjgjmapg-agjrzm-hvivbzhzio",
    "id": 811,
    "checksum": "tjpax"
  },
  {
    "name": "willimcpy-xsy-lymyulwb",
    "id": 318,
    "checksum": "ytesn"
  },
  {
    "name": "ckgvutofkj-lruckx-vaxingyotm",
    "id": 228,
    "checksum": "efntu"
  },
  {
    "name": "zloolpfsb-avb-cfkxkzfkd",
    "id": 159,
    "checksum": "iyjts"
  },
  {
    "name": "vhglnfxk-zktwx-ubhatstkwhnl-ietlmbv-zktll-kxvxbobgz",
    "id": 293,
    "checksum": "kltbx"
  },
  {
    "name": "gokzyxsjon-mkxni-cdybkqo",
    "id": 952,
    "checksum": "tynps"
  },
  {
    "name": "kfg-jvtivk-sleep-jyzggzex",
    "id": 373,
    "checksum": "egjkv"
  },
  {
    "name": "hwdtljsnh-xhfajsljw-mzsy-wjxjfwhm",
    "id": 827,
    "checksum": "vuaex"
  },
  {
    "name": "qxdwpopgsdjh-eaphixr-vgphh-jhtg-ithixcv",
    "id": 427,
    "checksum": "hpgix"
  },
  {
    "name": "cebwrpgvyr-pubpbyngr-qrcyblzrag",
    "id": 299,
    "checksum": "ecfbk"
  },
  {
    "name": "bwx-amkzmb-kivlg-lmxizbumvb",
    "id": 148,
    "checksum": "wjmyo"
  },
  {
    "name": "bdavqofuxq-vqxxknqmz-fdmuzuzs",
    "id": 326,
    "checksum": "ezmtq"
  },
  {
    "name": "laffe-hatte-ktmotkkxotm",
    "id": 410,
    "checksum": "ymcnz"
  },
  {
    "name": "fkqbokxqflkxi-avb-zrpqljbo-pbosfzb",
    "id": 497,
    "checksum": "bfkoq"
  },
  {
    "name": "ynssr-vetllbybxw-yehpxk-ftgtzxfxgm",
    "id": 241,
    "checksum": "xtybe"
  },
  {
    "name": "dsxxw-djmucp-kypicrgle",
    "id": 444,
    "checksum": "gvxac"
  },
  {
    "name": "dfcxsqhwzs-forwcoqhwjs-gqojsbusf-vibh-fsqswjwbu",
    "id": 220,
    "checksum": "ytwiz"
  },
  {
    "name": "wfintfhynaj-xhfajsljw-mzsy-hzxytrjw-xjwanhj",
    "id": 307,
    "checksum": "tkzub"
  },
  {
    "name": "ajvyjprwp-bljenwpna-qdwc-anbnjalq",
    "id": 459,
    "checksum": "sqrzn"
  },
  {
    "name": "pyknyegle-dsxxw-bwc-kypicrgle",
    "id": 340,
    "checksum": "vgwsd"
  },
  {
    "name": "dwbcjkun-mhn-ldbcxvna-bnaerln",
    "id": 485,
    "checksum": "vgsei"
  },
  {
    "name": "wsvsdkbi-qbkno-pvygob-kxkvicsc",
    "id": 458,
    "checksum": "mynov"
  },
  {
    "name": "qfkkj-upwwjmply-zapcletzyd",
    "id": 613,
    "checksum": "noqls"
  },
  {
    "name": "bqxnfdmhb-qzaahs-zmzkxrhr",
    "id": 989,
    "checksum": "wzhlt"
  },
  {
    "name": "apwmeclga-afmamjyrc-dglylagle",
    "id": 860,
    "checksum": "algmc"
  },
  {
    "name": "jyfvnlupj-msvdly-klwhyatlua",
    "id": 175,
    "checksum": "lyaju"
  },
  {
    "name": "wlsiayhcw-dyffsvyuh-fuvilunils",
    "id": 422,
    "checksum": "iuzke"
  },
  {
    "name": "fydelmwp-awldetn-rcldd-xlylrpxpye",
    "id": 873,
    "checksum": "rdnsj"
  },
  {
    "name": "bkzrrhehdc-azrjds-ehmzmbhmf",
    "id": 287,
    "checksum": "hmrzb"
  },
  {
    "name": "mvkccspson-bkllsd-dbksxsxq",
    "id": 926,
    "checksum": "skbcd"
  },
  {
    "name": "qfmcusbwq-foppwh-rsdzcmasbh",
    "id": 870,
    "checksum": "sbcfh"
  },
  {
    "name": "vrurcjah-pajmn-npp-fxatbqxy",
    "id": 381,
    "checksum": "apjnr"
  },
  {
    "name": "vjpwncrl-yaxsnlcrun-kdwwh-uxprbcrlb",
    "id": 485,
    "checksum": "gylan"
  },
  {
    "name": "lgh-kwujwl-tskcwl-ugflsafewfl",
    "id": 788,
    "checksum": "lwfgk"
  },
  {
    "name": "avw-zljyla-jyfvnlupj-qlssfilhu-aljouvsvnf",
    "id": 409,
    "checksum": "ljvaf"
  },
  {
    "name": "lejkrscv-jtrmvexvi-ylek-fgvirkzfej",
    "id": 763,
    "checksum": "evjkr"
  },
  {
    "name": "cxy-bnlanc-kdwwh-lxwcjrwvnwc",
    "id": 277,
    "checksum": "umehn"
  },
  {
    "name": "eza-dpncpe-clmmte-cplnbftdtetzy",
    "id": 145,
    "checksum": "ysezq"
  },
  {
    "name": "pinovwgz-kgvnodx-bmvnn-vxlpdndodji",
    "id": 603,
    "checksum": "encyh"
  },
  {
    "name": "gifavtkzcv-sleep-cfxzjkztj",
    "id": 919,
    "checksum": "vdzmb"
  },
  {
    "name": "lnkfaypeha-ywjzu-ykwpejc-zaoecj",
    "id": 212,
    "checksum": "huvex"
  },
  {
    "name": "oqnidbshkd-cxd-qdrdzqbg",
    "id": 573,
    "checksum": "kvsnt"
  },
  {
    "name": "hcd-gsqfsh-foppwh-hfowbwbu",
    "id": 402,
    "checksum": "cldzy"
  },
  {
    "name": "qvbmzvibqwvit-xtiabqk-oziaa-apqxxqvo",
    "id": 590,
    "checksum": "wbigl"
  },
  {
    "name": "myxcewob-qbkno-zvkcdsm-qbkcc-nofovyzwoxd",
    "id": 198,
    "checksum": "vqfcu"
  },
  {
    "name": "vehmsegxmzi-hci-xiglrspskc",
    "id": 542,
    "checksum": "isceg"
  },
  {
    "name": "xekdwvwnzkqo-bhksan-wymqeoepekj",
    "id": 602,
    "checksum": "eynfr"
  },
  {
    "name": "ujqgywfau-xdgowj-wfyafwwjafy",
    "id": 866,
    "checksum": "wfajy"
  },
  {
    "name": "lxaaxbren-ajkkrc-ldbcxvna-bnaerln",
    "id": 303,
    "checksum": "anblr"
  },
  {
    "name": "dpotvnfs-hsbef-kfmmzcfbo-dvtupnfs-tfswjdf",
    "id": 259,
    "checksum": "ufyek"
  },
  {
    "name": "zhdsrqlchg-sodvwlf-judvv-uhfhlylqj",
    "id": 959,
    "checksum": "zjoag"
  },
  {
    "name": "rdggdhxkt-uadltg-hwxeexcv",
    "id": 557,
    "checksum": "xigef"
  },
  {
    "name": "nwzekwypera-acc-klanwpekjo",
    "id": 368,
    "checksum": "aekwc"
  },
  {
    "name": "ymszqfuo-otaoaxmfq-mocgueufuaz",
    "id": 248,
    "checksum": "xgnem"
  },
  {
    "name": "yaxsnlcrun-ljwmh-jwjuhbrb",
    "id": 459,
    "checksum": "ebkum"
  },
  {
    "name": "oxaflxzqfsb-yflexwxoalrp-mixpqfz-doxpp-pxibp",
    "id": 107,
    "checksum": "ilnsk"
  },
  {
    "name": "oaddaeuhq-pkq-ymdwqfuzs",
    "id": 638,
    "checksum": "yuczs"
  },
  {
    "name": "pynffvsvrq-pnaql-pbngvat-qrirybczrag",
    "id": 845,
    "checksum": "ranpq"
  },
  {
    "name": "tpspahyf-nyhkl-wshzapj-nyhzz-mpuhujpun",
    "id": 721,
    "checksum": "hpnuy"
  },
  {
    "name": "kyelcrga-hcjjwzcyl-qrmpyec",
    "id": 392,
    "checksum": "cyejl"
  },
  {
    "name": "lqwhuqdwlrqdo-exqqb-ghsorbphqw",
    "id": 491,
    "checksum": "uopyz"
  },
  {
    "name": "rdadguja-eaphixr-vgphh-pcpanhxh",
    "id": 141,
    "checksum": "qmfpg"
  },
  {
    "name": "yhtwhnpun-qlssfilhu-svnpzapjz",
    "id": 149,
    "checksum": "hnpsl"
  },
  {
    "name": "xtwtelcj-rclop-nlyoj-qtylyntyr",
    "id": 249,
    "checksum": "ltycj"
  },
  {
    "name": "rgndvtcxr-rpcsn-rdpixcv-ejgrwphxcv",
    "id": 193,
    "checksum": "kulpr"
  },
  {
    "name": "qmpmxevc-kvehi-ikk-pefsvexsvc",
    "id": 542,
    "checksum": "aitns"
  },
  {
    "name": "otzkxtgzoutgr-lruckx-xkgiwaoyozout",
    "id": 150,
    "checksum": "mdfyq"
  },
  {
    "name": "zotts-luvvcn-lyuwkocmcncih",
    "id": 942,
    "checksum": "gjymz"
  },
  {
    "name": "vqr-ugetgv-dwppa-fgrnqaogpv",
    "id": 544,
    "checksum": "tromz"
  },
  {
    "name": "cjpibabsepvt-sbccju-nbslfujoh",
    "id": 545,
    "checksum": "mwkqj"
  },
  {
    "name": "aczupnetwp-clmmte-xlcvpetyr",
    "id": 223,
    "checksum": "pmoqy"
  },
  {
    "name": "rdadguja-ytaanqtpc-prfjxhxixdc",
    "id": 245,
    "checksum": "adxcj"
  },
  {
    "name": "ucynmlgxcb-aylbw-amyrgle-bctcjmnkclr",
    "id": 236,
    "checksum": "uazni"
  },
  {
    "name": "shmml-pnaql-pbngvat-grpuabybtl",
    "id": 585,
    "checksum": "jivfg"
  },
  {
    "name": "dzczkrip-xiruv-irsszk-glityrjzex",
    "id": 867,
    "checksum": "nzayl"
  },
  {
    "name": "pbafhzre-tenqr-fpniratre-uhag-pbagnvazrag",
    "id": 377,
    "checksum": "twsqp"
  },
  {
    "name": "tinnm-dzoghwq-ufogg-cdsfohwcbg",
    "id": 636,
    "checksum": "fpxjq"
  },
  {
    "name": "ixeumktoi-igtje-iugzotm-rumoyzoiy",
    "id": 904,
    "checksum": "trlzu"
  },
  {
    "name": "pelbtravp-pnaql-pbngvat-freivprf",
    "id": 949,
    "checksum": "parvb"
  },
  {
    "name": "gsrwyqiv-kvehi-nippcfier-tyvglewmrk",
    "id": 386,
    "checksum": "fctsn"
  },
  {
    "name": "hqcfqwydw-vbemuh-jusxdebewo",
    "id": 400,
    "checksum": "xzfmv"
  },
  {
    "name": "cjpibabsepvt-sbccju-efqmpznfou",
    "id": 935,
    "checksum": "rzenu"
  },
  {
    "name": "fnjyxwrinm-npp-cajrwrwp",
    "id": 979,
    "checksum": "nprwj"
  },
  {
    "name": "vetllbybxw-unggr-ehzblmbvl",
    "id": 501,
    "checksum": "fvmoa"
  },
  {
    "name": "ugfkmewj-yjsvw-wyy-ghwjslagfk",
    "id": 710,
    "checksum": "vmcub"
  },
  {
    "name": "etyyx-qzaahs-btrsnldq-rdquhbd",
    "id": 183,
    "checksum": "gfzym"
  },
  {
    "name": "kzgwomvqk-lgm-camz-bmabqvo",
    "id": 902,
    "checksum": "nfmek"
  },
  {
    "name": "xcitgcpixdcpa-hrpktcvtg-wjci-ejgrwphxcv",
    "id": 869,
    "checksum": "cpgit"
  },
  {
    "name": "pbybeshy-pnaql-pbngvat-ernpdhvfvgvba",
    "id": 351,
    "checksum": "bpvan"
  },
  {
    "name": "jxdkbqfz-zxkav-zlxqfkd-xkxivpfp",
    "id": 991,
    "checksum": "npdis"
  },
  {
    "name": "raphhxuxts-qphzti-hwxeexcv",
    "id": 167,
    "checksum": "hxept"
  },
  {
    "name": "oknkvcta-itcfg-tcorcikpi-fag-tgceswkukvkqp",
    "id": 362,
    "checksum": "qvgoc"
  },
  {
    "name": "amlqskcp-epybc-glrcplyrgmlyj-zsllw-cleglccpgle",
    "id": 158,
    "checksum": "atcbx"
  },
  {
    "name": "apwmeclga-aylbw-amyrgle-bcnjmwkclr",
    "id": 912,
    "checksum": "tnskp"
  },
  {
    "name": "xjmmjndqz-zbb-vxlpdndodji",
    "id": 369,
    "checksum": "wfyzh"
  },
  {
    "name": "shoewudys-rkddo-cqhaujydw",
    "id": 842,
    "checksum": "dhosu"
  },
  {
    "name": "zovldbkfz-ciltbo-qoxfkfkd",
    "id": 289,
    "checksum": "ykmgw"
  },
  {
    "name": "willimcpy-jfumncw-alumm-omyl-nymncha",
    "id": 396,
    "checksum": "isnbe"
  },
  {
    "name": "vjpwncrl-lqxlxujcn-jwjuhbrb",
    "id": 303,
    "checksum": "epojm"
  },
  {
    "name": "gzefmnxq-omzpk-pqbxakyqzf",
    "id": 352,
    "checksum": "zpnyf"
  },
  {
    "name": "ytu-xjhwjy-kqtbjw-hzxytrjw-xjwanhj",
    "id": 281,
    "checksum": "zxolt"
  },
  {
    "name": "esyfwlau-vqw-dstgjslgjq",
    "id": 788,
    "checksum": "xwpyu"
  },
  {
    "name": "kyelcrga-pyzzgr-qfgnngle",
    "id": 834,
    "checksum": "rcqns"
  },
  {
    "name": "ovbunmneqbhf-pubpbyngr-znexrgvat",
    "id": 533,
    "checksum": "vdezh"
  },
  {
    "name": "veqtekmrk-fewoix-gsrxemrqirx",
    "id": 100,
    "checksum": "erxik"
  },
  {
    "name": "hjgbwuladw-hdsklau-yjskk-esjcwlafy",
    "id": 216,
    "checksum": "ajkls"
  },
  {
    "name": "pinovwgz-kmjezxodgz-zbb-vivgtndn",
    "id": 993,
    "checksum": "svekp"
  },
  {
    "name": "xlrypetn-awldetn-rcldd-fdpc-epdetyr",
    "id": 301,
    "checksum": "delpr"
  },
  {
    "name": "ajmrxjlcren-ljwmh-jlzdrbrcrxw",
    "id": 719,
    "checksum": "juazc"
  },
  {
    "name": "ymszqfuo-omzpk-oamfuzs-ruzmzouzs",
    "id": 456,
    "checksum": "caspz"
  },
  {
    "name": "gspsvjyp-tpewxmg-kveww-wepiw",
    "id": 776,
    "checksum": "zglbt"
  },
  {
    "name": "eqnqthwn-ecpfa-fgrnqaogpv",
    "id": 440,
    "checksum": "mnlrz"
  },
  {
    "name": "rflsjynh-hfsid-htfynsl-rfwpjynsl",
    "id": 489,
    "checksum": "ghblf"
  },
  {
    "name": "pkl-oaynap-bhksan-nawymqeoepekj",
    "id": 368,
    "checksum": "aeknp"
  },
  {
    "name": "hwdtljsnh-wfggny-wjxjfwhm",
    "id": 229,
    "checksum": "whjfg"
  },
  {
    "name": "lqwhuqdwlrqdo-exqqb-xvhu-whvwlqj",
    "id": 725,
    "checksum": "rhaqf"
  },
  {
    "name": "jyddc-nippcfier-erepcwmw",
    "id": 178,
    "checksum": "sticn"
  },
  {
    "name": "eadalsjq-yjsvw-wyy-mkwj-lwklafy",
    "id": 736,
    "checksum": "yzjgq"
  },
  {
    "name": "xst-wigvix-veffmx-jmrergmrk",
    "id": 646,
    "checksum": "nuewy"
  },
  {
    "name": "elrkdcdugrxv-gbh-frqwdlqphqw",
    "id": 179,
    "checksum": "zshyg"
  },
  {
    "name": "rdadguja-hrpktcvtg-wjci-jhtg-ithixcv",
    "id": 765,
    "checksum": "tcghi"
  },
  {
    "name": "lejkrscv-zekvierkzferc-irsszk-rercpjzj",
    "id": 399,
    "checksum": "rekzc"
  },
  {
    "name": "kmjezxodgz-nxvqzibzm-cpio-pnzm-oznodib",
    "id": 837,
    "checksum": "zoimn"
  },
  {
    "name": "clotzlnetgp-clmmte-hzcvdsza",
    "id": 457,
    "checksum": "yxtba"
  },
  {
    "name": "aoubshwq-gqojsbusf-vibh-hfowbwbu",
    "id": 428,
    "checksum": "bhosu"
  },
  {
    "name": "bdavqofuxq-dmnnuf-eqdhuoqe",
    "id": 144,
    "checksum": "conrz"
  },
  {
    "name": "xfbqpojafe-qmbtujd-hsbtt-pqfsbujpot",
    "id": 259,
    "checksum": "snmtz"
  },
  {
    "name": "dlhwvupglk-msvdly-svnpzapjz",
    "id": 539,
    "checksum": "lpvds"
  },
  {
    "name": "clotzlnetgp-dnlgpyrpc-sfye-opalcexpye",
    "id": 171,
    "checksum": "ykocp"
  },
  {
    "name": "pejji-pvygob-bokmaescsdsyx",
    "id": 406,
    "checksum": "wmqnk"
  },
  {
    "name": "lejkrscv-avccpsvre-glityrjzex",
    "id": 789,
    "checksum": "cervj"
  },
  {
    "name": "enqvbnpgvir-wryylorna-erfrnepu",
    "id": 403,
    "checksum": "sdygr"
  },
  {
    "name": "hplazytkpo-mldvpe-opawzjxpye",
    "id": 977,
    "checksum": "qtzrk"
  },
  {
    "name": "sbejpbdujwf-dboez-tupsbhf",
    "id": 493,
    "checksum": "bdefj"
  },
  {
    "name": "gsrwyqiv-kvehi-yrwxefpi-fewoix-vigimzmrk",
    "id": 672,
    "checksum": "sytnz"
  },
  {
    "name": "jef-iushuj-zubboruqd-iqbui",
    "id": 946,
    "checksum": "kcysl"
  },
  {
    "name": "surmhfwloh-hjj-dftxlvlwlrq",
    "id": 595,
    "checksum": "lhfjr"
  },
  {
    "name": "zloolpfsb-oxyyfq-abmxoqjbkq",
    "id": 835,
    "checksum": "ynzmp"
  },
  {
    "name": "zotts-mwupyhayl-bohn-xymcah",
    "id": 786,
    "checksum": "iyhxu"
  },
  {
    "name": "zhdsrqlchg-mhoobehdq-fxvwrphu-vhuylfh",
    "id": 257,
    "checksum": "cxogf"
  },
  {
    "name": "ktwbhtvmbox-ktuubm-tvjnblbmbhg",
    "id": 943,
    "checksum": "flrzj"
  },
  {
    "name": "qzoggwtwsr-dfcxsqhwzs-rms-rsgwub",
    "id": 662,
    "checksum": "tehuv"
  },
  {
    "name": "tfejldvi-xiruv-szfyrqriuflj-upv-wzeretzex",
    "id": 555,
    "checksum": "rpocq"
  },
  {
    "name": "qzoggwtwsr-foppwh-twbobqwbu",
    "id": 844,
    "checksum": "wbogp"
  },
  {
    "name": "molgbzqfib-avb-qoxfkfkd",
    "id": 289,
    "checksum": "tkrcd"
  },
  {
    "name": "hqfxxnknji-uqfxynh-lwfxx-fhvznxnynts",
    "id": 177,
    "checksum": "fdlkw"
  },
  {
    "name": "sno-rdbqds-dff-cdrhfm",
    "id": 287,
    "checksum": "dfrsb"
  },
  {
    "name": "dkqjcbctfqwu-gii-wugt-vguvkpi",
    "id": 674,
    "checksum": "sjkzr"
  },
  {
    "name": "wihmogyl-aluxy-wuhxs-mbcjjcha",
    "id": 968,
    "checksum": "eufrc"
  },
  {
    "name": "vetllbybxw-wrx-vnlmhfxk-lxkobvx",
    "id": 969,
    "checksum": "ylumi"
  },
  {
    "name": "rkpqxyib-avb-absbilmjbkq",
    "id": 835,
    "checksum": "wnjuy"
  },
  {
    "name": "iuruxlar-igtje-sgxqkzotm",
    "id": 930,
    "checksum": "girtu"
  },
  {
    "name": "slqryzjc-kyelcrga-bwc-dglylagle",
    "id": 496,
    "checksum": "lcgya"
  },
  {
    "name": "fodvvlilhg-exqqb-xvhu-whvwlqj",
    "id": 673,
    "checksum": "vhlqw"
  },
  {
    "name": "yknnkoera-fahhuxawj-nawymqeoepekj",
    "id": 628,
    "checksum": "sfgvu"
  },
  {
    "name": "fhezusjybu-sqdto-jusxdebewo",
    "id": 166,
    "checksum": "vmzhw"
  },
  {
    "name": "dlhwvupglk-qlssfilhu-klclsvwtlua",
    "id": 591,
    "checksum": "lsuhk"
  },
  {
    "name": "oaxadrgx-eomhqzsqd-tgzf-pqbxakyqzf",
    "id": 716,
    "checksum": "nrgqs"
  },
  {
    "name": "jfifqxov-doxab-oxjmxdfkd-oxyyfq-cfkxkzfkd",
    "id": 887,
    "checksum": "gbrxt"
  },
  {
    "name": "dzczkrip-xiruv-tyftfcrkv-jrcvj",
    "id": 841,
    "checksum": "zcxdu"
  },
  {
    "name": "ajmrxjlcren-snuuhknjw-mnyuxhvnwc",
    "id": 537,
    "checksum": "rjiwk"
  },
  {
    "name": "kgjgrypw-epybc-njyqrga-epyqq-cleglccpgle",
    "id": 548,
    "checksum": "ykprd"
  },
  {
    "name": "qjopwxha-xwogap-opknwca",
    "id": 264,
    "checksum": "nrlsc"
  },
  {
    "name": "ejpanjwpekjwh-xwogap-odellejc",
    "id": 550,
    "checksum": "hndsm"
  },
  {
    "name": "ziuxioqvo-kivlg-kwibqvo-camz-bmabqvo",
    "id": 616,
    "checksum": "iovbq"
  },
  {
    "name": "kfg-jvtivk-szfyrqriuflj-upv-ivjvrity",
    "id": 607,
    "checksum": "drsmt"
  },
  {
    "name": "diozmivodjivg-ezggtwzvi-yzkvmohzio",
    "id": 421,
    "checksum": "nyzbw"
  },
  {
    "name": "gvcskirmg-hci-erepcwmw",
    "id": 464,
    "checksum": "kbwmq"
  },
  {
    "name": "nchhg-kivlg-kwibqvo-mvoqvmmzqvo",
    "id": 460,
    "checksum": "vmoqg"
  },
  {
    "name": "aoubshwq-rms-cdsfohwcbg",
    "id": 714,
    "checksum": "atihz"
  },
  {
    "name": "ajvyjprwp-lqxlxujcn-cajrwrwp",
    "id": 901,
    "checksum": "ghfuv"
  },
  {
    "name": "oqnidbshkd-rbzudmfdq-gtms-rghoohmf",
    "id": 339,
    "checksum": "mrkzl"
  },
  {
    "name": "muqfedyput-hqrryj-iuhlysui",
    "id": 504,
    "checksum": "uyhiq"
  },
  {
    "name": "kgjgrypw-epybc-djmucp-pcacgtgle",
    "id": 990,
    "checksum": "cgpej"
  },
  {
    "name": "vcibutulxiom-wbiwifuny-yhachyylcha",
    "id": 682,
    "checksum": "uigky"
  },
  {
    "name": "cebwrpgvyr-sybjre-freivprf",
    "id": 611,
    "checksum": "rebfp"
  },
  {
    "name": "wlsiayhcw-dyffsvyuh-lyuwkocmcncih",
    "id": 994,
    "checksum": "cyhwf"
  },
  {
    "name": "ncjzrpytn-fydelmwp-nsznzwlep-opalcexpye",
    "id": 795,
    "checksum": "penly"
  },
  {
    "name": "wkqxodsm-cmkfoxqob-rexd-domrxyvyqi",
    "id": 692,
    "checksum": "qbnjg"
  },
  {
    "name": "fmsledevhsyw-veffmx-viwievgl",
    "id": 490,
    "checksum": "utkwb"
  },
  {
    "name": "kwzzwaqdm-lgm-ewzsapwx",
    "id": 200,
    "checksum": "wzamd"
  },
  {
    "name": "foadouwbu-dzoghwq-ufogg-igsf-hsghwbu",
    "id": 506,
    "checksum": "tcdak"
  },
  {
    "name": "rgndvtcxr-rpcsn-itrwcdadvn",
    "id": 297,
    "checksum": "cnzup"
  },
  {
    "name": "bxaxipgn-vgpst-qjccn-prfjxhxixdc",
    "id": 115,
    "checksum": "qbscm"
  },
  {
    "name": "vehmsegxmzi-tpewxmg-kveww-eguymwmxmsr",
    "id": 152,
    "checksum": "tucsj"
  },
  {
    "name": "nbhofujd-sbejpbdujwf-qmbtujd-hsbtt-nbslfujoh",
    "id": 337,
    "checksum": "satqk"
  },
  {
    "name": "bnknqetk-dff-zbpthrhshnm",
    "id": 989,
    "checksum": "hpvak"
  },
  {
    "name": "hplazytkpo-nsznzwlep-opawzjxpye",
    "id": 431,
    "checksum": "nmfdl"
  },
  {
    "name": "xjgjmapg-xviyt-xjvodib-ncdkkdib",
    "id": 473,
    "checksum": "hgbua"
  },
  {
    "name": "nglmtuex-vtgwr-ltexl",
    "id": 137,
    "checksum": "tjwsv"
  },
  {
    "name": "qmpmxevc-kvehi-ikk-gsrxemrqirx",
    "id": 750,
    "checksum": "ojirk"
  },
  {
    "name": "iuxxuyobk-vrgyzoi-mxgyy-jkbkruvsktz",
    "id": 878,
    "checksum": "vdepk"
  },
  {
    "name": "tcorcikpi-wpuvcdng-lgnnadgcp-gpikpggtkpi",
    "id": 362,
    "checksum": "hiaqt"
  },
  {
    "name": "sedikcuh-whqtu-fbqijys-whqii-qdqboiyi",
    "id": 114,
    "checksum": "mhlay"
  },
  {
    "name": "wdjcvuvmyjpn-agjrzm-mznzvmxc",
    "id": 603,
    "checksum": "njtzy"
  },
  {
    "name": "dwbcjkun-snuuhknjw-mnbrpw",
    "id": 771,
    "checksum": "nuwbj"
  },
  {
    "name": "qjopwxha-zua-nawymqeoepekj",
    "id": 264,
    "checksum": "aejop"
  },
  {
    "name": "nvrgfezqvu-srjbvk-ljvi-kvjkzex",
    "id": 815,
    "checksum": "vjker"
  },
  {
    "name": "wpuvcdng-rncuvke-itcuu-fgrnqaogpv",
    "id": 284,
    "checksum": "ucgnv"
  },
  {
    "name": "nchhg-jiasmb-uizsmbqvo",
    "id": 408,
    "checksum": "jnagu"
  },
  {
    "name": "kpvgtpcvkqpcn-gii-ewuvqogt-ugtxkeg",
    "id": 986,
    "checksum": "gkptv"
  },
  {
    "name": "ykjoqian-cnwza-ywjzu-hkceopeyo",
    "id": 576,
    "checksum": "eqdiy"
  },
  {
    "name": "excdklvo-nio-wkbuodsxq",
    "id": 692,
    "checksum": "odkxb"
  },
  {
    "name": "wdjcvuvmyjpn-wvnfzo-vivgtndn",
    "id": 681,
    "checksum": "sokpb"
  },
  {
    "name": "bkzrrhehdc-dff-rsnqzfd",
    "id": 755,
    "checksum": "dfrhz"
  },
  {
    "name": "rdggdhxkt-hrpktcvtg-wjci-gtprfjxhxixdc",
    "id": 713,
    "checksum": "gtxcd"
  },
  {
    "name": "jvsvymbs-ibuuf-zopwwpun",
    "id": 721,
    "checksum": "meksh"
  },
  {
    "name": "ajyqqgdgcb-pybgmyargtc-cee-mncpyrgmlq",
    "id": 366,
    "checksum": "gcymq"
  },
  {
    "name": "elrkdcdugrxv-gbh-wudlqlqj",
    "id": 179,
    "checksum": "dlgqr"
  },
  {
    "name": "ide-htrgti-qphzti-hidgpvt",
    "id": 765,
    "checksum": "ithdg"
  },
  {
    "name": "excdklvo-cmkfoxqob-rexd-cdybkqo",
    "id": 146,
    "checksum": "oqmuv"
  },
  {
    "name": "qzchnzbshud-okzrshb-fqzrr-zmzkxrhr",
    "id": 495,
    "checksum": "nxcry"
  },
  {
    "name": "wrs-vhfuhw-fdqgb-frdwlqj-vklsslqj",
    "id": 621,
    "checksum": "flqsw"
  },
  {
    "name": "kfg-jvtivk-avccpsvre-ljvi-kvjkzex",
    "id": 659,
    "checksum": "vkjce"
  },
  {
    "name": "wkqxodsm-nio-psxkxmsxq",
    "id": 328,
    "checksum": "xskmo"
  },
  {
    "name": "ktwbhtvmbox-ietlmbv-zktll-nlxk-mxlmbgz",
    "id": 475,
    "checksum": "lbmtk"
  },
  {
    "name": "tpspahyf-nyhkl-kfl-dvyrzovw",
    "id": 461,
    "checksum": "yfhkl"
  },
  {
    "name": "ejpanjwpekjwh-bhksan-wjwhuoeo",
    "id": 862,
    "checksum": "jweha"
  },
  {
    "name": "dsxxw-djmucp-ylyjwqgq",
    "id": 600,
    "checksum": "djqwx"
  },
  {
    "name": "pybgmyargtc-afmamjyrc-rcaflmjmew",
    "id": 262,
    "checksum": "uxngz"
  },
  {
    "name": "xekdwvwnzkqo-xwogap-yqopkian-oanreya",
    "id": 758,
    "checksum": "zsntm"
  },
  {
    "name": "bjfutsneji-hfsid-htfynsl-tujwfyntsx",
    "id": 567,
    "checksum": "fstjn"
  },
  {
    "name": "ugdgjxmd-tskcwl-mkwj-lwklafy",
    "id": 424,
    "checksum": "euphz"
  },
  {
    "name": "lnkfaypeha-ydkykhwpa-wymqeoepekj",
    "id": 758,
    "checksum": "zmvns"
  },
  {
    "name": "wbhsfbohwcboz-gqojsbusf-vibh-rsgwub",
    "id": 506,
    "checksum": "nryqk"
  },
  {
    "name": "bnknqetk-dff-btrsnldq-rdquhbd",
    "id": 885,
    "checksum": "rxizw"
  },
  {
    "name": "rwcnawjcrxwju-ljwmh-ldbcxvna-bnaerln",
    "id": 277,
    "checksum": "nwacj"
  },
  {
    "name": "wbhsfbohwcboz-xszzmpsob-fsqswjwbu",
    "id": 844,
    "checksum": "jmrta"
  },
  {
    "name": "xtwtelcj-rclop-upwwjmply-dstaatyr",
    "id": 509,
    "checksum": "kfcln"
  },
  {
    "name": "hqfxxnknji-gzssd-htsyfnsrjsy",
    "id": 515,
    "checksum": "snfhj"
  },
  {
    "name": "xcitgcpixdcpa-uadltg-detgpixdch",
    "id": 713,
    "checksum": "tuqak"
  },
  {
    "name": "bwx-amkzmb-jiasmb-lmxtwgumvb",
    "id": 850,
    "checksum": "mbawx"
  },
  {
    "name": "aoubshwq-gqojsbusf-vibh-rsgwub",
    "id": 948,
    "checksum": "bsugh"
  },
  {
    "name": "pbybeshy-sybjre-freivprf",
    "id": 715,
    "checksum": "slnmt"
  },
  {
    "name": "oxmeeuruqp-otaoaxmfq-dqmocgueufuaz",
    "id": 326,
    "checksum": "oqsex"
  },
  {
    "name": "zsxyfgqj-gzssd-btwpxmtu",
    "id": 541,
    "checksum": "tbeoi"
  },
  {
    "name": "tfiifjzmv-avccpsvre-rercpjzj",
    "id": 841,
    "checksum": "megtl"
  },
  {
    "name": "ltpedcxots-gpqqxi-prfjxhxixdc",
    "id": 635,
    "checksum": "dljex"
  },
  {
    "name": "hcd-gsqfsh-suu-gozsg",
    "id": 974,
    "checksum": "xzhjm"
  },
  {
    "name": "raphhxuxts-ytaanqtpc-gtrtxkxcv",
    "id": 453,
    "checksum": "mkcvd"
  },
  {
    "name": "bkzrrhehdc-bzmcx-lzqjdshmf",
    "id": 313,
    "checksum": "pzucm"
  },
  {
    "name": "lhkhszqx-fqzcd-qzaahs-ehmzmbhmf",
    "id": 469,
    "checksum": "wtdih"
  },
  {
    "name": "tmrszakd-idkkxadzm-ehmzmbhmf",
    "id": 651,
    "checksum": "dmzvn"
  },
  {
    "name": "amppmqgtc-bwc-cleglccpgle",
    "id": 392,
    "checksum": "cglpe"
  },
  {
    "name": "yrwxefpi-glsgspexi-eguymwmxmsr",
    "id": 308,
    "checksum": "egmsx"
  },
  {
    "name": "jfifqxov-doxab-gbiivybxk-tlohpelm",
    "id": 575,
    "checksum": "mwlps"
  },
  {
    "name": "dpssptjwf-qmbtujd-hsbtt-nbslfujoh",
    "id": 181,
    "checksum": "tlorv"
  },
  {
    "name": "ftzgxmbv-ietlmbv-zktll-kxtvjnblbmbhg",
    "id": 995,
    "checksum": "pqmrn"
  },
  {
    "name": "lxaaxbren-kjbtnc-mnyuxhvnwc",
    "id": 875,
    "checksum": "sgucv"
  },
  {
    "name": "ygcrqpkbgf-uecxgpigt-jwpv-fgxgnqrogpv",
    "id": 544,
    "checksum": "gpcfq"
  },
  {
    "name": "kwtwznct-lgm-nqvivkqvo",
    "id": 174,
    "checksum": "qsnxm"
  },
  {
    "name": "jvuzbtly-nyhkl-jhukf-jbzavtly-zlycpjl",
    "id": 773,
    "checksum": "ljyzb"
  },
  {
    "name": "aoubshwq-rms-rsdzcmasbh",
    "id": 766,
    "checksum": "zqtpb"
  },
  {
    "name": "jsehsyafy-jsttal-jwsuimakalagf",
    "id": 190,
    "checksum": "dzuca"
  },
  {
    "name": "mtzslklcozfd-nlyoj-opawzjxpye",
    "id": 821,
    "checksum": "lozjp"
  },
  {
    "name": "eqnqthwn-ecpfa-fgukip",
    "id": 726,
    "checksum": "oydrm"
  },
  {
    "name": "bkwzkqsxq-zvkcdsm-qbkcc-domrxyvyqi",
    "id": 848,
    "checksum": "xycdz"
  },
  {
    "name": "ugjjgkanw-wyy-dgyaklauk",
    "id": 242,
    "checksum": "yzsdv"
  },
  {
    "name": "ugfkmewj-yjsvw-hdsklau-yjskk-vwhsjlewfl",
    "id": 918,
    "checksum": "badep"
  },
  {
    "name": "etaqigpke-uecxgpigt-jwpv-fgxgnqrogpv",
    "id": 726,
    "checksum": "gpeiq"
  },
  {
    "name": "mvkccspson-mkxni-mykdsxq-wkxkqowoxd",
    "id": 536,
    "checksum": "cgqjw"
  },
  {
    "name": "lxwbdvna-pajmn-npp-nwprwnnarwp",
    "id": 563,
    "checksum": "voqpy"
  },
  {
    "name": "aflwjfslagfsd-hdsklau-yjskk-vwhdgqewfl",
    "id": 398,
    "checksum": "madni"
  },
  {
    "name": "eqttqukxg-ejqeqncvg-yqtmujqr",
    "id": 414,
    "checksum": "spjrg"
  },
  {
    "name": "laffe-vrgyzoi-mxgyy-jkyomt",
    "id": 956,
    "checksum": "tmyzs"
  },
  {
    "name": "ajyqqgdgcb-hcjjwzcyl-pcqcypaf",
    "id": 834,
    "checksum": "pmnar"
  },
  {
    "name": "jrncbavmrq-fpniratre-uhag-qrcyblzrag",
    "id": 247,
    "checksum": "iynma"
  },
  {
    "name": "lahxpnwrl-snuuhknjw-nwprwnnarwp",
    "id": 849,
    "checksum": "mtzsn"
  },
  {
    "name": "dzczkrip-xiruv-treup-tfrkzex-crsfirkfip",
    "id": 139,
    "checksum": "szduj"
  },
  {
    "name": "oazegyqd-sdmpq-oxmeeuruqp-nmewqf-iadwetab",
    "id": 378,
    "checksum": "zyrxh"
  },
  {
    "name": "ubhatstkwhnl-ietlmbv-zktll-vnlmhfxk-lxkobvx",
    "id": 553,
    "checksum": "mnfye"
  },
  {
    "name": "xfbqpojafe-kfmmzcfbo-usbjojoh",
    "id": 805,
    "checksum": "tnvco"
  },
  {
    "name": "bkwzkqsxq-bkllsd-ecob-docdsxq",
    "id": 224,
    "checksum": "oqnvz"
  },
  {
    "name": "bjfutsneji-jll-yjhmstqtld",
    "id": 671,
    "checksum": "jltsb"
  },
  {
    "name": "bnqqnrhud-idkkxadzm-knfhrshbr",
    "id": 131,
    "checksum": "ngsmj"
  },
  {
    "name": "ixccb-elrkdcdugrxv-fdqgb-frdwlqj-uhdftxlvlwlrq",
    "id": 101,
    "checksum": "bcdyz"
  },
  {
    "name": "xmtjbzidx-xjinphzm-bmvyz-xviyt-mzvxlpdndodji",
    "id": 239,
    "checksum": "nmkuv"
  },
  {
    "name": "udskkaxawv-hdsklau-yjskk-umklgewj-kwjnauw",
    "id": 268,
    "checksum": "ivymz"
  },
  {
    "name": "gbc-frperg-wryylorna-znantrzrag",
    "id": 715,
    "checksum": "ragny"
  },
  {
    "name": "nzydfxpc-rclop-qwzhpc-wlmzclezcj",
    "id": 145,
    "checksum": "tbvmx"
  },
  {
    "name": "dzczkrip-xiruv-irsszk-rercpjzj",
    "id": 841,
    "checksum": "oyhef"
  },
  {
    "name": "xcitgcpixdcpa-eaphixr-vgphh-gtrtxkxcv",
    "id": 219,
    "checksum": "yxomp"
  },
  {
    "name": "wbhsfbohwcboz-qvcqczohs-qighcasf-gsfjwqs",
    "id": 350,
    "checksum": "nzxwy"
  },
  {
    "name": "bpvctixr-tvv-uxcpcrxcv",
    "id": 921,
    "checksum": "lhyge"
  },
  {
    "name": "pbeebfvir-cynfgvp-tenff-jbexfubc",
    "id": 949,
    "checksum": "fbecn"
  },
  {
    "name": "oazegyqd-sdmpq-nmewqf-dqoquhuzs",
    "id": 742,
    "checksum": "timug"
  },
  {
    "name": "mvkccspson-tovvilokx-vklybkdybi",
    "id": 328,
    "checksum": "mqdsy"
  },
  {
    "name": "wihmogyl-aluxy-yaa-lymyulwb",
    "id": 864,
    "checksum": "cdyjz"
  },
  {
    "name": "ynukcajey-acc-yqopkian-oanreya",
    "id": 836,
    "checksum": "ciysv"
  },
  {
    "name": "kyelcrga-afmamjyrc-jyzmpyrmpw",
    "id": 756,
    "checksum": "myarc"
  },
  {
    "name": "ovbunmneqbhf-onfxrg-fuvccvat",
    "id": 247,
    "checksum": "dicga"
  },
  {
    "name": "kwzzwaqdm-zijjqb-uizsmbqvo",
    "id": 252,
    "checksum": "zqbij"
  },
  {
    "name": "eqpuwogt-itcfg-hnqygt-ucngu",
    "id": 414,
    "checksum": "gtucn"
  },
  {
    "name": "gpsxdprixkt-qjccn-hwxeexcv",
    "id": 167,
    "checksum": "xcepd"
  },
  {
    "name": "aczupnetwp-qwzhpc-opdtry",
    "id": 847,
    "checksum": "pctwz"
  },
  {
    "name": "zlilocri-mixpqfz-doxpp-pefmmfkd",
    "id": 575,
    "checksum": "zwkxc"
  },
  {
    "name": "zloolpfsb-molgbzqfib-yrkkv-ixyloxqlov",
    "id": 783,
    "checksum": "ztpiu"
  },
  {
    "name": "dsxxw-qaytclecp-fslr-nspafyqgle",
    "id": 990,
    "checksum": "swktj"
  },
  {
    "name": "tcorcikpi-hnqygt-fgukip",
    "id": 492,
    "checksum": "icgkp"
  },
  {
    "name": "bnknqetk-bnqqnrhud-qzaahs-rsnqzfd",
    "id": 365,
    "checksum": "blisk"
  },
  {
    "name": "xgjougizobk-inuiurgzk-gtgreyoy",
    "id": 176,
    "checksum": "mjtsi"
  },
  {
    "name": "bqvvu-nwxxep-opknwca",
    "id": 836,
    "checksum": "npvwx"
  },
  {
    "name": "zixppfcfba-ciltbo-pbosfzbp",
    "id": 367,
    "checksum": "aritf"
  },
  {
    "name": "oaxadrgx-dmnnuf-mocgueufuaz",
    "id": 898,
    "checksum": "egbaz"
  },
  {
    "name": "sno-rdbqds-dff-cdoknxldms",
    "id": 261,
    "checksum": "nzdys"
  },
  {
    "name": "gpewwmjmih-fyrrc-jmrergmrk",
    "id": 204,
    "checksum": "rmegj"
  },
  {
    "name": "pyknyegle-aylbw-amyrgle-bcnjmwkclr",
    "id": 184,
    "checksum": "lyeab"
  },
  {
    "name": "frqvxphu-judgh-fkrfrodwh-vhuylfhv",
    "id": 751,
    "checksum": "osurb"
  },
  {
    "name": "oaddaeuhq-pkq-pqbxakyqzf",
    "id": 560,
    "checksum": "qadkp"
  },
  {
    "name": "emixwvqhml-xtiabqk-oziaa-lmaqov",
    "id": 694,
    "checksum": "aimql"
  },
  {
    "name": "xlrypetn-awldetn-rcldd-opalcexpye",
    "id": 327,
    "checksum": "orxhy"
  },
  {
    "name": "ftzgxmbv-cxeeruxtg-vnlmhfxk-lxkobvx",
    "id": 189,
    "checksum": "xvbef"
  },
  {
    "name": "ynssr-vtgwr-xgzbgxxkbgz",
    "id": 501,
    "checksum": "pfkur"
  },
  {
    "name": "hdgdovmt-bmvyz-xviyt-xjvodib-vivgtndn",
    "id": 915,
    "checksum": "sztpg"
  },
  {
    "name": "dszphfojd-sbccju-tbmft",
    "id": 597,
    "checksum": "hcsfg"
  },
  {
    "name": "lxuxaodu-ajkkrc-bcxajpn",
    "id": 823,
    "checksum": "gbmhy"
  },
  {
    "name": "ktiaaqnqml-ntwemz-ikycqaqbqwv",
    "id": 694,
    "checksum": "jnmzc"
  },
  {
    "name": "fydelmwp-nlyoj-xlylrpxpye",
    "id": 171,
    "checksum": "nxjhg"
  },
  {
    "name": "kgjgrypw-epybc-pyzzgr-qcptgacq",
    "id": 522,
    "checksum": "dxcbq"
  },
  {
    "name": "fnjyxwrinm-ljwmh-lxjcrwp-lxwcjrwvnwc",
    "id": 225,
    "checksum": "rypmf"
  },
  {
    "name": "qfkkj-qwzhpc-qtylyntyr",
    "id": 353,
    "checksum": "xdymf"
  },
  {
    "name": "szfyrqriuflj-tfejldvi-xiruv-upv-jyzggzex",
    "id": 555,
    "checksum": "tsjbl"
  },
  {
    "name": "jlidywncfy-dyffsvyuh-omyl-nymncha",
    "id": 422,
    "checksum": "zewrd"
  },
  {
    "name": "ibghopzs-qobrm-gsfjwqsg",
    "id": 298,
    "checksum": "yzrtb"
  },
  {
    "name": "molgbzqfib-zxkav-zlxqfkd-cfkxkzfkd",
    "id": 211,
    "checksum": "ynduw"
  },
  {
    "name": "mfklstdw-uzgugdslw-ghwjslagfk",
    "id": 372,
    "checksum": "ckxrl"
  },
  {
    "name": "wlqqp-wcfnvi-kirzezex",
    "id": 139,
    "checksum": "axnvq"
  },
  {
    "name": "dzczkrip-xiruv-gcrjkzt-xirjj-ivjvrity",
    "id": 711,
    "checksum": "ezhxy"
  },
  {
    "name": "mhi-lxvkxm-utldxm-lxkobvxl",
    "id": 501,
    "checksum": "sflto"
  },
  {
    "name": "vcibutulxiom-mwupyhayl-bohn-qilembij",
    "id": 734,
    "checksum": "mfszw"
  },
  {
    "name": "bjfutsneji-hmthtqfyj-ijxnls",
    "id": 671,
    "checksum": "fhbgw"
  },
  {
    "name": "mybbycsfo-oqq-oxqsxoobsxq",
    "id": 354,
    "checksum": "hlsuv"
  },
  {
    "name": "nwilwcejc-nwxxep-zalwnpiajp",
    "id": 940,
    "checksum": "wnpac"
  },
  {
    "name": "cxy-bnlanc-kjbtnc-dbna-cnbcrwp",
    "id": 589,
    "checksum": "bodjt"
  },
  {
    "name": "htwwtxnaj-hfsid-xmnuunsl",
    "id": 931,
    "checksum": "komlw"
  },
  {
    "name": "qfkkj-prr-dpcgtnpd",
    "id": 847,
    "checksum": "tfmev"
  },
  {
    "name": "vdzonmhydc-bnqqnrhud-cxd-rzkdr",
    "id": 547,
    "checksum": "zrvqc"
  },
  {
    "name": "frqvxphu-judgh-exqqb-vklsslqj",
    "id": 231,
    "checksum": "yehnz"
  },
  {
    "name": "zlilocri-bdd-abpfdk",
    "id": 913,
    "checksum": "iraty"
  },
  {
    "name": "jqwpihizlwca-kpwkwtibm-uiviomumvb",
    "id": 408,
    "checksum": "iwmbk"
  },
  {
    "name": "tyepcyletzylw-dnlgpyrpc-sfye-dstaatyr",
    "id": 457,
    "checksum": "dtrmn"
  },
  {
    "name": "tcfkqcevkxg-dwppa-yqtmujqr",
    "id": 258,
    "checksum": "gqsxw"
  },
  {
    "name": "hdgdovmt-bmvyz-zbb-nvgzn",
    "id": 343,
    "checksum": "ipyzq"
  },
  {
    "name": "lxaaxbren-ajkkrc-mnenuxyvnwc",
    "id": 537,
    "checksum": "naxce"
  },
  {
    "name": "qzchnzbshud-eknvdq-vnqjrgno",
    "id": 859,
    "checksum": "porxq"
  },
  {
    "name": "iutyaskx-mxgjk-pkrrehkgt-jkyomt",
    "id": 904,
    "checksum": "ktgjm"
  },
  {
    "name": "dsxxw-aylbw-amyrgle-sqcp-rcqrgle",
    "id": 678,
    "checksum": "vista"
  },
  {
    "name": "rflsjynh-gzssd-wjfhvznxnynts",
    "id": 853,
    "checksum": "nsfhj"
  },
  {
    "name": "ibghopzs-pibbm-rsdzcmasbh",
    "id": 688,
    "checksum": "bshim"
  },
  {
    "name": "pbafhzre-tenqr-cynfgvp-tenff-ratvarrevat",
    "id": 377,
    "checksum": "fgreq"
  },
  {
    "name": "diozmivodjivg-ezggtwzvi-rjmfncjk",
    "id": 317,
    "checksum": "npyji"
  },
  {
    "name": "jsehsyafy-bwddqtwsf-esfsywewfl",
    "id": 632,
    "checksum": "baclh"
  },
  {
    "name": "yhtwhnpun-jhukf-jvhapun-jbzavtly-zlycpjl",
    "id": 149,
    "checksum": "hjlnp"
  },
  {
    "name": "lnkfaypeha-iehepwnu-cnwza-ydkykhwpa-ykjpwejiajp",
    "id": 706,
    "checksum": "mnsri"
  },
  {
    "name": "oxjmxdfkd-avb-obzbfsfkd",
    "id": 705,
    "checksum": "nmorj"
  },
  {
    "name": "sxdobxkdsyxkv-mkxni-zebmrkcsxq",
    "id": 276,
    "checksum": "jqrnw"
  },
  {
    "name": "xmtjbzidx-mvhkvbdib-agjrzm-xjiovdihzio",
    "id": 733,
    "checksum": "ibdjm"
  },
  {
    "name": "xgvnndadzy-xviyt-omvdidib",
    "id": 863,
    "checksum": "xzgmn"
  },
  {
    "name": "pejji-mkxni-crszzsxq",
    "id": 224,
    "checksum": "stivm"
  },
  {
    "name": "tpspahyf-nyhkl-yhtwhnpun-ibuuf-zlycpjlz",
    "id": 669,
    "checksum": "hdrst"
  },
  {
    "name": "zhdsrqlchg-fkrfrodwh-vwrudjh",
    "id": 179,
    "checksum": "lneqz"
  },
  {
    "name": "aczupnetwp-qwzhpc-opgpwzaxpye",
    "id": 145,
    "checksum": "mbxzs"
  },
  {
    "name": "dzczkrip-xiruv-wcfnvi-uvgcfpdvek",
    "id": 659,
    "checksum": "gfzeb"
  },
  {
    "name": "buzahisl-msvdly-ylhjxbpzpapvu",
    "id": 123,
    "checksum": "iyjzf"
  },
  {
    "name": "vetllbybxw-vtgwr-vhtmbgz-kxvxbobgz",
    "id": 969,
    "checksum": "mavkd"
  },
  {
    "name": "qfkkj-nlyoj-nzyeltyxpye",
    "id": 119,
    "checksum": "yejkl"
  },
  {
    "name": "ynssr-vahvhetmx-hixktmbhgl",
    "id": 969,
    "checksum": "sqpin"
  },
  {
    "name": "udglrdfwlyh-gbh-ghsduwphqw",
    "id": 621,
    "checksum": "znqev"
  },
  {
    "name": "zilqwikbqdm-jcvvg-wxmzibqwva",
    "id": 226,
    "checksum": "ohfek"
  },
  {
    "name": "willimcpy-yaa-nluchcha",
    "id": 292,
    "checksum": "aclhi"
  },
  {
    "name": "nvrgfezqvu-avccpsvre-ljvi-kvjkzex",
    "id": 763,
    "checksum": "vecjk"
  },
  {
    "name": "vkppo-zubboruqd-ixyffydw",
    "id": 504,
    "checksum": "bykjv"
  },
  {
    "name": "laffe-hatte-zxgototm",
    "id": 358,
    "checksum": "taefo"
  },
  {
    "name": "iuruxlar-jek-iayzuskx-ykxboik",
    "id": 436,
    "checksum": "wiqzo"
  },
  {
    "name": "nij-mywlyn-vohhs-womnigyl-mylpcwy",
    "id": 188,
    "checksum": "ylmnw"
  },
  {
    "name": "ksodcbwnsr-rms-kcfygvcd",
    "id": 168,
    "checksum": "yriva"
  },
  {
    "name": "zilqwikbqdm-kivlg-kwibqvo-tijwzibwzg",
    "id": 980,
    "checksum": "sncfm"
  },
  {
    "name": "wsvsdkbi-qbkno-lexxi-mecdywob-cobfsmo",
    "id": 172,
    "checksum": "pzjhg"
  },
  {
    "name": "laffe-xghhoz-zxgototm",
    "id": 722,
    "checksum": "ofght"
  },
  {
    "name": "nzwzcqfw-nlyoj-pyrtyppctyr",
    "id": 457,
    "checksum": "jzkil"
  },
  {
    "name": "uzfqdzmfuazmx-ngzzk-pqbmdfyqzf",
    "id": 378,
    "checksum": "zfmqd"
  },
  {
    "name": "ymszqfuo-omzpk-oamfuzs-mocgueufuaz",
    "id": 664,
    "checksum": "zvhru"
  },
  {
    "name": "ibghopzs-qvcqczohs-sbuwbssfwbu",
    "id": 350,
    "checksum": "xmhnj"
  },
  {
    "name": "cqwdujys-sqdto-seqjydw-mehaixef",
    "id": 348,
    "checksum": "rwone"
  },
  {
    "name": "irdgrxzex-irsszk-rercpjzj",
    "id": 659,
    "checksum": "ftmuq"
  },
  {
    "name": "amppmqgtc-pyzzgr-pcqcypaf",
    "id": 418,
    "checksum": "pcagm"
  },
  {
    "name": "ygcrqpkbgf-tcddkv-fgrnqaogpv",
    "id": 336,
    "checksum": "szemt"
  },
  {
    "name": "hjgbwuladw-uzgugdslw-ugflsafewfl",
    "id": 736,
    "checksum": "armzs"
  },
  {
    "name": "mbiyqoxsm-mkxni-mykdsxq-domrxyvyqi",
    "id": 328,
    "checksum": "mxyiq"
  },
  {
    "name": "willimcpy-vohhs-qilembij",
    "id": 968,
    "checksum": "ilhmb"
  },
  {
    "name": "houngfgxjuay-pkrrehkgt-vaxingyotm",
    "id": 930,
    "checksum": "cnlzy"
  },
  {
    "name": "ugfkmewj-yjsvw-tskcwl-ugflsafewfl",
    "id": 320,
    "checksum": "fwlse"
  },
  {
    "name": "tpspahyf-nyhkl-msvdly-jvuahputlua",
    "id": 825,
    "checksum": "ahlpu"
  },
  {
    "name": "qyujihctyx-wbiwifuny-guleyncha",
    "id": 708,
    "checksum": "imhls"
  },
  {
    "name": "qczcftiz-pogysh-twbobqwbu",
    "id": 194,
    "checksum": "xpmrg"
  },
  {
    "name": "vetllbybxw-xzz-ltexl",
    "id": 969,
    "checksum": "yzbur"
  },
  {
    "name": "kdijqrbu-fbqijys-whqii-jhqydydw",
    "id": 556,
    "checksum": "iqdjy"
  },
  {
    "name": "oaddaeuhq-rxaiqd-dqeqmdot",
    "id": 560,
    "checksum": "xtzsw"
  },
  {
    "name": "kfg-jvtivk-sleep-fgvirkzfej",
    "id": 321,
    "checksum": "efkvg"
  },
  {
    "name": "zhdsrqlchg-udeelw-xvhu-whvwlqj",
    "id": 595,
    "checksum": "tnkyw"
  },
  {
    "name": "vetllbybxw-ktuubm-etuhktmhkr",
    "id": 787,
    "checksum": "tbkue"
  },
  {
    "name": "mybbycsfo-cmkfoxqob-rexd-ckvoc",
    "id": 224,
    "checksum": "cmktd"
  },
  {
    "name": "myxcewob-qbkno-oqq-nocsqx",
    "id": 328,
    "checksum": "fpyew"
  },
  {
    "name": "nwilwcejc-fahhuxawj-zalhkuiajp",
    "id": 810,
    "checksum": "askzg"
  },
  {
    "name": "ovbunmneqbhf-pnaql-ynobengbel",
    "id": 377,
    "checksum": "nkafy"
  },
  {
    "name": "qzchnzbshud-okzrshb-fqzrr-nodqzshnmr",
    "id": 677,
    "checksum": "mnude"
  },
  {
    "name": "bdavqofuxq-fab-eqodqf-dmnnuf-ogefayqd-eqdhuoq",
    "id": 586,
    "checksum": "xmztn"
  },
  {
    "name": "rdchjbtg-vgpst-ytaanqtpc-hpath",
    "id": 531,
    "checksum": "xmzrt"
  },
  {
    "name": "vetllbybxw-wrx-mktbgbgz",
    "id": 735,
    "checksum": "ijzlh"
  },
  {
    "name": "zvyvgnel-tenqr-pnaql-fuvccvat",
    "id": 689,
    "checksum": "vnace"
  },
  {
    "name": "muqfedyput-sqdto-sedjqydcudj",
    "id": 478,
    "checksum": "dquej"
  },
  {
    "name": "lahxpnwrl-mhn-jlzdrbrcrxw",
    "id": 147,
    "checksum": "psbch"
  },
  {
    "name": "eadalsjq-yjsvw-jsttal-vwnwdghewfl",
    "id": 346,
    "checksum": "wajls"
  },
  {
    "name": "hafgnoyr-sybjre-qrfvta",
    "id": 247,
    "checksum": "rafyb"
  },
  {
    "name": "votubcmf-tdbwfohfs-ivou-dpoubjonfou",
    "id": 129,
    "checksum": "zibsh"
  },
  {
    "name": "jrncbavmrq-pnaql-pbngvat-hfre-grfgvat",
    "id": 143,
    "checksum": "argnv"
  },
  {
    "name": "tcrjjzwzvu-sleep-nfibjyfg",
    "id": 555,
    "checksum": "jefzb"
  },
  {
    "name": "myxcewob-qbkno-bkllsd-bokmaescsdsyx",
    "id": 406,
    "checksum": "ghwzx"
  },
  {
    "name": "cqwdujys-fbqijys-whqii-udwyduuhydw",
    "id": 972,
    "checksum": "hdvyx"
  },
  {
    "name": "xqvwdeoh-edvnhw-zrunvkrs",
    "id": 439,
    "checksum": "jqtmz"
  },
  {
    "name": "bqvvu-ydkykhwpa-zalhkuiajp",
    "id": 108,
    "checksum": "xmkdz"
  },
  {
    "name": "gzefmnxq-eomhqzsqd-tgzf-mzmxkeue",
    "id": 534,
    "checksum": "emzqf"
  },
  {
    "name": "zloolpfsb-gbiivybxk-zrpqljbo-pbosfzb",
    "id": 939,
    "checksum": "symnz"
  },
  {
    "name": "nzwzcqfw-awldetn-rcldd-cpdplcns",
    "id": 717,
    "checksum": "cdlnw"
  },
  {
    "name": "ide-htrgti-rpcsn-rdpixcv-ldgzhwde",
    "id": 661,
    "checksum": "dirce"
  },
  {
    "name": "fkqbokxqflkxi-bdd-qoxfkfkd",
    "id": 367,
    "checksum": "kfdqx"
  },
  {
    "name": "jlidywncfy-vumeyn-jolwbumcha",
    "id": 214,
    "checksum": "shtrx"
  },
  {
    "name": "vagreangvbany-onfxrg-ernpdhvfvgvba",
    "id": 429,
    "checksum": "shgyt"
  },
  {
    "name": "odkasqzuo-pkq-xmnadmfadk",
    "id": 742,
    "checksum": "adkmo"
  },
  {
    "name": "mvydjvxodqz-xviyt-xjvodib-zibdizzmdib",
    "id": 889,
    "checksum": "divzb"
  },
  {
    "name": "dpssptjwf-dboez-eftjho",
    "id": 467,
    "checksum": "ajfyk"
  },
  {
    "name": "zilqwikbqdm-xtiabqk-oziaa-kcabwumz-amzdqkm",
    "id": 486,
    "checksum": "clwnt"
  },
  {
    "name": "plolwdub-judgh-sodvwlf-judvv-uhfhlylqj",
    "id": 699,
    "checksum": "trqoi"
  },
  {
    "name": "bnqqnrhud-rbzudmfdq-gtms-nodqzshnmr",
    "id": 885,
    "checksum": "dnqmr"
  },
  {
    "name": "atyzghrk-hatte-vaxingyotm",
    "id": 800,
    "checksum": "nyzck"
  },
  {
    "name": "amppmqgtc-afmamjyrc-bctcjmnkclr",
    "id": 730,
    "checksum": "jbafl"
  },
  {
    "name": "tpspahyf-nyhkl-yhiipa-svnpzapjz",
    "id": 617,
    "checksum": "xijwv"
  },
  {
    "name": "dkqjcbctfqwu-ecpfa-tgugctej",
    "id": 908,
    "checksum": "ctefg"
  },
  {
    "name": "hcd-gsqfsh-tzcksf-rsjszcdasbh",
    "id": 896,
    "checksum": "ayzso"
  },
  {
    "name": "bknsykmdsfo-lexxi-myxdksxwoxd",
    "id": 380,
    "checksum": "hxsvz"
  },
  {
    "name": "vetllbybxw-xzz-tvjnblbmbhg",
    "id": 319,
    "checksum": "htivo"
  },
  {
    "name": "bpvctixr-qjccn-hpath",
    "id": 349,
    "checksum": "kxwzv"
  },
  {
    "name": "szfyrqriuflj-treup-tfrkzex-cfxzjkztj",
    "id": 347,
    "checksum": "skbiw"
  },
  {
    "name": "kwvacumz-ozilm-lgm-lmxtwgumvb",
    "id": 876,
    "checksum": "gcnyk"
  },
  {
    "name": "fmsledevhsyw-fyrrc-wivzmgiw",
    "id": 620,
    "checksum": "mwkyz"
  },
  {
    "name": "bnmrtldq-fqzcd-bgnbnkzsd-rsnqzfd",
    "id": 781,
    "checksum": "eiqgm"
  },
  {
    "name": "amlqskcp-epybc-aylbw-amyrgle-jmegqrgaq",
    "id": 756,
    "checksum": "uygno"
  },
  {
    "name": "foadouwbu-xszzmpsob-hsqvbczcum",
    "id": 792,
    "checksum": "xrtpc"
  },
  {
    "name": "vjpwncrl-fnjyxwrinm-kdwwh-bcxajpn",
    "id": 719,
    "checksum": "nwjcp"
  },
  {
    "name": "enqvbnpgvir-cynfgvp-tenff-qrfvta",
    "id": 195,
    "checksum": "cpvnk"
  },
  {
    "name": "buzahisl-lnn-klwhyatlua",
    "id": 851,
    "checksum": "tmzna"
  },
  {
    "name": "shmml-enoovg-bcrengvbaf",
    "id": 533,
    "checksum": "begmn"
  },
  {
    "name": "pdjqhwlf-hjj-whfkqrorjb",
    "id": 257,
    "checksum": "jhfqr"
  },
  {
    "name": "wfintfhynaj-gzssd-wjhjnansl",
    "id": 307,
    "checksum": "njsaf"
  },
  {
    "name": "qczcftiz-rms-kcfygvcd",
    "id": 376,
    "checksum": "kybix"
  },
  {
    "name": "pbeebfvir-sybjre-jbexfubc",
    "id": 975,
    "checksum": "jzufx"
  },
  {
    "name": "irdgrxzex-drxevkzt-wcfnvi-fgvirkzfej",
    "id": 191,
    "checksum": "wfdlg"
  },
  {
    "name": "irgyyolokj-lruckx-gtgreyoy",
    "id": 930,
    "checksum": "wnqvm"
  },
  {
    "name": "lsyrkjkbnyec-mkxni-mykdsxq-ckvoc",
    "id": 276,
    "checksum": "gwtls"
  },
  {
    "name": "enzcntvat-sybjre-znexrgvat",
    "id": 741,
    "checksum": "mixqj"
  },
  {
    "name": "myxcewob-qbkno-nio-oxqsxoobsxq",
    "id": 666,
    "checksum": "dracq"
  },
  {
    "name": "excdklvo-mkxni-mykdsxq-vklybkdybi",
    "id": 172,
    "checksum": "kdxyb"
  },
  {
    "name": "xfbqpojafe-tdbwfohfs-ivou-tijqqjoh",
    "id": 103,
    "checksum": "mjxla"
  },
  {
    "name": "rkpqxyib-mixpqfz-doxpp-obzbfsfkd",
    "id": 341,
    "checksum": "eswqm"
  },
  {
    "name": "pualyuhapvuhs-wshzapj-nyhzz-thuhnltlua",
    "id": 695,
    "checksum": "whgcf"
  },
  {
    "name": "tyepcyletzylw-awldetn-rcldd-nfdezxpc-dpcgtnp",
    "id": 535,
    "checksum": "dcelp"
  },
  {
    "name": "dpotvnfs-hsbef-cvooz-eftjho",
    "id": 909,
    "checksum": "wrstm"
  },
  {
    "name": "esyfwlau-wyy-jwsuimakalagf",
    "id": 658,
    "checksum": "cbdnm"
  },
  {
    "name": "luxciuwncpy-vumeyn-mbcjjcha",
    "id": 396,
    "checksum": "cujmn"
  },
  {
    "name": "udskkaxawv-jsttal-vwhsjlewfl",
    "id": 268,
    "checksum": "alswj"
  },
  {
    "name": "ckgvutofkj-xghhoz-xkikobotm",
    "id": 410,
    "checksum": "koght"
  },
  {
    "name": "kgjgrypw-epybc-njyqrga-epyqq-pcyaosgqgrgml",
    "id": 626,
    "checksum": "atdyg"
  },
  {
    "name": "cybyjqho-whqtu-ryexqpqhteki-tou-vydqdsydw",
    "id": 998,
    "checksum": "bnjht"
  },
  {
    "name": "froruixo-udeelw-ghvljq",
    "id": 127,
    "checksum": "bylzc"
  },
  {
    "name": "forwcoqhwjs-tinnm-gqojsbusf-vibh-fsgsofqv",
    "id": 974,
    "checksum": "sxtko"
  },
  {
    "name": "wsvsdkbi-qbkno-mkxni-dbksxsxq",
    "id": 432,
    "checksum": "ymxdz"
  },
  {
    "name": "ryexqpqhteki-cybyjqho-whqtu-sqdto-jusxdebewo",
    "id": 634,
    "checksum": "qehot"
  },
  {
    "name": "yrwxefpi-hci-wxsveki",
    "id": 750,
    "checksum": "iewxc"
  },
  {
    "name": "ugjjgkanw-ujqgywfau-tmffq-hmjuzskafy",
    "id": 788,
    "checksum": "alfsc"
  },
  {
    "name": "jef-iushuj-sxesebqju-kiuh-juijydw",
    "id": 114,
    "checksum": "jueis"
  },
  {
    "name": "lsyrkjkbnyec-excdklvo-pvygob-yzobkdsyxc",
    "id": 198,
    "checksum": "ykbco"
  },
  {
    "name": "eadalsjq-yjsvw-ugjjgkanw-xdgowj-wfyafwwjafy",
    "id": 866,
    "checksum": "miqfs"
  },
  {
    "name": "etaqigpke-ecpfa-qrgtcvkqpu",
    "id": 466,
    "checksum": "qdvna"
  },
  {
    "name": "frqvxphu-judgh-xqvwdeoh-mhoobehdq-pdqdjhphqw",
    "id": 283,
    "checksum": "zjdiv"
  },
  {
    "name": "frqvxphu-judgh-vfdyhqjhu-kxqw-hqjlqhhulqj",
    "id": 283,
    "checksum": "mnykz"
  },
  {
    "name": "hjgbwuladw-usfvq-ugslafy-jwkwsjuz",
    "id": 450,
    "checksum": "mitsc"
  },
  {
    "name": "rkpqxyib-avb-abpfdk",
    "id": 575,
    "checksum": "bakpd"
  },
  {
    "name": "fubrjhqlf-fkrfrodwh-oderudwrub",
    "id": 959,
    "checksum": "vdxlz"
  },
  {
    "name": "sgmtkzoi-pkrrehkgt-rumoyzoiy",
    "id": 436,
    "checksum": "korgi"
  },
  {
    "name": "hwdtljsnh-idj-wjhjnansl",
    "id": 801,
    "checksum": "fobmn"
  },
  {
    "name": "ftzgxmbv-unggr-inkvatlbgz",
    "id": 423,
    "checksum": "ecjzy"
  },
  {
    "name": "jrncbavmrq-pnaql-pbngvat-znantrzrag",
    "id": 585,
    "checksum": "anrbg"
  },
  {
    "name": "sehheiylu-muqfedyput-rqiauj-tulubefcudj",
    "id": 530,
    "checksum": "eadkp"
  },
  {
    "name": "odkasqzuo-pkq-pqhqxabyqzf",
    "id": 950,
    "checksum": "iyzwg"
  },
  {
    "name": "lujbbrornm-vjpwncrl-kdwwh-ydalqjbrwp",
    "id": 615,
    "checksum": "lmjzy"
  },
  {
    "name": "kpvgtpcvkqpcn-dwppa-rwtejcukpi",
    "id": 336,
    "checksum": "pcktv"
  },
  {
    "name": "hwbba-gii-eqpvckpogpv",
    "id": 492,
    "checksum": "pbgiv"
  },
  {
    "name": "zsxyfgqj-hqfxxnknji-idj-xytwflj",
    "id": 359,
    "checksum": "jxfin"
  }
]
;

/*!
 * md5-es
 * https://github.com/logotype/md5-es.git
 *
 * Copyright 2016 Victor Norgren
 * Released under the MIT license
 */
var MD5 = function () {
    function MD5() {
        classCallCheck(this, MD5);
    }

    createClass(MD5, null, [{
        key: 'hash',
        value: function hash(string) {
            return MD5.hex(MD5.md51(string));
        }
    }, {
        key: 'md5cycle',
        value: function md5cycle(x, k) {
            var a = x[0],
                b = x[1],
                c = x[2],
                d = x[3];

            a = MD5.ff(a, b, c, d, k[0], 7, -680876936);
            d = MD5.ff(d, a, b, c, k[1], 12, -389564586);
            c = MD5.ff(c, d, a, b, k[2], 17, 606105819);
            b = MD5.ff(b, c, d, a, k[3], 22, -1044525330);
            a = MD5.ff(a, b, c, d, k[4], 7, -176418897);
            d = MD5.ff(d, a, b, c, k[5], 12, 1200080426);
            c = MD5.ff(c, d, a, b, k[6], 17, -1473231341);
            b = MD5.ff(b, c, d, a, k[7], 22, -45705983);
            a = MD5.ff(a, b, c, d, k[8], 7, 1770035416);
            d = MD5.ff(d, a, b, c, k[9], 12, -1958414417);
            c = MD5.ff(c, d, a, b, k[10], 17, -42063);
            b = MD5.ff(b, c, d, a, k[11], 22, -1990404162);
            a = MD5.ff(a, b, c, d, k[12], 7, 1804603682);
            d = MD5.ff(d, a, b, c, k[13], 12, -40341101);
            c = MD5.ff(c, d, a, b, k[14], 17, -1502002290);
            b = MD5.ff(b, c, d, a, k[15], 22, 1236535329);

            a = MD5.gg(a, b, c, d, k[1], 5, -165796510);
            d = MD5.gg(d, a, b, c, k[6], 9, -1069501632);
            c = MD5.gg(c, d, a, b, k[11], 14, 643717713);
            b = MD5.gg(b, c, d, a, k[0], 20, -373897302);
            a = MD5.gg(a, b, c, d, k[5], 5, -701558691);
            d = MD5.gg(d, a, b, c, k[10], 9, 38016083);
            c = MD5.gg(c, d, a, b, k[15], 14, -660478335);
            b = MD5.gg(b, c, d, a, k[4], 20, -405537848);
            a = MD5.gg(a, b, c, d, k[9], 5, 568446438);
            d = MD5.gg(d, a, b, c, k[14], 9, -1019803690);
            c = MD5.gg(c, d, a, b, k[3], 14, -187363961);
            b = MD5.gg(b, c, d, a, k[8], 20, 1163531501);
            a = MD5.gg(a, b, c, d, k[13], 5, -1444681467);
            d = MD5.gg(d, a, b, c, k[2], 9, -51403784);
            c = MD5.gg(c, d, a, b, k[7], 14, 1735328473);
            b = MD5.gg(b, c, d, a, k[12], 20, -1926607734);

            a = MD5.hh(a, b, c, d, k[5], 4, -378558);
            d = MD5.hh(d, a, b, c, k[8], 11, -2022574463);
            c = MD5.hh(c, d, a, b, k[11], 16, 1839030562);
            b = MD5.hh(b, c, d, a, k[14], 23, -35309556);
            a = MD5.hh(a, b, c, d, k[1], 4, -1530992060);
            d = MD5.hh(d, a, b, c, k[4], 11, 1272893353);
            c = MD5.hh(c, d, a, b, k[7], 16, -155497632);
            b = MD5.hh(b, c, d, a, k[10], 23, -1094730640);
            a = MD5.hh(a, b, c, d, k[13], 4, 681279174);
            d = MD5.hh(d, a, b, c, k[0], 11, -358537222);
            c = MD5.hh(c, d, a, b, k[3], 16, -722521979);
            b = MD5.hh(b, c, d, a, k[6], 23, 76029189);
            a = MD5.hh(a, b, c, d, k[9], 4, -640364487);
            d = MD5.hh(d, a, b, c, k[12], 11, -421815835);
            c = MD5.hh(c, d, a, b, k[15], 16, 530742520);
            b = MD5.hh(b, c, d, a, k[2], 23, -995338651);

            a = MD5.ii(a, b, c, d, k[0], 6, -198630844);
            d = MD5.ii(d, a, b, c, k[7], 10, 1126891415);
            c = MD5.ii(c, d, a, b, k[14], 15, -1416354905);
            b = MD5.ii(b, c, d, a, k[5], 21, -57434055);
            a = MD5.ii(a, b, c, d, k[12], 6, 1700485571);
            d = MD5.ii(d, a, b, c, k[3], 10, -1894986606);
            c = MD5.ii(c, d, a, b, k[10], 15, -1051523);
            b = MD5.ii(b, c, d, a, k[1], 21, -2054922799);
            a = MD5.ii(a, b, c, d, k[8], 6, 1873313359);
            d = MD5.ii(d, a, b, c, k[15], 10, -30611744);
            c = MD5.ii(c, d, a, b, k[6], 15, -1560198380);
            b = MD5.ii(b, c, d, a, k[13], 21, 1309151649);
            a = MD5.ii(a, b, c, d, k[4], 6, -145523070);
            d = MD5.ii(d, a, b, c, k[11], 10, -1120210379);
            c = MD5.ii(c, d, a, b, k[2], 15, 718787259);
            b = MD5.ii(b, c, d, a, k[9], 21, -343485551);

            x[0] = MD5.add32(a, x[0]);
            x[1] = MD5.add32(b, x[1]);
            x[2] = MD5.add32(c, x[2]);
            x[3] = MD5.add32(d, x[3]);
        }
    }, {
        key: 'cmn',
        value: function cmn(q, a, b, x, s, t) {
            a = MD5.add32(MD5.add32(a, q), MD5.add32(x, t));
            return MD5.add32(a << s | a >>> 32 - s, b);
        }
    }, {
        key: 'ff',
        value: function ff(a, b, c, d, x, s, t) {
            return MD5.cmn(b & c | ~b & d, a, b, x, s, t);
        }
    }, {
        key: 'gg',
        value: function gg(a, b, c, d, x, s, t) {
            return MD5.cmn(b & d | c & ~d, a, b, x, s, t);
        }
    }, {
        key: 'hh',
        value: function hh(a, b, c, d, x, s, t) {
            return MD5.cmn(b ^ c ^ d, a, b, x, s, t);
        }
    }, {
        key: 'ii',
        value: function ii(a, b, c, d, x, s, t) {
            return MD5.cmn(c ^ (b | ~d), a, b, x, s, t);
        }
    }, {
        key: 'add32',
        value: function add32(a, b) {
            return a + b & 0xFFFFFFFF;
        }
    }, {
        key: 'md51',
        value: function md51(s) {
            var n = s.length;
            var state = [1732584193, -271733879, -1732584194, 271733878];
            var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            var o = 0,
                i = 64;

            for (i; i <= n; i += 64) {
                MD5.md5cycle(state, MD5.md5blk(s.substring(i - 64, i)));
            }
            s = s.substring(i - 64);
            i = 0;
            o = s.length;
            for (i; i < o; i++) {
                tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
            }
            tail[i >> 2] |= 0x80 << (i % 4 << 3);
            if (i > 55) {
                MD5.md5cycle(state, tail);
                for (i = 0; i < 16; i++) {
                    tail[i] = 0;
                }
            }
            tail[14] = n * 8;
            MD5.md5cycle(state, tail);
            return state;
        }
    }, {
        key: 'md5blk',
        value: function md5blk(s) {
            var md5blks = [];
            var i = 0;

            for (i; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
            }
            return md5blks;
        }
    }, {
        key: 'rhex',
        value: function rhex(n) {
            var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
            var s = '',
                j = 0;

            for (j; j < 4; j++) {
                s += hex[n >> j * 8 + 4 & 0x0F] + hex[n >> j * 8 & 0x0F];
            }
            return s;
        }
    }, {
        key: 'hex',
        value: function hex(x) {
            var length = x.length;
            var i = 0;

            for (i; i < length; i++) {
                x[i] = MD5.rhex(x[i]);
            }
            return x.join('');
        }
    }]);
    return MD5;
}();

/*
--- Day 5: How About a Nice Game of Chess? ---

You are faced with a security door designed by Easter Bunny engineers that seem
to have acquired most of their security knowledge by watching hacking movies.

The eight-character password for the door is generated one character at a time
by finding the MD5 hash of some Door ID (your puzzle input) and an increasing
integer index (starting with 0).

A hash indicates the next character in the password if its hexadecimal
representation starts with five zeroes. If it does, the sixth character in the
hash is the next character of the password.

For example, if the Door ID is abc:

The first index which produces a hash that starts with five zeroes is 3231929,
which we find by hashing abc3231929; the sixth character of the hash, and thus
the first character of the password, is 1. 5017308 produces the next interesting
hash, which starts with 000008f82..., so the second character of the password is
8. The third time a hash starts with five zeroes is for abc5278568, discovering
the character f. In this example, after continuing this search a total of eight
times, the password is 18f47a30.

Given the actual Door ID, what is the password?

Your puzzle answer was f77a0e6e.

--- Part Two ---

As the door slides open, you are presented with a second door that uses a
slightly more inspired security mechanism. Clearly unimpressed by the last
version (in what movie is the password decrypted in order?!), the Easter Bunny
engineers have worked out a better solution.

Instead of simply filling in the password from left to right, the hash now also
indicates the position within the password to fill. You still look for hashes
that begin with five zeroes; however, now, the sixth character represents the
position (0-7), and the seventh character is the character to put in that
position.

A hash result of 000001f means that f is the second character in the password.
Use only the first result for each position, and ignore invalid positions.

For example, if the Door ID is abc:

The first interesting hash is from abc3231929, which produces 0000015...; so, 5
goes in position 1: _5______. In the previous method, 5017308 produced an
interesting hash; however, it is ignored, because it specifies an invalid
position (8). The second interesting hash is at index 5357525, which produces
000004e...; so, e goes in position 4: _5__e___. You almost choke on your popcorn
as the final character falls into place, producing the password 05ace8e3.

Given the actual Door ID and this new method, what is the password? Be extra
proud of your solution if it uses a cinematic "decrypting" animation.

Your puzzle answer was 999828ec.
*/

var InterestingHashGenerator = function () {
  function InterestingHashGenerator(doorId) {
    classCallCheck(this, InterestingHashGenerator);

    this.doorId = doorId;
    this.index = 0;
  }

  createClass(InterestingHashGenerator, [{
    key: "next",
    value: function next() {
      var hash = void 0;
      do {
        hash = MD5.hash(this.doorId + this.index++);
      } while (hash.slice(0, 5) !== "00000");
      return hash;
    }
  }]);
  return InterestingHashGenerator;
}();

function part1$4(input) {
  var generator = new InterestingHashGenerator(input);
  var password = ["-", "-", "-", "-", "-", "-", "-", "-"];
  for (var i = 0; i < password.length; i++) {
    password[i] = generator.next()[5];
    console.log(password.reduce(function (x, y) {
      return x + y;
    }));
  }
  return password.reduce(function (x, y) {
    return x + y;
  });
}

function part2$4(input) {
  var generator = new InterestingHashGenerator(input);
  var password = ["-", "-", "-", "-", "-", "-", "-", "-"];
  while (password.includes("-")) {
    var hash = generator.next();
    if (password[hash[5]] === "-") {
      password[hash[5]] = hash[6];
      console.log(password.reduce(function (x, y) {
        return x + y;
      }));
    }
  }
  return password.reduce(function (x, y) {
    return x + y;
  });
}

var input05 = "cxdnnyjw"
;

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
function group$1(arr) {
  var groups = [],
      i = 0;
  while (i < arr.length) {
    var _group = [];
    do {
      _group.push(arr[i++]);
    } while (arr[i] === _group[0]);
    groups.push(_group);
  }
  return groups;
}

// Transpose an array of arrays (treated as a matrix).
function transpose$1(arr) {
  var transposed = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
      if (!transposed[j]) {
        transposed[j] = [];
      }
      transposed[j][i] = arr[i][j];
    }
  }
  return transposed;
}

function mostFrequent(arr) {
  return group$1(arr.sort()).sort(function (x, y) {
    return y.length - x.length;
  })[0][0];
}

function leastFrequent(arr) {
  return group$1(arr.sort()).sort(function (x, y) {
    return x.length - y.length;
  })[0][0];
}

function part1$5(input) {
  return transpose$1(input).map(mostFrequent).reduce(function (x, y) {
    return x + y;
  });
}

function part2$5(input) {
  return transpose$1(input).map(leastFrequent).reduce(function (x, y) {
    return x + y;
  });
}

var input06 = [
  ["l", "h", "y", "r", "n", "f", "k", "p"],
  ["b", "d", "x", "p", "g", "g", "w", "q"],
  ["o", "w", "t", "z", "s", "w", "t", "q"],
  ["o", "b", "x", "t", "f", "o", "t", "k"],
  ["h", "v", "d", "s", "h", "m", "o", "l"],
  ["k", "p", "j", "q", "p", "f", "t", "g"],
  ["o", "d", "y", "a", "g", "v", "e", "c"],
  ["v", "q", "l", "b", "x", "r", "f", "t"],
  ["h", "t", "w", "e", "n", "e", "g", "q"],
  ["p", "c", "f", "o", "x", "g", "w", "m"],
  ["b", "m", "n", "q", "z", "u", "i", "u"],
  ["x", "i", "d", "t", "e", "s", "w", "q"],
  ["w", "i", "i", "z", "q", "p", "q", "h"],
  ["v", "n", "l", "u", "e", "o", "k", "u"],
  ["h", "g", "z", "n", "t", "a", "f", "s"],
  ["k", "f", "e", "s", "w", "c", "a", "d"],
  ["l", "q", "s", "k", "h", "v", "r", "j"],
  ["u", "g", "u", "l", "j", "f", "p", "d"],
  ["d", "f", "b", "m", "d", "u", "u", "u"],
  ["g", "a", "j", "u", "j", "o", "z", "o"],
  ["d", "c", "k", "m", "g", "o", "u", "u"],
  ["h", "e", "b", "c", "f", "x", "o", "v"],
  ["u", "w", "a", "m", "f", "j", "j", "b"],
  ["f", "j", "p", "u", "a", "p", "z", "j"],
  ["y", "g", "x", "b", "v", "k", "f", "m"],
  ["e", "r", "b", "f", "b", "f", "l", "d"],
  ["r", "s", "s", "p", "o", "w", "g", "s"],
  ["z", "f", "x", "r", "s", "h", "q", "w"],
  ["g", "a", "f", "e", "g", "c", "a", "k"],
  ["l", "f", "c", "l", "u", "y", "t", "l"],
  ["a", "q", "m", "v", "t", "d", "o", "c"],
  ["d", "n", "j", "w", "b", "c", "i", "t"],
  ["j", "z", "t", "g", "w", "b", "n", "c"],
  ["t", "c", "w", "u", "x", "h", "j", "h"],
  ["f", "p", "f", "h", "k", "c", "q", "o"],
  ["k", "a", "c", "h", "o", "w", "x", "l"],
  ["z", "l", "w", "q", "l", "o", "b", "d"],
  ["q", "f", "b", "u", "c", "j", "c", "o"],
  ["h", "s", "m", "i", "b", "q", "a", "k"],
  ["o", "g", "i", "l", "f", "l", "q", "z"],
  ["i", "v", "g", "y", "u", "v", "s", "c"],
  ["f", "l", "z", "a", "g", "y", "s", "s"],
  ["o", "i", "i", "b", "o", "b", "a", "n"],
  ["a", "w", "h", "i", "l", "r", "m", "t"],
  ["a", "y", "u", "b", "m", "y", "y", "r"],
  ["u", "t", "x", "e", "x", "z", "a", "y"],
  ["d", "h", "m", "o", "k", "g", "f", "u"],
  ["r", "k", "k", "b", "v", "a", "e", "v"],
  ["f", "v", "x", "l", "z", "l", "z", "e"],
  ["w", "w", "d", "l", "e", "x", "h", "b"],
  ["y", "e", "d", "a", "g", "w", "r", "r"],
  ["h", "h", "l", "q", "f", "q", "s", "h"],
  ["l", "t", "u", "d", "v", "r", "k", "e"],
  ["e", "x", "h", "l", "c", "d", "s", "z"],
  ["y", "i", "v", "i", "v", "a", "t", "l"],
  ["i", "w", "t", "f", "s", "l", "i", "c"],
  ["j", "w", "v", "f", "r", "j", "r", "v"],
  ["c", "x", "x", "m", "y", "j", "w", "c"],
  ["s", "c", "m", "m", "a", "y", "b", "m"],
  ["b", "t", "i", "o", "f", "o", "i", "s"],
  ["b", "h", "w", "t", "w", "a", "m", "w"],
  ["r", "f", "u", "k", "z", "z", "o", "u"],
  ["q", "e", "y", "t", "e", "i", "v", "m"],
  ["u", "k", "a", "h", "v", "j", "g", "q"],
  ["b", "g", "u", "p", "x", "q", "r", "k"],
  ["a", "u", "f", "t", "c", "j", "c", "m"],
  ["y", "j", "q", "h", "l", "s", "n", "q"],
  ["f", "n", "w", "g", "o", "t", "r", "w"],
  ["s", "x", "l", "u", "m", "i", "j", "z"],
  ["h", "c", "f", "z", "k", "m", "w", "n"],
  ["k", "c", "a", "d", "g", "q", "t", "i"],
  ["q", "f", "c", "j", "r", "z", "d", "j"],
  ["e", "q", "y", "d", "v", "b", "i", "r"],
  ["f", "d", "o", "b", "p", "h", "c", "p"],
  ["x", "e", "k", "m", "n", "l", "u", "y"],
  ["c", "l", "i", "t", "h", "g", "m", "p"],
  ["l", "j", "s", "t", "b", "c", "q", "d"],
  ["v", "x", "j", "l", "d", "l", "a", "n"],
  ["m", "g", "s", "g", "g", "p", "d", "d"],
  ["p", "j", "n", "o", "s", "a", "k", "e"],
  ["q", "q", "z", "t", "u", "r", "n", "b"],
  ["l", "e", "h", "e", "z", "n", "z", "o"],
  ["y", "b", "f", "o", "f", "j", "s", "q"],
  ["z", "o", "e", "n", "l", "u", "c", "n"],
  ["g", "y", "m", "g", "g", "a", "x", "t"],
  ["z", "c", "k", "a", "u", "f", "c", "a"],
  ["p", "m", "e", "d", "r", "m", "h", "x"],
  ["m", "s", "e", "w", "t", "q", "r", "f"],
  ["e", "i", "p", "l", "b", "t", "m", "g"],
  ["o", "e", "w", "l", "p", "x", "m", "w"],
  ["u", "u", "n", "r", "j", "s", "d", "m"],
  ["m", "a", "w", "i", "i", "q", "u", "l"],
  ["i", "x", "g", "l", "p", "e", "x", "k"],
  ["f", "c", "y", "n", "r", "f", "x", "y"],
  ["b", "z", "e", "x", "b", "i", "f", "a"],
  ["m", "o", "w", "g", "b", "e", "e", "m"],
  ["g", "w", "f", "y", "u", "j", "h", "p"],
  ["j", "w", "p", "u", "y", "e", "b", "l"],
  ["a", "v", "t", "c", "s", "p", "e", "m"],
  ["u", "r", "r", "v", "r", "l", "v", "r"],
  ["q", "g", "v", "g", "s", "k", "n", "r"],
  ["o", "p", "j", "k", "h", "r", "a", "o"],
  ["h", "o", "x", "r", "p", "p", "t", "x"],
  ["q", "h", "o", "u", "n", "v", "g", "g"],
  ["c", "s", "v", "d", "r", "q", "q", "s"],
  ["c", "s", "n", "b", "v", "h", "v", "z"],
  ["g", "p", "c", "i", "l", "c", "d", "i"],
  ["n", "o", "q", "q", "b", "k", "x", "y"],
  ["s", "m", "g", "t", "o", "k", "d", "e"],
  ["r", "p", "g", "d", "q", "n", "y", "r"],
  ["q", "b", "r", "o", "g", "t", "b", "y"],
  ["s", "i", "b", "u", "l", "u", "r", "a"],
  ["y", "c", "w", "j", "y", "x", "e", "p"],
  ["l", "u", "o", "y", "i", "b", "l", "x"],
  ["o", "t", "q", "m", "b", "b", "x", "z"],
  ["l", "u", "p", "x", "u", "w", "f", "d"],
  ["q", "b", "i", "n", "s", "y", "g", "w"],
  ["y", "w", "v", "j", "h", "h", "e", "s"],
  ["x", "b", "m", "x", "q", "h", "y", "r"],
  ["n", "b", "k", "x", "y", "t", "y", "k"],
  ["o", "r", "q", "h", "z", "t", "o", "z"],
  ["c", "r", "x", "u", "j", "q", "b", "z"],
  ["x", "o", "d", "n", "l", "v", "h", "i"],
  ["t", "y", "k", "a", "i", "q", "i", "n"],
  ["x", "o", "z", "m", "h", "t", "a", "e"],
  ["x", "u", "x", "n", "o", "m", "i", "n"],
  ["e", "a", "c", "u", "r", "u", "t", "i"],
  ["z", "k", "k", "c", "b", "h", "b", "n"],
  ["t", "c", "t", "j", "w", "s", "o", "g"],
  ["h", "t", "g", "y", "e", "r", "c", "i"],
  ["s", "g", "m", "g", "i", "o", "w", "l"],
  ["v", "k", "a", "w", "s", "e", "t", "x"],
  ["v", "o", "y", "n", "m", "l", "m", "c"],
  ["f", "n", "e", "v", "i", "b", "k", "h"],
  ["s", "h", "v", "b", "i", "l", "h", "c"],
  ["x", "r", "a", "c", "d", "k", "c", "d"],
  ["f", "c", "r", "d", "z", "b", "b", "l"],
  ["s", "u", "l", "z", "f", "a", "p", "g"],
  ["i", "c", "d", "t", "f", "c", "q", "d"],
  ["b", "q", "j", "k", "z", "y", "d", "z"],
  ["t", "a", "b", "l", "h", "o", "x", "v"],
  ["x", "s", "p", "y", "z", "h", "w", "x"],
  ["z", "w", "l", "v", "j", "f", "n", "h"],
  ["q", "n", "f", "r", "p", "j", "y", "b"],
  ["z", "v", "t", "p", "c", "w", "s", "y"],
  ["u", "c", "d", "b", "r", "c", "z", "y"],
  ["u", "n", "c", "w", "j", "s", "x", "x"],
  ["y", "b", "m", "l", "n", "t", "i", "b"],
  ["z", "f", "h", "s", "o", "h", "u", "s"],
  ["h", "a", "h", "c", "y", "i", "w", "z"],
  ["n", "k", "f", "w", "a", "p", "v", "p"],
  ["d", "l", "z", "t", "a", "z", "j", "m"],
  ["v", "s", "b", "m", "d", "d", "o", "s"],
  ["d", "x", "t", "y", "c", "p", "a", "o"],
  ["c", "y", "c", "a", "s", "g", "e", "g"],
  ["o", "l", "h", "b", "p", "c", "v", "c"],
  ["n", "g", "w", "s", "r", "o", "t", "j"],
  ["z", "c", "x", "q", "p", "k", "m", "i"],
  ["w", "s", "h", "t", "e", "r", "w", "t"],
  ["p", "b", "i", "g", "b", "q", "r", "t"],
  ["s", "e", "j", "n", "c", "n", "t", "d"],
  ["l", "z", "f", "g", "c", "s", "n", "s"],
  ["h", "u", "s", "i", "z", "v", "t", "u"],
  ["r", "p", "r", "j", "a", "z", "g", "p"],
  ["b", "e", "u", "z", "g", "q", "l", "w"],
  ["t", "l", "j", "k", "i", "x", "d", "i"],
  ["z", "b", "y", "e", "n", "v", "l", "j"],
  ["f", "f", "g", "y", "v", "r", "b", "k"],
  ["l", "w", "j", "u", "y", "p", "v", "f"],
  ["e", "x", "n", "y", "k", "v", "d", "w"],
  ["m", "n", "n", "v", "d", "q", "a", "y"],
  ["u", "e", "f", "j", "o", "v", "q", "d"],
  ["z", "k", "y", "w", "l", "y", "p", "t"],
  ["x", "u", "w", "h", "i", "r", "k", "d"],
  ["h", "r", "d", "n", "x", "b", "r", "f"],
  ["e", "o", "z", "j", "u", "i", "w", "n"],
  ["u", "x", "r", "j", "j", "t", "i", "d"],
  ["f", "i", "r", "f", "n", "h", "f", "a"],
  ["z", "z", "o", "j", "x", "p", "n", "q"],
  ["n", "v", "u", "r", "x", "u", "c", "q"],
  ["v", "d", "c", "u", "j", "a", "x", "w"],
  ["a", "r", "s", "s", "a", "f", "h", "y"],
  ["v", "v", "s", "f", "h", "z", "e", "e"],
  ["c", "i", "a", "p", "v", "f", "d", "c"],
  ["q", "d", "h", "l", "u", "k", "y", "s"],
  ["k", "s", "o", "v", "l", "k", "e", "j"],
  ["p", "x", "r", "w", "i", "w", "z", "x"],
  ["z", "z", "f", "i", "w", "f", "v", "r"],
  ["a", "y", "o", "e", "r", "e", "a", "c"],
  ["u", "l", "p", "v", "c", "n", "r", "o"],
  ["r", "n", "o", "i", "k", "e", "y", "a"],
  ["o", "v", "h", "w", "c", "z", "v", "r"],
  ["f", "t", "q", "d", "e", "l", "x", "p"],
  ["t", "l", "b", "n", "p", "l", "x", "k"],
  ["l", "k", "g", "d", "a", "h", "f", "x"],
  ["m", "g", "g", "i", "h", "w", "m", "l"],
  ["k", "s", "j", "w", "a", "y", "k", "e"],
  ["t", "t", "u", "u", "z", "p", "e", "k"],
  ["e", "l", "u", "y", "m", "f", "y", "k"],
  ["v", "d", "x", "l", "a", "x", "e", "u"],
  ["w", "u", "v", "f", "e", "m", "m", "u"],
  ["y", "e", "n", "q", "u", "v", "z", "q"],
  ["p", "a", "e", "z", "s", "s", "s", "c"],
  ["o", "q", "i", "p", "p", "w", "o", "k"],
  ["i", "t", "c", "z", "z", "o", "p", "h"],
  ["b", "s", "c", "c", "y", "d", "f", "h"],
  ["t", "u", "s", "h", "t", "l", "c", "v"],
  ["r", "f", "d", "m", "m", "n", "m", "d"],
  ["h", "s", "h", "m", "d", "v", "s", "j"],
  ["v", "v", "b", "r", "l", "k", "r", "w"],
  ["u", "g", "i", "s", "w", "k", "u", "u"],
  ["k", "j", "u", "s", "s", "i", "b", "m"],
  ["x", "z", "s", "g", "s", "n", "i", "b"],
  ["u", "p", "a", "y", "q", "k", "g", "u"],
  ["w", "l", "z", "p", "j", "y", "i", "z"],
  ["l", "a", "y", "p", "q", "o", "e", "e"],
  ["u", "a", "p", "v", "d", "s", "n", "e"],
  ["t", "t", "h", "k", "h", "v", "d", "r"],
  ["i", "w", "q", "o", "v", "p", "n", "a"],
  ["k", "f", "d", "c", "m", "i", "y", "e"],
  ["n", "j", "v", "z", "s", "b", "v", "m"],
  ["s", "r", "h", "a", "t", "w", "e", "g"],
  ["j", "s", "n", "k", "v", "x", "p", "l"],
  ["z", "s", "w", "w", "z", "e", "i", "f"],
  ["a", "g", "b", "a", "m", "k", "e", "m"],
  ["d", "j", "b", "q", "h", "v", "b", "v"],
  ["v", "l", "k", "j", "g", "g", "f", "u"],
  ["h", "s", "w", "v", "k", "m", "r", "j"],
  ["j", "b", "y", "s", "a", "c", "l", "f"],
  ["d", "z", "w", "v", "v", "z", "i", "v"],
  ["r", "f", "c", "z", "o", "q", "n", "x"],
  ["n", "e", "f", "k", "q", "m", "w", "w"],
  ["u", "x", "j", "o", "b", "c", "l", "u"],
  ["z", "w", "j", "o", "i", "g", "l", "n"],
  ["h", "b", "o", "z", "u", "y", "o", "s"],
  ["b", "d", "o", "z", "m", "q", "b", "n"],
  ["v", "h", "q", "q", "e", "d", "w", "c"],
  ["l", "j", "g", "o", "k", "u", "d", "j"],
  ["z", "o", "d", "x", "o", "j", "t", "k"],
  ["n", "s", "u", "l", "y", "c", "d", "w"],
  ["c", "x", "z", "p", "t", "a", "c", "m"],
  ["c", "f", "y", "s", "g", "n", "v", "q"],
  ["d", "y", "e", "s", "p", "p", "s", "p"],
  ["t", "k", "z", "k", "m", "l", "v", "h"],
  ["o", "q", "s", "d", "x", "n", "k", "f"],
  ["e", "j", "g", "a", "i", "m", "u", "m"],
  ["r", "j", "m", "t", "d", "i", "n", "r"],
  ["v", "p", "z", "i", "n", "t", "i", "x"],
  ["g", "q", "h", "y", "m", "a", "k", "z"],
  ["n", "w", "v", "m", "s", "c", "p", "i"],
  ["h", "q", "u", "n", "k", "e", "j", "v"],
  ["e", "y", "h", "y", "r", "c", "p", "i"],
  ["i", "a", "f", "l", "k", "w", "q", "e"],
  ["t", "d", "x", "r", "t", "d", "h", "g"],
  ["h", "f", "k", "n", "w", "e", "p", "a"],
  ["g", "d", "x", "e", "m", "u", "b", "y"],
  ["m", "k", "r", "a", "j", "o", "u", "k"],
  ["a", "j", "t", "i", "t", "f", "d", "q"],
  ["d", "w", "c", "w", "p", "g", "g", "i"],
  ["n", "g", "i", "m", "h", "i", "c", "q"],
  ["u", "d", "x", "x", "y", "u", "a", "b"],
  ["z", "w", "t", "s", "z", "r", "u", "r"],
  ["p", "l", "e", "x", "f", "x", "y", "v"],
  ["w", "a", "z", "q", "f", "m", "w", "w"],
  ["v", "p", "o", "g", "n", "h", "b", "z"],
  ["v", "t", "i", "f", "g", "e", "i", "o"],
  ["j", "l", "d", "h", "m", "f", "a", "v"],
  ["u", "s", "p", "a", "h", "e", "j", "n"],
  ["l", "i", "k", "c", "k", "h", "y", "f"],
  ["j", "b", "i", "s", "j", "f", "u", "p"],
  ["o", "f", "t", "r", "d", "c", "w", "r"],
  ["j", "y", "q", "e", "f", "b", "h", "m"],
  ["k", "v", "d", "o", "h", "l", "k", "p"],
  ["z", "r", "u", "m", "c", "n", "j", "i"],
  ["n", "m", "p", "a", "a", "n", "y", "a"],
  ["s", "g", "g", "p", "m", "l", "p", "b"],
  ["c", "e", "g", "b", "q", "k", "q", "g"],
  ["a", "r", "n", "n", "q", "z", "s", "h"],
  ["s", "a", "a", "h", "x", "q", "s", "p"],
  ["i", "z", "d", "w", "d", "d", "g", "g"],
  ["h", "f", "o", "h", "u", "y", "p", "m"],
  ["y", "j", "v", "k", "n", "x", "y", "f"],
  ["b", "v", "l", "w", "d", "r", "m", "j"],
  ["t", "r", "q", "a", "b", "r", "z", "q"],
  ["p", "o", "c", "i", "q", "n", "x", "b"],
  ["b", "m", "j", "n", "h", "h", "l", "x"],
  ["m", "s", "i", "n", "o", "x", "j", "y"],
  ["f", "o", "o", "x", "y", "u", "e", "x"],
  ["p", "b", "y", "k", "w", "j", "v", "s"],
  ["c", "j", "w", "h", "f", "s", "g", "q"],
  ["d", "j", "z", "x", "x", "x", "j", "h"],
  ["b", "m", "j", "s", "u", "o", "x", "s"],
  ["v", "t", "z", "w", "p", "j", "k", "f"],
  ["o", "g", "w", "n", "r", "d", "z", "x"],
  ["z", "c", "n", "j", "y", "m", "z", "g"],
  ["p", "z", "s", "f", "q", "q", "e", "x"],
  ["y", "q", "y", "f", "s", "d", "y", "w"],
  ["e", "e", "k", "c", "h", "x", "v", "n"],
  ["c", "t", "w", "k", "t", "b", "k", "p"],
  ["w", "h", "q", "b", "k", "r", "i", "j"],
  ["t", "q", "r", "t", "y", "s", "f", "a"],
  ["y", "m", "n", "d", "x", "p", "z", "g"],
  ["n", "b", "i", "y", "q", "g", "z", "v"],
  ["e", "k", "s", "t", "o", "h", "s", "w"],
  ["r", "l", "j", "l", "x", "g", "p", "b"],
  ["l", "m", "r", "q", "p", "h", "r", "o"],
  ["o", "u", "x", "j", "e", "m", "v", "j"],
  ["b", "r", "r", "h", "a", "f", "u", "l"],
  ["e", "n", "z", "z", "l", "l", "k", "v"],
  ["u", "n", "m", "h", "t", "f", "b", "z"],
  ["k", "j", "r", "a", "o", "w", "e", "e"],
  ["j", "v", "v", "u", "o", "a", "h", "h"],
  ["t", "f", "j", "c", "y", "x", "o", "k"],
  ["s", "z", "g", "e", "f", "j", "v", "x"],
  ["r", "j", "s", "m", "l", "s", "l", "y"],
  ["a", "z", "n", "b", "t", "e", "h", "x"],
  ["i", "d", "g", "f", "m", "h", "p", "s"],
  ["w", "x", "h", "c", "j", "u", "f", "d"],
  ["r", "p", "k", "u", "t", "k", "q", "w"],
  ["y", "y", "e", "t", "t", "e", "p", "o"],
  ["l", "f", "l", "h", "b", "n", "q", "s"],
  ["s", "d", "o", "b", "n", "a", "m", "v"],
  ["l", "p", "x", "u", "u", "s", "d", "t"],
  ["n", "n", "l", "y", "j", "l", "x", "d"],
  ["p", "u", "i", "r", "i", "k", "s", "n"],
  ["j", "m", "a", "i", "e", "i", "a", "g"],
  ["s", "k", "l", "e", "x", "t", "a", "x"],
  ["n", "m", "z", "n", "o", "y", "f", "h"],
  ["r", "y", "a", "e", "i", "o", "f", "l"],
  ["s", "n", "l", "u", "y", "z", "j", "i"],
  ["p", "p", "n", "y", "i", "o", "h", "v"],
  ["q", "a", "d", "w", "k", "b", "h", "u"],
  ["y", "m", "u", "k", "s", "n", "w", "w"],
  ["y", "z", "r", "p", "l", "y", "m", "h"],
  ["b", "d", "l", "b", "o", "x", "v", "b"],
  ["k", "i", "e", "f", "c", "t", "j", "e"],
  ["l", "w", "v", "g", "i", "t", "s", "a"],
  ["u", "r", "u", "d", "i", "e", "x", "s"],
  ["t", "k", "c", "x", "o", "s", "e", "q"],
  ["m", "q", "q", "z", "u", "b", "n", "u"],
  ["p", "v", "r", "f", "z", "u", "y", "i"],
  ["y", "o", "f", "p", "w", "i", "n", "b"],
  ["d", "v", "e", "h", "c", "o", "e", "i"],
  ["x", "m", "p", "j", "t", "c", "g", "q"],
  ["e", "y", "h", "n", "e", "u", "y", "t"],
  ["p", "e", "r", "o", "n", "j", "z", "x"],
  ["c", "v", "e", "y", "x", "r", "s", "p"],
  ["j", "e", "y", "b", "g", "x", "f", "h"],
  ["a", "q", "a", "b", "k", "s", "l", "x"],
  ["m", "s", "l", "q", "l", "v", "u", "w"],
  ["t", "c", "p", "r", "s", "u", "c", "o"],
  ["b", "h", "u", "u", "w", "r", "h", "c"],
  ["d", "q", "x", "q", "d", "q", "r", "t"],
  ["q", "u", "p", "e", "y", "w", "u", "l"],
  ["m", "v", "h", "l", "c", "j", "m", "v"],
  ["g", "h", "t", "p", "i", "e", "v", "e"],
  ["x", "i", "i", "f", "b", "o", "l", "n"],
  ["m", "c", "x", "h", "n", "b", "i", "b"],
  ["o", "i", "x", "e", "t", "m", "p", "u"],
  ["x", "m", "p", "g", "n", "d", "n", "i"],
  ["b", "j", "q", "d", "n", "v", "r", "t"],
  ["l", "u", "t", "q", "z", "g", "k", "t"],
  ["g", "l", "e", "g", "j", "y", "o", "v"],
  ["q", "t", "q", "e", "q", "s", "v", "f"],
  ["a", "d", "b", "j", "b", "z", "x", "h"],
  ["t", "e", "v", "y", "s", "r", "x", "y"],
  ["w", "j", "w", "v", "s", "a", "w", "n"],
  ["i", "u", "t", "r", "r", "j", "q", "w"],
  ["n", "m", "n", "p", "j", "u", "s", "p"],
  ["i", "y", "b", "i", "b", "k", "l", "a"],
  ["q", "v", "n", "e", "w", "y", "i", "t"],
  ["n", "m", "a", "i", "l", "s", "p", "e"],
  ["w", "t", "l", "y", "d", "t", "c", "s"],
  ["g", "h", "o", "r", "m", "k", "l", "l"],
  ["m", "f", "v", "x", "a", "u", "y", "b"],
  ["e", "a", "q", "g", "a", "f", "o", "n"],
  ["r", "a", "y", "g", "y", "o", "r", "v"],
  ["k", "r", "m", "j", "z", "d", "q", "a"],
  ["w", "a", "o", "f", "j", "z", "z", "p"],
  ["u", "f", "c", "v", "e", "i", "j", "p"],
  ["g", "z", "q", "r", "v", "y", "h", "l"],
  ["r", "i", "r", "d", "k", "m", "v", "f"],
  ["m", "i", "u", "b", "c", "w", "x", "g"],
  ["y", "u", "v", "s", "r", "f", "g", "p"],
  ["i", "z", "e", "i", "z", "u", "d", "k"],
  ["i", "n", "c", "w", "r", "r", "j", "q"],
  ["e", "r", "e", "e", "w", "g", "b", "m"],
  ["b", "m", "v", "o", "r", "m", "q", "n"],
  ["p", "a", "r", "g", "h", "y", "r", "t"],
  ["v", "h", "t", "t", "g", "v", "g", "d"],
  ["d", "h", "a", "s", "u", "g", "n", "e"],
  ["m", "g", "b", "z", "f", "m", "p", "u"],
  ["m", "y", "b", "p", "d", "t", "r", "g"],
  ["s", "z", "j", "z", "h", "a", "b", "k"],
  ["r", "p", "k", "z", "q", "o", "p", "r"],
  ["j", "p", "q", "m", "w", "o", "n", "y"],
  ["r", "e", "n", "e", "q", "k", "q", "z"],
  ["x", "n", "o", "c", "a", "d", "l", "b"],
  ["m", "m", "c", "a", "u", "a", "s", "f"],
  ["n", "g", "d", "f", "n", "o", "b", "k"],
  ["a", "d", "l", "e", "a", "n", "y", "x"],
  ["d", "c", "n", "c", "w", "d", "w", "h"],
  ["g", "n", "p", "y", "b", "b", "k", "q"],
  ["a", "u", "l", "b", "a", "s", "h", "t"],
  ["n", "j", "j", "p", "u", "p", "t", "w"],
  ["p", "o", "x", "m", "n", "f", "u", "y"],
  ["q", "n", "z", "q", "r", "u", "z", "a"],
  ["v", "t", "k", "g", "l", "l", "k", "o"],
  ["a", "v", "e", "w", "k", "i", "z", "l"],
  ["i", "o", "c", "v", "v", "p", "r", "q"],
  ["q", "c", "q", "s", "d", "c", "z", "w"],
  ["e", "h", "n", "o", "y", "d", "w", "s"],
  ["w", "m", "l", "n", "z", "n", "p", "e"],
  ["a", "r", "j", "q", "e", "q", "q", "e"],
  ["g", "n", "e", "x", "q", "z", "s", "j"],
  ["t", "i", "j", "g", "m", "c", "i", "g"],
  ["p", "b", "f", "s", "v", "w", "u", "x"],
  ["g", "u", "g", "n", "f", "h", "b", "o"],
  ["q", "m", "y", "q", "y", "v", "k", "m"],
  ["f", "g", "t", "c", "k", "a", "a", "c"],
  ["z", "o", "e", "a", "z", "i", "g", "t"],
  ["q", "x", "p", "i", "z", "w", "x", "b"],
  ["p", "o", "o", "v", "c", "a", "o", "s"],
  ["a", "a", "w", "p", "k", "g", "l", "f"],
  ["f", "h", "s", "d", "i", "s", "h", "c"],
  ["h", "x", "y", "u", "j", "v", "g", "l"],
  ["h", "b", "m", "p", "g", "q", "d", "y"],
  ["x", "u", "v", "o", "p", "j", "g", "a"],
  ["m", "r", "f", "q", "a", "k", "o", "j"],
  ["g", "b", "h", "o", "e", "p", "a", "g"],
  ["f", "x", "g", "q", "x", "p", "p", "a"],
  ["r", "l", "n", "y", "r", "c", "n", "q"],
  ["i", "d", "g", "a", "e", "t", "y", "t"],
  ["y", "i", "k", "n", "w", "v", "k", "b"],
  ["d", "s", "v", "e", "c", "c", "n", "f"],
  ["g", "r", "l", "d", "s", "g", "a", "y"],
  ["y", "d", "l", "h", "x", "z", "b", "g"],
  ["z", "x", "c", "r", "q", "g", "l", "b"],
  ["s", "z", "m", "f", "q", "q", "o", "g"],
  ["s", "i", "u", "k", "u", "a", "w", "i"],
  ["q", "j", "p", "f", "e", "b", "j", "v"],
  ["g", "y", "i", "x", "k", "e", "j", "o"],
  ["p", "q", "m", "s", "f", "r", "p", "p"],
  ["z", "b", "m", "x", "o", "w", "w", "d"],
  ["o", "k", "o", "h", "v", "t", "g", "z"],
  ["p", "r", "l", "t", "q", "p", "a", "c"],
  ["r", "d", "l", "z", "i", "j", "c", "f"],
  ["k", "b", "c", "x", "i", "b", "i", "r"],
  ["y", "q", "g", "o", "l", "y", "k", "j"],
  ["a", "v", "k", "d", "p", "h", "j", "z"],
  ["c", "u", "c", "c", "o", "g", "m", "n"],
  ["i", "h", "o", "k", "k", "c", "t", "r"],
  ["n", "e", "q", "b", "o", "g", "z", "z"],
  ["c", "p", "s", "q", "l", "w", "f", "f"],
  ["n", "x", "u", "f", "h", "d", "h", "w"],
  ["f", "e", "p", "x", "f", "l", "i", "r"],
  ["r", "a", "f", "r", "m", "a", "m", "v"],
  ["x", "o", "q", "i", "y", "x", "o", "z"],
  ["j", "t", "s", "k", "i", "d", "t", "y"],
  ["d", "j", "e", "r", "v", "l", "e", "k"],
  ["j", "a", "h", "s", "t", "r", "l", "h"],
  ["i", "t", "y", "y", "w", "f", "m", "z"],
  ["u", "k", "k", "w", "n", "a", "p", "a"],
  ["m", "x", "w", "k", "t", "a", "j", "k"],
  ["v", "n", "f", "n", "n", "e", "q", "e"],
  ["w", "e", "b", "g", "u", "d", "j", "j"],
  ["c", "x", "t", "w", "f", "e", "u", "l"],
  ["t", "n", "z", "w", "v", "z", "v", "v"],
  ["o", "x", "g", "x", "w", "s", "a", "u"],
  ["i", "h", "i", "v", "m", "x", "w", "d"],
  ["x", "o", "a", "t", "y", "l", "x", "h"],
  ["w", "d", "c", "a", "a", "t", "l", "t"],
  ["c", "q", "o", "p", "c", "s", "v", "z"],
  ["z", "w", "d", "m", "m", "n", "d", "m"],
  ["g", "o", "g", "r", "w", "i", "e", "u"],
  ["m", "q", "s", "d", "x", "y", "g", "v"],
  ["s", "q", "p", "c", "y", "m", "u", "a"],
  ["j", "m", "a", "z", "i", "b", "c", "t"],
  ["y", "k", "n", "e", "v", "i", "c", "a"],
  ["e", "h", "z", "l", "d", "i", "x", "x"],
  ["d", "y", "j", "o", "g", "h", "s", "f"],
  ["i", "k", "a", "k", "j", "h", "a", "u"],
  ["c", "u", "w", "c", "f", "l", "m", "n"],
  ["d", "q", "x", "j", "b", "p", "w", "s"],
  ["h", "b", "t", "g", "f", "r", "f", "d"],
  ["b", "k", "s", "l", "o", "y", "m", "h"],
  ["w", "d", "h", "p", "b", "u", "y", "y"],
  ["w", "l", "y", "u", "l", "i", "t", "l"],
  ["g", "l", "g", "p", "c", "k", "q", "a"],
  ["w", "b", "y", "o", "l", "g", "h", "t"],
  ["c", "c", "a", "j", "p", "t", "s", "y"],
  ["c", "p", "a", "i", "t", "x", "s", "f"],
  ["a", "c", "z", "r", "u", "v", "m", "p"],
  ["y", "k", "t", "a", "q", "a", "n", "j"],
  ["s", "f", "t", "u", "d", "e", "o", "g"],
  ["f", "n", "p", "a", "j", "m", "t", "c"],
  ["a", "v", "b", "d", "d", "c", "l", "h"],
  ["k", "t", "m", "f", "n", "t", "z", "j"],
  ["q", "y", "k", "l", "u", "q", "n", "l"],
  ["w", "h", "v", "d", "m", "w", "s", "i"],
  ["n", "s", "i", "t", "v", "g", "l", "v"],
  ["p", "y", "p", "x", "h", "j", "f", "c"],
  ["f", "n", "m", "w", "q", "z", "r", "q"],
  ["e", "t", "n", "o", "e", "z", "m", "k"],
  ["u", "v", "s", "s", "p", "z", "f", "l"],
  ["i", "g", "d", "i", "w", "p", "j", "w"],
  ["d", "o", "a", "j", "k", "j", "c", "k"],
  ["j", "w", "i", "w", "v", "w", "o", "t"],
  ["w", "k", "b", "k", "r", "u", "z", "o"],
  ["t", "h", "f", "e", "y", "n", "y", "j"],
  ["k", "e", "n", "a", "d", "z", "b", "r"],
  ["j", "t", "h", "e", "j", "i", "x", "e"],
  ["g", "w", "l", "z", "g", "u", "t", "b"],
  ["l", "w", "m", "j", "q", "q", "a", "h"],
  ["x", "t", "k", "x", "d", "n", "o", "j"],
  ["k", "o", "h", "m", "p", "r", "e", "y"],
  ["o", "b", "q", "z", "h", "y", "k", "f"],
  ["b", "z", "v", "k", "k", "e", "d", "g"],
  ["m", "r", "m", "d", "m", "d", "o", "u"],
  ["k", "i", "a", "c", "w", "g", "l", "o"],
  ["x", "n", "m", "f", "w", "g", "h", "i"],
  ["c", "r", "m", "e", "a", "z", "d", "o"],
  ["h", "i", "r", "v", "j", "n", "h", "c"],
  ["b", "c", "g", "h", "a", "m", "t", "z"],
  ["d", "g", "f", "x", "b", "e", "l", "b"],
  ["j", "r", "t", "r", "c", "v", "i", "o"],
  ["d", "y", "f", "v", "t", "t", "u", "d"],
  ["k", "k", "v", "x", "q", "z", "j", "m"],
  ["r", "c", "y", "d", "r", "p", "r", "i"],
  ["l", "l", "a", "m", "t", "m", "u", "t"],
  ["r", "w", "d", "h", "z", "d", "u", "r"],
  ["i", "i", "k", "o", "j", "x", "o", "u"],
  ["x", "v", "i", "l", "l", "k", "b", "g"],
  ["j", "o", "r", "z", "d", "b", "q", "p"],
  ["t", "j", "r", "y", "e", "w", "v", "m"],
  ["j", "l", "k", "v", "x", "d", "m", "m"],
  ["m", "d", "s", "a", "a", "t", "u", "a"],
  ["s", "h", "r", "x", "r", "f", "d", "p"],
  ["f", "p", "b", "v", "q", "x", "c", "h"],
  ["e", "m", "u", "j", "c", "g", "t", "o"],
  ["g", "z", "b", "r", "n", "d", "n", "a"],
  ["v", "i", "q", "c", "x", "v", "h", "f"],
  ["g", "p", "v", "b", "n", "i", "g", "j"],
  ["w", "p", "z", "t", "m", "z", "d", "i"],
  ["j", "p", "a", "t", "g", "i", "g", "c"],
  ["o", "z", "r", "m", "p", "b", "y", "l"],
  ["a", "p", "b", "f", "z", "n", "k", "y"],
  ["w", "k", "z", "v", "b", "n", "o", "f"],
  ["n", "h", "b", "c", "p", "l", "q", "c"],
  ["e", "d", "e", "h", "g", "y", "f", "a"],
  ["x", "g", "d", "o", "t", "i", "b", "f"],
  ["t", "y", "t", "m", "w", "m", "j", "d"],
  ["j", "x", "k", "q", "f", "k", "c", "e"],
  ["f", "e", "r", "k", "x", "t", "g", "n"],
  ["c", "y", "p", "p", "e", "m", "i", "i"],
  ["v", "z", "s", "z", "c", "h", "c", "r"],
  ["f", "i", "y", "q", "c", "f", "z", "j"],
  ["k", "q", "s", "j", "s", "w", "t", "s"],
  ["x", "x", "m", "f", "v", "b", "n", "b"],
  ["k", "p", "d", "i", "t", "j", "k", "o"],
  ["q", "s", "d", "s", "e", "u", "u", "r"],
  ["w", "f", "e", "r", "g", "p", "j", "s"],
  ["v", "m", "w", "k", "u", "x", "h", "i"],
  ["q", "k", "o", "g", "s", "m", "f", "n"],
  ["b", "a", "t", "c", "p", "n", "c", "v"],
  ["l", "l", "p", "v", "h", "s", "c", "r"],
  ["i", "z", "u", "i", "k", "d", "z", "e"],
  ["s", "z", "u", "j", "r", "s", "p", "z"],
  ["k", "g", "o", "c", "d", "j", "g", "b"],
  ["e", "u", "q", "h", "e", "o", "f", "n"],
  ["k", "y", "z", "b", "x", "x", "q", "o"],
  ["o", "y", "i", "s", "l", "b", "d", "o"]
]
;

/*
--- Day 7: Internet Protocol Version 7 ---

While snooping around the local network of EBHQ, you compile a list of IP
addresses (they're IPv7, of course; IPv6 is much too limited). You'd like to
figure out which IPs support TLS (transport-layer snooping).

An IP supports TLS if it has an Autonomous Bridge Bypass Annotation, or ABBA. An
ABBA is any four-character sequence which consists of a pair of two different
characters followed by the reverse of that pair, such as xyyx or abba. However,
the IP also must not have an ABBA within any hypernet sequences, which are
contained by square brackets.

For example:

abba[mnop]qrst supports TLS (abba outside square brackets). abcd[bddb]xyyx does
not support TLS (bddb is within square brackets, even though xyyx is outside
square brackets). aaaa[qwer]tyui does not support TLS (aaaa is invalid; the
interior characters must be different). ioxxoj[asdfgh]zxcvbn supports TLS (oxxo
is outside square brackets, even though it's within a larger string). How many
IPs in your puzzle input support TLS?

Your puzzle answer was 115.

--- Part Two ---

You would also like to know which IPs support SSL (super-secret listening).

An IP supports SSL if it has an Area-Broadcast Accessor, or ABA, anywhere in the
supernet sequences (outside any square bracketed sections), and a corresponding
Byte Allocation Block, or BAB, anywhere in the hypernet sequences. An ABA is any
three-character sequence which consists of the same character twice with a
different character between them, such as xyx or aba. A corresponding BAB is the
same characters but in reversed positions: yxy and bab, respectively.

For example:

aba[bab]xyz supports SSL (aba outside square brackets with corresponding bab
within square brackets). xyx[xyx]xyx does not support SSL (xyx, but no
corresponding yxy). aaa[kek]eke supports SSL (eke in supernet with corresponding
kek in hypernet; the aaa sequence is not related, because the interior character
must be different). zazbz[bzb]cdb supports SSL (zaz has no corresponding aza,
but zbz has a corresponding bzb, even though zaz and zbz overlap). How many IPs
in your puzzle input support SSL?

Your puzzle answer was 231.
*/

function containsABBA(str) {
  for (var i = 0; i + 4 <= str.length; i++) {
    var _str$slice$split = str.slice(i, i + 4).split(""),
        _str$slice$split2 = slicedToArray(_str$slice$split, 4),
        a = _str$slice$split2[0],
        b = _str$slice$split2[1],
        c = _str$slice$split2[2],
        d = _str$slice$split2[3];

    if (a !== b && a === d && b === c) {
      return true;
    }
  }
  return false;
}

function supportsTLS(_ref) {
  var supernets = _ref.supernets,
      hypernets = _ref.hypernets;

  return supernets.some(containsABBA) && !hypernets.some(containsABBA);
}

function supportsSSL(_ref2) {
  var supernets = _ref2.supernets,
      hypernets = _ref2.hypernets;

  return supernets.some(function (s) {
    var _loop = function _loop(i) {
      var _s$slice$split = s.slice(i, i + 3).split(""),
          _s$slice$split2 = slicedToArray(_s$slice$split, 3),
          a = _s$slice$split2[0],
          b = _s$slice$split2[1],
          c = _s$slice$split2[2];

      if (a !== b && a === c && hypernets.some(function (h) {
        return h.includes(b + a + b);
      })) {
        return {
          v: true
        };
      }
    };

    for (var i = 0; i + 3 <= s.length; i++) {
      var _ret = _loop(i);

      if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
    }
  });
}

function parse(ipv7) {
  var supernets = [],
      hypernets = [],
      partial = "";
  ipv7.split("").forEach(function (c) {
    if (c === "[") {
      supernets.push(partial);
      partial = "";
    } else if (c === "]") {
      hypernets.push(partial);
      partial = "";
    } else {
      partial += c;
    }
  });
  supernets.push(partial);
  return { supernets: supernets, hypernets: hypernets };
}

function part1$6(input) {
  return input.map(parse).filter(supportsTLS).length;
}

function part2$6(input) {
  return input.map(parse).filter(supportsSSL).length;
}

var input07 = [
  "xdsqxnovprgovwzkus[fmadbfsbqwzzrzrgdg]aeqornszgvbizdm",
  "itgslvpxoqqakli[arktzcssgkxktejbno]wsgkbwwtbmfnddt[zblrboqsvezcgfmfvcz]iwyhyatqetsreeyhh",
  "pyxuijrepsmyiacl[rskpebsqdfctoqg]hbwageeiufvcmuk[wfvdhxyzmfgmcphpfnc]aotmbcnntmdltjxuusn",
  "mfhczaevladdsqawgp[rwabwdnwiytloldf]varesbnjnsdbsmhmsi[tyjtbpzrbfzbwlga]sznkksuymkbyxlykfqg[fyislgfghcbltaft]knrkzaldhauordwfl",
  "piftqfdhtumcmjmsge[qrsntvxhtfurcgcynx]oyswvuklvtmivlhen[syqhqtijyiduoxb]pdtdrhijqqzvcnl[xivmeqcwyafxvnok]jvlbkrwbgcgzaqms",
  "pfqiqyscrxhvtrjzt[unmovhoommbcckocp]ziwuhtfghcqhzeysdw[zmhlfonldrgkbimft]nnlbctvfpbcoqzw[zivyewjzuuvvasybded]mznpvozhzsvkdedqu",
  "adncdhtushtvtfcbez[rvaycmplefdvbrchc]vtviiplkpfhsyhwzz[pdpnsseaizogzvtkcq]piorguaivfpummlo",
  "cdgyiakhcpbibtdwm[dqmibwtfswjlfxvwe]jghsohdnnowueerunt[stsuvrwswspkgom]mmyifoverwkyjqfofhd",
  "luqpeubugunvgzdqk[jfnihalscclrffkxqz]wvzpvmpfiehevybbgpg[esjuempbtmfmwwmqa]rhflhjrqjbbsadjnyc",
  "yqdhleetfcqhdiib[eceprgdrrsmbarxdtbq]hdayiijoaaeumfwcdj",
  "cqqvoxzdokmgiwgcks[jqzwdkyjpbdchlt]phkfcoalnhoxnczrru",
  "uxpvoytxfazjjhi[qogwhtzmwxvjwxreuz]zduoybbzxigwggwu[lamifchqqwbphhsqnf]qrjdjwtnhsjqftnqsk[bsqinwypsnnvougrs]wfmhtjkysqffllakru",
  "jfuokpqkhmnvixa[fxfcqxfxbmhazuspg]eqfpfndvqnxluairk",
  "rvvyvofaygynnetjtry[kegzdkleyezldyeyn]erioueyndgksxetku[tsarhnyrbaubgmteiw]lbcsksdiqqdacutvc",
  "kcnplnobxleghgdvuj[xmkpquawwovbgbki]ydrgjkuwsnowlxp[otgpeovujsfeshns]vqiwhcljdyfdrgpss[mbueikaehexofmdkxtz]mbgagruljphuhapf",
  "dczzsivjatnsdtb[bqibajqrvbwuxqfbai]toipqjhhzoxwswm[qhcyajbtiqtvkpil]uzoshfoeofuimwkjr",
  "tpyvbalbljeljgih[jvwhwlaaunyiycyh]cujlqqqupambxlforvo[eswlhhjbarxdslteds]fyxrqtfcbzimodoerps[ibxdqdwuouhweuzpy]eopmknebxbkadpdc",
  "lpupzjmujxyptinjm[fuabibwthqibicvgd]dykosaqyoanjhbook[yfxajvdidqrxvbyd]sbulnzowfrqqvkyii",
  "rqzbgzdvfozqjdj[ymsvzvqjhzvzmexeko]xzuzjbrkzveydulz[jqdjbpgldsvpamfk]dfepgnmeyjnunugun",
  "uyfqyhnrybzytbm[ipvxhugnmquoqaunj]wdhejsfsvyurhkzbu[ucqkjfxlacfdypmvldj]mscvoriclxgvrbc[dcbnikphxidyyyuhf]tcqweefdaqypwhmsvxr",
  "qhzpcaxmbfnvnwktcxr[vrfrbidnjbgvrbeycgs]feuevpahnefuhxruhb[fukhbhkbqwyxergyueq]uranatwcniqfink[zhgpiqbpjcvyrduzyad]mmtbqboaahhjhssg",
  "jpgwqwifygprvkyvtnv[dkyxnvefvandfhkkzrm]mnxkwzpqfrxmlcmt[zxmvfefabwormvbobny]mcieumeekejrdqdono",
  "vqlnbtvojgdtchb[otldofiavlmzmcix]hqidiiujqigyojgrv[ozfdaqeikjttcugzudc]jcvznucmpzzwnnv[blfzwhciaomuugpmj]aabnfuksfyuzlif",
  "yjtasudlajobpswlde[sutivogsaeyvmbwca]nvifvaewslbeftp[pikriwclofnphifbpnm]srtjcbgjdqaesrqci[bjkdzzwsyvglijvahz]pjpcgkdyyjcwaewuha",
  "lgxsyzenbcjgsmix[mitplziqcskpwiqtjw]emlmmeszibngllixk",
  "jlscpqhpgglyyscnhj[otivpqjapmzdblqsw]ygtyjhqvwwvfgohon",
  "aiwoefcwoeqwextoxp[bylubaahxfxiesk]hbrtlnaixkrcfgkjbo",
  "wlmcvfnfjyytctu[ornmuojenqtnhbx]ztsljuxapzxyukrtrnb[vwyozabsxvhgfocvmvw]ycticvyyxubyacik[rnfjsgktvqfmdkcml]ywsfuibwwstugijcnkk",
  "abpxdcnbqeoeiidhpt[zpwzuygklghkvrzsogw]mdmjoojzrwdqcywsxd[jbxptisjyvgicpqnw]aanbeosfyeptpuzmrz[pasvleayajolpwhj]hsbidwxbtlfdmsahbu",
  "xnahkvvizpgzhrin[gbinmvooofzbjgcdbo]uitsnvqpmmlxarqcl[cewxdokvpkmoanrvvwv]kbtyedxhfkrfijx[enflewhsxrdwnjai]hxtiihnkifwudjfmcm",
  "acvimhsygwvhjrh[pvmhhtqztwqubpt]uzliobrctimoxeoiwlz[bduywqgtzycnjdknngb]ryitwljdrdugakt",
  "ymnekcaxqulhkukjx[wchabhgwvqfybkisuf]pazsmodqxwvxajwzmj",
  "lsixccudoihndua[vsipelrpfkhgdcnqlu]fpbarcjzbvldiukpls[joopfopddwnqnvepftt]iortrfbykllelfxjl",
  "yfrhdiqprjfauyzxmd[bektsogstuafoqg]rqwkjubhybwgynx[nocsrqogzkmarbrpp]aegzosyhbazgeiwwv[iqpajvjvhaimvks]wnzdupcnpsyxubos",
  "debonekwvzpxvybs[qrjumvswkseqjyxw]xamljdcnwsfujegc[zpfvufucwgwiylbafpt]ljpnwlwjepkkkmrz",
  "prdqamwjqinxgbaoadk[jhcsekzuowkdmalv]qkxdtqnnvgzthdvlnm",
  "vddqfnrfmbxrayhmfph[dbsadhdnaweddhn]fvwaseggzyqhybmbdxr[brelmqesxjfgkkyyufr]acdmphljtmdqbed",
  "xzkaadqxdyppjjbjo[jgqhvlfdunkadavlgk]guejdgxbzgyyfkctfcs[odemgpagirehrmvw]eommsvwnvwzfcdixuv",
  "jtzkiobrunhacbx[xvmkaeifubbqkeni]jcvpmbogikakaoeyyoh",
  "dmbqbsjtzvoiultxl[dqaxgsdilorzmmslys]xgbrocfkjvzykeibdi[wmpfporrraydnlbw]ijwlpgxgkqwnnwneif",
  "ddkgyzloyuqmpfmkh[lzkztyscozfeibgl]gaftjffotluogimfy[chydlqosboyzzmr]hkcwgewogqoqusb[uitpcpcicongtyea]yqfhyvmgkzjwtbgn",
  "orkkcvdlqlhfqlqa[iaubqvbcnvrmpwwmglh]coaqaptsgtmqghjz",
  "jcndnanhbwehnhcjf[beytjbeijbnguvgp]mkepcptcshxbnbld[halkvjnlddwklzs]zrdtiljzrqbhdndkbjk[ajpcjssdowdpgffol]jakklxybkfnucyo",
  "jjqtykjlcojqoct[cmamrdhzazqokys]btalamaxpmucczuh[wszyfvouajapfhpg]ygdscjkayhorchmymhy",
  "onnnswceyplyloumr[ltgljgpirbbxlub]kbxkwhdbzatkbumifjb[vhomgfzdjrwbzguyl]xujmkylyebnochax[fqfilhjsiphqmzmn]fpzchuqdipzcqpvcz",
  "ywzgwsuhmwsgzupkaig[plpsahlfdhwcrlrqve]xkggwkajvnvpycixo[qjjdachchaepdoznnrq]vhyjryuznmmidjwu[xgokmyzasviclrx]woeggmgymxscsrui",
  "smnpfwpccmvxfqn[qihlysmekydqirolj]uxllbnbvgglylumfff",
  "bttmazihwuehdishz[gsgmhoykohwafksz]mfwbwxsjwiktfuzsd[qbgwyirvwgqtnjqaci]zjmhwxbeqgkywzsr[xgaqywmxwwvmbvhfw]jpnhpbxgygkddeimwik",
  "ldmzuocyrnzdhakjzse[ppgxqgikmjrqzihzpwc]qyqshpkjozbkhly",
  "ssicxauklehzpiupttz[jhbqlekjlmyixjmsrs]gezsztyqraiezacrw[fufxagekxcjkitbwu]iqcpuottliyomcwtz[znborhkssbfnimmmnr]spouacvbtmsazalyda",
  "famzonefhforunhtd[owuhzhzqwoqtyxhesd]yguqsvlvmgtwhnskgho[pbwpaxplhyjhwdeqmqg]zcwzcpbvjfrwrid",
  "cmjurhjdwasrycqzvi[bqmfjzacwtkbrcft]coefqplcsmyfpwz[zacuicaijqnxnzpipkm]xamuvakzrbslxcpoaz[klkyjtdtixegxfzfo]araxxhimzpxzfemqt",
  "mjcvtxqrgfwuqwi[bagssstaejvtvovwtyr]yuarvbemllzmdnhrlix[vjylnmrwtxanvnw]nmciwxnhstfewwsfb[nsehprwztzxzlrvafkk]uzbqddfvjkhdjqipd",
  "ovdwbyqmktavwkj[hefywqwkkrwdxnl]nciedxcqcjqhlaf[taijxnltdqsatzeeqeo]zonyusttdrlngrr[uumdxrpfijzyebk]pphqrcgedsxeccumx",
  "ejkyocxvrrnvjebi[xxbrqfjfvioeudl]paqktsyyzftwzrwuvz[fovmzndymaghtnlwdg]agzxlvwajfjwlpr",
  "wvdvygmzmktdrxtgmjy[kchjyowvnqammuzvkk]fyckvxklsszmzwll",
  "cdnpwnbhxemmepujow[wrixzvcpsrikhpsq]omaabsdxnetrwrq",
  "leaboetguynveaz[wlcfhxctvyevodgyc]xdakaignnjddlqi[awywkcfphkpginui]tedwnotsosrccwo",
  "zhbrfjteukewbyat[vqjocsibxseigjfxoa]ojmmarxegluyvzupt[hbldqxnawkhmibaae]bjjckqrsazjouralfw",
  "dgvrgbilvhldmar[enieyduhokkztim]jpkprhewxywqukwtid",
  "xnxmuytwhdnzyugi[czbpsumbqaylwupbs]pjlhtlexldkkpkmlhau",
  "xvzkguezpnterhvqs[mnqzalsoknklnaflvh]rtolsgxxzrqjtnvzc[jfpaqzeouwbkhpixpyq]wooptrtquhwuysfxg",
  "emzjmkghmphddnpe[xnsrvfvuexdixnzvdqz]ggokmrrmrkcemefcic[fuzcjqluhyccfzgfzy]nambiklaxsezfkn",
  "adsvjhmkjhnqdup[pbkqdnwwbhzcxqc]ssouezrsdxsppyohhj[ymvmdarkhkvrvaamlwv]epbexzeygwnvawzzcn",
  "faojcfetnpzqhxh[urmkznwhfvnpcmptht]whnrdwohhyuwxhxqc",
  "djhfybqttcmazgjms[wrjwchyxkngewcmrm]gfiqmemzdvsjrdlswq[toxvjuiditqbntb]tqcpsbfpvlhanxlhopw[ofktzxwdcmljtlnd]orfocgvetzomhrwmt",
  "aevqysekchzrbxomo[trhevoyqtqdwmkkbq]wjjtvmqsdldulfybmqd[hqlnkjuxgwjhuoi]edgyiczrcwembzfnp",
  "rgxsjlqvaenawsfdr[rogpvhiizcobqkcsvf]duxmraoupffkqrwhyxh[dzkkxkbocmwtcfjray]mumkpqyhrpjlkwfubh",
  "bgijnqjisggilii[wwylzojkanoddcpkken]cgdagihyoqsyyrggjhu",
  "ldphrnjhmbidppt[yvyeaymlyqtjxjkovam]oyaxmvohqlrwyhmeci[qhplkgpkynhqosermc]iguibzldvaebrloyk[ghrvrthfvmrojmn]ubtyfgwtmsgjklp",
  "hysatjfxaqceobaz[nrsepfgsopbfpzis]kgukfiivvuiahoyk[sebciogmforvdlxwkzk]iogzfnpcahewlecsjpc[kzkzpmkodhuipvb]lfvqydketkduflwu",
  "vblosnirymuicpwmwe[ckntmamomnqinmm]zitexyhmfyxqtbvqg[zycypifftvrxoty]rthymtrdqdfyxnc[yolhcsykrxnvenwxag]jarfrzrwnxsfqgarymq",
  "gzqrgwsrfrevuwtrgt[nkrldhypaobnvyulazp]rsxuftqahqoyehzpmrz[clmfzlbnvdaaezra]zbqnwnshukefmycxpzl",
  "imgwmbzivdjwadkdlt[kjzejqvbppikdzymeak]gmmnhqophwsjicuaxp[nuxazwvjncfwhsgn]vymrcinchgfnifa[jczrldtyugeorvb]scrhgmywuapbzvclxlg",
  "dofjctxuyrjchwrpdkl[brnplpgotnskwes]vvihhgixtucyzvdye",
  "skmzxzxeqquisgwkhsw[yzckgfxeosmjbxkfmx]udqmaruaueaxatnw[atrogcjptdklhsg]dheqjxclyqigpla[adirtsgajgitywo]fstkquetdtfhvph",
  "bzoyoxbrumgiunvhv[fxbperrgswglsxjto]eweqiyvtccskuaghfx",
  "znyezhifnsgixsvwmr[rfwhcifuvtkwwsm]okwmuvdehdqhxkczzme",
  "npovmoobhkhslmxazaq[hnnernddodducatr]mwkdiasdfyhpbqwb[khkguvkokhbceofttvb]pgqkapzrzghujijhlz[thncbcnuygnnvybjzai]vdyajjgppfpuixs",
  "xxzgpekqpxwhfozbt[zgvyvxihkzjzsfnnnwn]tfkwricyhmjfwxdwjcd[yxrwotzwtevvehx]deilwqoottgxdmblo",
  "rxpnctughoojauq[ymnynstdvvtbjmxqln]hdbiyvnraxeteryhzi[bgoswtnswognoctviu]pmypvputmlimumga",
  "wcmfwapygnpvwew[akvlgkchxuqpfwoghcu]kcjxzwdodqerosvbpdl",
  "jqlvhzezsscyxfxga[swwxebohyryvusyuzd]avwgqgeeukqobab[vzdarhiwyipxvcme]qgqralaboegfndvws",
  "wpysxgsaadkfzvuxyfc[oxphlawnmdvtuonq]vrmhodrgdxihlljjks[qrciwycfltpzxoqzpb]vwotirwufxvlvywmgp[buoqvcpsflxgjhzx]eawcjsfqbkxzdrxp",
  "dcnlzkpryarqhsjizcu[rgsqqnkokvhhbvz]vgjebgdyxlcpamdlt",
  "oscjvafazcqpyyysd[zalbkateuzykfjrhgme]hnflgfnktuwpclgejk[adnhrzvebabzjrrjg]bedacrdqfqiikdx",
  "abepeqepsrodomnak[jvthiokzxflwkipx]crjfadqsododlji",
  "ruvgsaerecttswms[gqkzuvludstqgln]lxtjimqsjudwtqe",
  "uzlojjhajzvctphb[yuszzigzwzsbaobd]vmtqeuowoffakchrvh[ejulqoemrctxxnbkpbw]ffkaifasafpmrvffe",
  "dawvqolctgrsevs[gqmgzeqwzekijchq]teminfwapxjcqwpvkn[hhmtmbgstwzgcdpwvg]qobwjwemngcocdcrqt[fuhqgcmkjgrefsydb]zsmwlujnogsplwn",
  "kpbyzinddaukeapj[fifncczyxmxohkwkex]gsizfhsqqezccnkixl[gddylkmsbnhgmmdg]uhdjrjkfqwjtbgazpsq",
  "bvovbtuyoemgdcjb[apyznerchmittvx]jevovosnotkjipchj",
  "wvgfjgyxjbbjywje[ngkxoibvrzftplcbapf]qihmoemrbuwfuqsqs",
  "cbtddsdaynshtqldrfw[clmlzqfzympgqzgiwlt]jnimkwrncvqdlurdlkj[whtoxngpvkjbedy]sdqiwepioctrcimlm",
  "skiabiriqavgdea[afznzrdsyrkreznck]kzcbenhgxebxxywrzlp[cjicuqzkqmjybeocw]uijaysqzypkzencaol[eckqilihlbpuxee]chnfsqenjrbakbw",
  "masjjgwsfvaupazze[duouiugjmxcdvdyz]ivmhptgiftmsndqsc",
  "eousittpuhipuzco[xbdmmuautcapuiucoav]ejzuodgphfsbwztzer[vwdwontbznzpecxjpz]pwmmidlsgffkwdcgso[gcoymlqygeszupglrha]mrqwchxdmfbzpvfdu",
  "welumnxwbywmcrd[glwvpfvcbkbmbbtmuh]fsuxtyivezoasscwiib[bgbfxrjpfpzogqio]ymnrhemmbezoffjxqv",
  "issfcknutopfkpdqag[rxqycmcdvtpchdywmoy]uouclouojpzhqomuk[dfplomwsxnbmcvubcu]rnefnxjibutrvrv",
  "xnpvlhvsalwaubmln[rcqqsximsjfeknqosa]bhiszpnptclvxyhqbo",
  "oudmjuxtayalgyompif[sctohsgzvaqbcmsu]rgiecysqauwoacafh[ykjevkivbdvfnsbpdo]cqhhfqsjskdaaymlpqu",
  "konztznxgyjsvynvl[fjejsdhfcynplct]fdnapcnuzqsgwxbdulv[fmxdbdjrhtqglsvtwwg]xumwevxvrhwrqblhzbh[paxrxvxynvppmwt]znpjdeeqlribvbqm",
  "mwhfxuroagrbmhgxc[dtdoxkrukhsrocnx]kwhjhmwfqqqvebvskr[kqxprhgexnllyrqplh]nmzxcqnmglpbbgxws[dvwobogkqwxnpjfcvt]wrbwxpogqbczqqnwb",
  "mngdxcpzpwmheirqym[uvtysgaucitudimvt]moznhephcjwymuwtmsm[eibfppjufuepsvbf]iykerwlljdnlirdjp",
  "qmtfhhgdyurikopt[vvhlispxbcipouagsvl]dbbczjclngkukij[qxzldytzxdvcqqnek]xemkoetiopntpjrywb",
  "hxhejzmaoxreboml[rbgxuwzegcgcpdyydeu]tbacjiffhhisoibj[jigdkiiujwnnqrnkiy]eeujbpusmuduvbj[frfsedqvbugeqijl]yxsietbaltkykdwkq",
  "hjudkljvwtoyedw[iiczjllerosvxubjick]oglveoyhwsvhawbyy[syfrqdblxizylnhylfj]cdiqncpqncdwuxerk",
  "vgdohjnsmlxjagkm[ahtiolxvbvqhrvadicd]vzylvdgblzozzonhcr[lzvimnrevjuecccy]ctvctclxvhnpjsi[limegkztspacyihizky]xcvsbjeuusfbhbfl",
  "ffgwbkrbwzxtzgvu[rkojhswsnexezblqb]ethiuqqhcvfwgafda[kieovbdkfgrikvq]mvsrhyhjqbngbhijyab[zafpoxjiqyqbcpqfoq]lrxleooxcqneudswwba",
  "thykqbpqqdeflezird[glrirsesytbfcbkrcz]jqyfcobfamdsbtucmz",
  "qtxpjvymmuotitlyfgz[yoyljvzaxmxulitijln]sntnrvqhdhdswiboa",
  "ywonnopaoujcvltfb[fnwpmgwclvgpfqx]nxbjaeppndbkiekyp[rlexsyhmcdkwcpvcbid]ybycnkpuwksthty[utrpzuduegsgraq]eizpzexlyfvcrce",
  "yqzrkfyowwpnulucfu[cqwnynjfnknpkrxnppm]bntpzduqgbrvedu[rfiodsdhmkwkgddyipn]xttiifnwezvzmhpnfsn[oeajlmtgbvduanbcgy]varlhkfsdswrttw",
  "afnzuqxoswagwxwp[hvuypdxifaauljeok]cyzzunjtthctczjw",
  "macgqhnqyyhwgyxhlwy[rdxwxinerbwnajpdnh]cukgufthqsbdtgna[dnrlrihvdqjrjafello]vkmjphscfnspebj",
  "bbvqhfkhlmpfsfspbsu[ttsgszzfsfqukymfg]fgjqdvvxvkxgaike",
  "gtqwsockenzoqprnxf[rrvreepoqeyxbhy]vdlgcszhwvmzjrkst",
  "eyunqqdlsaasqfbhwpc[fpmanqdfvhrosxaptp]aeyfdxouzzuuuxteclt[ganxlwtfygldvdhoquf]paymaxgcegdvovaqxya[ylnriprhjdnkuntzp]oqfodnpayolcntvpo",
  "xlmzirbazxeikyov[jafluczjpgoppdv]wpbnattlwpfonwsln[dkcpcljambobjlxoz]rmbrtcbiidiofcsnpcp",
  "bdiazfdiaznzuhviya[qvaxddebkudpylw]esoxozfgnctmthko[tszqyjuiouweuex]spaloyisrqkwmlwqop[jhyrcdmwtpunvgv]aghnzwzfziovpby",
  "exhlgxskaluroigi[issotyzfeuktpazmg]lefetopliispveyo",
  "qhedwduwbrvwkgnc[phirkxjtopfwrpqbldo]lktemuabdcqtihin[bsmfthbifngaguzsqva]oqvaqhlqcwyvawsnxs",
  "pbpsdnornxrjozbhegt[olfscmqufczzthv]sjrnzixklvlzapmv[boflyiiyupvpoyyo]gagojlnkgjkidipsfc",
  "nmokporhpsfajdb[yauqisvxeepverq]rmlabnxywomsaugdzj[hibcctomgckikcfmzy]vemiqjrtjlgiwcarwr[prlvjrztviircighg]qghoqguorcntvpnrdm",
  "krtcbbrzfpnutjmvml[dpycsjtwqmbdgbgaw]bentoflqfsbajclsmv[gobkaxznkrwpwzwejiq]iheshnkjlqmsuqr[foyuhizwpcuxxwmk]ndtekfmhqmyffswkit",
  "mwhmprqlbicecqvtmd[yvzitcxlixddefl]mrsoxducmitngyqzex",
  "zaekfciypethndkxng[xyrerecaoadplrxu]wwbpojlwevloaowp",
  "aaxwixjzsywaxacffnx[kghdmnhzhvdkbjalry]xellvvmjfhvbbwo[hvuqhxttxxuczlvq]rtlylaawqdavxbxs[abrentknwcqeajht]xbmixodoelofciwi",
  "xzgyxytmlawnzuq[axtspfxzcdecmqhtxni]sthxnxmrqsfnojznl",
  "sbrrrqglugswcalnpu[cypvmleasobtxglz]rubtikwponjpygrpods[fkcbvemfmsnlaxtbbv]itbrljspwqwonesa[ugpqsiwkfirpsifzigb]zzjwlinbpnpqanochi",
  "ewyzepihewftallbppp[dmusynkrlcjtjymkzd]kjnubfdogkyyklwtoh[fralfdypbjeheiurvnf]cmdkpuvqorhbnrjhcus[nfrvtakzephycjks]bhabquktacxskzn",
  "lfkfgoopzupmdstvovk[ynulfxmlxxrgxktnblv]ysbzmdnculqmaipls[puivbnutzjpptsfo]hhoqmaddyojnqjrq",
  "yfebkbqurmfrmhtef[rppekhnstwajtapy]nkinktqcskbkhhswfzf[evbbssepvnbhmqun]veuepyjscbvprulw",
  "dthgfmgbcmswlgirzy[ndiyhapijewwwhfc]kcghgrbsiarabacidhe[hrbwqqogmxoltbahtz]uhucqkricfpnbmbknig",
  "xhzjxisrjrmppivs[tfrqpkngwxktxruuhzz]bynyiigwfnyncvvk",
  "pmwpmupkguqbsky[iaomwdcyrvmeuaw]qambqcegouwexofhdr[zcijhkylihbrfrzhkbd]hoefgnszemrhpbvkn",
  "oswxpeqgrfxqbtoawmp[bjhluefvqnwayglbay]qwaaosxxjyhubeam",
  "pskzvkaveuiqmcdtacw[gonjldkdadihzitu]gohzbpcgitymoezf[aafhleymziosoakv]itzobpndogizsos",
  "dclorjpgmzkijqcogvm[vjuqusdqplwhfccbkbv]lppaqcmeofuushepwv",
  "rlzumszktwbradmwmp[ndzfzkopggqgiuf]zjhdczzzhvmthdmlo[gunuhcopoplidsqh]juvdgjetryigqnz[hhkelquosvkxsjqcid]rkqgqsxeyjfryie",
  "dfwafklwslgqlwdj[scdodzzvpxmtbox]efzkljhkgjoxjsm",
  "wwltmudressaujd[isatfbydjfsuwccb]bnxjnaoqnpvuystxjfe",
  "zxxarkrbglfaupwb[oyvmeuaxplnigfe]qvprgchmxnxhxlnnz[yisnizxuznxzjuccpp]pxiergvbnypqrlsnlt[jvevjsourlxfbrmghfo]gsslxevezmntlmvg",
  "asmwrhdfpqqnjlgaoq[uxfaucpbcldnlwrita]cvmwfnzblvtiiiw",
  "dfnpopgbztocncn[nmwyzxkkgteplvfouk]ppigwyzpisfxzerutrz",
  "vhlclydqrizzhfqli[wokplqjdpvkiggkuuiu]sevdcdmojagvibampfr[zkvosnaetxjccbekng]pprvpwynxijmiuxewrn",
  "bbcwgonotdlpdyhbvb[vqkgrsgwlgmkwsuow]xjiybkdgwrbolgumeu[hwxlmimvogwforsbq]furdbbncocabqpqqg",
  "ldjdqdcnqxdrajyjxog[dikyzkcfmgvmbqw]nicncxntxhynuxeit[phhltmisoimfevi]rhjmrdqcgconcwyfku",
  "kacfuoqjojzucqhkr[smdyoyrrebzzeuexmav]kzakixjfsueuvfcisqp",
  "ypvcehndzdalgcum[jygnxqirrfjlvfij]dwxhniytkftkleaacbv[zptuknvpbkibfanuxbg]ecepetplrcuvfcuz",
  "uxlabrufelyjweuayuk[jgvthofjfbpvzlq]bfhbfaahhoiaqvbcr[nhanlgsaslpighdvrl]xwrprppwfixesvb[apppspvbapdimzvb]tjnnhwrrptfpwoop",
  "fqhfwrzevwjlvifxf[brrakqkrjuncpxfkklk]ymmhjubefeuxfltfrk",
  "xwnjibdcynwowxjcb[fjegifzzantoxup]ckhomhhmgifluuean[vvjfcttvlzfbyhatq]yjpmzqmqkgpyrporxrf",
  "uenyhxniyhcsfap[pisvtmmwtuuwrmcdbi]hojaynbmzgnzoeicc[ylayyajfmizvexkx]tnxofqvvbjpfvdlynis",
  "cfpxjmrjwhaoqiunwjy[namtaykbooqjrumjxsq]zorqvqjqvvciqbfafwn[bsilqoniwqijtwybafa]kwdufaxljviztzegag",
  "xiimagtyuhyukglbor[hqfxnurddkcrkpy]jxvrmygywcmwkrs[ndhzsfecmdpzmmsb]jbwueecsskxxhxjq[orwarwkwmbwwxjyqsmw]nuzycexxnkiswdmoxew",
  "bacmgkkeiltogni[libjzrizgyesnur]bkoorarmpihwclq[kvqlyaknqrbupaa]xzlmlppgachxholdvva",
  "psedvtvciqabqvxxxg[bayfasjmnygrqoafa]hdkicesplpwabeypino[acxropsbfnrghlr]lyfxnnoueigblpziaan[yxcbicqdfafdipama]ugpmlidpadbhggdqrr",
  "hthxxqyxlecaxlu[wsdjrnwtpnrfimrkh]cdlqrxlcvohpwzhvgcv[mparumcagrwspag]qygrqxdjqhmlaxl",
  "bhlkcvftnodbxssb[sjkgwudvmtdcuirg]gnbibkntvobivugfdcj",
  "psebepjizglzwvjo[sgoalqrpwkboxuyb]ufmqihwjkndweit",
  "cpjonjjebakmiopx[ogrezailvrfeuqvr]ukxauulwfoofbjqj[bwtqbpbrsjongyolbb]owavyvhfpngnfpfkf[fszhirbmxumnkkmkrd]aielausdsxactibzz",
  "gsgvofmhdputlbje[xnbiecftyiamuryl]dgyujllztrzgmygn[lbiqazwahpeyydpuu]aeptghrarasiyvax[ddchznzcnljhcvnznw]zucuhesaplunmzqzk",
  "usrfwbgjbdwiitjpynz[asdcjoqldirolmdq]vkemspjcbhskuprotih[oyieubfyysxxykmykw]ahuonvgzuegarlmfs[clohwohtzstznbpumq]aqvtshgthipylzb",
  "ndbyoadclcrwzkretvm[kmejnhgyxizgyipjkrs]wyhktyzlwqajfccxaz[yedvevjawhxbfinjn]jpjtjmsqovcyxmdgozf[wgqqvuvqibvxhlxatsh]swyzlzeedxshxpkut",
  "dbezygjjszcpuweafm[ylslhhiyayzbvoju]fncmjkxkmjcoyzw[evzgryawpshvcnvrkvy]coeuqheykeqemmgpqp[ynmxkiylwwulqrixbg]rdkhpkepobzgqueftrj",
  "zruoldpgszownawj[wbutdvbvoduhocqxibc]jogjzknvedackjj",
  "svkavmkbdefijojmn[wjxyyozgjrrwfefv]fkxmqdfagnrucgjkft[wdvqtbsqzybgjbrr]zqiywnthyquzbfazr",
  "ekegzpvczwfxidfsm[htukydjboakfjzj]giayupkkfrgxmrd[ycekmgobzcubrgwinvx]uxzoscncuovpmkw",
  "faapviuucpwpvcom[idkmvsqvglrhesl]odnzdatmvqrbphxn[inymovkzuccdjiry]zlqwpwjpgztrrxap",
  "abhxaadlfjigxvlsun[pqyzpkpwkowxsluejvq]quellqfucyezsnr[gawnyuikrotirbxmik]mywshpxaattwyoll",
  "vtchbuxsxwrgtpikgt[pitvvodclpxlscpxux]ktdzngrvmgougfk[wfsydnkfkbfxtzvzr]okqaxqxggnqotnqloh",
  "cyehzvoudpokxuoa[yyvmrzcjkbulqxf]wwoungdrxkqxnlij[dtnbtlpgwogojuqbsgi]fflfngykuwmshcfq[uqjdgeigsyothkjp]elofejydtxdkxji",
  "sytlqrdluxqscdkgupk[abaeadynliiphtxcw]mlxmlqypvhksqjcaie[tjgyqbzvmhljbspqq]dxullfqoqykhvihzri[aefpabeqcacxtxrq]yqztkmacairriptlvoh",
  "rbyamzwejefygxjbep[jqcyfqsatqlmraqrwxy]nblssudmsdvhggtghi",
  "uqsqnsrdvvypbfwygq[conucjfqohipbigugo]kbryjuucknilfwnxi[eqyfaiumekxelbjp]tuhqpgajrdywxkcpf",
  "szxcevdnwzuuhrlqcq[ifonbuprdpcqxjp]wuzdncxeeogyijgtcam[khvubdqagfoqfvw]ejkagvhvabxvtdcy",
  "buegkequpboaqwasm[rmjmtzvlfdotsay]mzuihphpscsjrfflt[hmxkyblbscqtzrsn]oyqcnwceqgtcskjsk[fmmsqitggbpyzkhjz]axsoswxaptctyfouv",
  "fxwviwikodgelpdbh[wsygeahvrhpwoldj]dcyrkqcdlroxtgyz[yddvqthgfaawazm]dneqvskvumjrpspk[krhphonxbunwktu]bvsspzkchjpvthihgh",
  "frdnfohwfhokwwwrgmn[dcepjrfrnwqhcehmzk]zibeivyuilnhsyxfz[xodqjcsdjgfqkowpyag]hpxrerdwmrbgfmp[pazuoxkjvdhgneoxa]velqceclcylikkuej",
  "chppvpcrbnousfx[zuprslssnlodywdyccx]gwovpvncmkvycrasprl",
  "ivovzsgupaxkftpfsd[nyosrtsafzhrfbpzhu]uhecbaryjpacwhu[gdbhfjohuydfxwxjnv]anrssbiawhjpbfdcyia",
  "yclmaozjwaewdsvt[lawlufoigqewpyzbi]ebtpvttkpbkmhiaqnuq",
  "pfoddfvnxvxmtxdc[nsnrmuioammhryi]lxwcfwaltgkqbmaoca[yofdzbbbxgnxhum]hnhglanvvvjwvzoi[ylznjawfvwvaaktu]strvwhplwwqfkbectdv",
  "ebswffteiyzjdxqnbr[kbrlmbabuqkmqkt]vezwpknesjqtoqsiao[rukmiqowjxphyjxgeum]vpyuxrlzqemneszazdt[iftcqpuwiupywdrij]vgiexmeylkdrdpbimy",
  "zznfpdjhwehjrekio[rfzhqtkvlxnmaoykpyk]eiphwjykjtwdfmzn[cjcktqorqdcgsfhp]ytjhicujvcmdvimud",
  "bklyeitkmkcunklwdbz[lkpxawzppkyoszmrsek]bzzhzjrmpsnxzmow[rzhqmjbwmzqccdd]dmkmytarohmwluq[iizwqrijhywvust]ghrbwjcqrdirbuev",
  "uxhnqaclvpplyswyfx[qclzizgzasqseoohop]ulafsumzofhobslya",
  "rzaderqajvligrh[bwolraeedfdvximqy]rhgtebsqviituhr[ymgtrumysaknzdib]tmltlstrwktnjkngrk",
  "xviwxahequunkgdgys[jjtymdnoukpdvvzpv]yyxbhwqcnvebxorsj[vfrgswakertcxas]vuutyyarrfgmuixyyc",
  "wrwtllciokdjnjou[ahuansgeambazcz]csnyldeozjfgbmo[cakhvnczxlrmiheymbd]qnoxwzdljkganxlaz",
  "lrrikocaojdoimju[hjwboxxgquvfyrwoca]usfiyepgmwvnzwct[cnlpynvnucyovktfldc]edfajghcrwqfrgfeo",
  "hgdazmzmtaqmmjbct[ppopcisffwtmethss]ugxywxsieevpbyti[cfxomuxfzwkybhytx]ebkrjwsnhslesflxqjl",
  "ftnjlstckktiullwml[ecgpmjdxwsfhewru]xjrlvnekcsudgjb",
  "mxeakauzwowadfsafb[qzipuaikddshgzw]gfxgxjyrfpitkvfijy",
  "ahjnprhifrtwtvcdxm[dnufatnvmhsfrihdkud]nvbeloqotrzmbasyxyx",
  "gjbduobfawxgtnh[qpihutgrkmmfomka]jopqegegbrbafhcvkgv[dazjbspaonzudcp]vybvrajnullprlanz",
  "zhlvcnuwpwiznxjlw[hmotimztpkhouwpy]gvikjywwiayvzpamzwo",
  "ekzkdvdkvblkxguiit[zfhvwhwrsdfrwgkwak]hlrfndtnrhrmulwlaix",
  "ybhgragjnlxqryuiz[twgosnmxbsxtdlewnfs]honljrzgkbkcduy[zoawvjudhxjxluztmlt]dnqfnzrlbavifdcb",
  "enalfaudsmavqtvyml[ijktirjvhqwzeyluf]brsvbvztzozgzduq",
  "yuvyvwpiagyqilcht[acwlphdworonexdq]hyariwaaectsnvd[qjlezctzdwcviwgw]slkjdwkcjiigegmj",
  "wndlilfhdypfine[pndgdkamnqvfubkcfrm]cpyjzyzozvzentk[jnirbvwarvvzvlsr]yfstcnqcawbauvv",
  "rmhedyqydlsyvcbsir[muwmpaqislcqrqdqs]jjgugfevvagxbslkhc[adbsiubkvwjedghe]roenuhwmawcqfxqhma[yawecjfadoqcyileyrk]asykbjnvsvrwkcufov",
  "xcxfirpkfxzmwltkqz[qmpucfqvxqbqyjjqxe]tweeuxszykmntphoryz",
  "ajkgalozbpjubdaaiuf[mwwzyzyiklyjbzs]ryazgtclfuoljhvrkmi[bngsdvhrykmmupdh]hrgdyujfamegyonwgl",
  "vwfnvvliisnjugfnoto[urdrxdrzoxsouscldx]hlxjmcsdwxkzbngz[vtskhvhnxngfvgmzpb]nprnmnebomgtqnizrp",
  "gvjpiasaehzoyicbu[nsbxgzlefrgygvqhsbf]ssbpcotcqroyshrosj",
  "uawmzmtzxeeimmngmgh[ryapdcoximrrdjtha]vysalwcewnumqixfa[oqpkupmgiylbfswbyro]ajmxniiahcupryqmwdo[jpjzanroupoeyhh]hkgyybebsurxjyl",
  "gfhzbwqevayegvwajl[iplwzmausgdmamgu]xxqbdfgwnmitoopncmz",
  "xkjzxdynolwurfpyznl[etuwbkgomabfkeul]tlamnotqdzsewnbyr[vdbnclqwaaaxqbwind]gdnogntbrxjtffss",
  "loomtnfopfoatadpda[yrllbhwyqggwumtby]dzkfgcucuioumgcms[ofaxsafgqirwbwvudo]zwrwtzuahiaxvqkp[fcgppucqubwuuxw]bwbtvulmrspxiit",
  "sgryskxogdxkfroa[cwakvuxvyghknji]uviztjnhegsgnlg[hkhtkfhpcsqrsux]gkiwicqpagpqfymw[corgwvsrxmthgmr]imtkgpeavjhdktlh",
  "dcphytnerlqeyrirgv[pgnizijuiukiewwzek]dvwifyrfprnmbuf[ncezizgdzyhfcfooyzb]uubjspkjmteaiax[pfatvltyculblwue]sxbtugwzspmceosme",
  "jwgpsxvsxtfhaqecez[cvkhrsavxildwfoxur]rcvmfzfbqrkgrvvtowr[jyzmvtsrvtmllvbjjp]wobjzludnkmjelfyshm[tmdnrzyyehzrppzh]mrsqtstndopoytl",
  "nuvyxgjmddbmksqqu[cefkmkevpugdwwmi]psxmtycpomyqzhnggf[acmkaaqvchcmfgcleki]kwcgoytfwdiskensm[vfgnrrayrwjnovwbt]jshhwijsalzhgspbwxo",
  "gozvrvpumqylwbwp[heqrvrcztyfhkkkiurr]zdonwnqyzzplrtddvj[edupsmfuoerkqqd]zddaryceydipjvvcc",
  "hordslhdqnvkublaxn[ftwkewcpwvsgyxd]wmnaqtoesqqaajkdid[klldxfvbzihaergs]pamhkjkkmegbxzjnxx[wycwyjftyeraegclmq]gkkomyoqdldskdzrpd",
  "okyvuhkwvcdjertdze[hsgzgayvznvksagkq]yipwttwbskmesahm",
  "vyvkmniywnhriorrd[lgtllbpbokjwxvwye]dehyobzazptbgfwfw",
  "tckewdtlmnxelzdi[ebkmchbjgyrioocm]xqnhwrbtwgldfzrpsih",
  "qqtuwhnuwgckmbwftu[vxuwbbfiglaswoawy]faxqlelxkmymiizjvk[xbpctyiashbtkiv]zbkpnnesjiqiusbaaxi[thxeaulbrdecuffmpzs]saalehfynbpilvnys",
  "twedeypgrxlxpxipyu[bitgaljduloktvughr]iuwugfdoyquhsjsosqf",
  "sbjrsjlbzlmzzrwet[hktghfaniripmsad]gerqccwttzoahbw[tjkrirlawkjjzyrsn]hblmshfpkfkvhflg",
  "fuaoosysvqsjxjylsqn[cmrgbgsiczcumvanpho]kvlggkgtabafpxvqjb",
  "mymhxdvafawlxmipn[ivtejbgupwyngkgeuz]mvfnescauxomdrmkwk[pzeqrcmrehuieqxeae]daiayjjttzgpzdnfalu[slyaadnwetatixuo]npacidjgjunsmvyxkeh",
  "prpqzhniajzdublzh[jfkvtlchidjooyaj]bkmwazmaachqloogbzx[njwulkpixkysjodu]isnphzszklgsmlkky",
  "nnxrufgxgfzexywvf[dtlbiqbfwubxtlbkwe]iwlwexlorxapnls[gmtyjtqbzdqerlvxao]pvwualeqrszswaehx[fibrbwbqwognokg]gdruvwljsbizamyqjwn",
  "jkrgqztihilbhercp[rhccgimfpcwcidk]dyvpdzbonknehjzydro[gltweytrfkkdcawdq]pfuzsmfeijzwryo",
  "lhfrqjgomnntonrjd[prwrulyjuudonqk]mvuindgtygvvcuvjgsv[fypfufrhitewqsiuaue]mkytsubmrfshrhaic[wnojftrgemloaflvrui]aaanigffldppwyxkxst",
  "chkweoivhgpjaxndz[ewvirjkeakrafqr]vxdlxdjmtzqpkslwtd[lptmwcapiwwvcrd]iehzyokbjctybnc[bwiratnbhxiivklpi]rprkmuzdaedbffi",
  "mesvoeyuotbkbvueuqg[wkdefgyphqedwlyz]ontaahcptvjvwhwks",
  "zqyswnoyuitjengwkgn[ztozzegyfjbvyvih]gastsbhrojtoyryspws[daxgvinchtwuojcetb]adtxjastvsnmyvyxr[zyebdlgjzqgffwcadlu]wadbwtmgvwmsoudycnw",
  "trbewdwmpskqtsps[wwlrkdfubapqxccds]uqyodivyqmvesnflfhl",
  "bihlsbgzczfaserxd[goawsstvqqduvgam]lziqvnsrbjgweuuepwa[cquniximnecjrvuir]fwrdqchbgrqrmof[tkkjlseugcfpsmrc]plkmachmtbxvfiv",
  "hrlthytvuryevweqwu[shtaneryykfrwpwcheu]phsydxhoupciwao[jazepzelmekdglulmog]pubhdsutgncgmduf[mwxbleayalxjhgnmgg]tkopqvnbrqmyncbzzsa",
  "pvsrnvdndolivwr[ulasoukwknbmddlfzyd]ipulqjgbtkmesdkq[zkiymalvtjsqxyc]twsyvckzufayobkc[yhmhhqrrmvknetxwyss]qiujoqlzuvkuerc",
  "ojrnhrifomaubwho[cknskvcuzujgmwneid]sqawixrujmshtrh",
  "ujsscsesjhbdtivgclf[omgzdnvestrlgbartrk]lkuspiukqonsvic",
  "oikkbvethhmocbeqc[nhxpixeeawdtcxu]pzkquwpgjpsnkqmlnl[ldwhrenbkzobwxxu]fjckxxzsblipofuftuu[iefuajlqowotkyufmv]tgktxlihslueqcbm",
  "lpffqonebzksymagggt[xyaityavwmqaonygyls]evzaltghdwnhsljpgfw[iderkiwyrqcitkea]nhywkqfvroplqgponxv[aejzmqrnsbkeqistvqj]fbakovgduyrkajoi",
  "asmkktjarumpuinztp[lhjnjvmfyhyzdrli]bugzvdimxtidscj[fniqimzywwhdnvld]bwlitpmwhcxiliegud",
  "fbzsdmweslmvxxezs[shozepkragivsvdvd]cgauiiofygyglllpk[lhgkyvpisotklhequta]puculwhmcxwzptvz",
  "aaxydcnlqdomscaoet[zrspvyauhamxtqfrp]mxqyjtpmjoianhkm[kdatpoobkibowoescjt]jhiimyrwlttlsnuhn",
  "tzmudbwpapwbxcbakm[vcwleoetuvbtwzsi]hinaoeotgvfaizuy",
  "alfexqmolfbjmkcolws[ejhwjhtqpduprlyhx]rhzesszchtogouezjt[ehajdjaruversdf]mdqkhxpaeoodbfbmlwi[djzjegkhmulrypf]fahusieuaszfkbor",
  "vndxsjuyxodluatwx[lajxnxdhxyjicbdkjdu]rrhlfjfgtskfjkwxlu[bbuzfrfpjqsknknwsh]ktnjrdyniyodnjsiq[tzfsxurqaehofhlllmw]qqgrirtaqisuewt",
  "jjbjsfgqmkanwae[dmqvqqdksiptzlrb]hctabhvqvpcuqxphhtk[rexmieviligtnbose]hxfwvqwyvqudbbrdq[zzhrtmotxbcomfmrvv]xoxsswaqszxkraalg",
  "wlklybkdatxygaj[jrwdfljzjzmgsyyuws]xhymsdyciyvwnjusrd[szqiseqcdcmukhawrp]jonqcxzganmsqfj[bjslmouwhrrsloygjcc]hkwqokzlyqpofxfq",
  "jjsqzsgfollzaxas[dwohtrwohoyivwdffmh]xydlxbynxeibzdians[ztnbnodwteyjduq]wdnntcazofmrrtxz[hnbullvzdendcweh]rtgpovsjxltmlbnb",
  "kscdiuemltlfzer[payfwfygkpwicgbsn]jawnyavvvpbflltumx[qaxzdzocdoecunpq]xdzdceoybhhqzlpzz",
  "wrseqaxcbnurggub[msxuakxusfmwvwni]sjntqphornpqjbgbnz",
  "tepdtvdvrnwndfqkrw[zssvcrxiavuhbyalmh]clvytremwmgkvqsitns[aybwjvykkqsfzns]yquwpeulegelgmt",
  "xljefoqsedglvlwmxea[kgmbxljuiirquqkomv]emjegbzukntpiao[shlooqcsgrjdqjw]ujndqyxhqmagpfbwu[suczuwufykydoyoct]diljgadedabcuhzhz",
  "vjsgruhvqhqbnlv[wlbpbwmefkhqddaeh]gagvlpiumbyquatrw[xofjxwjyqrzktqivcy]gdqtuwfhzovuyeejbk[pfgezbsgmwlsxinschr]ttlwstsiyvsovtp",
  "uetvlkmfognlmghp[nbgnwqebphxkopaqdm]qyaztzdezkxmysfbeoa[dfvucbzetztfriorox]qfmfkjxrtdsfvdyvep[mfacwmgzillxhoievgq]ytizdnhsqohitwdziq",
  "arbikxdeycoelgmlw[fixyspnwswzaahmsz]rkkwcrzmuacxkuy[iclqjpvntafvkmcwlhl]eaerusvhktkcutkt",
  "onsratzqtrprdjvbuq[prpbyhrioleouieuhw]jdswchfooceadkqywnv[khedkgqsfwdsnwxibu]pkdqpplldnufkqpq",
  "upelynfnxfhengxavsn[julxingpnqlkujsyvdi]xbwbuyojstbtfai[lcixiqirsxtqzuexgfy]olsiygtmyhujalqc[qbhhrweffixbtbhx]ftobasxsevlaeuwde",
  "inktsgyecmjitaae[yhkmscojljnakvkayqw]loadalkqyaghqydi[zizeyekgloxxupzi]tzdtiywvchdiaoqh[hrwaofychrpjnqpmwn]jliznwufmyqdgpcdlyw",
  "snlcptymmwaxcujv[cwwdtxwyirypitwsfk]gjimjugxpoviulx[zwaszugiljbcoxuelao]gvjywxxwsbfnuxzxnn[ldzcmudgzynfdsa]jrzajdtxmagrrgyf",
  "hfmmcebarslbdxa[doznjoadhwnppefo]jlxxxwbwivnyfof[psnysilrnsvaugk]crqaiocutizwwmsg",
  "zvnunjzsekkzoax[odhohtzvwdghcdatzok]ehxzebidfqdvfztbh[kcovyyimytfqlqhq]qwctihmcrykhpdaca",
  "wibwgceunztmvyaqxtw[azwcjqoohspxnmqfys]awzdpccsptgvwjbovn[hvdsezklidpypjdk]tavbuzpdfhbmtxhppqv",
  "ougsupltdpefqehija[kfeckbjmwmncgfziqsl]jdmpwsfdeifjqlevd[bhsmsnwznounnhakhaa]ptjlulkbbnkajluhlz[yxnumvyhpdmwozgu]tewomjsnbdllfvdbei",
  "mvekcqbltunulkbil[pwgvqerlwdtjfsftsy]cbveecwkcrurcwp[ksfrpnzwnzmqxxwhs]ibzzridrvnzrizekc",
  "erfjensyfxzatgb[fanlxxtsfgjzvkwkn]ggaxiarhnnhprdk[hzafwflnlmkqhub]edecyzpkgywqbsus[rfrycvydjaknlnl]ckbphvbqqoqbfooy",
  "yfzzaoyrzcsncgzlw[ggjrdgzntgrxfwmlq]qwrlyzudiozjxbgvq[szphfeyocpsixgikpl]ygscetnweirruzi[wgrgrutnvljqgrlt]ttbtkfnwedetseij",
  "gmtqynknkststobamn[jvqjwikwobdlaebdkum]bsmbburpxreknzy[zyhavslsazfdxjsxqii]caaroljppaziybaonf",
  "gxmlpmdtjrnmguehe[ordskvfjdphcnrtivkt]xhvvxkofhehjkynv",
  "gnzxuliucskivpk[puwibfqejtqbrtnbxt]mrbbxkzgskxwztfatw[xmngrbephodlbhxomq]ztsucvgmfexhpkasne[hpmpdmaikmbotws]yiwpahnvjodemmri",
  "spubazlzdtbuvbh[csascxjbzxbpxclobl]gkhmporpqhbxpmhdqn",
  "wwtgrpdsbgbrdfk[atelcuoktmkauzxpid]krvicfjuwweiiuc[esqtxtinzujmgwx]jucmfrmdmdnmmhtzu[xplnrvnqvmiuoqvd]lgcoktqnfebirpghxg",
  "eaejonyzzbeouafbth[uejdsivbirchjhraa]umlcmhgqisqvefr[klsdbihbzpwcsxmu]xrdgjgaxjgjfypacjea[hfwvndyefxmougijo]mhjhiuwiiwtdmyzsfy",
  "nsxgdlfypseixwwvpgz[msznwvdtpmcuupkjaf]tedmptvvzbnjdxqgx[usfsawacmtpljyk]itmawcsjmbhbxlnykg",
  "fzdtgerjgocydyv[yhzmtqlgnrntukjibps]hwlzaxezlcajckik[pbqrukljdkiwypshie]ctxikifnpufmtqxy",
  "ysseuykdbkjutrltc[cairothfmtrucvj]jixkhkujhstrkqhl[xnmgeuplyuhjdzyjg]mdehrsxhkhsfwniiwa",
  "arijfcpqqvodubnqt[vktbqiuqdvcmvuq]kadqtxzyalcjknaw[otgjcgewvfwflenqxfl]dymkxbyymckcgejugq",
  "qyktsqfgwvqokozdm[sjfzvddjxxohyqmmvt]odlsxwfuphkgdev[huguxssmgeuxxvrdua]rgcuishnfywfuwbwos",
  "xaqfdnvqbcxcebeovwc[vssdsbsxpkogquxcubp]kzwnwhflbtvlyzjeuv",
  "jxwkkukuqkkjhtepc[hrkqhcpgybsgeflxxi]xrajyuwtmnfmipdwa",
  "jsbcveqcrcvjdxkljt[qecsalkobuuiotgxi]csmittoudeuditgf[pxlyfmhphfxvxnwn]xrmfercrfbsuajgm",
  "hadxcknkartlhfik[ckpuxrjptujisqe]wcvcxyklcamzudzd[leypbnzftxrnmgzcwh]yqcselhrxdtfrwpow",
  "tvwoqabxpoghhmiymis[jdkjddluvejbldod]nfziouzgeamsfxjvdy[qkrauzigljxaqleyn]pkrtxsqimgyarsor[vvixzfunhrrjjqcwm]upwgjrwdmqwjkwvh",
  "hykbwxpjaqbpjxv[ttmunhjtyfdhbligdt]erwqifvkchobxlkx",
  "pqsvcbywhkeocsr[zawuvttovejlubzv]kxulatrfxcouieljhwf[djtmaubluescvpilftl]ldxndbacktxfzuewo[yypxowvwzhwpatsgjp]cxkbszskhefwezmi",
  "kudquqbhpizpyrutvjo[jldrthvtvptotakkac]pwfsxlkqhdzyfpuesiw[ioxxgkrkcgtnhhowir]goqkbpdlhusnpbc[vrhdpvuwzmqrfcsavw]nkhzrojnldtjmvvfcc",
  "tdoylucjijuczyrzyst[ektynusrhnwmllr]dahuwysxrotqychnnbz[xuvyithgsfchuclat]psfifzwawelacbmks[xbqddmdppmkykcspbls]sqooxxvtxvvxzncgcnk",
  "khmvwbgskbsxcsgizc[lupttucgdooofavgrdn]zcdtspvaymyeduevddf[dwejblcbivaszen]djfytaubbveqrcmp[ejrqvpwfovilyowstu]ghcpglnadkcwexc",
  "ceizefidmvymvyzy[hfhhsjrogfpnpmo]rttainjzgmdphfhfh",
  "mjslqpcdfrshvpeelq[xpfmewpiuppgymjk]mxleiwhbfoetclzy[gsvufllgcncxiib]melfggeffagfxyzbjp[qwdcqftfcymctsc]hpdymfzouuvdqdeh",
  "mvjwksiaflbuynmcm[ozrrxcxdetitntaujdw]ydvcbjrstsnldfiyhe[oordnszkfzktikfd]qzqsydrizuceehkorrt",
  "vtxiqidwpitwqyjma[ephaxmarlbeygrnig]ypzglbkmrqpfxzshwd[veplwqqfpyovyhdfdn]imgebeyontobzeekbvo",
  "rhehslmxnhpumvm[kgylzslnnbszddyj]siajtguroseyrycc[ngtqoxynfjshreeyrf]tvbmqxeebsopamevdd",
  "mvlwfqbhwgrzdbuonk[ydmagfruaynarxgc]rttckarpatdtgoyj[htmrvfyrnkoypfcnfxk]ykdrfxqegrmnbdkp[ewnojtgvnjfcxkn]obwncxekoepsfwrns",
  "igwdsnqxzdgohahwrfg[zuzwoiunluwpxbnznxe]cbvlplgrzpojfbaqul[fdzimwvjpscbtiqyhey]ktbefevbiqjtiqiao",
  "jhdisoyhhwvftsfdsfr[xkxjkjzljcuffddpqx]ajurgsravchwruv[awkkfjlfpguphdc]cxzzrgllotgpyxy",
  "ujjrzuzmnpeunfjf[ztftruzunjdqjrfen]svdabkjrggbnrowhc",
  "hlnhslmxsoydczpso[apglfhywoihlfdzucvt]tuhothccxieqrrnqb[sibotpgowuidabvnca]lqdjyxkgywyuwjeeu[aqqkzkcaloqeezpipn]pkwuxhlqbbziigrzkpy",
  "qwucgsdcjjvremkpe[veojdmvjafegihja]kimvqqiduzogkvcvr[rrxnqdiaqduiaik]cczokjbibwmmuiycf[gobopwqpeblrvccmi]wzqqdafhwtudgrx",
  "dpkebxgpakpzmydvb[psgjjqzvfccndwtz]tnerdngqdtkuqehuab[gmkiurnhijhzhrxkst]zsbzonqusinkqbtdn",
  "jkwpusexjitifndj[objfrkfdtuvmzuxlkrg]qheawblomtrojxe",
  "iuvxdrfrooisask[spoknjtadefrfit]fmmmerpkmjbopbu[hkpzowyifmandtizp]gbvtfdmcejmzcdt[rphywwrhzoumgjfx]cgubzybhdiddikl",
  "trxigdwghucbgfzalp[pxnywwldxjkgkceon]gdcdtikjljulzmogcsi",
  "nsftzxtdcpppqkyes[ykulwspuzpqmjiewn]vljjbepvkzvezcs[zvsfnhltsmsaerpugfr]qxiyyptqbmdsryyk",
  "qwarkfbhrqobztysmsq[brhqelefjmlirogtoqe]dkngpswauyblweefvvd",
  "lqajxtibugfkkyngb[yhihnonqqatmrkci]xrhwzuoctfmpglna",
  "rffgpiphzgebdbrdb[lczwmswwjnwcxxlul]sewgazksxbchjynpmq[dqdyygczzlzoqwmbw]svvbzihzjbpscgkbyt[hjrkqaqgomfowdrwe]fivpzvtxkwteqgx",
  "mjydydffvlbhjjjlhn[tipjyavvuxsqbgsp]lndpugqvesmuauyjjk[hdaouijvfehsywsy]mjotiyjqfgcrtxen",
  "utgwqdgqygjfegu[mrgjtmqpbdaajpyla]ajhwmseqbundtmq",
  "bnsfukqjfgzpmxbcml[xmeihqqsdwdfcqr]ipcwwbuxzmfnhgd[wnkinfxccrjeojfhf]dpuptnozvjvltxunkgl",
  "zhydtogqknrxwtis[gpdkrghjitrgpaer]lkvkdnivkzbrjzd[tccwwvkvprvvaibaeim]txybcmevkmisasyhd",
  "fjnnodzohxutlxpxv[abemvahnahlujhs]iegfbojexeeuexdjud",
  "innerjwzofojszx[uzzsfbcxczuimpdit]qqwkhlxrmekugmacm",
  "jqvvybcjlshihkyeege[dhawrihilugxwen]nvwrprrjqlmhrtistc[qfnzhhamckjxbwmhe]juwpbpdghvqgshrz",
  "eyommodebfyytuntg[ddlulncnkhltylf]qntrpmwmmmvhlqey[wmwxrrmiaqxphblxjq]ihcyanxurzmlogdbiza",
  "iclyptsvrcfcgbf[sjfccadiryjddlcgc]rqiwpesegeyndcnupx[zyjdsodhompmmxxsrv]rcaqpxussqkgvxfwqg[rskohsjjwxxyzkb]lqnptscbiwfebvu",
  "azhncedjlnxpfsgqx[iajaieroaqdjbjndtj]usmipitjajrkijszq",
  "qaoozyigsadyjkkfb[dxwdromqnbvqrpqwf]xvraxkfredgyrysjwq",
  "xlkrscxzrgphuvrnhh[kfzrcgnkepimvbkz]graaktkyekfseoxw[deibgckgicovhoeg]wdkmgrvyjajjsjg",
  "olfletuzcyexeghkzli[olqowiumhvajxpib]gexkzyngygyunnzyga[spnsfupasdovnwutod]yhaufddqxpbnsqw[atsvzdvuxyzgootubrd]tlvjuszokngizphm",
  "trzkfmggmbeaejun[yektqqdxtbzptpnesyy]qtxgjdnxcjuepuqe",
  "busfaspoddgouklivvf[dlpxkcrfncfbzvcslaw]nzmtmoybqsdmyowmhrv",
  "sebpjmvhnaheeivnlhq[xxanqlwhrroxmarbn]kdcwamrrpjeppzzxtb[vnmtfnbagfjiycaerjp]gawltuwrgwtvygsj[djkyjoiajzbkcafaakw]glynjbhtkbkhfkp",
  "yepqnooadknuoetf[lxgtzfpcwafytzhivs]gnxpqkvdtauyjsuozt[woisnqiyhiywfne]tmpjcghggkfyurvnjah[dlqqhpgchljoirbpb]ekijawcmncyevjjq",
  "oazrmnobnvxkvhx[bubpbqudhwudnesodzo]qslfhvkpctthwcccly[paaytaxaktbnzqp]bubuyecizdarhlcfke",
  "bsdwmehwphvepqo[sqvitfrhrcwgtxoh]eqnfempcmyzdknkbyj",
  "zvamoqzkdovdqbzyb[hzzpiejghnoymgunni]gfpzsneyuzrkvwzbh",
  "kylsvuzmthnhzyz[pnmlifswzpjxwxtgmco]frifjdvjiiekammvmc[etwimerzwtlbspxgur]oouwpviaqolgsrzqbdg[vkctdsfldayaarsqjo]stpvubosyhswndwugus",
  "fldvnmuspsmuvpwqivt[bnplzmggpaosbfifuhf]rdneqzzzoazdxdqkfk[zgnzyvkrbzmuaxazyxf]xouibwxwoyhkwcyyb",
  "ahrrgpkbnqpckpx[nzqrumjvhmkvggb]qhanaaafizkcnlskfh[ttseogvatsraixqldvp]kkujsrcuhqydcifyhqu",
  "xqzzpvqyqciinms[sjksohlzbioakalrpzg]yxzqopgxajyqdwtnrm[ajkvecamrmarlvh]wwpekomcibwlxti[uczxxoieofwpsaraj]ievltiscbqsmauza",
  "ktjjqzartttlufnsdl[knjwffkeqrcifoiocej]qtdjwinalydhknjpcrk[fkwznosiuibculrk]agrulbodrsdtiujp[qmeuanrefyjylkbickj]epjhfqaohkcalabc",
  "agecbdfwawfxbylly[ofyouyvsnhcicphirb]mxaqxxcqnvqgqmqdqb[eqjooawhjoucscjzjid]lbxiciyrjpvkmexvc",
  "gmrtdellpmirrnahmkn[qwbsvfnpuezqqams]twkuqrjgydccaroeyq[kdppuolsiopurxai]clbalepczxomzlwfamc[utmjcihrzrrikvplywf]psctwdnevapftqcf",
  "dfjfkhxwhkbmbyux[prbidpcdyprybhw]dciozsralziazmzgy",
  "hlkyscxhvpnffjah[bnglduduexrvrrgxy]uslxekakkcoaulozmi[hkeatcgbdudnjzpnwo]bbdohcriumtxmjlznng",
  "khqolikraxqzhczgsuw[zkfmoosmtkxhvli]rwqxzmydxavdyhotg",
  "jnowmgxqwvahbtwei[ealqixxluecdppj]eyrbialqugpaczrsg[qjpxbtjrrbelgyeac]cjsksryryizbspfgkqy",
  "vckikrxxqnggbnili[kgqiydxbgycapnoct]skwmwdearcjiwtte[efstvrphcisbhhidd]ttyxrawinfuljzlmex[svusjjvrlwotdjtntp]ktuinxmsqmvjyssgb",
  "jbmwalfptuxueuo[cnelwglrzqeuealvza]ubmknrpvzcsunsgvnqn",
  "stbrjqxlpieveczsmwn[nasoyaongceuaufb]yphwjvwohdgagudawg[xfiwlaqholvjvspj]qkfpolofktwaukpx[ysvgtumgrxqdecmsp]iybhdqktbiuaygis",
  "ymjwhzdqeskrydn[xzsqflcdafngxpfxg]xbjfyymliiepyridm",
  "xjpdxbovqwhsdzqhunn[hifelarpixzaoqpn]ogkypyxbizgihbdxa[skcrzpqzwliwfbwust]ddtgvyqwmiqogavqkx",
  "ufjavpjhkjamdqpsks[eiccthdvtludzab]ntrimfbyuyjeobojru[myhsztbrmswkkajarx]qibihikdlkviyeud",
  "yyuhpcaionvipkvxesh[dgthplayfzrwjqgyfoo]cmrkiyqmnnxcxyzpkk",
  "najwnkltbuwfjsf[epclkndpoxkmxfw]linxunovxfjtbdl",
  "rrabvkpmftsotuolj[dkomybhbuxpjalqbp]rxuzefebomkdtou[sqtzbtjegfytqdlnshk]vfpyeyywpzunnrdudpz[isvcnzpvgaspqjp]wyvkuipucrkiyvtt",
  "ausozngufzsyfwkt[ioeoxwdejezrqqw]trthienajhhkfyljj[nbihwnilrraeautmtk]zfzfmsgfozfzdkka",
  "yuscjnbghopxwkbprdr[fdmpnloemuofwybagwb]drdtgrlfzivmfdg",
  "tyywcksbtfpqsmvprk[jmzijgzqfanxixhkpqn]vyeeocljotmtajy",
  "cywkwsgszwyplsuxjz[bjirgxczioydfxue]jxujvlbfmhqywap[rzzhphizhdqkniybe]svbbifuaobsgadkpmpr",
  "jrgklwirvfhnrgrzdb[pndhrihungozjgjtbo]gghklmlxciwkowfxx",
  "cajvcguuohgzufqnax[qahjptzhezxldhbg]cmqymzqzrrlcyra[fuzidfbchkorzrsscu]cexmkiabykrocbor[sirrwdnkbsmvwirj]xvbfxqirzvaikkzkfc",
  "ceszuutfqwqilaqf[dplkdwvffffjrcivv]kcxiugcrpebfkwdtuu",
  "cpenydkkzgggduwjog[cuegubgqkgcwapxqvl]icexfpddudnhucrqdl",
  "qpjovatsnvpmfrbuia[ceqdmtgxeiiesvel]retpkpcotvcitihw[tywmqumuieozvst]jcdflidxxwidpln[pubmurysywhqdtm]chhfxgxltiigyzmum",
  "nurghcjvchikzfe[mjjbendmhnryqhwvu]mllqvpqkozbgllok",
  "enoutuoioamcdpact[tlgeywftmhfyvjadwi]irahbhimnmhddgw[fioiaiipbwthgcubm]jozmstjhidfmdmpm[nvkxvgtrutnityccbq]wtsrrwmvpfqqpdw",
  "bhtxrdysvnxyiraan[sgdenlezucusuuphz]huifnaubxwubwkyia",
  "lyvncebnysmmcgxtf[mjhikfordgvapee]iguvxykganvfslirtl[zhzeansvwmhlltgbtk]triroomcyaetfes[cpvhbliusmtquzk]xeosgsibfyfsqql",
  "wzrtudpbtxqxatjyqi[gfnssdszwfasrfspk]hljjcgmhruahdvdwm[wpgfmswbzsmwdzpr]yoylzfmajtsevvdgyq",
  "whtdjacerzbrgctojz[ywixhxbosuhbiccp]hjyphlkyojyhzcng[iaiwxiifsmznacx]ohxhzuylgnaexdznto",
  "xqofvjktenrfbyseod[swewqihzhcmlclmvd]dwrrdieopcrrdmidt[wcxwvoxyzunxpgombt]gbmhtyiwvqzgxqn[uxtrkxvcvscmkmbdkje]dtbamszmfigrswue",
  "papebbrbqlcvqcvuh[eonasvitoqyzkarbrpe]grazffikbwbonswpvt",
  "toupbawhvdgkkox[buzzqtqgxqjwibvqcr]uxaerdhnfwsulshdzv[dqalwftokmnahysvyk]gsufmlmytoepdeabbgr",
  "qghwmjodvjrkhmndioh[hekdbckpdbbfuhy]pjhingdcsxrfmlpv",
  "lvskrdycjiwurrkdc[chyhdvsatlxomiou]mrlvgnstctubtnhut[tcxmmhvmthvzakevtbr]bniiiohuutiiuyor",
  "ipraybolhqnptyxm[aszxsrykkwhcxlnbwng]jpwehtqkgekrfpq",
  "xgjvehsavfyyezetmp[xhszryibaoeixkn]sqdpwzinklzvfya",
  "jkkafippjksskunza[nzdfqunmpbdigxgfn]qtofhensduhghfgred[erdtqivhpppgnkmldd]figxwdiqmlzocmngh",
  "ggqpjjtbdxjreevw[tvtrjevtvnadqpmi]qkvxeqrpzgcitpgzbc",
  "kejdxjepffublypnf[ffhxrfarhyxapywd]nqiqhaldjixergwrdd",
  "gwgxatqnipfrpcwqzkp[wnptqhgucyxaiec]wpqrdtjhetyqzporn[fvxbezrmdoyhjfnkz]wwgnxuylldkzyqriws[gfrbbfwrlthshtgwu]ulhpeverfgvxrnar",
  "qppifzyjerpmybo[yyhfpvxcdwaajey]twhmivydwcdjzdgya",
  "kkjpigvqvyevdimaist[gsspgoznkhfhferbhrm]gvadbozokttgzqa[lnphkpqayedtlth]xdsiowcgxrwoclxzz[zkrmwivjdqhuhmgprs]oksbtepcjbuvzyye",
  "raflggzzzfxndpdqq[vxwjbepbpdpawffiwq]rsgqxtasiqkunithg[xayowxswabfaskt]hjtmzosyrfwpcmt",
  "ldftyftplnsmyipban[ftelljypgxxwcqfc]hzcttqfxyyfageyca",
  "nlpjxlrpaoadfng[vaztgynnaebtimxguog]bwlkvtviasalczaomyb",
  "hlipinzbxhxteneptn[fojvkzlxqdxwewmry]fkrxaviaecbpiputx",
  "sfeevqvkvyowdewpg[kerjnbgdavlyuwek]hpuaxbzkmjtzagarcs[olzbvumkcbsbslfde]eulxopotptxhpkkgag",
  "dmdzjyhremreaxcg[lwcmfvmvouyjntz]ypufmkamkqvufhqyvr[wpuxgjmocberfotx]tmzwliwzlpukjlb[rdxwwgsdfswuyxuoye]deoomrjvszgqfmujn",
  "qzwsagxrvpivmvwjk[qlzugffewnuurkjtuy]ykziqhikxzjscex",
  "lmpjhjooupddrrbb[rvjxewjqshtspnal]hkkuigecmzkpqcpzyfu",
  "brekeslkeklkrxwfzt[nbjezmerjoevzzv]xvntscngkdsvmbi",
  "nkvppavhsgmtriqo[mjznwsawvdzwdzbilt]rcxmujwefsdkjkzkin",
  "hctdsbumnsgfukw[eudfuiujgoydarmtwzy]dwipvffyunwxojfq[fzzitllhlhfyrerdvhf]ltrblnjqlbmfahlheid[dvrhfuiurpapbtbw]ibkvmgnihsujszw",
  "omklwhuevijpxkfzu[kssygjpngmkgoym]sbsiamdpkodggyidui",
  "aytbmurpyzqjvkekolg[ojtvqpvqyunrgjpjdr]vaiacunlimdmpwdz",
  "usnyonuhkirfgru[fqigikfpqricyrg]ismmtvjpmqvuivxgwi[gclpciqwyyrakitkcey]gsqhillltjfxfpax[deeobyxzsvvxfidnkp]wssvmssiuftkfxojg",
  "isdbplupcyrnvotsuom[vkmmzkxxqfujpnympxx]ijazgoojdxfnrkpsmrq[lzemxolhpzpsrjhfbr]kgkpgxrieatirhfupku",
  "cgyczhotbifigorvgm[eguveyhilluzjekpsn]nbembaskatocwcxqj[nxrsqmpinxsvegeohjp]ndhfheuejahetzugttj[bnaizutrqfxnhuyrnq]jvysijjbwxfquegcts",
  "iliohrqfjtiucvmxr[kpnrmbboecmvipttsqn]qzqypqavzoimzcgkcps",
  "eztywjkqdoayqhjubah[udwvwttonicziwxox]qzcprxudjqcwqwexi",
  "hxysdowqxilrewvg[fivvfiaxqxnxbkhlh]mcflhlqjnaevjngqq",
  "oviunswvaagjacmfn[afizbdsvfdfeuod]zyrnzptnzayzcbg[zagtqjvldojndoxbbf]xwikgluobkjxoxwzx",
  "qbcvfasmnwkgabybnku[dfmxzztgqwzpotvh]rzyrngwtnyiltrny[brlxwnvkddqeehl]txehfqzochrnsrt",
  "cacqtbjvninjmsdddge[qqsvwamkhcdnupgojw]gisxwqxsmayimox",
  "okhqiviiactljgdytgn[cxlsfydsxkvivma]qjstvfjegvqozneaq",
  "ypykeqxesmoythuiske[avlxdwjaoekzafwcov]abmwhdplpsaixqn[teztgxdypjtrira]cyzcxpoxssfmugaxwot",
  "xsagqlcvojbdkjjllh[kmkgioxkhijvgdh]sjfjnelkpdgqyqx[vgjprpelniikoqz]zpsbqrxvafnfyhfjfqm",
  "wirokwxfgnokvemd[nqhwtykobzpkefiuc]npsjpllejtfweqp[mrvmnqlwrqawsjgg]pamffkqcysgbzufs",
  "yedcjnpujptckfc[iflsoafqbrvaezrm]ltdabciqydkchadlr[rdinfmzooleutmwromb]drfomzbinmceuvmgnls[boffsfmudjsmwonpjma]dwylsgwdhdhqzzawbdz",
  "uaoalbgnnhnkjsyazax[cixnrxtjtsjoxax]siimklgkwaxazodbfi",
  "psfpuxehymwpauujt[ocewdpimtnsmevow]gxahsukhoqdmaxf",
  "znkppewcibpdvryry[kilwdkvjwhzfeyo]xtwzpktfrysauvai[htewywqhlvzgahox]ncaziecnovrgkajap[whbqqzmomlwvizsshl]tjlfnocgwnrelkq",
  "mdfjxumhnzsdbcddb[wzyyuqtfmsqzpvziiah]lsmftspnkhnfhztmb[ftbhxyujeylaqzyhg]utqijxxnwdqyexpbhkb",
  "exziwkrjswiocjju[smlayfmrwakxlurmr]uoamnpaeyljsivw[aspzzukmgavcwzdkqss]ggelnimvdrmvnrsgsmh",
  "myasqjigrhazifjer[ppsjmcplzavoxjovzgo]gnhjfrqattcxulmysv[asoyoiuaaadpsnzbheq]vasmjnbaryudfeihvd[kmkpakamzslxifl]aohovwaujpfcicddi",
  "lefpjqyclfrbazs[kwifidvyqkwylctj]ewthuzmtgpgefxgoal[tzylqzkkvgbzdqeu]fvmhnvoitguynji[phpalqvqixcjjsice]aqwexfjixkgtbksi",
  "exnkolrslryjwywafgj[ybxzxjdxnwutejskgo]klshjpsrbbituiewdp[xlmesstzpjihvmy]dlplugzfsnvgdatmweq",
  "gfdwvuuldwwjzzynse[gabkrxmrrmhogcdt]gsremgnmdcbahudzhuk[nardutekqcewawru]ctgfrrwzmhfbvkzhiyz[napqbgvfnrbsbwmdneq]ubckzflwqlpotvc",
  "rcjmntavcacietbswz[hpaisjxybnvkckeal]vslmivhtptssuenj[atqzxkjjymznyffhwrn]pcrcqwbdakodyjv",
  "ibzuqyvdjqjownwfpz[wwrpdcqcxqpayypmi]qlcgdmmwmbqpycoqrrr[omfgouzrsauelzbn]vkzeqewbpqlabcyawd[ywzoqcqyxqvdsmd]cgyggeemvlqevdioe",
  "ocijrfawfnhjeye[anhtgffqdihtuen]ifytjqfgjzxoxksby[vvzruwemqyafnzapklx]ijhsciitepzanuoz",
  "rogowzpplhyvutqzcmx[nillxckltjemndok]cbijpwfpdyeaeeewqza[ifmlsprfeaselof]zrurhqkjlnjipgmu[dzffedbdxignmxklnc]lyhxveecywhanjlbzs",
  "ujtwdjgulgcjkbgdnrl[muoazrtjojmfkuscc]ikiludrqpsfidyx",
  "qnsivrqwwnnqpbyj[dhgsppnbyyqlgdkeumc]craxiqobxiultlnhkkg",
  "coshtmcahrnruwu[zuuglkunrnhhyuzyuug]gyzmcpoehlhowgtf",
  "vaxvyuvbopghsjolyj[dudkhgvgvvwhjgogvte]tuwdwpxfgkbkuheway",
  "rhnibfirksuoqei[uazgdtxnjwssyegj]rhrvmpjbjxnzyikf[jczltwokoiyawhggufb]zhssaygkpjmxuazna[estcdkqapclppwmhk]vtbnbtxbxuylshvig",
  "nmcfsnphbespkst[mkaysybhetceogqvnvx]lpbycyscpjtmxhormy",
  "nsctikgapmbmwtjf[venmeuyupdnzkjigfoc]bhxeznadhpmxegyldgt[qnrjjwaeqmrwniqfsu]czqlwtgpwqdqpmf",
  "bcijecrixoevxnnra[fddhejkybznmglqeobv]vanuidgycndbsfbcz",
  "qfrezlbdequzqddnlut[csjlpiumgkfkiqt]hffxecqaepfudjdfg",
  "wznjqgsnbgtvfryzkad[yfdaiivxsoxqvigsec]ocglukuzcmnbkukts",
  "oqbshbpndovxvil[hhtftvrxatovzydat]jsrxelddnvgpcrschk[xdxkuevzrslkbfhfz]ngbzwifhfhtaliewdb",
  "bfcscegbnpfovkms[msjwsjhqgasjotfxdcu]cekslyzwywmpolgax[epuelmmzskgahodrp]gidrtrqeqffmwuqge[ltmdhvibthlpegr]blukkdymporyyywyq",
  "chwimhaskmhvuxvhxm[rrpvmtefqtvexvkwbw]prvqtraaheiqpiyjk",
  "aikwdkzaskyqhfyu[jubyryvlytkcubajp]fxtbdthlbnsvohqrfj[qkegbedbavktmemzq]zdyljcfmwezptpoiovk[uxkgnhxrwtrieqjqu]sxpkznjcoyhmaolgc",
  "zeohigtzmxccixukza[gxvprlmyjwyohpdavhg]ufmlczytuohlckfpby",
  "ehhxgzwrvoomcddv[biehrjuvdwdcmngt]hhpdvmhqwgwwdwoxsew",
  "pgukjyjuswghvaap[zgvmbbqwabsfnufjn]evzmyrkkrkuqrojvug[lmkqsucerxnacysja]ncmlafqrgabddsfxa[oieouqvfirwsaddkw]xhisoprpqclmcptsv",
  "qarugpxyovthcoxpeb[kddsnmtbfnivcmzj]kiblqmxtlqnzvpghby",
  "ypfrwcdmbwfkqel[vmdyouzmxsmbmxu]ycdbytrbqvuribxia",
  "uhlhagnsffpwbhnt[xlbfrkgyhitmhyyl]ojfbzmtkowgbutmvqi",
  "kcmhwfdobgapduyumfh[pnainrkglktfhmsetbx]adqwafljtcvnwqp",
  "gvvxqmyowifrdmkufk[erkdmjvlknjgwkny]ygeydohzsswyfhduhr[aukbooitqcwdvcchtfy]ujlcxlkxhkcjghpob",
  "eemjirybhefcouf[bcsghpbcmluhnuin]kdheznxwiuojspbrrff[ewqjhnfisikiraapug]iddhsulfkgwjasbog",
  "ezxdvicibvzbqvaduil[uxajqhxxmsvwyntuy]ghonenecszbidwj[buhgptoiaardosbw]ehncxaakhnensyw[knrowzaqwrrfmzqioyb]pydcvhchqdiyjidq",
  "vanofuhslzzirhhgnik[sgznckztrvbpycvntxs]tqbdgkadintspud[wwkugamyhvgqblfjzds]rinoelnrtnhpkoriaq[rpuarxbzsrcucpj]spkeybdpvuzsisle",
  "diuzdusfvgbkqpiysz[uofjmwizurljxxdmdv]chaqghwykhujtzvxxp[zullzbbtyrkebeg]zrnqldemvrhfvbuqz",
  "mkmrylehlgzfjvibv[xxqngzzkmkmvzodvp]yniclddpqjmdynzt[fluykgquzqeupcuv]dksbaahnfatwkunpwcl[ycrenkxhxwwbstcz]opwchcbvgwkyaxfmfr",
  "eybnlctpigttpiuk[ceffpmagaqjbwyuopb]kjvvrxnhlasjgmaej[czydviujakratzd]ldgrbauwncdoyvlj",
  "njucbvqpczzoiwyge[yeoyjozdrzbqcyihqha]pxcyyxnfvoqpyhvklu",
  "yyyodmpzdftvtvdojv[cxztauowoitkctwlf]bjgvdkbcvntwtvtu",
  "stnazwnnhfbxwvxdsj[tbdryghvyulpnab]obzlbzidgrqfcdxoq[kizmnimewpjfyaw]fcurzaoxshommkhhrx",
  "qznavdbplziljngn[elpldwxefqszcnaed]faqmjkoobjnntqxz[djezjulwxpgyknjq]pmxikvutsvegiepwnib[pxacqosgercrdkmb]wluqqgozcdcquoj",
  "zfwfizprbszzhyqgk[apruptgtyvaiepyk]mlzbtalrgzybcym",
  "kyrrobhxpdbrifvvof[smoisbrjbunqghvfedp]rcrtztkkmbrdcnlfaqb",
  "iobtmriifnzdjgnyu[tuwcqcwshgkbirneyy]ngooicxbayhprmom",
  "ajjjmemvvmodbjmmr[pqanuotnrmqdeznnd]lfqoslxflndtyffj",
  "yqefgrlyaypypvyu[eyivtfbaqatdkih]gzhrcnzkqtmydnuyb[mkyhhjdaiityzqalfv]zunfaviwstsxadju[lmxntcfgrhksufvsn]xkvoijosfnpdnsxuuv",
  "euruxflpmpgjzqipqi[dpbbowsqkwfoyxkvx]goerikzifxjxqkpj",
  "drszqkhymbftezbc[jbyzbpdcquixokuskes]vsyruybvpgvrmcvw[auedminavcellfrnp]cphwkowohqnxyquqd",
  "mnknbzekuyszdcrwbfn[lbauyltdkanngkozk]tfjfjvxumulocnvrcxc[flxfxdycvecoszbtwky]wyihshghpkbwniuzeug[kpeglhbhmevavovd]fjdpatymyaiqtfxdbl",
  "ucttcaoxwagiwqb[wvgkrjpmmcjmodxmdf]dpbmrfxfuabxzlurm[aypwyzidgslebmx]fjmczavhvfxgnesy",
  "owthsmjvyzkfzbaijo[vmngagazpcvaqpz]ozgonuqyloncqzykkci[tegsfubyqgkxdeic]ocudmameghfulvru[wmowzxuonsbmnmqucbe]tosekkqtkkxppiuwf",
  "lkimulpfpxvyhekugq[lakcbxczgoicskhtpuf]bakpinvhpxnkbzyj[ipqjhlwyezevghhn]hbjbigvdgdlplonwpa",
  "qcmjplkyizuoxltsj[miekmvzjdnyhvwsqv]bnoqoufctrdvlomjt[iswqqhpvsvtuethnwaw]iyjcnrrcqmobkqa[yatjbaizkqlnqecny]vrnvrektkgqzzkooy",
  "gldmtkuoqbrmkwi[phhhkhfujbcxduyw]dyymudjikhkjrfps",
  "lxkztkaibzcrwurftum[ggyefvxtldgdotktt]wccsmjsxsrtgvthse[xhzlshnihrzpmrnm]yfxtfwkikhycqhar[gcuahuednjifdcy]hdxmlanmkrngclqkz",
  "fdwtjmjccgqmougcybo[hvuasfakxlufxdwd]gpyfhjflxetzkmovox[baarrmwjrkakmshfriy]nlzkbwcheamoyueqjil[mdytnlravsknwserjpq]ykcholuxhydoiysd",
  "rrqomrftvlxovvzdbw[tgjfyievzcjsfrmvez]mvavklfwwhwzzoe[jzxhwhrypxfsnlfei]kavmscfruicsxfxwj",
  "gldpdxqgawzatcytn[lerjsljxrwizzrbqwng]iosbfkfbpcpnsmju[hyylvxbcbsiyjuxqw]fnumocslicnukatl",
  "idauhtucptwhqwvkgwx[cefgugxpdtojxotgujd]dmfsghxjxnogmasg[ofafvetennqjdghdm]oendxgdoetetpho",
  "nkgjwrtllqmcygzm[mpdoadghwarbgauc]zmixebjraljmtoqii",
  "odmvsvwvojpezkss[sjygbsxeughaykjoht]icjkfzmeozfjsdlmx[ijvploiqsnstdexe]mymhrtbykoqcnjpa",
  "itutjzmaegvxxjbg[wttcccloraydfuzrjs]ekufmwwfjuyvublrzxv[nywtamelggkvmxbcpql]qzibttgtzmrqacaqnz[tclsgiysmddugygan]ylldzknnwyezqswgfxt",
  "rliimepmbrjywflsgwy[qtmqqqwoyujveadkgm]fetpmxdsmfqrljs",
  "gwvpqmpmkinkmaz[ecanpzbvnskrgfbw]jkapjxixqllwiuueq[uocxjyxqovostqdxgii]surfacomwkhlnjx[psqvvyopgzwwcsuzuk]nvlelzbkauaqxsw",
  "xdecnupbhhtsvtlyiw[ufhhazhiwffapfkpk]bzdkxmwtdqrtmud",
  "psisplxlbymkftgju[iikxlxhyehumlrya]asqjfflslilfmnahzdp",
  "qqlournjnsygdmxijaw[iuurosjuylpoqtqtlg]vpdorfhabsgblrp[bwprywykhysyfhzjyxr]laldygrmqzhnpzvhe",
  "bwtgkcutdyqtxwdp[sijlrqpkklemwtvo]xrzebxwrmpmjoynzu[urmeegihgbojqpiuzud]bnbmufidnpyflqyupj[asofqsqibeykebdizyk]wjubulgymlabgklnsqr",
  "cyuznainhbtgtdl[pxfuncjqsorajwq]wtjlkhiuesfszwmw",
  "kayuvfyaolxkyke[sriqgwqchsysarm]kukixnahjaliyhpi",
  "tnfrigyyaczfwks[ciyfrmzwowxbjmz]wvwhhtffgnvvgzjt",
  "pnquibczrqenwqbxwwr[dzgjtgiiyirqyas]jkkqvoifpqmhcmxao[duhoktzelryeutxhehe]idtuqmudebissfru",
  "gjngoxuefznovfivw[ottzhzneocfgsctr]yxdzsobprycgtnc",
  "qqnughggbyypudwvrm[artepcrvzkpybjhc]adafmxtlhwuytfdhlxi[tvwdadxtfisksayq]fuxzscpfbdsscaoae",
  "ekpebsgtrvhcnnpwzm[etsyvgmrmnrzaaxdyu]sudrxuxdwuxawubb[dwuudbufntmxwozrja]gdcrozbqdzvianbs[peuceetvakffhpkje]lmwxkxitzddnshdc",
  "pneibkwclqkihnna[kmmxhdcvthtqjzh]zcezgqrfbjgqasbw[dssnagvllttopkb]feubztyyvrxanoftwk",
  "qjqjwmspgicytyrl[fpwnwjazbabnela]xbjqjjkuhppmiappfpo",
  "huvqhawfczlmwapa[vmivhvpwvhhcezi]ccpqwmpxogyspclnism[glsdvxbsieagbhv]vfdauvsbzrittrzw",
  "sjjukirgyrhruvukyu[zgazbjycjveqpwtr]wuuueddwqxrgfms",
  "poapcybcsqaxjsjjksy[jhwryqrxdzcgiwyr]emwcasbmcazgmdjjyz[muuxgsnonsnxkjekxuf]yvydykiembcuvmyvmb",
  "ksjudhnanobxswg[qnwkfuvkocxtfkf]qlucmyukgzpwynzw",
  "yhvwrjxwamjapfvm[cqdfoqbygkohvlqdvsn]mabvbnuchbfzzabllb[tenyavqqhofpefesueb]glhcenelpnenmxqu",
  "sdgzfectlcmymhacz[qvqjhvadnjnvnyfdfcp]ynekctavllbvnviv",
  "nxfzlcereffzllqhyr[lwtasiislamadrkbv]kswdnqyfhrwhplch",
  "agdssvykvtyfpsthoej[kqwiimuunvmnwhpce]xbqexbjsgyutobtpfrq[bswexfevzkeeopavm]tfwughwmrlxfcsuw",
  "qstpdpqbyjqzplttwyc[khmvjpwsjyiqnscslb]udiwlqdpdvlhkbkzqnm",
  "tlksvmykfkrwtpmokqt[mxfkkypqhaltnyer]qldqcnunirychrrucpg",
  "miwsstmmoxuksdwq[bwhdsyboluvsmgduyq]xsjoioobslapvfayu[uhfpdqjmocoojoofpq]fnbcyffogblicap[qtdzhrkaztvgicjqdc]ptjulttdniokxrda",
  "yifsnrubaoacqcix[bpxfekkvzjwysxdqc]xsqebluwwrmljymgyix[wzmfriqmaaiywjg]bfhvzjjvixybnvmir[kzvwdyuehusajpoacr]knvzrbjinvemiamed",
  "xjegdmwajzunpqmunh[kqudgqrpwxewlyedqb]ewejccmsbrsorwa",
  "zkxhnosbcgrwxlp[vwoltixoxzqmudun]esphmzyjbhlbkjf",
  "yzsniisumkkjozx[xvscljwiqkupdyk]dflgfrmtswvfjfshlak[cbfocwnchlyszykgkfm]yshrbhvjrdwfmtjb",
  "tnovtsydrpdznnwjwb[uestrhknhgbqfmfue]ewlcnogphncjxjwjc",
  "piurduvwvigtuwnjnpj[mirushebmxoukqttq]nksxdnhcjfaymiuua[dkihhehyhjvenynticl]nmrfbzilhhvjfobbof[jqahcpebhcbqyvostx]mnyaeppulzktgjgki",
  "joogybhklmxuerie[kqplkkvlshnvlpiweq]njhrznhbgdiynxm[scifgvenkafqtkanpz]qguwzzuvlabpfjkhcir[dhzqehjhjesvjdbtlk]tfnbxmiowvcvnzgnv",
  "oueyetmuhknkaqpfd[djatzvdznbjlzdj]yeyuqjmywfckbtb",
  "mxrvyzxkbtrisowk[jrjebcjtlaglvifsbh]hogyntpyjjpidqcafj",
  "bjofhbhwvwithoalhgk[eoyvleuhprcumya]vccdgtaavlvxmwd[knpntqkvoedmfkbfnf]utpyrwdrgddjfigiu[udbcszpzvwbdllzufye]yzqaycyucnjkvxzhkwo",
  "kprqrmlazdsnincc[zfavvlcfyxxxxuwg]ecasuefcaopcionsc",
  "ipggokgibfhdlur[jzvzvhiuilujzwj]mztuxrjjwyolwtz[uxnlfzevotmdwqlgwdv]vyuiustdzuwvffkli",
  "ukhgntawqxeabuywjjr[yseyyaskeyiezykczye]ogkwzliacsnqlmoomso[gsmzgqnekvzyihiadyo]qeamfbfocrthwwk",
  "dktgynevuvrtvtnrjd[ivqsqxblypfjvgcpdge]dekuacrrssfnpxhhxxi",
  "njpieyeqhqawkmu[huxzeucrfvhkjqjt]ndoeotblnbhykbb[xarezduaztsgcvxtfvw]lfwiipcshvtxsdov",
  "jkobqbfncvcwzrlma[vbsorceinbyfqwkc]oyfvtflooebbmjqix",
  "cuvtgtenkfjydoyd[azixqhlaxylkkjokz]dmccfqxfpqioisodi[mtqxfsgywdwdkbdolur]mkxeufypooionix[uoapqwhpaueazeyrp]hdjlwknufxfbvqmlh",
  "uazrienzjneturyqqm[tuwzlljphszdkrixol]vmwyjxdkjgpkkhzmqki[reeenmhwziotforlub]qqasynbtrqnopckfftm[yzjpnchhbggruuoj]nwrkhxvxjubgfgkln",
  "yzjwiutiwaazlzvv[ppdxzoeclbdxumyymk]rtlsqleuogzsvecrzsz",
  "hqkpvtrgumkydtqug[qsrmcnswnastyydsp]abkvmjqlcpykmmbzifo[lrhkmkbglxhzexxjpec]hzyfgesppgeayiw[edkbjlhuaihswisbrdu]kkkeguxfpqzjjbqertv",
  "yysnewvwgdllaaajcym[pahdvpydwuwbcgz]mweaayomnyodgzrc",
  "mzcjlbwulxvrgjoerux[rcevchbbckhezowtsjk]uzkiqimslsmzutixsgv[oxxeovutxkxzedrkxkv]twxvntqcbdzqerjjb",
  "yywkdjeusharpewllen[skdtttlakvgshlfv]pmfferigtouskjh",
  "jofypjydlbdwjnfpzvw[rthdrwnmovxkeuurlag]ufhhaokjnqyjnsrwd[ezwmlrwehwmfgowkra]gspmokxnapooxeq",
  "bkkiwgwqtfsclmsdm[xhiufsxwnvwowzwjev]rvuyaxsrclbfrrezca",
  "nekyuiurfwfdlpa[svixzduuvlqccocaw]bzekwlsibdbsernehzw[bivmjbkrtzvxqbyoyl]cmiieccrolxaejj",
  "malnsccucyvnegrds[udvxlkucuwvruqqbf]zkkbtdhpqjkqsfktomc[ckkzxhbqactpqkr]seghmsqjlxlsveln[sbpprwevtutwnhnqtb]vgpxacigxtbyafuc",
  "vlnpiyamcjzwtszhr[ymzawyaoqvhxhrcizzx]ccckixndrqfhxwbgdl",
  "fyosfwysmkbqlnbyo[oxhkohdbxnsreazz]qtpmzvawlwngusuunyu[xcbhtijggqoopmn]rlccvxsaurxetov",
  "kihmdcofonqovjqqvy[sxfvhklzznvmiooubm]pcbnbkdjfofnjqs",
  "sbddgdwvwkqfkazjb[yhoqwjgqcoeeqwhmjhu]sxbyihoytzobgbhzymg",
  "ncwxdjjuhkilgsknm[udzepyobpehkvmb]vuspyesgtyhigshjthm",
  "rixcaaxczltuowemq[hckgziqmmwmkidmt]cjbnhcakwqrbddmut[elflahhjqtsgsqrrai]vetnihvfdbjzfzyhwgh[whmiepsgxgmhaxzfzkf]alwdhcdsmiqdgeu",
  "vqyfzldbpmeqjkkpjpy[hsjqwyjrnpoglquedmu]timquchwxvbsuztt",
  "nawqfijrvszdeelqc[rqjmvvmmjjvnhpdgz]absrqbhnontlqygvf",
  "ofypsparyhthcrubvxx[myuxistbkjphqivgfm]ykjhdbhepvujyyid[nahbpsybicpshlr]abrczksedftlzyk",
  "bapfhsycjteqaathvj[xseahyrjcfulsrjodv]zhidebhlpcrwvrb[lbavspmbupcsufv]aqsadtqwoaeuntykjn",
  "gcvmbexgscjfmsyuw[zwxtjhkbfcwalot]rxekdzuawdhviiacbw[awadxkqkgpbpiosd]ndvnxfkoxbwobgo",
  "yuzthtrfqfrmuxmex[wgsxoviohthbmfmmcya]knpwkcsnuzyojptcj[ojtjolggqaoxdjq]usrzwichsqhvdcolygf",
  "rxfxvkmbyqgepwyapf[obvfwqcezmsiugn]fjuumxzbbsjiopro",
  "yyukzawmmcvtrfj[qqqedzndsbtmudxje]fyahpplmnnxwckurc[toeiwzsalczuqoi]nottkjmsjyymhpn",
  "fkdrvebxdqxbyykfiks[loclnoouhsyxeek]csilrdbpiorznwgn[yysbjtydwbjhgahj]dtesgmjzketpmdkggv",
  "mizkclhlwkyugriku[tgrjhlqtlsgbpotmb]cqbcwpqhccbzsmbgg",
  "vuzcryyrvfmfeplnaxu[oypwregtvnxgjpmzj]fxfduerehbqvmcujnia",
  "dwvzcmesjnvlnms[ozykfxllkmhiesuxbyk]lcdhnrtivhpduavkhwz",
  "lfuggrczopfzvhoed[bcvzmngsrxvkkxtn]ohbelqqjdfdjayx[sclytzchezzsktv]jlzfdfbsiesjtrrb[jmworbmhvoapbaimigr]jlugbzrhypzdcnt",
  "fcpzxrowxpmtxskz[fosbizhdxpcunoa]bztfcswqxjrqtbygwtx[sfzxlbleonzuikpfz]zdwavnnpzjtuoyvr[kntryilwuonbgspjz]mmwclckewqedblbwsa",
  "ladvheoewilfuqkcqm[nutvzjddqiuoglnfj]vlvthzxilyzbmljedo[cvdqlukgotnupymp]dqvdpazcytlvludw",
  "jibmiuiwrctqgnoqmix[nfcereyxaplqqmgvvaq]ofrkodvyyzguxpsit[qfrytqcqudgfwbe]dxzuaozimmptepci",
  "qdoicjkzsuxqogev[bxbqedbbyippocdct]ipuwijqjjjortmhwwfw[kppodmeaclzkmmr]dhggvgbnexvxcfwvykc",
  "sbfleecearrntnatue[elngnqxdequamqwt]cunpjhqujrlrwcoiabg[lauykptoflkyjijla]zobctmksdqowpyjyvos[nktwdlldxfktcdye]khkehilwqismokxontn",
  "sreybwdbtorcjrzaw[nldchpnczosnvygv]pawxuwfkiusxbxtge[rrxnvvjlksmtrzgksr]ggfdykyzdbfbgeehduc",
  "pjahhplaopiwesig[ckremgovtdoduhbe]vnplyuoviwzplkstrp[erdshnpuieigttvj]ezwgjdchoeieewijror[uwcireqqgozegxv]mocvqrfnncocvhgnj",
  "xsbretekgpbugxmaut[yeezrlpckdkzdcbqj]ezqsoqbefurvztae",
  "hxinlabvuaiazrvykw[exuvfaxrgxbynyjjmeb]ldvhkwdmrwsrgihrmp[ydbiwvoemetpbgwni]cdjmftxzbooaqyx[wbtapydfdqpjwclyk]pyyjpqajjggztufc",
  "xkmsptennoxksrjswax[feenacaoxmlfretspui]xbtisqrhlcyxpop[imdcadfrrzsfqtw]nsndpcpklyfkgoeuv[nlayugkonmjcbnqlau]bzeyedukccyngnwse",
  "dfzzlpejnepjafd[kpdehvukrhdkgfr]tyrubhmuhmybmerg[lfhebhjsvkjbvawpl]mbvgnoeuybjygwshjj[mlqrgwfocgssimd]mejmlzfkqivlnaapwzk",
  "yzbvcwiifdwqqjugy[hklgtiqubfahguewmnp]nvgxfczlcnnfdlg",
  "zocoseypamcowyvnwj[olfjojyvkeqfdygtlws]qbpuijldwoinxyoamb[wvsyesnrzianjngkrdo]kvidkdrkerykhyqsuh",
  "yqrgjauszzvlmqctdb[sojtdctxbvpzedujx]zeyrufrzcnjlonceuim[evrpttooiboeqjhc]wotmlwtabqeuiudwrid[mnzwncqqagowvkk]tcwlfwchscbrjkl",
  "pyqpjeikvfmegfyn[dxzppppekpwzxobwdq]rvxszohygpcpqtd",
  "mbsfqyzoxzfwvmc[bbkfpgfeupglwwes]uuthycglsolbcyflgy[qlkmumktstwswre]vsltfgxskgzdjsj",
  "apbfdhuddmhdhbnee[amhtolmsiipbfmg]mlwfceimfrivtgj[wvxwldjyemmckfq]qvnaljlopgkbhki[tybkwxfdmstwmrzl]lmdpzbwdgrqtxqzusd",
  "kdsujhexxijbdtml[emmjtysnarxucjtdjjy]gmtiwkhwpwqtsnza[nbaqjfxcvvulifbox]bjdjrwcyrtfpyjocbs[pwydpbeqttkpzmo]lcnszibdqdyexmnmysb",
  "iamwzhofrliyrlbj[dguqegnfsikmrupbyhn]dxsrylmtekjuxkskmxx[vwfrgupiotkuvxm]czfrchnlibaoenbwxpu[tvnavnpcbtlhwvbucqh]sqrhjdwrpnbeyqcsyar",
  "ahwsaxlpdjypdxk[ifyguutfzgfdjjogxzf]ixlulqlkwnhhtwqw",
  "tmiyklsufpuelrxlbk[bntpovhrfrwkzuf]dprsveuxzlytrsjd",
  "rsecnfkcgcjurztdb[yryykimlpkbebmpyral]sjliaidnssdkrltpscj",
  "wfoaxfpewhvmkwezk[xtuowcvuhakjtns]zhygwdeznfsgeldmu[qpvogjhlhfprhlcjkvz]asgmzrchqllwjhrcprz",
  "oxaplkpoicskweqmmak[ghmjbibylaufqftb]ndwlcnbekjpbwzmylb[sqfzcxcntgmrwpylbb]boiwvqcrudsxchlzh",
  "jgqgwvmnteuaywocacr[dqunjrbrlbktjwbxt]osrdrbnxcezgiyfabyb",
  "ohkhdsldrxjbypqulz[mxyphdsshtccflplo]tgurplpndgebaxxb[japdwmzjgysgaiqh]yzqgxiilugfeqbknhrk",
  "hjdttfgnxjahcuji[ecxfvdpgnxfxxiym]qoyqcbmmvnduazg",
  "zgzywnsxtohygvfvk[mfqbrreclomfbfhanhs]ypdabnzxfdwyelsrutw[vxhffmzeasgdtsdi]altppwlwsswqpeyowfc[yorqgspqlwlnowoljjr]warckdkwlmchops",
  "xwarkdhykkobtie[awfjjsabbcvcacvf]pvfhtkcveuddpsxi[yxaldwelrzlrlhaca]uwfvshaymeownzdmjr",
  "vyeafjmoxmqycxfk[iyalonumzvcblznkq]noqtvzkcxzgqloivlof[vtpgnfaemftmeuy]skuwdzkvvaduylx",
  "dfswzynicxvaoaw[drflexddowiafchckx]xtpdzsdjvyeyepero[yfkfcvivzewivix]qxgjgurrdxqilazkcr",
  "cinjxiiupnoeczaxw[hdbqufrmftxkvbc]bpuccqnkhfykfdvqzmk",
  "yoqjxoxbnmedlzg[cfqsftnjfmxrecpqqvu]thnoybkpyqesfenfdr",
  "lhhsemvrpnxvpuaubrt[hpatsrvokoawjgjgk]ontiyxduxllaatqilrm[xqbooavcmzhpomkln]vdjlfyshsijshxajhe",
  "rnskdjvaifmyptpuj[swsujemdcscbimlhpl]mkiwtodiwjdxzyrqzzt[djeynkubnxhyxabt]yezcutcfvmpexqjdngq",
  "rmcwctabvygynch[dnmsvbqxfkyosvnnjz]duutkavflyrawdm",
  "ayozjljalecznohl[sjxanfmsjljluiadtg]ggzlsonfgtipmxwlgzz[tptximrxwfhtleo]aaumwknddrujvgpvha",
  "icvyvrtdcfvgbmy[hfwfmxzixeukywahp]tqykhqetlicydfx[mxmdlcehdtcpfwri]lrmhtsrtzdejnqw",
  "hnqtrthikbqzhfape[lwzougccscpjejyu]skwaahetaqururphoo[kgaazmqdcvfesiicl]udsrrgnaquqmwevtqy[rxrlpamsteoudwiybk]dsnqomoghajkwuuplh",
  "mqpgnsoeoreishsaaob[lyamhwoviggriujfo]rnxwrccdbpwuyeoe",
  "qcnhiwvtajonuknh[aqdlowucnjpjwsjihb]oeuixegjefzbsxeb",
  "uasnqxmlauizgmkpia[zqysqipbakulxkarm]mitnesurqufphihdqlf",
  "kldfxwunyukhxiooh[przhjarmsgerjzcvwvt]wnbnjjvvdwmgixhunn[zudqzitlmwsvpqyy]kaieoutgrxskgrvhpq[mwzkzrixslnwpazxn]opltcrpusaemjtb",
  "yrcrldxntwjoljq[haauvnjjxngcjes]xbcdbshuohzbsywbv",
  "qozfnmihtjneamsfe[jfdqslwmptboaviodf]rsyqziretgwmxrog",
  "vcombfpnxyrueoypj[rqxizqzvbrujvpzeyj]eqfotzsfjinvbzkqa[ckmyirbentdhlssjtm]bpbxrsmzuckytxhjm",
  "gmswxzkpatbyrgtjio[fbbzlurljixkahy]gwflwjlcxueimxpbp[kqxjrocaeesnssuo]fqhehbvqfcbfubs[gkvuhwvcqwcrrkhezil]grcobkpgkliudgf",
  "rerqcgcrmrjwopisvo[mjobdgcgjfhfrsbdl]czttuvsquzctaut[ejvbyppuwvizuok]jkkikqlxrtkafdidoui[atahuvokvwohmdpidc]viczkremzclprixagdz",
  "gkclhykdqqandninhf[xycfgxegcsblneo]gnnsutrhiawojag[uvfrsffwgvguicsatsm]scphtqgsinhlocaz",
  "afrhjvzdmgkuqxedrz[iqfxsgfubezyvvbhfko]usnqkhsaqzbxlwrhkp",
  "zypbuclfeitifggvt[lwrsglntbtjayim]ouhetxrqvninyrb[tpinziedrwwfynll]ykfrpgtzayptqyxgsf",
  "kftupspkougaaglay[vvwrbrdwspsiapielt]xgwsbslmoxgdsps",
  "wdbmjjwcwqiwkskk[srkpbvvdvtwnrzozzlw]alhsksxvzwquswjv",
  "ehcifavtrktfdqpaj[azowgmwpmtfllcox]ybphxyxgppbbbbwg",
  "cuuvhabybpkahbsr[lqytgxkmjsdpzmwc]anaoznvslsjskrotxq[iaftlcdnlyassngmpo]jeleyswohvgttvqxt[asogccicasybdjbbnnb]xjgpqiciqywfhltdoiu",
  "tvuzkpssovjjesovvmj[mjjzngmnfpqybsiew]woymfanfzchdirlsjny[evqflllhkgdjgbcmtq]vwdydggmtquosvvj[ljacempfdiiyvto]nivxpcmrfkiifkqrqfz",
  "yigtzsngnqsknvhgzoh[hvqojvouoafudxenzlg]mfhgmrxwuiatpjl[qhnogummkmttjzq]yyimzaykeyzwwevf",
  "bsnevxaurtvhgfayfsm[wwrpmlvtregqogk]ljztpmkajmqvxpjeywt",
  "zfbglwoyycnunvqvjfk[dosrurfytwuqimjyo]ooyzdygjdfuruagw",
  "zkypumeyryqvvdybnsi[ljkrbshrjuuistx]tsjhpxnwftwbiodghg[vffboahhprgzrypompe]jvjhodglmqrzofv[gckqpsxwsvobhkas]wdwpfhbvamigwwioh",
  "asuqauczvwtseyjwjr[pdvmezvpgsromnzjr]tzzrnzxhwtbbsnqns[dnzehddcgphdmdo]hlqgabarrkohcqlowf[arbyvlfoaqdumsmlm]gxfjzurniztnqrl",
  "jemnecgmqclfkhtqkzl[agibayjtgxgqbhj]cieecviyjydxhpqtmi",
  "ycrfcpnlhxpuudih[dkhcmlueodsrhkdvf]blmlbpcdyjkgofpppab",
  "hshsemucjtfbvjkuvff[ckfsnxldxyvouquhzf]qpaprbmqbypixwcdwtl[umbvinenqmkaahf]tmlqiicxnjylzvlh[fmfhshmpbglzkgpzqzq]mqkojaqrygnuzpoo",
  "naduisfvhztcgbvnc[hopvocihntnmifabug]mylvwxpcjrdydpusb",
  "zqiumzbuvtjmnml[wmcjcyuroilxqjwyc]xarapavsytpapahoy[oijdrmdcqqxvbxjugv]ijulmxsewcozweccqij",
  "udjtlppvsnntinbij[gpemwsmeliaygqu]kwocmvwxwsurkshx[bxboasxdghblxfdd]vmhapvqdowfhnspdcd[fxblqgimrwjyzcec]okxtjdxbxkodfdelj",
  "arjvofncxvnekbv[pvnkzxzmqffjndppk]qdfubuspifvklhdfnz[xuywbpsabazjcmgrqc]hmnxybokgjsymrfr[pcjulfmeltnqwdgxan]dhziboqlfozqgmpi",
  "yeoqnmrqvagaqlfpmtr[ydthetcsxucabigo]dvflmflmasjaieblb[bpcpcahnmzpebjm]wxopckmnssyoestfwed",
  "jmfhtybmqblqwzth[fbrcljbrybsactbjy]kwyhzsedbupaejdyxz[xkelfewvjfwiube]flaksepvrbnxhkl",
  "gbrzbhnmcdraiwgtc[vofkibmhgmpjrbx]jajzhbsnpfpfncu",
  "fdabyejddraehkzdru[bvuqnwxbbzlhnsxjj]foxgtnymvvgxdqcuax",
  "pbronrubafqsbyuywl[pweahmekvuigydysme]vxnvvfcsoocwueg[lpfyjtausqifjkjf]ejpavauflllsgkwqtw[aglfvraefqcvmafc]bdnmbdfqsmrkqxis",
  "hplgpsqindvcrkskof[emvbhbytivakzssta]dimlygtyibjkourq[aflpfhenbsnynbsxxqr]tkrydpxwpwswuniired[jvxntttkrtmmhfybq]ukrslqgaiwnvpwpv",
  "lxgdetdknqcnhkgg[hjysltnxwbbrukur]mnhnulausnbauqkil[gxfjeaxublxpyodn]gzydibxeqdqabmya",
  "hqootrvluszntiicxi[kztowjorfhpmorrfx]tuhzjnouwuacvfnunk[btpggtpjuyunpjstxjk]aenkdnqeiplvkrsgl",
  "cddxrjehxhnupqhn[ceiljnpitbsrzvbj]rhhbvjfqenossrldcd[ssktaubkvbhmeaeop]diwvpexoqgnhrhdydb[vwntiberclymcue]hbcmpdypyfaaqvf",
  "qkpjuokmdfckgwsxqb[nwthtjgufacubrnvd]ancfmxoggcstfbwha",
  "jdsgtfxtbguxmgxlda[pmouopueuaeswxf]rbtjbiuahvtwkun",
  "eavsfanypgsidjmvq[meamrzrkvuwvzfhvel]jdjomlftbhydrwy[hrpomrmkzcjmuiw]zjzdemznuqdjdcl",
  "lyvndqjxtfqtmeroizm[xytlbvuqwjwafugbrhe]xxjaeqwajsppxohsz[rhgsvizplmcxbrxkxyw]dieefsdcyfvmrxldphl[ocoutccheggjuumrhdp]fkbuecxyzmzatduxg",
  "ptmubumuunnxgyrfnb[dtkltkhexjhhmxqd]uidxcxhkkfzrqusjx[ygkeolrswndtvro]xumumfonyaaaimpmd[mlxvdjlmkqrokumobg]moqcqrytosfrhyafvi",
  "vfhdeeaiwroouiwonm[livqfqfabrypituiz]lqvclevelcthtodgoa[bkeheqodlfpigwit]tsjyikidozuajsn[tejeozfhqymgtrlcseq]prbuabbwtyelcvbpqi",
  "hsbkshuzsjweyvmrzun[nsqeqgcoumwhqeqvh]hatxtgouojraidbf[pgyctnhdxqciilg]nseeunyuuktlaoavzqf",
  "nvjgsgvksbdtpqblam[onxrpcylneoituvj]rwupjyxptszavilwhsm[nopkvlldxamzifcsgs]lhwgdtwvqxwdrfl",
  "iocscbzqelosidh[ajvmdchpjbmoyxippfm]vkvwlrzjuhkvymjpue[qjojdlbwkpnfrpfilla]arxphpavgccitscsn",
  "bpzdizummbgyuti[umfowvuxplfxrokfj]ejcwgisxplgwnqhqfd[gllpovtgdqiaezjynu]ceexrhbagidoheofgqw[edhehtdulocwrmczd]miobdnzygqcnejuzm",
  "agyubejetpoikadpfqg[qfobemnpktwzonhclo]grtzicybqioxvule[ontwoqmvziykoqjrq]zkfhnflcphajkunf",
  "ogorlcsfbtqizpw[vwvzibjnyuggogek]rxjxyanvtlxzflndmu",
  "rzghnhsfxurykwlv[duszqhigfaakyazpni]zanlsdniaswmafw[ipwqeinwqwwbzupno]accxkgoviscfkyo[cqlumtsfqedyqrhaxq]owtjrkbrehxickxghr",
  "uxmwswalhobtwoaqqw[gpnsruhdvivrqwjjb]fvmbksyroevsbvndibu[tqltopwpoocxaawy]rbdulgyfizzivfakx[ylcxzochiicnvpahh]cuuhvbqtjnmqqlvqeg",
  "sdsahunensbnagqkbnu[fpuekuqhxememefivm]xceqlgenetbttxzyve",
  "maxkujsvzdxzyrs[kmkqpklwuuopqluxx]qjulksjczqsaniaapl[bfmdxkrpnyzbfwl]kmkzhwvxhcgiqtfes[olbrirzsowohjeb]lseumjgtliuwfkcwjuh",
  "zrtvqmrbujfvzmx[pxcfesknviyyqlnhmd]gsvkihmkkssprcj[ztvlcrqmeijbusq]qebxpqnsvpkvvckaxph[jidjqotdcycwkfshyd]jfhmeubakosnqasglwn",
  "glbkrdwyetczenpj[tlyejrblwoedbglgqti]sttadyzcqrvzcjcbs",
  "dkovihrftwtckpsoqvk[sqwhhuqmhwjskrglh]ovtmxljqqjpftlnzzx[vywmjuoxyzvtespdg]loancsgqdwqyscuiycv",
  "epqcptpqldqdvrxugmy[xavayqzsjmggassaj]wxurohqlebmmsqvyroo[gtcxrcqhiokbbpc]ezdabfqzsiszeyybb[xomgaqhvwwsivuqgglh]voalszhkfcblfxz",
  "prhcbapdgoadbeexg[pyalqqxycuaoqdec]myvqzvpjblnzkusq",
  "pdirmldathrrbnuddtt[zeecppidckmzblnzkyz]vbxxtkpkeicgbpkppt",
  "iawzqvoinzwdwuhkvc[igswqyadfeyaptlwn]zdntdmakhaovgod",
  "fnqcoengreadroulf[vtwoeqrphatxrvkvdk]knsybiwetpodzdqgzcs",
  "rnvahjhgytckhhmdqky[lpnjbigewhgcrndffpn]gjkrcuxwubdorsppohb",
  "jhnjguejbcnwpelycr[ikgpztaamxklnvyv]fmpkicxvfnnvclhe[kcpyonsjnysjopavu]wnltovxteksqkjfucjg[rbaxvfwgqegpwvxswl]drkfiaylpowhtcpenzm",
  "cdwswlcqgxgzomqxz[rcuuzcswsvfgtmwk]gspumplvnxwzrltl",
  "dlhpgdjxfwhciazy[qneycuzwxsyzqshgo]fabiheithimgvuutd[bpzghtedpteblrh]hbypyuwksljhzpfuu",
  "opibgqivevgsyzoqlej[ymlegiphmkauexrjru]xjuuozqfolvenpiusxt[wiilmmtqdsdeduxw]jsvcngkbijoshomoc",
  "ekfbxvluaktqgeijl[ocyltqtqolnmjyuwhv]sliymsbieawrxdlsfyr",
  "pdngbgzmnnsrrjcacz[wixwkcvvzsigjyp]dhctuoxohirfiugll",
  "edrtdpedzmgkqrav[smjokhaiddlruphn]qqxtbwfinzbqpejqf",
  "tcxihpnktpqhdeiams[upgfvdpqwzezpce]rvcjixfhpuzjflapxy[rfpiccabormzevmc]miwirxvrpmitkplde",
  "zalbbkaxlrybohj[boionrfelyhqzopglt]dxsufmidooakxqjjevh[rsqtktxcmnpulprbai]txlvqhklscqvsiyfo[ydlawkjqjzrhrfifm]xjctoioijmpxvieea",
  "vipdeevvefietvdml[qiljurneucsqlyejwd]davnlwzdaybffwcmrcz[rngodwrexhdxwqgjiki]ocjjlelvdrpxweapau",
  "dwrmfccsuoteafyr[aqvxmpmegdmjnzholie]pzepyhrezachltyvpmp",
  "vfnjcjzdjfddtucj[drohdnwjjpbphjnpf]ftvkwusaityuvfbpbid",
  "ebomxmxtsoxzfcnc[mrjrkrqdgqqqawml]vsynwjmfsljtggll[bcywwwuoygaluqibclp]abdmzdqtzsfvstend",
  "kjpuoyejrawxuqzl[plvhmxtfkwkclkyl]sxsmgblfihyjzkutmec",
  "mlncavlwrsndztitxeb[vzyzwwkknjesrpuul]tkpevhkhkqbgkhk[rseapawakskqmraada]yyngjugozryyyufw",
  "bvruvvweoolynqxti[brolmcltjkgvznd]caraudepbgnlajim[iqwjfdegwujvthyhag]ylnddyocckhmqqs",
  "yaoyfqfcbiemmfpkuk[yxuebupbfwbryelosz]zimrtasaiwswjtkqjgg[mrbejhtqyhdhztyl]auielhhkelkhauvmmff",
  "hhtyuwztzhidmrn[cbmtytajekesqrms]tbrxoubwzrlservq[pzemnlshgetwstsobx]ujjldbnbdtdqawxxn[wsbsxdafuiyerbqwv]isscxkeljnwtmmeozgs",
  "qmhirwurmhxmddlslqx[nrytkwrpysfciwz]vrlgpirnllzqjsryvds[zkzdjafrqdcuamawxcm]aesoitvmqoipiqljb",
  "ayfdsbgixgwunwudii[nbjryuhypduztwtme]qvqdjaxhklnommvwm[kmurtrgtasrrxwap]cphgavlmxpuxmki[jxhybiakhuzdtiblt]peejojyxptyoxfw",
  "npjifwlxjrpaauaur[slnjwuaubrtmunin]fgrvujsyqmsrvvatvj[vktxfyuktoarzvprlu]clmnvrryquzuwvzcxvw",
  "bpjdzpqrmfpddpjpgx[crihpohiqjwsnalmzzl]jmtzbgtnnyisgst[cbivzxieujkyafv]ccuiewjddcmihjzib",
  "tpgqdeddlmjvywnyv[hxytuwhkqotaoerk]kigirblvjlqobibtfqp[aapidzhpissrdvad]ptsfqadgzuooxjg[xmerxhjfounbkpaqiy]dbhiowzcxnwsrchjfqj",
  "wszvslkywmqaiaj[iegzhxfxrlvulnayyr]xiosmugvcxmjyxnk",
  "cpkvtblubazidrlz[sralifqozehxjkfwgv]kidnokqsrfrecsmkx[okxkhtfrfadokmch]mwxohjdzcbarffscd",
  "phnmptjhtxyowwsc[vrydnmadvjkkzbtxej]ruedtwhjqtvyyqtv[mlkbcjboqafmlpn]zjdtdzsoqrfnbtyjdwe",
  "tmspdmzwqyvyfsxdo[egzfsamqkywffywt]pyeaagexcowtsfmkou",
  "wrsgwdygbychdkwurfb[yqaqfncrrnfnfwdrdb]wafnqaydtfkieaqcqsj[xxfqcstlgvfvrvpx]zeggfvimujyfnftec",
  "fxhdruviojyidmpkxsm[dlbaklivbcycxgcz]zeaqtsnkqhvsbfsquey[yespxpiododicfl]lsjpyjbyqhhvvmaam",
  "ohujtfqgaizdams[kqczofneshstkjsj]htpifwhtyiysusebbyv[hshlipnpqcmebiwqig]zhalgxztpvziabhk[fvmkqoolmmvejju]koyarrelonzlsxsxqb",
  "rjeremdqanofigky[xwrerecxrafzknv]msegmlctiglmzhm",
  "wzrqrftlbtgxdvoqm[oeylxjaajkcxlahxgb]feccwonntxeaqfey",
  "mwisggbdmehfxsr[ggrthtlashcmmqcz]ffrbtfqljdupiykl[tkvkitxkbpmhesb]npxolidarjhvmevar",
  "wktpvcvmgenvhphd[tqabdkgdoraemobns]eoelvneamiwmlege",
  "txzkcqdmomjllkjeo[uypsyuateeywnxlkw]bsqmpdvfnrbccyt[wfrywqnthtlvxvd]bjwxlscdgjveael",
  "qhecxlzrnggjcrpgh[actubihjwhpaogfid]wlwomdainewbzzgb",
  "gwpaoficfntpnwp[dopmvnqmjvfgepvcp]xwndoyvrhpzoxplbxli",
  "ipseozpnjsoglbbyco[rrnbicinjdeoaucb]idsrefkhujkzhhw[fiqqelfnipudhefiqt]ihbdrbbbsuohzbkli[xtntngwruloobvec]zqbdwntneqhriyzik",
  "mjdgihtksktdvptbr[eyxxxlvzplionbxiig]jmynsycsdqmgmjol",
  "cpzdbhjlymukncek[ktwhpzqaiflnhpsdqug]ahinmyerdwasqgcukrk[exenoptvvuscdjx]ulmlustxwxkanlj[oopgyyidukwkgitbl]jxycjwapchqeinrcrsi",
  "ombigutozejjgvtc[tcmyjixyuseilatuc]citwznucvojehmcelu[oifbayqniorkshmd]jufmdsuejnjmioia[hedfrhwehgeeyvhjgg]wzsyefbfvkyecbv",
  "gqpjfhlhitdmrnkha[mmsnkathtpqmozo]lflqxjezbfjcbhwis[wbpcaefzglezlhlsoqr]lzivikhbnebxejn",
  "angtvlxbjvktrfyb[yfbemeevzxxussud]tsrgzeftntnqmuhpnm[mnbyahgcmhytrmmraez]amhdirmpcmbrpdxc",
  "harqlllbmhtpaxzjjh[xkzeplqgjdzrjyazoyy]lfmmisbzfkmseoeuol",
  "yrckbqnwxtgmnxer[pczzgiirwcclldnxc]otioezhuqoiyklmg[coquiyvqkilcpgyvma]bpszghhrojkrqzepzv[vickiaeqqgcghdlq]pqskdwwitzrxlkxdmo",
  "ppeznsgdzyjevdloldb[ygdbpckiuweeikylcag]fmwydrfplxwfusrlhu[rbpimkivfilyebqftt]bgnmmpjgtttlvtkfdm",
  "vxxsscjtvldvkjk[nvmkynfzdycsligb]qbbxlulesmgeofbucfz",
  "cbpfxyuvbnvprjm[pdxgpgexuewiwpy]geetyszhipiwquhkrbs[ovrdpmqndfgvglsaay]tmpangiyesywazcq",
  "mlelxblspmvvfgvo[ptelehzvjrwrlxrzgn]jpatczdrgnstgfoksno",
  "kochkjczpkiaoqe[czoooaoreqawbszygh]phuymeqpkknmgikbk[hfhjkyazvsvwrroqefj]dwpgqayhluqmoqvc[rglpkmnnjshoofo]jkgknnarsdsnmrxei",
  "nqetlmdzhceirxymsum[mrxutuijrfvxwojdpx]rbrkmmhmcjhmham[ureyvovfjlzurim]fcilszxoonmpskr",
  "qinpomdiktmjnukq[fakkodqaljriloef]zrqetpitdrgkqiow[ysiwdzdzbvzdzckzeom]otcixtsrvbrjalxfow",
  "piztejvydqqvjkkg[ftmdtjtrlqmjulti]wplqibaifeirtfrjtj",
  "sncqvatultgqgzhkvt[ujnwmdzuvbkufwy]rptturztojoksumxthn",
  "lkccghjhovzlnymdi[ipqhegqedeziwksvuwo]avmmxxcdlkbnkiiu[fiykexcdtqgcfhgnc]sggznkzogdekxzqwik",
  "zroolkazgrlhhweycpb[uvxxzvdqjgcxojb]ovvpeupqtbgmrmzii",
  "npeueigepsrcqmi[gbkyzbbapmhwsbwhot]mcattssrcvjbqgikv[alidltdhsowtdunxemu]wceeuikegpguotzfo",
  "msqqyxhmqdgzwnorgek[ctwnzrjovunylux]gjmgfxulnkzpomd[qpqxriciiahmptjdc]pmwmlsxnhstpdrgqxl",
  "jryvcqihcrihdrq[falnalaurvnhxtrx]lbprlsrxleillnekjej[scbagkyqsvugshmnhpq]dhfipwazuqfilswftbp[bznzqsaoxshgnzf]zeqfsfdcadskuef",
  "meoabvyljotovlob[seotvcvzmsazpmh]dvsvzccoeiagweisgjo[tldriajgsyunnarj]mnxajjatoputsqc",
  "hsomexarrvegjsncnvp[owostppfysciurtaeox]ydkrqxnugvxlnbt[remolnpzrcvnjgl]dtzxistsfmnzjzz[dmxsbqmuifcrzeb]wwbolbbkpgomuato",
  "tpragfzedrmmgpk[kjwaeidwcbtdlzzct]arpoighpefncvsguf",
  "jnahdkxrugopswmjh[afmnmlzcrrxsqsy]ozsznmnsgixpsmyj",
  "sgwrdshabiewpru[xhusqmyorvnvljtv]bvdiwtpfrquzmrb[lenayfoqgnoniyfg]tlqnncalrfmyafhx[mrgyvlxwstunpho]duxtxhttiljllpv",
  "lctkyqkxmcmxfnwlnqr[adtbbyggosjpkwoqe]ranahjbyuqdtqioa[oeqlsluxrigrockbscu]dqkskmoojroxnbfpkhv[ibgmsjsvgnpzsre]zlsvxibbihjnwav",
  "fbjfzcynqyfrdztnm[sawykpgttjfdvnpxqtt]nodtnsersbzloknawh",
  "dqjbacykheljseoo[bjqwrfdzcmbslnsm]jrmsqeqirrytdvxgu[lkokmohbctwluet]ynybsmparppztsp[kbaumtgmqkialkhngm]nsziueobnnpxlnmulsn",
  "tisslyzilbftduf[jmxgtrkbbwkjtiakqyb]pukppabuexkawlvfirb[qqwizkxfjyeqraa]lifnxgbkvmqzwech[pglloqzffmdfvnprdm]zinwpoxvdvqxbqtlrl",
  "cnizrlnfkjijckzsb[oerjeptibzhlgzlzfdg]qstduvphfxopnqf[upeyzflcximnuzqxsa]jgixliapewdlcbpnyrv[ctwlfphvobmlryu]mlbwsfngnsxzgcpykay",
  "dqkqeloraoesunffr[eljjorolyhkilnhre]tfruvtvcplibposws[rqhdcdrflilzsovztd]zafswainttdvnsv",
  "caqmswfuqhzwahm[utthohwzvdvkygvtmwc]saiyxdvdhwuuogk[yotohbjjiidvlek]msuutazafunsezfhkdc",
  "nszwxyckxjqagxacmie[idgxepheaisbqiklj]yjchnnvclhxolabwe[tulgbjctxgwmlzsevhl]gtmjqybyeirtawns",
  "skqmdkxrciimqws[ltvmwavsmqtazsyqixt]mkujyetzgrzsvws[fbwnlvuifvejpid]honhapupqpwgkqpqgrs",
  "gnrkkwutbgipulv[ugzycmyksldeekz]ondonrrjdpmpvjcco[rjtfixwthzunvcmo]tmzlbouumatodkkoy[axbrhllilekchiywh]uxmlqmdqeiojniemlmy",
  "tmfslcwjcikhmfzaf[qurjbuzwsjanwpzzg]gebhiiqfqbvomtrornr[jkxyfqgsofhiayrqjvf]xghtsosutproxygacjs[hhlckhpbavxrwtvcs]vmssidstykmlrpa",
  "ozbatmkhspekwmhwe[ujhbqbtjvoylcvqlkx]gtgpinwpkupccawkms[wciswpefjdblmhtcma]tzoidlomkytdcaa",
  "giydlwbtsyzcjdf[ipbkiwbswmskypr]crzphguxrqikinlbsv[eewhieifnykcfqh]tgjrfjrxoawwzyoutyv[zusdmueeqvmvxtqaeo]bfmftxmkvmvhihi",
  "xhsnlhdcbtkwzxams[kicrgafosavafalanl]kiudywnmotnvbwjenxd[lnyrpscfwepospzh]jlzlqpnhnftpcasja[cxtihfafktvivwxlz]yqvcoygrdnneqvtqhko",
  "vdgjuhacuxxtuol[siwbfcjzgljjoqkgrnn]yneulzjpzstxxhqm[todbuyluudlqzlam]wttrgyrffrjxuxfuvaw",
  "zekmqyjzbfvpmaajf[ktqqavrjjelfbdn]eomdnmztvnvqzjwgk[msaoapezsngswsdpkdo]rmmiegsyxumfbldlxl",
  "cpzhrhtzvfjryylk[dlcafaghydzwzvfmrsu]wzwgddkyhuzcbcxwm",
  "tpdwllnzetkwdiertzf[uytffmmoqfyvxlil]mwddrfgclflwomxn[mxvgbkviluttxvoq]mbhvazwiqqhuazjv[jczedypigyvwfogmozj]fbecrykzncxdsavvxx",
  "rxycqatzqnnedowjw[kyebijgyhkxsmmzwjso]ycjsprmeuloxojsys",
  "yrahguxgdpojlbsunc[nibsoqwmdngiuoqm]qrmbzovtxhaagxede[gbkwgtlztieebwads]vpgkswbivflslzw[liexskaqfxnuultilot]ditnrqdcufardao",
  "amhvhxuzczeqyvug[cmjslisbthoevajv]jmboodyrbrujqurxyml[alvlaaljcwcndbczctb]nnvgsnyqswdfukkcvfm",
  "djditbjgwvgzwqrzxl[wwhufjehdhvfbtid]vbfgjvcexdhddoetp",
  "xwpkabxsvvjdzzcoqy[vlwmdoystpdphlqi]rgvmbeezawwhxuydf[bpxpjojokfhfenhzf]hfhwcotubfqeifggh[efgchhmarqrauuyxzz]niarsvxffnqnznvh",
  "vgsnvuqnqguoawmyjv[lqtnyjvdcgetigvue]gknvphezmkygcdfwz",
  "jiqekktahqusjrjfg[kkwmoesdligyzpsrw]drvmqrjrihtrpxsp",
  "cfxqouqoyrtrmsgwul[krcqwokuewhtrtrk]wglfcaaoutbphzeoufr",
  "krcjuyvrixmjatngm[ilcxcpmddvhmuok]ixddhmfcwcptrqyrbe[eyqslxsljjdkcunnxn]huaoukjoedlwwxntqsd",
  "propwkozipucatnxp[ubbwoktuonjshvh]fdyclhistxbruhfmjb",
  "zramtgcbvsnrvizljhm[iaakkvfefydrsaa]huvvtzuactjvvnxzrv[nutfpjdxqnspucfhe]pncrymkwmkxxuaigwm[vilnaguyrgpkdlsvhlx]djaqeojynsmzqtr",
  "zlbcznpljdajcky[txxrusosejoagtimamm]vesvtclpfstuzbb",
  "vgvqmlevdhvoyts[gbsuzgvgfysifdg]kfpbilwaylcrwsrw",
  "xhwzfeqshthryotht[qqdjzzytbbtminpirtz]nmqmigjrllelsvrqt",
  "olqwgrsnjunojgxvvg[jftcwkkxoywvsycj]fzuuwaxyjpwkflsuk",
  "wnephsbhnbtienqsrl[mvdkbknccrxujqk]tlulkpglsczyararwgu[qobcoznhcqljmlee]vqhztqbzqtqebarz",
  "zchpslpkfcsyrhwwqsk[gwutlmplskealgb]fvphyneeapwhowdmws",
  "brdnclnxyvwujemdb[nibgwqgpdriqsiqabxp]edugdeebwepatweb",
  "etohhrknjkrsrofpva[laoikuanqdhzhxoz]miwrhykiqjommmi[mbadqggmzikalwivx]scjuezuvuofqrtv[ylbmqjdvljiuonabqie]ivbinxqowbcsyrdggq",
  "gdhnvymhoqiqcen[kfiqdlwouzlyigbvmn]wvasvwtbxhmqayqit",
  "irfjmwocwhcnapx[smnacotgotkxxmvcxzl]zzhuwerdsvtlxvgmuhd",
  "jdhvzkocretawtuy[dirxvaypanfootgpg]sulipbxsevezkuplfvu[buglivmjvanhdeh]mjghduxomigwatjjyau[jrglsesypafawdetc]rbcyypnbbzyxpkwp",
  "lugloujbmydpzadmek[swymrdltluxdiydudx]alziplsazemkaxlw",
  "oajayjpofpxmuwkk[skpprqdrpbsaaah]cuqbszauqzdqkjaje",
  "yrcnleavabfvdrnwwx[lrdxcmufpxchlcoxgn]bftwbeylddfhwppa",
  "wbhpgqofflbjprdbed[pivleadiwtpwxehsx]yngfyllzfdqnfzslqmt[jvpqhjmwrnzwpsowdq]ffpsrssendvnbjfvxky[haovhxivmhlxylxjvy]naykgcofcsvjjimim",
  "entykgiizipookkli[pnxwonezytkzizn]djctyusggqtxfin",
  "kyqecdnicgswwzuii[wzuayipcyqyhkrgn]acboirvuomfyzzvpzxq[zfnjngeeqhtjlbox]sotspxbjtvgwzujeros",
  "axwvnfkawewaqcn[ylxvrarkihhghwnnhpd]youyuctonvfkycujg[ndowdbkguibjwnezscq]pwbemfprwfluppso[wviijkovswiijhki]ayxmsdmenoaowtrkaok",
  "pflwhfiwgnkpcydia[eqbkfyvtazvcvynb]rtlbbqdcyskcfksfncz",
  "axtpqspdsyplxla[ixjtrrpgiwtisfa]migiihkjqjujtuo",
  "xbddeupacidwjadcy[dkpxppwsdycithdax]ebuhgrtzzohfvdswr[vkwrhgaekzhgdsu]hcjmrdqetdtsraxb",
  "nsnnwuqyzwcuesddrbj[wcqitbuxuuwmhwew]hqiivttcuhsyymf",
  "ebtbhsdzeckccxazm[hyutitdfdcehnaf]lssdlpmilcunndsossc[lkzyocritcrjvsjexm]dbspfugmkadlptibj[jkosoithwambszidrv]mtalayhwerzevsggoy",
  "tqvxyopcaqbxmmo[dubscyoocfnrecajq]xkidwmmecuswswju[fmizxytmaaaatydnms]ujzfpojhdgwxfkllxtq",
  "narzmyxnwwxekfdec[gxgqlhydqggalwflst]hgsjfxokuhqpnlqhypk[ndttgoqaqijbisidrj]yxhniihdgtuteqpf",
  "qakuvldgfbyggudoxir[kdxruedrodgmlabaked]jmntlhnsiamhdytplx[oeoyvdghopnwkyi]vvobbnycnmztdav[apfouaimoagcrgsksf]epwqzhgeehfvlkfhf",
  "eiykncarmysnjutihnc[fqpuelefydggfxrsys]bsdatjqsvdjyqdqjjmb[icyklfrisgjakyg]zgfcmwthiddozpikbm[zmgydgnetfgwchrmwva]sivsaiewdynvetttkzt",
  "rfnackjoyyyoeswm[xqqhgwoddznalgvck]lwgfmjvqteafuyl[rhsqssbzxbsmqycnl]msgjewoprklxehak[bszjfivjtabuhcfkhq]pnruvslhqirnkkzq",
  "pckqhzimuhfimxhwf[ctbxbyearzeioufp]ehxddttfuamfvcu[rrtaouwghsvrqpjpfkm]antkzpqqtloodjdasm",
  "muqffnswbawymkavyol[wswnuetbxhczktsdv]zuplywzhdlmsxlvs",
  "nslftmwyosxkobfh[izvobolazeuysjvatm]xebobdjtrhrhkrmvv[bmdigthmwjhldqvlqfq]ndaltyiadsefvsi",
  "bfvwiauiwamkbhmm[rlkxxdlnecbfdidjhrj]lgphjmbuenctqdfrk",
  "ehevrirxrexouxz[lzwxlurrxziddskbk]espbcrmdiecksulm[zraxlukapkqlsuc]yviwwbriciriwiwjpej[fbowkyrlzrjjhhgf]mdnqnbgdxyrsmegdrcb",
  "xilhhdrhwnsvkpmoeue[wowmtrsximygvxdafl]xssvlbeliybaijtny[prcmeegqsfjbcohdpxv]dpetniizuczwajv[uyfjnwqusoromgzksp]ekwshnolkikatjguvuf",
  "wekevhtigbdphsofsej[uilmgqhvmzdhzsfelu]ydwqjzvwmedhbzdcmb[qtozstyksbhavmcqiu]bebbocoyjgekqdgxm",
  "tbwzgbkcknaviqoggh[zrevgzeesbljofietg]kxznikmfqbwaeuq",
  "kflfgylometspzel[cgqfetyqkzubkag]deuiudubpfysursxokl",
  "iqtjjgjxnsbnykgm[vkiuekflqzslsmopei]ryohrnlqmbykzqwg[lbpxmabcspjtheybtkh]vhqxakwbcpqyjrfnx[vdzwkopwawjqcxhkahe]sfoqyahukuihbtqhvi",
  "qaictcgbguzipbisold[hojqbnmkhkngozfodb]wakvkedbefdokvfv[sqkwkrnwzmmpunugkmm]wryjgpkqwzuknyg[qwtwcfthvigcbdr]lxocdlmrwvhkrkn",
  "ududehnmfrdoktbd[pufxmvmzjanjbqsr]rtoddxhiawrkeoauri",
  "rukbdtvpicjwuqyumv[yvgcixmnycnovfdbhj]rrjgiwzcdxsafsfz[fndydwxtuethgxm]jciitwzldrhspivji",
  "vucryxrucwgtgzwi[xwofoqmmwxkljwktk]wwugatiltewscpybiur",
  "yzdrklgmcntpnfg[juqlfgvojfhvlurlf]liyjmvkenwxdrhseu",
  "xvjdqvfwtgqdwsihxw[bcntzekkpkmdltskkog]immxoenmycmhvvzhgsx[alsgfhoiwjyvxoa]fhtslhrhwkjgtqyaeai",
  "wowkovhlkvxjheejh[admlixvsiimqobhano]oidtxpzztonwcyz[pikjjhplimxuhevzrgh]miayqideewkxzwnmcj",
  "pjeseijjihaonoq[txkdywynctkzvpiled]cvmyxdkismztamreewp[kaavrbjsnplpnotid]khhatrcrhdgkopi[jbviaiuaruauvsqvx]fhlldfgwvdizctr",
  "gcaeermbxewdavjlvi[vqdmxnlarauutud]bxbofrarnzczuoxxa",
  "niyxuzzjqnhpxjty[xhwgwjcloshkmzoso]fldzmcgzcppykgw[rxcfbfvhigzeoaktqg]solflfslrlrillgthks",
  "qmioroqmlffmywwddk[vbjiakdgyjbaoavuc]yvogzlnaqniirgrkkrj[wwuvwxgvurgjesy]kmrjmcfwjuuzjwfxi[lebewrkdhvsggdaw]jttnqfljqsjtdmp",
  "yhtijeaefivnygi[wkudzhsjcozzlnyjee]ntxrjzabhjvqctu[igehfdhjdfubncnuao]mmuwhwaptpkjkjvd[ljhdqpgbwtgyusaw]mwucwwnrowenvcbw",
  "cyuhdgnyofftmmzdi[obicobmzlzbnrfjnpmz]npdjnaygejwtbthe[ygsqoiefkruadykzfai]sbrmxcyrzzdsfohgtj",
  "opeqdajvhjiugvcxiw[quzyjltfaqxihryu]vhfagbxcgxrqdczd[jjowwatsupavhgxfnfu]oldgeecwxqagfpbk[tuzmayuqfuksnyryhew]mxdqzcmhalomsfgvbz",
  "rdhftaylskrfkjohoir[ysctmlberwqiikxcu]tlrpfraenuzfrpk[xlhhcelpedwvejwe]xdbgjnujbwitikd[gkgtcmffhhuqkxn]segxmelqplxhbbzv",
  "injvfyvtmujogaddbrx[odixzqucrehbgslji]jjknybzadaghddrfqd[jcixygpikllyfskzqw]vkosfpxuxqmjiqbzfw",
  "kqqmwxsxtyamjjqq[scpptfzdbdleori]nguruxntqimthwel[rgpuzmxeitchhrur]kbqcjdxjhfpszolrgmi",
  "zufcvxfzvpbrvykpv[zlcauolelfvaiypfve]zbthpzxexbtckrw[ldyacezfagyjwqk]hpytjdoqgfthbjkde",
  "tushytgozshbpgrlano[hjcxnbfslzdaqdbcw]ubxwonwwknpvgei",
  "wvomkcdpnrfwstbuxm[qzhtbviiyiimfewod]ynxwecqgiqdhhwipprn[yvzjwmtwaimvpfkccq]mswrpxbfetkxekd[opflvvsavcjdphyarf]mdmnmjyzqodfwfgen",
  "uluvkzyxcnbwzfttgsx[shpgmagtodbjbtqjvi]ejhtqxuasfxfgaikc[azwxnpmfeuhbvxbnon]oatvbmbejhdueipsph[qsspnbldwxgddfn]wlyypvjwpffujpngp",
  "sjqklwdokjeiorcauug[cyhlocnxtmybrvh]bempnpjdqzogzuzmsz",
  "xgxtoujcsrnyqhdvms[gggquuzjetryhnxy]bzqsntkiscaqvdk",
  "azueqhuwlzetspwlw[isgjxydbfbatlekzint]vqempgczqzswavwhvzf[qwumvvbvqgtuncncemw]zjslwlmgybyqvxffyab",
  "npdfefeoncablfmi[qyyrhbuiidujkkjvcee]hfefsqnphybdqaizbi",
  "jkwitzvqiqjlqriy[vlpxretegbdlyfuc]kxdhaspayozcykqxnjr[fxzngwrrraafxaez]tdzdrlwblwpwmdbx[jqnafjuaitsulabtk]spirjhmyxgmmlbvowyr",
  "kmfaxysbsfrypsrh[hiibtcvkvpwijnrsmiu]qncqqsikobfzvhg[bmolxnmwlmeiyfvw]gzukdtdvorvcrjwk[ouxxjrunavgbthjym]odgxsgchbrcxpday",
  "oyvcaaaizwestol[sibfdhzevlqcidfb]cevjafyjqdmlizirxs[yrkaxgimpgmbesh]tymcjuzizpvblfvxh",
  "huvvnlzjmnmshyakzzu[xmrsbyvcnlajplrfdwm]sdmpwoddghgvkhe",
  "poceczjudwhblovfvqa[lpsplyzlbpunkdjqmj]qenofnsbobsjbkv[csiibwcxubffjttun]nycqgzfgplzuckayy[thivzkknlmkaehqu]rzafqjkocucyoyr",
  "umgerxoezgukxyhda[udnwdyiiszdigpqblq]xtvpoorrgfktxbm[wlwyflwliylbnxr]ssvudefpgtpzdfbalc[ebybkfjrabrhzza]owkairdmhvsjpzwyuad",
  "iotquyarjddmhjux[krlwbtdcmibwkghonp]uaogdeakiayvaohfa",
  "vpditeamdhqkndvp[hbjakwvdzlcnjbre]akalgulrzldkpqeyx[rxskxmhfaavgqktprky]ggswkgrbdoqxqyum[zeuxanclgtvfkzets]tzmpslweurcgotcwlpw",
  "xlvurprqkyfhveu[olsivkdcvnftkvzio]tpqhefnhnguehdygrg[rikxaftozuxwualvvl]zirbbakenhipnemc[zpaikvorhancwulm]stiatsksuvrebszcrn",
  "uscekuskotlggcplmg[nghajkwhjhnvqpq]jylmftnlcvrdtaaqany[kzrxccmnmzcrlynb]iajudtbreuzabwox",
  "btvaxuxrxfdikre[vtaljsnrxrzpgyc]zkhwkfiwvdpcdynodzb",
  "fqlpngnekdjidiwxpf[tppyrsufeereqqjbvep]uwxflzgngcbzifi",
  "yypkvetcckdupqj[dwmcrcgdzivtxaeue]bsdiqymfwfnqsksj[eethqqykvevzbgttcwc]asgisawuoghwsdlrg[rwsclixjrsnqoztah]eybibzkeyduetgndjt",
  "nouxpwlpeujctmznu[ogcakcmynctylynb]hqaoynpaeugcgmbmyk[hnsglkzoniolxxatpu]ntgalyvvzdkehdn[djvubtqjkdenibff]oiuakgqkwtnfztkqey",
  "eocrudbvanmeahxep[xyqmdpkoioduivhbzm]gmoduclrigeluigpg[sagstfddnkfulodix]ejdxzfhyzlrpfexaaft[hsxoephdrfdbrmw]zjranqftwyixshmfsb",
  "bnvmgwiyebssbex[ydmpddmiufzsyutzsl]jbfeuvdopsxgbrwp[tdtqqstaghyfiitewo]enubramsyyntisl[dxjbeopghthxbezi]ddrhwffptofizthuvcg",
  "mrkvnakfikcnzjrs[wmeoyixzflynnivv]kwegfomuvatxzaxxneb[kmknnezqnzahkcbugkd]ivvjpqgacdrkfct",
  "aqrxsiaqqsjkezjp[tqcoezlaywofuxfc]itlwcghxjmromkbtj",
  "uphtgvrcbgqdluoqf[uyelkhpdxkprudot]gqhgpmiipwnhswapde[gnxhmzaizakunln]uqkiayhtvfiakese[hnwtvefvhmcexgqbg]uuohbcqwdnopgcooslh",
  "ofisvykefcdrtlhn[xlhplrxyrhcvjbzyn]yhfoyanxauhxlqvkuia[xweyynfkgjbaeaobbtb]nljayxomtplrqdbnsdy",
  "irwcmahzzuhwoco[pywamqmhxcpklssms]ycnanipenscxuuujk",
  "gldedzdlrpsyttalcil[ahiqbcuwoxvnfwuv]ikckzfmwnrbxqjmrt[vvtqphedelmxdznq]jegbtcpimqvzsqlv[bgeyfgpgpvbgqorpn]gxtubvakrtfngzg",
  "qipwsjqgxehdkoeqzup[taycjunkducebbguxk]lwpsfxowlqungsuuvns[cvgptsymhdthdcqhk]khuernejpaernwc[kbeupclkrhwogudg]zpcrhbkujlzucapzli",
  "zaqhvgmayterhkby[mlstxdcwuoseumegi]mvgadwghnxcxbhok[uropsqzmmgrvroox]vxcnynjnfkhhxekxh[qvfloncuywkwxuonf]jibqpdtlprdmoqju",
  "vtzykmztzfrlrlxz[rpaujbmflbfcoudvxdu]hkptnkphktizdllxtag",
  "laqwbulvlzxmtxyto[widsbhxrcnvxjxi]uzpkbsbinvjyspl[ooxlifipepugoaiiej]veryvtigxnxtlgprrdr[nymmwwdbaxhwlcj]tctxkwtpdgzhozev",
  "evnslwnxhtdaqwzi[fidwclqtnmnoxpgbmg]lkvgrqkjtssjeqcwhm[wxgrhzqarkfjixp]vjjsmpxuicpnmjaorq[lgotwrhfkjsphecl]wpqoqopcaqtejmocf",
  "musaatkqurttqdwu[wlewsamfpkglizjfwzg]deddhkcblzeqstzkwex[kpwodurbmjfighpfccn]rsipxfptkezxfrmgael[mfatpeazpvqizrueeq]mexputrrdbdetqj",
  "uzfuhqnamjieqvpvm[yttstdvdeetludj]nnpmumvmqvhyqqyqrdu[lslxsmbibrnzzwzeh]qwcannkcvjosbjor",
  "pwhojyzeljjovmiddy[wiiyebjzmlmbqor]brujpcjybxsxjluyif",
  "rzqcvkydpfafphnfuxw[ylfvbbcuypiimbtu]mljhteuhqnjgemrbf[ubxhgupkdueyiftcsqk]qkunijpnyosbstyew[ipnmbxujzvrstqex]thjsyvvzbvdczxfs",
  "wsblqglvlissspebeze[dryqgjzmlmfzbxdhjz]vktdwdrgbnlnaqot",
  "ffruekflozkbstzd[zssdubcilkvcjes]jaeblucjbdtmeqhbw[xgvggrxtkwxarffjlv]czyquewthsfdxrk",
  "cniminvskbdaxkv[ijadreubnkqzezswoiw]cwhmefpjicjimoj[wjgozzvqconpnyectbs]iqmzyjwigejhorl[sdztpfavlnebllxtbez]idfhkfevdqcqfjufy",
  "oudgqjnggunqjrjz[hgpryjlvaraueruq]mcqehhcefxyopvc[ayjvgfftvlwsiyk]gdojvjospfdqvqxl[kjsiatpbrjrpywococ]qvktzuihsoxfbqoj",
  "bwwanasjfcwueuh[xzhdtxeviylgftbsbk]ophpbpqahgfkmjasp[jbetyvklnmeetdxak]faemvxpwngcukjnil",
  "pxsdsgcvmumspwybbeb[urijgngfrqrvtdols]bptfhcwicysrwjxx",
  "mmjciqxcteqqhaq[ndasragkigfuxzp]nltcicbzfmovoex[cbsrhlwqmqnmevb]ovwgnnuyesrcpnatw[imocdvymixwpjmitr]hyqurtpjpsatmpj",
  "glbejlpeohjojjmyav[ouuwjsmbqixwyqypzsu]sdjaymyedszekjwzamh[gnjobkdszvhecdvy]tkqdpqbsbkzxpyjwsw[dldgxwoqdezcthkwei]ggojpvqtlngudexbewm",
  "ydxjeduvtiyifosnix[otekexetfyqayuqyjx]bsnatubwnbpsxwlpbqb[fysejpbkzpeyinqixpd]vkuyfafgttubulw[nibzvtwbnlmpppjkc]awpcspvrmfiletq",
  "lwxmamtkeknkbep[rjsxatudphtmwxjcm]nkndjgbakhrobpn[cqybxxyfdwtizrnkh]ahhzlumiagtmxdkkohs[ovelhnybjcdrkjjmkjh]ovbxtdduflqxcksvvu",
  "qvmxtzslelfsfrngn[ticxxcqkdluglnbgp]agkfskcvltgmwhuvluj[fjlgeicnekukeuu]dpjoqruzuxyxcfy",
  "kpiqmomfmfbgrlb[chwgiqgxmfmhcutz]pgrumtfxxubyvasrabo[ebbetovjzkxdzazg]eeuagvrmpnjpwfg",
  "noxoyhihdeligogdaov[ychjdxngzmwiiixx]tybwwnnglqneitnk",
  "oorpjhiybjkyvlagofi[kheedkfwolzrfdkqm]okmtzssvifokeon",
  "suyjtqxpruzcxhpgs[vkyywjxcixnbmol]snrojgtydofquhke",
  "bybicdhjalejbcm[dggfwhcvoqwckmr]kmpndsqimreycclhv[horhykpdzyayzfeajxi]fiwirgqabhxiyhispkr",
  "svnwxhhzpzjecgsunv[ucxaxltvfvvbbkx]gdnxojirnewoxul[ynqqsklepjplpzdf]uchlwfjpjvdmmzqn[vgmpooqwxgbtxnb]vicbdsabgheloshq",
  "evkrrtlgxkqcxdiy[mzwfmxqzgltuosd]xyqmxfdsadcnrfmn[katwlzwygzdojmrqf]tjdigwqjkleykrzulg",
  "etvhempctsbsjhia[hszftaetybcwkfkf]mhstjimgvbnqzodxtft",
  "jiekosnwxnaxofz[lhamyrnhvgxhontvm]bfpgkvtpgyifnbcgqbl",
  "npfgxwjehgiqlrzxhjn[nwhjbjfbqxnseuea]qljyvnnvuvqwfvyb",
  "bvwfsaszezpupzql[bqrfhsxexnmquabsqgf]syakhgolmoqvvrsxop",
  "fuuwsugvetzhnetoahu[onengpdwpajzmeohk]tcvwloxqpkhthqnxcs[ukwcmswzifcmhiha]kirgngmrzosqabpck",
  "vqbvveivmpkikcnc[tfkbrzgflizqthkykuv]njbmalpsbacflucmmi[ckfzxunddzpkxmvqi]uwhdqwuwfnslwphv",
  "pmrnuewfikiezvei[bfbtruoxycikikpcyc]vamnyumaydydzwkxsr[jramendiecbuuibq]kwyuerchcaimcxnic",
  "psfjhingfafqslyevb[dxdqwntovaclmmaifq]hgddmbzggjsukfqn[iehgucucxdkkbczbwu]tliayauxvksvbsrz[xgproikoestjzvs]iiaallloptllpslxizk",
  "ptzcphcqxymoepi[ximbbofoixthgsfmwer]fkhbtgxnesptfxo[dltozsoayejigey]cdvzutkiqvsbrjwqfou[tymdmriuevcxhvramz]hhgollyjgqkrafrfie",
  "tdibhwxwwhhzpijdzz[sqypuaekacwdwhszbr]qdrmihbrbuxabxordd[mvpavwxzmpyciphsgdk]rvqvoqogfoecwrviaxf[lpvbrbrbasyhhvfmevk]zwivpinwcjimtnoxgyx",
  "xgpwwhbnoxxyhnti[spupyjyklqcfcrefzs]tjyjeirtirtguqy",
  "tlticbaiifqomphtgo[ucidqmetvobqgsy]cexdvkmfmjuvpajc[qtvgbbokyaemprq]xtiuhiivmkiagzm",
  "xhizhoimcrkswctiqd[bhnunjcqkpmbjbx]hsquqbbocmmcgjl[lncgsqfnxwhayqlgtvm]umbsbrununglhbywhdo",
  "kfwckxghtknyftyal[rdfhuewarflokuysiu]druofxpryvgicna[aeqfoozbpaotzquzdad]msldyiqrtycxhiqh[cumdqmrioeuerkvt]batrhqbdfrmthrn",
  "ecctdfmbntsgfxhrui[xbuzjjikcmzzyto]tglacljanlkcjcosg[eerzhevgxsqcazkrh]lyjjxoyajpohihtra[irzyelpunscwini]fipoynjpqfwbpbuny",
  "cuicfjwvgxclvlbr[peencetaryxtokzglo]xcgxarlhlqfvrrmsg[osfqrkexsbiluehmrqo]vqudjbcdiefbdrgdsvc",
  "hudturxiykqbhvtnp[cgwvweqwlqatalocwis]khnxltriotrxhowqnjt[qltcjnvnjijggevsi]xyessxocwzfylgbmbf[wvihwwgbuvizmdtcpj]vjputcucxgrrpshwvr",
  "qontatknuavykvtf[fqataguubcwlkwoij]nhrqagocxsfnizqyugd[xbdsunkmaljsowsvtd]albwsleghhrzfasvxdb[ekbwvesgwlktbyfi]ahpivrhcbfmfiraefn",
  "razbppidgxyqkix[iaojfemaadphewn]qsropygqxhvvffvbbxl[bsmshfrmhpxspwstmc]idenrfrlmvmvrhiqg",
  "ezmsixavqrtcdweh[erhucwmdkzqroqydbdw]xduhirzjthmspuekilf[jkteqphnbaueghw]kgumwbmwvraxcqpbcrx[vrvfblfgwateblxdp]qvhhrzqefxjmixgdd",
  "mnohzzpvbqvocixwic[rftsqeqinbucemtuane]cgjaakvbjkeckjjwk",
  "awhsvmllfamakto[mifjbziwmpilqcnuzla]khathebsulhbftma[uhjhswjhkwisyvzxkvk]dibbnihlgfzbjzbow[kdiwwdzcdfylmir]ybuwmrecejnykgbl",
  "janqfmfuawwswuugiqe[pfnmfmaelrxtqccxi]uykffpknlaadjmvm",
  "jnfiqazxxxtszpkm[lisxpoyxjjfanndp]fcosssblnacsasdaw",
  "txtcybvnnstimcobqz[qyjwuzonancogfe]mssglofrsrfwxtxm",
  "ohdqwzvoieteveomjv[bqqqlfljbhdgawfjm]odlsebwuqlyovdhehwy[hfzhkyfailtqkdp]lremjkpfziwuaryxpk[wlaublawtroosedg]npfndcdnhjitetdfo",
  "lurbnwckncgzery[yebfwvgvbenhihuf]aduwmjxhnvbwamkbri[bpieulneazjstbgg]tbikjnilgrwaguhha",
  "cwdzcfrhaawitymb[wonicinanpugaykelx]tkaoxweodyzipjg[qkyrvdzwrsjiuvdaagl]jwofcrhsxjoiyjkjgj[wvycbhaegnztzomhg]mdfipblyzperbqi",
  "ptzzstcdnlenuqdcx[wlfxdepvxywerhfhon]kvjohzshgrvkkyn[yohfvbsblxikjjh]gvjsoefdbyfdmmtxk[hegjvzccnubabtcaupp]mqvtimezjtadjls",
  "bzxvqpkzncewqsfa[fpxqxvkbnahpsdzb]llhleodedtstemne",
  "bxizdrcuhsvclyoj[qucbvfywhyeqgdfdy]liybpqoyqhmgqhgeykb[jtrbcsxipdfkqbjxdyr]xgrmrqmgxsnpvjrd[uhsvquzbapgxjtepco]uniibzzwcgabghl",
  "toznijfkljjlbtdxs[gnfvczqbcfgabdtrqzk]wwwptrvsnzeqilx",
  "gaqvddsfpndkdhjqzu[lqbvehvhcpkjjqk]mrklccztxwvisbn",
  "ibcsjmbnbnmvxhayyrc[woibnbdrmciwcahsk]rtmazyblmbvgania",
  "ugfkecybxxqqiazk[zhaamppzqjcvlpq]hmczfvebpvstwoheixe",
  "nmwoebelxebydhkzp[lyuafpdbyqvdbicrcme]hdimercdhbogohlokka[zxmqvowrnoehoopynta]rfiynkeqrcrwwyqv[mziixunwbvtclxjgkz]hfcyaybxgcnguzt",
  "ztnrszpermcjegjoxro[lqgnentrrwfhnovhga]vsrierdxdfafjfb",
  "yrzwmqmfbzbkfanar[lyaiumpagrswyfln]outfmpjdgcifkycfoqm[orvyrrmhtsugnreo]hfpmuzjecpnanzef",
  "spdymrhicjlgxyj[qmqdhhqtuvdzlyz]jmzcfnnumrqukrsyysz",
  "etlvprvtymjsdjaj[bsprwlyybbsdaeg]beksqzkwfhvcbjtqms[jaitkmwfwavxtab]iptqxzliwsdzgwh",
  "xzxsyplmzimdhla[nryxcdhdczutfml]uflrzmqwjujtlgsdzva",
  "mxypriluwycmntxtmaf[zszmpayqupqfbmgyf]lozrzqnxbsprrqe[rtztvfewxxfzdxmgy]toeggtpoqgexcnn[ukfvhzevjswqcxzm]aszhgmcilpbzrhjy",
  "ptabhiqlbhgixmuqkg[remhfcequlfsphlxw]wasubakhjhwfvml[yidgnoxnzkfbtqu]gljiqgixqwvncikwwho[gzuhugusswinhul]lsobicqkkenfdeqok",
  "mwomovjmjwnmvnda[xwtrgqgcmsgrjmve]joaujmjslckgfapzgc[ldsmumoglrjefzd]qbiryuodmwlakuwumu",
  "llnvxvteojfoexr[euqdzgipwuzzozllzw]pntgypmuknwthucbq",
  "llvixhgtggdbmgyoero[gfkphmwigqesrvqvvc]dgddqmrgzlrdbfqfsel[ktyvoyairtjpbhk]mjysyzxlawpudjj[ysytzltbklcutol]gjlslyzeodhvuhjwb",
  "bplytpwjqyqvuhuv[xzklrhrmhaqajin]gimodowxjdkwbrxrc[moebsayqhdtqopnf]lombtnukgbsxwyk[dtmhcxmxcgtdxtq]xqzbbrpvyomidse",
  "zyyossiorkgqzadi[ngefhnbkihvhydfoqut]syjnggrqyekahgjs[bcrsufbjavnbftpy]emonhklabmalepxg[ukkahfhelxnqmnm]qeqssgjrefcayhpaoi",
  "avrpdlubxnptnuvwhh[rgonxdahzvupeuk]ouikiiozvyfjlxy",
  "ejbjmrqekkmwluurq[afypfgfgeuflropxbjd]ozwydhfidswbqfbsd",
  "avqnbmmacurwpzm[uigunnsbpshjehxilv]zekhfylabaeeqdlx",
  "cfnqbecrkhjnhki[cniommfwxonwgfyvch]bvkqhqtuwjeexiig[fgniahtltlvfqgkwcz]opyjnvknjhlwwxtaiub[hqssykptwcizckqsjt]utscvbbxbwbzbxax",
  "ojthsbajvhcibveqcz[sqgukstaymxsmsxi]rpwtokgmtlqetoyuvus[frutpvriniwkvksb]mmaxbwsbwunysjoyfe",
  "lxyzhqzjuhspwsp[iyejpmqzmkmrxhmu]ayplqpjifkkqisso",
  "umclvacdokwrbfohzg[iyftebdsfpzdovtvxb]kpxcppnxowojoqaoe[ojgfmombohrlqzvvw]zmtkdxtttzjxpzweg[fodhmtirxunwrmt]dxncdrvghxzwcwrntv",
  "ygbtigdthvjljple[yduppahzgijxcazdanc]lrlqpkxlefjnqpvfgk",
  "gkccuparoiekyyl[kzybnbkgpzhwxjxjq]lafdhfasipmjwmo",
  "gvjmcffsankockhyz[yvdijgacxuzzxkdfrd]gkvqmgdiezkqoddm",
  "jpyzddhzjjqzhxxtdw[jdqlvbwjyscynqweh]vhikvfshebvwmgxoto",
  "htohnbvtjaldmrr[cimfxlnzjpedjnfpqoi]ynqyyavjydqrnkmxuu",
  "nlpwmdgatcebmkafk[cuaslfihofexbszp]astyutrtzfpqlmmzzr",
  "xqhgnlmkhehnhsheo[shsyybvanvmhxob]zuonleemgjmypdt[qayofvdkfoywrbvfo]gwwlayodgdpdnucdtv",
  "tzlocatotjdiyak[nmomamzybiqujqcvl]npskvhesinciclmey[nurqljirppzargni]liyahpqgniffpbnlbp[iexhfvjarirmcrwrvia]zaufsbzqwupfyeo",
  "gnidqrlofetsdyiang[dnkodkgvjdpcvbikfq]dbnzcjymbvxbotgp",
  "ekurtukmxocokwld[zpdqzedgsbtuoziwawa]ynqagswopnebauoqptc[rrlkmxurhmrksvfj]apwtaszcnbqbylc[nvltgdygxvwzqes]xlkzejyvdirvnat",
  "xmjmguhmwxpezxb[xnjsxbyjudycqxynb]vhncvsczsvjcljitm[goyaefndoospnvjjo]guqiuawgnvjhqryawh[whgrscfjwjfnyklfen]jxoautlurppgvwig",
  "rssnulafwaqhatynym[pxoiayotlhrblurlqnv]zjrxljcyrfhpkhqbg",
  "ckglonnoxxyzdrknjr[efaeoaoysewfrzbomj]vvooydnkscbgmsrpmx[ixupwwvszypvktnxnnb]tgwwvrrouofrbho",
  "fbvguvirdzhjirldd[cyjvfnnmkyyavdsskm]ojabvhpiszlmnuh[avwaqdbzmfqhrsj]psnacxacsnclygrbysw[secyqcomfooopsqwt]dgrxjsytgwtsojjglq",
  "kggyghbwaypgdhnhyd[echvubuouuisnrcf]mowjdfbcbjhtffnygy",
  "mpzqvvjxtgbosjkg[ccdeltlbvdpjnvqs]ylfevlsotlenaly",
  "zcyyoqpsreujpqqbnp[llznmjwhawtcfyf]xohiadjxxhdyxgfzzai[qwytzokvyzygcze]zaunxvxplemcvtau[mieqxtavvpkjpzy]lhvtqanohmynthe",
  "vsywnrsmuoavsadov[nxidmdrzwsxuoojx]asnyuqlzzpwlbnyj[syykgeybkjaafmtm]otmdohqmxobaclu",
  "avxdtjnfrpcwazq[comlftjdaawupwbwhwz]coiclxxfoqvmonblg[qakltbwbothujtx]uiggaktynfmtksa",
  "alutuqgefdznaevgnp[aaelounislrreuasi]cxtaxajsfdeuofockg[gmhzrwznxnthorcgvqz]vicuhzknoglmchabsr[btplkqydwlfiure]eltgcafsbfmhurk",
  "jiuyksxwykodanqqij[bstkjtsgvdgmkkjitl]drsbxepgdhvgvpqa",
  "bsmlqjutgvdjrlw[bygcdoiwlxhwyshywpw]mbvrcoteswmuswbdlrn",
  "rlvemekcbciszkj[wgakewakhsfryuub]fiojmarxlziutgnk[nhkegjljxordszjbm]zsstvoadxqdhoffmim",
  "moqfrlcbvxtodgwmr[xuldcmbacldxqrwdx]tkwmiexelfuhylthwhx[moijceyahmwvmev]idivrzhczxmjutclqew",
  "sfrpjlshbbijpxbldgf[auuifphzzmlcpcvaiz]pahgjmspfnfbwjcyhwh[rforlofyvcmoeynkop]euflfzydbbouartpevn[kkuzrpgkjnmqhkkzj]rflkvsifjwldcnaqeh",
  "hhmzakgbafyjlat[zgfbseeczvdwfhw]ougikioebcfwvshtir[fhkgbzdixcgtlygdl]hazullantnwofvnk",
  "tqjjlzhzkvzmubohzhj[epiumkblmvmbgom]rgmogbvmhtwjhmw[gsmtyefgqkuvnicng]tzgbjsmbjuxqnrbn",
  "yvqyouuflmpyfwbk[aqblmhvvtynyfshl]kvjfxkhqdreafxwj[irsviivlrjkkeynnwx]rrghuscbxynsbsyqi[zwelyxrdjbxicweenn]vcpsqwwweqmyfynttg",
  "ltlxbwnxvwrvvxpq[ulgkvbbbsabsbyjprs]fhealjboiotuasdwni",
  "aeyqzgtgplsypurpt[dsbtgtnkfnlwwidg]wyllwjwwnnsdrgkxjqd",
  "jtaokhbzghqxhdjf[tqqogmfcmkbxgyx]qqwpajrnypqgvkkb[xhhvpzlrojjkurlawn]rtyzweuknwcbpwbrqyq",
  "cgxgsbbfdsyddeoke[hiqjcmhlqefphmcd]mraijvtkyqblerw[bylxwlqifgagtsp]ahfynlyjjwrzabyzx",
  "uxynlcplkdfpcdmyl[jjisfuhlclytjsyeob]hwynakhicnuersuo[mbmqhsoerrsvwsrmvqq]sveorantnsowvtl[jafdatewvrieiotnpnp]xhtdwhlylomftfnnen",
  "tmzcveieyuzlxpmr[ndesufgzbraxrkgp]etjiwayxlrybdzbhab",
  "fbprpeitxljandhdy[rczluitmqgbwdcsh]kabckqvtuxjkibba[grwesjogtrhtiybzy]ltdeoxxfnabawevxd",
  "anclbgpbtsmoajykxb[npuxcquzvocbfrp]uwgiymgmvzoloqyrcs[lpvsvwbxzzdpqirgpnh]aurgmibrsncsbgq",
  "fkdztblvyxkydfky[fubhrpjakajczbitmh]srnipvdwpbzdmjmerlo[hnbemydhlmwplcqyne]fiwwzppmfdhvhnmr[wpxmyxfnkqdkdvaaik]lyygxlsjeijmjdyoanw",
  "pedmulanirmdvpmt[zjczvwywpkwrkoqrji]xzmxaamrjikmncfaio[rtswpkjkmkdudugk]pfghhjjqllxnaguhok[enexqxgwatuynsbr]kbpcipbknitnikywlwh",
  "nmkvustjpdevipjtfwg[egqawcvoennsxcpevua]tymvzguaauenafdze[gtdhikwfqqwmqixdi]oohvsdvfitdkxmbmty[jcxfngbxdfihftmeajt]zhirrgodyippqrynexe",
  "nnyhpkfneapjjszcjz[ngzymkbnkxzbacpbl]zzizemrikaffskqmfev",
  "jhxkzrbbqowblcoxz[nsgwdmpcxhzgjmyx]quchlxepmyrzckaz[hjgmvsursfhpstqfsih]vezjcyznpnhlzlh",
  "kckcndmkdouorsdwn[ztuibjrantmzgfe]gqekgbbxssksend",
  "hltsnifvgikprugygv[mqhnrgbkbzlhbvxiler]nkdbjyfpgbctdrvf[mkgsjkcsxorjelxya]lkbxfqvhqjatdxii[yfgcbqrsammlylj]ryhbthqnczztdkl",
  "eadkjzvrtywbcmzqz[yqrhwxgmhgfhrbbegto]rdwetzlxkddwcfxfa[owdqelgwlrdjhuddc]jlhlffjtkxlhwfvxyx[yqduftxeqbqjobyzu]vtvpwbzdxflsgbxsbk",
  "wtfrmcjfgktqtdiivg[awvaagwtqxwzxhlng]hhrbjjxipdeltscw[xztfxhcdduedjrtafqi]wwrhvbrlwhqwyiis",
  "lkrtvetaonugeporo[efbpphkfxwcrwppqqam]okmejnhrlfoimlchsmd[jyousshjqvtdtjzzshf]kjrwsvwqkjfwbihg[pezirpsdyrkbrtxi]hnomwdvyvweozbuxl",
  "dhorxmoykqstlzpcho[lkymthwoczjlxizjila]fangkruovgrnfgbp[hnfeeduqmmdnlekcumy]aziaqyhtfkjdzqtqr[kphqqdxqebxbste]ngnnowrsggslyuakg",
  "jouafjnkgpnqykpcm[ooqcsucqxxjxdmjn]jhxejffysygfurtuiuk[oatekibkyohbwkmm]hgmnudmuxhjpots[ebdfyhlvwkuaodbowcn]gpkhliklzfymjkwu",
  "shocpjzaevzeariq[eumkwkotgdbyjgnk]uunsrhgakuzburbz[bsmpastmdxowusk]lriwoyfiivixkxu[kxkhyybsqhyxtsflsmq]xxhxezxtbzlbjcrfml",
  "eciuieumaovwuiwouke[ddkugoizbpebewwz]ikyrxrbqgefwwfgh[tevvqczqhzmfqsxzfq]rjfmgbkmqumguwo",
  "ebtvwkbjfcnwvvfbp[ppfrlfmrddsruqic]pyudwmqrqdfauckdkxa[padaisofrzqvgzh]byqqylbsmbvbezyye",
  "yexagqnnwnfywjm[kooqogognnngedlzsq]brhhvwinmrvkdqxw[dgqzfpphhgjylahgay]hebbzdmhbvtzmur",
  "foijfpevxozumuvwff[pkiquvvvqjxjrvlsh]kmtmaguaddqfldmu[utkltperqeurdocb]oiaikfbzridjxhz",
  "ixozlsluymvimmudeve[uiwznweryxzdacvl]ijygnilnqdgisvxbxj[nyhllexgbybqwjtr]sydmmxvtutdguveaey",
  "uymzmnycoqrufwkze[llvxpnprmsyzydne]hxgdfdwkgctgrffxfd[uypfnlwxqsrbztigvof]fwdnhejatsgjylohe",
  "xxeefeippziupdzqdv[fqzsaanzuprdejzei]sgritswkucdvfwgr[yglsjvabllzoppoq]iwjhmtojkwrtiythgbc",
  "lbebfxalyjrsbaxe[kjlzgjowpikfcfmf]tbvomfmcttexdmjbkhb",
  "itfdbeixnuxztqwmun[hjvddmwoxhysemairp]llkfobeqjkqjvhqju",
  "ljocvcmwkqiqjdy[vfyialovhfurlonwd]xyhtjuhsxxfupmpbwwe[eonolgkfoimgnnqf]uhcwwspkbdhjlqx[bzwxxcwktmvwjmfnl]lscbisjytivskdg",
  "nohrhiroodyzrtientq[wdzodhubgckwueeh]husjxtycbpnpkvm",
  "yavwhjxvtollnspqspo[wbwlwqoneyktprx]ykxfdxclrrmzujoirt[ddqhxuvkhvjddakav]ovdtmshzriiyxbnh",
  "niaolnfjhwcueopnp[vmstpskhbwxntxpdr]cazyzemxmoliuvzublx[ezsriqaswtclogfmami]iqcasfpwgfwptuwnbkr[dziyupehwpbraycyni]kwhcaswxwsulaebmzd",
  "xfbdctwpeiuncly[ibtupfnclhkxusz]tplltxxnmbnzolkh",
  "bxswmezzutthdywckh[ilxpawzlxekjqxgrre]qgkpjcufkrzhqmjfnzm[xtpwhdjuwbgzlbuld]msweefzujnnqtpkybr",
  "iszvyoyyegaxhdv[twdwlqalxhuccxe]nzipbpkobyagntl[sdkbcyvefuabjmdo]hsordogmuidflsp[niaofktgfeobayhpi]wggzjhzhvxsxnjt",
  "pnsztfncjbopatyivn[cvjtqgnyntndnpnse]hapvzijdaizmnwmidq",
  "nlgqizdrparsnjyqpgv[egszosdlatoslaga]rlciqlcmoewqfvdqcqz[dvznmgvwhighywc]kokmmsdsqtjowrcg",
  "splcbwsqnyhzezpvj[ssatvhmqnhiffueb]brhsabaqbkkkshmgcv[gpfoxnkimmtchlyge]srhqacebyiltnqds[pxrrbhhesftdovfylh]hyuzrwirzeiznnfuc",
  "hhryackxxzkzqxixy[envcplucawrjtoy]yobkzawoovnsogap[ztarvxzmwkeqxydarn]vvjycopkerrppcvq[kimwaxmvpizkiuefucu]cdialgjhbpmshndqq",
  "nptwvujejyxchazpdrn[jkqvgwdzgkamlaje]rlszsnexhbxeytxt",
  "jckmcegqvwvvhxft[kmadqubulgkzrswsc]fevjpgocevplyfhd",
  "cdyxwjegdpxmmcgtb[hkhpfbvslkjkhbh]vheahacmhbrhwebvymu",
  "brpssjonxyicopgotnf[kkrfskmcraudenf]oavtrcoiegoabtxxpsy",
  "dtnpqobyzxlenyqptt[tofsjojeprpzojo]chekpchrxdydqtlmj[yzccpybekcdhlyyyt]rgwioolvkinkdxluo",
  "wwrbzyzznqgvugbgve[tetcizfbdkrtcfuuk]xwkjpxvuwseqpthhosz[trvoahsnazmstjdcj]bslxorundumadeenh[kvlgoddouujyfaatmgc]bujfiyfvtqugqvxk",
  "lsttshqhvmyuxgnff[bowbelbrarmpfbkppoz]hmnjnuxmjbcsqlcerx[dvumdplhvvdvyzvidf]zphskjfwjjvfkexu",
  "wzucjwgswuauowopmdp[wjcqiryvwuxbmhpyqp]iqcuqtlhhzepihteg",
  "aqykzrdfpbepfroi[nnesulylatpfrysyft]aurruqmrarfprazf",
  "iaftaviyxeombkewfne[sdastbxtiafdrsm]xegakracjungzmeu",
  "xqwlbqdogsxjelruof[fbmfshrzujboqjlkqxc]kcishnbimxnuqqrryy",
  "nrvbizpcefeitvvupag[hulbkxrjzkaahdkuxci]jbdgvrrmdiivgpqrpo[qyvwwwtrkxzqijiie]lachkuszoypsodqrdnu[dzfrbbkvqftntopviw]ebohzzukoiqnufr",
  "tywhwpztmmhnblxbts[jfqzilxvxiasnlarc]pygwyrgjxycsckvutwk[cnroojebtlndmsy]yvxrbvjuwuswfyk",
  "fokuprpbdhyyfoe[bkjcczvybfixyjbq]uajetiolqmtobtxn[vovkkboyuezdnrhnar]mghktojvbjtnwksch",
  "lxdyvrssterjmiey[tusyoprkvxegnqrdhjq]odrwoubssnvuyuiktku[ucoxfrisagkkaloq]sjrtycvxnebugwqtll[hqaeiynmaowrvvb]besmyyywrczttkgmbtt",
  "tstdslikjjocurgugn[vgqrulmmeobvfmpamj]otvhfihzrngjknf[aawurivscgfquiiur]ndkqgatdokbmpepskfd[frpildypvorbyre]ujkroiczrebmdyfd",
  "fqdpgjnkmkttglce[nlhpkiewbwjbtwcpf]haxcchmkmndtnhh",
  "omocgzbdlfbeamflzr[jxszwjljfmxuiujbgfn]hcdioutqeoeuzap[abvucydlceefbzn]jpkubopwxgssvzo",
  "sqqlnxiilhgazsnal[ighmjnwwxtocvkpftki]neitkxncjcvdlfgvh[cfuxcpwmrqtbgbknr]wwkxfkkpwpqjkdcqdod[daqaqgzmzwrjshuf]yegenkjvqaknwvpi",
  "mmiexfykfdbrhhksyc[ylxmtgrofepdzvxtuny]oanwwgksfcqhfks[oijnmauhzowxjcu]evrjktopoghjhqdx",
  "zozbfaywojquqvkz[bhxevssjkapxlmpwxem]ukxlaytsrmbmopjchq",
  "lfulcuwuwhpsxxdq[axyxkwujdyfhzuwszgo]yjqrxxginsthjqmn[jbyodgaodeqvvsbjazj]xdcarmwqaecpley[sbhenpxchetqgkvxmzs]ywoecdpslltbwygkxf",
  "pttldbtbcrbtlktgoy[lexfeozwaowzcvwuzl]ljcujfuuzcelcfgfq[tuhxnhcvyoqumaxsbt]kvsarqslxdycbij",
  "pmtquvqtdqgsntwhoj[rteezvlqiwspucfhelc]mlrcencmqsxzkpdjfxi[semnpknrjcdgqccul]yyjfazwlkhfgshuslw[awkouisqljhokamqu]fjcjnhqamgmktye",
  "owkxiezvginbexz[drubaexpbjhtkvst]zcoplmstsjurcdluxtx",
  "qmeswlvqobpbbzluq[tjwpbxwxpvxrfcdv]auxbrlwdvcyhezcvcx[pazmaitscjytlezq]jiafpkyazusuhlogjj",
  "aehkikjiogsijihpe[boruxyyofoaikim]kzydvfakbvjyyqcrub[kxckdbpbwjtygppqdw]rlqwfwajyuqxquqqj",
  "erwmsqkbxvsqmskt[fubwkfiayrjxjybcltm]fmgitzghibdvofyqxkk",
  "kdvgwfqrgtaqgrbo[smlxrsklqbpjfri]ztleeoguncvmsuwu[akqllpwpibpiklnkpu]answpwpyewhprmgod[famajtkfraujmbi]uqapyzuddsjfhocplhg",
  "snftvhkybjskprxrrzf[vozzzsufgzuczmw]movtbaxcjzbvbfdgr[efkjjmkvnpwrfpwzucm]xhxwwjhfgulngttcwt",
  "gwkybdfpsalwzdzj[arbuwnrroaywiifdkh]hroyrgccxwkxvbb[wfvctunrygcuknhm]urcglwhxdnhqlhnhm",
  "fcnsrbobootyiwobosb[dqzwfpxlxyqqqupqx]soulcktjltssqymmgbl",
  "aynlyuambebrjqrqyf[sketmlkqrfzjspub]cxsbjugjjhjyfrzbx[eviepruggimumxfuxmz]zsaoqyauikbktaognvt[gzlpscwtzlsqaiiv]eqdietoqrycxeep",
  "btvgqbrffbigbwyn[hawyevqsjornortkt]aatkdacjbihoqkblwp",
  "iwcndrfaqgwbjqo[rjjaxftvlapukscy]yqbkjoahqehawwc[tzaomdmoksnxsxghe]fiopwtxquqqkaarh",
  "xuvrqnmorxrrkozq[fobxzabsyqhlrdg]zyyizwpynjnxftao[njvnsxlexpkrcdz]wwenlkliyesmcndvcuf[kwvaeliaornmkwtvcj]fsgdabrbegymyld",
  "jnjnsazfsmceabrvnt[vvuwhwfkjgyuchq]gpbphxbcubzbhwg[robhwhfsbyvxjesxi]paqidluldnvdhaf[olgagstjfhhfulyjijh]eaxfhlodlaszjytjhrn",
  "tuedbfiegbbztleiw[lcfmjhaivybixjhqfpu]ptainitfwmqjjvthbd[lvekgokhhxbgsvuys]lihtypowuxinvuut[iwuisnrsisinactoj]rlgcloangcbbiduqkog",
  "kcbqbrrnyyydatuez[zjockzqztfljzblqamy]rbvwgnukscgbvwbjd",
  "wrskotnjnzstgdrbfct[enatxwtkjnpkrjosh]tzoqfdvelurlidqzeph[wkwtcdruebpsxnmr]kpuwhsdnkxclmwe[jbmeoibgtttcyuwfu]yymlkiklaamsekcbj",
  "ypjlskiufxommwxvmi[ovngcflsoorruwyspvz]hfhseppsujofhfr",
  "qcvpfgudklcievbfy[pnbexmxgvykqfzg]iqkduyvfgjoqpjivnvp",
  "dlqqhxpycivizertysc[lyqaznnhexzonrr]xibqisowyjrpvmurek",
  "hxawudgfxzgotyygwt[moswqqbjntxyjxzdzgh]rqegovbegcvupdn[envwqcpxkubdxxx]euhqmmxmhmuxzwics",
  "ywsnodswkovbakgwgoz[bmulqsmmlnqscngti]bpijtzkeogieybjvzz[qdkeoomunsdhqtgfcd]dhdymxedoeoajasyde[phrknqwqzcxqclt]gceblmgxugocipytrb",
  "vikkzifkakvxlaiazza[abwjtprrfrqiigdwab]xvabnpghxxjteyqfk[wzswbqscxqtmtin]fzoopbmfeczgqth",
  "rpsxgljbvvuymgyarjt[hshrrezhoqubxnj]ueijefxasiibpjnruz[dthkgvjdmawhsfsb]xreobobchjfsbtkmbnb[ydjmpujgmlzbpjv]yzzxwkyuasewtdykdlx",
  "tayzlehhlshbmye[xcptltsssiwspjjfcrb]ygjgkwnmupukybmetyt[hbxfpqbrytygswi]foqqfquoigwzqzon",
  "luieukdjisyvloygc[gsvrakrrgiyhguf]nobcvqzoezbvyostec[jhsfejpgzjgvfyuttxt]pnbiovicvwxyyvadji[muymyywmawtpbqy]oyeulmwxitcgievxav",
  "jmooistiumacwdkmws[kprhhacrvxlpbjrmps]bwhuxidhckhcohud",
  "gcqelkomlqnknnagihf[qymdjztafcezoprdzoc]ghfroyxotdzczqx[wxdswxlshevqsbjeg]uflmjuwqrbtbbmun",
  "urysktuojujenfit[mrdumveuynuguzlujur]golhlzbkjwyclmlkpf",
  "vbmaecuvdmylyxnr[fegcdyyqxqwvmtw]vliucbinqvqmwkvyjp[fhwgemvaqggxlmoguw]rvmfddzmwntgeqah[kxkctllyzzvxypntcff]sgaqscxrdcmzlyliww",
  "sefypuqjpoacgfnwtt[ioflejbthxnkdgoik]rocojmfwwfansyyqv[iyizhohpqvkbuaqosyp]npohofwqvpyxcxrt",
  "cgzmoptvksgvwyheum[zvzvtlwrenltplzgy]myyeuzrpwsnzutjnkej[ttfimkuuuclcdgexy]xjlpfxjcqqwsjwptu",
  "raotyqivcueshnsf[pyvmyvxhbdbnqhzxjg]uyvvdzgealzuzlkktcm[hxievdbdfypupbteyr]hwnevjwqxxnftyks[xomsambozdqysfaq]vgumkoaktwkmtimed",
  "yxaxjbtvzmadbfqyv[uqgfwzwtdjipaxatvcv]xdeokkvvfysqjakzewf",
  "qskksnrfqvxsulhn[bhhbctzbspcgete]oqiqahqqzqabegwvi",
  "pziwbsbrrzabsqbv[cjqeuggpvkyixucrafx]sflhbpzkzlvrsnt",
  "rzebjsrscwihevrb[psraegtowtfintpxm]letyyfazyhgxqvdj",
  "yibvfzzdfyduvoidcin[vrpkdibyqloieus]wxwexlzsccucrkp",
  "tbwfqaohztocrnnrflg[mnuzqpmzsikhghtevw]dcoeckvfuwawpqewicy[blpeuliasyvkvpqe]hpaxunxuyocpgejcc",
  "xzslowoeismiefcucf[ucunhoeksefxmxry]lzwukoivrariwmfq",
  "snnsizkvnzvbybtnksl[zegtmmfakbgdkbc]snwmlzqbperkpobivlr[oprzukxpmwmjruxbd]pkplbckpkgkppekxhae",
  "amerjjfowmjmoepwm[dovpegfjsjfbynfsld]eqiadmnpapmzqapvb[oumbcxdwvylopkf]wzoyamoyuvbinix[qvrarzrayfqyexse]qlzzfzqukpztuhvhajs",
  "xtipkzguqcpvpdxdmvg[eikmxftmayywkcsfrtt]xvpvawokhdyabig",
  "ttatomuxcomsozd[bkewkffocuztataf]qkackxnnxfaobtbuoj",
  "jiejdppofadbjkyrtdw[ooeauorrivpvlogj]wyauslbejctazvw",
  "fqezoxvbmpoujtq[oqrdsvrhktckizbpc]hxrmwwjegkfkuuxh[yrxyqjghxpejmeuanz]rjvskpxwfvkuoxb",
  "ozgokrszsizmfbt[asvhccznwaowmhhcj]maiwqwijvjtzuav[hlthovjyfjnmngv]sfpxkwlemvnpgkddhj",
  "bpjhbmtmwnhxwun[gtpioftbeyytihhzz]hfdjtbecidtierbpc",
  "zoqhmfdkqxffzoo[usxmsyukwfnkumfm]vgzptkzljvamyiwt[gtbzzwqazucflkwkins]ubkmjiyggflxdbyr",
  "swqnflkndcslifaupkn[ojvmkkvvnixkaerq]noeofutbnsmfcbkig",
  "fftclmwgwrlyjgkgm[nhlpehlzzkdbfshvkag]awzxbnaqoiopxypkdo[alkzutbpqqkgurpwufr]mwjzdakqjuencwbbrh",
  "eblaxeiperzztmaw[vlmprldacrynjpsswi]oxtovjqqulsoohvzpbu",
  "eadpdbzcmcuhxhfgjk[bjicujvqxbiecwn]wjuomhmodftbqtdmt[edfecbkaubqcffg]paehfkoktvdbebg[qbhloexbsbohtixbm]pjnqayvpxitvouow",
  "ewhavxzzuqlxdyqkhi[hnbjdkvwoqnvjlpswy]dxfdckirzuwnubjdn",
  "ubtfzeljiyqwpgnuf[lbgigmkwbtdpnbkbnk]yybenqvdoomefmgvv[pnerhkxkgwbiomjk]hrffcijxgjaoqjpruz[lzgagogeeooycnvp]cqbruywluacfkphizv",
  "wvbsipoahwtjshooqg[cgzugdbjurjjddjqef]wztnfzjxlkfjfbns[maxljqbuvjduvawsxi]ixbywijldjyonyigzxq[pzybxoxwuirwqcogq]iegnuixmzhtlovgy",
  "oekgobbwgudnrcmrj[szazzrwmljzjgijegz]lvhkidshurzfcgpabj[mjqnneuwmssstzljaph]fzkacjpolzfrfclip",
  "tbvakynpgnsjnbyou[jyqyyjhfntaavjbj]nxkqrzatnwlpcuoja[gsfutmylxkrwbhuzjvy]yxghaclnjrzpzefj",
  "jimduufubekuvlt[pagpxnmctcyywjiex]ensszmgcdelphrt[tznxicnzbhktbaah]zvyxmysybkjigyopon[cwzhaqcerhndwuqwy]ypiilhlqroeqrqwwqe",
  "eeglgjlpjyxgzthtb[ksepzrcctkafyafbb]wrbfmvdbmivtmst",
  "baftmzwjyaltawsamab[qrzewforwdipiwxzv]lorsrnimsmqjrvcvpu[nldmnlswmdtooqurgob]vqwffeqqhkavwpojj[lcsbfxvdsgpvfleik]nstfxtsmtrvgmyn",
  "srpgwoiktrmbhefo[duipraannigptac]jeadeotjkrdeeswndn",
  "lwnbcnwvxxcswruk[bppxwfnfiyylouhr]anrtotxqwcknkdlaov[wfejxreczrfkwzedhc]bjfvdjmnwqparey[tcwuhpgehohdept]mhiliyxarrbpqpe",
  "yhgvgzyywdtwfgwjmj[fsktwlhrgqtagmbfxcp]jjnhxktdzpmjmsj[vvcrwammwrdxghiwzu]thiysvibpqlcapoh",
  "gfsszbcbpfqdqbus[yurnuvyytgoametv]zqfohuvhvthkwhl[fnyssnmlmkymzbs]lriewfalyrsspdwrmu",
  "kvnxweanpheazjdzgvp[xjsasbuwnnfyqmfry]moaxqxqmcreibve[vysmevbpmtobsirlolg]xeqikiwzsfcecgwj[edzilvzrodlkovmj]ddsmpqvyeomnopwie",
  "nzfnzjwbmlgjjzyocva[gvohlanpkowbpiyu]ceffmnxewxnciao[pfjxyufpuvirsrgosx]qjzqbnypinryigytexl[isevevwhrrbtlmkb]qlxevfvgjexgrzj",
  "blgzhmeqgzojaeq[gwfydofbivyeisofu]rdszealclhxxtmnxbss[uflumbfvytlxbsdkf]lkwlpagtrehcagpgfpq[tfesbzbqapxrjflze]zyaazfhcbypnzhanxo",
  "uvxeaogrkwyhhlx[tqqyhyoivgtoszh]golelaorsxezjgbm[cdbhhggnkbnqmtihhfs]buojjkvnytmqiddmkhg[xxsftnytysayqgzdfr]uuuokbheewyatbwqvv",
  "ylunncplxcziijdkbs[syditmatfetqxxfpo]kgvcfnfsdowisthj[pntcylgxaufoxtwto]hpywlwzftldkzdoh[bstpxzwkuahkmmotw]cxvzalidmhiidtk",
  "cydzirqupeotmln[qcobtdytvpokabr]wqaczkzujrlxoszc[hpzmnchzhlcviotisaa]wyjkqrdzgmntgho[tyfvkooqzaajstbe]onahtttjsrhxhgnw",
  "zeomcnnjfmjwosxbi[lyfmcayjjmdoiyl]uxnfqvwonsiuhivjnxa[myumcdwrowlghyttwn]irrvzaahwlsrswlf[thqyriurtohfgkbr]nsaxcolaibbvlxsi",
  "fuuuxtaidwxmxxujk[bshsyvelhfqwlfy]vyfbbzlrdowppkh[xbxyryvyhyeomymwq]mocwgoygryrhffoztg",
  "cdhhdrylrjzcwzex[jfhkkhlmtxdqxovp]yilgdlznovtedeexm[ikqirazjjeaitjlu]meituyvmlvjmelcnrr",
  "hlpogyqmbstrveox[ceavgvdwtcgfwgj]acuarfurikepcul",
  "lkdzuuvudxuhzxmkpv[jvglotsifsanxxyi]zzdztwjexlwzefxn",
  "zkrlcwtzllcfhrqtg[xtwcenmfjdconkym]dwyiwggayvmnylwbd[okwesfzlfmroeffnpjh]pgpgfuzebejumec[yydfugtxhfebzgvch]jsdmbpgpxqzosgtcvw",
  "bnfpjywbwmmeqbka[wtmfbgstzqmlorevcx]nudmstkfwsytyve[qepjpducxvbauppkvv]swaxlhznlahodgro",
  "zttjbjbomjcokdbxhx[xwlavpsbbjagqdrx]vstkbvzsoyzspcp[mcwhffrwkcoqwyiq]bdhpaecgicahyvwla",
  "mjnstdjiguagdnac[vqdtmlzseufmkrk]ltnlascsietrcuvynry",
  "erjnqlruyqbjzkbul[abyqczayafgzojrfk]fqyfcdczrccymiftou",
  "ewpammmleeceusdtse[szpcxapbybobeviyhn]zrwvrlyaxgksfbh[oajsyeqdqizayypub]iwftyifnhigvntzra",
  "bainsqjfjmrcxdtafom[dfcnvcuenkpuotuy]xxpuuyjmplhfhyiqdcl",
  "abphbobydwdwbhply[yvrztjowpwpserw]whqriogmfecbsbyhqi[wplrgeabdqzvqbapi]ddelonkidwdihjhn",
  "pwlxvzzwzuqgdyrissi[xnvwxccwgxeiqliwfam]tdvdzhwrtbcxwiai[zbufhgzexeyteoazh]kefsdxuyabptdjabn",
  "qimvkilpmpxvmmjd[mbtlfdpqgwesokcsr]xnxhimwmmvtopvki",
  "hetdjnllvmvfxakxg[mnheackwzcsfeuyhone]hpimahjtkjimvmojl[yfgdqqsycjblikpfvo]kpcgtvhgxsbpxkld",
  "vkjkyawguqwyhqydexu[xiusnmzpzzljkje]rkrzbmwdatnmjvotg",
  "xztfbzpnmgviqiexay[akueevarrsuekpg]cwppyqeyddqiqddjbw[uzudorhbqsacnuc]gvvpzltwqndsamdio[gxkaentomlbdprw]chxzdlpyliwgrdmsf",
  "fjgkoxnyerppymy[vsjnnwramhtvelenzd]vbqebirgpiaauogntpy[avmaarehcbkkelcavw]yiplonnhtokqifcmws[gexzvprjuhvhwiilv]ifhpwfffuhsrilel",
  "yzbvuufcdhzvmlhx[gechfjbingtzqzl]syzpzhveuhvredql[djbqdplujtzrbyj]vohmaxsazeivbjfsahk",
  "ptuymymyqfxazmsruv[nwdqwmlhuaflrrlyic]ulrirdqvoyfepeg",
  "qkyukmbxcuplxoot[vsbifvglrklyage]rctdxppmrpqaovx[dstktokvysugrit]sottkkwcclqxnhvmbu",
  "xbybgcptnnnleymp[aezczpeaavswjqy]hfiogvhrxeccqrbhnnq[eavbhzswkepwcnqtnbf]ypdtctuklkyfplrzo[plwnucezldxnwfwqv]wzdnfpehcxpvgvxmp",
  "yhrkegekhedallfhnx[fsvgxvzklrurzdla]aozwwmmqplsrmawnhnw[hrqlyzgkylyexskfddr]urukenkhqmpbdsckjhe",
  "tfxcejadfvkgdbpkoip[jyrcwjtqaoprnzvxn]sjtqmekyjfauylxdda[srlpxmmnmugvrqchu]avjycgbiulfbocgw[jnvzundhrnkkowywdhq]pgkoribobynxeytvhe",
  "uoaugvuaddzlbxixz[fbqqwhyfwwoxsfr]cirtxislchxeoqvx[fydtxitixuwqyni]ulonwhjmbfclfoyv",
  "fctgitdmabzqvxyoxlq[okmmnebnrheniobbaq]yoyuxzyjgukfvzuif[bkfrfuxxlpvgfpz]hlicrvaigjcqllmh",
  "pexeunrtwqwnjuylwkz[ognjybzoxucixexzpqn]jevhvzjqotewuzepdt[wzxhvgoqonhkzyzb]flmlnxbkokjwafpv",
  "jhcqtigqwaloekzz[pzyquxfnnkaurotrjp]smstqmotguniakg",
  "lmhecjgiokqhzourqj[etkxbnxicftpiqfvv]jjpsnsgcdhdzpzfofx[rueztwjdfjjcyfmk]ivnyapkphaubknyzt",
  "zpzwngxwhaqoqxmcy[lpvkmcvzrhiwkip]kabgdmkusopohnjsids[ybjlzcvpydxnyfkz]hkrnwctecptuaxizub",
  "mzoejdvvwrnoinmmjqi[wloxqlhgvffjjzrgivp]qsdgmyexcttylcal[pouvdikobfbvwdfpsy]fhfihirypihlmsgqth",
  "tmiwnwtbrnaetraa[azuewvlevzqdmpijox]lobkqniheizuilt[bsgrchqgqgaiisencgw]amqrkiducucjrjib[yeuysnviioqavfjb]giikmgsrndaguewtkir",
  "gcvudbdbzmlzwpoq[kndbdybivjywlfuo]zkbalpowpvtnhfyz[vnlznirsebececifv]qwgnpwgavwkbsbwc",
  "gtfyrdnftfmlqsxqktq[cbtsoiprfofcttekjkb]yksvtwrnymtftaadi[gyslmyccuddopsbrofo]ngielecejhklikfnw",
  "iabfmkusddmafpmmwmt[sblhinukbkjvnbjygmz]qaimtjrgswtwkxatv",
  "cspdzlionbzpypgio[skigzvjzbypqhqyssa]xdehqhrpsjetjegejk[rhvzmlecvjaxxbwon]pyjzrmjrwszctkfdaom",
  "fwgvuubcizeodjlar[codpykppnlavuegobc]mfcbuammiptvwgy[bxyjmaeywjaeqcemn]mphsmnkylinowhcs[byumiqkdtxekpteovxj]fmnxqemernaxszekpv",
  "mbhzepuhaguxqxyy[rizpoylxzmrbbtleg]uzficbwerulrhnnsd[ctsuhqzcjmcydgou]hfxoesfdkcfhupf[adjixwxypykxipokr]zwxllcqvivlpyjw",
  "uriltkcgsbvsqqptmch[mimwhjivtrmzski]bhzwajclmmqqnieyp",
  "sdhptzuwovsmstadvb[hmcwvkdicxqurdvs]gevaaxdhrffvisopvy[emiohfhrxndumco]qqdhgxqqkzusycvde[qejwvoxwuatpcro]hgctlirtutlaowbpaps",
  "nopbosevbyymuxwyp[wziqrvclzbncsinq]nciknljakjholuho[htazytdkoquvmwtn]uwwqeavazlaliiuhrg",
  "vczcnreuvxzfhsdvjje[uzrsofilfkzrgly]tsoftydcbkbtwbojxm",
  "qhnlepzueuzfqeovpw[wjcqkegigkivivtabko]wnsbdvkxlxifjqsx[ixkyyuidheznidv]vivbemfewkdrtfaum",
  "lqhvszofurybyciq[jnofxqclboepvzs]iymsedvkreiypbnmbt[xdoeoqgnlbpbksq]mianrmjfxneefwmzmy",
  "xghojjtwcuykpagj[pljdnaapmiloqmxnfer]qndfhtmludexiipoc",
  "kmizgizcrjxsfey[jnicxxeprzviqjbxz]qpntvjxehbiivlwjbl[qcanjrzrxpubxcsiwn]anwmdqcnjvoxnume",
  "rwfxvkdisbahbbtzg[chwlwwnkawloaetkzo]xelaknfmymdftmoo[xcpbzebvpnrpgwuxnu]gciwgvgjizamers",
  "fpbumnbrwwxkftujuh[znqulehzdxnvmhpjp]xosdmvqzgmhdubv[whdeqztiosokvowui]bxzawfvaslqiivz",
  "iflgwwuekwmrhpntwbq[qxhvquhrgousyue]ecervzfwfxvewiudy[nldwwdlkwqriwksxf]epjqefymaqvuszpucax[jxxexmaoexdiurtp]fqxfmtcxhdlqcyekv",
  "qqzbcqxbpflnioer[uqzhkzbaunusdmv]fibemenniybzkkdhdwc[pqjkgwuvgaafrytt]dloopxhgvcahkdmjhkf[ymjtlihyoeyzzztdtt]qhqpbpzmafjqwafeqz",
  "fyqhiiropnxbbekmxo[xrxvscomztjvmbfrq]ecerqfotsxyepqyvgl",
  "zirsrowmviqbcluz[thlugrnfamglkuq]kscvmvoqbcveytlimo",
  "aorkidjoiohvkvf[sjdjnonozlwernfyc]oqsrtbmykitnvmmao[fkabklfflxpsafljkn]ibathgahmmwcfmxuz[pouyfejzrdmvnil]jttxrfxicpyxjutpld",
  "wiafobqmcpbkekjudw[lwnfwhmrubysgulqa]sacyethjclkgmvjjsp[lsfkyuszlxoszrylcl]rncyolasypaafbxz[jebonwujcbpmzpdep]yldjyiupaareoxtficc",
  "odaqlnxbrweeesbsjjs[kbcrxmswrhlcaqmdclg]sdepnyvehlkjxappj",
  "cebgletlgpluqqql[jurkzajxuwjhpgbaocs]ucjbnlvacobrdwtm",
  "olpviexhihzdinbq[cydrftzalupgakekpiy]ubaxosljrqmvjtb[mwqnupserknryztbu]cymnqcjlgwxqemj",
  "eenebgobtjgaomtfdx[ktyqbnrwscveymrgruu]fvoodqqdqcndnenfnn[pmykwwhnzvpkiouk]wwuzdsjbrkvudjtq[ngsohmvqtvhzycuvgpl]buxvpaygvcnfrrn",
  "zizewegfymelyen[hqtqflrfikxyiiy]iwcthzujbzelazbp[jqjuninpapqwsjlgwyp]mskjscmsrcyvtrny[yixaneimxtgmswdziry]rqdookzrlapadvvwkvb",
  "umkwlioiuitgceqolgp[clskbdalmkqgkiwau]qvvxnuiulomzpgukzz[itpfvtrbsadknttvtk]ececbpiezfrkhmp[bgyccposjitwmsossmu]eofzripzhxfchbz",
  "vatznkqftiquuwnp[rphaabifzbizbam]ukvfbmqgdkndehz[nkiulnepgmyrdwh]gwyfulbafgjwqxrqo",
  "kxnlcbtmutkqzlen[awtrqmfmcuyyzrs]eupenxkeejpwaef[tancnuruzfewgkgzl]wrpvwcncbqanzjmmsve",
  "hormlzlnhoijrrtpes[wtrhocbrkjmclqz]dgxndczgvkdelvzpt[pznvjwcxojqaupygcbw]xyhbyjglepjyidthg[xxetlntxwcxxqvir]wuqrfbqnllstudqigm",
  "mqhevnwemnwmridkrov[qccsiikmvkcdfgmfr]rbhegzyftpbvftlv",
  "fpcgqlpirtnworzlpmb[dapdrnobpnfascjk]wjfkahatmdacbqdp[ewjocchbnhgwjrtvpy]seanfxzjzftorpxod",
  "jhucfdnpnnrdfwpmuv[etsowugmklvqfkh]yohnhusnycqjnsspai[tzslthtoipxwyouiu]qjfsatlwarvzforpi[wgwchmsdsmwbyumiqm]ubnqwxaqwmqyegjgwl",
  "yhwunwvldxvkijhgp[btltiizrtdoocxzdq]hmjinlwavknoefldmii",
  "idvxpxkefwhszttyysg[alnoeypeavgmiqvikc]ztodsqkemxppehh[idxekmzsqfmpwxqc]rvleffzxxtdiyoqyv",
  "hbhdigkfrbkcgybp[psiceztvpmtuxkwvs]itvkdtlvlvzniuuhnt[sswpnyreynmevxsd]rftmecirxwbopebhbj[vmtgldmrdnsqplnnug]aiqmqytwgyrzfuif",
  "yzvqrcqpvrcvzelfy[zpfbfqwuhlczlqncc]rjivgabokpvurzeumlg[mjbfbttiywadmjamp]cxlaflbbssiaftpvcd",
  "hapmxvffllyepuzaskh[uzlvpzeuhfxryqbvba]xwumchkcvjhzvvsutv[asyvecfslkxxrhtjsy]jehubrvlszilmzub[pealkjwsetlaucnw]ohmxxbwlyuouvoksfko",
  "shcwbiydviqwsnya[sxfgeotuxhyoxymkbq]hemidyqwlijlajk[ppjqsajrlwxvegscewu]dssbwmkvzomborfg[indenadqucenusmzol]bogdgjehyhoedtiux",
  "oagrxxnyrpqrvstuoq[nwantmrdcufscrb]goznqhzldndphsln[zdojavthwbbueda]xkjheqtkyvyjwiklfl[edwavhzglucjvxmgsgg]epqpcaxvrehicazmmuh",
  "daeglzxgmiwxdaqpyz[fimdbdfvicyzpjfn]koozdpltsbevtsczv",
  "unxxcskefbklzin[exbzklpzxjzzpjxyln]uofpzfdwwpjrdhjscje[mfoqccxeqmwyyplqhbt]zfcfykdzcwhwxcsh[ristchluucoxygdpi]sbugcboikesftqwheqp",
  "ecufazkhxkylpcmobav[wrbemrlvoofrtwntf]ptdlizuebpwioevxpf[chbfqrkcjebbduo]dilmrvqylmvohqp",
  "kkumxkzrdsnjywai[ozjtowejxntljbrcr]xtyoiwtdpfokixp[rkoclcnwfpnriiksczd]rqatydsnlnmcrcb",
  "mdpyhqnahpfbikzk[btdztwjrwxiieisg]vxpqvouzevpdkoll[vvilnegvewafgxa]pcjidyijcralzqk[zwtfffgirjowknwwese]hgqlkzwjupkdvfrzzcj",
  "fahdvbtntdgqjvh[pdoggrlnecijiksmve]nhsntnlvyhuvsenx[ipwpficjdnwtipai]nruupuriifefivyqb",
  "kigatksrmulhgrtwjm[ywmxpexpsfjhbahcs]krddojqiacrnjrf[edumzuxzoksodalzq]tfitikodwcrkwray",
  "xegklwarscdzgpdjeu[hmggqfqwtjucpfspl]lvpsoivszysfzhzmxs",
  "imtwqlmkxxvwbkgsmc[ctcfopbmrhrbcfcbml]gdtctndyvulgktt[xzrquuqnhrrhpxrckmd]kzkwjljliajsgyxeikk",
  "nvkypqsxeyqhxyzyrpm[igocqwislsfvumvq]tzpmguxizgyxrzzsq",
  "syrhfbzqoqwrichcrun[pdeuzyxyvcgkldoenb]geewglcbxmefzlbkkj[kxuokilqshkaptrw]toaobyvdlvdgnitcu[exjphchushkkobizjai]reenlqeopvbwcmaln",
  "jqtvxwgecohygvtzrh[kltczuddrtyoutqra]pfwoawzafdlctiltunm",
  "mouiuddigaduzsvus[acxshspmfxvoyay]nitnjwpwwathfakiyph[tbkldogfppuonhsry]gexsyholslsxmgwvv[swfaybgwyeobgwhnu]jwzjkdrclbyczypq",
  "cpebveqndxgdhtz[flfznkzzbqwhpgl]hktvcgcwlhtfruxsloi",
  "ffgspkyrfvhtexczaob[mztlqxeuzyedbtw]jbhdcmuvllpcinbcpxh[sckyvkmigugzjbp]ttenkjjamoklwyjsft",
  "tgjagrtnqgrirzw[btjynhsqksxanbji]xwsnrwcrbievmye[utollheolalgelda]htlcngxpsepkmcfz",
  "qxtyhpyefybzipnmus[mciiexdmkeasfbxra]oqlgeenrolbonflho",
  "aoybuihqxfehykuez[uustilevdpgqopzo]lwdfahgpjryfgrm[ejssinzljipzxpe]dewoclpkozotbohqvbz[esrbwpowlbjvpzi]ukavmtruyovhhxakwua",
  "gjujokzwaqygfept[gqyojihlkuhsmsri]amkiwxhofheccfyqj[thoyejynedhmhogmxg]jpuhjdgihhbpkvydh[vjbprsrvmryyvyaevjw]qtmqmopqkfclfsj",
  "jfhtwlnopuvkugnjrd[lkwtqnrezlqntdhdgx]yyytctmlljrovczwb[hgtbcrxmgeaddrgk]tprtdqidvnruiomol",
  "ghksqphnddcajstodb[bqnjaixrnutobpdhscd]lttazrbioyzoiphnlts[zapxwlzmmewjobpvs]pitprkhwnqcedzsjdc[wjbgxldhklzixgsl]emdgeroarkmwjxso",
  "afrxfcprpqwxrmto[bqorevdlkjfdfka]qrxoacdogacnadlrcsm",
  "tfcjtyckixutxnljjya[oljkatclkoobtfhap]qoinpkcktdkexfwjiy",
  "dfkaidkpwfpmqdv[pxhwcykgskzzaudtltm]xyqnnltwoleqbzpiaee[ferokmqgoysnbclpd]veajuiqlqqnstoctet",
  "fgmnqrpodcaranfmbt[wptmtwaryldpngwgnjg]szbskeaaxdgwqvipb[zlugodzertvgxcgq]lrcouenrktbovbjjf[aynqeacvcvzdmwoe]svjgscvmupzlegnsgc",
  "xwsheeyymfmnlkhxj[xzomdfpyvkwvpfjrmz]pnbhhcsszvekvar[ucezsjefyrzefyoymce]ebprylaeidqoyozsxi[btknvutwzjnwmjzso]pkliinauewvzwvyawyv",
  "xnarjofqyhxdvkud[bslkgxtzajqytaz]onzjihhffmysppgxlj[qfpouuvpvjtemqmq]erpqgcqgpwluzuehtx[jypvkdidigmplmpbgy]kpzmqmxmrgbyzgxc",
  "ryyryjkprijszchqy[zdgtzppzrdfmkpzjg]ychgvarykmsmqhtsb",
  "kgjgdawmyfmxhaus[cdxgagqqvbrsmvzap]rjuexbyyzcxhsswsoqv[lailkaxguuxoayqv]bwtndikgntoguyp[lcyxvqudtflrqhrb]mskhhkmsmhorjdpf",
  "qysmntiwqmbsgko[prskbvrfcijjethofdp]taqkwwqzxhijajvzo[enepmsgesexuundf]bbrvyrovkukwcxhsym[natjripodcmajacrc]fqfnsxzprzoojnvyaw",
  "hobguanuffxzekzw[mseckmgscmgfxcjz]mhccgubjgxnvmgko[tdarfkifxztlwvisol]fsutzhrmpmxvirfti[pddqjdyfvorpdro]pmpsfzdctmvytnlrh",
  "mdiqmxjnzhsgujo[wksbkcudxawzmfr]qceasnwmycgnveetlx[vwvaosihsjbqbmcr]bypuqcrfcdeaaldwu",
  "ovdvdprjapjiefncm[dvqoiyjaydsupvtmiyt]oltbiazybfkhhaaacv[cyhfvsskldlwxlqjyx]delgxiylsuowrzamh",
  "yjiryosycewxyrxg[nyoczmxyfiicmykfv]uqeiryyybjmghixqini[sashejhcvruwauds]ufexeyhnugniuofxmmx[vjhhwpsuookrmyhdxp]nieddoadgwmiplia",
  "lqrnkazcbhbexte[bnxranuifukbankpo]tqunuiwdxwrdiuh[paumbhbhkvfkmupwy]lwkqdetqtyohnzd",
  "tdtfthnjjadrndxq[hwqdeuvveurncef]mczzyyofnhltxiei",
  "qlowsptvrxrueekycfa[yxwuffiijworupwhno]zkfnpetpqefkfcs[dqwhawaqltfvziov]cutlrscpcirlcjfapt[wpdkjpvmesswvsnbtpd]bbajlhciscmnhfsii",
  "wilpitjkfupbqezi[bdaompdzmmyknlca]nlompvgdeymwaiuq[hmfozkmoamxyhfao]ixnnsibxkmudjgyd[qbnadnzuuwikpcmhbzy]xfgtylkbyvssmtop",
  "lwgjwtzazcgpnfavmy[jifsuqnukjrwbpwddok]zalkmdcslsxtistwbiv",
  "cyxujqyfliotqmwfut[zpqjuhzbdaapyzvbain]tmkozhzqleucxejkini[sptzongkwfjdsonpr]ushgccbgoftdokwwd",
  "lviuntnhalsgvxixxv[pbctyuzbyfmtqzgw]ykejqvcysdevpmbu[pqyhpzthpbgpwrag]mlnonegtxyodsiapd",
  "yrlpfoavswbupiqii[ybcezzktcvpqkowmsq]taviprpfrsqlvabqbf[xeroiipxrvplagovqiu]sqbqfsteqczqtfhod",
  "bofwfkdrycakcslmxa[ymwnlofshzeiuyf]rjyhyydazplcaewud[zlitzcxkukcxnfywi]mxlsdyyvbvyynou[sidqxhgzplihuxn]phatywidfifquavy",
  "wadffgburnbnada[nqgqzzzhrkaarqrwh]uzrjanxgtreujcn",
  "ihrhhesycprwiwual[yyrdyfzepouxqyrlk]uvzimakbczpotrpjasv",
  "kbcjuwfkgsfrjkkfqgn[ccmfyplfmdqrcrxac]sdyniggtukwhlnu[xacensrnkxvuqsc]gpqnovcxqtrdpynkvvx[hnpswxfpifmwsgvqndj]dlvqkomoeibqfibk",
  "bsrmmwdjtbmifizqk[qliqvifyzkzoxcqqic]vbvgpxqqknqcwzkrn[oqbdmkgfygbpbrch]dexquersnbbnrfbykzn",
  "lfjeqzbvwcbsehrt[psphljekmgdcjtamh]uyznvbtxbemlqnktpd[phehqwwnxnhdtxkmspc]auywvzlsnxtqnzowcp",
  "sxibxibbupqxqivorin[nfccynkdnakymddw]vcslcjioymxjohkb[qucwdkuauehwhfoloqi]ddaiswnscafnhgb[ydarqvqljmblkmp]ftzscnvflgsunubwtif",
  "zuuasklsnwmqupaw[ysfizskxogkwvnlgkcb]tvyrdsxzzyvpindlehm",
  "vmrcpgmkfpxdkghis[rixvrkdxiwbmixn]uephwicafxpcpehg",
  "nbnhbqdelgytnqe[goskreybukhvhsgdcbx]lwddmzcusaodjzpf[pgymgqupiirkqzfwknx]rpgcmvcruguruffly",
  "oyvdusistlvzpomqe[brtzgoqefdmboenhop]tqcutsirzzunwoaq",
  "jjuotclzibtavkzx[vqvshcibbxzyhvu]wjhyumrjhdqemeshv",
  "bcnpxivafvdefifzj[lfapqhcotbsutqjqbhh]ppjudzqwffwepiemc",
  "kjddyefqpxvcbvfxxs[oinvoibzkmrysbgj]iqbkyccngkudaejr[tjjqfphtimahnkb]ozthettdycmxsqxj",
  "mcrpevqaseisqhdrevd[smjfowmcqwvbqrv]cempcughobiiryatd",
  "qkzttiqextacfieitd[kelvmnatqobyjqf]ccdmwrlylyfmcvt",
  "vqckigtqcsddsoewsq[vtxamvabaonbabpc]zscopqybdoakndga",
  "hblsfvdojdrxkjpwowm[siwrvboohhnotwdcep]tjhvghlkvrwqgktafgr[emqpomvoastqfqce]bxzsxxgzezwfsngnkz",
  "iouaylonyrxoskfje[voezgcpiasdhtsq]sorttwrodrxdnejqzo",
  "irnvncclsmcrbiktr[ciyznwkihguinvhywvb]prwhwbnohfybmmbjzka",
  "qzpfhoecmztegzywq[tqqpukxnxbskylczl]ciwlgrrwgodqnglzw[qplabdfwomytgfsfbv]sltffwbwgeddtitm[cfzfqddnlxawaoaap]gspisasifwarvvt",
  "rjkyvigqdlepzwgyclv[dwqafgzkyymiipci]twsismamrfpnjst[rlchxfbourvhama]ygxrhhcxeuutcid",
  "tezzawihxstreji[ryyyiihnvkuygbjpvq]ciomciywmluynivwjut",
  "bsjyylevtaktcxam[bncztrxqlfakpfqgoy]wuvzzgzgiddyyqrw[qtghugatfpxunwnhpii]zqbpircvumjiiks[gnuleoxlqdkdguwv]onypjlfgzgqxvprxsuj",
  "wrvswkvpqqcvoowruf[uiahxxhyztuauikbu]qzalmaeslqqektieecl[kshvsnuqtjbghuoqh]ujrwhbvxevfbptu[kxazrrmqmidmbkxkgq]gwdzewqhcpplqkmma",
  "emoazbfkabamdtkfey[keoimmtpjagtgssf]nqzefxzynnyyvudzpnt[jebvrifmfdqltwhbvd]epxjckkvemcxtyvqq",
  "pkfmadzqgxlshzdp[nonenxatrklmaseoam]koeljknqsisitcmv[ohrkuwnobyxdceqhirr]knumpjvcvpbnbmu",
  "tsttnbzjcmacupvsrfq[vuijcfwtbazghdeertd]thamxkyzrunemox[vldldkqzfgitrligsu]nwkzguyjfucbqzx[bdebiggnmtbzfwwbp]mzcsqkfnjnhvycsgnkn",
  "qxaodpfaefcnhlnn[vsypxhqcicdmoocbe]hdfuyzghjhxembgz[vtepqqancrkxhonb]vlipdqrjeulwzaway",
  "cptmnjmfnbbhlazu[rtmuowxasnhrwxswp]sjvaajplmjdlqqzda[ukimlknybwhjudfy]ftjwoddfsjgqckopdl",
  "mtfcgbffyxdtzxz[mjqktuwzfpmepeab]ssipgzzejsrhshyisr[dafxmsnutjkzwzpo]cgkeykqyfnsywhnwt",
  "vwhgpxmfnkwqttbvbz[mdgulfcbhnjenvifsy]kxxumizqwujpppgqs[saryugrlovhecmrc]azkdjatugljprpgy",
  "wielbtdxgbyjmkqkio[sfjnxdnmpvbpsfgid]bbjxcgcakevtcazf[fojcmnfyzqsiyqquyh]vmdhhaqzrksoerhiq",
  "adhncvqqpqeqgmwjbia[xlidsjhuzlskbqxkx]mvxpqpcjuadbmoij[stkcqrhsryvqpcr]exusjcncbaikqdfd",
  "lzxbtbffbmmxqdhsbo[clrpneqbluloxffr]sgwppyuvdorvjajv[qfezanwfiszmihbvkbz]pobnfqmwbezttlek",
  "wfvrlnfyljuptwxta[ytukfqukilfljusejuu]slpphcxmovqwzit[zybrjznxpsdpehqeyii]jaxnpnmzfklmythahyw[rbrozvunbrbrkiy]lkuxjzjffpekkrbj",
  "zovaomjqvnyvunmkco[yeszptqgbroolbncmeo]xqyoynlayittlzlw[ihajbvjwpypqeiv]absuxrcpxtihgkhhady[umljkijypyihzbjbny]rpnqthugxmhalbzlk",
  "ertvmsqbjpqbwhch[xjdonkqbszbrnlqup]txhqgfrgischczp",
  "sdnlpmhbbjapguaopxl[gbecvtukvfzufgxvvy]glheebvfbqpkyvgbpud[mkjtffwotsszpfzlafc]ymtlpzwiwxevcxljpm",
  "oyteiuekpqxioum[uaxawgzztstiheixvqw]hghqohrjhgonzzrmn",
  "mrhubunrviwvidf[jpzmyfpmychpfnuhxjj]rnxqhsrsyjjtpwerve[dxqxogllyzpaqcr]zmwuxafkeoghnxpt[fxkmunhkrdbnnde]gyzehvdxcjykyubmiwd",
  "kiwmutrfztfawjeowmn[sxkvqagonyygkfhen]dbbwdocyvrgxjkuci",
  "sgvqpvmtfblplnpzyuy[idjkuqvktoebgicnx]piuxpflclssenplp",
  "qbfyvgzrojspwjsub[ywadzzbjxzdgjkbxs]jkfvjwfthzgzjokwlr[wsrrtyoiitzppofffo]rtmvodbelsmbxlrqchg",
  "bylwlwxbttbhfax[dozygknmrwwkzqteitq]tgeihtuahfdnjkczda",
  "nikkqybfgxkifucf[kixtedidwliujhgiwr]nraeuiwzymvwkdnivrs[csdjawwfwrzunsgtyw]lgcpnhkqnflwdmg[bedgiymlbqyuupr]wcthcpyxvnymeql",
  "wxyhjalrdeljrlocn[rhaoziycqfhzhmnm]yzhzuwpfldfusdmkaz",
  "ehxrrmbkshylynebcg[jfrepavhfzsecfh]tpptnnyhxyjhsigluq",
  "aiyjdqpkneerjpwonfu[sxuxmnkznrmtknmkat]wkbigpudsxnjqfgvaiv[wisehmwxxftdlbf]ubhetpiqzkjzmds[errmmzskzssiqoz]jdpmwzygeladafqx",
  "zyngstcgeikavayyzpd[wgwtcabcoqqmvbhpq]ufydtwxoxbrimggiv[iocchzfupkqlbpzpjwt]kfaigdnocfaukhspg[mfxpnlygaknfuchum]wtmgqplmqetmncyob",
  "ltlbjlmkdwgavozzcqz[iwtqhntoinuriwwb]etltqnbzmwthplk[dhkmhtkoapaazvepx]acnoookzqrtlztz",
  "nopkugxptazlbmcajr[rdoginykdclpxgoj]jegexoipscdcdfkwx[svuspiwvcqykxbbr]jovgrmjehijxvjuq",
  "yjiggydodzcxcxrz[bnisbakrcmnpyuevuv]rsarrthtmgakcxctic",
  "foprcykyrdkaild[kxscmuujcauomoh]cpivtascbxgnrqy",
  "zactfwbybdfwfiuupd[rlktwxtetrkuphq]uptfyssrgzgcacbygxt[oldjqxljbpaivzwujpb]iybymqjpykkabpw",
  "ucnuludtplhsqnnb[fxhhabbpbovvxny]hozfctrgdfzqgjpnep[fojhmkpgdtirtfvfx]yyeynnopoyxwyybm",
  "isapwwtyzmpxragq[sijazyzbqkjqdjmo]ttuayomtckxjxaz[genxwwmymgkirkhq]rgyhzvznaovrcvprjpq[hovmlvmyjgumzlhl]voxvbywpwexcuzxpsno",
  "maulsfmlfitpjolywea[sblcvaogiimnepne]taqgsqzscodedvrs[cjoepwrjdkrdhqvv]xdrwgvpvemarppvp[dafabtgtlkjqsic]oqigljqdqxmghqfy",
  "uftqobnbdbwvggyiiwg[mscmajmhfibsoca]htvplnjschpcvnux",
  "xqjpwgwegxsrzsgmlxe[sxadahrlnnstfgbiogb]ntuywjmtrdadommdyt",
  "pewiwfgcmhssqsm[kkghloyiorgkuztrvmv]ddsxzdcdhqoypcnybk[sotohuaxvamvmjhctnx]qkdfiqlqdztdefh",
  "wkeswfkouptenqugq[qslxjnudtygwkik]dzsatnmtturcsultm[fqtbsvjgjhwgkxacxzp]dxfbowsvuldkmqgh[tgqrrcazrpfzlegjg]mdqidmsiorgrjxyzpzy",
  "inbgvycqgeojjzswu[wxcvzpejzkkupllegmt]ibhuweanxkjkbawqgj[abanslhidcyututbtpo]vwybvbjekpvtjvrcijp[buudsrprqrmkwfolstw]geqgwrrqsfldpfkcujz",
  "stjynylglifzdbyo[lwzmcnjdrbazutpkbnl]fsgzcdpblzfewss[uowlvlcwrtafhsb]sbgztpaxjeezgnvnx",
  "sntpdgrmjexekpv[cjchkzxrrxzrtjbn]vpnhkcxiewzaday[cluwnqlomhhamsb]cpkgsbppknhsoqizwlc",
  "udvybmmzkkffkomo[flnwytsiqqniytsge]yxjepwrvjvmkwwutrvy[vomvggipfoukmgnfl]duofdmaunjiixqevht",
  "fovkfheixscbvhajch[difkpdeitffwltdz]kvegrertndyavvefx",
  "rroherwapuwkahsh[ybedcqnazvhzfvma]nsuhmhgajrxrsgow",
  "kgxqfsndcnkmmglcqul[qyjyywvnyivatqvm]hzaaidzvxlaoemdqvm",
  "oayaeoueibdddyvpnu[tetrismmtyhyftohddt]cyfnhbevjsgbucq[blwqhtzvaofqqresju]yhbsthyvztuxqik[dutmalqyaphkfmr]uilicgtscuvatvyfp",
  "xvhfzyxirnodbieql[qaikmitmhhqxvimba]wbhtrqwakdxupcz[myjtfumhavokndut]bqywvrdfkvehldp[trzmnorcqoojkiitgcp]wmnpkqbysrezktevcoe",
  "sllvtsyjwlketyept[yziodjdxonrfatdwcww]hoorswyycvrdymo[qokhrdclljmoblgovut]jdwgdlffbfdhljwzns",
  "utmzajefbijuwetwq[nmnapsdjrfnaiafijg]xtoqvihvwmjdxhpblln",
  "cygbxerigyfjfdvptdr[chmkiqsyszmvkxqlfq]wogqnldpowhrsmk[lcpqfevjnlwnfmsepvn]cjxeqamjxdcbzhx",
  "oyepdlsbxdtmwnbmf[maqmbczpyqcrzoclzw]awrxgoxebbetsxhj[ysoypilscrrrtcan]kezkiihykfbgdou[tiyjfegunfgodjf]iykokkdwueilzgljxb",
  "rhgzllbzkvthshna[szkhmsltityduecuzc]gwuvzgpbnurakgyyaq[omkluwfcvvuyldpztq]zshrunnhamvbbzin[eflqmmvukteyuhp]qmdmngkeqwzsknccsd",
  "wcuvdpicnupjywvewk[mjoeryankpevshtf]davxlzdyusehfsfkawr[cwmackcctquaztyla]jbltaaewsklsnmpn[oybbikzwuirmhnkkx]lbpzrenqvzefzhns",
  "vuhvlsdpdydamahy[hlnbqedhutubwjmkwdl]nktkpjovectntgugkx",
  "kuugwqpdbvhjlpjkfoc[gpktxozhcyhdtbxjk]mtcifyxfvpnrwjxqbdw[miwqlpuffhqkwuk]ahpdnclkirwframcvn[sfwndobmkhjvsprqvwt]kavvqavxfyzbwzvy",
  "tfjcennrnaefysxrxrx[unabefcchrppawryxc]ypyrssdxyiltwial[pnhrjfidsoxjwjci]vgjrofwzmcvfudy[towapvdaywpfaek]pgzoyputoaxuhns",
  "jnnerdnbryvdwnjyy[tdpgycqawofqvqnnxym]gsmrcuakbqkesqabtab[uzebidtbgsgykotpfmf]drozgtxhlilmbepm",
  "foiwppdowumqewrhc[djdtpwkucawlmtl]ewldenlgdkkjgwlp",
  "jxhndunvtbksjpzjby[wcvdieyraslcampprfq]jlkliwlsforjmieiw[weyuytvmdbsrdxkrnn]xrtoomuvuduwwfne[gcucrxpjgtgenzjja]razsfkjoqcygjxyrv",
  "guqesyexgmkjyubbo[vnjjzkobhlftajp]kduetulfrrqcgebbbn",
  "qgwjjeiyfubocaq[bugmxsrlonulkbmrpdb]nbgvwvcdtojkpumpzlg[gghtouqdyidvklfjlw]vjonoplowecexkjdbr",
  "asiaoukdoqvalcka[tpzjjulswtsuhtqramr]zlbbrhdrplxafblzya",
  "lcnkajvhwsvhizqwg[cnxtwmjqamsalifgj]rdhgolxbbspczdtrut",
  "lyiokvzoxhjpyii[dgwvlozunjzuqczfb]jhrrtergxpbnxsfuhaz[byeekuwewofrhdefsvb]vejhflqxbdllhwst[bzvournrpchcxdvc]ngktmjzfaqbjxkv",
  "rerwdpjfhupfcwlh[sslnjmztttljsele]qjalbdrudopkidse[hemmfmuizvfifjxd]jfwotkmqyfuskznbsl",
  "tqjgbmntwtgdldmalk[qknbcxthowjeuyvth]fqcrzfokygtechllcgs",
  "hviyscugedzroqni[kdrgzuqzgfbscybztau]clgdgwhotsomipsbq[yklgraedpxonoge]izrzfrudwqkxspnkexw[dlohkxyygnxwjkell]ewqlntyewnakgynpi",
  "sgqdkpgcrrotufaa[txrnubazdidvgrmud]zkchckyaloltsnc[vqkyktdnxzjsjsh]nasbrqemferoumssqe",
  "gyspddyofgnxqfwncvi[cdehphtldasqebj]yqsnhcnwvhwwzbyoz",
  "wjarbowzayfzllgzgr[fgrqmogusdxxijcusq]wwsfkdolbqpimtpllb[gcymfpaguksckikij]zbchrhgpmgtcvbs[eudmlgjykxlnapcvixa]nubrhcgoifaqpan",
  "msmniqwaztgdccn[hxahjealmdbcmjoe]mrhsuvgkysymbaepdr[ygzbsqklpjtdawtzq]tlckkoeltawttppobgd",
  "ajixvlfequoxtovgd[ebdxrmpaqmqpalw]kswlscqwyuxlriw[aqmckoarkeatsfnibrq]wzxcyogdfgvzlaytf",
  "zlvflzexkyzssgtnovb[esowqoisjeuqjlr]thafqubxurfngllc",
  "gwhagvhgcgugtzge[oegdxnmfzveaicxosv]ppmefualjnkghwnlqh",
  "wnrocqwtmzexrhchr[vouiwbongbctkwmyn]fsvmixiqdlxhzhg[kvkpsplsgehzxovbet]zorclgkevhgpasjg[muzpoqtpttxfvzmkkot]obflzawnmbapyhfa",
  "kgcayhhqrbdtdlqh[qwuuhhpqogpggvh]gkhvgwqzdkvirouoxkf[rxvjteztalrvatd]wbtfocwxiothpwgeqi",
  "cwzcddzttiwffkdywxi[cgerpvsocbpktucknnz]gfcjxghzmyvpwtfsc",
  "gdvamuuaqntboejr[vauqojcmrrdfxmcxphd]wgyxmrdgzrpthierrl[fhqgybuyxyehxofymy]lwsvqqnlctzephitx[kbrdugqwvmufkpar]xxugnpnvouqqnrx",
  "icuxovmexhvxcxoxxxl[vorteandnfhmlcjgdn]dnderimuptlmyeaidz[ngjjdxjeqjcxoyaksty]pccoflswezkgiblbj",
  "qxjooaefitutrxe[ibkioqojrbmgkxp]rfmigzuszsxrxkutu",
  "czpqvgtbdmlrnpaa[akdjfdltyohxhvvjx]zggdrvihiabdqqflhfw[hifmsklrcyxeaobll]mikzlucjcjsenuy[cjahnfhynwtgbookxrq]diphlpbzthnltri",
  "ekjkjgeqmtcyvzdtrkx[asoaxjekjkjfqkvuk]oyvvwomlasdiibeagw[djscotiumstgsczfd]cntrhytcawjicaljxzh",
  "gdjsvclzegfpiudy[kuialvkoonpvfaibuz]ewjzmehtmmquwwzvk[vrkjncicnfjbbfkrpx]vnuubnrxomcwmamkpct[qpaeoahxkfvmfpdip]jzrszzszgghsxztmcmy",
  "zruphwrwvppbkzst[zkusncdjcdbawofyyvl]llrfrvbtgirpzzl[hyhwiaipofyhyfrulp]zyekckfubbagmwlrha[nsktkhimgwcvigbrmst]mpiwofozrlnvalxckw",
  "zzjhvtjhbezyvhxhfw[dxdsywktlpkuycd]bmsamzdtvtvxepbcz",
  "treaudzibijtjnmq[cgxqaklatukozmzq]hlwmvdnizgpnhwl",
  "mqezprvnrzyqfarfw[ihygxefbfuaoccp]hnjlxggnqzxaegawl[llgmqmampuafmcnp]xxptichzibwhoiihzgf",
  "qztlqpncmclzwrv[azwcwcygchqztkkexzs]ouodbbhimwdbpfi[kkntvvlktnkpomznqdn]iqiqejealitdlpqqnx[tgdzjegkujajxwfii]weywbtwheajwnna",
  "ljrzbykrluepwvoes[xrwsnsgikiqvsxdd]yuhrifwlgmcuxqbraek[rpbkrskvlpoayewgff]fmnlvxcqqbnsnojvf",
  "ycdpujzjbgugfnwt[ouufszjzorqdtfj]nowkbjixmqvjcejxp",
  "ztdbcvekbnyvdvyvr[vdvduuymcwlnnppvso]spulucgcofihuukv[jgabuhwdmcmpfeo]bdvknjrrvdbjkjffdfj",
  "hzoahhmonoufsfxdpih[vuuixgrrxywhjld]gkrrwdhxpsepzwk",
  "bbzsfopffjdwzfnv[dnaqvqdssmivogq]plpsjkwtznrskpd[xhoqxzvhgpccvnz]sofdxcqfzblitnrb",
  "xiauwhnpelbuugi[afqarwlxnkwfnhzjp]najmzybfvbpwooh[ajcexheglqfxihyu]xlsprjjnzevdbqrn[tyfwmhwthdmwhwpmu]kgmtbphozddhwdw",
  "gzcnnhpwgpjnfzgfw[zgkirhvppvoylutkvjq]ucyrfokvobspmnjt[wfxvyekwtgyrjazoty]woxeyfgynnidiha[mpwsynxrlazgkvjntmh]vzxzepuobxblxctfpej",
  "nlytnqmigvqvpbgbauf[inrnsedsnnjvdzjszmw]vcifamxgszurooanjfr[gaphtqpffqralzcgbv]dptdovktxhjikfdv[ubkwpbzpzuwihmxnzm]pevdtdliqtggijcf",
  "zxvonidsvpgphmhr[mhbsudzajuxhttcm]hcsoydmzzgogzezak[ijftgvsrdcgkqpqraij]tkgaoitptmbiyksayqh[tzuiesnjooqtdczlqs]hpnyiwtnnuyzcboz",
  "tkukapajtvscwkefms[oowuwkfaydmykjkfvbi]hsoriuofejrnlfmqjkj[frifmvonufnpzhjwhhd]arhdbvpapsihwviz",
  "ntvgvykzwgoquidroj[lcqucmwilkqjsbwcs]tulbwkysatauntfu",
  "hxbinqyxtqhefooh[ibanydelhcozabjnqc]pnsbqgqkiwicggocgf",
  "ssvkqvkdlpquvghoi[jzzetcjgeznfyicrlq]liwpycemfhvjpajvg[fqzlohlsfbxprhyvzig]iwheusqbzehfjwtf[vfluxzcxfshdbdnny]rcdopjqrwyfjbtqai",
  "caoqwxuitvklxmvg[wskfazktopprlkipqt]vntrdteellyegmo[fznakqfovwwzxeuhvem]ojbyctdfyypuevhkflu[fxuegckzowtnvejyq]nijwbnagfukkszsdl",
  "ghmucixpcgdsonxi[yjpciammneojabzrp]qwqjglgcseljdqvel",
  "ohciwhgenvbswagyud[cieicbhqydwgwewrfdu]gnbopkukqoflspedhhe",
  "vamuarfppicsdmsogk[xpmxqcmhugccingf]qpbyfrqvjvfnlinn",
  "zrnivlsdqdeqkgymwu[illdsybmflayrxtngu]uruawbponhxvyas",
  "fhmzitfsniehmerm[bezdtkljxqlhstjck]exjdstppsuyghwseugm",
  "hyqzxrbheoqwmisy[rubakhmqdcorgjpx]birkmisawxzeytku[jewmmwznwytncxw]pfxvhuolhuedeev[wefmkwvtionjscrl]oklfaaljgaooigc",
  "hilskaaxnbnrmoqhzux[kuknmviactstalwe]bwrhcbvnmvovmqdt[gtvlzpimdqosigf]zkzfxbttmbysoctrtbk[tcdudnhsttsfkssftxr]xyfvfkujcwdwwln",
  "jujffztughicebmfuvu[hwrpwlvuvtzwjjjoe]nfifhapjapjuaae",
  "hoaftvjjuyvnpfezpvv[pwzfuvmbmbqqkwfjpq]lkzcvuhbsqykpqymif[jahkqqkznlpzqsu]asjukfznsenxrcmjs",
  "sssbesvmdhmdwhooya[qrltfuuueeqvmvj]vsnbejsnqrpqhcvg[kjxlguvncebploca]zqnpyfgcsknhrgno",
  "swkybkjpdmiqotjkf[jcwptqahkavkkviu]tvjfwkfwqranifcwf[vrkaivyqaknvgjuzo]iafelegowdtnyrtwru[ysjzmpajwjutrtg]rfwylacpirrbgvkd",
  "uwfuggjyomqpmoli[xndzkatelmhqwnijrq]lwflnzvgebathdmqyqj[okjbmcshfpkaixovd]skkdwlaiphqexjp",
  "zdtojvknsphpftcayf[wjqudlhsrskatuklg]ygfrldlmeebhilxjfa",
  "gixsmfxngwipdhdbz[uejysxptpjimrbhp]bauyddrqfjnasfym[nwwqdetjxdwkwmx]ckqjpbvnljyqejhuoke",
  "blpxxldsiuwejnez[zsdvxeswhpqkvvmvtzu]jmvoockkzyirpvu[gjpirotzoddboqd]tulxjddgpjgydggglr[jhtlvkeepnicmcma]pglhvmqipvonpxd",
  "fbsgvbwdutppojeq[izzxusemqgnqpgp]oybbcjugtoexouo",
  "dhauwstsdidnqccepn[ddkhyuhbeqlereati]sycrerqwbuoosjlj",
  "jxtbmrughctortcbpi[khwyrkwmwlamerx]ioayegbphslinkaeug[xuxukushtweybttpf]oabuwdwuzqvphdlixs[uwonzwzacntxcah]hvzhjdwdlqskjvyyve",
  "jrzsmnbvfonvnftgwmc[tzrdlnrtaqyaraezgjz]csvgheuvujlbjcfoskn[onmauwuypminmjtnkv]olhtrxghnnzapxi[cpgxkxfcwyouxpq]hngvpwicwnckjgtjgi",
  "etnscjeuzromtjkzmsu[prtmiabojsklvwwskes]gixxjsxmlgzdkkacb[ztwcptjvtigsuondp]qcuytbfynfbajryrf[qulrmkkcfxctpmii]sughhnalyvhojxg",
  "tedzowjwzitqehur[wfircztxvqclegxbew]ftpzadwkryhjumfayt[piwvpnlapytasvmbjf]ppmbvrdetznijzvlrp[xehbipoficpltfplgh]acozgfbjdgmsshzkgr",
  "dlvmyrhxoejphoor[najlnayamirtaar]xmtexfqjxithgwrdxl[skcbjoyyxaqkfkmzavh]wcarbzykjsrloccyvu",
  "oondnfjakoigwxw[chohdpjjpbkarmjql]xweoektkfvoglcqpztu[wikgthprxlnilkxx]ybkynmacaohoyzzc",
  "smxkdueequkgisqlhem[jxdbcrrusleprnltn]xflafmfhyluuszvu[uzdetbcyjnzyodxzhv]zrzbbqitihwzwumfvaa",
  "djyuacvohtkldqxd[evneypncspdldospro]ssayrxnakpgupsusk[jkojeqjfbuucqcaso]pfrejhpgozvwpko",
  "bqgjfwtnixknytixpa[fjjscshakaaydfhcnbe]yubofzmpxthbrpfkg",
  "tiyzslixkcdbelkbza[kmbyphrjnutuuebj]qxshrejwpfgbdklmwsz[ntbxleixobbrbrzifb]wfcgbukntxsqfcspc",
  "bwqwbynbrhbvjhfliw[uawsxlciekuabphsv]ispbnduaqytzohes[vzdbljjnpntqjsrwznn]eajymxjnddgcvfjbtld[wpuasgxiuserolc]ibvniwgxuysrwruhex",
  "xocemwjggcenxzp[rackjvhflijrlupvtc]dymqfxxcqbpqptkmi",
  "nuglpeyxezfyvwjn[kupfdqccyoioclbpsd]eqzvsbaqpqwfvcwf[fnpbfxkozqmaddsy]uetogipakptnmtfotb",
  "ortrinslgqsfjzlliuu[emywxtvnanhnpkvvg]kdlxnezdgorsmurd",
  "ocphvybkiygodpkilnn[xzccgywhmmbijsdwhac]czhftgsxlmkgwdq[yvdjpfyxkkhqdrqyuu]vlxblzbfxwjhedi",
  "fwgntwhhqemigcwhgbf[lkrhwjctkmtlzzohw]auxqczvxxjiaahn[nssbhwsslkxbztqtqve]oteohyaibqryroh",
  "vzbipwqbewvdthqtf[qmrmrjzlxisqihbbvts]vvaooemirevkmrirwlz[zfhirifbdjdqwormuyx]ezwdrriloynpvbznjxp[dmsvxigyolvlfmwshq]jugonuusmeuiqbfimp",
  "geurvdykfmbwgbe[illdjnpnfgodvqato]gmhsrfwsrybwugziyaj[oipyfaovfujwkzs]wvbojxlhffyquhbpc[tfhtztawlmyanzy]eexqbfnlgahfpgdbyfa",
  "ptuwqnoyakedcllv[jxhbzgwhjkrihqzxj]npzabseqdpzegpxkoq[qyikkylgrzrcbucxb]awkfyawxjchmnnsnxhe",
  "pmfxjpcflryhzywdx[yrzzkvweeyrywjvryr]xjsgrxggxetihbhiy[vrrgrojjtbwngsz]wibtryrkfmduzjzadwe",
  "zleuvnbmdipscuvigke[uiiwjhfpvyjsdhayasa]bdcdjxddimyrxqolz[sfcuxrctuzqgorqws]dcbnilgerqkwbkvubq[hbitiqnnefgghxmzqw]vugmcgmblbulzlivl",
  "mgqeldfuyqglttqr[myadzjvujzycgoilzjh]hoarhnhveplbxdmaijj[jtkmbcxcnuxrfddo]wkglpnzjkkxnkqjgegu[anhnvqbxsetbgeciy]bqoozexgihknoknom",
  "clmyxnxztlweimgaaju[jficumrbrophlcwx]qwjszbyhxrtaonhue",
  "oijrdhlfyznnomv[bplprqvjwvtbwtybif]lbavepoadjiwjzi[nozozxjjbejgjmsea]lpltcnpzcfqwsvnlk",
  "tngruwsdxtvbotyidjo[sgckbekmsvavvtewl]ceyngmkezxyfoowr[fawyaiukzbacnbaq]tpzvmacmnqbdhvzx",
  "xhbcyhmxevpielgqbo[xluwzmtlsmlahvdtuv]wehnosxhxsapsjotss",
  "vpxnbfywqgkhkfouy[opmbxtcbcgsyjof]ebiioytnwtrnkciaozw[omxvxtmcchdcusuv]egwnqrgrdfimgizdrvz[nlvhbqqxzlvfrfbgit]osskgxbukvdradg",
  "kihpdpryhiqvyiyhahj[wnxsxoixqtimeqqkx]dpdekkbhuhthitmt",
  "ynhyxpznqbfomlub[biyctwmvlrmrlgqtdki]tbtejwoxblnrrfgmlx",
  "dhuwedgtkneskems[fjyujmoxktiwqppabjb]btwxcjwscodvirbfnpb[ztygbnnjwupdxtjol]amchcuzuzrcvmngg[wlftvlgjgtzqpks]ubkvinsotwufdpkoptq",
  "isvlweuogxwmhgg[teigqswnorucobgj]emgxlktaoglxlbtlqwq[xivrqfkveiactxkikr]zgwbdstdvmefiynndu[mmuvtgelewrirlvwrv]pldubivggkezktggal",
  "rxcglhwavdjuwyp[gsinkojmpqlphvuzpx]nzxdsdvhlauatbakxuy",
  "fiqyxwsqisvdlxyxfuy[ixgpfrctptivqikehr]wuorawyhwgnmqwntc[iqdsjcvwauvmxalxirl]paguevujnywqdjvw[jyshygpggqawdangotd]awwtzxiyinnijqvmx",
  "kapgynkcbzgepjck[kbvltihwmflqgara]qwuusdtopbywpmlf[sjhotpfywscqlewt]xptgyzunmveqgeecpml[zpqqeheaumssosu]todwwrfjtmccfcjfx",
  "txgxsobxzibqkkd[unlkzvmoafgmpodo]otrgdnmdodgjgrqcwdr",
  "vguanmlfujghpkgfap[iejfceiwdykzvirzcdo]awshuvxjojlmkiehj",
  "xdulvgkeauimtrsbdet[yervsefhxoamban]hktaytyraexgwtj",
  "lkdcmwcsmrwiggh[glkskoislssvasxty]zdajgpdhmtolpsv",
  "kjelcgecxvmwotlki[ottbolqfinmhnspch]rgkjlqtpozxcspxil[qeehsousujruyux]wxvooazmjmvvfojojec[micsaorlrwjivzzb]yxutyxciounkmborsu",
  "ghohebcqxxmbxdrk[jgaqgdpouryquoyzan]pqrideakktpyibzq[ptrmrjtnprnncqtjy]opbnmyrrjyewcjkcit",
  "gvuiaaqdmtzwqofzmh[gckryaeuohxqvudj]ihytgrwmztafedg[whjmiawnsxqrsdz]htlcwqmstmvhzqv",
  "zlqmpwruzwiwgxludn[wobofyuoxbaiffzripg]jzabrxpzjwixmxjwxps[numxfazcsjarkqiween]buetqrsimzcbtgzhzsf[wrqfmmbvuiqkwvp]zbrepqhzhdunnrn",
  "ueayzrftvviieopw[qofbnikacyusqrrbv]atuxfxvlixxwcvude",
  "deoydzpabwnaqtfxd[nllutgtjllzkatsq]xgnonhnxienzyed[ezrkioawmvehitxwjhf]vuogdpznmzfjgzpr",
  "ulhyjalvebkjghczj[jvzavwgzjjdeldtdm]ldrwphcajtjuvio[tttnnxqawwwnbuka]mtffpzrcrdxageky",
  "ernvupmfqenwbtcyn[awkenxigbfqhsill]fkdiahjzszftqvxlli[ybjbppmoizfneypxg]obejbjeeowjpdbjybyt[sxjkmqjclyofzwqn]yqwmlphtetbiibgdz",
  "uusbgnnrbtwcrmje[qqmeirvvpnnmzbutfzi]ifaxaczresnptkymnyz",
  "guxrbjipauqugqrzpmu[hzrdbmzdyhsoohkvtu]grkzmmnwasbhrxdt[btsoujquqpeybyj]wfhwixifkmtwuudy",
  "seyavykxvclsfjl[qbflvoelkoqazcaqp]suxoaknbveehptfweqw[njwweoiyvtpfrbewz]inzavdrllmhnqymm[ejbzsuszmjrjuxcwqyu]vwkigjhfhjxrkfqfhl",
  "ecigvrkevkctjtxsik[cjkbyodpqrnvddgs]eyycslgcoywzoptanfq",
  "lzujpayxkxuzifwerb[gdeojymohresgorrdo]pdqyxzcqvdteylrat",
  "kpmlpmrrkrzarytgt[nzptfiizwnqfofw]ckjcyzikqgkvirmmkgq[hjyganbtbybfgmh]zjhgccpfazxlimqd",
  "gphmvfooqfwvfphl[kmcdmmsvpfxpltjgb]vwppbihfhizacdfqnro[xaohlglhyfuwbjwp]qmxrirjuykjugpnstou[quvrgvmptdljfic]kzqhwwoxbwlymyq",
  "cbzuckwahcujzclqjkt[rrvunqrvwgwqvuttx]uzcrmsbtyolcnurkvq[qvabacizpifnonevh]izrmkzwxdlxipeh",
  "mflfucxwxxhipfiku[bcvnwswfxcjawsvuari]swjjazksesdesowdlw",
  "boaidwfbvczpqoiqmik[epkybuiwtziyivfqz]dhiaxvpeouscmwlmo[mysihqwgzbxmjvyn]jabptqnqwnybvwzuz[ebkvybwaobahtacbg]dgdkvixfjhjzrmeqq",
  "ywwqdpptqnmurxjmbv[hdoboohawvopyoaeeaq]natawylxnkshbbsxfq[bbmuphyjdmwbmdiz]bedhnmdxtbttwzikzp",
  "vlmusuahzbkotcibg[hkwkvexeevaoozp]bbskojlwqqttxex",
  "eyhdwnisihrgwhjplh[okhrfhlponpohpw]irchnmtfshhetcaic[tpwxmbpteupylhtsc]svvugwhrttfdbux",
  "qfpnzhnlvqcoymdh[uemznlwotfulkdmlow]fydazmgbuseuyixcxlw[ftbljyxnhtegcte]onriyxoqdjmmmfx[xntscxcggogfopwmoz]milailymauobysd",
  "pmqvaceyhyxmmeddir[dehpytembcpfxigmnlu]bmwxoulpinsgveup",
  "vpalydmfqaofuiypo[majdgpdckfvlxzgoaq]cbzngzjisqwehlimiw[iuimnfesszsbhrrq]ecarhrpuhbomwwyuku",
  "ugcydmnwetdxgzyfeow[llvqrxgpfsftcdfxgh]kftfuzuwbqcpzsoh",
  "bpczqezcnoqvczgmh[nwccnhsnwvpognecx]ythyfnkiqrycvtbimq[bjobvdwyrguwqhttg]djwhysheqweyafev",
  "iroadbrdxogtrqwlwl[jyyyypxlscoqbhmc]ycbqpblnywlwcxayci",
  "btfomssmpctxzpuq[bjygbuyfbbclevanxq]hplsxnnqunfvrnw",
  "wcwvezxhwrriibechyi[rlezqecppmovbfuhjqw]ehlvbhfehghzritbny[tlzwzqzfuzvbrlcr]raqtyexpwqzqshe",
  "fmcglnrqgieiagqnbb[ktnvufeyhtmgkdihk]srtoabweoozjcqlkkho[uzlwyxdosrzhrdwcvww]duomwhxgubjsayfzuu[geexrutxzvuatsznfqj]nkgrxdeuygvkdpbbw",
  "ewoiahwaveddcxj[mniclhoatnmnrquglyh]dbwmwybqiruuenfp[igwzdmdbsalfszv]xpfgwkrpyqmednout[jvyzppslynsgrrpl]jbmdcxayjlxjhtp",
  "rhwjxkxylgccctkw[xndyqfzclalsdaw]nvfuwsmlchhcspbcdlo[oyvnrjvpdmupwam]owfizytfvusumwjgcoo[szbgohpwjxlrehkig]zcrmjurxljhzfveqydn",
  "nvbogneenunwabmunu[augsotpjbgmeynmk]wutlylrqmtdcywpj",
  "ehaatfsreuyokmqvhx[xdkadlwltyyyqau]ygdgomdgdpvtydh[wqiklcudpmzsytnyf]nxsmhdqqokmigemys[qmhrzoisukkqamkfvlh]wpulrukjkuhwejxppr",
  "mjtnnkoezanignra[ihuxiejzsefokchv]syikbrdxxbekxanohgc[cczlwiuxwhgwfxzx]jhwjydqwralxhuxs",
  "xxnvdededqeczjjxjr[efxsqkksautmcljbt]bzfukwsdqtczdedav[prxheqwbidxrwzc]znwcgymybbcvgiujqkr",
  "mzkvvanvczknijxnhq[fioykiipxbnpfjjp]yhqwqdxeqivoqkrx[lcqyuagpuareewpokct]dmfocogydcmynum[beqttskllywcmmk]rfshaoteqtzgrlxgvo",
  "qbtaldekaxgzyzn[jdpcewsupmbasxodft]xwbmxkbklfmhbgf",
  "fzpufmzsrjgzrsp[nqnxlsroxtfgchagu]idbhdqqdawkyevcaset",
  "dmbwfzkjxjsxbbwxjxk[zpzjbnqaexcynexxfc]lhmupgoizvtefekv",
  "sukirwqxhnpuyendfwk[gwhhspsvchcuanbmlk]cihzeilywxjzzsszs",
  "vfnhoooqqcxjslt[viaoffogyjxkevxxy]awrzurrwovvpfnwwt[odcgpzhowqjlwknrcje]dfjqpxhooxdcysksg",
  "nxapqpvdhslrgrtxhdc[iswvrpqulgrhsgpgvfm]vfjajvvwtkbksvpcel[xfwezauamawzimxp]cyxvapviuhfbkrgmgrg",
  "ygfkcfednuuajdcfhsj[kfbwhcjqsjfogqkojt]ilreegrsxleixeyufpj[ywoeiiaocfmfluppxq]itesxinzmlvifuamwfy[vmjgdocquwhjrzmgpb]mlnzbcusixcerifrt",
  "fmbmszmiytlbgqj[mxanjndezcdykejajsi]qvlnzcjskluajasur",
  "yulipwbgosmxvdc[zjqvytlnqajkzppii]dcnsftspxtzxdanti[euqfuhptpvjykao]zgtgututsvpayduj[odtzdyrtdqxrlivdw]jhvsqcxpatcyvshmzql",
  "ketdvlueslvybcl[gbqfjeqfubreoflj]mqucljvqtjdzkkguxl[cscsvcfcfrtmoejc]ympetkbksjlgckqmq[fljmocmgdeetrwjzkp]xgmkrjkmblfmxld",
  "vganvlxnaghlgbsw[uzlvdvijyklbvwobtai]aurffdbczquryjnyqc[fakiiskqkgcyimxccrj]aiuuofkveublkebgxo",
  "acgbontuyjxhjzivte[vhnoyyeixzytdvqbx]axjnjriuhwnfiywvq[uqbzlbmvpswmrcobbbj]sdnswtatodgdbomgto[byhfkjrwprtsxyvo]egepsmlsyaxmbkqewwy",
  "rmehgzjwlppazpef[torfndyfptiaqocbgig]zeuumfssckpmberghn",
  "wprlljcbkomsgwzmkwf[pnddkmzzdydnwxmcw]fshmicwlrfbandvxk",
  "tfywkvcsqpcmmdn[wyhhgjdqoakjero]ahmkqjfahoahanfqmyw[ccajjvhoucigizl]essjlmnzjaqnmudato[reswrofsklipcrxhj]cammaiomtxtwzxkfzr",
  "tbutcmnrbiocxfyz[rmulbtdvdhxipbrfdc]vdvzcjorbvgdnibhaay",
  "mglgknfclgrnlsjeks[kgbcqxxrwaptfnhu]qwagqiwptnevfuhvdd[ltbweixojfqkkgigcsh]ekaaqcpckdwsiycwphj",
  "xbeuepdtdgetlyts[noelmtthuhqqzehzi]duahbjiueuidjvcq",
  "zlmuqeuvfhtryuqj[ijeqqnzqnovszigmw]inzhrtwwbmuzemmii[aklnymgoybonasv]btujwdjgohsbbdpn[eplxcmrwtbpiiocguv]omdpwlijtxbtpkjnadc",
  "ubtwtuujltgdciadbew[tifvlhvmkihbvgc]tehgfwswdyfoqplq",
  "miruhlxilkampypvb[gedoakbaqqbjacfugvr]jskrslhmptvfecqfs[rohgyawycunprspmv]bcxnomkecfuwogd[lschnreywutgueswe]sqaboebvgrvfnzy",
  "ilazcsdpyeichrfm[cnaufvrnssjxtnm]ltqvdggeicpbynfit[yljqewexkzrquqdwwcq]qoeyoasrkbqksnzhse",
  "jungtickddhipmxjcn[qmoineyadkfdgfzg]tpobgixddeodxgcjr[efzwhcwvtnsjpyauv]iulcbjyqjzgjjgiaceh",
  "kmehlrsaqqgfujpktf[ltitekridxtfdfjpl]raberstzkbjrjcbuv[xdnhnqxmkafeqnkhpng]goctbjomnkwdrgia",
  "cavrmrufhuuinevsc[zjmcibgnaeiqiowxiwi]gwwcfikfiqdrlene",
  "fjexpcsopbvvidoff[yxpawrefvsjwhabs]rsttdnjzjkjgquzk[ctreaoaewixvhidcvq]ucrevrmgcdoqxuk[lekplpxhsbvpdjkdydm]ttkeariclyrgaqcxn",
  "ylczzvberczmyxxm[ftoauyknufsxqul]hwpqmktovodawyfp",
  "sgicxlvuxinwktk[umazryxwbnyetkt]ixteafrckcndrzgpn",
  "qjmstghozevlgmorfw[fwfqlkezyaawxigjvu]uauprxlklccznhedwo",
  "yazajhkedyzdalrf[wmcwsikcmspujqusu]ckcfptphxgjfxur[dsyuvmngnykyqqtpthd]yxsfmtoqiohkowv",
  "irreyprjplgpwcvu[whzymanzzjzzcdpwozs]cxtmmgirpmopgjv",
  "gpuoivluiqfsehobpf[pmyzlfdrrnhxroqgwio]msjvgnfvkdlhqapmnct[ezphbhrtairjmhdpnar]rhmbjsgyfwpxlby",
  "psomwypfmhhrxinyu[seprlzeazlaszcqsj]kkkxafvaoacoarx",
  "cingwjklampcczv[tmurwpisypfrrkwtczj]rginkyghsucgfisq[booesytmecdvkju]znxqjfpijzkysdtmmsh[gadlihvkgfqdinuadpd]tmfxgzlqfbhcdllvv",
  "obzuaolefujubdeo[fdchhlogkgshfooxxm]vizstdcsahkbyalxpw[ttiwnlbkputjvhrxbr]kiwhlicermdqdjute",
  "xjlrmnttecyshntd[aeghafcslhiikcwruq]ehatozrgbcjfrzrqqy[coqffrvrrriqzxy]yadpvxurqwaqrreldzz[azqyzwtfosbvgvnqyp]qlgtxssafzvbjdcp",
  "uzvwzgbfcliawvbqiwh[mezzvofkojjzqkboqt]wmtksykcowwtuma",
  "fqjyyglwuhnamhu[oggekxsqiqhbvtmzmt]chtzvlwtwunulxlqg[wytnygiogccqekoipy]azadrkmdoauqdjxs[bjgckllxkijveqihgoz]elwwwioxpfwlhhjo",
  "caheljtlnwdiffq[lvkujiicujmfgsepqzo]egosgocsqbevhvohv[oircvvmeygjeowunzt]avpzemujsljtdmxkpo",
  "urhkrdwsflcojukifj[dtsfipmyeihmwprsn]puneauixllfktfv[cnendzgfggilkaxwxh]xptnnywpqfzdnvixyuz[avtnsdvfoiepwxrjlyf]bfldcuveovkdrcz",
  "yjdthbdxywslknys[pwmdercczlngxlcfb]htfodzxbiytrrgsvlg[qdmrvenblrubinexe]yytgcsisdwntcjf[euazjyiycjnjvfeqtto]jcvitytysllcmfs",
  "kewxwqyysgxawyp[ovcqhszhpawacndzd]rkfgvpwtrcxqxddf[inqkivfwowcrhgmjgac]iimanbawoedagcdi",
  "rueeymrjusakvlykpa[aeamgxaunfodoka]rwpxggzojactuegm[avjkmcxslweaeui]ynozhaiyuolylzgzs",
  "lerccglmseezpff[kokaswvdquvaroznpwb]frwsjigowbshwkgchaq",
  "ntgklrojireqpwpaim[yefrgtojfyohyxwi]poluptiflncoarpoe",
  "wscxpyptitahaseyc[nvitggauypagnrqt]sljmhamehqsrrtnkma[ivnxwfzsbynfmqpv]vtvharumuefqaxvftvg",
  "rlwvwbslirshnibivvb[byvoxmxjuaftvxwnt]jvriauiylbfjzhcuocn[janwjpqqlofoetwgvnm]pzenzwgepremxsk",
  "qxwlnwckjetcytmk[wucfiwbchqulebnf]aefdblvtshogdmaozxp",
  "mwipinfvshxjcxe[bquehtxanardycy]ommggmalllwhnabt[jcntxodpbdifmdxwvd]ntuocedcycagludkzzm",
  "ngeaefgieqybvhi[cryyiffcehecznvqa]oawidmlbbgmhrir[snlxptoienxepsan]dhqjrbqawgpgmei[reotjgzlepggcqgnbo]solrlphkhigbypk",
  "ooulaciwfjqsrxnmcmv[drkctnfsbgqskqfsl]cfqhlhuzsdhrfkftsth[equjfgsiwiwgyocukf]zcgzqaauyswoulk",
  "eieuiqnxqsglieiwhyf[mdezfeskxxefatoper]heoiglecmtfdicwm[bnirkqodtuetivbade]tvebiafbqnkdxsxe[ctkpjclmsuzfquos]wavjtwzgjzvfvqde",
  "wxtwmrbczcosqwhzfto[sozmnaawpeigiwj]etcgyhhuxmrmdldj[pxqzgtwpvljndiimuwh]kuetaxjjkbstwkjm",
  "jiaaqqxaalhqlohrv[nvxlicxjecrwwxb]rwdjkmaliozzmcajom[xjsaybkbcjkjfibxsuf]qmhgazbvjwexgeupf[idktwwlpilpsyoc]pkashvhxhdyvhvn",
  "yvteohdhfvxdhdflst[ityxisdhtkmbtukca]hafgktwtaezylpvsfe",
  "pruxhfyvyakyiqcna[ldrptnvjswidsidtp]zvlyaagzulohednhrjw[uxrskjlzlbartnqphdv]hbmhdjpvepzffatjvgg[ompusushgickioil]rqblunnqahurwbpa",
  "vvyhqbhvmmnbfcj[bilomucecrpyrolblb]ramlmynnrwcrmozxwf[neoosxkutnfxessbel]jbhlhcyhsvlblznlz",
  "tamaeqtyaehjgwj[gtihpldnfhyivafttdf]jdjvcusmevnnwolc[bjoubckzocuycsqxz]phxayhhvmanhmohpi[ughfukiniuuqqiynkgb]ruqhoriiyrenlsro",
  "tnijlugrrsiutmtu[ijlkmzbqtyxfazvlmra]lwtqqxcybhepudhzkjs[pjjohpevoavwtakadra]uduqpqqfilscmbhjct[gnsdwzzqaagwrspe]tgfcjysekfhucshiu",
  "ngcahuptcjnugolkor[abcuqhpogcymsuqbdys]cctjmgpayksyjwp[cbiuigxbektpivgyyd]jbhjcwigpmxxccaoa",
  "cscijxhbjjwjsril[xnglunblqpwhrmf]vrmlfzokdviqexa",
  "owlwbfpofwjmmaurh[vwyiwzwryuwtzne]bppqkhiaaoskdmuuv[rbjsfdavefilcbdl]aioqshgjklhbmhggv[ebzzfugfmojpiyinex]araazgeiuvamzogvru",
  "wfdanweiqjmyirrqjh[subtlajaakafgyzdw]zcwlwyrhmwqjbvoz[gkygnrgxvshuerhx]vksyrqyjhjbfvthvbu",
  "wtyfaazlbxfrbpo[ehyezrboykpctruj]ueojejetsitcdgaq",
  "xuacfazgdjzjscsbp[kzjzkqfubdgmsywqiwm]vzjcgemfarnixlv",
  "efsylgeymygjtmtbp[gcbfjdjtobzhfjeeqok]plytmtkttlizydos[vuscnxlyasuhrpdjhzd]qpwhqexybrceqod[fxavafmimzhhahuil]mymoublumovagougb",
  "auxgfqpalqgostoho[iaopjgipbvoljstgnzh]yislgmfykietpmpz[oznkptntgupwfdpo]nscpfrjsrxptzvvbagq[nzfkygqmocjvsxlg]gtjcffsqfoyyoopb",
  "ayoizeyzqyepfckfc[weehzjiwckfuhuhrkrc]dwhrrvmjmncgjnbdqs[pnrnfsebeayhuhg]jsomlitkqczmolwrd",
  "ryzbiwjppxvobnnpt[zbkwgffelrzllxzpc]mhfvqmscbuvntmdk",
  "kuhsqlajwgworxlv[sdvoyogxfxohrmphr]latomkqvgilskgd",
  "aqwjohiickzgmqiazma[iruejpnfddezlde]dtugotrxhvibnntf",
  "psmfwsnanuctpuhir[yfcfhfneyerirhtymhk]ufjezoiilapnkuvg[dwzvhjdcqjwiojsm]nakkljyivpyeysz",
  "anxobixhtumunsloxv[kkepunsqydagtzb]gjyzevqkmzbquaxc",
  "wkqiutnljwktezrumnt[impvwsoflobulhpnrg]aauhcaluwladrlrf[fkwpqeaxrrfjirzx]wpzijgenpehibsoe",
  "ptbfrdazumqqjxdce[twtaixllcdgcizk]pxeolkwstvzduelo",
  "hdgwniaxukuanuvqdjb[mnpviwocxweddyckmgu]ruhrtszphsehnzow[xwgsrplhfwbpdazcm]batqeknzekbsbaj[ibsjvspgzsfzdyhqy]cpzclpvkyascrkjsbz",
  "fkottffuwepewoer[qeicyklnplxyxgx]quifslbalnnxiuaoa[tajydbewnlihmfbsrqd]qdnexoerxpznsffnq",
  "msibklqbsqliajf[qatfxjlufgcclyn]vkvzkfxmrewiaobdtg[csjgpsekgzemrrzfjoc]giudmrabqytyumyz[unysktvcupoebdtdjm]wrvvpcixjxurmfup",
  "rzaochbmmkwqojsggj[hqgjlsylxaxduem]xjjajcosywqrittlhmf",
  "gfxbfanmuiynavnsdpu[dnheoijlhxktdgy]hehjznezyjlucrlay[oxaecsuxwcfwadrx]tttkbnbmcpdwzggsca",
  "dbfixltxcjobjlvuudq[inwqktqebeeyzsnsj]ayxryykxergvgwj",
  "mczmiyukammjenszpo[uvsfnmnyquaksozs]ybkkzmbwkbvtdtmnawp",
  "pncobbtnkbmzcejovvp[rqkjgvinchxyqvfxvnb]llnmxorlkksamzfc",
  "luwtmcohdekeexghl[ispzxftymadcstcsw]lqibavnlsxkzggkcowk[epnjilabodlxnrqs]wcehkmgxwyqathdli",
  "siiegioswztzbrrwp[bzdhkwsjzpspulrfxo]bgskefnysbyzujrwrm[pgrouectpbahyqbljw]dpzigoasczqhulwkmz[bymzpzhhgwmbrzxiz]yfqqmxncxwypftl",
  "zgzhuhdilruwltkx[uhukqbixedpbalpukcm]pcirnevcltnpdlvpy[fnatvckycxljmgf]rzktzrmekmxfrjsmch",
  "qxfwzgzttjxijfdp[zmnhqryznywavpxvud]tzsripbxwewwxziwreo",
  "eqbpntitazohdzwomuh[rfwyrkaksnngmnywz]uovqoygbbarmschc[pzlgrxvehlnsylyzn]llunlfmkkxbyrxao[konbsjszcjzzojsjdbt]fhmretnaylsqssk",
  "djlceaeoeocxppkdd[slwudqrbqrmxjbpalvl]zgmdrmnhmudpjubdn[qvszgsvurpmwbxwkof]ynoroawinaiyyyv[icghtfhaxxdyhhnw]giyjsbnzxvlvshrj",
  "wxlcotazpgttprtr[pqohcscugutrtwl]cmcvoaigjoyyirbnfm[mlbzepkrpbktgzg]hlwdbtnzizwziatmze",
  "uigffkhqtknzfoggi[beusbrkvhajotrspsa]wsaccsnetgfeffsvo",
  "vwjksvkdppzehlj[fgzpmrsvorfrskds]pdhnuxsfyfmxbxdtkgx[wyzytytpktbcrux]mqophfrfasafqvx",
  "cbiektcdwbpgbfffqlg[xudmslkpoodtjuyl]dfzjgkpdxjxunbs[jmzbznrrvagvbkhfzuc]guzkgxevlwuuihkxhku",
  "krwunjrqhebehsdrrv[tkqcdyqxpoxkznqfpn]atijrfgfpoikyyxr[aukbebwadqcyebjzr]okttfqdqwqjzduyp[lwbsydhmlsuuagmvq]lnbivkfcmpatybgezf",
  "gtkprhekcgvyacadjv[ycacswywvajrnznxqyg]lpwtalhwtzixzoqouyq",
  "cmgabofgylfqrygksjh[ljtoelliawqfehw]ekjwdlivarpaxxhp",
  "jimwgnncdqgvfzct[jtoqqtcskgjmnuvde]krjarkoejzgfymes[hacxazxohdagrwkispg]elbglxqfncqzknz",
  "cjbngqpkhmteobtn[wgkuzdajyhlgjhnm]smwxsrmycomfotazrz[wwnbjzriifrmchl]ksmbqcorpnqvxkckg[xbrpmogeewodnwlczc]yeufgfeqdcsyvpzl",
  "wwtfuffzcrzckue[uginpewlyecqytkn]pyzvhapqlilxfrgi[rtpbfqloswoobmet]cufulooqzmuegdcfx",
  "mmbnvbkrqufffexnluj[lvrxotqcfaxijevnlls]hckvivyebczkbhzkoz",
  "rwifsnduvsovozufh[zsevrarnsnrlwhv]wmfaxpuqcbdqqkfxp[asfctkcvcewnuiaavml]vjcsekcianmizjohjx",
  "afxfayrqsbxfxbpegau[cowlrldjefmtodaj]qtyysudehpyqyipjn",
  "whwezmjibdtptpnnav[uiidrcikchzxaaekrx]mxpiqimmuoethflmuil",
  "famndmzjihjygvwxbes[cskofhcpbmnyoexbmhh]sqawbxfgxyvbjftjmvq[bqlwfijohjtpyfvd]wbhaubzrxkovyopf[jiobwkiybhfqmnfcq]uquelithhevuspiwg",
  "evxvxpsxwcomtsn[mksjlthzepnfyhoot]bwlyelqhnmoigjhmw",
  "gztljipmofkoqhci[uhrmqnxirgeurbcyegv]feeplfilamskiayvyg[smthmugcggtalps]ujxnupixzojthbc[frsysrlqpxleeat]kalzaynaafgemiwwzl",
  "rrxvdpenycjjhrv[uklidponmhdmwcop]qjyjbjolepkgwzt[ujcsmslytamzhql]ylpbltrhzcsgugipwz",
  "oqvcvzpfkkiuiinj[dyavbabhfsrwufre]ucvyetdkdqqllnvmqyn[jksnzdkgndvqvrf]jbnihgzboxiefpucvg[lclejyqlczxyfxv]tqzrdrohqjqbxvljg",
  "ciiwuorwmthnnju[awwduwgtjtlacvtu]lguoqpebbsryyhkjj[imqbzrjtjatcwlv]abdryvpwcwgdxpp[xdjcegxusjmkkpakqnp]cewtlucgvbplfee",
  "vwmiycweuodladozd[zgecpryfcrcesjpjleq]wuukspkkgovrwyeyavo[xrywxofadxwfbtjbib]qzggcrccppsplyv",
  "ipqomncjvpkzmfmrey[qhjtirpbqvxqdaqlngr]xushcgcnvhjjaab",
  "hanwcykvdzvqxzfuz[vscvsqlvjwklirxvtyw]ozfecbczyozgpgmnux[pcrmkhlciltnaqulctl]joxgcwvqiqnlpxly",
  "eajxoseiopcweolcly[qcjswlwuaycliejkjes]trxhfjqliihbmaa[bdfmewvqwjldbfff]qkjkaebazisyaxm",
  "dtbhhjsdulubdvyi[taxprjsytexlulzs]xnlveqmnmalhdzl[navatnkberwbyfblq]qcjrpsuapovgarlku",
  "yhfzspprhymusakwfn[mmhvflmsbaurucdtf]dotdlxxnwjemghfb[mgpbdcxreshkrvyqtyx]cuclgizfrkqvyiq[tshbnfhmikxdllavl]gowjautvkiyhqhehp",
  "zdnboupldkfumvpw[tibtbbqktytsfzpdf]mhfcepjpzkdaywtpz",
  "ykhefgrfwkvwukmyrj[nvjzntbxyvdjwkwsz]zeyamuqcuwixlvtwk[hcipdkqdmmdvytzvahz]rliuuxcbwxywvihbyh[jhnzgkztfdjxogrq]rjhrrhuycvjivbqag",
  "nwlfwetmlhmbqjpqbg[cswbhfikzrfehdctn]ahtfkjunmkthgvelnqw[argwicwrcxfpwak]tdjjaycocoxzuvbfmu",
  "amuosxbnsjqcjjcjlhz[mnvuuqbnkthunnr]xreidmwwpnszmkdirso[fmssrzncsdordasr]yecrqkjktgwiogf",
  "ngralilfroaqpde[uilihhzkihdkqrs]hcnksdqxgxcreunsj",
  "ludhpshvlwbeylcrur[xpatogvisnozepxs]pqitbjvvxbcxmmj[augxcqtjifzcghbcb]uixsaawafzlnyxur[klvyyhwnmyugqwml]rjtesbcgfazkodfnouq",
  "bjoeuyklkrzssqxdmc[zpgzcvdrtyguamwwpxp]jrdmpbicebfcjxpxuch",
  "zuxhemqzvwtfwzdhvtq[nimvutjlcjyxlxditet]yiveivjwzypjdewyc[udbsmbomkbzbfbjhg]ivkxhwryocskjfgzt[yhqpoyummwmuugpyn]gihcogdyyexfysjai",
  "ywhxzrbmdwqtkgmfz[aqvuoigvfhxkmsvnzdb]gmxwelhjpwcsatmsz",
  "grvcvhjgvcltjobrclo[atoxxtcrmyacmuxze]ynxcizfubrdfuva[fylsoujclhiotofum]kgokhjsqdtmcyka",
  "udciiofyatqnvbvr[mmjooqnomcawqitjfv]kwhegzsilpcelskmn[vkdceozvjdugpyfqszn]iajtqynckzqqnwxq",
  "lizdfzudionqpeqoc[fydjtozosflhutaj]jlpzkhyehhddenh[vkyelwykpcucfic]kjdifkxhpylenuuzws",
  "ictzptuzpalhsfbuf[pzvehtwtonuuupkwjda]zmarfmjqyuvyhdra",
  "eygeklpjrsjyfjip[hxhqxtksenklsev]ywbklxmsdwckent[podxpppgzgqeicgzv]hejmgonsicpdmjt",
  "kurniprrhhqzevgbvqa[vuieoxpjerxdypcn]nhojyqglxopniwosaqm[sestwcawjvwerau]qkigcakhabmshkze[zzhiapexkmewgav]bijkfysxswmdpduuinm",
  "qjgkgckdoxgmjdufvh[oabgwxeccihlwvpmmvm]nramdhjgftbsopk",
  "lmbcfngtpsbxhhpddy[gfdoppyayoeimqgkjsv]andowwxqrksorzu[sxdfywvbdxamamfgevl]zssxeirnjcewzkfymvt",
  "nsbsfwnjejgchrqq[mjinwhreiayznfb]fugheybtigwnkix",
  "darbiaqtzgzcmchrog[msdzzuauqnhqrpdso]heytmuossdsjeku",
  "udihwimgsuqkoblt[uigkatsqhojrydtgjiw]kxrdjfzeaqnrbdvu",
  "knnkljnbstqfgnyanik[rbtjdvnfatggbvyftu]thbtcjmlzilmspkoqyt[blsphgtjaywnboxwcel]vpjathronbwrtzfttr[plhudkkkixgxles]embdkzgbuaqjwhbmetm",
  "kwzdnmnmptaerbaidmu[vsvbafnuqalixgkxf]roarzitkzjrtrncqqbm[ojvlwohunbfocmppw]mornpbroptyizcrk[cpwqbbbfpznheukt]gbzprurpkirufsuihd",
  "bkmorggmbkrwawvkq[modnbcdgrexhlrqo]ieblvxbumgymmnwe[bufvnrpvpwkobud]rqtkkkegurdntvbx[wldfyxvehuowkkhimr]hagluvsvnegjyqbszv",
  "rigzhmrukrceyebqhw[bduputrizqhdknjg]vbppheyeylzceqm",
  "zltoccrpxepezoiobl[masvtxjotwxyjcgjv]ezipqxhdwmquhkfug[djngkeljyefhvrh]ksxpxnddewdlegbj",
  "xjmufgrbjwgkqrlm[pwultrznglpwfvph]owivnxbspqfqctpjc[twxziasrnsysxgw]jggzouwpbslcqcnx",
  "oqcurjpogqrdfwejkja[mzchxpphbhegksxjw]acfgfwxlxxautgdhgwa",
  "vsmyxgsqymzwcxmttrq[algwrffexzqtrkyhc]twdohwzdwyylbim",
  "cyatioidvalbcesdgbv[qwcvhlyylvdpcamukb]ncaelykrajqrizb[tkcazcbkjloryhs]prbojgyrcmhcghtedta[jwjfykhcfazalocr]zwsimkkjuoigtwqyu",
  "csvfkwjbzkwebxkgsik[xulnpceuwncnmxybk]kppqybwxkaetszb[dknmmnoxewybfuk]vxayuzpqovhwqdvshpp",
  "kkymsvqoijvlegzjq[admimrplqgegveq]uzejgcrptowsugmqwg[btgutoftcsdbrigj]ndnimimikyzenbcwc",
  "beoudboaxiqsnwgk[djzpyulpcxktniufo]miakkcyyfjhfkoahe",
  "rngvmyxvnjydymjbuwl[lxzcqbiwdajwyyxhmve]spvzprgxdcbjuykbo[cbulwyvrbljefvrjoba]aygqsevnarikktyyyww[utfcukiuxzoyvbfxgdh]nxciqujjwsaypjwa",
  "vvugubathffvsasmjl[rcynyuxpxlldargshl]wluoczkugodyonojrg[wjkpxvdecdhixcrf]wnasclodhzhkqmhszp",
  "yegiztnhhksubmgjyum[tjwbnqatwqmtflm]qgenrenqlyigdovz[jlocrpkcduhhuwwh]tllapacwolqdjemy",
  "ssfuzetcmvlqtcwuq[toybbukdrftyhkcwgf]pposzrtracoojhlkxwm",
  "sgexrebbgasycqwrt[kkshnwwwqkdtnks]cndtytgbytybvenqeka[caccwspxdeccdmh]ktygfulwjwpjymvwgyy[cnqfidaqpggammsfeqn]gebngavsmexahlyydfj",
  "zyjeiarohhfvevgp[bcxuhacvmygsysjk]tbcgucjwhembofbmu[fwrcevelvjgfsivoxm]cagnrpzvlvvoqthmaf",
  "tqflyhdcdbhvhiccqt[najsjeaeqvcqfqvpwt]rnswopkqipgmpoiq[aeactxwfdpkhesxjgjv]stoujyprunkpiuzua",
  "pkwroiewwcdnrchgw[urbxhsiveqaksvnh]jdsuaaugprspfmppndc[nlfyiblfuxmybaucqlt]hhrhnuuvybcrppwp",
  "qltvmxcdgsxzjvqr[lksbbyjvmlrethgozn]fronjwxcpdmwjrdd[txdmgfzhxyylxlvnpk]llxzijthhpactoomtf[ixnzlpddxezcgzwwhpd]tqlvbducycucuhvpbnb",
  "firavewfdkkjcvdbh[rvovoqyrvplfgieeotp]ueqyzeaafxytfaa",
  "hzhmpipzxguliovwyeq[lnnheexdditstrstet]gkiukzblsyzhztewn[ltrjjhtgmwhmxtauuxb]iscazubkpilhbzqegha[wswadsquonsqhua]qsawnviqqchlktswocc",
  "dnxkdwlgifyyvbm[ijbtauulxlucchcyqt]ncefzdbjqeitqkw[zdxjxoonqyftvfr]poueayoqpxhurmpljbl[camkvseqvwbchvzctyw]ydneicysmonkpzkln",
  "qbcaguyajgdbfobjkpn[uxllimvdajnrphnswi]bjgqthxlvnzgwyw",
  "jbykbmjdcjelkzzpque[imcqrskxmrnolzfo]cynfuedydcwqwbzytoi[rpwbtrbyecriqwqrctb]nkidbxrnukpgnxgxsae",
  "mkjcmwdwwxkyxheh[xmukklgiqugftgwye]qkbgqiujdmijxja[fjtiljoqhrzoolkmx]dgslmiivufoyocbj",
  "mxlsbtzszpmsglyhrc[toixnvsdmmpznalw]jjycdqdnscyvjvn[innrkszsszrbcso]oeffvbeiklmnjfbfh",
  "hpuxewzjmpjygvxbcrk[pkcwoxmqustladwnq]ojhogbrsiykysjj[rewecvvwwdolcjwmay]zluruacmjvqeyjekur[rcrmhjdkrjqnokbyu]xruriibzsbgusbwjk",
  "zhilgektlngqvqdxlaq[cvpwwagoducswvtuk]uxddjvgnsqquiakwwx[mipnlvwywxkgrrik]wnpiusulsnkmkktclvj",
  "tzfubkcarcnhuyd[arahdshumzxbcfirpm]zybjdkjhdsynnqtekt[vlzkzwzbybgnrfzqnzp]tnscrllyxcipjlujfrq[robowntnkpydegvi]uzxmxmwkrduisiu",
  "titnnidzbachmvlg[fvkpotpsqsqaehdfhku]ixneotupwzhbaei",
  "yqhkiflwsmjogoobtb[tjbgpbgnoiojulndo]wfimortfcsjwbhiwpu[tgwqgogdyfwgyumadrr]vroalcovcicroilnw",
  "pfqikafmxfzlpty[shvuoklognffaswl]whlxqkgppveocss[hkrveyjsrzhncmd]xrzidrwyygkrpjdzmtg",
  "ymdhqmyinwrqshsu[vecybobwvkfcyjbqsc]ufhtkjtudydsmjwmw",
  "ezflrjjjszqvvwbtoo[hqfroljfozhsinxlu]ympnqaaziudsojktqye",
  "fcqkypksoqhiwsjjttw[jwhvnzbvhbhsixdll]xgssfogwocvsxwxnx",
  "rcrbicomagvcsrbqii[wyiwenfjfnrqdny]mrcahrhypdsjducntms[lvkwgoanghhqwhoeer]xadjlqopanooufkum[qnirzoomgusnjaupc]xsprfvnxtqpzhjp",
  "zeqoumtrgrrnvrw[slruzyhnmciocplyuo]ffojftbgesaqsjf",
  "dmvgxxqvnpedjfo[ctwyxmpfqtcqqsijx]zzdxckjybbppwqilpua",
  "bwntryszlvfclxv[pvotnlyzuxobazeeal]bycdvictzwlrzfhyj[ttqiblkfwgymsst]coumflrufbeyglnnb[mkmpljazbeuwwyin]zhjyglimdczoqyscan",
  "kfigtxoxuthwwrjvgng[icjjpsdpyrdztjsb]eicdeqzinxjalxdp[sxweoaoukdogojj]aobmxiokyghjlleincz[shlerrmxojldovd]covvazglqpbyqgkioz",
  "uzbcojdhsfojjlu[bwdpxmgxkdccutung]gtqttzddkisawimh[nsjzininsswfhqmfjse]bssyqvptbraxmulhrmt",
  "vzcutfvziehufcsjyj[uugqtbavyaekujogl]jmieipxsmcdlegpms[ldhzfsqpxwhrysmemsd]npifxsiyviafhsttuy",
  "jgihvujltzfrdgdewh[pktgihjhfalgsqbzxou]bljspsetjvwjagynx[cfxqafpzydszgkeem]nnykcqratmlebgovjb[ytrifgfcaktdtkvyw]qqewrhcmlidtzlf",
  "cvcsofkukrvgrjgb[omiudzcwfysfqnj]vywzmoymigukdihdg",
  "qtcslzaksrjbewh[hutqoujpiprqkdliquy]itpfuvipirtlcqh[gwgytaecvdznluaa]dnzrpmzugzgfboy",
  "mexaxkluhxpiiwly[ropgybjghfmcbihdwkc]nqhhhdxqkkfgxjr[yngnctrmwrulexwysg]qygnpplgwcjdodyejfr",
  "rietcgvwqtbvgckrggi[wrusqmctiepawnnlhiw]jwqcwchqykybkeut",
  "gmyiittlkdlrkxkqgf[gkdtxdzmzkztbmbwtj]swydvrueplaxzivlc[grymbmrjoxetbmdgs]qyvutlvjujshplo[hwhhbcaiplbxlwaxt]oydtwcmximtqtaxsf",
  "lqfsdrpfltujbevz[igbawyyumtvdyswpqo]kxgjemjfbzkxgbzm[annhlirlyaqkkzzut]becuzehpeskngui[plesynprupxzdbtkoyz]athsmfdazbnkvnh",
  "zlvudnpfcsotmpbo[garuvqkldrjhudgqr]vmcgqengyxwimhojvfb[nxsjlmotcrvtsklog]tcczmkpwpatpcxt[ndqamgekwopsodazoy]jzazlfgsickokya",
  "kkpydxoanbmqnhsp[gwqeivjgguqxibtm]uofkzcwkmgaglivk[nhrxvkzrqgaowbsl]njkdjgyksqkgdmqgd",
  "ewmhmajwkzwavxrbua[zvkyzqqboezremlppdx]xvbrmpczbgxytisrs",
  "pwnwsuvapjfzjfkda[xensayezbpyzbgkb]rldclkcrkioucas",
  "hpdgpscrmwxhxei[hebvcxoindxpclmzqo]yxheicwrkqddvjtrvhz[cfdcgcybrqzppfvqz]fxmhhzkhrypfdxzngp",
  "rdyjladykkdyywzkxaz[yrlorltuadiurqm]uooymnfxwwhotlovb[eqvyqexqmdcebadqni]ttzsxuvjhibdimb",
  "uwwwjjzywyawsfl[spiejlwyweopdpeppr]syzsgittkmodhxeux",
  "ruvjlsxcncnvnjabb[wprypnotloecopcvk]frvlqhrcmgrworpmdvx[yzqqdnrcuqefasxs]jhywqfobrryuieijpux",
  "ldoryefjbqalsezur[etirhaprgyhoxpjg]pcqecyrirpqsiami[snnzgzlovmbbmrkjyfk]vfvvewvcweflmnirizw",
  "zhtksckufkyilvhjwud[njnqcbeufqhspikcj]fhiscbxxrfperbs[aytqbcoojpvsumqxmpo]yialsgeknykhyvtvx[wdmixjtpahbmyyhbkyo]lpuoqmuccejrnuo",
  "quqoquknjavdraji[lmankeixycmwcro]bvjoxsmhmxhqppady[zrswqkspsemszym]rzlvztdchdycvai[wyjokbfazntwjgozi]grxvbucupvzfquci",
  "qbynimsfznxvgglz[vznlauwqwafrkyrn]mzcazuqwqubbimiw",
  "jpwcnjqvcormlcmms[efsxwgrrcdvbekcrqrj]cbjgumooqxsugmfiz",
  "lodwcbxwcdxlonvmhu[vqteuharlchiwpz]qsjfscfdauuiojydy[eibbhmbfufhnmbuq]lhjksvudswbxokc",
  "ezuwqhuggkrxbwwbn[xkswdvghxdvavsfvh]xkhmyagoyfonbvwer[gqllsdlwfidxezgqh]mjasmvsqppjxxwcda[hjmpqkhaknzxjgqbfqh]dkmamzdrkgpqqbdjrsh",
  "iyygskwznbipfxzfq[tmcweskexpjtkalzb]jejxucbrhchjxrfpabf",
  "vtymsqpczfmiptqp[mznayygexotqairko]cvziwgvrnuarvaht[edtztcpdedxayfjfh]nbcceefaansonnddne",
  "vjqdcxevfuogghpnta[ptmseetkpioyotviji]gdrorymekwxhpxpy[fpvjijrzwfyelnv]rkyiluhtmnzvhnas",
  "qvemubvgpmngkhwbzuw[cjpijkbagomoxelh]ffivvlpphtqehse[sxcypopyygxyvbbuj]dvpfciwgskuabqx",
  "gfakfkyofxjvlmsvh[tpidjfjqbknkojhfhr]zxwncvxqrrvcyirqiz[zabnehhkxmcorkdpgfu]ednajzhucajnivj[qusnqmlqtsspvmim]ziwmeyegzogqukuqtk",
  "mqyqowzlhqmskdihhk[zedonzhocrbmtggear]fvgknaiaulhpzxjljit[xsaforkdhyqbaings]irvlawxlnujhwyyg",
  "nhbmdwaargmljhtpnvt[icjifdxafaejyztkra]sahtqxjpyzckhuhbi",
  "lpeanpdwupghamqaqcl[abfqfypetxvriaylxny]wnkhxizozkazedpb[giqitcoemtvagwklm]nkstudabthwohcxfmqd[vrpofzibesdansaffr]xxungasknuqsrtwlno",
  "fuzqaknwrjomqcnq[grpbplvwtzhdkwpaxw]nghayuwoldtwqsxya",
  "bvfazcsfainevpvzlf[rjefaqfpnpegvzqg]gjybyujttbxxykdiuko[wrhqwekljqnwcrprlg]nxokueewbmggdus",
  "saaebvbdlwdbwny[xgfsxsbuiajbaddjz]bascpnotgqmvgol[tirosowipbbbehvmn]hhbuuxlvxolopvprjt",
  "lyjqinshudmibsoxg[ezfuijtnyeisouvta]lxdcntfsjmuuptsjsf[mdvcehaamwumvplvuch]flxpmjotsprtcpgim",
  "kvqeaqtusiagcjg[rgtygcnurmyhcsiyywo]xmzqwnvzarhvtwoj[hmonnjgsicgshstxj]dlymvtimuytjskulwx",
  "vhhkkaxbkbofalfl[cjhptxrtmrobxtj]pvavovctkrqlwnp",
  "ksskxhxowvmqpjwcyas[gvrhgwvvofhwsxw]nywalantbuvudyv",
  "jnfjmmlnqnlsckt[ualqfwngnmbhyzixtn]aftdtewnfgfgrnujo",
  "qeclpcybnmxipvz[kjhmumbnshysvysgtfv]nncapaxvtjppgrfeppt[jgugadrhhdkbgwrwoed]mifgdmewybqmgitelmv[aivxnvlugqgettif]sfapdujsxigrknkevia",
  "bnsibkkdazlzccjz[rysyrwccuvyhhzqo]ddilmelsqneizzrizt[tsyksvmzwmijgrr]iacreiybrgzctzodlz",
  "zgskdjrcykzddiwijmp[rmiqcmrtcbvqlyoi]dlvvzqooapcfbeuu",
  "qzmylxdpipefxqzgktb[fxhihkccfxqvtmuxqv]deubvywhoefvgyc[dngwahicxwayxzlgv]jtmsfgmyzwoyienmg",
  "uclqomkdtlqoxxye[ugsgctofzruvzlugkln]zwdzkmcadtpxsbonb[mevzdzgtsdolgxnm]aqjqvdclgujsmgavlf[wohelkvlnorhemdjdua]igsixgwbfwgcyzowvl",
  "fmoovpkjjyxbjwvab[cxwwjhdkeuhlaeow]etfqyaldkxtdepau[ioudnnfnsgnulgsjg]rilsunyxwibprwunat",
  "bcnxnridsadywsxjni[hioukepqwivorww]ectwlxnxladujcg",
  "zixbydwfwfmafikv[ekwselrqiseuohdpp]aapafknzrvubjeno[syjjufbyxzsgvllsnp]lzuaaxiwmpkuddmvhsf",
  "gqjpmdcbihbvzorur[yuvqoawxfyiymumyj]wtgpebjnhtcneqwqoua[ivklwirbiayzetffz]xslbmxqzwaljfvygqnc[ojezsvsvnsnnyfudk]iosmfoyrgegzldoam",
  "jfijnmybbtouluiqjl[bsrsawourhuudsife]coznoauxtvdkbap",
  "nishcniuavmryvc[gksdtautnqyzhensdv]sasjevbaburbgfr[omzgytefbuxsxsitr]qwglehfutwjwwxvr",
  "cvopfdvcktoxebkdvlf[eclqsoslcmosoqwgx]njqfdhmmgrmyphih[utiwibvbgfqgislfa]ezjiqpwqmvjgephrp",
  "stnsqqqbubohnjvwr[ltmnbonbxkiufockgp]dmcjolejvgrnker",
  "ywcorwsrpukosbbfexy[nhglhymfmtceixme]jiwtyhnkqyftleac",
  "eghaeiqmztgekxepeoy[ujywtzprycqtqnamcfq]evlvzlbdytqsrfmeyvz[lddfkaawaqetpfh]pwisuwhxodbhmpeprvs",
  "assohytheyayjhavd[rlienfkkyvplebbreq]zrbhqxtolqxtvziuz",
  "gaumnsmwbupmcfiuxb[pdrzbltwkiqniay]ktdjgqrujtegvkj",
  "vcjgwvglfqnqyobkkm[ymavkjrbygenzrxdrfb]fspdwrvbklalycsr[monzhqnasxvigua]rarbkqeinudxmdvgd",
  "mcjmiagpmzhuskafd[lhnobhafickkuvpcpa]dhmygriuguzqdtiz[vkqlyvmpeswtlhuw]fxiwdwuokkycyxgh",
  "ylhbecxvzvuoeyqsyzy[kbeubfucymxhzqvhoyx]mwccbakdngxsnkgcng[pjkfesroeekkahf]zdsaikucfmjpvrntyp[mekckfjquchivldsmb]hzsswhygovftixzgqx",
  "ijuxhpqzyvkcnxkbb[jcmsgohgenvwsqmh]wtmofqsotoeysqo[ymcbyqszvogpxil]otcpckntlcrigkhmtqg",
  "ynctlsxzkfmzoeumgol[mlrfvbtngukomzm]zxgfyumnoeuvzyxkrk[vzhqczyaabmlyfqkx]ptwykaktmvclixv",
  "xqqnbjbpcdkbkbd[dsksxdjbjflkqywxpex]wlbsjfiqndxorpcipk",
  "nadavjddvlyztmch[ocpvdqhrxpujywek]snbleixecjqdady",
  "lxnwiiubgblixzohzdw[jqkznvkxjgeuastjt]lslxccnbzazdvtas[srxowclwplgwdzbsvys]gjmhfbweaenibjwdunx",
  "wktaosoqvlrufzacw[zmsxgoedyzigzxqnviq]tknxhylmyhksrnz[emunuqtrtdfmaliqa]fphkhnxxrhtqtxrezg[kiysaxlfbgpyjmf]rqijwvmpjgemixf",
  "xslqmqubvuvjtpvqks[yarkmtsupmlvcthzd]wmbamgabxaskvkkeu[ootxlynahvjptcxvzn]tqysfytitdhoqbl",
  "kaihfsjlfekzqeyk[eylgitksxfusedvau]xvuvxfyfpvvnbwn[gaklbqnzcddgceb]dqruoulozotowjiyd",
  "ikikqfrwmjphtgbpljz[isprhvveoomgjanfa]peuycdlptwlcxwtdgwl",
  "qkrnghizqoorxufsxi[yvdhlbkcpajtoyai]btushzrdgehiczofzmj",
  "atlsowvzkzankvo[phkmrijtovsgefjg]ibekcwjlxbphloozgw",
  "yvwczyvdedvhjsl[upnwtzmrzffgovvzdx]blokchottfcidovo[exxnqadcasycpsc]jrvarkfshiqfizur",
  "pkrqdpvqfaruzcutixj[dzghueizebgabnh]cuzbyldnjqoabquyghi",
  "zxtwwlgwbdibbpdn[qxalqsxecjxrwnbamk]mkfkphzjclkrtfr[bchpdzedqjydvvcdw]yedvmdvvtaypdbmdg",
  "vhdkgawbmowrvalxmj[bmwsxikazlmyzjcpdkx]xfiinhpfwypbjty[ftadhpvffqzaulm]fxkqnaiufqxwkblr",
  "tylygjjapoammov[pfmalwzqjpwbwulwtjy]fajnrkplylsjncbxmir",
  "nqolmalspryhtehrx[vukchwjwrqqgchh]oqeqtyturaikqpmt[jfjpzvpsinrzntrpp]tystfonafirnerlxoe[qegerynoywfrtqr]pkvjziuspehamikic",
  "fcyiizqjvutqhlq[ienhrsjfuveqlihtjkw]zupcxrbjzgootlqucwb[belvzvymfrusrgpy]ttrpfhjworpyuie[tqrfysbtovzqdlfiptf]ycwnsgufokjzvnndl",
  "uupskbpknehwzqla[ayucqrzvzpdphovdg]qkdpdncdxmhrjny",
  "msdlimayoswylps[fhcqpeopfooxcqn]gvplqehlhyezappwtj",
  "vmooyafxlnvejuo[hxisybwiwdftghdqnfn]xsxzfubzytpwetxexc",
  "tpkvdshvxmxywucfo[sxdracfgslwjgvfqn]gwgnsuwdpldvivn[rqxzjyfzjkfxnflnhb]yytyydpnzxrcwgtq",
  "hlkwwladaiboeqb[dwnwjpnnaiskatz]vmdrqjmjtwmglst[awfslnfdpfotbislhwq]wksnziftpvflkmwso",
  "ndsgxnhvmhoxyjnl[ykbvfduburptpcv]htzjbkydiqbnnwtztk[fdlpumnolavlfkigfs]ghtsjyzmlhzgysey",
  "rcxmqtghbvusvizrxm[cfircclziuhjbjcuic]ysjoeyszfcppxbggs",
  "sdtcngnkylcewwo[ezipqbindaulzvte]krmjsfxzkwbqjyc",
  "jqarloupbxsippsxf[buaiecyfakilculab]digjxonfqgozbucnd[wpgyftibkfpyjtqn]jsvpngrtnsmbhdrx",
  "wmrkgdpyrcuwjgkane[adxvxjgpvksjsxbfj]bxvqycujwmuqstigdof",
  "paqnqyxbzrlzixpfocv[uohcyquxckdqfvncq]kfhcpornbacubjrluw[ncfsgpqqvinmaioducg]kebxiybzjexewtohuq[thymyottcuduhlhfmhc]efulkzqoqzgfpkvbddz",
  "ytwqlfauutjkpuyw[togbiujaisjsqwgdzfc]vtbvirlqdylkuewkx[lwsgpmmcxhhtfyismv]dfwnnjyfxcdbmkt",
  "ibkbgrvebufxdfvsyal[gfuefwpduppdqoagwmf]kikbktuwqqkyuecaxuf",
  "fsbimkecxvqycnooy[atlsgjtcybrygfcvwed]goxunrzddzoktzdz",
  "qgdsvqfwhsenvhnbglf[rctvnuyzhtldsuftidc]loccvvwdkymguuax[tjorbctzavmegny]gnoovwxazfyimdbke[praqdwvrbkiucdd]wkvkvyixnjbgootof",
  "egzinoaodgmzhxo[ctetdiivmkynwuxiez]udfkxfnzwectgfnk[jdkxiiqzjynledjzy]iubvehfyiofekffvduj",
  "vsyayjbsvlzhphh[cxdxpurrsbtwuueyupw]uijigqqycwwfhishv[tziatetftdyopssiss]penkeyeiknnohiqz[unfthxkkylulcfaf]xjpzvydsluialcbxrn",
  "ttccoewguenoqndmsz[uebsmcosjyeomyph]oypzbgfilioctebgs[vbxjcrxqchpztbg]hzsrxvamhqjtwrnep",
  "pxsxuvnydgpupmf[xpdamytnnanauohkcpj]neuazauwfdksxsxs",
  "oknvgkesuzbnaid[iveorhfsylvjpvv]nszdahosdfmxxebffas[inuqkpbtkdeeabguq]svwikhonwnxhqbht",
  "ycaclbrmupudyzirpak[arwblurxucqeorxeuf]rbbzsrhkhfsahqbf[autcfkgacaxalhzjw]wzrrnwacvuvtdvuchkf",
  "vnkrlrysvxjgylkyt[rowgfjsujqfjxttv]uxoitgwytbbzmlwql[gnziuplvidtteix]ckgmwnmyvbupxndei[mcwnambhbdjoplva]yjjadohllbywiqo",
  "evzputikneppebadqn[ywcoylqunskuniq]zpdfgfxcifasenrnqha[jxvfntinodzjoyokwnn]rmxmzheyzpjxfni[bmkvzvuffqlnzizhf]oyemqrhfbofzwvcc",
  "xvlfactaujylscoq[rtzbbourbqyscgzee]lhrbewpjjsihyomztoy[ourmieezxzejvbps]grxqrxkacpfyibmz[gmyuotmhsmykudwqo]wpvynvxycgioognjpcd",
  "bkdcfjybahefnyj[zfezvgmnuxfwaik]nhlapmbjbtxjlvs[rrjxqakmexrwbfxoix]xooketycsmncjbdpm[uyxuhwclnarjpttesn]pclzgjmvqjkeegjj",
  "dtrrjxbcbtogrkf[uoypjywqsvkrlxfv]npbxcnbqzurfnhtst",
  "bglltdogbogyjshery[trhbcfvhmoyajvo]bfgohngeobhkdogz[tycfxatfvgvbdmsdijv]mbbkubicwesfnkh[ydncfgfpyebhpphuu]jvhnbmoijcgvuuf",
  "pecntywfbpduebnqcn[nxqecigzryomoikbwk]cejxvxzawaqnfxjgyzm[guydhasrsfnfbxaavdr]gwawgonzypxqwhvjy",
  "phygreqhgwowcozbhn[tfvqgtrormwhjpn]gzafrnmifcdnworokqe[puhaqxbsrsgdxfyq]vbdjyimsjcvldazu[gznwtuqifqkdimxvi]arbnskhmjqcdqgwruql",
  "cpwnkvojhghunpvfr[itgqhdftapysdyzzyh]zqtmtrhrbqdiqyhgl",
  "eeoileaopfnorzgsjf[wibinihlihuftbctyje]wzohrlyibwyntuyuwnc[fmudqkokeybrpvu]nxsvwtyjnifrfqap[kzjbctrlkhvjwnska]naicveiocdparmtq",
  "xhgtkdzsvejeukkou[aecojjcuikgaopjhov]bkmeaogxznpzgls[oebnucvatntfaxn]ipiewtkuftwuoullo[tdvdvefxhhjulaujc]dwlqfoajfivwqoezkqx",
  "zwjikqyvqbfrtviguiy[cnwvrpqkwvwwdlxhvg]sknukgfmvwvgihifag",
  "vrdvnfobmsaczesz[cmzvxfjauugsfvj]gjtpzupuvaldiqcptl",
  "wfgnkhkrqjybzjck[weuylylbwehkhvfge]jqcinnbyugivglpvs",
  "hjldgsqqnkkletlqs[oiokslwzknscccr]qnibtkzhidmjuqeecur",
  "deehsalofqvotdn[paayavepwlijtmdgjsv]myrxdbvwsvjjcnltizl[gviwdyoizgzshtkzkjl]eodbjfsldfdsiantql",
  "tvmzdbfpyandbxzcax[nkibtbdkedhfeamtbt]oznggmbumbvjznkqg",
  "xlefoqdvwarnyvqn[giqaeklzafpgznwzq]ruolhyeihcmrsapd[tteaoxmelcaktxotj]qpvrinrljjkyjwx",
  "mobjpjhwmmnnzctj[wdxaqrfuqpabcgxhol]vrdqmqklbxzgfqtqgzs[atmswhpwzxczyqu]knfmkjsesftotqtbt",
  "gudgqjbheozwqphpjjz[asykbahkybssjzwi]jsdduqkhfrfidih[lxvkwbklnnoxrnsb]acdzdhrfreacbvallej",
  "uaxobuflpumwwhf[hhepxufancrcqpcb]bonlfecebjxueyw[dezwvycbgyibbjpbd]mtrhgcxmdplnnxjz[oygnxtvalnqamptzzu]xdwwguhnwjdnxvnuwb",
  "jhugbjyidkjlraqexy[mynfcudyavfvierxjcg]gtsiybxmjdnzsuae",
  "yaxahcvseiexlunsu[ewsivdovmctbuzwzho]piqltzsfefudhrybbyz[xeuaoqnqmfnqnzj]dafxzufaauhjlyjm",
  "zqsrqfdolylrhlppgm[tnizcrbrkddpmqvxbzp]yalgvzxsuahuzew[wkvbdzipgbtupzwmfpv]illcjcnxkxdwthlbf[sbakrzbpkzquohvnyo]xufnytflfkhnxrq",
  "kzredfrycyoukrwskkn[ythsgptgkfmwohdquc]ocwlwpdbssozygdrs[hqswgssnjqennwyx]fowqkdrrgesehpxv",
  "hbvngvnsogdendwlz[enoojzdhimrsqentjk]lnzkwziswmbcylnnj[fmnniaiyujueiaic]ljcvdujkwgfoniwpqp",
  "sfbaiqfcnaonrow[rnvekifsqzclyqpv]elybdkjfgvlxktm[yefttslzygbpwywh]hyswwaxwecmbccbhp[gvmccimnbtaqalx]xlacpvkzgjtbpoqmj",
  "rlbmpmelpqxjnjmfa[bvbqxtblnjnarpyh]mjfrvlqpyqqwrnvcf",
  "kvpueowowumjvpozel[knnbstwozlhrwjkyjwk]kgydkoneplmdduylvx[tzaowobpqflmmgs]yvrcdqxytmzslmz",
  "awthyhqmbzfvyjm[uhpwjdtwhiytzukyuim]zxloxtwgpiwoveso[fvjsnnwfavmgexs]kojiakeozmiubswfj",
  "shuwbybqhciuyby[docpctftlszxlkz]ebwhxhrazsdtkkd",
  "nfqfgwgupcsnsxa[mjnijijxwxlrwlz]qrvegwwrvznsnicw",
  "jxbqhkinclmllcp[mecqurmqwcmhchrdsw]lrasguephqwmmzuob[xowuthllkxcdenxinlz]hepwnvbciyqccuffejs[vzjbhkzhsboolsrb]ddsyakfbptuspbojv",
  "ikijrdttouaronuef[rlrlcpoedupwiyg]kxigxepfvczqkjgcho",
  "vggdslvtuzunjugnj[yydueuuwsysaooxjxy]tpnbctapfomxruul[lhtylevglctrnxal]bkdsjthdhfxgvnav[kewtknicgcaafeo]rblrjorigaisdtkb",
  "pdhrplgdzxhmngvwx[ywskulmjscxrueaon]yhowhcmgsxsjzbzz",
  "jgsetuwujemzlts[aaftgfdtjkfroblia]lnvlzygnujnunnm",
  "lbmxmamecvcmvtlkpje[gpaxfzwfhbqmplnn]ygbpkwihbcoeuvcvpv[nlvlwmhfeqtmbqctqhh]rudqfcywhrtunctd",
  "shjathcleqhfdqnjkc[iuduexzuconfoanxkvz]jlesceajlmiqchyt[czbehdriwjmykipagr]nwilscewhblfbzk",
  "hfqrvmiaubbrsgel[yeumwvgodugwhjyvqk]mqydzflsrmgiwomwxq",
  "mdxdgvpgcamhlonp[iwkivczimsibqwegdw]lbphreoomlnnzpkdj[yogqqfhdwzxtjqgrwch]vqlxkhcbikruuoecqfr",
  "ziqbhuovdwlwymgi[wiumkgmtkijucxk]wtkgfagubnrfsmii",
  "zkjfrnyndfgzcoirqi[lubxpzwxjgquhicrg]fwxrqdxbouepjhhmtfp[ipxpdwpovwypnihz]ucnjpxbnadxvffzj",
  "pawhjjxcfssjhddb[pepzmaqyovbjcoxkri]puevwwecwnopwjj[gszpinocntaaorc]kloqbyitegljqsjanrj[vqdlhaofwoczilwprsa]exzjzcvjzdkyuqnva",
  "hdmocxzixbjdguhtpxu[wnrdmqatkuwlgkjki]irstopwnwogllxk[chkgszbhhxbtbfc]gqwzorwxweefddvruo",
  "kmzvbjoisqyquqlmtpq[xbfwrwqdvuyancg]klseqtbsjnoygnbr",
  "dqhmmzwqjlfruiuzpzu[zvacftportiuiccsch]sxizfxnxuaeupgdgwi[goiybqpodbrhumqoji]bdakapfscjhijvx",
  "ynwdspesexiagtjjajk[nhkudujkjajantcaq]tvlraskhvwxzipu[fxhxstpsxshewfla]lipkxqrxzvtjwpkgsr[ewujdcivttshzclirc]otfeavstneftpufj",
  "lurqcbdokzfbakmk[gqgioawpwyoyjmx]ateqwmukuqlhbggp",
  "vzqrmgaaoeiaurhl[xshhckqrxeqaapipide]zbybsomoslwibqvumv[hlfylktiedeneloub]nencwysbzqcirlkpkqf[klpevukozfduxsyg]moddzcdjtynfxpomf",
  "thajjfqvppczfpxysx[ztchtixnqrdijypccih]iguijsxqxmowroyt",
  "cetgeofdauwlcvjq[qlypmpdenmhjphuowo]ccpgzwmpoiouisg[xhzdouzkrnlmqpzx]luksrukxrocrtavzi[oalzspwxauweweafmge]qayixvygbjoevgsh",
  "bokwhlduxeydzxybf[jynvhmoddbtvzjyxj]tlmfuoirqzhxxlmfkmo[aauqfbwvapeieon]qfiwpamdwzhhpqniz[yetywpuobdclgmhbr]ptywhnrxgtxoegsnoew",
  "khmtmqqphoofzuzcyy[hzhckwnrdlmfgdgrsn]ipjeyasfmaewzdrk[njqdphtgkuezieiyjr]mnmopmppdfttxzgskx[izdppfwcovybkhgk]fvkayiehovdtell",
  "iexrrbeaemviitehtp[roljqxowqygdgsm]ivreafntcffvmlzz[lizcvljduvxcagbesmv]omfxhchosarpcvc[gedvomisvdeqaegpgs]insntwdgjwueajmwuvq",
  "ctkzgbjyhaqyujz[ypefyuwtymywmibeahs]dizofidomymkuem",
  "ybhzytfiujtbgscbth[uyygihthnknbkezsde]dkwwekwaizqrlvsd",
  "jbfrextgimuvnardmw[taekyjnrtgoptfimza]qvfbvynrmkzpqvn",
  "qnhabnidoyofdraivca[dhpopjoanlismbrptd]bbsdkhzwomhbvpdlgf[embghmurnwkldzn]xbzmclamgdmlaek[uxjyrmvioaraxgaecbd]wgxyryuiqbqlgoq",
  "pbtawfzmwiyrpuwufls[aizupicweopwuwdh]lycvoucyptvmhmbcvy",
  "qutvjiyvnybdnqphjis[lmmvowtnuqqgmxz]fxvlamydgfhgdliro[vtvlwaljqzuvykjv]myqmrpgnhjesdsxngwn",
  "zqmevxidmdesvauvtne[braiqdoypbtqhupnydk]povdpjohaahhacp",
  "dkoijazllibpgqdykrd[kkwidlxrpncilooj]femwzpzjqvappwhiqvs",
  "xczngjtppoeuwpmzmqi[qxbucaizusqrccr]tlygkbkepxpfyvsxq[ysnlntspzogsdqy]jizbgtwezdijmqwv[qzxmktcdmjzprpky]vsvdeudyqlxlnxzesw",
  "svzequajltarrcb[czldiizopqirfrl]ykemudqpuiwrygnpgxb[sgwkwuuglztgifzlra]tvyiepilmuugkfbxx[ktngegmqlgowuaugte]yurctnmiqhzhuoysij",
  "kmsioyrdzwlkryie[nlglpdcbvpxnjivxe]envjtnoyibmeywsfq[sjgifouwnmgpicfmv]ljxvwumxgoeycrmhav[bdbuatclqevnpbzpbc]fassqujlonngcgims",
  "dgmhyyohzdfuwrsieaz[ekqeihwyxqlrtqccym]elnufksijsbcjgdcju[edcakptmhqwkgnskov]givqtmbcbuvranezor[sqjtcgzxnwoqxvlf]xwjvgrgixwqeseljzzu",
  "rlneywqoymwwagdcwfa[yirtwsnhblvxloubnkq]zuvfejampdwytuux",
  "yysxkfxnxjaysxsnk[ehfvdksybqfpfkizl]xfuaaaiywasciptwt[czexbndlrsvvgbz]rpxtnkqijkcwhfybyi[lzvvhwafionwjws]nitjcapzmrergulum",
  "mrvqdigfhpbmojh[vsabnexxmdgumia]pmcjeszsivqvxcqvsyw[iyphcdtbsnkqgwrs]yeqqgbdtbdihbpbqe[lxnhjabohcyaodlf]qgetfulcpxzrfoaq",
  "ytsfctvxjjgmzvsrfj[yzkrnxexysyfhmv]enrdxjxgwjtvssemwsb[xizlxcvjfpkorke]qmdielruvleylhjai[xekseaaxfsieskhoe]nbxlkitdwqxahsc",
  "wfuvwmvylobxnvz[naispvffnsbooejg]fwmglolgtoalwcua[sjihruagaogksuvlk]nfrkvejcewefngxr[fgrswaghzetdjmzzi]jisbxmyzzfdugaglh",
  "mjuzeprqjaeuocfhshw[gqbjfkgmcmazhoowr]tqpshfutvzkkjspp",
  "tpzazyptdgbjcsbde[idazmfolkzscaxmhlej]rrkeoiyfbgdawqbwdfx",
  "jbagbtdtlllbgtpim[elhndkhbevplbsszuyb]klbewrlznmjiwwbo[sifcovogtcymjczttqq]zbcwnieekzkrvhve[fiteeyesshgxsri]gvlasjdesbcdljes",
  "byofcndnzghbyddde[gxdeaizfmclizur]xrelswdjqxwqwhvry[xnztchnubvqytinadwh]rzznukxoxlictdyeaxe",
  "wjwenjbnpesznjz[vamavasbbiygdxgypj]pjahkcpxtigyetjbg[ncwuawgdqworublg]qihdfafqucjmmjvavx",
  "vjmupdypfwnunzszjk[obdjtqupjbxtsvgfvxd]htraivhshrbrtioxp[xorewajhqbfjnjtjjda]kowpnkbnssbaeefafd",
  "baneqehuamvsvumwa[qwsvdplmmhgxnde]yxnklmazqqnsiqqoram",
  "figunhrsktrgzydgqf[mkaikjretijvyisb]ijkjnwmhpequjpmf[dhpvomlntlfxfql]tmqcjebupvwogrcqq",
  "jgjfinegoadelrniyx[pmeqlndgglnmamoi]oczjlaacneocqskwvq[fpaqzxugjnjzeyfij]yjcqeppidbybggeu",
  "ecwsacjwxdzhiarh[yobccwsqzdfkmkiy]urkbgjhlpqlzpqkkama[blohtndxvzauzmkphi]szgcudpbmigulxdygss",
  "ifpfzjzsfuoptstfx[cmrgispdkvgpkgp]jthomxzuwqoklrwdo[kjvwsndbocpwjkohmrh]pcqjrqwqtmnwnzq",
  "hmjaezjuxirclucvrjp[jgchhqqjdwlcbqxl]vqronetyoakaymd[dghwiinxzczzyhxtbyx]jlwyvkcpwmmzimmgpwu[ipozfuhemxpnvgypup]gbdbrmvmiucxsvncok",
  "cvosfxrllniwmilafhx[qvlgrqnlglzxxwkzlqq]awgrklvdwoisgzaigs",
  "uewfjatgizqqlvrkrz[nmntapsxhdhlbixzkn]utxlklcoqpftbomalyt[zphbfpaurjeadwnem]enifdznnxtkqwtzbetn",
  "untkfdlrtrgzqzhlm[ixwrxatznbfjwgrfcme]viuhyjxwpkijkgnevq",
  "ohvfmtaxuwdmsoiby[tdlhczjunuqsayec]yvwerqkenunmwbzkw",
  "hfrxeebhqzdcvvxan[qmunjqhrctufwhigknm]iosnlvcuabawfit[btjqfyuwqrpebschzn]ecqnihecmexlbzx[yqjyvkhczssqsdd]viqgdiclpqeyqffzqma",
  "lcqgqhmoohrduoyib[bgpymootpkaaurwpt]xrhbgqgouvnsmsvtys[vdsgoztgtxznrwgtd]mqttxauvnnlumwpid[jpsopjefodyjasr]fggczzpbsozgyuuatqe",
  "zejfdkeopkkhetnegv[pcnvvynzarshkssfk]xhchmaevcunnntosp",
  "hbsyznnuhlbnkukb[xlbjyybzasnmdzhcu]qbhudtxqzgxdizkhsta[frgdznyqpxvqiforkfg]nhajjuvjezlckhwnhfh[ikgjiseblupjvjypq]rvidyciegjpsvnb",
  "kgbpvzoboykteazzud[mhzdavurdoxlilzz]ibobhuqldvpsrdyrs",
  "ihhqabgyeggdmekan[uwowgsacpnmzoanjzi]yzdwccpcxpnbrqtodn[lmoyartwmmrrdcmpna]vsvtkkdnpoogccpbso[gpagbkwbimhvggrybdk]vbzuymgeuiyzzqe",
  "vmxehtaukupjmuwpomr[lkrhjfztpatjinfsgf]tmbmauhzbukhaec[nqumdnkvvmgvklc]biexzmyjrfjglhlj",
  "jonpalkenhdiunwwu[rktkhkjbclntuktp]adkfozdrbwoliiafua",
  "capuhywpkxszkovgxc[idptryutjkmotfxyhi]jzwsnansrvdtnhql",
  "gxehuqiocrlsacbqeb[rdyzzdhpssyghskim]pgveykexbmuzpsk[pphznqtwkyovzekg]pzegwkwhsqhoxtesw[anjrbndwktebram]xbljkzymwhtawfgmvsr",
  "uzucmwugxsebretxve[jxmxkrawhqjonmvlrgw]wjfzxecoqzorfeklk[wllvzkgqkyghxnakv]ebhhfyupovixbeu",
  "ivdvroagozznxpsrb[fmehyktseiygzhg]ihihsacjbhwlsqcltcs[lrfpxsitvxngjczlhy]vizbskftkdpxjxmfy[mxjzwcjpawiixlm]xgdxlfuncggljam",
  "ezjlqcmpcyhuaqvqk[jqsnxatsamlnkmiiz]xxuxkckkuqeluua[oubrffsbrimwypynw]nsvnqfewnjaygzhmzi[htgihgsaghzfiecjkzz]hxdirzlptlorqhpqdu",
  "gaghiqiwjicqoqgeigf[bqlyujemvktpdrc]yryxvopitltkawu[uhubpfgmvdwhmpq]bnsbmpgoffqfagah",
  "nzrkvooaozddmtosl[azotwmqzsuusucq]omuyckwghukrmasvmcy",
  "xwvatbqgxdegbjlmx[lwfyqykhoekwzguiz]ezcbliyqsjqcrnxlzp[axciwvxoufngfobuwfb]wnwehgbkqinenwtug[uixenvjjzpxdjvlp]yjntwgoysqzcmpx",
  "qbjephcmhmjghzufgvj[yecctfepsekssfytvt]odszsnhmhqedlpsp",
  "whrhtehphmdjellw[rikrtxhjnvykylz]ygfsvsikenzpkqpeic[qagxwidqjnzuaphptz]ehzlezihwyeddllqma[phyukqeqnwaxxlewmx]jgfpshgynkbxhndam",
  "igxyfonvumjqsfili[pzttaquuoblzpplwqgi]ayoxrwxdijoapty[knzjkxeybsogxpblk]nsdgcjwnxkyhnudt",
  "vderuhwdjiycocebz[bcbkwyvdbrsdembof]lvuyrwyxfeudnttlki[mnhcekcsdwydyvdqmsa]nniomyylmrpiebigfm[fxjgafzhfjmsmfj]zlixehsgzunqdfzi",
  "rztclllddrvgmeinyjn[rmrczftlbgddfop]lktnlqiootwystujyrt[halyulsixgnjgnmerwp]tidtqrqkjazjqxcxc[qdtqjgwhghmhzgs]zynianlwhliudxqcaq",
  "iqtysrbuakutpzky[fkbwssujafznbrpgp]tghrsucudfkwopiq",
  "aeomklosgghqvby[eszlisqccfrzsub]qvzsydroufvexxzgq[whuifrfsyozbrtrnuo]fooofrgfvswuegorfm",
  "lsrlvazcqflboofxn[wjnckxhsdpvgdztksz]ohvrikiotpweshrpc",
  "prgnwoxewhxqlscj[whiyluowgdtplvkaysx]loyauvyazitqvvbtt",
  "ovlqtusdrepfuqga[ofrxlnsuybazakeu]bptiuxvpnwiniika[gfrycmzwsocgklsul]oijdkuanbcuiwycs",
  "ellqishkhvgzivgit[mfpeegujtqhvlgph]nirfyfvsktcutqwjrm[odczrauqpoftxfz]iigvivyjnycpgoe",
  "dywztxntkhifqxzewgr[cxdjetpwumsfufwq]ncivdaekpguafmptzc[zijxtdirzcwsdfdux]marhxiyfiyqnfqabvhj[fmgmppiyuyjjcgp]zzrtwnzazhdupstxoqh",
  "qkdkpmdultxsiyqvj[sazqiudqdlmmcqlhrni]cfcstwcbubojhseox",
  "tvhqwzixtttrgveni[sriepjvvqxkofcazfz]lakfiepximdfvunl",
  "ojoyeemrzcvjbklgezj[onpawvhapazvhrpw]oqniajojwqfiuba[irwtvbvdanhmhmmlhd]fbipunedvcvhfblj[mdbzmpinbeotbxxbji]qdauinqraksnrapxapp",
  "gsbaopbosvdudqlmu[ivmbodlhfdhlsjmkp]ftwqvpirfoqtmwefmf",
  "eqtlbskgmhbqtgbi[yxbbdteevnsklvtyav]jxestyfwoorkwrvku",
  "chevdvfhpvkuxum[peaetozwxernpqs]wkqczpgdaqelouq",
  "cxyjnshkwppsryalnfr[nugjqvzowusoqslcu]onuxvhiczqcudpvqpv[nwceqjprvmxqopmyadz]uonymadadirxtzh",
  "tehqsawtyasmhiiuzla[yqbkdeqjzdwpphgsy]lnpnubwvajqnfbivq[mcdzbrpjbivjnaljk]mcqboqlthnivvznwie[bzhvwyqfepohgom]vlwggqxvqajpwotrts",
  "uaimyzpnghzhhwto[slftskripqykqcjyggv]zlkzpbogxfofotf[qufvwtwwdwgrirguz]upksgjavtwquxhjvt[emuniznnqbzwbunuatk]gbeljfqlxzehxbkkgb",
  "twbnitgddwwcekwyvu[lyryovphvnxyhdiugew]qhumysdyjehhpcbejfi[hwmqxsuggozjatjdh]rpcivqrwjzaghdr",
  "hgymfqeetficypoi[jjbnqgklsbqbvhemj]hymgrvdafpptbal[lnomrtlcvjjleuye]qylkrvnikqzqbqowt",
  "lqclrjtdxwqnmsrdt[uzvyfuedzeatgafjqlh]rmbceakwbyxaytmpyq",
  "dmnwmdiozdjudnb[ynbkhdoeaezqmqgaj]mtukfbjftgxjendzjf[lpivjcgdbyoxuzuv]mfzuzzzczbuqnlt",
  "ldgzvqkfmiucanm[vxcghwihxhzmfdqg]zxxfcadovifhcokf[yffyqmiufajqfnek]joyenceqpyctdozako[fykuxhxoklxhyattt]plohtcaeaslakbjlpub",
  "ehoedgtgpcofzqt[kpoglgzrteyaxbcsb]jwvdmddihjamjhxf",
  "dipxjulaiynvxlghzub[kcbfdqsfhmylfmyfkl]rcrhfywauxgixvjhsv",
  "idncoojgztktmhka[aswwuhjriochyuolutq]vghlnxkagtvdsyngrw",
  "qhobrqddkvzvxgrc[zslnzzvzymucnsonsif]nlrtzaqokmayfdukh",
  "zclxrolayyziqznx[jlhjardudtuqswxwxs]lwrsawxwkexotpsudto",
  "pykakplohqlbsfqqcgn[lbppnwufeauerxhj]jhqpqlywpvcrrarxg",
  "zovsntdemqbpiowr[jnzwaljfyhpsmzsilnh]yfvudedvfiejxxg[hvmnfeooeszyukwer]rngcalymgaqhpzolak[wkijhclldfkzbsindn]puvqceoagrlxzjstjir",
  "pqhedkzzetrupqbx[ixumgrrwhycweyesj]mzhybguzyeymkbvgedq[ravsmyhvcasiefg]klxzkcccjrjlnoc",
  "xhckblbvakwkmkaia[gdavqgxdmqrtzozpf]pusueuyfdoqxvzr[oqjftahzzjhnqvoe]avvqwpktshygbbwlov[shxsusmpxjrtwlo]ovxsdpgcbkfdfxtj",
  "vibqoywqbbbwqlhxu[msoaqriotchchbvdq]hgtuwiyftdpsloqx[wldvdsxjjfommcbwsqp]qacozyvkylutzfqmt[qzihinruscramehd]fxonpfbikrvdvthvv",
  "dyqqwgklyqkroyg[jobabgjcrthkpsbywbq]xtyhftabahedidrcsx[ubirxklyivgqnecjgi]tftttofwxqhnzccggow",
  "crsmrnflfzcsyghv[knhxevfwmubctke]tqnefabdgjrpaesv[flxwkwlgakxxvym]eyeqghxxzfprbgi",
  "mnyclcckazalnpog[oewwwybglgddrvmzqx]wffkombewqgmkedvavu[zzwqbroptkfzzpjhde]rlfihfkxpckprppdqui[xkvoosuoktjguzz]dvzfvfmaolvxvyau",
  "ebncgxcxmcujfepex[bvmfdqysabsnpgw]hfjyheaxastqtspkg",
  "sruitoenosfxjojwwft[qpzoowlccwgjuoxoo]hpwypeurrizufiz[ljioorwzfeyplnh]jlydbfwrnwiliyhcl[jcdpksxiqccznhxxt]arqloequpfmjilkkz",
  "bmpethfdslughxakrht[nlxcidxsqkmzjgtp]kbggfqkuwqgoduougki",
  "xcvgfrdbdjkxotejpw[ayjizotggalctcmgvx]erdcqgfzcqtejbelhi[hcvnxmxfhplcyodgail]osvbtkxramwossj",
  "batqefjqnkntqrflsbu[xhgjvalxstnroejtkwi]wdbninlgdbzjdtrdrj",
  "xdmbyrqpjazisiusd[pwuufxsibxofsidlw]doxmmqrlrdkbthzu[jovsispmzamrbpbf]lahoukaaxhuqkwojydc",
  "lrhrcuznqlxwwpqw[imtbphsvqutmmonwmxh]xicatywdonyxrnfslln[zsjlezomgwaiuosri]wczsfgwwvdxhesvd",
  "sabvgcoegowpeil[fokxrjzspnzdgjtj]dsmdrftpcjcvjdlp[rcjalaknktcappj]xyfkxiqnrgfbvopm[bqgehvegzctewuicitw]hltewexamvqziya",
  "abbqznhhsxeaxbkdnay[iwhkeapaeescmud]qowtjnxyykxffoojw[emgdbpfpzdxbidgaf]sonmiupapgunwpx",
  "dfyxkssblsypgrat[djteluofdtwwwvavwzb]bfyfonwtkklsbiy[axgrtmipfdtajuh]oklwxrjczctobsvaux",
  "xpzgaemndcslzqdyvr[cdicponxcskevqwgh]uwsgkgvvmecridzarnc",
  "orfwxmlunvcjrbxw[gpfuddqzczvepwppf]qfnefzllcnhqnknbqs[irzbuxtalryeszh]rnmiknkbcjoyzaqk[llmznlqzmscpunaof]bvrrhoqkhnjetzzp",
  "sihnwytrdrltxgiphpe[ofpharlfgnrlomzbmyb]yvoepubihwfjgodq[xtgdslranbatcltae]zofwbmfwvaxwztq[fguozwlfxsailqm]cvwpmenxykbcohdacu",
  "tniypqcphlyedmncfk[pdlpjawkohpngziwtr]dhxunpoeoaugsfgr",
  "lbssepedspnlcszk[lvyntqvyokgnvjfmsi]zajxmtuwazvktvhzuvj[avtlsgpgrlmmuhw]gwztdmrpepbaacr",
  "ufcnessnabzliyi[wokwgfxoxodbsnftm]lcjgwtbwsfyiyylvzr",
  "wzpcmdufopsubdoiaah[kjqpnnybloxobzihuc]stbfqlottimqziovejo",
  "nncfxdmdemmnpukupsb[ybcoeahxnekxtgchupq]zicviylmoatmdrleq[sanopqbfyadccfb]vwavjdhjavuwtso[uqbgkurjbvhndiwld]wfjopjyjzvsjldemae",
  "woyyqllnxzszhtupsx[sloqklmplznhmaxt]afhkdhqyejcvsdmashy",
  "mrwxmimugiylhfkss[myytqhykdbnhbvypknu]cnozxtugihnvfsho",
  "sictlxwpzkjadrdfq[hpvrstmuptvruaublcg]jfzesmvbixcjucjt[iyirpviscohkhsha]aeocecxzdazoaswz",
  "ykenspebdhiheyfxqx[apdwgysxepuqjgnojvg]kjczbwkcbulivheu[mykzgebyiqpykkg]btmnfeevsxadypcxn[npfqgbjqloqvrffbzzy]mlmqtxnhnnctjdtu",
  "ngusnchutnfxuknlcv[mowdjvjnzqvujpxaak]oyoufjzbmljsjvxco",
  "symioezbuxbwaqzc[tcswwmthlhweaan]njjbrawqdtdxuippa[eblokaitvohpgmax]tqxoudhjjsztshz",
  "sgrrlovxcccckxvfe[ptdjkmmmscxhrppj]caqbirqmphsolnz[zegoqjlxinlxyzzj]lzcrxhmcvsquqrk",
  "scylsxkkxaeszvtcy[gszdxonuwnlrlsb]zacwmxrjvzmjpvlq",
  "lbueccffdqgpdca[cjjoaevszwdogljjjsr]ixupokdatwtymssgut[ljvczddlhjbywjrvi]lvoeurzznjatpiwf",
  "ppyerjmemqjcyrtwl[rhwivafkwqrjuvczfki]szmccytycllkjhptvx",
  "pvlanohdabikhktb[rhuqghztrhsnxzb]hzicauosgyucjwuwm[zxukhkhdduszodbcawl]bsnamihhuivpkibniz[xvddnrjxxgexxixvdw]iwogneyabglukfo",
  "oetftsvwhyfhobel[tbdwzctutpkrwbgyfof]gjbarcqcooyvfgl",
  "fnuouumbmrcjnakxbxb[lgpigfxqswtfaoa]ggvamrrgcwkpqewueo",
  "qfndaecaltnlcstdwic[citcxrtxpgrhuky]iadvalrsoskkamgfap[fqpcldftvpxdivfqg]apmcwtuzfxeebhf",
  "wojmepihrdgobxqbb[spbefcqddlaxybts]mchniwpuyiclelbbc[rpnotwgcgbxpzqee]fjrmglmshjlalygzlrh[asbtotvgpcetuwus]lwuyqvdargfaheak",
  "kpuoflkpeuwbsatp[jfdmiywoxrfsdwowgoy]lhkglaomanlafduw",
  "whoybypqekfoosvrkh[qlhiagyhtpiictjrzr]wwudqwpyvhxjgcpvobl",
  "osoqxxznoarkdazr[mdgpwqqzerqexvzw]qmdlvdjwzhpxuum",
  "hriulhqdkqmqpsag[mxhpmqmstwlkave]egjfwiikoiqfrqa",
  "dnawbjuemmhavvpeuz[mfcvfqjsngfqpcfyqtt]rtstytrryovtkugd[zykgtjgjqpdhjfe]qgowpebjrmkfvnvvmp",
  "qsbtfuxinoaompoxl[oavbyyeudhynllaid]jwymynjhdjlqpmadob[cuakqbhimwpmymkrc]wsuyajblmdyqlegcu",
  "pwrvpamgazkqbggaksj[mgiuuawkxjdpesf]fjqkzejqzjbqhsrl[fepioyojtjsyutdzadl]vanvdyulgdhrvgkinox[dmardjuczmqhqitin]vwlifazcjifeqtzdulv",
  "sptbsjmkysrznmsnh[dmpaodowhsjmvahkwm]iircsjoyxbhyjhhy",
  "votmybgyapqwjcrhrb[xudrwhwrrjvwpjrdrk]ynppocjjdgltgne",
  "mptullgpxpkxbxiqcxt[ixzfshzzixtqlyr]blqccwadqxfkljas[xvgogqahthbuvedk]zmkcnqxdkihrbaupen",
  "xyyidebibbxhxsvg[arfrpovpwqnbyxfx]vbwssnmlxstkjtpnax[uwbvyuqpqnaqfiisc]ixntpfvfopqxzvgznqy",
  "hpyiqmffnpiqdrzj[ymsqyesuiwrsbklitx]kovizfewbtwwvqrgw[iakzsfydvmnsvhmcevf]hrxwoymwevslomwj",
  "yaqkvwkukjjmgix[bpzcyeaorapeljjgmqy]upohdwrwryuyvvkvmv[gvdmlquyukazhvl]phaecmijhexxmvl",
  "remreehpsnlgczozaqa[oxlyovghvjrzbrigrp]tqdljtbhpdviohgfbau[ylduvwrfajjvbomgbn]abprfmeyuesigtfaa",
  "kninomszgkpoynrqfdm[pczddyzwygxfzrsx]lrflhydgglzpzgkht[brkiczgsyzurlcdzq]bnqfybpydotdldp",
  "puwrzvsgmlrcrsli[vzcbfqxthtxcfwgtnu]ydqenlcxvzmbjpa[bbdljuxpkmenhjukmh]qcpxombklfgtfbu[wweucioifjqxzxleki]qstvhgqswnqzfkn",
  "dpazlwrborzjkfedrrk[zilvtiijsiucpei]gwhpzxhnyxovjdpmdbj[ycahlhlamugtcpn]uwaltxahnbxcods[raivuyvbhimqdffifdb]zxzibutkbgvhnkm",
  "nquhpxmcfgvbecjkf[iqxiomcvkwsikndog]qbjhwjrqnjbixnqb",
  "rvgcgncbmigxdbnyaiq[mkeglscekmemitm]gcgcakzrjelvwuu",
  "gkibzuxtmbgauuu[ufdrhvwfkoovcsi]eiouhmvxcavdmnalzp[rgqeztctofjvuvg]vannoknzqmedyzfkw",
  "wrfitwvnrghqcwcsf[bufowebrglpwqfyamac]dmsnadnxhflghshccy[szufudcbeksmuehcrk]cdmgpuobfszbxjbtqg",
  "vwfduowoeoosefney[vekkkorkkxpwyfqo]uwldwbgkzvatzya[gogabhonvyxajbww]pqcfchkslvlsado[kwyxxtyotjdpgctr]iuxylfgsimbxviwqlol",
  "phruznykltlqpwikde[zpupeldmygexzyd]hgcoacoccikjyaiienr[xsbgsufpfyrfqrhdn]bmmqnqdyoxqhcgz",
  "owzjgszbekysgjuppbw[hkbewdghphxixof]gupmvyvjidstmcp[cnjtvlngbpaklshkwzq]mvpofkladjdywitzpwj",
  "fhgtkytwapwuvlsflf[rtsqmkaaortxjezpu]mxakzpztnatooozcwb[tszzkrcdpfnrqrevs]jbfajynuwylgymrya",
  "zpcodavlpmukcgoqbr[pbispendfrwpjltskk]wmociagshnuvfada",
  "ounvrxkfyueplsa[miexwibbkacrbhf]zhpipnyngufnspjt[ycapjamksdeanknvsr]jwjdvdxyzkfiaymnczt",
  "hefpcboppcjdwyysg[omdmipantusybldsf]iwgbtxiflltduoavxhm[kxshpagaxiftbsooqvm]zdaubktnojzrhllz[wyfzkgugcwutntaugug]fxhryzluttrcgkamk",
  "fljvthyyqgrytxyaujg[ghdzcbladiozdvfiwm]btjxlfmzxgwecpr[nnmkhglfcuzzkzhqn]glfuggftjkejlmbmrn[nonyjzcnulxqixp]eadjvyyfqpgumhovzrr",
  "zxzurdplzhsmeiw[djmzvpxzjlrsxynz]mrsjlcjgvehtresbnx[mwhhklyvbxgyzhcgjsq]frcnkpmibekbumhkvxo",
  "iwmnuegcwxoveifq[vcqctujwspffjzfds]vjsabmdbsjptxlmi[paodmystpdcnmnbfs]yqogzbbcyufaqsrxgh",
  "mcvhdbnrqgtbelzjmm[wwiiwgywbouuwqd]eioeejfgrpgqmrirjd",
  "yolncckfseqzfcnh[zrlmftowvspjbqji]oycbpmfmwkceyylu",
  "wwnzbhuxyinpzpkxa[hemwzqpdgvtefkuxr]kezpuujyzmhjqhk",
  "lfxaqtkqilaypwldxf[nnkxdvconabpgfnkpak]njijmwcwmtozxmbmff",
  "pwxxyuynveqhxoaimm[jffrrzgjrbmdwmysshl]isvscrmxunjebsbw",
  "oeftfxdsdwwnfdeofzg[dwnbatlvytfdynyfw]ygxzncoxunbamsiflyt[cjiytwokovqzgjomyu]dqxfqlkafujbpdryw[qlonipqsgkrdrnz]ybxcatfjjjvzxmc",
  "tjxjbkyzhwzebtj[knuerxaxgncdblvtgtv]hmfvnnvoaxgcomqi",
  "qrcbukvnarocwobcoao[qxokgnrdzhdrfpfb]dbjuztmmtfcpilyfg",
  "ipazhwvkekhmtebql[wznlitbfsdvforlgrcu]vgshuptfnkinhcnns[lvcovlcucdofkku]slcynapwriioupy",
  "knemcyzkydpkunfwsy[lblvgettvjqtnnaop]vvdcubmbcerhwrv[mutfblbwbhqyaqvqbne]swdmptokbaejjkejw",
  "lrtnxvyrqlrvgdr[vskapzozjnxafawxcof]lklmewyqhykvotybaf[vycfkzoifscnujxzd]zawsqlxtrmdfnbdzi[esnuyecpbkpvyzy]kvqrkcrskmtsuwxj",
  "mykhtevsefbdbvmsw[qewdexqzctascxznfd]gsitortjzuqshphnud",
  "rbywtziudfcusoflef[tpnmdbyeevdnhzbqwp]dhankwakqykppbmso[hznsiclzncstoyx]yntysjhpcmaomsald",
  "nnkrnnuvvdslxatdyl[svfyjvaprzokilev]idfpnqrveoojjivjl[aqxddyqerlqdpjwpoi]qnvwlfucyeauqbhrxq",
  "xgvqgqggkwgrocwcfuv[ksuneenvdeinesudbfa]nleafraqnmmuefkqfp[xiwxfmnsqanplqkqinx]ojcnjzbfrzwfkchs",
  "qjxhfghkhthamypn[khxnzlrtbpahbdxy]lqnekhkwjaemiadku",
  "jgtsxelckegwezio[nvtllpkazgmuvuhnb]diaupjvghhymjlxnam",
  "opnzxiazydscydlivpo[tcqytqtisissbvzmkm]vcddiutypdsxrdwvl[cjsobhvknqqgtgogc]imvjcixtdgwevtv",
  "pvrbzonklphbgnmae[aedtanzlbawidsnjv]iwqgkskeftjcsgn[errqxakewhgjngp]afhlzcsekpqtxco",
  "dsbcoxlktsdzkrafu[vnpihxybvbhxsiiswj]srnsljghqqcmxkele[kxtsrrxinnptbupu]zlavdiypsgkswtba",
  "xdazohirllygpfdlfm[fblbjovwkzhvhth]xomgtgbsbnlvagsoi[dlwjywogesfetoi]nnuuixlqjmgizicnboh",
  "sniagzohgnxpakb[hgkjtumoqjwapwp]rlqmufuqlgslrnfhz[ifaqeffnzxbnplmki]ningrhmssvsfjtgtj[sujqtmxuoxfqefrzm]cmpvsbjrxsziwjo",
  "kepaxtiktmakitav[kxnzwpupfefitamyi]rfiokrjlestyebbbo[hqubzicmrmmojycz]yxpxlqeopiduzclabff[ckyniqzhgixycxiczcy]ignydevdtmnuhdg",
  "pejkphexksfcunhsfn[qnzwjvwmpvfggfacot]qyquxpwsryqycvxvvmi",
  "bxwmqvhjmdmgslvz[rxkfcbtmgwkhscjxz]syebnpwapeieytm",
  "gcslwkhdfdqqqytlmr[wbxuelynpwtwcps]dmvurlhxmlzuzqqpu[vdeugqgtqexzxekffq]xxnkqatxudmpfqmbobn",
  "rtecaisexsslassmyp[jljdmylatmtuurwhnu]pbsgxkuluemdafw[oetagrvhptcccgfav]tsugsujfrnbjfnd",
  "kophdqxfjfweowjogu[kzhwonvituzclsptx]swuibizaodanyle[fhffdqhbmddadfja]pnuuxaicndlielg[xjmgvmwaabgekenjog]yslsjwnqohlixip",
  "jrvxonjukycxggihlmq[lxwycpyzvgoyfgs]rfjbflylupwayaub[rskjgrstftlcfolzsv]svqltokobrtnchfw[cvvlnjnvsllkjiwpff]hqltzgooweljppyt",
  "fjdyuoxengvarpumg[mmusctupbbssqet]fzuspwqpkkrxjxjgv[xerewcsmfteycmif]vfgczlmwqumezxmhysm[pnksripdftiqmmsamq]nyqvvlybhuwloczuzs",
  "kdwsgoyjwwibzxp[irhdnevdkxanjqflbcr]hqkaaoggwjsqzgldl[njkxssyvdpwjmapxsly]xiwbmkrsqzadlndajg[ajxzdxzatckqceexea]ipvqsznwrxicwbugx",
  "qlaokzumygsagif[yhgseyktvxarwlrwec]omvjffkmqlmpbfaev[jpjxgtsgsxrnefhp]rxtxjsekrlrfasyhawv",
  "vdymxlzuvcmyllatsjw[tdpotqbvdyuolmrc]yzozvzcyebeuakicbdt[mxyrakmwdtnxxjyovm]plxracfttdjdacw",
  "xmsvnapgeoiocgxwigo[fbywyzpoumhgxshzr]jvihinwmkftcwjdcu",
  "hkfnvlxlgpremuujtl[cxrearocatqrirq]onijjqbovbjaqdzrw[ocfvyhdektknrzxneda]rebxvotkttvlvcsvhx",
  "pgihqoniiichejdthn[aobthrhycbtdryq]eqhynlmzzshqtxrptee[hvfivepfwucyzycjhcp]ikchnwsewwynmgwzny[notcbpwebhorzefwlt]cedvskxnstordvur",
  "lboqhgpjkbonftogge[uwlnsehommozqbb]znsonrlkuggywaknpb[hxidsxxorgyafaqiua]ejyksafomrqjvqmzv[mbtfkhfusvhekrsdaqs]veqjiixpsxoqqdet",
  "rznveitwrbokddj[csjsmbnboxzygvrur]fosynrisvtzcezyh",
  "qirjuhiheqiejad[xucxgngkgqpxjvdcpp]ftbxnmhyqyjzbrw[sbyvtclbdbbjvmujhc]qtfjprkfsadiszaudtp[jydcrcqqkmrjmswsko]btfitwujxcdgsyvuorp",
  "mntijdoflawnltppv[nrqgmftvfmhzsyzuq]xctavzlilcpojhrnutk[urkqgsudhalomzxym]ojccxcevzbrthecoj",
  "uavxetzvhhwtzrcvz[upxxcrzfcuhuyyzv]phnbkqsknuirujam[avqygsydscqynhk]myfzlgvfrkzmaaaw[kjeygjchsbumdnmkttw]lwsjjjtsqwkctkb",
  "qpgxsptgxysblzf[qexanqcgsoeaelryo]urqdwfdyqtkhbvt",
  "hejcjdjapqnbfjics[gzanzretmkyecvl]encuhecxvpxcjcnzj",
  "laveumjohrmokeze[edwfcvifacvwxcuwba]akqwavwdxizgjbfi[nnjiicslvnevskzcv]iuodtknvgwjjhlqz",
  "tvdenykburyewcr[vpujqxyfzoeabarlp]anvdzzcwxajjfwcx[mcbrbwopbulwgsq]xxsohqxbefdxdnvva",
  "sjjuzkyypnzxghhs[vnmrnufkcqssjlslui]qmrceglpmpitopbn[dqvhxicbczttschlw]biqcprbxiortubhvdh[jrnarogqknbjuhc]dxwuoqewvlwafrp",
  "zjjzriicccctoem[zvfukltptxfcxazyi]ybrstbqfckhzpyin",
  "txybithzmmpouxp[myzxnvusvtprlfopbd]mpdiimsfydrxlwfsvtu[przjodwhokpvptsqo]sjkjrsurieotgaczd[iuusxyzfecdoxilb]ogrkdantpbmqabblzbj",
  "sjahxnjofgcogwsc[qrnkbvmpouggtckhhmn]cbfqbvtrzbbxeklwjps",
  "dtmioovxufljthrjf[dmjureystvzpnbdx]whvpfzjrivltgfph[uxsypollwtffqwr]nfomvafgjwdngyccf[mzgcjcwkmervnoa]vhkzciyingybbahnhbc",
  "wfxrvuihtdobiqjhti[nongxbhsbpmgwjcl]hrgvzdzwyfbnfvvhzlf[jmrdnwmlykjvjaxa]kndlhjgvcbbollhlv[yxsgehvlvjacqsvjv]olrwroniaokefnncs",
  "qekvcpqbkmqjvwrttyn[ltmnlgsnnvnkrhduu]yvvjbjtyjqkmhwblpbq[zjocywooquhkdtk]hlnqhqxibbehvsy",
  "bhthfungsrxuear[wrlxdhburpptbrmp]hubrqpwhcgwtuadgta[gzqmhjrvfdgeycon]qaeafppembvijuynokn[ehtkocqpjckrixtlnh]zvncbtvcgkvfqrrr",
  "ztnnxxstohjazuqaj[ejiwvmpelccjghvw]ejbadvojnlfejrwd[lmfullddvyzbaps]nrrcpgpbkovglvnp[tkmbuwmezpizmoax]kyejehzhauiwacm",
  "jxvibriseldddsxmh[dvbndvooojqsqeohonm]vdaihjqgweprevdd[mvkmjdklgcdahcmq]wktinpivuvzqgtmcmj[gnfistryttvtephq]untubcnoqkigjtetf",
  "knczacovvbjafjimf[szxzmlsshwbmfaolpf]fdyktgybympgrvjjf[jmgwlbjqenobobssdcv]ncsvvdsdptgejxorq[hbwampvpyljaaszr]zseywhyilppyrben",
  "ygierzegpqwcoiziwfu[mdkphcryguvmtvby]srbihpaymtpfnkv[shgzhlitkgluwixmn]zizuufyltzhzzlhmt",
  "vmzrpcjukhaztzckvca[igjqpuikpkidweh]fwujmjjlbtqytztu",
  "qvhouornvpeluriqvi[rarbbihdxisbisf]bzrfcofxhutynnxnwvy[lreoxyjvzqrfjugqtx]atwhwewmqcfqaxgoofn[iqmweaxclriikoatlt]ibzzkttkvywhmgxqs",
  "xezusfxpfzesbdtey[eieqssrnqsdltcdhccx]dapkztkkivkdcgqdx[qndgoqvyhdblqagzbz]fpcypcudhnckhcz[bfcqfydrpkqglkafv]qbhuwmzcpqaddzkc",
  "pzvhtmfdrpbdsnlh[cipqwqbnpkycglckf]gzaadfhdtrdrwpft[jvxvilmjwcbrszwvpt]tyedarfnqobkceipeff[wowlxfgjggtnsrdl]ytnuvjoizzepjuilo",
  "thdofkulfttuajoulz[ycsocmjyxvvujup]ufjuqkxyicqttwijta[gglplmotiazgxiserrd]wjakifcyctdmvdwf[pgsyeuohmufbbgghbt]ftszzajgfcjemazaa",
  "rivmikwkprlgeqnchjy[qvvngyiilwsaxaaa]ucyrhfqaywnyfldh",
  "iubnysibicvduyyr[exauddwzmrbibqlf]ytbvtezgbxjirddstz",
  "xsmzmnmbaydzkwalu[ianmgniiehgsrfrkziv]gtrxlatvjemmjsaov[xqxsxzjtdbzxdyd]iupjcytdymwvwlv",
  "wlgtcufumqevcutfmiw[kmjogobaxevlhsz]qjzljumvjjfqufufz",
  "ssslcrpxsmiykoe[fdlvqqkbsioczngko]kdsvlpskfxoaewwyk[yvxyjlpxjzupvww]ulkzmnjwcmbxlcnvenm[npytehaooidsygftoh]dfqgeqwewowffpdm",
  "wxbgrnuwyfxwfygj[uxmtbqjuzizeuwivvrg]rtiovrdhhqfkzupaw",
  "abigigfbgglphjn[oubuhmtppcjeqtuq]tqbcbflclayrazg[xmkkmwmjkpobekrzng]vhnoebrmwnfrvpmf[nhjzlsycgzbfhbnpjpg]ilpaahjqnyziglt",
  "boxhzxpawjtcxyitkt[howpicstkbzijiso]vbnzuugolkcfprlhs[vifvlsmydclmwiehgd]ucehjzvnpaknqmg[hjqalfyrfgtivnlxnf]slhfcgbbbyuptbp",
  "mlbpolnctbywair[nrfmgwlrczqikotkj]jhrioesgwmculml",
  "dswmspfqwiyxjup[tshkwdogwieeekcrmxh]ncmggblcjwxztmemjr[scakqcxicckxzvewfv]syxwqfezsnxqvlzpaj[rfuzueksjnfjnyyht]metitcqtwpyjgxeowdm",
  "wzeqxspilpjuxvx[lotnxyjsinaxdowro]kveanxomxwbalef",
  "odqxnjnonoxnaepcfr[ronotxghcxsdblti]chqflolwithtfjf[xmwqbabphhvfnersvds]ihkghptvcbzjkpmdkz",
  "csqauuetkkflqjidpki[ogzgvuzmvciecqphl]drrenfkmdvacsqa",
  "rtiodfayzzrckscs[mispvkoqtgobygxxi]skjgswelcfggojmk[gnkgnlqvbcsfyayqxd]whejqkxmvllfietaako[eoxgvyxqvobwypjc]yokfayaxktzsmpiy",
  "iltuxhczuqhmjnlqcxg[aovmkhahbwpkahaniug]fjttlhkqzwbpvvbd",
  "cvrcpfepqqfvbcgs[fdufjjwiwbgiwifwoqw]ozxtznoxmnljnazun",
  "nvpcofaytxfortfdb[ioxhmfmvdsvjhvoowst]jxuxoiprvpbtmiz",
  "wxoboxgggctdrjtloc[qbobmumiaxiuvre]wddndbuepvwzjrta",
  "rbfcblvoycdqtcrai[dhqvfanemcfwlnywi]zwpmuiqvyazvrtjcu[vrhzwduakgtydri]exkccqngxljrvedvdm",
  "yelxxwadeposqwmakpa[gldnpdsssiedtwoia]fnutzinlwitxrra[gqrtlwjgieenjvsdyce]ogpwuvkgrqdwrtpd[mskovzghsomwwtwt]varlwjpyaqhqayosi",
  "tsqkxrubkoexrnbj[abawvvzvfkgrlbzxujh]dwbeygbnkbifnae",
  "bydvfscyxqosbgd[jrpztzzmlbsvwiyj]ozbpjmabsnfoqsj[vunpfnnmkaokdzlhk]hdqiwgmgcbvquqydagr",
  "faxpqjkgxhlveaua[uplxayezkxwfjqhv]lzbfsrujllneatffwo[yufefccvuseshfjgpe]ifiymxssijpjcsj[azsgfsgkvrctdxh]etbeqcqkontafxeg",
  "shzmwsmcjmujvzuh[lbyobuepivjmzzh]pdwmouqfddxtzns",
  "jilfjmfynxjxcnk[oknpknjhxbvyjratj]nepoxrrrytktodra[idfqecqadsjxjdzdcbz]mbqydahblcmmdjo",
  "okorzkkyqucfigaauh[gpremtdkubmibdiiti]gsgtndjxpayklstcxkm[vrpprmlszcwqbfwbd]cbxuozoyhztdygegv[ojfihektxdbdrzdnk]rbxonpsewnfqikrfvp",
  "iellofcjchgoelbik[npjcdkntljywlncazxw]vowojcjqpapcxqluw",
  "gewdqnohlltnthozlb[ukkgmaojjtudkyeyjtm]livtoadfchucqhseye",
  "wiygtlbqjdnjzue[ssaeldffbbdpindntna]rnbdmqrkgczczvwsvx[ebyshpkbgyxlkgvplu]rdfgmqdzhfkmfmsnsvt[hgaesjaypazdxmktoq]dybncgubinoiqfdndsl",
  "leeebuyzzzgmoibugp[lvatuapebrlexbshrtf]qcousttycegjxiwyi[caayynwlacltdwqql]pufergrorgznfgnwaqk[brrmteivefnujbcfjxj]crutbgrgsuconfgpaaj",
  "zwkrmgdnimrigisxsz[bknjptyqiozjvoidg]kmbfhzpexeemqzs",
  "owvwpwusnvhlkutxlt[hwzqusloofxhlus]vscurjkijaqzugrmey[yipudmfwrfecwecrur]jspanosqihngqdxa[inqtsfmkcufqjwpv]ehthfpekcojyclene",
  "oyurdyqeyjhdqrs[thwnmpjzfsixyyclds]hflrnyrrpjjfpixup[iaxqcxafxnyfyyenql]irkgjyqlhfmapdzyeyj",
  "mdajlilruvlfmqb[rlexuosnsjkkwlsxq]vugnkwpgrgwfjjazpm",
  "vknzgfkvtpwpcpp[guhjafshncsykxmmxu]yrufoyelmieervx",
  "snmzbtgeduqsmzyvovp[lpfajlbspftxelpwe]nkuykeamqmjozgahn",
  "nfvkyixiivbqfuqpgae[jfnytsqtgdvuspfj]wfziiabvnejeswdfu[mvulpnuojuhdbljoj]hteozxzmoyyozjgmvi[lqytlkseljwqsthg]nwnvpacwhtywdcgue",
  "pqkbbpimwqfiqsbu[phfukwjrvhgirbghexi]fxbxanzvshlyfrcipa[ixpkqzmjrfbmgset]jgttnhuxlvprkno[mddqrjjgfqcqjscoepk]wkoddoqrfyfgslnz",
  "twjjuzhotszuilq[mhskfqlabwpocibx]narjcdxvnaersoff[muyjbyjaxcgglqvpms]mdorltexvqiyogqhlx[uiggcarygezuqjgzxo]hkojohzdoisqidzgvy",
  "luutcuiwkuvjayjmhvt[vwabmnqpyzuoxgfan]pksxicdhklgeispteho[cjhxxwfqxxrpwzoozxp]jywabkhdqggvpryxzfv",
  "palbxdpezgzjctruv[lwsburjunnluksunhjb]udugobyeqwkkcat[jklrjtgtapgmhgfmxr]zqvspntbgotdkfffs[ncthjpnxifmbtwxvaq]zmfvmeewqojunmgwvle",
  "ilfnwzvowwsaixkpg[ykfuctzpasgmbdi]nahwpdlspwtwgayvku[sivuklbqkbnjermiha]oqyjmenpuvnkgqg",
  "wrbibtdepmiwzswwua[hhtvakamgvpbimozj]keyvarcjczzswiarn[rzevlfejbttxrfdrtq]xnnotbkgrctvvtv",
  "hleplitmpnifqlj[qctinqcllgdgwbtgker]yzuduoqubabohbwzobr[trvxejtdgdjgbgrdbt]ypkeguppycuoeej",
  "ejgglyddrmygcowyn[edrolltzottdoohlyl]bvygtxqjoxsdebiew[lfcdqbndplbzbzg]pauddylyaxakazvtm[taxnqmzcmbqoznrfyk]anpuzplpdxapxalsp",
  "ckpfycdvzxwaszfnb[rlpwbvohmhxxxfjuiw]xsuhtrinoxtrgpfxy[yrhrlwhadebyvhsi]khpdqwwdpplvkxjqrcs",
  "vfbejggtjbeinaarijc[ckqpukdhbtzxidzpqxy]ntqjvwyfucohwab[gkwkutanobhsawdqym]utiooctsqasbhsxc",
  "wryuvsqzmayelndllmb[gnruyheowybhyvbgqd]tfgytkmzgopovrtw",
  "jaqooeoutgqdpyryfk[tzxibeirtmsivwnhp]pqzckbydavvlwtqlfjw",
  "kqzzfeoptvzsjud[qgmydefzsujkcffws]kaxikfqxsmcnktxcrim[rzggrvnwlauxruqq]opkibncdbuzxiiwr",
  "bghvagcbflbtsfykl[lgriutkubilwksesveb]buffczkrdqfkyriozac[crwyssqxagpqqslvse]dxogzoylrouyynn",
  "ghkhvugpjzesedtmhl[qeeqoazhxcqjpghbi]afscrfvslexjzughfg[psqiknfjccrxsldx]njovkbhkhyznnzamis[kusnklyalxsisbfhae]ytwskmxrzydphdwipx",
  "zgeiqtfvjgsjbcgluma[hwyhtrykkxccmfg]okqorlbwctwfgvntgmv[yiralgrosisdxzkse]tzqnsaemaeiisiy",
  "tjwhvzwmhppijorvm[egqxqiycnbtxrii]ojmqyikithgouyu[lrllrgezaulugvlj]jdsrysawxkpglgg[mpvkikuabwucwlpqf]cmzkcdnrhwjmfgbmlq",
  "spwwppgjgfexuezrixp[rotgzyxzqxyrroafx]tkwxfiamzdjdqpftvq"
]
;

/*
--- Day 8: Two-Factor Authentication ---

You come across a door implementing what you can only assume is an
implementation of two-factor authentication after a long game of requirements
telephone.

To get past the door, you first swipe a keycard (no problem; there was one on a
nearby desk). Then, it displays a code on a little screen, and you type that
code on a keypad. Then, presumably, the door unlocks.

Unfortunately, the screen has been smashed. After a few minutes, you've taken
everything apart and figured out how it works. Now you just have to work out
what the screen would have displayed.

The magnetic strip on the card you swiped encodes a series of instructions for
the screen; these instructions are your puzzle input. The screen is 50 pixels
wide and 6 pixels tall, all of which start off, and is capable of three somewhat
peculiar operations:

rect AxB turns on all of the pixels in a rectangle at the top-left of the screen
which is A wide and B tall. rotate row y=A by B shifts all of the pixels in row
A (0 is the top row) right by B pixels. Pixels that would fall off the right end
appear at the left end of the row. rotate column x=A by B shifts all of the
pixels in column A (0 is the left column) down by B pixels. Pixels that would
fall off the bottom appear at the top of the column. For example, here is a
simple sequence on a smaller screen:

rect 3x2 creates a small rectangle in the top-left corner:

###.... .... ....... rotate column x=1 by 1 rotates the second column down by
###one pixel:

#.#.... ##.... .#..... rotate row y=0 by 4 rotates the top row right by four
#pixels:

....#.# ###.... .#..... rotate column x=1 by 1 again rotates the second column
down by one pixel, causing the bottom pixel to wrap back to the top:

.#..#.# #.#.... .#..... As you can see, this display technology is extremely
powerful, and will soon dominate the tiny-code-displaying-screen market. That's
what the advertisement on the back of the display tries to convince you, anyway.

There seems to be an intermediate check of the voltage used by the display:
after you swipe your card, if the screen did work, how many pixels should be
lit?

Your puzzle answer was 106.

--- Part Two ---

You notice that the screen is only capable of displaying capital letters; in the
font it uses, each letter is 5 pixels wide and 6 tall.

After you swipe your card, what code is the screen trying to display?

Your puzzle answer was CFLELOYFCS.
*/

var Screen = function () {
  function Screen(width, height) {
    classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.pixels = [];
    for (var x = 0; x < width; x++) {
      this.pixels.push([]);
      for (var y = 0; y < height; y++) {
        this.pixels[x][y] = " ";
      }
    }
  }

  createClass(Screen, [{
    key: "process",
    value: function process(_ref) {
      var operation = _ref.operation,
          args = objectWithoutProperties(_ref, ["operation"]);

      if (operation === "rect") {
        this.rect(args);
      }
      if (operation === "rotate row") {
        this.rotateRow(args);
      }
      if (operation === "rotate column") {
        this.rotateColumn(args);
      }
    }
  }, {
    key: "rect",
    value: function rect(_ref2) {
      var width = _ref2.width,
          height = _ref2.height;

      for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
          this.pixels[x][y] = "#";
        }
      }
    }
  }, {
    key: "rotateRow",
    value: function rotateRow(_ref3) {
      var row = _ref3.row,
          distance = _ref3.distance;

      var oldRow = [];
      for (var x = 0; x < this.width; x++) {
        oldRow.push(this.pixels[x][row]);
        var rotatedIndex = (x - distance + this.width) % this.width;
        this.pixels[x][row] = oldRow[rotatedIndex] || this.pixels[rotatedIndex][row];
      }
    }
  }, {
    key: "rotateColumn",
    value: function rotateColumn(_ref4) {
      var column = _ref4.column,
          distance = _ref4.distance;

      var oldColumn = [];
      for (var y = 0; y < this.height; y++) {
        oldColumn.push(this.pixels[column][y]);
        var rotatedIndex = (y - distance + this.height) % this.height;
        this.pixels[column][y] = oldColumn[rotatedIndex] || this.pixels[column][rotatedIndex];
      }
    }
  }, {
    key: "displayed",
    get: function get() {
      var display = "";
      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          display += this.pixels[x][y];
        }
        display += "\n";
      }
      return display;
    }
  }]);
  return Screen;
}();

function part1$7(input) {
  var screen = new Screen(50, 6);
  input.forEach(function (op) {
    return screen.process(op);
  });
  return screen.pixels.reduce(function (x, y) {
    return [].concat(toConsumableArray(x), toConsumableArray(y));
  }).filter(function (p) {
    return p === "#";
  }).length;
}

function part2$7(input) {
  var screen = new Screen(50, 6);
  input.forEach(function (op) {
    return screen.process(op);
  });
  console.log(screen.displayed);
  return "See above.";
}

var input08 = [
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 5
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 5
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 3
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 2
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 3
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 2
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 5
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 5
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 3
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 2
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 3
  },
  {
    "operation": "rect",
    "width": 2,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 2
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 2
  },
  {
    operation: "rotate row",
    "row": 1,
    "distance": 5
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 3
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 2
  },
  {
    "operation": "rotate column",
    "column": 30,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 25,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 10,
    "distance": 1
  },
  {
    operation: "rotate row",
    "row": 1,
    "distance": 5
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 2
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 2
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 4,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 2,
    "distance": 18
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 3,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 2,
    "distance": 12
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 4,
    "height": 1
  },
  {
    "operation": "rotate column",
    "column": 20,
    "distance": 1
  },
  {
    operation: "rotate row",
    "row": 2,
    "distance": 5
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 4,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 2,
    "distance": 15
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 15
  },
  {
    "operation": "rotate column",
    "column": 10,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 5,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 14,
    "height": 1
  },
  {
    "operation": "rotate column",
    "column": 37,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 23,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 7,
    "distance": 2
  },
  {
    operation: "rotate row",
    "row": 3,
    "distance": 20
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 4,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 3,
    "distance": 5
  },
  {
    operation: "rotate row",
    "row": 2,
    "distance": 2
  },
  {
    operation: "rotate row",
    "row": 1,
    "distance": 4
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 4
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 4
  },
  {
    "operation": "rotate column",
    "column": 35,
    "distance": 3
  },
  {
    "operation": "rotate column",
    "column": 18,
    "distance": 3
  },
  {
    "operation": "rotate column",
    "column": 13,
    "distance": 3
  },
  {
    operation: "rotate row",
    "row": 3,
    "distance": 5
  },
  {
    operation: "rotate row",
    "row": 2,
    "distance": 3
  },
  {
    operation: "rotate row",
    "row": 1,
    "distance": 1
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 1,
    "height": 5
  },
  {
    operation: "rotate row",
    "row": 4,
    "distance": 20
  },
  {
    operation: "rotate row",
    "row": 3,
    "distance": 10
  },
  {
    operation: "rotate row",
    "row": 2,
    "distance": 13
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 10
  },
  {
    "operation": "rotate column",
    "column": 5,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 3,
    "distance": 3
  },
  {
    "operation": "rotate column",
    "column": 2,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 1,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 9,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 4,
    "distance": 10
  },
  {
    operation: "rotate row",
    "row": 3,
    "distance": 10
  },
  {
    operation: "rotate row",
    "row": 1,
    "distance": 10
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 10
  },
  {
    "operation": "rotate column",
    "column": 7,
    "distance": 2
  },
  {
    "operation": "rotate column",
    "column": 5,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 2,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 1,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 9,
    "height": 1
  },
  {
    operation: "rotate row",
    "row": 4,
    "distance": 20
  },
  {
    operation: "rotate row",
    "row": 3,
    "distance": 12
  },
  {
    operation: "rotate row",
    "row": 1,
    "distance": 15
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 10
  },
  {
    "operation": "rotate column",
    "column": 8,
    "distance": 2
  },
  {
    "operation": "rotate column",
    "column": 7,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 6,
    "distance": 2
  },
  {
    "operation": "rotate column",
    "column": 5,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 3,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 2,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 1,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 9,
    "height": 1
  },
  {
    "operation": "rotate column",
    "column": 46,
    "distance": 2
  },
  {
    "operation": "rotate column",
    "column": 43,
    "distance": 2
  },
  {
    "operation": "rotate column",
    "column": 24,
    "distance": 2
  },
  {
    "operation": "rotate column",
    "column": 14,
    "distance": 3
  },
  {
    operation: "rotate row",
    "row": 5,
    "distance": 15
  },
  {
    operation: "rotate row",
    "row": 4,
    "distance": 10
  },
  {
    operation: "rotate row",
    "row": 3,
    "distance": 3
  },
  {
    operation: "rotate row",
    "row": 2,
    "distance": 37
  },
  {
    operation: "rotate row",
    "row": 1,
    "distance": 10
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 3
  },
  {
    "operation": "rect",
    "width": 3,
    "height": 3
  },
  {
    operation: "rotate row",
    "row": 5,
    "distance": 15
  },
  {
    operation: "rotate row",
    "row": 3,
    "distance": 10
  },
  {
    operation: "rotate row",
    "row": 2,
    "distance": 10
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 10
  },
  {
    "operation": "rotate column",
    "column": 7,
    "distance": 3
  },
  {
    "operation": "rotate column",
    "column": 6,
    "distance": 3
  },
  {
    "operation": "rotate column",
    "column": 5,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 3,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 2,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 1,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  },
  {
    "operation": "rect",
    "width": 9,
    "height": 1
  },
  {
    "operation": "rotate column",
    "column": 19,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 10,
    "distance": 3
  },
  {
    "operation": "rotate column",
    "column": 5,
    "distance": 4
  },
  {
    operation: "rotate row",
    "row": 5,
    "distance": 5
  },
  {
    operation: "rotate row",
    "row": 4,
    "distance": 5
  },
  {
    operation: "rotate row",
    "row": 3,
    "distance": 40
  },
  {
    operation: "rotate row",
    "row": 2,
    "distance": 35
  },
  {
    operation: "rotate row",
    "row": 1,
    "distance": 15
  },
  {
    operation: "rotate row",
    "row": 0,
    "distance": 30
  },
  {
    "operation": "rotate column",
    "column": 48,
    "distance": 4
  },
  {
    "operation": "rotate column",
    "column": 47,
    "distance": 3
  },
  {
    "operation": "rotate column",
    "column": 46,
    "distance": 3
  },
  {
    "operation": "rotate column",
    "column": 45,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 43,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 42,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 41,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 40,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 33,
    "distance": 2
  },
  {
    "operation": "rotate column",
    "column": 32,
    "distance": 3
  },
  {
    "operation": "rotate column",
    "column": 31,
    "distance": 2
  },
  {
    "operation": "rotate column",
    "column": 28,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 27,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 26,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 25,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 23,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 22,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 21,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 18,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 17,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 16,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 13,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 12,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 11,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 3,
    "distance": 1
  },
  {
    "operation": "rotate column",
    "column": 2,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 1,
    "distance": 5
  },
  {
    "operation": "rotate column",
    "column": 0,
    "distance": 1
  }
]
;

/*
--- Day 9: Explosives in Cyberspace ---

Wandering around a secure area, you come across a datalink port to a new part of
the network. After briefly scanning it for interesting files, you find one file
in particular that catches your attention. It's compressed with an experimental
format, but fortunately, the documentation for the format is nearby.

The format compresses a sequence of characters. Whitespace is ignored. To
indicate that some sequence should be repeated, a marker is added to the file,
like (10x2). To decompress this marker, take the subsequent 10 characters and
repeat them 2 times. Then, continue reading the file after the repeated data.
The marker itself is not included in the decompressed output.

If parentheses or other characters appear within the data referenced by a
marker, that's okay - treat it like normal data, not a marker, and then resume
looking for markers after the decompressed section.

For example:

ADVENT contains no markers and decompresses to itself with no changes, resulting
in a decompressed length of 6. A(1x5)BC repeats only the B a total of 5 times,
becoming ABBBBBC for a decompressed length of 7. (3x3)XYZ becomes XYZXYZXYZ for
a decompressed length of 9. A(2x2)BCD(2x2)EFG doubles the BC and EF, becoming
ABCBCDEFEFG for a decompressed length of 11. (6x1)(1x3)A simply becomes (1x3)A -
the (1x3) looks like a marker, but because it's within a data section of another
marker, it is not treated any differently from the A that comes after it. It has
a decompressed length of 6. X(8x2)(3x3)ABCY becomes X(3x3)ABC(3x3)ABCY (for a
decompressed length of 18), because the decompressed data from the (8x2) marker
(the (3x3)ABC) is skipped and not processed further. What is the decompressed
length of the file (your puzzle input)? Don't count whitespace.

Your puzzle answer was 120765.

--- Part Two ---

Apparently, the file actually uses version two of the format.

In version two, the only difference is that markers within decompressed data are
decompressed. This, the documentation explains, provides much more substantial
compression capabilities, allowing many-gigabyte files to be stored in only a
few kilobytes.

For example:

(3x3)XYZ still becomes XYZXYZXYZ, as the decompressed section contains no
markers. X(8x2)(3x3)ABCY becomes XABCABCABCABCABCABCY, because the decompressed
data from the (8x2) marker is then further decompressed, thus triggering the
(3x3) marker twice for a total of six ABC sequences.
(27x12)(20x12)(13x14)(7x10)(1x12)A decompresses into a string of A repeated
241920 times. (25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN becomes
445 characters long. Unfortunately, the computer you brought probably doesn't
have enough memory to actually decompress the file; you'll have to come up with
another way to get its decompressed length.

What is the decompressed length of the file using this improved format?

Your puzzle answer was 11658395076.
*/

function parseMarker(buffer) {
  return buffer.slice(1).split("x").map(function (x) {
    return parseInt(x, 10);
  });
}

// Kill multipliers with a ttl of 0 and reduce the ttl of all that remain by 1.
function age(multipliers) {
  return multipliers.filter(function (m) {
    return m.ttl > 0;
  }).map(function (m) {
    return _extends({}, m, { ttl: m.ttl - 1 });
  });
}

function calculateDecompressedLength(singlePass, input) {
  /* Rather than actually expanding our input, we calculate how many times
    each letter would have been counted in the final output by maintaining a
    list of multipliers. */
  var buffer = "",
      decompressedLength = 0,
      multipliers = [];
  for (var i = 0; i < input.length; i++) {
    multipliers = age(multipliers);
    /* For version 1 of the decompression algorith we ignore markers that are
      themselves being expanded. */
    var shouldIgnoreMarkers = singlePass && multipliers.length;
    if (input[i] === ")" && !shouldIgnoreMarkers) {
      var _parseMarker = parseMarker(buffer),
          _parseMarker2 = slicedToArray(_parseMarker, 2),
          ttl = _parseMarker2[0],
          k = _parseMarker2[1];

      buffer = "";
      multipliers.push({ ttl: ttl, k: k });
    } else if (buffer || !shouldIgnoreMarkers && input[i] === "(") {
      buffer += input[i];
    } else {
      decompressedLength += multipliers.reduce(function (acc, m) {
        return acc * m.k;
      }, 1);
    }
  }
  return decompressedLength;
}

function part1$8(input) {
  return calculateDecompressedLength(true, input);
}

function part2$8(input) {
  return calculateDecompressedLength(false, input);
}

var input09 = "(121x14)(7x7)UOBCTWD(24x1)KBBJJRCFNOTNFFCKJOFGWJZT(12x6)(7x3)CKJUMES(47x12)(2x3)IY(4x12)JSFP(12x13)FDTYFDWLHWXE(5x11)XLPGL(2x7)EK(113x4)(7x2)LTVKCEC(75x4)(22x8)XBUQNQXMZPOAACRFZACRVP(2x2)HV(33x10)HTJYEBCTFDFRIXRIUBWJJXFDNGBIVATET(14x6)(8x10)IGIWGAFX(102x2)(34x6)(6x14)AEVIDQ(8x10)BSMUYCJH(3x9)CQH(2x8)RC(33x4)(19x3)CPFEVGBWGTXAVXRBGPB(3x7)UDY(10x6)VMWBUOTFKL(349x6)(5x6)GZJZB(70x1)(3x11)JEL(13x6)TAKTWPYEOKXNW(2x1)JH(7x12)JGYKSGB(15x14)BBWIZVLZCTAVPQZ(56x4)(7x8)DITERGP(19x11)QHUEFNLLGAPSGBUERXM(11x10)XNAJVEWBNKK(67x10)(10x9)NLJNVBTKYM(13x9)CHUZLFTGZHHVQ(7x13)TQXJQNB(12x13)YTMWUHSNSVTZ(120x9)(10x3)GBAYFDGZQY(3x3)HLY(66x12)CZOGABFCFJVWGRBIRSUYRNZIBKYSAMKBMDDHMIFUKNQXXRZCPKTOSEEPIUOSNWASFL(11x1)FUJVJTMDHYF(1x6)Y(97x3)(91x5)(15x3)QIOHSIYFOFKMOVR(7x14)ZOJZFUL(9x2)SLKMEGOIT(9x8)WTSYWBDVB(22x15)VJOWEEJVZEDJZHXFMMFJGN(144x6)(18x15)YSOSIDNVRKTMWVTUIR(54x11)(30x7)WJMCXFQRIHVATBGUGBSNIBACCIZLDG(6x13)PGAEOU(1x4)M(52x1)(31x6)HYVTZLRQMOOTDMVNTHCWNKFZAYCSQDH(3x1)QQE(1x13)L(79x15)(3x15)IQI(8x4)(2x14)MJ(44x9)(1x13)V(9x15)JYDFLMSFM(8x7)DUSANCRL(3x15)DOI(2x5)GS(147x3)(8x9)MSJOZXRZ(41x10)(10x3)HBIUVPYOFY(8x9)UQEDFXWT(6x11)UIUAZE(11x8)CEBVPEYTVRL(63x2)(9x8)JUXYTSTDQ(7x1)KGXPMHC(7x1)BGCLZRI(12x8)UORTKYVYSXLA(2x1)AS(45x5)(38x13)(8x6)MFOJKOZQ(7x15)IJQIBPC(1x7)G(1x7)D(9x13)LFUYNWIXV(229x6)(6x15)QVZPFF(89x11)(29x11)XGWPJUJRATUJIUDSLVLEFIZGYPTRR(2x7)SF(5x6)YNESL(30x6)HUFRTOKJTJHJTDMPEPSSABHRXFVRIO(114x9)(3x11)VIX(12x4)STJTDQNVYIXT(14x8)TSOQFREGDHTUQQ(18x3)SJGFDEXKAJRYGQOMFH(36x13)JMVZCRLSAWLVQVCUYLOCRFJPZCSERWTFBXFP(3814x13)(38x6)KCXWJCALVQUEFCIKOALALSWMVFIESMMPSMNQAX(466x10)(459x7)(6x15)KKUJXQ(269x4)(140x3)(2x15)MZ(8x7)CSWFLUNG(74x12)(9x9)YJCQSVNOZ(4x13)XPBE(10x13)SMUGHEJULA(27x5)JVKTVTMERNTWSWWVTGGVLXJEROH(18x4)(12x3)KEYEMKAWQGVH(9x1)VZOQEDQIE(109x1)(33x13)TWTVQLOCYDQNNDWJFQEQGBXHWXRNQDCHA(3x8)TYE(40x15)(15x7)HSMPJHLPWLJXDER(13x5)NQPINIKIHMOKO(3x8)AOO(1x8)R(1x8)J(163x13)(7x11)PALPTMS(142x12)(90x5)(12x8)DEFZASIKPPFQ(5x5)BITJH(10x11)EMZCZAQLEP(1x13)X(31x15)JWCDSINOGRNKIBKIFHFZLRXGNSAAKDR(2x2)IP(17x7)BBADYLQPAIFUMEHQF(10x3)(4x13)UNPM(2547x14)(1582x6)(171x15)(5x7)QGBQE(15x5)BJBAVPZIREQQPQB(85x9)(8x11)BLPDYKFE(26x11)(3x11)ZJV(4x14)OWVX(2x6)SZ(32x4)(9x6)ISYMZALQX(12x4)LVSIEBNWGKXY(43x1)(12x7)MVESNOTEVGHU(6x13)(1x2)R(7x11)EJLJPEC(338x11)(111x3)(4x4)XOGF(13x15)(7x14)BOGERKD(76x2)(34x11)IBXWTZTGKHVIKHJLUKWRLBDDZMEMWGTBXM(18x10)LIOCEHZYYGEQCFVCTO(5x9)NUQES(83x14)(77x3)(4x10)IVPI(1x8)Q(15x15)EVBXNJWFADWAMPJ(15x14)NEJGHYLWAMYQFRZ(10x12)WSLXPORPOK(84x14)(2x15)UI(2x4)HJ(7x4)(2x8)PS(44x5)(8x3)NSSLXQCC(4x13)OKKT(14x13)NGFKAHTJPDKWIT(2x1)NV(14x7)MIVPVOYSJLQVVQ(13x2)(8x7)WZRWGDQB(289x7)(191x2)(33x4)(10x2)EMQXNCJNCO(10x11)FEFLAKJYDY(11x12)XJJJYHETAJG(1x4)S(121x8)(2x13)DX(1x8)P(68x8)XZSHJIRKVIUFYAXDMEFBWNLSKFWXGSVRPBZQSBETBRDAMXKBJYXUGUBLMTLYJSIFFALT(17x1)KDZERNMMSGTYHOSDG(5x3)ELXYV(13x7)DUJFZQVHTLGLX(5x5)BSSPA(45x13)(8x8)(2x15)IQ(26x7)(1x9)F(14x3)MIVVMBTQPFJIHR(5x8)AHCMX(345x9)(17x2)(10x10)ERNQLSNKFZ(193x5)(151x4)(4x8)IWVW(44x3)CMHSZBZXRRNJZMFPQQEDHKEFJUGCSFURIGSFBQRGKGWV(3x7)PLK(59x15)OKACOKQHSCRHLIHMJAIGWRXGHTKSJOBJDSRQXATSPQNGEFRMQCUJNFXRIEH(11x14)TJGIYWOKPQJ(29x1)LSZTUQPVMFIMUIAHOBGIHNNYAADTO(102x9)(14x14)JBNBEKQBJUJCUF(15x3)(1x1)L(3x14)NLZ(10x14)LWUIBZBSMP(11x15)(5x10)SMKOZ(18x12)BIXUYNRSKGCFCDUYMR(7x10)RQDUWBR(401x14)(156x13)(19x1)YIHAILDJTRIQRGOJLXG(50x3)(16x3)IUSNUKLYPRYVPQBS(12x9)YRWCMTSRLLHE(4x10)PGVI(22x5)TFRNDARBWQVDBNEAAFWFNC(11x12)CVTPWLLKOOL(22x13)(15x11)MZIXMUTZNSTCPGH(51x15)(11x5)YZCZIVXNDQB(28x4)(1x7)Y(15x14)FTWOCQZSLYVAUUO(151x14)(59x11)(1x5)V(29x9)PLRFQAYNGSFNPVYKBEROCOGAIWSIC(12x1)ILEJWRNOOBNG(13x14)BGUFJIUCSIHCW(6x4)(1x1)Z(48x6)(14x6)HVZAHRPHBXJWCR(8x14)FFKVJJOZ(9x7)DPYJRKZME(1x1)O(9x5)ITNZNTTRD(313x1)(306x9)(27x8)(21x1)NKKBLUJCWKWVBJYSRUKFF(192x11)(26x14)(9x3)OGJHUBJYO(6x13)YUFAFB(15x9)(2x15)CC(1x15)A(53x1)(9x12)APARACDIC(2x15)CZ(3x11)UMU(5x10)UAFTC(5x5)RWTLW(8x14)(2x14)NR(59x6)(16x14)WEODWYCZMJOZBTDL(12x9)YHFTSACYAOEZ(12x8)PXVAKYHBRBQN(15x1)VQBOISACGXREBRL(46x2)(2x5)HY(33x7)(3x8)WIR(19x7)RCQIINYDJENBXGQELIC(630x3)(171x10)(164x6)(59x12)(11x15)JLMMVVVNCEV(7x6)OWHQFSO(23x9)BCOOQXWVYIECJTMXJZDBYVM(17x15)YMSGKTAVHEZIRIUIZ(68x6)(22x14)HLRCOAKRFQYRSQZQFHMQJE(14x11)SNLYWNYADPBEHE(1x5)A(6x13)HHUHAP(358x5)(114x2)(91x12)(6x11)PSRMQZ(49x1)IAEDPAJTIZEINVKOSVQGFPTLAALSSLGZNNYMLBLNSVHTWJOZU(18x2)HKQONHCLXRZQNSGKBY(10x6)PPMSKUOJKW(48x10)(17x14)MUYLPPXTKGDUMVFAQ(8x1)FSSQAOFL(6x8)(1x6)P(175x5)(28x10)(21x10)TKLCLUIWXCDEUMKMNTNUF(86x12)(19x11)LVULVUBMPDFXUSHMBBM(29x11)XKAATTRQGQIKPXKSNFVNSCZETIQKK(7x3)ABUAEVK(7x7)MTGCIQU(8x7)FIXBWVLT(27x11)NLPMPPOXTURBQFEHXURMSOWUYRM(80x6)(11x5)QAQKMJTVYPN(41x7)YOEBXYTFSKHOSHGCDJEFQZCEASOMEEEKCSFBHZPOS(10x3)RZHMEXFUDN(733x9)(725x14)(298x14)(21x11)RTXLUCDMAULBHKRRRPOOM(245x13)(35x11)(28x11)MPRIHQXIHJDMNHUMDTCDKLZQOYCI(94x2)(9x8)UNVRXCHMX(12x13)CYZXSFSTPECP(2x4)MB(39x9)VVUSANHXSMBRJRBVTVWYQDTJYCLKGHJNPVWWLTX(3x15)AQJ(28x8)(8x4)XBGRPRSJ(3x15)EPG(1x4)H(62x14)(10x2)QPMGYINDSL(4x4)RVRF(12x15)SJAIITIEDXBQ(2x10)JN(4x10)UJRL(11x4)OWVZMZXQQKR(412x5)(31x5)QGENJZBCZZYLWLUKVBIXBTOVXBFLDDR(198x6)(55x7)(3x10)VLP(13x7)DASUKXFZYHYFD(12x15)DPKYAHHLAGQO(2x11)XE(1x10)U(64x2)(5x7)ZYZSI(5x6)QTOBX(16x7)TQQTBJAMYWCBHEJI(16x4)VKXZCOVHVNHIZZCR(37x8)(11x10)VPCGSDYKQDG(6x13)CJFBZL(2x4)MO(10x14)(5x5)OJSLW(17x7)FONWGSEWWFHTWSPVY(139x14)(67x2)(1x11)D(8x11)EICRPDWX(6x6)XEDJJO(22x11)LCQEXSQJXLJBFWUZNVIBJC(1x1)O(38x4)(1x2)Y(25x13)LLKSCNFMECFYSKHKVPEKPZYIB(1x13)O(1x13)G(2x10)QF(2562x14)(1571x3)(468x6)(96x6)(10x6)LUESGTHJJA(74x8)(21x3)PWXPCBEPXJYKMVKKEGPFD(6x5)TVOHPC(30x9)(9x9)AYHADEJXJ(2x14)AO(2x14)PN(35x14)(6x12)ZZFJQZ(5x12)OHAQQ(6x11)YKBISO(8x2)EIPJZHDG(304x5)(39x10)(10x13)(5x2)LQORD(15x15)XDEXORXICVWUGSN(7x15)SFXPZOM(53x4)(2x10)OC(1x10)F(19x1)(2x15)YQ(6x8)COLDMS(8x8)HXSEYMKO(6x1)DKDIPI(167x14)(26x15)OTWTPOFAZSGUVVSMPNJTMNFMOQ(26x14)(10x13)FKRRLIWOJG(4x4)EBSF(46x13)(1x4)H(3x4)CNI(15x5)KJOSTHMKVAGCVZN(6x8)WHTWXN(15x2)(1x6)B(4x1)JKZJ(20x14)CVQVWGGEQAPAVYUINYMT(992x13)(113x7)(1x12)A(10x14)YAQTSUWTBH(82x11)(16x5)(1x11)Q(3x15)YTI(5x7)QBGLP(2x1)SN(5x6)NZQFB(26x12)(12x8)KOLBSMJYLORF(3x2)ITA(45x14)QZYNVSNZKZAWNKYLBXVSYQOUGMKENYEWSJXEMNZTRKCYV(285x7)(180x3)(4x9)RMIS(60x6)(4x13)XPFG(6x6)SMNIRN(2x13)DG(8x2)SMPLMMPV(11x12)PIWPFDAPQFW(76x1)(7x12)OZWCKLU(15x9)BXDUCLPQJMJKFYI(26x7)BHYMOVJSDRFJGSVUERSSPIDYNZ(4x14)HXPC(7x6)NAUGDVY(6x6)(1x1)N(41x7)(35x1)(13x4)GIBSMRXLBHXMQ(4x8)HLGW(2x9)VL(44x12)(19x3)(13x6)HGDRDZTZWFCOM(12x10)VUMRKYBCCQKK(38x3)(32x7)EAJAVUFHHNTLJHQRYGFLBPQPTQOPGDHJ(477x6)(11x10)EASJUDGHGIQ(64x14)(1x14)P(17x15)MWZLZXQVTKEWJBKEG(26x10)(2x12)RH(11x15)LKTIDOFODPS(59x1)(25x4)(18x12)KPTXMQURPBJQXPHHQG(3x7)FJN(13x13)PIDKAQJGMVJSY(169x11)(40x1)(2x4)GU(27x4)BQWCHKUABSVXMYUCWOFXYTFFAIB(22x13)(3x5)YEW(9x2)GKDFZYWAN(1x6)U(11x15)XUKVKXAFHWG(63x10)(19x11)HOSZGVSACEQZADDKVUS(3x11)DCG(4x8)MJOD(6x12)ULSQDI(2x8)EJ(138x10)(61x2)(6x14)XVWQGD(2x10)VO(15x10)CPFENGQAVHQFWMX(5x2)ISJBM(4x3)FNKU(42x10)(16x1)SONQFTFROIPCEMRD(3x2)UYG(7x6)QKQRSBV(15x13)YAWXKSEOQJMEWFW(6x10)VMKSJU(78x8)(23x7)(16x11)YVPCEYZHBKEYQPBD(35x7)ITTJCWQYAAGZKSATUEXYBUHJUDBDFRGPRGH(3x5)QLB(976x4)(21x8)QRSXSFTJCFNYEHXPRGEZE(568x11)(160x12)(20x12)(14x6)CQRYPIHJJXQIKF(68x13)(5x10)ITMHR(50x10)(22x2)RRFAUCXOOWQLABCRBWTWMO(15x14)RGTLKSIJJCKQFJK(51x13)(45x6)(20x7)MMULQRJWTLHXLBVIDRUV(6x11)GPQXLE(2x2)OF(376x5)(48x9)(42x6)(1x4)H(11x3)WZXNMZYSPKI(13x1)AGLFYRNPCRRLS(145x15)(57x4)(6x12)QKUJTG(11x9)RVYVQSIMZFA(5x11)ZOIVD(3x2)ANM(3x14)SHF(64x6)(11x9)QOBUETQZPLZ(10x7)RBRLWYJKRR(10x10)USWNTUBEFI(9x2)DKQICFUFR(7x5)ZYBPAJN(2x11)PT(153x14)(106x2)(8x2)RIIEBGUC(2x1)LE(32x13)JLJJMUPIVWLUVKYMBWNTHPZEFEIYVHRD(11x2)DMMENSENTDV(24x6)VAOMHJKMQLFUALEHHBFKMXAC(33x11)(4x9)AUHC(3x14)QZY(3x2)ARD(1x14)E(1x5)J(6x1)(1x5)Z(366x3)(103x15)(7x9)SGVEJFH(21x9)(6x9)KYUVCR(5x5)SYERM(57x15)(1x5)Z(3x13)EZF(36x7)ASOOFSPGHJATZMKPRJHZXUQJNGIHLLVWYSNR(248x8)(48x4)(42x7)KWYCXJUEVOJSWCMQKFSNGTBUGZRXSVMSOPCUIQDXRP(187x3)(69x2)(13x9)HAVBOORXAKSYP(44x7)PZUUAUKZVUOBXFZXMFCEPIGATEOZSDPYHIESRFEHNGVY(4x15)UWPD(73x11)(5x2)HGADA(12x1)RHOAWENSZZTA(14x8)NTMXJWMIUOGDJL(19x1)VORKIUXSKQPJBELYMOD(1x10)G(9x11)(4x2)LLLX(8690x3)(2886x11)(12x4)OHNKGOWHPCJO(836x7)(492x8)(221x1)(1x1)J(80x3)(4x3)LOFS(34x3)CLJBMLOZCJUPPUKIJDTUCJPXYGHVUSKJEA(5x3)RKMOG(6x7)UAJBHS(4x14)MTLF(94x13)(34x10)SWCZCKOXDHTIXXKJBZKTPDYMPYYSYXHDCZ(1x15)F(11x1)NNZSBPKCQQF(22x14)PRAAJLKDQNOQYELVWTTOYI(21x15)YNXEYIUMNMLCOGSBFVJCZ(5x9)DBENV(23x12)(4x8)OJJW(9x4)VGLSNMVSK(88x4)(1x1)W(56x13)(4x9)RMAH(19x2)YNGLYVRHYKUOVPHPXWV(8x2)IRWPNUWD(4x1)MVYO(12x13)UUOYUSHMUNTJ(123x5)(2x9)CA(55x10)(9x7)GFLAEPFME(1x15)R(15x6)BPCLXTLMVPXZVBM(7x10)BEACYMN(25x10)VNSYEYWBFUXDAFPLQKQGRIEUP(16x3)(10x7)OGQTVNSCQJ(304x14)(2x8)OB(35x1)(29x4)(2x11)OA(4x6)NTGO(7x8)WBCFXBR(197x1)(43x15)(1x7)R(4x15)FCDL(4x7)ZEPG(2x14)ND(5x4)BHKPL(27x14)VWJALNSVFBOTREUGEDIAWDNQCXJ(10x13)ZNNYLXYQQC(60x13)(7x2)VVTLGHO(12x12)LZKPNQUKIDLA(2x6)KO(7x15)PHGFMZN(4x3)MUUZ(22x10)RALNVJOWBMSWALEZXYJODD(46x6)(40x2)(5x4)KMIGF(11x6)TNQNTBDKBOX(8x2)QWKUGGTV(12x3)IDUHNFBVRBKR(2x4)UA(1037x12)(248x8)(86x11)(9x6)BAVTZRNSG(1x10)Y(7x8)CKWDNZN(47x7)(2x15)FK(12x8)AJGUYSPEBESU(4x6)PKDK(6x13)ZSPAUY(24x9)CETFUQGOUTTGHYMPZVXIGAJV(4x15)OYYL(7x6)AJBLZJM(97x3)(29x2)(6x4)VZQWYD(11x14)VOYXUVOQWCD(9x13)YUBMBRTII(14x8)GHEXKOQOBJBRJT(1x7)K(14x11)XSHFTCTVFUCVJJ(53x8)(25x3)(19x3)(8x5)ASODNQQB(1x1)S(15x13)CVJVAXRMPCDJFHS(332x11)(261x13)(34x7)SCTKLXCLXTTLIXLFTZSTIRZCWIUPWBBALX(82x8)(76x7)MOEXJEMFFEYVTSOOMXOKBIDALNTSSUQMWSEOATKASDDIYHBYQACEYXQQPOQJGKJWPAZROYTROLFL(13x8)TCUAAWMDGQNFY(107x1)(14x5)ESCCCRHQRJULET(4x12)LMVV(11x1)IXEYAQBKILH(34x7)XWVQPGDGUDHMQPDSYONILRQBHDULUSOTAJ(14x3)KLULTDEEWHOBOG(8x9)KGFSCTFW(43x11)(11x8)JFJAVRPYXOQ(11x15)FYFLSUKGXMV(3x5)VAV(33x7)(27x4)HBSOBXKNNKOUPVXYJNPHZXIUUZD(337x7)(75x3)(49x4)(11x5)MQYCIGICRLC(6x13)PLUVDB(5x10)APMHV(4x3)VRRZ(13x13)TSFVLHEYQBHMX(5x14)HXMKC(113x6)(62x10)(12x13)QCKLNLPAIHCL(21x9)QQYWXUGWGTDTNQPRZPPSO(10x6)DLHJDDMKOC(38x8)(11x10)ZWQPIDBDYDA(13x14)CLUIPLTASJZUW(118x4)(99x3)(5x13)SPKAH(2x7)KJ(1x9)C(38x7)RJQEDASMKIHWFQGRISULMKWQATIWGMGEWIERZN(24x14)NQBOARVFHPINJKBNBZPUCMCA(8x2)RMACHLHP(971x10)(473x12)(185x10)(56x15)(2x12)XN(1x7)W(8x3)QLJLAHVT(5x8)SNLXB(13x5)JRNTZGDRRSTGS(85x1)(24x12)JCEQWAMTUKGEEUCIRNAUONZY(2x7)FB(6x2)JIAFDF(1x14)Y(22x15)SYQJBZWLULCZGXQBIXWEXU(14x15)LJIHVCTFYCVXZI(5x5)WKPTV(116x6)(88x3)(12x4)IGIJTXWVXVSY(7x1)RDXTUNO(27x1)YPCXJWIQODMQDELMWTTNWIMCINE(6x15)IBMPOO(7x15)HOBYALC(16x2)(10x8)UNLKLIAMGV(17x8)(11x7)PKTQZXQXBIE(127x5)(6x8)(1x1)O(108x13)(1x13)J(39x15)FONPLNOFZKVMKHZCHURDIKKONYANGHORUFSMDOR(13x6)PWOZVGVQKERQG(5x13)KGURZ(19x7)XSJBWWXDFSRZDKZPNLB(360x10)(20x2)(13x14)ZQJVRVVUYJCBZ(238x12)(37x10)(1x12)K(24x2)FHAFIMPOAZESIBYVAXPGBUTW(82x12)(33x8)QYXMEQVJMQXLQYWWPNHCOUJJEDUTNGYFI(3x15)BOR(2x1)QM(12x14)AQCSSRFWHBOF(3x3)GXE(3x13)ZVT(69x6)(35x14)TXXIPRDYVGPEWISZTNDLIKKUVCINQZZYBFW(12x13)CPQWTNVDXIYU(3x4)RTD(14x10)DIXIBEGCKXWITE(19x6)(13x2)(8x8)IYFONIBC(57x7)(7x3)OKZYROZ(29x9)(1x4)H(16x13)XAUDMPFOOHQQNFLQ(4x13)AOYY(4x2)AZIL(105x10)(11x2)(6x9)LVRPSK(82x2)(75x10)(5x15)TWXII(4x13)NBFA(23x8)WTIAZKNCMEDELQGVJTRTSIW(18x14)JYPHKJXMBMTKNVDIFY(1246x9)(296x12)(288x15)(1x11)X(85x6)(44x13)FIDKWHDICHUVUDMODAKOJSXLCMADLIOLGJMXWAMVGXET(2x2)UZ(9x14)GNMFAAUCK(6x14)LAJLUQ(175x5)(71x3)(22x4)TYBWJYBYQPWRAMHOWGCFYT(9x11)PMUMIMCTT(21x13)SERALXEDNWQQSIDHWAHTR(6x7)OADDZK(12x14)HSSYRJSSEJNM(26x11)DOITPGVHNQDUUVJALPKLABSRYD(29x1)(16x13)LVJVXDSUYSXCAUNN(1x5)O(3x1)EIV(935x3)(213x15)(205x14)(8x8)ZGWLVEBU(79x9)(1x8)G(6x15)ODCZBV(2x12)AE(26x12)FAFELTFITHRDSWIJNQZNEANNNI(14x2)KKFWBKASKPMZVE(47x2)(2x9)XM(33x12)QUZGKPWJGACFJOJOEBWDCOZZHGYXXINZB(33x8)(5x7)ZRLND(10x8)XKWYOQCKZJ(1x15)V(9x12)FIBMTMPPT(160x15)(4x13)YMWG(103x8)(3x11)KEI(54x10)(3x9)IXN(3x2)XJB(6x9)PGRCJA(20x14)BPKWKMEFTLVHDHSXXLYK(27x8)(21x8)ZHHNJXANHCBOEQFRLAKVD(34x8)(2x9)UK(5x11)OZPYC(3x6)FXS(3x8)MGU(261x4)(168x10)(49x12)(19x15)EWVPCLLSDLTYKSEGFQK(7x4)IJIVBBZ(6x8)GIXRLH(64x9)(7x8)SCLLWIL(30x9)CVHGTEYWLCRCBSEUSMFJSRJGHIVQAC(10x3)QCZQYXQVZD(36x6)(5x6)SYZKV(4x1)DWGK(4x10)QFJT(1x14)O(6x4)(1x5)X(68x9)(24x7)(18x3)YAUIGICZMOUKSIVCGC(32x8)(5x3)HTDQE(1x12)W(9x12)JAWQJCADZ(10x12)(4x11)UJTO(254x6)(63x10)(7x9)(2x3)GM(13x13)FVKLGYEOBUPOW(12x11)NSMLJLULKEGH(6x10)(1x9)H(33x4)(18x9)OHMWHAJABMZKULYOEK(3x15)BUX(16x8)PKYIAESTCHGSEWQM(110x4)(21x8)LRZUEPWJLGJYXBQZNNHPU(15x1)JTFTDQSQNQVOMIJ(9x11)DQIIJRNHA(41x9)NFEYJFFHOXACMVYCDLFJECVPMMPNXAJOFDVPXNKEC(1x4)X(2358x13)(272x13)(8x6)KAWCAEHF(252x4)(244x12)(5x1)OIKMW(49x4)(3x9)LYP(23x15)RNLNXMWYDAQPADKUKRVQGGG(6x9)MKMWZJ(71x5)(29x10)ZWQHLBGBXYGIBFGCWEOAZEKGHELGA(6x2)QJFAJQ(1x12)S(10x10)XIEXWQZUYZ(68x12)(1x14)C(7x5)OFSZHNK(2x3)MC(25x4)ZMOWIEJKUWMUITAUZFQQYFOLR(6x8)SJMPEW(21x4)(7x2)ANYNJSI(4x9)LPCS(171x12)(163x12)(96x6)(10x12)(5x2)JDTNM(8x10)(3x6)ADM(26x7)NFZFYOJAXPHUDPRFTLCODKNEOK(26x14)(20x6)WRKSJWUTPLLNNFQQXWVH(55x8)(6x10)NCCMOK(37x4)(9x13)VQQWGSQZA(15x10)CYVLMGVMBGUIANE(681x3)(674x8)(8x10)HRTGQPCC(133x6)(31x13)(15x8)NWUGLHRUNHGPAOV(5x6)TQRSZ(6x1)RDGSYT(77x11)(5x10)QTBHC(7x11)TZKXJMQ(7x15)UVAACKT(12x5)KRSRGCXTDZHK(16x4)HGYETSOYMLUVJYGY(202x6)(5x6)KLUPN(76x7)(3x9)VEA(1x1)H(30x11)LRZGAKKVSTTUDAHFPLTBBEJICAFFEO(2x1)HV(12x6)LFXQMIVZBMHF(102x11)(18x10)MQTKCXRJJXHPTQAPPI(5x3)QOUYU(23x1)BTXQMDXLDVMEKDRIYEYIBBF(23x10)BUGYWDRCNUJGXGBLTAUCALP(3x6)QZA(209x12)(6x6)OGZHQE(1x11)F(90x6)(20x8)RDVUIHWTSGTHNUJGYWWA(15x10)DXBAJLLRYLEPHOV(2x14)DL(17x14)TNPMAPPAANAGXYFWC(5x8)JMGEU(89x6)(2x6)JV(7x2)FRSANFT(32x7)MDWGSNIKZHSISGBZMWBLBBYXWKQXVPSX(9x13)YCIAZHCKY(11x5)LCEXGEUIEKF(87x14)(8x1)ZYQIUGHT(3x6)YDJ(32x4)(8x11)FQBHHWUT(2x4)NG(6x4)JXTVJA(10x8)VVCIUXRXHX(7x6)RGUAUAX(692x14)(685x3)(246x2)(6x8)TMNCSQ(72x5)(8x6)MIYYHQZX(15x14)HUZIJDZHEGYLMDU(31x3)WOWNQHYXJPXJBHVUSXQEXQPEGPROKNT(150x2)(22x3)ONCOUFKAWWGNBYEGGNCHAQ(42x9)JAQIEVGMLLNQYJSFAMYRHOIMBTFJETPWRSILRLZWMX(35x1)MYXVOMTYEEWNLBWABMQPDZFBWHDIMNROCBZ(7x1)UAKSLVG(14x12)VGFBJMZEBNHVWK(99x9)(71x13)(17x3)JKCYOLRUNSOVAVIBA(15x1)DUYZCYFWQOOVHBV(8x4)IZEYFWWX(8x15)UWCPFKIC(3x14)IOD(7x1)JRMPLMI(143x2)(15x13)HLQHFYKIBVLPXFX(56x11)(2x14)PC(41x11)BYRRFHJDICKJQFLOTDZOIIZZLMJDCJEBBDYKAAMHC(1x13)W(2x13)NV(36x13)(3x6)LZS(6x2)CFBDVS(11x5)PHLFEIYJEEV(170x6)(57x13)(1x12)G(8x8)AXLLSTXR(17x14)VCRBNKDPJTWTXFQDB(8x9)KBAHWEDY(99x12)(9x6)FSHOKCYTB(27x13)VHEROMAPXWHCAPUIHNSVZXMKZOH(25x12)YWVMMYVVONNLGNVJVVIEKASTL(12x10)ZSYMCPQTCMXJ(504x6)(400x3)(65x4)(33x13)(10x9)ADLIBLHAQK(11x9)FMZKUHXIKFO(18x12)(12x6)BLCMESDBDGDD(322x4)(55x12)(6x5)TMKASY(2x14)PR(29x13)BLMIBIQPOOLAVQMTWVZMAJBWROFLE(63x5)(7x2)SAFAIKV(12x15)MFISPDJSUYEA(26x1)BLOSXQWSDRTAOIDJUAGEXNIIML(112x4)(23x12)FUADKATPYIUTEJGPTYRFESH(24x5)ZIQIOFUMHEHJQRAPXPDWPJYH(8x6)WKFNUWSZ(32x14)AUYKXCXARLOPZGZPNKXRAOEYYWSMURHM(57x9)(26x1)QPTYYTSPPLZWOLPRWHVRDCRGFS(12x9)ZGXOFEKTLYPZ(1x14)V(3x13)LQD(90x10)(17x14)(11x5)WFOJVNTMHZL(19x15)PAAGJWZMJVSIEUEYNOA(5x11)XIAEV(23x4)WVQCIVERHVPBOGHUMQVCYJM(735x8)(483x9)(284x3)(234x8)(35x8)YEWFQJWTEXJYHWMPJIIUSGVIOPSSLTPCDLW(113x13)(16x8)ZNAWQIUYOBZCEPUM(31x10)QVFRMVCMYXMFKYMOPIEBHWBCUOBJVDC(9x8)EKCEILZNV(3x1)QMF(24x13)LJYZGSGBFZBEGARESLOTMTRS(66x4)(2x3)SA(29x12)QSJFSJZJCFBKONFRUUPHCGUDYCPHZ(17x7)MGKDSBWTEZGURJGMW(37x6)(14x12)(9x6)EIOPXGIZG(10x6)PUCSZAASUQ(21x2)(14x12)PHXVVACWZVPTIL(158x4)(1x9)V(144x10)(101x13)(40x10)CLBELLVQQILKUMTPOFIESWVYXWFQWTHJCKNTWLXP(2x5)BF(2x14)SW(14x10)EHPHIAMTYUFFJU(12x3)RKJBECVYTCVU(9x10)YHHLXJXKW(13x13)SJNGVLVCZZVED(237x15)(230x5)(157x6)(8x14)WZDXWFHT(78x2)(6x12)DUYUOX(5x15)SRAXP(6x9)YXRCEO(22x10)VOIEHZVVTDTRMQHIXTVDMK(9x14)YSSNMUPPI(39x8)(4x14)YDPZ(23x4)BTCCELKTTPSNXIYBIJASXXC(9x3)XBJGXGOMK(16x11)IPDBZSBXCKLQDAZP(19x5)(13x4)CNYVIXGKUXYTV(12x1)(6x10)(1x6)T(1424x9)(7x8)(2x8)KY(4x8)EZTY(524x5)(191x11)(102x2)(44x12)ORBEOWRRYMIAHYLIQDUNBVFLBHSARXZBTXVWRINMTVXE(27x15)(5x15)ETFEI(1x9)Y(5x3)WYLWN(11x9)LFAXPJYAJDW(76x6)(7x15)GGRPBNB(4x11)WKKQ(47x1)(2x1)VH(12x1)JUDDAINDQXNE(15x11)QBAOIZEUCDEYZTM(21x4)FNOCNAFBJGJSWBAVMYVWH(137x9)(1x14)E(123x3)(54x10)(7x11)UFLDCDM(16x1)SIGCUXXRDHQYKFJN(13x1)TZTFFIZNYPXRP(8x10)TQNUCSXN(7x9)(2x3)JF(11x12)KYFTDULQKUU(12x9)ZQJSUBUHVHGJ(13x14)HMHQSNJNEISIY(126x12)(66x10)(31x9)(9x1)MVABPLVCO(10x10)RTJPWBCIMH(3x3)HZL(1x12)H(9x4)SQKEWFAMR(47x3)(40x11)HRSJIGBPQITBKLGIFFKVXTENMPRYKFULYSGQLVBN(160x10)(126x6)(40x3)(15x3)(2x2)CD(2x10)FQ(13x4)CROEBXVKGSNHW(7x1)SQEPRZB(10x7)(5x4)XBVPH(46x6)(40x9)(9x3)WMCGCUDOE(19x10)FVLUAQBAXBJCQGGMEFE(8x4)(3x7)HBK(8x14)(2x13)EL(696x13)(439x10)(16x13)VROSJKEMQPZMYNXT(162x14)(68x5)(17x1)VOOKELBWVADZIVGPF(38x12)MCTKRBQUJBESBXTMUTRVTWCDKGDLVQHVHNVIQY(2x11)GX(3x13)ESQ(52x9)(14x2)NNNDEPJFZSJIZO(1x11)F(4x5)LFLH(2x11)HZ(3x1)ZXY(8x1)(2x10)HH(53x10)(19x8)HOXXPKRGYIBALYFNIEP(3x5)GGP(14x4)NGWFVQIRSWFOCY(165x15)(10x12)YCTAAUVNVF(7x15)(2x1)LT(7x11)FQQPYCC(39x3)FCDZABZAXAUQAFPDCJHAMRMIMXOHABIZAZHCMFS(71x6)(1x12)B(8x1)PTCODCVX(26x2)CJRGSDPMRCCILJURRDKEIMTFVK(13x6)SGMDPBEXKCOQN(8x4)(3x5)TJC(242x3)(229x4)(71x10)(17x6)HBOLREXQQYLXULRIZ(35x3)PPENPYEDAAOOFMWZJOFRKUPNKRCDMECCLFA(1x13)B(20x14)(8x5)ULYDIAHS(1x10)Z(97x9)(1x4)K(21x7)QAKCRIDADKTQEVCZEDDWM(13x9)BZANWBJAHBNBD(30x4)BNQKAHQQDURPKRYZSYEQPMRUXFJINA(3x13)PZJ(15x5)(1x6)D(4x2)NHPI(1x8)ESZ(223x1)(42x5)(6x5)ACPDPC(8x11)MBKNDKCD(10x13)JDHAIFXADH(47x1)(41x4)QDJLJWSRORPHUBHGTPUYBVFSSIEOYHUHZKASZTGCN(10x13)(4x10)LABA(92x8)(12x15)DJFIFECKWSST(20x7)YLXFIEMQMWPCWPMWRDRF(10x1)JEPPKBYGMD(12x7)MXAXOCOGEFOO(7x14)NIAQHAK(1x15)D(79x1)(17x2)(4x14)PVLT(2x5)LE(49x11)(16x9)TFPAVPXVGPGIPDFJ(2x4)WQ(14x7)IYVKVVHCOYGDVO"
;

/*
--- Day 10: Balance Bots ---

You come upon a factory in which many robots are zooming around handing small
microchips to each other.

Upon closer examination, you notice that each bot only proceeds when it has two
microchips, and once it does, it gives each one to a different bot or puts it in
a marked "output" bin. Sometimes, bots take microchips from "input" bins, too.

Inspecting one of the microchips, it seems like they each contain a single
number; the bots must use some logic to decide what to do with each chip. You
access the local control computer and download the bots' instructions (your
puzzle input).

Some of the instructions specify that a specific-valued microchip should be
given to a specific bot; the rest of the instructions indicate what a given bot
should do with its lower-value or higher-value chip.

For example, consider the following instructions:

value 5 goes to bot 2 bot 2 gives low to bot 1 and high to bot 0 value 3 goes to
bot 1 bot 1 gives low to output 1 and high to bot 0 bot 0 gives low to output 2
and high to output 0 value 2 goes to bot 2 Initially, bot 1 starts with a
value-3 chip, and bot 2 starts with a value-2 chip and a value-5 chip. Because
bot 2 has two microchips, it gives its lower one (2) to bot 1 and its higher one
(5) to bot 0. Then, bot 1 has two microchips; it puts the value-2 chip in output
1 and gives the value-3 chip to bot 0. Finally, bot 0 has two microchips; it
puts the 3 in output 2 and the 5 in output 0. In the end, output bin 0 contains
a value-5 microchip, output bin 1 contains a value-2 microchip, and output bin 2
contains a value-3 microchip. In this configuration, bot number 2 is responsible
for comparing value-5 microchips with value-2 microchips.

Based on your instructions, what is the number of the bot that is responsible
for comparing value-61 microchips with value-17 microchips?

Your puzzle answer was 56.

--- Part Two ---

What do you get if you multiply together the values of one chip in each of
outputs 0, 1, and 2?

Your puzzle answer was 7847.
*/

var Swarm = function () {
  function Swarm(x, y) {
    classCallCheck(this, Swarm);

    this.bots = [];
    this.outputs = [];
    this.logs = [];
  }

  createClass(Swarm, [{
    key: "redistribute",
    value: function redistribute(id) {
      var bot = this.bots[id];
      if (bot.lowTo && bot.highTo && bot.chips.length > 1) {
        var _bot$chips$sort = bot.chips.sort(function (x, y) {
          return x - y;
        }),
            _bot$chips$sort2 = slicedToArray(_bot$chips$sort, 2),
            low = _bot$chips$sort2[0],
            high = _bot$chips$sort2[1];

        this.logs.push("Bot " + id + " compares " + low + " and " + high + ".");
        this.give(bot.lowTo, low);
        this.give(bot.highTo, high);
        bot.chips = [];
      }
    }
  }, {
    key: "giveToBot",
    value: function giveToBot(id, chip) {
      if (!this.bots[id]) {
        this.bots[id] = { chips: [] };
      }
      this.bots[id].chips.push(chip);
      this.redistribute(id);
    }
  }, {
    key: "give",
    value: function give(recipient, chip) {
      var _recipient$split = recipient.split(" "),
          _recipient$split2 = slicedToArray(_recipient$split, 2),
          type = _recipient$split2[0],
          id = _recipient$split2[1];

      if (type === "bot") {
        this.giveToBot(id, chip);
      } else if (type === "output") {
        this.outputs[id] = chip;
      }
    }
  }, {
    key: "process",
    value: function process(instruction) {
      if (instruction.operation === "defineBotBehaviour") {
        if (!this.bots[instruction.id]) {
          this.bots[instruction.id] = { chips: [] };
        }
        this.bots[instruction.id].lowTo = instruction.lowTo;
        this.bots[instruction.id].highTo = instruction.highTo;
        this.redistribute(instruction.id);
      } else if (instruction.operation === "assignChip") {
        this.give(instruction.recipient, instruction.chip);
      }
    }
  }]);
  return Swarm;
}();

function part1$9(input) {
  var swarm = new Swarm();
  input.forEach(function (x) {
    return swarm.process(x);
  });
  return swarm.logs.filter(function (l) {
    return l.includes("17 and 61");
  })[0].split(" ")[1];
}

function part2$9(input) {
  var swarm = new Swarm();
  input.forEach(function (x) {
    return swarm.process(x);
  });
  return swarm.outputs.slice(0, 3).reduce(function (x, y) {
    return x * y;
  });
}

var input10 = [
  {
    "operation": "defineBotBehaviour",
    "id": 153,
    "lowTo": "bot 105",
    "highTo": "bot 10"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 84,
    "lowTo": "bot 149",
    "highTo": "bot 198"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 32,
    "lowTo": "bot 124",
    "highTo": "bot 76"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 177,
    "lowTo": "output 8",
    "highTo": "bot 19"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 64,
    "lowTo": "bot 6",
    "highTo": "bot 179"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 115,
    "lowTo": "bot 181",
    "highTo": "bot 190"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 169,
    "lowTo": "bot 21",
    "highTo": "bot 60"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 106,
    "lowTo": "bot 17",
    "highTo": "bot 84"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 129,
    "lowTo": "bot 52",
    "highTo": "bot 57"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 208,
    "lowTo": "bot 78",
    "highTo": "bot 121"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 179,
    "lowTo": "bot 101",
    "highTo": "bot 103"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 42,
    "lowTo": "bot 125",
    "highTo": "bot 67"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 164,
    "lowTo": "bot 49",
    "highTo": "bot 71"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 175,
    "lowTo": "bot 135",
    "highTo": "bot 201"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 71,
    "lowTo": "bot 207",
    "highTo": "bot 88"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 12,
    "lowTo": "output 4",
    "highTo": "bot 125"
  },
  {
    "operation": "assignChip",
    "chip": 11,
    "recipient": "bot 124"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 190,
    "lowTo": "bot 41",
    "highTo": "bot 171"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 18,
    "lowTo": "bot 189",
    "highTo": "bot 110"
  },
  {
    "operation": "assignChip",
    "chip": 2 ,
    "recipient": "bot 93"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 48,
    "lowTo": "bot 45",
    "highTo": "bot 68"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 145,
    "lowTo": "bot 55",
    "highTo": "bot 157"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 151,
    "lowTo": "bot 146",
    "highTo": "bot 162"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 160,
    "lowTo": "bot 39",
    "highTo": "bot 56"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 39,
    "lowTo": "bot 205",
    "highTo": "bot 79"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 16,
    "lowTo": "bot 174",
    "highTo": "bot 132"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 152,
    "lowTo": "bot 206",
    "highTo": "bot 166"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 107,
    "lowTo": "bot 160",
    "highTo": "bot 184"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 111,
    "lowTo": "output 11",
    "highTo": "bot 163"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 24,
    "lowTo": "bot 42",
    "highTo": "bot 159"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 120,
    "lowTo": "bot 30",
    "highTo": "bot 183"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 130,
    "lowTo": "bot 80",
    "highTo": "bot 146"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 117,
    "lowTo": "output 17",
    "highTo": "bot 174"
  },
  {
    "operation": "assignChip",
    "chip": 47,
    "recipient": "bot 107"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 77,
    "lowTo": "bot 70",
    "highTo": "bot 50"
  },
  {
    "operation": "assignChip",
    "chip": 67,
    "recipient": "bot 205"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 167,
    "lowTo": "bot 202",
    "highTo": "bot 33"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 28,
    "lowTo": "output 12",
    "highTo": "bot 139"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 20,
    "lowTo": "bot 147",
    "highTo": "bot 7"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 54,
    "lowTo": "bot 183",
    "highTo": "bot 175"
  },
  {
    "operation": "assignChip",
    "chip": 71,
    "recipient": "bot 21"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 59,
    "lowTo": "output 2",
    "highTo": "bot 47"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 72,
    "lowTo": "bot 54",
    "highTo": "bot 53"
  },
  {
    "operation": "assignChip",
    "chip": 23,
    "recipient": "bot 120"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 17,
    "lowTo": "bot 162",
    "highTo": "bot 149"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 15,
    "lowTo": "bot 182",
    "highTo": "bot 1"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 90,
    "lowTo": "bot 15",
    "highTo": "bot 195"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 170,
    "lowTo": "bot 158",
    "highTo": "bot 69"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 22,
    "lowTo": "bot 65",
    "highTo": "bot 62"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 46,
    "lowTo": "bot 92",
    "highTo": "bot 90"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 69,
    "lowTo": "bot 59",
    "highTo": "bot 49"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 58,
    "lowTo": "bot 140",
    "highTo": "bot 45"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 148,
    "lowTo": "bot 151",
    "highTo": "bot 17"
  },
  {
    "operation": "assignChip",
    "chip": 17,
    "recipient": "bot 189"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 180,
    "lowTo": "output 18",
    "highTo": "bot 134"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 205,
    "lowTo": "bot 197",
    "highTo": "bot 0"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 97,
    "lowTo": "bot 126",
    "highTo": "bot 108"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 196,
    "lowTo": "bot 2",
    "highTo": "bot 37"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 158,
    "lowTo": "output 7",
    "highTo": "bot 59"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 5,
    "lowTo": "bot 187",
    "highTo": "bot 95"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 2,
    "lowTo": "bot 164",
    "highTo": "bot 99"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 19,
    "lowTo": "output 14",
    "highTo": "bot 158"
  },
  {
    "operation": "assignChip",
    "chip": 5 ,
    "recipient": "bot 13"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 103,
    "lowTo": "bot 43",
    "highTo": "bot 75"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 161,
    "lowTo": "bot 73",
    "highTo": "bot 24"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 99,
    "lowTo": "bot 71",
    "highTo": "bot 91"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 83,
    "lowTo": "bot 179",
    "highTo": "bot 113"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 14,
    "lowTo": "bot 31",
    "highTo": "bot 104"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 55,
    "lowTo": "bot 51",
    "highTo": "bot 5"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 127,
    "lowTo": "bot 66",
    "highTo": "bot 65"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 34,
    "lowTo": "bot 137",
    "highTo": "bot 112"
  },
  {
    "operation": "assignChip",
    "chip": 3 ,
    "recipient": "bot 111"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 135,
    "lowTo": "bot 203",
    "highTo": "bot 152"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 194,
    "lowTo": "bot 107",
    "highTo": "bot 40"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 166,
    "lowTo": "bot 87",
    "highTo": "bot 26"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 184,
    "lowTo": "bot 56",
    "highTo": "bot 23"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 116,
    "lowTo": "bot 23",
    "highTo": "bot 168"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 113,
    "lowTo": "bot 103",
    "highTo": "bot 92"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 47,
    "lowTo": "output 6",
    "highTo": "bot 200"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 65,
    "lowTo": "bot 170",
    "highTo": "bot 192"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 52,
    "lowTo": "bot 83",
    "highTo": "bot 119"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 139,
    "lowTo": "output 5",
    "highTo": "bot 81"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 142,
    "lowTo": "bot 153",
    "highTo": "bot 172"
  },
  {
    "operation": "assignChip",
    "chip": 73,
    "recipient": "bot 30"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 44,
    "lowTo": "bot 145",
    "highTo": "bot 70"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 133,
    "lowTo": "bot 127",
    "highTo": "bot 22"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 163,
    "lowTo": "output 19",
    "highTo": "bot 117"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 75,
    "lowTo": "bot 196",
    "highTo": "bot 182"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 136,
    "lowTo": "bot 134",
    "highTo": "bot 73"
  },
  {
    "operation": "assignChip",
    "chip": 29,
    "recipient": "bot 185"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 73,
    "lowTo": "bot 12",
    "highTo": "bot 42"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 31,
    "lowTo": "bot 109",
    "highTo": "bot 97"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 91,
    "lowTo": "bot 88",
    "highTo": "bot 51"
  },
  {
    "operation": "assignChip",
    "chip": 59,
    "recipient": "bot 39"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 110,
    "lowTo": "bot 72",
    "highTo": "bot 53"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 186,
    "lowTo": "bot 38",
    "highTo": "bot 188"
  },
  {
    "operation": "assignChip",
    "chip": 19,
    "recipient": "bot 185"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 154,
    "lowTo": "bot 16",
    "highTo": "bot 98"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 81,
    "lowTo": "output 20",
    "highTo": "output 3"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 92,
    "lowTo": "bot 75",
    "highTo": "bot 15"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 202,
    "lowTo": "bot 74",
    "highTo": "bot 208"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 183,
    "lowTo": "bot 100",
    "highTo": "bot 135"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 68,
    "lowTo": "bot 64",
    "highTo": "bot 83"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 198,
    "lowTo": "bot 4",
    "highTo": "bot 137"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 61,
    "lowTo": "output 13",
    "highTo": "bot 109"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 209,
    "lowTo": "bot 102",
    "highTo": "bot 153"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 201,
    "lowTo": "bot 152",
    "highTo": "bot 166"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 181,
    "lowTo": "bot 90",
    "highTo": "bot 41"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 56,
    "lowTo": "bot 79",
    "highTo": "bot 186"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 49,
    "lowTo": "bot 47",
    "highTo": "bot 207"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 6,
    "lowTo": "bot 133",
    "highTo": "bot 101"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 4,
    "lowTo": "bot 35",
    "highTo": "bot 129"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 11,
    "lowTo": "bot 117",
    "highTo": "bot 16"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 38,
    "lowTo": "bot 89",
    "highTo": "bot 138"
  },
  {
    "operation": "assignChip",
    "chip": 13,
    "recipient": "bot 169"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 118,
    "lowTo": "bot 11",
    "highTo": "bot 154"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 29,
    "lowTo": "bot 198",
    "highTo": "bot 34"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 197,
    "lowTo": "bot 32",
    "highTo": "bot 9"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 185,
    "lowTo": "bot 18",
    "highTo": "bot 110"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 174,
    "lowTo": "output 0",
    "highTo": "bot 177"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 33,
    "lowTo": "bot 208",
    "highTo": "bot 144"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 78,
    "lowTo": "bot 29",
    "highTo": "bot 27"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 172,
    "lowTo": "bot 10",
    "highTo": "bot 178"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 146,
    "lowTo": "bot 204",
    "highTo": "bot 122"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 57,
    "lowTo": "bot 119",
    "highTo": "bot 141"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 3,
    "lowTo": "bot 48",
    "highTo": "bot 35"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 70,
    "lowTo": "bot 157",
    "highTo": "bot 50"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 122,
    "lowTo": "bot 58",
    "highTo": "bot 48"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 96,
    "lowTo": "bot 61",
    "highTo": "bot 31"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 128,
    "lowTo": "bot 141",
    "highTo": "bot 115"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 173,
    "lowTo": "bot 163",
    "highTo": "bot 11"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 105,
    "lowTo": "bot 136",
    "highTo": "bot 161"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 157,
    "lowTo": "bot 5",
    "highTo": "bot 176"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 9,
    "lowTo": "bot 76",
    "highTo": "bot 148"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 140,
    "lowTo": "bot 155",
    "highTo": "bot 191"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 89,
    "lowTo": "bot 148",
    "highTo": "bot 106"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 141,
    "lowTo": "bot 46",
    "highTo": "bot 181"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 37,
    "lowTo": "bot 99",
    "highTo": "bot 86"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 23,
    "lowTo": "bot 186",
    "highTo": "bot 114"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 131,
    "lowTo": "bot 60",
    "highTo": "bot 143"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 0,
    "lowTo": "bot 9",
    "highTo": "bot 89"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 162,
    "lowTo": "bot 122",
    "highTo": "bot 3"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 51,
    "lowTo": "bot 14",
    "highTo": "bot 187"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 124,
    "lowTo": "bot 93",
    "highTo": "bot 130"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 88,
    "lowTo": "bot 96",
    "highTo": "bot 14"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 206,
    "lowTo": "bot 168",
    "highTo": "bot 87"
  },
  {
    "operation": "assignChip",
    "chip": 7 ,
    "recipient": "bot 197"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 95,
    "lowTo": "bot 209",
    "highTo": "bot 142"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 26,
    "lowTo": "bot 33",
    "highTo": "bot 144"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 191,
    "lowTo": "bot 82",
    "highTo": "bot 6"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 189,
    "lowTo": "bot 13",
    "highTo": "bot 72"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 165,
    "lowTo": "bot 118",
    "highTo": "bot 155"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 125,
    "lowTo": "output 1",
    "highTo": "bot 28"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 195,
    "lowTo": "bot 1",
    "highTo": "bot 36"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 112,
    "lowTo": "bot 94",
    "highTo": "bot 147"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 62,
    "lowTo": "bot 192",
    "highTo": "bot 2"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 86,
    "lowTo": "bot 91",
    "highTo": "bot 55"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 126,
    "lowTo": "output 10",
    "highTo": "bot 180"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 187,
    "lowTo": "bot 104",
    "highTo": "bot 209"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 147,
    "lowTo": "bot 128",
    "highTo": "bot 7"
  },
  {
    "operation": "assignChip",
    "chip": 53,
    "recipient": "bot 156"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 156,
    "lowTo": "bot 111",
    "highTo": "bot 173"
  },
  {
    "operation": "assignChip",
    "chip": 43,
    "recipient": "bot 32"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 13,
    "lowTo": "bot 120",
    "highTo": "bot 54"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 45,
    "lowTo": "bot 191",
    "highTo": "bot 64"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 30,
    "lowTo": "bot 194",
    "highTo": "bot 100"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 94,
    "lowTo": "bot 57",
    "highTo": "bot 128"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 182,
    "lowTo": "bot 37",
    "highTo": "bot 25"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 36,
    "lowTo": "bot 44",
    "highTo": "bot 77"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 8,
    "lowTo": "bot 139",
    "highTo": "bot 81"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 66,
    "lowTo": "bot 19",
    "highTo": "bot 170"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 50,
    "lowTo": "bot 176",
    "highTo": "bot 123"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 192,
    "lowTo": "bot 69",
    "highTo": "bot 164"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 178,
    "lowTo": "bot 24",
    "highTo": "bot 159"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 7,
    "lowTo": "bot 115",
    "highTo": "bot 190"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 193,
    "lowTo": "bot 63",
    "highTo": "bot 20"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 25,
    "lowTo": "bot 86",
    "highTo": "bot 145"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 199,
    "lowTo": "bot 169",
    "highTo": "bot 131"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 93,
    "lowTo": "bot 199",
    "highTo": "bot 80"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 104,
    "lowTo": "bot 97",
    "highTo": "bot 102"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 114,
    "lowTo": "bot 188",
    "highTo": "bot 202"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 134,
    "lowTo": "output 16",
    "highTo": "bot 12"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 203,
    "lowTo": "bot 116",
    "highTo": "bot 206"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 98,
    "lowTo": "bot 132",
    "highTo": "bot 127"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 123,
    "lowTo": "bot 142",
    "highTo": "bot 172"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 121,
    "lowTo": "bot 27",
    "highTo": "bot 193"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 207,
    "lowTo": "bot 200",
    "highTo": "bot 96"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 176,
    "lowTo": "bot 95",
    "highTo": "bot 123"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 204,
    "lowTo": "bot 143",
    "highTo": "bot 58"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 132,
    "lowTo": "bot 177",
    "highTo": "bot 66"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 155,
    "lowTo": "bot 154",
    "highTo": "bot 82"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 27,
    "lowTo": "bot 34",
    "highTo": "bot 63"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 74,
    "lowTo": "bot 85",
    "highTo": "bot 78"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 60,
    "lowTo": "bot 150",
    "highTo": "bot 165"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 85,
    "lowTo": "bot 84",
    "highTo": "bot 29"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 79,
    "lowTo": "bot 0",
    "highTo": "bot 38"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 159,
    "lowTo": "bot 67",
    "highTo": "bot 8"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 1,
    "lowTo": "bot 25",
    "highTo": "bot 44"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 41,
    "lowTo": "bot 195",
    "highTo": "bot 171"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 100,
    "lowTo": "bot 40",
    "highTo": "bot 203"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 200,
    "lowTo": "output 15",
    "highTo": "bot 61"
  },
  {
    "operation": "assignChip",
    "chip": 37,
    "recipient": "bot 18"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 76,
    "lowTo": "bot 130",
    "highTo": "bot 151"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 102,
    "lowTo": "bot 108",
    "highTo": "bot 105"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 35,
    "lowTo": "bot 68",
    "highTo": "bot 52"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 21,
    "lowTo": "bot 156",
    "highTo": "bot 150"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 188,
    "lowTo": "bot 138",
    "highTo": "bot 74"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 10,
    "lowTo": "bot 161",
    "highTo": "bot 178"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 82,
    "lowTo": "bot 98",
    "highTo": "bot 133"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 171,
    "lowTo": "bot 36",
    "highTo": "bot 77"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 40,
    "lowTo": "bot 184",
    "highTo": "bot 116"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 150,
    "lowTo": "bot 173",
    "highTo": "bot 118"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 43,
    "lowTo": "bot 62",
    "highTo": "bot 196"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 119,
    "lowTo": "bot 113",
    "highTo": "bot 46"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 168,
    "lowTo": "bot 114",
    "highTo": "bot 167"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 144,
    "lowTo": "bot 121",
    "highTo": "bot 193"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 80,
    "lowTo": "bot 131",
    "highTo": "bot 204"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 63,
    "lowTo": "bot 112",
    "highTo": "bot 20"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 67,
    "lowTo": "bot 28",
    "highTo": "bot 8"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 109,
    "lowTo": "output 9",
    "highTo": "bot 126"
  },
  {
    "operation": "assignChip",
    "chip": 31,
    "recipient": "bot 199"
  },
  {
    "operation": "assignChip",
    "chip": 61,
    "recipient": "bot 160"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 87,
    "lowTo": "bot 167",
    "highTo": "bot 26"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 138,
    "lowTo": "bot 106",
    "highTo": "bot 85"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 108,
    "lowTo": "bot 180",
    "highTo": "bot 136"
  },
  {
    "operation": "assignChip",
    "chip": 41,
    "recipient": "bot 194"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 143,
    "lowTo": "bot 165",
    "highTo": "bot 140"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 53,
    "lowTo": "bot 175",
    "highTo": "bot 201"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 137,
    "lowTo": "bot 129",
    "highTo": "bot 94"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 149,
    "lowTo": "bot 3",
    "highTo": "bot 4"
  },
  {
    "operation": "defineBotBehaviour",
    "id": 101,
    "lowTo": "bot 22",
    "highTo": "bot 43"
  }
]
;

/*
--- Day 11: Radioisotope Thermoelectric Generators ---

You come upon a column of four floors that have been entirely sealed off from
the rest of the building except for a small dedicated lobby. There are some
radiation warnings and a big sign which reads "Radioisotope Testing Facility".

According to the project status board, this facility is currently being used to
experiment with Radioisotope Thermoelectric Generators (RTGs, or simply
"generators") that are designed to be paired with specially-constructed
microchips. Basically, an RTG is a highly radioactive rock that generates
electricity through heat.

The experimental RTGs have poor radiation containment, so they're dangerously
radioactive. The chips are prototypes and don't have normal radiation shielding,
but they do have the ability to generate an elecromagnetic radiation shield when
powered. Unfortunately, they can only be powered by their corresponding RTG. An
RTG powering a microchip is still dangerous to other microchips.

In other words, if a chip is ever left in the same area as another RTG, and it's
not connected to its own RTG, the chip will be fried. Therefore, it is assumed
that you will follow procedure and keep chips connected to their corresponding
RTG when they're in the same room, and away from other RTGs otherwise.

These microchips sound very interesting and useful to your current activities,
and you'd like to try to retrieve them. The fourth floor of the facility has an
assembling machine which can make a self-contained, shielded computer for you to
take with you - that is, if you can bring it all of the RTGs and microchips.

Within the radiation-shielded part of the facility (in which it's safe to have
these pre-assembly RTGs), there is an elevator that can move between the four
floors. Its capacity rating means it can carry at most yourself and two RTGs or
microchips in any combination. (They're rigged to some heavy diagnostic
equipment - the assembling machine will detach it for you.) As a security
measure, the elevator will only function if it contains at least one RTG or
microchip. The elevator always stops on each floor to recharge, and this takes
long enough that the items within it and the items on that floor can irradiate
each other. (You can prevent this if a Microchip and its Generator end up on the
same floor in this way, as they can be connected while the elevator is
recharging.)

You make some notes of the locations of each component of interest (your puzzle
input). Before you don a hazmat suit and start moving things around, you'd like
to have an idea of what you need to do.

When you enter the containment area, you and the elevator will start on the
first floor.

For example, suppose the isolated area has the following arrangement:

The first floor contains a hydrogen-compatible microchip and a
lithium-compatible microchip. The second floor contains a hydrogen generator.
The third floor contains a lithium generator. The fourth floor contains nothing
relevant. As a diagram (F# for a Floor number, E for Elevator, H for Hydrogen, L
for Lithium, M for Microchip, and G for Generator), the initial state looks like
this:

F4 .  .  .  .  .   F3 .  .  .  LG .   F2 .  HG .  .  .   F1 E  .  HM .  LM
Then, to get everything up to the assembling machine on the fourth floor, the
following steps could be taken:

Bring the Hydrogen-compatible Microchip to the second floor, which is safe
because it can get power from the Hydrogen Generator:

F4 .  .  .  .  .   F3 .  .  .  LG .   F2 E  HG HM .  .   F1 .  .  .  .  LM
Bring both Hydrogen-related items to the third floor, which is safe because the
Hydrogen-compatible microchip is getting power from its generator:

F4 .  .  .  .  .   F3 E  HG HM LG .   F2 .  .  .  .  .   F1 .  .  .  .  LM
Leave the Hydrogen Generator on floor three, but bring the Hydrogen-compatible
Microchip back down with you so you can still use the elevator:

F4 .  .  .  .  .   F3 .  HG .  LG .   F2 E  .  HM .  .   F1 .  .  .  .  LM  At
the first floor, grab the Lithium-compatible Microchip, which is safe because
Microchips don't affect each other:

F4 .  .  .  .  .   F3 .  HG .  LG .   F2 .  .  .  .  .   F1 E  .  HM .  LM
Bring both Microchips up one floor, where there is nothing to fry them:

F4 .  .  .  .  .   F3 .  HG .  LG .   F2 E  .  HM .  LM  F1 .  .  .  .  .
Bring both Microchips up again to floor three, where they can be temporarily
connected to their corresponding generators while the elevator recharges,
preventing either of them from being fried:

F4 .  .  .  .  .   F3 E  HG HM LG LM  F2 .  .  .  .  .   F1 .  .  .  .  .
Bring both Microchips to the fourth floor:

F4 E  .  HM .  LM  F3 .  HG .  LG .   F2 .  .  .  .  .   F1 .  .  .  .  .
Leave the Lithium-compatible microchip on the fourth floor, but bring the
Hydrogen-compatible one so you can still use the elevator; this is safe because
although the Lithium Generator is on the destination floor, you can connect
Hydrogen-compatible microchip to the Hydrogen Generator there:

F4 .  .  .  .  LM  F3 E  HG HM LG .   F2 .  .  .  .  .   F1 .  .  .  .  .
Bring both Generators up to the fourth floor, which is safe because you can
connect the Lithium-compatible Microchip to the Lithium Generator upon arrival:

F4 E  HG .  LG LM  F3 .  .  HM .  .   F2 .  .  .  .  .   F1 .  .  .  .  .
Bring the Lithium Microchip with you to the third floor so you can use the
elevator:

F4 .  HG .  LG .   F3 E  .  HM .  LM  F2 .  .  .  .  .   F1 .  .  .  .  .
Bring both Microchips to the fourth floor:

F4 E  HG HM LG LM  F3 .  .  .  .  .   F2 .  .  .  .  .   F1 .  .  .  .  .   In
this arrangement, it takes 11 steps to collect all of the objects at the fourth
floor for assembly. (Each elevator stop counts as one step, even if nothing is
added to or removed from it.)

In your situation, what is the minimum number of steps required to bring all of
the objects to the fourth floor?

Your puzzle answer was 37.

--- Part Two ---

You step into the cleanroom separating the lobby from the isolated area and put
on the hazmat suit.

Upon entering the isolated containment area, however, you notice some extra
parts on the first floor that weren't listed on the record outside:

An elerium generator. An elerium-compatible microchip. A dilithium generator. A
dilithium-compatible microchip. These work just like the other generators and
microchips. You'll have to get them up to assembly as well.

What is the minimum number of steps required to bring all of the objects,
including these four new ones, to the fourth floor?

Your puzzle answer was 61.
*/

/* Returns the floors that the pair of the given element are on. Microchip
  first then generator. */
function extractPositions(state, element) {
  var positions = [];
  for (var i = 1; i <= 4; i++) {
    var floor = state["floor " + i];
    for (var j = 0; j < floor.length; j++) {
      if (floor[j].element === element) {
        // We simply delete the element to show it has been accounted for.
        delete floor[j].element;
        if (floor[j].device === "microchip") {
          positions[0] = i;
        }
        if (floor[j].device === "generator") {
          positions[1] = i;
        }
      }
    }
  }
  return positions;
}

/* Hashes a state so that states that are equal up to permutation of elements
  are treated as equivalent. */
function hash$1(state) {
  var stateCopy = JSON.parse(JSON.stringify(state)),
      positions = [state.elevator.split(" ")[1]];
  for (var i = 1; i <= 4; i++) {
    var floor = stateCopy["floor " + i];
    for (var j = 0; j < floor.length; j++) {
      if (floor[j].element) {
        positions.push(extractPositions(stateCopy, floor[j].element).reduce(function (x, y) {
          return x + y;
        }, ""));
      }
    }
  }
  return positions.sort().reduce(function (x, y) {
    return x + y;
  });
}

var StateTracker = function () {
  function StateTracker(states) {
    var _this = this;

    classCallCheck(this, StateTracker);

    this.traversed = new Set();
    states.forEach(function (s) {
      return _this.seen(s);
    });
  }

  createClass(StateTracker, [{
    key: "seen",
    value: function seen(state) {
      var hashedState = hash$1(state);
      if (this.traversed.has(hashedState)) {
        return true;
      }
      this.traversed.add(hashedState);
      return false;
    }
  }]);
  return StateTracker;
}();

function hasFriedMicrochips(floor) {
  return floor.some(function (m) {
    return m.device === "microchip" && !floor.some(function (g) {
      return g.device === "generator" && g.element === m.element;
    }) && floor.some(function (g) {
      return g.device === "generator" && g.element !== m.element;
    });
  });
}

function isGood(state) {
  for (var i = 1; i <= 4; i++) {
    if (hasFriedMicrochips(state["floor " + i])) {
      return false;
    }
  }
  return true;
}

function isComplete(state) {
  for (var i = 1; i <= 3; i++) {
    if (state["floor " + i].length) {
      return false;
    }
  }
  return true;
}

function possibleSelections(state) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var floor = state[state.elevator];
  if (i === floor.length) {
    return [[]];
  }
  var rest = possibleSelections(state, i + 1);
  return [].concat(toConsumableArray(rest), toConsumableArray(rest.map(function (s) {
    return [floor[i]].concat(toConsumableArray(s));
  })));
}

function is(x, y) {
  return x.element === y.element && x.device === y.device;
}

function move$1(state, selection, direction) {
  var newState = _extends({}, JSON.parse(JSON.stringify(state)), {
    elevator: "floor " + (parseInt(state.elevator.split(" ")[1]) + direction)
  });
  selection.forEach(function (s) {
    var i = newState[state.elevator].findIndex(function (x) {
      return is(x, s);
    }),
        _newState$state$eleva = newState[state.elevator].splice(i, 1),
        _newState$state$eleva2 = slicedToArray(_newState$state$eleva, 1),
        toMove = _newState$state$eleva2[0];

    newState[newState.elevator].push(toMove);
  });
  return newState;
}

function possibleSteps(state) {
  var selections = possibleSelections(state).filter(function (s) {
    return [1, 2].includes(s.length);
  });
  if (state.elevator === "floor 4") {
    return selections.map(function (s) {
      return move$1(state, s, -1);
    });
  } else if (state.elevator === "floor 1") {
    return selections.map(function (s) {
      return move$1(state, s, 1);
    });
  }
  return [].concat(toConsumableArray(selections.map(function (s) {
    return move$1(state, s, 1);
  })), toConsumableArray(selections.map(function (s) {
    return move$1(state, s, -1);
  })));
}

function breadthFirstSearch$1(initialState) {
  var states = [initialState],
      steps = 0;
  var tracker = new StateTracker(states);
  while (!states.some(isComplete)) {
    states = states.map(possibleSteps).reduce(function (x, y) {
      return [].concat(toConsumableArray(x), toConsumableArray(y));
    }).filter(function (s) {
      return isGood(s) && !tracker.seen(s);
    });
    steps++;
    console.log("At step " + steps + " with " + states.length + " states...");
  }
  return steps;
}

var part1$10 = breadthFirstSearch$1;

function part2$10(input) {
  return breadthFirstSearch$1(_extends({}, input, {
    "floor 1": [].concat(toConsumableArray(input["floor 1"]), [{ "element": "elerium", "device": "microchip" }, { "element": "elerium", "device": "generator" }, { "element": "dilithium", "device": "microchip" }, { "element": "dilithium", "device": "generator" }])
  }));
}

var elevator = "floor 1";
var input11 = {
	elevator: elevator,
	"floor 1": [{"element":"strontium","device":"generator"},{"element":"strontium","device":"microchip"},{"element":"plutonium","device":"generator"},{"element":"plutonium","device":"microchip"}],
	"floor 2": [{"element":"thulium","device":"generator"},{"element":"ruthenium","device":"generator"},{"element":"ruthenium","device":"microchip"},{"element":"curium","device":"generator"},{"element":"curium","device":"microchip"}],
	"floor 3": [{"element":"thulium","device":"microchip"}],
	"floor 4": []
};

function isRegister(x) {
  return ["a", "b", "c", "d"].includes(x);
}

function read(s, x) {
  return isRegister(x) ? s[x] : parseInt(x, 10);
}

function execute(s, op, x, y) {
  if (op === "cpy") {
    s[y] = read(s, x);
  }
  if (op === "inc") {
    s[x]++;
  }
  if (op === "dec") {
    s[x]--;
  }
  if (op === "jnz") {
    if (read(s, x)) {
      s.head += read(s, y) - 1;
    }
  }
  s.head++;
}

function part1$11(input) {
  var state = { a: 0, b: 0, c: 0, d: 0, head: 0 };
  while (input[state.head]) {
    execute.apply(undefined, [state].concat(toConsumableArray(input[state.head])));
  }
  return state.a;
}

function part2$11(input) {
  var state = { a: 0, b: 0, c: 1, d: 0, head: 0 };
  while (input[state.head]) {
    execute.apply(undefined, [state].concat(toConsumableArray(input[state.head])));
  }
  return state.a;
}

var input12 = [
  ["cpy", "1", "a"],
  ["cpy", "1", "b"],
  ["cpy", "26", "d"],
  ["jnz", "c", "2"],
  ["jnz", "1", "5"],
  ["cpy", "7", "c"],
  ["inc", "d"],
  ["dec", "c"],
  ["jnz", "c", "-2"],
  ["cpy", "a", "c"],
  ["inc", "a"],
  ["dec", "b"],
  ["jnz", "b", "-2"],
  ["cpy", "c", "b"],
  ["dec", "d"],
  ["jnz", "d", "-6"],
  ["cpy", "18", "c"],
  ["cpy", "11", "d"],
  ["inc", "a"],
  ["dec", "d"],
  ["jnz", "d", "-2"],
  ["dec", "c"],
  ["jnz", "c", "-5"]
]
;

/*
--- Day 13: A Maze of Twisty Little Cubicles ---

You arrive at the first floor of this new building to discover a much less
welcoming environment than the shiny atrium of the last one. Instead, you are in
a maze of twisty little cubicles, all alike.

Every location in this area is addressed by a pair of non-negative integers
(x,y). Each such coordinate is either a wall or an open space. You can't move
diagonally. The cube maze starts at 0,0 and seems to extend infinitely toward
positive x and y; negative values are invalid, as they represent a location
outside the building. You are in a small waiting area at 1,1.

While it seems chaotic, a nearby morale-boosting poster explains, the layout is
actually quite logical. You can determine whether a given x,y coordinate will be
a wall or an open space using a simple system:

Find x*x + 3*x + 2*x*y + y + y*y. Add the office designer's favorite number
(your puzzle input). Find the binary representation of that sum; count the
number of bits that are 1. If the number of bits that are 1 is even, it's an
open space. If the number of bits that are 1 is odd, it's a wall. For example,
if the office designer's favorite number were 10, drawing walls as # and open
spaces as ., the corner of the building containing 0,0 would look like this:

  0123456789 0 .#.####.## 1 ..#..#...# 2 #....##... 3 ###.#.###. 4 .##..#..#. 5 ..##....#.
  6 #...##.### Now, suppose you wanted to reach 7,4. The shortest route you
  could take is marked as O:

  0123456789 0 .#.####.## 1 .O#..#...# 2 #OOO.##... 3 ###O#.###. 4 .##OO#OO#. 5
  ..##OOO.#. 6 #...##.### Thus, reaching 7,4 would take a minimum of 11 steps
  (starting from your current location, 1,1).

What is the fewest number of steps required for you to reach 31,39?

Your puzzle answer was 90.

--- Part Two ---

How many locations (distinct x,y coordinates, including your starting location)
can you reach in at most 50 steps?

Your puzzle answer was 135.
*/

var Maze = function () {
  function Maze(faveNum, start) {
    classCallCheck(this, Maze);

    this.faveNum = faveNum;
    // A two dimensional array of booleans indicating if a cubicle is a wall.
    this.cubicles = [];
    this.openCubiclesSeen = 0;
    this.hasSeen(start);
  }

  createClass(Maze, [{
    key: "hasSeen",
    value: function hasSeen(_ref) {
      var _ref2 = slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      if (!this.cubicles[x]) {
        this.cubicles[x] = [];
      }
      if (this.cubicles[x][y] === undefined) {
        /* This block will only ever execute once for each (x, y) so we can
          safely increment openCubiclesSeen here without double counting. */
        var isWall = (x * x + 3 * x + 2 * x * y + y + y * y + this.faveNum).toString(2).split("").filter(function (c) {
          return c === "1";
        }).length % 2 === 1;
        if (!isWall) {
          this.openCubiclesSeen++;
        }
        this.cubicles[x][y] = isWall;
        return false;
      }
      return true;
    }
  }, {
    key: "isWall",
    value: function isWall(_ref3) {
      var _ref4 = slicedToArray(_ref3, 2),
          x = _ref4[0],
          y = _ref4[1];

      return this.cubicles[x][y];
    }
  }, {
    key: "newlyReachable",
    value: function newlyReachable(_ref5) {
      var _this = this;

      var _ref6 = slicedToArray(_ref5, 2),
          x = _ref6[0],
          y = _ref6[1];

      var potential = [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]];
      return potential.filter(function (_ref7) {
        var _ref8 = slicedToArray(_ref7, 2),
            x = _ref8[0],
            y = _ref8[1];

        return x >= 0 && y >= 0;
      }).filter(function (c) {
        return !_this.hasSeen(c) && !_this.isWall(c);
      });
    }
  }]);
  return Maze;
}();

function part1$12(input) {
  var boundary = [[1, 1]],
      steps = 0,
      maze = new Maze(input, [1, 1]);
  while (!boundary.some(function (_ref9) {
    var _ref10 = slicedToArray(_ref9, 2),
        x = _ref10[0],
        y = _ref10[1];

    return x === 31 && y === 39;
  })) {
    boundary = boundary.map(function (c) {
      return maze.newlyReachable(c);
    }).reduce(function (x, y) {
      return [].concat(toConsumableArray(x), toConsumableArray(y));
    });
    steps++;
  }
  return steps;
}

function part2$12(input) {
  var boundary = [[1, 1]],
      maze = new Maze(input, [1, 1]);
  for (var steps = 0; steps < 50; steps++) {
    boundary = boundary.map(function (c) {
      return maze.newlyReachable(c);
    }).reduce(function (x, y) {
      return [].concat(toConsumableArray(x), toConsumableArray(y));
    });
  }
  return maze.openCubiclesSeen;
}

var input13 = 1352
;

/*
--- Day 14: One-Time Pad ---

In order to communicate securely with Santa while you're on this mission, you've
been using a one-time pad that you generate using a pre-agreed algorithm.
Unfortunately, you've run out of keys in your one-time pad, and so you need to
generate some more.

To generate keys, you first get a stream of random data by taking the MD5 of a
pre-arranged salt (your puzzle input) and an increasing integer index (starting
with 0, and represented in decimal); the resulting MD5 hash should be
represented as a string of lowercase hexadecimal digits.

However, not all of these MD5 hashes are keys, and you need 64 new keys for your
one-time pad. A hash is a key only if:

It contains three of the same character in a row, like 777. Only consider the
first such triplet in a hash. One of the next 1000 hashes in the stream contains
that same character five times in a row, like 77777. Considering future hashes
for five-of-a-kind sequences does not cause those hashes to be skipped; instead,
regardless of whether the current hash is a key, always resume testing for keys
starting with the very next hash.

For example, if the pre-arranged salt is abc:

The first index which produces a triple is 18, because the MD5 hash of abc18
contains ...cc38887a5.... However, index 18 does not count as a key for your
one-time pad, because none of the next thousand hashes (index 19 through index
1018) contain 88888. The next index which produces a triple is 39; the hash of
abc39 contains eee. It is also the first key: one of the next thousand hashes
(the one at index 816) contains eeeee. None of the next six triples are keys,
but the one after that, at index 92, is: it contains 999 and index 200 contains
99999. Eventually, index 22728 meets all of the criteria to generate the 64th
key. So, using our example salt of abc, index 22728 produces the 64th key.

Given the actual salt in your puzzle input, what index produces your 64th
one-time pad key?

Your puzzle answer was 15168.

--- Part Two ---

Of course, in order to make this process even more secure, you've also
implemented key stretching.

Key stretching forces attackers to spend more time generating hashes.
Unfortunately, it forces everyone else to spend more time, too.

To implement key stretching, whenever you generate a hash, before you use it,
you first find the MD5 hash of that hash, then the MD5 hash of that hash, and so
on, a total of 2016 additional hashings. Always use lowercase hexadecimal
representations of hashes.

For example, to find the stretched hash for index 0 and salt abc:

Find the MD5 hash of abc0: 577571be4de9dcce85a041ba0410f29f. Then, find the MD5
hash of that hash: eec80a0c92dc8a0777c619d9bb51e910. Then, find the MD5 hash of
that hash: 16062ce768787384c81fe17a7a60c7e3. ...repeat many times... Then, find
the MD5 hash of that hash: a107ff634856bb300138cac6568c0f24. So, the stretched
hash for index 0 in this situation is a107ff.... In the end, you find the
original hash (one use of MD5), then find the hash-of-the-previous-hash 2016
times, for a total of 2017 uses of MD5.

The rest of the process remains the same, but now the keys are entirely
different. Again for salt abc:

The first triple (222, at index 5) has no matching 22222 in the next thousand
hashes. The second triple (eee, at index 10) hash a matching eeeee at index 89,
and so it is the first key. Eventually, index 22551 produces the 64th key
(triple fff with matching fffff at index 22859. Given the actual salt in your
puzzle input and using 2016 extra MD5 calls of key stretching, what index now
produces your 64th one-time pad key?

Your puzzle answer was 20864.
*/

function getTripleOrNull(hash) {
  for (var i = 0; i < hash.length - 2; i++) {
    if (hash[i] === hash[i + 1] && hash[i] === hash[i + 2]) {
      return hash[i];
    }
  }
  return null;
}

function indexOfKey(n, salt, hashMethod) {
  var keyIndices = [];
  var i = 0,
      potentialKeys = [];

  var _loop = function _loop() {
    potentialKeys = potentialKeys.filter(function (k) {
      return k !== null;
    }).filter(function (_ref) {
      var index = _ref.index;
      return index + 1000 >= i;
    });
    var hash = hashMethod(salt + i);
    potentialKeys.forEach(function (_ref2, j) {
      var triple = _ref2.triple,
          index = _ref2.index;

      if (hash.includes(triple.repeat(5))) {
        keyIndices.push(index);
        keyIndices.sort(function (x, y) {
          return x - y;
        });
        potentialKeys[j] = null;
        console.log('Found ' + keyIndices.length + ' keys.');
      }
    });
    var maybeTriple = getTripleOrNull(hash);
    if (maybeTriple) {
      potentialKeys.push({ index: i, triple: maybeTriple });
    }
    i++;
  };

  while (keyIndices.length < n - 1 || i < keyIndices[n] + 1000) {
    _loop();
  }
  return keyIndices[n];
}

function part1$13(input) {
  return indexOfKey(63, input, MD5.hash);
}

function part2$13(input) {
  return indexOfKey(63, input, function (s) {
    var hash = s;
    for (var i = 0; i < 2017; i++) {
      hash = MD5.hash(hash);
    }
    return hash;
  });
}

var input14 = "qzyelonm"
;

/*
--- Day 15: Timing is Everything ---

The halls open into an interior plaza containing a large kinetic sculpture. The sculpture is in a sealed enclosure and seems to involve a set of identical spherical capsules that are carried to the top and allowed to bounce through the maze of spinning pieces.

Part of the sculpture is even interactive! When a button is pressed, a capsule is dropped and tries to fall through slots in a set of rotating discs to finally go through a little hole at the bottom and come out of the sculpture. If any of the slots aren't aligned with the capsule as it passes, the capsule bounces off the disc and soars away. You feel compelled to get one of those capsules.

The discs pause their motion each second and come in different sizes; they seem to each have a fixed number of positions at which they stop. You decide to call the position with the slot 0, and count up for each position it reaches next.

Furthermore, the discs are spaced out so that after you push the button, one second elapses before the first disc is reached, and one second elapses as the capsule passes from one disk to the one below it. So, if you push the button at time=100, then the capsule reaches the top disc at time=101, the second disc at time=102, the third disc at time=103, and so on.

The button will only drop a capsule at an integer time - no fractional seconds allowed.

For example, at time=0, suppose you see the following arrangement:

Disc #1 has 5 positions; at time=0, it is at position 4.
Disc #2 has 2 positions; at time=0, it is at position 1.
If you press the button exactly at time=0, the capsule would start to fall; it would reach the first disc at time=1. Since the first disc was at position 4 at time=0, by time=1 it has ticked one position forward. As a five-position disc, the next position is 0, and the capsule falls through the slot.

Then, at time=2, the capsule reaches the second disc. The second disc has ticked forward two positions at this point: it started at position 1, then continued to position 0, and finally ended up at position 1 again. Because there's only a slot at position 0, the capsule bounces away.

If, however, you wait until time=5 to push the button, then when the capsule reaches each disc, the first disc will have ticked forward 5+1 = 6 times (to position 0), and the second disc will have ticked forward 5+2 = 7 times (also to position 0). In this case, the capsule would fall through the discs and come out of the machine.

However, your situation has more than two discs; you've noted their positions in your puzzle input. What is the first time you can press the button to get a capsule?

Your puzzle answer was 317371.

--- Part Two ---

After getting the first capsule (it contained a star! what great fortune!), the machine detects your success and begins to rearrange itself.

When it's done, the discs are back in their original configuration as if it were time=0 again, but a new disc with 11 positions and starting at position 0 has appeared exactly one second below the previously-bottom disc.

With this new disc, and counting again starting from time=0 with the configuration in your puzzle input, what is the first time you can press the button to get another capsule?

Your puzzle answer was 2080951.
*/

function firstWinningTime(discs) {
  var t = 0,
      step = 1;
  discs.forEach(function (_ref) {
    var delay = _ref.delay,
        positions = _ref.positions,
        start = _ref.start;

    while ((start + t + delay) % positions) {
      t += step;
    }
    step *= positions;
  });
  return t;
}

function part1$14(input) {
  return firstWinningTime(input);
}

function part2$14(input) {
  var newDisc = { "delay": 7, "positions": 11, "start": 0 };
  return firstWinningTime([].concat(toConsumableArray(input), [newDisc]));
}

var input15 = [
  { "delay": 1, "positions": 17, "start": 1 },
  { "delay": 2, "positions": 7, "start": 0 },
  { "delay": 3, "positions": 19, "start": 2 },
  { "delay": 4, "positions": 5, "start": 0 },
  { "delay": 5, "positions": 3, "start": 0 },
  { "delay": 6, "positions": 13, "start": 5 }
]
;

var time = void 0;
console.log("--- DAY 01 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1(input01) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2(input01) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 02 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$1(input02) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$1(input02) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 03 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$2(input03) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$2(input03) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 04 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$3(input04) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$3(input04) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 05 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$4(input05) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$4(input05) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 06 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$5(input06) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$5(input06) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 07 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$6(input07) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$6(input07) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 08 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$7(input08) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$7(input08) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 09 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$8(input09) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$8(input09) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 10 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$9(input10) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$9(input10) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 11 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$10(input11) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$10(input11) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 12 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$11(input12) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$11(input12) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 13 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$12(input13) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$12(input13) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- DAY 14 ---");
console.log("--- part 1 ---");
time = Date.now();
console.log("solution: " + part1$13(input14) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
console.log("solution: " + part2$13(input14) + "\n\n");
console.log("--- DAY 15 ---");
time = Date.now();
console.log("--- part 1 ---");
console.log("solution: " + part1$14(input15) + ", time: " + (Date.now() - time) + "ms\n\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$14(input15) + ", time: " + (Date.now() - time) + "ms\n\n");

}());
