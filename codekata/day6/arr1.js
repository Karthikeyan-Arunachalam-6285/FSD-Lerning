// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let arrSize = +userInput[0]
let numbers = userInput[1].split(' ');

for (let index=0; index < arrSize; index++){
     numbers[index] = parseInt(numbers[index])
}

let frequency = {}

for(let index = 0; index < arrSize; index++){
    frequency[numbers[index]] = 0;
}

for(let index = 0; index < arrSize; index++){
    frequency[numbers[index]]++;
}

let frequencies = Object.entries(frequency)
frequencies.sort((a,b)=> a[1]-b[1])
console.log(frequencies.map(item => item[0]).join(' '));

//  for (let i=0;i<input.length;i++){
//      let count = 0
//     for (let j=0;j<input.length;j++){
//         if(input[j] === input[i])
//         count++
//     }
//          if(count === 2){
//          console.log(input[i])
//     }
// }

  //end-here
});