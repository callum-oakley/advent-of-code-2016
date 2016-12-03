/*
--- Day 2: Bathroom Security ---

You arrive at Easter Bunny Headquarters under cover of darkness. However, you left in such a rush that you forgot to use the bathroom! Fancy office buildings like this one usually have keypad locks on their bathrooms, so you search the front desk for the code.

"In order to improve security," the document you find says, "bathroom codes will no longer be written down. Instead, please memorize and follow the procedure below to access the bathrooms."

The document goes on to explain that each button to be pressed can be found by starting on the previous button and moving to adjacent buttons on the keypad: U moves up, D moves down, L moves left, and R moves right. Each line of instructions corresponds to one button, starting at the previous button (or, for the first line, the "5" button); press whatever button you're on at the end of each line. If a move doesn't lead to a button, ignore it.

You can't hold it much longer, so you decide to figure out the code as you walk to the bathroom. You picture a keypad like this:

1 2 3
4 5 6
7 8 9
Suppose your instructions are:

ULL
RRDDD
LURDL
UUUUD
You start at "5" and move up (to "2"), left (to "1"), and left (you can't, and stay on "1"), so the first button is 1.
Starting from the previous button ("1"), you move right twice (to "3") and then down three times (stopping at "9" after two moves and ignoring the third), ending up with 9.
Continuing from "9", you move left, up, right, down, and left, ending with 8.
Finally, you move up four times (stopping at "2"), then down once, ending with 5.
So, in this example, the bathroom code is 1985.

Your puzzle input is the instructions from the document you found at the front desk. What is the bathroom code?

Your puzzle answer was 78985.

--- Part Two ---

You finally arrive at the bathroom (it's a several minute walk from the lobby so visitors can behold the many fancy conference rooms and water coolers on this floor) and go to punch in the code. Much to your bladder's dismay, the keypad is not at all like you imagined it. Instead, you are confronted with the result of hundreds of man-hours of bathroom-keypad-design meetings:

    1
  2 3 4
5 6 7 8 9
  A B C
    D
You still start at "5" and stop when you're at an edge, but given the same instructions as above, the outcome is very different:

You start at "5" and don't move at all (up and left are both edges), ending at 5.
Continuing from "5", you move right twice and down three times (through "6", "7", "B", "D", "D"), ending at D.
Then, from "D", you move five more times (through "D", "B", "C", "C", "B"), ending at B.
Finally, after five more moves, you end at 3.
So, given the actual keypad layout, the code would be 5DB3.

Using the same instructions in your puzzle input, what is the correct bathroom code?

Your puzzle answer was 57DD8.
*/

// Adds two arrays elementwise.
function add(u, v) {
  return u.reduce((acc, _, i) => [...acc, u[i] + v[i]], []);
}

function toButton(keypad, p) {
  // `toString(16)` so that the 10th index gives us "a", 11th gives us "b", etc.
  return (keypad.indexOf(p.toString()) + 1).toString(16);
}

function move(keypad) {
  return (p, m) => keypad.includes(add(p, m).toString()) ? add(p, m) : p;
}

function toMovement(instruction) {
  if (instruction === "U") { return [0, -1]; }
  if (instruction === "D") { return [0, 1]; }
  if (instruction === "L") { return [-1, 0]; }
  if (instruction === "R") { return [1, 0]; }
}

function processLine(keypad) {
  return (acc, line) => {
    const p = line.split("").map(toMovement).reduce(move(keypad), acc.position);
    return {
      position: p,
      keyCode: acc.keyCode + toButton(keypad, p).toString()
    };
  }
}

export function part1(input) {
  /* The keypad is defined as a list of the coordinates it contains, ordered so
    that button n is in the (n - 1)th position. Again, we store the coordinates
    as strings, to avoid array equality awkwardness. */
  const keypad = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ].map(x => x.toString());
  const initialState = { position: [1, 1], keyCode: [] };
  return input.reduce(processLine(keypad), initialState).keyCode;
}

export function part2(input) {
  const keypad = [
                    [2, 0],
            [1, 1], [2, 1], [3, 1],
    [0, 2], [1, 2], [2, 2], [3, 2], [4, 2],
            [1, 3], [2, 3], [3, 3],
                    [2, 4]
  ].map(x => x.toString());
  const initialState = { position: [0, 2], keyCode: [] };
  return input.reduce(processLine(keypad), initialState).keyCode;
}
