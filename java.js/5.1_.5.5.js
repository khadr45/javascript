// 5.1
// let language;
// let isIsland;
// let population;
// let country;
// if (
//   country == " span " &&
//   population == " 500" &&
//   isIsland == "true " &&
//   language == " spanish"
// ) {
//   console.log(" you are spanish man ");
// } else if (
//   country == "usa" &&
//   population == " 1000" &&
//   isIsland == "true " &&
//   language == "english"
// ) {
//   console.log(" you are usa  man ");
// } else {
//   console.log("you do not have country");
// }

//5.2
// console.log(" you can ask me the number of native speakers");
// console.log(" you have [ num1,num2,num3,num4,num5]");
// let languge = "num4";
// switch (languge) {
//   case "num1":
//     console.log(" mandarin");
//     break;
//   case "num2":
//     console.log("spanch");
//     break;
//   case "num3":
//     console.log("english");
//     break;
//   case "num4":
//     console.log(" hindi ");
//     break;
//   case "num5":
//     console.log(" arabic  ");
//     break;
// }

// 5.3
const passwordtest = (password) => {
  if (password.length > 7) {
    console.log(" good passwore ");
  }
  if (password.length < 7) {
    console.log("  unvilabel password ");
  }
};
const passwordtest2 = (password) => {
  return password ? ` good password ` : " bad password ";
};

// console.log(passwordtest2());

const passwordtest1 = (passwords) => {
  if (passwords.length > 7 && passwords.indexOf(" ") == -1) {
    console.log("  very good passwore ");
  }
  if (passwords.length < 7 || passwords.indexOf(" ") != -1) {
    console.log("  unvilabel password  OR  you  have space in password ");
  }
};
let x = [ABC];
const passwordtest3 = (passwords) => {
  if (
    passwords.length > 7 &&
    passwords.indexOf(" ") == -1 &&
    x.indexOf() == -1
  ) {
    console.log("  very good passwore ");
  }
  if (passwords.length < 7 || passwords.indexOf(" ") != -1) {
    console.log("  unvilabel password  OR  you  have space in password ");
  }
};
passwordtest3("12221aaaaasSSSSSSSS11");
//5.4
const colorch = (colorname) => {
  console.log(
    " you have this color : [  yellow, pink, or orange ], [ blue, purple, or brown ]"
  );
  switch (colorname) {
    case "yellow":
      console.log(" light  color");
      break;
    case "pink":
      console.log(" light  color");
      break;
    case "orang":
      console.log(" light  color");
      break;
    case "blue":
      console.log(" dark color");
      break;
    case "purple":
      console.log(" dark  color");
      break;
    case "brown":
      console.log(" dark  color");
      break;
    default:
      console.log(" none ");
  }
};
colorch("pink");
