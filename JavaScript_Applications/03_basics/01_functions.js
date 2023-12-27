function Name(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
    console.log(" ");
    console.log("W");
    console.log("o");
    console.log("r");
    console.log("l");
    console.log("d");
}

Name();

////////////////////////////////////////////////////////////////////////////

function Addition(iNo1,iNo2)
{
    let iSum = 0 ;
    iSum = iNo1 + iNo2
    console.log("Addition is :",iSum);
}

Addition(10,11);

////////////////////////////////////////////////////////////////////////////

function loginUserMessage(username = "Sid"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Siddhesh"));

////////////////////////////////////////////////////////////////////////////

function loginUserMessage(username = "Sid"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

////////////////////////////////////////////////////////////////////////////

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price of the course is ${anyobject.price}`);
}

handleObject({
    username:"Siddhesh",
    price:399
})

////////////////////////////////////////////////////////////////////////////

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));