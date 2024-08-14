//Program6.js

console.log("Script starts");

const id = setTimeout(()=>{
    console.log("Hello World");
},1000);

for(let i=1;i<100;i++){
    console.log("...");
}

console.log("setTimeout id is : " , id);
console.log("Clearing time out");
clearTimeout(id);
console.log("Script ends");



