const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const obj4 = obj1 + obj2 + obj3;
console.log(obj4);

//////////////////////////////////

const obj5 = { obj1,obj2,obj3 }
console.log(obj5);

//////////////////////////////////

const obj6 = Object.assign({}, obj1, obj2, obj3)
console.log(obj6);

//////////////////////////////////

const obj7 = {...obj1, ...obj2, ...obj3}
console.log(obj7);


