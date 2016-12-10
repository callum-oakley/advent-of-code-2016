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

var Screen = function () {
  function Screen(width, height) {
    classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.pixels = [];
    for (var i = 0; i < width; i++) {
      this.pixels.push([]);
      for (var j = 0; j < height; j++) {
        this.pixels[i][j] = ".";
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

      for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
          this.pixels[i][j] = "#";
        }
      }
    }
  }, {
    key: "rotateRow",
    value: function rotateRow(_ref3) {
      var row = _ref3.row,
          distance = _ref3.distance;

      var oldRow = [];
      for (var i = 0; i < this.width; i++) {
        oldRow.push(this.pixels[i][row]);
        var rotatedIndex = (i - distance + this.width) % this.width;
        this.pixels[i][row] = oldRow[rotatedIndex] || this.pixels[rotatedIndex][row];
      }
    }
  }, {
    key: "rotateColumn",
    value: function rotateColumn(_ref4) {
      var column = _ref4.column,
          distance = _ref4.distance;

      var oldColumn = [];
      for (var i = 0; i < this.height; i++) {
        oldColumn.push(this.pixels[column][i]);
        var rotatedIndex = (i - distance + this.height) % this.height;
        this.pixels[column][i] = oldColumn[rotatedIndex] || this.pixels[column][rotatedIndex];
      }
    }
  }, {
    key: "litPixels",
    get: function get() {
      return this.pixels.reduce(function (x, y) {
        return [].concat(toConsumableArray(x), toConsumableArray(y));
      }).filter(function (p) {
        return p === "#";
      }).length;
    }
  }]);
  return Screen;
}();

function part1$7(input) {
  var screen = new Screen(50, 6);
  input.forEach(function (op) {
    return screen.process(op);
  });
  return screen.litPixels;
  // const screen = new Screen(7, 3);
  // screen.rect({ width: 3, height: 2 });
  // screen.rotateColumn({ column: 1, distance: 1 });
  // screen.rotateRow({ row: 0, distance: 4 });
  // console.log(screen.pixels);
  // screen.rotateColumn({ column: 1, distance: 1 });
}

function part2$7(input) {}

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
console.log("--- DAY 08 ---");
console.log("--- part 1 ---");
console.log("solution: " + part1$7(input08) + "\n\n");
console.log("--- part 2 ---");
console.log("solution: " + part2$7(input08) + "\n\n");

}());
