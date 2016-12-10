(function () {
'use strict';

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

// console.log("--- DAY 01 ---");
// console.log("--- part 1 ---");
// console.log(`solution: ${day01.part1(input01)}\n\n`);
// console.log("--- part 2 ---");
// console.log(`solution: ${day01.part2(input01)}\n\n`);
// console.log("--- DAY 02 ---");
// console.log("--- part 1 ---");
// console.log(`solution: ${day02.part1(input02)}\n\n`);
// console.log("--- part 2 ---");
// console.log(`solution: ${day02.part2(input02)}\n\n`);
// console.log("--- DAY 03 ---");
// console.log("--- part 1 ---");
// console.log(`solution: ${day03.part1(input03)}\n\n`);
// console.log("--- part 2 ---");
// console.log(`solution: ${day03.part2(input03)}\n\n`);
// console.log("--- DAY 04 ---");
// console.log("--- part 1 ---");
// console.log(`solution: ${day04.part1(input04)}\n\n`);
// console.log("--- part 2 ---");
// console.log(`solution: ${day04.part2(input04)}\n\n`);
// console.log("--- DAY 05 ---");
// console.log("--- part 1 ---");
// console.log(`solution: ${day05.part1(input05)}\n\n`);
// console.log("--- part 2 ---");
// console.log(`solution: ${day05.part2(input05)}\n\n`);
// console.log("--- DAY 06 ---");
// console.log("--- part 1 ---");
// console.log(`solution: ${day06.part1(input06)}\n\n`);
// console.log("--- part 2 ---");
// console.log(`solution: ${day06.part2(input06)}\n\n`);
// console.log("--- DAY 07 ---");
// console.log("--- part 1 ---");
// console.log(`solution: ${day07.part1(input07)}\n\n`);
// console.log("--- part 2 ---");
// console.log(`solution: ${day07.part2(input07)}\n\n`);
// console.log("--- DAY 08 ---");
// console.log("--- part 1 ---");
// console.log(`solution: ${day08.part1(input08)}\n\n`);
// console.log("--- part 2 ---");
// console.log(`solution: ${day08.part2(input08)}\n\n`);
console.log("--- DAY 09 ---");
console.log("--- part 1 ---");
console.log("solution: " + part1$8(input09) + "\n\n");
console.log("--- part 2 ---");
console.log("solution: " + part2$8(input09) + "\n\n");

}());
