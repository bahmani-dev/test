console.log("Hello JavaScript!");

// Variable
// Data Type
// Operators
// Conditions
// Loop
// DOM
// Date time
// OOP
// Function
// AJAX
// Modern JS

// var course = "JavaScript";
// var age = 20;
// var vicePrisdentOfUnitedStatesOfPuleSurkh = "Norulhaq Rayess";

// age = "twenty one";

// let cash = 1000000000;
// const id = 830;

// // 1. number
// const phone = 72891212;
// const score = 79.432;
// console.log(typeof phone);
// console.log(typeof score);

// // 2. string
// const fullName = "Fawad Kabuli Akbari";
// const grade = "A";
// const number = "12343";
// const messsage = "Please start coding and dont speak with your friends";
// console.log(typeof grade);

// // 3. boolean
// const isComputerNew = true;
// let areFriends = false;
// let hasExperience = true;
// console.log(isComputerNew, typeof isComputerNew);
// console.log(areFriends, typeof areFriends);

// // 4. null
// const developer = null;
// console.log(developer);
// console.log(typeof null);

// // 5. undefined
// let city;
// console.log(city);

// // OPERATORS
// // 1. Arithmetic
// // console.log(10 % 5);
// let i = 30;
// // pre increment
// console.log(++i);
// console.log(--i);
// console.log(i);
// // post increment
// console.log(i++);
// console.log(i--);
// // 2. Assignment
// let x = 123;
// x += 7;

// let y = 90;
// console.log((y %= 8));

// // 3. Comparison  -> true , false
// console.log(4 < 7); // true
// console.log(4 < 2); // false
// console.log(4 <= 4);
// console.log(4 >= 3);
// console.log("=====");
// console.log(4 == "4");
// console.log(3 == "3");
// console.log(4 === "4");

// // logical operators

// const e = true;
// const f = false;
// const g = true;
// console.log(e && g);
// console.log(f || false);
// console.log(!true);

// const student = "mehran";

// // Falsy Values
// // false
// // 0
// // null
// // undefined
// // ""
// console.log(null && 4 && "Benz" && "" && true);
// console.log(4 || 0 || undefined || "amir");
// console.log(null || false || 0);
// console.log(null && false && 0);

// const firstName = "Ahmadullah";
// const lastName = "Amiri";
// const w = firstName + " " + lastName;
// console.log(w);

// const namifamom = 12 * 8 + 30 - 89 ** (45 + 12) * (34 / 123) * 54 + (78 % 8);
// console.log(namifamom);

// // Array
// const students = ["ali", "nor", "nasir", "ahmad", "amir", "behroz"];
// const things = [null, undefined, 12, "tv", false];
// console.log(students[students.length - 2]);
// console.log(things.length);

// // object
// const studentData = {
//   name: "Ahmadullah",
//   university: "Kabul University",
//   age: 81,
//   hobby: "playing Cricket",
// };
// console.log(studentData);

// Conditions
// const age = 17;
// if (age >= 18) {
//   console.log("You can get license");
// } else {
//   console.log("You are kid now! go play with your 🧸");
// }

// const score = 9;
// if (score > 101 || typeof score != "number" || score < 0) {
//   console.log("Khak da saret!");
// } else if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 55) {
//   console.log("D");
// } else if (score >= 0 && score <= 54) {
//   console.log("Failed");
// }

// if (score) {
//   console.log("hahahahahaha");
// }

// const day = "ndfm";
// switch (day) {
//   case "sat":
//     console.log("Sleep");
//     break;
//   case "sun":
//     console.log("Swim");
//     console.log("Walk");
//     break;
//   case "mon":
//     console.log("Fight");
//     console.log("Escape");
//     break;
//   default:
//     console.log("Smoke!");
// }

// // DRY  - Dont Repeat Yourself
// let counter = 0;
// while (counter < 10) {
//   console.log("Lets code JS");
//   counter++;
// }

// for (let i = 0; i < 10; i++) {
//   console.log("You are php developer");
// }

// for (let j = 100; j > 94; j--) {
//   console.log("⏳");
// }

// for (let c = 10; c > 5; c--) {
//   console.log(`loop number: ${c}`);
// }
// const students = [
//   "Bruce lee",
//   "Jason Statham",
//   "Mike Tyson",
//   "Ronaldo",
//   "Messi",
//   " - ",
// ];

// for (let i = 0; i < students.length; i++) {
//   console.log(`Student number ${i + 1} ${students[i]}`);
// }

// for (let student of students) {
//   console.log(student);
// }

// for (let student in students) {
//   console.log(Number(student) + 1);
// }

// const restuarant = {
//   name: "Ghaznival",
//   meals: ["Qabli", "Pizza", "Shorwa", "Landi"],
//   depowiths: [
//     1000, 67890, -2919289, 843992, 1000, 843988, -983223, 748323, -849333,
//     37483, -78392,
//   ],
//   weights: [73, 58, 64, 52, 50],
// };

// let weight = 0;
// for (let j of restuarant.weights) {
//   weight += j;
// }

// console.log(weight / restuarant.weights.length);

// let sum = 0;
// let profit = 0;
// let loss = 0;
// for (let i of restuarant.depowiths) {
//   if (i > 0) {
//     profit += i;
//   } else {
//     loss += i;
//   }
//   sum += i;
// }
// console.log(`Your restaurant current balance is ${sum}`);
// console.log(`Your restaurant profit is ${profit}`);
// console.log(`Your restaurant loss is ${loss}`);

// const objectName = "meals";
// console.log(restuarant[objectName]);
// console.log(restuarant.name);

// for (let item of restuarant.meals) {
//   console.log(
//     `Welcome to ${restuarant.name} resturant,
//     if you are from Ghazni You can eat ${item}
//     and if you are not you can drink water for 1000 Afghani`,
//   );
// }

function calcSalary(
  grossSalary,
  taxPercentage,
  bonus,
  lunch,
  transportation,
  gym,
  retirement,
  advanceSalary,
  debt,
) {
  let tax;
  if (grossSalary <= 5000) {
    tax = 0;
  } else {
    tax = grossSalary * taxPercentage;
  }
  let salary =
    grossSalary -
    tax +
    bonus -
    lunch +
    transportation +
    gym -
    retirement -
    advanceSalary -
    debt;
  return salary;
}

const salary = calcSalary(30000, 0.05, 600, 1100, 1800, 900, 1000, 4000, 1500);
const ali = calcSalary(4900, 0.05, 600, 1100, 1800, 900, 1000, 0, 0);
console.log(salary);
const amir = calcSalary;
console.log(amir);

const bmi = (weight, height) => {
  return weight / height ** 2;
};

const printName = (name) => `Your name is ${name}`;

console.log(printName("Nasir"));
console.log(bmi(170, 1.9));
console.log(bmi(64, 1.74));
const aliGhaznival = bmi(56, 1.71);
console.log(aliGhaznival);
