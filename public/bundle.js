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
      var hash;
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
function group$1(arr) {
  var groups = [],
      i = 0;
  while (i < arr.length) {
    var group = [];
    do {
      group.push(arr[i++]);
    } while (arr[i] === group[0]);
    groups.push(group);
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
console.log("--- DAY 06 ---");
console.log("--- part 1 ---");
console.log("solution: " + part1$5(input06) + "\n\n");
console.log("--- part 2 ---");
console.log("solution: " + part2$5(input06) + "\n\n");

}());
