function chai(){
    //console.log(this);
    let username = "Siddhesh";
    console.log(this.username);
}

chai()

///////////////////////////////////////////////////////////////

const chai1 = () => {
    let username = "Hitesh"
    console.log(this)
    console.log(this.username);
}

chai1()

///////////////////////////////////////////////////////////////

const addTwo = (num1,num2) => {
    return num1 + num2
}

const addTwo1 = (num1,num2) => (num1 + num2)

const addTwo2 = (num1,num2) => ({username:"hitesh"})


console.log(addTwo(3,4));

console.log(addTwo1(3,4));

console.log(addTwo2(3,4));
