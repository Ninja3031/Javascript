const promiseOne = new Promise(function(resolve , reject){
    //do an async task
    //DB calls , cryptography , network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    } , 1000)
}).then(function(){
    console.log("promise 2 consumed");
})


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({
            name:"Aadiraj",
            email:"chauhanaadirajsingh@gmail.com"
        })
    },1000)
})

promiseThree.then(function(data){
    console.log(data);
})


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                name:"Cr7",
                email:"chauhanyuvrajsingh@gmail.com"
            })
        }else{
            reject("Something went wrong")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.name
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => 
console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username : "javascript",
                password : "123"})
        }else{
            reject("Something went downhill")
        }
    },1000)
})

// promiseFive.then((user) => {
//     console.log(user);
// })

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()    

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

// promise.all