const number1 = [1,2,3,4,5];
const number2 = [6,7,8,9,10]

number1.push(number2);
console.log(number1);
//[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

////////////////////////////////////////////////////////

const number3 = number1.concat(number2);
console.log(number3);
//[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ], 6, 7, 8, 9, 10 ]

////////////////////////////////////////////////////////

const number4 = [...number1,...number2]
console.log(number4);

//[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ], 6, 7, 8, 9, 10 ]






