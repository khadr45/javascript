//11.1
// const moveies = [
//   {
//     name: "papa",
//     id: "1",
//     long: "10houres",
//   },
//   { name: "hah", id: "2", long: "0houres" },
// ];
// const test = moveies.forEach(function (i) {
//   console.log(i.name);
//   console.log(i.id);
// });
// const testing = moveies.map((i) => {
//   return i.id + " " + i.name;
// });
// console.log(testing);
//11.2
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doubleValues = nums.map((num) => {
//   return num * 2;
// });
// const onlyEvenValues = nums.map((num) => {
//   if (num % 2 == 0) {
//     return num;
//   } else {
//     return "pass";
//   }
// });
// console.log(onlyEvenValues);
// const showFirstAndLast = nums.map((num) => {
//   if (num == nums[0]) {
//     return num;
//   }
//   if (num == nums[nums.length - 1]) {
//     return num;
//   }
// });
// console.log(showFirstAndLast);
// let say = "hello";
// say = say.split("");

// const capitalize = say.map((i) => {
//   return i.toUpperCase();
// });
// console.log(capitalize.join(""));
// let say = "hello";
// say = say.split("");
// const shiftLetters = say.map((i) => {
//   return i + "-";
// });
// console.log(shiftLetters.join(""));

// let say = ["hello", "ahmad", "osama", "mohmad"];

// const capitalize2 = say.map((i) => {
//   return i.toUpperCase();
// });
// console.log(capitalize2);

//11.3
// const data = [
//   {
//     name: "John",
//     birthday: "1-1-1995",
//     favoriteFoods: {
//       meats: ["hamburgers", "sausages"],
//       fish: ["salmon", "pike"],
//     },
//   },
//   {
//     name: "Mark",
//     birthday: "10-5-1980",
//     favoriteFoods: {
//       meats: ["hamburgers", "steak", "lamb"],
//       fish: ["tuna", "salmon", "barracuda"],
//     },
//   },
//   {
//     name: "Mary",
//     birthday: "1-10-1977",
//     favoriteFoods: {
//       meats: ["ham", "chicken"],
//       fish: ["pike"],
//     },
//   },
//   {
//     name: "Thomas",
//     birthday: "1-10-1990",
//     favoriteFoods: {
//       meats: ["bird", "rooster"],
//       fish: ["salmon"],
//     },
//   },
//   {
//     name: "yousef",
//     birthday: "1-10-1977",
//     favoriteFoods: {
//       meats: ["hamburgers", "lamb"],
//       fish: ["anchovies", "tuna"],
//     },
//   },
// ];
// //1
// // const names = data.map((datas) => {
//   return datas.name;
// });

// //2

// const objects = data.map((datas) => {
//   datas.birthday = datas.birthday.split("-");
//   //   return datas.birthday[2];
//   let h = JSON.parse("[" + datas.birthday[2] + "]");
//   //   return h;
//   if (h <= 1990) {
//     return datas;
//   } else {
//     return " more than 1990";
//   }
// });

// console.log(objects);
//3

// let food = [
//   (hamburgers = 0),
//   (sausages = 0),
//   (salmon = 0),
//   (pike = 0),
//   (steak = 0),
//   (lamb = 0),
//   (tuna = 0),
//   (barracuda = 0),
//   (ham = 0),
//   (chicken = 0),
//   (bird = 0),
//   (rooster = 0),
//   (anchovies = 0),
// ];
// const foods = data.map((datas) => {
//   for (let i = 0; i <= datas.favoriteFoods.meats.length; i++) {
//     if (datas.favoriteFoods.meats[i] == "hamburgers") {
//       food[0] = food[0] + 1;
//     } else if (datas.favoriteFoods.meats[i] == "steak") {
//       food[4] = food[4] + 1;
//     } else if (datas.favoriteFoods.meats[i] == "sausages") {
//       food[1] = food[1] + 1;
//     } else if (datas.favoriteFoods.meats[i] == "lamb") {
//       food[5] = food[5] + 1;
//     } else if (datas.favoriteFoods.meats[i] == "ham") {
//       food[8] = food[8] + 1;
//     } else if (datas.favoriteFoods.meats[i] == "chicken") {
//       food[9] = food[9] + 1;
//     } else if (datas.favoriteFoods.meats[i] == "bird") {
//       food[10] = food[10] + 1;
//     } else if (datas.favoriteFoods.meats[i] == "rooster") {
//       food[11] = food[11] + 1;
//     }
//     if (datas.favoriteFoods.fish[i] == "salmon") {
//       food[2] = food[2] + 1;
//     } else if (datas.favoriteFoods.fish[i] == "pike") {
//       food[3] = food[3] + 1;
//     } else if (datas.favoriteFoods.fish[i] == "tuna") {
//       food[6] = food[6] + 1;
//     } else if (datas.favoriteFoods.fish[i] == "anchovies") {
//       food[12] = food[12] + 1;
//     } else if (datas.favoriteFoods.fish[i] == "barracuda") {
//       food[7] = food[7] + 1;
//     }
//   }
//   return food;
// });
// console.log(foods);

//14.1
// const nums = [1, 2, 3, 4];

// const max = nums.reduce((ifirst, i) => {
//   return i + ifirst;
// });
// console.log(max);
// const sum = nums.reduce((ifirst, i) => {
//   if (ifirst >= i) {
//     return ifirst;
//   } else {
//     return i;
//   }
// });
// console.log(sum);
// const avverag = nums.reduce((ifirst, i) => {
//   if (i == nums[nums.length - 1]) {
//     return (i + ifirst) / 2;
//   }
//   return i + ifirst;
// });
// console.log(avverag);
