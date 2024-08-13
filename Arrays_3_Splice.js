
//                 0        1       2       3 
const fruits = ["Banana","Orange","Apple","Mango"];

console.log(fruits);    //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

fruits.splice(2,0,"Lemon","Kiwi");  

console.log(fruits);    //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

fruits.splice(2,2);     

console.log(fruits);    //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

fruits.splice(2, 1, "Lemon", "Kiwi");

console.log(fruits);    //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]




