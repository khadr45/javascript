// 2.1 exersice
// const country = (contry, population, capitalcity) => {
//   // you can put here what you wants
//   return ` ${contry} has ${population} and its  capital city is ${capitalcity}`;
// };

// const span = country("span", " 47milion", "madrid");
// const jordan = country("jordan", " 47milion", "haman");
// const france = country("franc", " 47milion", "paris");
// console.log(span);
// console.log(france);
// console.log(jordan);
// // returns بتعمل اكشنمعين في السيستم بس ما بترجعلك شئ

// 2.2

// const ellFortune = (jobTitle, location, partnerName, numberOfChildren) => {
//   return `You will be a ${jobTitle} in ${location}  married TO ${partnerName} whith ${numberOfChildren}`;
// };
// console.log(ellFortune(" programming", " newyork", "rana", "2 children"));
// 2.3
// const x = (r) => {
//   return r * r + `π`;
// };
// const a = (r) => {
//   return r * r * Math.PI;
// };
// console.log(a(2));
// console.log(x(2));
// // 2.4
// const arrayDay = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const arrayMonth = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "Octuber",
//   "November",
//   "December",
// ];
// const days = () => {
//   console.log(arrayDay[new Date().getDay()], arrayMonth[new Date().getMonth()]);
// };
// days();
//3.1
// function welcome() {
//   let welcome = "Welcome to Appleseeds Bootcamp!";
//   return welcome;
// }
// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }
// function add(a, b = 5) {
//   let myNumber = a;
//   let sum = myNumber + b;
//   return sum;
// }
// const welcome = () => {
//   let welcome = "Welcome to Appleseeds Bootcamp!";
//   return welcome;
// };
// const power = (a) => {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// };
// const add = (a, b = 5) => {
//   let myNumber = a;
//   let sum = myNumber + b;
//   return sum;
// };
// // From function expressions to function declarations
// const hello = () => "Hello!";
// function hello() {
//   " hello";
// }
// const squareRoot = (a) => Math.sqrt(a);
// function squareRoot(a) {
//   Math.sqrt(a);
// }

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
// function randomNumbers(a, b) {
//   Math.random() * (a - b) + b;
// }

//3.2
// function welcome() {
//   let welcome = "Welcome to Appleseeds Bootcamp!";
//   return welcome;
// }
// const welcomes = () => {
//   console.log("Welcome to Appleseeds Bootcamp!");
// };

// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }
// const powers = (a) => {
//   console.log(Math.pow(a, 2));
// };
// // From function expressions to IIFE functions.
// const squareRoot = (a) => Math.sqrt(a);
// function squareRoots(a) {
//   const x = Math.sqrt(a);
//   return x;
// }
// function randomNumbers(a, b) {
//   const y = Math.random() * (a - b) + b;
//   return y;
// }

// 3.3
// const percentageOfWorld2 = (population) => {
//   percentage = (population * 100) / 7917.582417582418;
//   return percentage;
// };
// console.log(percentageOfWorld2(1441));
// console.log(percentageOfWorld2(2441));
// console.log(percentageOfWorld2(80));
