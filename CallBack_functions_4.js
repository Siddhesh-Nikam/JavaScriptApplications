
//Understanding callback functions

function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
}

myFunc(()=>{
    console.log("Function is doing task 2");
});





