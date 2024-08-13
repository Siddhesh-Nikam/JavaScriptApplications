const ArrNames = ["Rajan","Raman","Pawan","Uday"];

for(let i=0;i<ArrNames.length;i++)
{
    console.log(ArrNames[i]);
}

let i=0;
while(i<ArrNames.length){
    console.log(ArrNames[i]);
    i++;
}

for(let name of ArrNames){
   console.log(name); 
}

console.log(ArrNames);

ArrNames.push("Ankit");
console.log(ArrNames);

ArrNames.pop();
console.log(ArrNames);

ArrNames.unshift("Aman");
console.log(ArrNames);

ArrNames.shift();
console.log(ArrNames);

console.log(ArrNames.length);

console.log(ArrNames.includes('Raman'));

console.log(ArrNames.indexOf("Raman"));

console.log(Array.isArray(ArrNames));

// Arrays:
// 1)push  3)unshift   5)includes  7)Array.isArray()
// 2)pop   4)shift     6)indexof

//Loops
// 1)for
// 2)for of 
// 3)while



