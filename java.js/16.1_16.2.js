funcA();
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
// wil return funcA() becuese it function and can include
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); //Aurelio De Rosa
var test = obj.prop.getFullName; //John Doe becuese you  could not  somthing inside function becuse it is for function (local) not for property
console.log(test());

//\
function funcB() {
  let c = 5;
  let a = (z = 0);
  a++;
  return a;
}

funcB(); // will retun funcb
console.log(typeof a); //undefund becuese a its inside function not glopal
console.log(typeof b); //number becuse when you put b = (b=0) the js understand it ( ourside the function put "let b;" and that b = 0  (automaticle) )

///\
function funcC() {
  console.log("1");
}
funcC(); // will  print 2 becuse the postion od return the function is does'nt matter if before function or or not and you apdate funcC to new value
function funcC() {
  console.log("2");
}

funcC(); //will print  2
//\
function funcD1() {
  d = 1;
}
funcD1(); //nothing
console.log(d); // 1  becuse when you put b=1 the js understand it ( ourside the function put "let b;" and that b = 0  (automaticle) )
function funcD2() {
  let e = 1;
}
funcD2(); //nothing
// console.log(e); //error becuse you put var
//\
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); //undefind becues the value of var after (f)
var f = 1;
funcE(); //"Value of f in local scope:1" becuese the js look inside it what the value of f and if it does'nt defind it will descover outside function
//\
