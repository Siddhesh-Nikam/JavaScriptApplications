
const number1 = [1,2,3,4,5];

const number2 = [6,7,8,9,10];

//push

// number1.push(number2);
// console.log(number1);


//concat

// const number3 = number1.concat(number2);
// console.log(number3);

//spread

const number4 = [...number1,...number2];
console.log(number4);


console.log(Array.isArray("Hitesh"));   //false

console.log(Array.from("Hitesh"));  //[ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:"Hitesh"}));   //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]


//1)push 2)concat 3)spread 
//4)Array.isArray 5)Array.from 
//6)Array.of()






