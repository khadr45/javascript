//10.1
// string1 = "hello";
// string1 = string1.split("");
// const firstWordUpperCase = (string, callback) => {
//   string[0] = string[0].toUpperCase();
//   string = string.join("");
//   console.log(string);
//   string.split("");
//   console.log(callback);
// };
// const check = string1.map((i) => {
//   return i + "-";
// });
// firstWordUpperCase(string1, check);

// firstWordUpperCase("hello", check);
// const isStringtest = (string, callback) => {
//   if (typeof string == "string") {
//     console.log("it's a string");
//   } else {
//     console.log(" it's something else");
//   }
//   callback(string);
// };
// const check = (string1) => {
//   console.log(`this is test ${string1}`);
// };
// isStringtest("1", check);
//15.1
// function getSum(arr1, arr2) {
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
//   }
// }
// getSum([1, 2, 3], [(5, 66, 23)]);
//you need put (,)bettween ar1&ar2
//you put const sum you need put let sum becuse let could changed put const could not changed
//15.2
// let x = 2;
// let y = 3;
// let z = 4;

// function findSmallest(a, b, c) {
//   if (a > b > c) {
//     return c;
//   } else if (a > c > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(findSmallest(1, 2, 3));
// in this function you need put console.log not the same function

//15.3
// function getSumOfEven(arr) {
//   return arr[2] + arr[4] + arr[6] + arr[8] + arr[9];
// }
// console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// // you could not put a[10]becuse the full is a[9]
// // you need put   return arr[1] + arr[3] + arr[5] + arr[7] + arr[9]; to return what you need

//15.4
// function calcAverage(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(calcAverage([85, 90, 92]));
// //its print to me nan becues that is see the proplem
// // you didnot sum=0 you need put it

//15.5
// function countOccurrences(str, char) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === char) {
//       counter += 1;
//     }
//   }
//   return counter;
// }
// console.log(countOccurrences("ini mini miny moe", "n"));
// you put
