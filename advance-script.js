// Execution context ////////////

// var globalVar = "Global";
// function outerFunctionScop() {
//   var outerFunVar = "outer";
//   function innerFuncScop() {
//     var innerFuncVar = "inner";
//     console.log(innerFuncVar);
//     console.log(outerFunVar);
//   }
//   console.log(outerFunVar);
//   //   console.log(innerFuncVar);
//   innerFuncScop();
// }
// outerFunctionScop();
// // console.log(innerFuncVar);
// // console.log(outerFunVar);
// console.log(globalVar);

// Hoisiting///////////////
// var a = "ee";
// function f() {
//   var a = "zzz"
// console.log(a);
// }
//   console.log(a);
// }
// f();

// console.log(a);ar a = "a";
//   if (true) {
//     var a = "zzz";
//     console.log(a);

// function f() {
//   let a = "a";
//   if (true) {
//     let a = "zzz";
//     console.log(a);
//   }
//   console.log(a);
// }
// f();

// closure//////////

// function f() {
//   let counter = 0;
//   return function () {
//     return counter++;
//   };
// }
// const v1 = f();
// console.log(v1());

// let counter = 0;
// for (var/*let */ i = 0; i < 5; i++) {
//   function print() {
//     console.log(i + "but counter is " + counter++);
//   }
//   setTimeout(print, 0);
// }

// while using var instead of let value of i is hoisted

// Object Oriented Programming(OOP)/////

// Object
// const person = {
//   name: "prem",
//   add: "Kathmandu",
//   bio() {
//     // console.log(this)
//     return `Hey this is ${this.name}, live in ${this.add}`;
//   },
// };

// console.log(person.bio());

// Factory function////

// function aboutPerson(name, add) {
//   return {
//     name,
//     add,
//     bio() {
//       return `Hey this is ${this.name}, live in ${this.add}`;
//     },
//   };
// }

// const premObj = aboutPerson("Prem", "Sydney");
// console.log(premObj, premObj.bio());
// const SamObj = aboutPerson("SaM", "UK");
// console.log(SamObj, SamObj.bio());

// Constructor Functions///////

// function AboutPerson(name, add) {
//   this.name = name;
//   this.add = add;
// }
// AboutPerson.prototype.bio = function () {
//   return `Hey this is ${this.name} live in ${this.add}`;
// };
// const premObj = new /*to refer constructor function */ AboutPerson(
//   "Prem",
//   "Sydney"
// );
// console.log(premObj.bio());

// class based OPP /////////////

// class Person {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//     this.key = "faiofhaoia";
//   }
//   bio() {
//     return ` Hey this is ${this.name}, live in ${this.add}`;
//   }
//   nameUpper() {
//     this.name = this.name.toUpperCase();
//   }
// }
// const premObj = new Person("prem", "Sydney");
// console.log(premObj);
// premObj.nameUpper();
// console.log(premObj.bio());
// console.log(premObj);
