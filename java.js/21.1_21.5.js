// const a = document.getElementsByTagName("input");
// // const test = (l) => {};
// const p = document.getElementById("p1");
// const p1 = document.getElementById("p2");
// a[1].addEventListener("click", () => {
//   console.log("you have clicked");
//   if (document.getElementById("1819").value > 18) {
//     p.style.visibility = "visible";
//     p1.style.visibility = "hidden";
//   } else if (document.getElementById("1819").value < 18) {
//     p1.style.visibility = "visible";
//     p.style.visibility = "hidden";
//   }
// });
// if (test >= 18) {
//   console.log("hello 18");
// }

//\ 22.1
// const b = document.getElementById("1829");
// // b.style;
// let c = 0;
// let r = 15;
// let h = 0;

// const plus = document.getElementById("plus");
// const menos = document.getElementById("menos");
// plus.addEventListener("click", () => {
//   r++;
//   c = document.getElementById("1829").style.fontSize = "0" + `${r}px`;
//   console.log(c);
// });
// menos.addEventListener("click", () => {
//   r--;
//   c = document.getElementById("1829").style.fontSize = "0" + `${r}px`;
//   console.log(c);
// });

//\23.1
// let t = 0;
// const parag = document.getElementsByTagName("p");
// parag[0].style.visibility = "hidden";

// // const p2 = document.createElement("p");
// // p2.innerText = `NOT ${t}`;
// // p2.style.visibility = "visible";
// // p2.style.display = "inline";
// // console.log(p2);
// // console.log(parag); //?????????????
// const p2 = document.getElementById("p2");
// p2.style.visibility = "hidden";
// p2.style.display = "inline";
// console.log(p2);
// const test = document.getElementsByTagName("input");
// test[0].addEventListener("keydown", () => {
//   t++;
//   //   console.log(t);
//   if (t < 100) {
//     parag[0].style.visibility = "visible";
//     p2.innerText = `NOT ${t}`;
//     p2.style.visibility = "visible";
//   } else if (t > 100) {
//     parag[0].style.visibility = "hidden";
//     p2.style.visibility = "hidden";
//   }
// });

//\ 24.1
// const lghitb = document.getElementById("img1");
// const lghitl = document.getElementById("img2");
// lghitl.style.visibility = "hidden";

// lghitb.addEventListener("click", () => {
//   lghitb.style.visibility = "hidden";
//   //   lghitl.className = ".img2";
//   lghitl.style.visibility = "visible";
//   lghitl.style.position = "relative";
//   lghitl.style.top = "3%";
//   lghitl.style.left = "-16%";
// });
// lghitl.addEventListener("click", () => {
//   lghitb.style.visibility = "visible";
//   lghitl.style.visibility = "hidden";
// });

//\25.1
// const j = document.createElement("img");
// console.log(j);
// j.src = "imgs/9.jpeg";
// const d = document.getElementById("1829");
// const d = document.getElementById("1839");

// const inputs = document.getElementsByTagName("input");
// const section = document.getElementsByTagName("section");
// const imgs = document.getElementsByTagName("img");

// inputs[1].addEventListener("click", () => {
//   let x = document.getElementById("1839").value;
//   if (document.getElementById("1839").value <= 4) {
//     for (let t = document.getElementById("1839").value; t <= 4; t--) {
//       if (document.getElementById("1839").value != 4) {
//         if (t == 0) {
//           break;
//         }

//         imgs[t].style.display = "none";
//       } else if (document.getElementById("1839").value == 4) {
//         if (t == 4) {
//           t--;
//         }
//         imgs[t].style.display = "none";
//       }
//     }
//   }
// });
