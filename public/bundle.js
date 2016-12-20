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

function isRegister(x) {
  return ["a", "b", "c", "d"].includes(x);
}

function read(s, x) {
  return isRegister(x) ? s[x] : parseInt(x, 10);
}

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

/*
--- Day 15: Timing is Everything ---

The halls open into an interior plaza containing a large kinetic sculpture. The
sculpture is in a sealed enclosure and seems to involve a set of identical
spherical capsules that are carried to the top and allowed to bounce through the
maze of spinning pieces.

Part of the sculpture is even interactive! When a button is pressed, a capsule
is dropped and tries to fall through slots in a set of rotating discs to finally
go through a little hole at the bottom and come out of the sculpture. If any of
the slots aren't aligned with the capsule as it passes, the capsule bounces off
the disc and soars away. You feel compelled to get one of those capsules.

The discs pause their motion each second and come in different sizes; they seem
to each have a fixed number of positions at which they stop. You decide to call
the position with the slot 0, and count up for each position it reaches next.

Furthermore, the discs are spaced out so that after you push the button, one
second elapses before the first disc is reached, and one second elapses as the
capsule passes from one disk to the one below it. So, if you push the button at
time=100, then the capsule reaches the top disc at time=101, the second disc at
time=102, the third disc at time=103, and so on.

The button will only drop a capsule at an integer time - no fractional seconds
allowed.

For example, at time=0, suppose you see the following arrangement:

Disc #1 has 5 positions; at time=0, it is at position 4. Disc #2 has 2
positions; at time=0, it is at position 1. If you press the button exactly at
time=0, the capsule would start to fall; it would reach the first disc at
time=1. Since the first disc was at position 4 at time=0, by time=1 it has
ticked one position forward. As a five-position disc, the next position is 0,
and the capsule falls through the slot.

Then, at time=2, the capsule reaches the second disc. The second disc has ticked
forward two positions at this point: it started at position 1, then continued to
position 0, and finally ended up at position 1 again. Because there's only a
slot at position 0, the capsule bounces away.

If, however, you wait until time=5 to push the button, then when the capsule
reaches each disc, the first disc will have ticked forward 5+1 = 6 times (to
position 0), and the second disc will have ticked forward 5+2 = 7 times (also to
position 0). In this case, the capsule would fall through the discs and come out
of the machine.

However, your situation has more than two discs; you've noted their positions in
your puzzle input. What is the first time you can press the button to get a
capsule?

Your puzzle answer was 317371.

--- Part Two ---

After getting the first capsule (it contained a star! what great fortune!), the
machine detects your success and begins to rearrange itself.

When it's done, the discs are back in their original configuration as if it were
time=0 again, but a new disc with 11 positions and starting at position 0 has
appeared exactly one second below the previously-bottom disc.

With this new disc, and counting again starting from time=0 with the
configuration in your puzzle input, what is the first time you can press the
button to get another capsule?

Your puzzle answer was 2080951.
*/

/*
--- Day 16: Dragon Checksum ---

You're done scanning this part of the network, but you've left traces of your
presence. You need to overwrite some disks with random-looking data to cover
your tracks and update the local security system with a new checksum for those
disks.

For the data to not be suspiscious, it needs to have certain properties; purely
random data will be detected as tampering. To generate appropriate random data,
you'll need to use a modified dragon curve.

Start with an appropriate initial state (your puzzle input). Then, so long as
you don't have enough data yet to fill the disk, repeat the following steps:

Call the data you have at this point "a". Make a copy of "a"; call this copy
"b". Reverse the order of the characters in "b". In "b", replace all instances
of 0 with 1 and all 1s with 0. The resulting data is "a", then a single 0, then
"b". For example, after a single step of this process,

1 becomes 100. 0 becomes 001. 11111 becomes 11111000000. 111100001010 becomes
1111000010100101011110000. Repeat these steps until you have enough data to fill
the desired disk.

Once the data has been generated, you also need to create a checksum of that
data. Calculate the checksum only for the data that fits on the disk, even if
you generated more data than that in the previous step.

The checksum for some given data is created by considering each non-overlapping
pair of characters in the input data. If the two characters match (00 or 11),
the next checksum character is a 1. If the characters do not match (01 or 10),
the next checksum character is a 0. This should produce a new string which is
exactly half as long as the original. If the length of the checksum is even,
repeat the process until you end up with a checksum with an odd length.

For example, suppose we want to fill a disk of length 12, and when we finally
generate a string of at least length 12, the first 12 characters are
110010110100. To generate its checksum:

Consider each pair: 11, 00, 10, 11, 01, 00. These are same, same, different,
same, different, same, producing 110101. The resulting string has length 6,
which is even, so we repeat the process. The pairs are 11 (same), 01
(different), 01 (different). This produces the checksum 100, which has an odd
length, so we stop. Therefore, the checksum for 110010110100 is 100.

Combining all of these steps together, suppose you want to fill a disk of length
20 using an initial state of 10000:

Because 10000 is too short, we first use the modified dragon curve to make it
longer. After one round, it becomes 10000011110 (11 characters), still too
short. After two rounds, it becomes 10000011110010000111110 (23 characters),
which is enough. Since we only need 20, but we have 23, we get rid of all but
the first 20 characters: 10000011110010000111. Next, we start calculating the
checksum; after one round, we have 0111110101, which 10 characters long (even),
so we continue. After two rounds, we have 01100, which is 5 characters long
(odd), so we are done. In this example, the correct checksum would therefore be
01100.

The first disk you have to fill has length 272. Using the initial state in your
puzzle input, what is the correct checksum?

Your puzzle answer was 10010110010011110.
*/

function dragon(data) {
  var rotated = data.split("").map(function (x) {
    return x === "0" ? "1" : "0";
  }).reduce(function (x, y) {
    return y + x;
  });
  return data + "0" + rotated;
}

/*
--- Day 17: Two Steps Forward ---

You're trying to access a secure vault protected by a 4x4 grid of small rooms
connected by doors. You start in the top-left room (marked S), and you can
access the vault (marked V) once you reach the bottom-right room:

#########
######### #S| | | # #-#-#-#-# # | | | # #-#-#-#-# # | | | # #-#-#-#-# # | | |   #######
#########
V Fixed walls are marked with #, and doors are marked with - or |.

The doors in your current room are either open or closed (and locked) based on
the hexadecimal MD5 hash of a passcode (your puzzle input) followed by a
sequence of uppercase characters representing the path you have taken so far (U
for up, D for down, L for left, and R for right).

Only the first four characters of the hash are used; they represent,
respectively, the doors up, down, left, and right from your current position.
Any b, c, d, e, or f means that the corresponding door is open; any other
character (any number or a) means that the corresponding door is closed and
locked.

To access the vault, all you need to do is reach the bottom-right room; reaching
this room opens the vault and all doors in the maze.

For example, suppose the passcode is hijkl. Initially, you have taken no steps,
and so your path is empty: you simply find the MD5 hash of hijkl alone. The
first four characters of this hash are ced9, which indicate that up is open (c),
down is open (e), left is open (d), and right is closed and locked (9). Because
you start in the top-left corner, there are no "up" or "left" doors to be open,
so your only choice is down.

Next, having gone only one step (down, or D), you find the hash of hijklD. This
produces f2bc, which indicates that you can go back up, left (but that's a
wall), or right. Going right means hashing hijklDR to get 5745 - all doors
closed and locked. However, going up instead is worthwhile: even though it
returns you to the room you started in, your path would then be DU, opening a
different set of doors.

After going DU (and then hashing hijklDU to get 528e), only the right door is
open; after going DUR, all doors lock. (Fortunately, your actual passcode is not
hijkl).

Passcodes actually used by Easter Bunny Vault Security do allow access to the
vault if you know the right path. For example:

If your passcode were ihgpwlah, the shortest path would be DDRRRD. With
kglvqrro, the shortest path would be DDUDRLRRUDRD. With ulqzkmiv, the shortest
would be DRURDRUDDLLDLUURRDULRLDUUDDDRR. Given your vault's passcode, what is
the shortest path (the actual path, not just the length) to reach the vault?

Your puzzle answer was RRRLDRDUDD.

--- Part Two ---

You're curious how robust this security solution really is, and so you decide to
find longer and longer paths which still provide access to the vault. You
remember that paths always end the first time they reach the bottom-right room
(that is, they can never pass through it, only end in it).

For example:

If your passcode were ihgpwlah, the longest path would take 370 steps. With
kglvqrro, the longest path would be 492 steps long. With ulqzkmiv, the longest
path would be 830 steps long. What is the length of the longest path that
reaches the vault?

Your puzzle answer was 706.
*/

function is$1(_ref, _ref2) {
  var _ref4 = slicedToArray(_ref, 2),
      a = _ref4[0],
      b = _ref4[1];

  var _ref3 = slicedToArray(_ref2, 2),
      c = _ref3[0],
      d = _ref3[1];

  return a === c && b === d;
}

var directions = ["U", "D", "L", "R"];

/* Returns true if and only if we hit a door by moving in the given direction
  from the given [x, y] position. */
function isDoor(_ref5, direction) {
  var _ref6 = slicedToArray(_ref5, 2),
      x = _ref6[0],
      y = _ref6[1];

  if (x === 0 && direction === "L") {
    return false;
  }
  if (x === 3 && direction === "R") {
    return false;
  }
  if (y === 0 && direction === "D") {
    return false;
  }
  if (y === 3 && direction === "U") {
    return false;
  }
  return true;
}

var Maze$1 = function () {
  function Maze(pass) {
    classCallCheck(this, Maze);
    this.pass = pass;
  }

  createClass(Maze, [{
    key: "validNextMoves",
    value: function validNextMoves(_ref7) {
      var position = _ref7.position,
          path = _ref7.path;

      var hash = MD5.hash(this.pass + path);
      // We make use of the convenient fact that "i" < "a" for any digit i.
      return directions.filter(function (d, i) {
        return hash[i] > "a" && isDoor(position, d);
      });
    }
  }]);
  return Maze;
}();

function move$2(_ref8, direction) {
  var _ref8$position = slicedToArray(_ref8.position, 2),
      x = _ref8$position[0],
      y = _ref8$position[1],
      path = _ref8.path;

  if (direction === "U") {
    y++;
  }
  if (direction === "D") {
    y--;
  }
  if (direction === "L") {
    x--;
  }
  if (direction === "R") {
    x++;
  }
  return { position: [x, y], path: path + direction };
}

/*
--- Day 18: Like a Rogue ---

As you enter this room, you hear a loud click! Some of the tiles in the floor
here seem to be pressure plates for traps, and the trap you just triggered has
run out of... whatever it tried to do to you. You doubt you'll be so lucky next
time.

Upon closer examination, the traps and safe tiles in this room seem to follow a
pattern. The tiles are arranged into rows that are all the same width; you take
note of the safe tiles (.) and traps (^) in the first row (your puzzle input).

The type of tile (trapped or safe) in each row is based on the types of the
tiles in the same position, and to either side of that position, in the previous
row. (If either side is off either end of the row, it counts as "safe" because
there isn't a trap embedded in the wall.)

For example, suppose you know the first row (with tiles marked by letters) and
want to determine the next row (with tiles marked by numbers):

ABCDE 12345 The type of tile 2 is based on the types of tiles A, B, and C; the
type of tile 5 is based on tiles D, E, and an imaginary "safe" tile. Let's call
these three tiles from the previous row the left, center, and right tiles,
respectively. Then, a new tile is a trap only in one of the following
situations:

Its left and center tiles are traps, but its right tile is not. Its center and
right tiles are traps, but its left tile is not. Only its left tile is a trap.
Only its right tile is a trap. In any other situation, the new tile is safe.

Then, starting with the row ..^^., you can determine the next row by applying
those rules to each new tile:

The leftmost character on the next row considers the left (nonexistent, so we
assume "safe"), center (the first ., which means "safe"), and right (the second .,
also "safe") tiles on the previous row. Because all of the trap rules require a
trap in at least one of the previous three tiles, the first tile on this new row
is also safe, .. The second character on the next row considers its left (.),
center (.), and right (^) tiles from the previous row. This matches the fourth
rule: only the right tile is a trap. Therefore, the next tile in this new row is
a trap, ^. The third character considers .^^, which matches the second trap
rule: its center and right tiles are traps, but its left tile is not. Therefore,
this tile is also a trap, ^. The last two characters in this new row match the
first and third rules, respectively, and so they are both also traps, ^. After
these steps, we now know the next row of tiles in the room: .^^^^. Then, we
continue on to the next row, using the same rules, and get ^^..^. After
determining two new rows, our map looks like this:

..^^. .^^^^ ^^..^ Here's a larger example with ten tiles per row and ten rows:

.^^.^.^^^^ ^^^...^..^ ^.^^.^.^^. ..^^...^^^ .^^^^.^^.^ ^^..^.^^.. ^^^^..^^^. ^..^^^^.^^ .^^^..^.^^ ^^.^^^..^^
In ten rows, this larger example has 38 safe tiles.

Starting with the map in your puzzle input, in a total of 40 rows (including the
starting row), how many safe tiles are there?

Your puzzle answer was 1987.

--- Part Two ---

How many safe tiles are there in a total of 400000 rows?

Your puzzle answer was 19984714.
*/

// The rule simplifies to just checking if left === right.

/*
--- Day 19: An Elephant Named Joseph ---

The Elves contact you over a highly secure emergency channel. Back at the North
Pole, the Elves are busy misunderstanding White Elephant parties.

Each Elf brings a present. They all sit in a circle, numbered starting with
position 1. Then, starting with the first Elf, they take turns stealing all the
presents from the Elf to their left. An Elf with no presents is removed from the
circle and does not take turns.

For example, with five Elves (numbered 1 to 5):

  1 5   2 4 3 Elf 1 takes Elf 2's present. Elf 2 has no presents and is skipped.
  Elf 3 takes Elf 4's present. Elf 4 has no presents and is also skipped. Elf 5
  takes Elf 1's two presents. Neither Elf 1 nor Elf 2 have any presents, so both
  are skipped. Elf 3 takes Elf 5's three presents. So, with five Elves, the Elf
  that sits starting in position 3 gets all the presents.

With the number of Elves given in your puzzle input, which Elf gets all the
presents?

Your puzzle answer was 1841611.

--- Part Two ---

Realizing the folly of their present-exchange rules, the Elves agree to instead
steal presents from the Elf directly across the circle. If two Elves are across
the circle, the one on the left (from the perspective of the stealer) is stolen
from. The other rules remain unchanged: Elves with no presents are removed from
the circle entirely, and the other elves move in slightly to keep the circle
evenly spaced.

For example, with five Elves (again numbered 1 to 5):

The Elves sit in a circle; Elf 1 goes first: 1 5   2 4 3 Elves 3 and 4 are
across the circle; Elf 3's present is stolen, being the one to the left. Elf 3
leaves the circle, and the rest of the Elves move in: 1           1 5   2  -->
5   2 4 -          4 Elf 2 steals from the Elf directly across the circle, Elf
5: 1         1  -   2  -->     2 4         4  Next is Elf 4 who, choosing
between Elves 1 and 2, steals from Elf 1: -          2   2  --> 4          4
Finally, Elf 2 steals from Elf 4: 2 -->  2   - So, with five Elves, the Elf that
sits starting in position 2 gets all the presents.

With the number of Elves given in your puzzle input, which Elf now gets all the
presents?

Your puzzle answer was 1423634.

Both parts of this puzzle are complete! They provide two gold stars: **

At this point, you should return to your advent calendar and try another puzzle.

Your puzzle input was 3017957.
*/

var Elves = function () {
  function Elves(n) {
    classCallCheck(this, Elves);

    for (var i = 1; i <= n; i++) {
      this[i] = { id: i };
    }
    for (var _i = 1; _i <= n; _i++) {
      this[_i].left = this[_i % n + 1];
    }
    this.size = n;
    this.top = this[1];
    /* `bottom` doesn’t point to the elf directly opposite top, but rather the
      elf to the right of the elf directly opposite top. We need access to both
      and moving left is easy but moving right is hard. */
    this.bottom = this[(Math.floor(this.size / 2) - 1) % this.size + 1];
  }

  // Likewise, `rightOfVictim` is the elf to the right of the actual victim.


  createClass(Elves, [{
    key: "stealFrom",
    value: function stealFrom(rightOfVictim) {
      var actualVictim = rightOfVictim.left;
      // “Remove” the actual victim from the table by orphaning them.
      rightOfVictim.left = actualVictim.left;
      this.size--;
      this.top = this.top.left;
      if (this.size % 2 === 0) {
        this.bottom = this.bottom.left;
      }
    }
  }, {
    key: "stealToTheLeft",
    value: function stealToTheLeft() {
      this.stealFrom(this.top);
    }
  }, {
    key: "stealAcross",
    value: function stealAcross() {
      this.stealFrom(this.bottom);
    }
  }]);
  return Elves;
}();

function part1$18(input) {
  var elves = new Elves(input);
  while (elves.size > 1) {
    elves.stealToTheLeft();
  }
  return elves.top.id;
}

function part2$18(input) {
  var elves = new Elves(input);
  while (elves.size > 1) {
    elves.stealAcross();
  }
  return elves.top.id;
}

var input19 = 3017957
;

var time = void 0;
// console.log("--- DAY 01 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day01.part1(input01)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day01.part2(input01)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 02 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day02.part1(input02)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day02.part2(input02)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 03 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day03.part1(input03)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day03.part2(input03)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 04 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day04.part1(input04)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day04.part2(input04)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 05 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day05.part1(input05)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day05.part2(input05)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 06 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day06.part1(input06)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day06.part2(input06)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 07 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day07.part1(input07)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day07.part2(input07)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 08 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day08.part1(input08)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day08.part2(input08)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 09 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day09.part1(input09)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day09.part2(input09)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 10 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day10.part1(input10)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day10.part2(input10)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 11 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day11.part1(input11)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day11.part2(input11)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 12 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day12.part1(input12)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day12.part2(input12)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 13 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day13.part1(input13)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day13.part2(input13)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 14 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day14.part1(input14)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// console.log(`solution: ${day14.part2(input14)}\n`);
// console.log("--- DAY 15 ---");
// time = Date.now();
// console.log("--- part 1 ---");
// console.log(`solution: ${day15.part1(input15)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day15.part2(input15)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 16 ---");
// time = Date.now();
// console.log("--- part 1 ---");
// console.log(`solution: ${day16.part1(input16)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day16.part2(input16)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 17 ---");
// time = Date.now();
// console.log("--- part 1 ---");
// console.log(`solution: ${day17.part1(input17)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day17.part2(input17)}, time: ${Date.now() - time}ms\n`);
// console.log("--- DAY 18 ---");
// time = Date.now();
// console.log("--- part 1 ---");
// console.log(`solution: ${day18.part1(input18)}, time: ${Date.now() - time}ms\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day18.part2(input18)}, time: ${Date.now() - time}ms\n`);
console.log("--- DAY 19 ---");
time = Date.now();
console.log("--- part 1 ---");
console.log("solution: " + part1$18(input19) + ", time: " + (Date.now() - time) + "ms\n");
console.log("--- part 2 ---");
time = Date.now();
console.log("solution: " + part2$18(input19) + ", time: " + (Date.now() - time) + "ms\n");

}());
