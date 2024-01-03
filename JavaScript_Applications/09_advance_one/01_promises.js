// const promiseOne = new Promise(function(resolve,reject){

//     //Do any async task
//     //DB calls,cryptography,network

//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve()
//     },1000)
// })


// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

///////////////////////////////////////////////////////////////////

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async task is resolved");
// })

///////////////////////////////////////////////////////////////////

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"siddhesh",password:"uigguiytrty"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

///////////////////////////////////////////////////////////////////

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false

//         if(!error){
//             resolve({username:"siddhesh",password:"uigguiytrty"})
//         }else{
//             reject('ERROR:Something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// })

///////////////////////////////////////////////////////////////////

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true

//         if(!error){
//             resolve({username:"siddhesh",password:"uigguiytrty"})
//         }else{
//             reject('ERROR:Something went wrong')
//         }
//     },1000)
// })

// promiseFive.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// })

///////////////////////////////////////////////////////////////////

// const promiseSix = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true

//         if(!error){
//             resolve({username:"siddhesh",password:"uigguiytrty"})
//         }else{
//             reject('ERROR:Something went wrong')
//         }
//     },1000)
// })

// promiseSix.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("The promise is either resolve or rejected"))

///////////////////////////////////////////////////////////////////

// const promiseSeven = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumepromiseSeven(){
//     try {
//         const response = await promiseSeven
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumepromiseSeven()

///////////////////////////////////////////////////////////////////

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
