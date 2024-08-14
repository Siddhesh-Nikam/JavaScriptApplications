
//Program1

// function getTwoNumberAndAdd(number1,number2,callback){
//     console.log(number1,number2);
//     callback(number1,number2);
// }

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// getTwoNumberAndAdd(4,5,addTwoNumbers);

//Program2

function getTwoNumberAndAdd(number1,number2,callback){
    
    if(typeof number1==="number" && typeof number2==="number"){
        callback(number1,number2);
    }

    else{
        console.log("Wrong data types");
    }

}

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

getTwoNumberAndAdd(4,5,addTwoNumbers);
