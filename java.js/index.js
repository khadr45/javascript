const form = document.querySelector("form");

// const formData = {};
// //!add event listen
// // ! make dynamic key into empty object
// form.addEventListener("input", (e) => {
//   if (e.target.name === "username") {
//     //? check if the name === to HTML NAME
//     formData.userName = e.target.value; // ? add the input value as object value to the object key
//   }
//   if (e.target.name === "age") {
//     formData.userAge = e.target.value;
//   }
//   if (e.target.name === "email") {
//     formData.userEmail = e.target.value;
//   }
// });

// // Ameen your age is 24 and your email is : amee@addEventListener.com
// // when we click on submit what will happen ?
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (formData.userName && formData.userEmail && formData.userAge) {
//     const message = `${formData.userName} your age is ${formData.userAge} and your email is ${formData.userEmail}?`;

//     const isConfirm = confirm(message);

//     if (isConfirm) {
//       alert("You have submitted the form successfully");
//     }
//   }
//   form.reset();
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = e.target.username.value;
  const userAge = e.target.age.value;
  const userEmail = e.target.email.value;

  if (userName && userEmail && userAge) {
    const message = `${userName} your age is ${userAge} and your email is ${userEmail}?`;

    const isConfirm = confirm(message);

    if (isConfirm) {
      alert("You have submitted the form successfully");
    }
  }
  form.reset();
});
