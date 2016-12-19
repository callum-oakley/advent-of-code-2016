import * as day01 from "./day-01.js";
import input01 from "./input-01.json";
import * as day02 from "./day-02.js";
import input02 from "./input-02.json";
import * as day03 from "./day-03.js";
import input03 from "./input-03.json";
import * as day04 from "./day-04.js";
import input04 from "./input-04.json";
import * as day05 from "./day-05.js";
import input05 from "./input-05.json";
import * as day06 from "./day-06.js";
import input06 from "./input-06.json";
import * as day07 from "./day-07.js";
import input07 from "./input-07.json";
import * as day08 from "./day-08.js";
import input08 from "./input-08.json";
import * as day09 from "./day-09.js";
import input09 from "./input-09.json";
import * as day10 from "./day-10.js";
import input10 from "./input-10.json";
import * as day11 from "./day-11.js";
import input11 from "./input-11.json";
import * as day12 from "./day-12.js";
import input12 from "./input-12.json";
import * as day13 from "./day-13.js";
import input13 from "./input-13.json";
import * as day14 from "./day-14.js";
import input14 from "./input-14.json";
import * as day15 from "./day-15.js";
import input15 from "./input-15.json";
import * as day16 from "./day-16.js";
import input16 from "./input-16.json";
import * as day17 from "./day-17.js";
import input17 from "./input-17.json";
import * as day18 from "./day-18.js";
import input18 from "./input-18.json";

let time;
// console.log("--- DAY 01 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day01.part1(input01)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day01.part2(input01)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 02 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day02.part1(input02)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day02.part2(input02)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 03 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day03.part1(input03)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day03.part2(input03)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 04 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day04.part1(input04)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day04.part2(input04)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 05 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day05.part1(input05)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day05.part2(input05)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 06 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day06.part1(input06)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day06.part2(input06)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 07 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day07.part1(input07)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day07.part2(input07)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 08 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day08.part1(input08)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day08.part2(input08)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 09 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day09.part1(input09)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day09.part2(input09)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 10 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day10.part1(input10)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day10.part2(input10)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 11 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day11.part1(input11)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day11.part2(input11)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 12 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day12.part1(input12)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day12.part2(input12)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 13 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day13.part1(input13)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day13.part2(input13)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 14 ---");
// console.log("--- part 1 ---");
// time = Date.now();
// console.log(`solution: ${day14.part1(input14)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// console.log(`solution: ${day14.part2(input14)}\n\n`);
// console.log("--- DAY 15 ---");
// time = Date.now();
// console.log("--- part 1 ---");
// console.log(`solution: ${day15.part1(input15)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day15.part2(input15)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 16 ---");
// time = Date.now();
// console.log("--- part 1 ---");
// console.log(`solution: ${day16.part1(input16)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day16.part2(input16)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- DAY 17 ---");
// time = Date.now();
// console.log("--- part 1 ---");
// console.log(`solution: ${day17.part1(input17)}, time: ${Date.now() - time}ms\n\n`);
// console.log("--- part 2 ---");
// time = Date.now();
// console.log(`solution: ${day17.part2(input17)}, time: ${Date.now() - time}ms\n\n`);
console.log("--- DAY 18 ---");
time = Date.now();
console.log("--- part 1 ---");
console.log(`solution: ${day18.part1(input18)}, time: ${Date.now() - time}ms\n\n`);
console.log("--- part 2 ---");
time = Date.now();
console.log(`solution: ${day18.part2(input18)}, time: ${Date.now() - time}ms\n\n`);
