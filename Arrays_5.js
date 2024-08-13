console.log("Primitive and Reference an array");

//Primitive

console.log("Primitive datatypes");

let No1 = 11;
let No2 = No1;
console.log(No1);
console.log(No2);
console.log("After increment");
No1++;
console.log(No1);
console.log(No2);

console.log("******************************");

//Reference

console.log("Reference datatypes");

let arr1 = ["item1" , "item2" ,"item3"];
let arr2 = arr1;
console.log("array 1 : " ,arr1);
console.log("array 2 : " ,arr2);

arr1.push("item4");
console.log("array 1 : " ,arr1);
console.log("array 2 : " ,arr2);








