// //arrays is a built-in datastructure
// //that allows us to store more than one item
// //in a consecutive one

// // console.log(numbers.length);

// //arrays are mutable
// // numbers[0] = 10;
// // console.log(numbers);
// // let numbers = [3, 4, 5, 6, 7, 8];
// //For In
// // for (let index in numbers) {
// //   console.log("For in", index);
// // }
// //For Loop
// // for (let value of numbers) {
// //   console.log("For of", value);
// // }
// //Reverse Loop
// // for (let i = numbers.length - 1; i >= 0; i--) {
// //   console.log(numbers[i]);
// // }
// // Check the Element if is exit in an array
// // console.log(numbers.includes(12));

// function doesExist(numbers, key) {
//   for (let number of numbers) {
//     if (number == key) {
//       return true;
//     }
//     return false;
//   }
// }
// // console.log(doesExist(numbers, 15));
// let numbers = [3, 4, 5, 6, 7, 8, 6];
// // console.log(numbers.indexOf(6, 4));
// // for (let value of numbers) {
// //   if (value.includes(6)=== ) {
// //     return numbers;
// //   }
// // }

// // Objects
// let person = {
//   firstName: "karthi",
//   lastName: "Aruna",
//   isStudent: false,
//   hobbies: ["programming", "reading", "Playing"],
// };
// person.firstName = "Karthikeyan";
// person.isSalary = 10;
// console.log(person);

// javascript object
let book = {
  author: "sathish",
  pages: 300,
  price: 2000,
  isAvailable: true,
  title: "dsa",
};

// converted to JSON string
// console.log(JSON.stringify(book));

// JSON: JavaScript Object Notation string
// is a lightweight data interchange format to exchange between a server and a web application
// JSON string
let jsonString =
  '{"author":"sathish","pages":300,"price":2000,"isAvailable":true,"title":"dsa"}';

// converted to javascript object
// console.log(JSON.parse(jsonString));

let obj1 = { name: "Person 1", age: 5 };
// let obj2 = { name: "Person 1", age: 5 };

let obj2 = { age: 5, name: "Person 1" };

// console.log(Object.values(obj1));
let stringify1 = JSON.stringify(obj1);
let stringify2 = JSON.stringify(obj2);

let parseObj1 = JSON.parse(stringify1);
let parseObj2 = JSON.parse(stringify2);
let objectKeys1 = Object.keys(parseObj1);
let objectKeys2 = Object.keys(parseObj2);
let objectCompare = (obj1, obj2) => {
  // console.log(obj1, obj2);

  if (obj1.length !== obj2.length) {
    console.log("Not same properties");
    return;
  }
  for (let key of obj1) {
    console.log(key);
    if (!obj2.includes(key) || obj1[key] !== obj2[key]) {
      console.log("is not same properties");
      return;
    }
  }
  console.log("same properties");
};
objectCompare(objectKeys1, objectKeys2);

// let stringify1 = JSON.stringify(obj1);
// let stringify2 = JSON.stringify(obj1);

// let conParse1 = JSON.parse(stringify1);
// let conParse2 = JSON.parse(stringify1);

// let comPorpaties = conParse1 === conParse2 ? "isEqual" : "isNotEqual";
// // console.log(comPorpaties);
