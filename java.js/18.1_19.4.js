// const head = document.getElementsByTagName("h1");
// console.log(head);
// const paragraph = document.getElementsByTagName("p");
// console.log(paragraph);
// const link = document.getElementsByTagName("a");
// console.log(link);
// const image = document.getElementsByTagName("img");
// console.log(image);
// const contaner = document.getElementsByTagName("div");
// console.log(contaner);
// const putin = document.getElementsByTagName("input");
// console.log(head);
//\2
//div id =y
//second input and three
//\
//h1
//p
//a
//div x
//first input
//\
//\3
// const inside = ["HELLO", "ahmad", "MoHmAD"];
// const inputs = document.getElementsByTagName("input");
// let a = Array.from(inputs);
// a.forEach((ins) => {
//   console.log(ins);
// });
// const inputs = document.querySelectorAll("input");
// for (let a = 0; a < inputs.length; a++) {
//   console.log(inputs[a]);
// }
//\18.2
// const h1test = document.getElementsByTagName("h1");

// console.log(h1test[0]);
// h1test[0].style.Color = "blue";
//oR
// const paragraph = document.getElementsByTagName("p");
// console.log(paragraph[0]);
// paragraph[0].classList.add("ch");
// const divch = document.getElementById("description");
// console.log(divch);
// divch.classList.add("divs");
// const bch = document.getElementsByTagName("body");
// console.log(bch[0]);
// bch[0].style.backgroundColor = "green";
// const tch = document.getElementsByTagName("title");
// console.log(tch[0]);
// tch[0].innerText = "hello world";
// bch[0].style.backgroundColor = "green";
//\19.1
// //const te1 = document.createElement("li");
//// te1.className="start-here";
// const test1 = document.getElementsByClassName("start-here");
// console.log(test1);
// test1[0].innerHTML = "main title subtitle 4";
// const testing = document.getElementsByTagName("li");
// console.log(testing.length);
// testing[testing.length - 1].style.display = "none";
// console.log;
// for (test of testing) {
//   console.log(test);
// }
// const test2 = document.getElementsByTagName("title");
// test2[0].innerText = "Master Of The Dom";
// console.log(test2);
// const test3 = document.getElementsByTagName("p");
// test3[0].innerText = "hi my name is khadr";
// console.log(test3);
//\19.2
const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
// users.forEach((data) => {
//   console.log(data.firstName + " " + data.lastName);
// });
const ol = document.createElement("ol");
console.log(ol);
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const tester = [li1, li2, li3];
for (let j = 0; j < users.length; j++) {
  for (let i = 0; i < teste r.length; i++) {
    if (i == j) {
      tester[i].setAttribute("id", users[j].id);
      tester[i].innerText = users[j].firstName + " " + users[j].lastName;

      //   console.log(tester[i]);
      ol.appendChild(tester[i]);
    }
  }
}

//   console.log(li);
// });

//
