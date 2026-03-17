// function add2Numbers(number1 , number2){
//     console.log(number1 + number2);
// }
function add2Numbers(number1 , number2){
    // let result = number1 + number2;
    // return result;
    //another method 
    return number1 + number2;
}
// const result = add2Numbers(1,2);
// console.log(result);
//add2Numbers(1,2);

function logInUser(username){
    return `${username} logged in`
}

// logInUser("Aadiraj")//No output 

// console.log(logInUser("Aadiraj"));

function AddItemsinCart(...num){//used rest operator here which lets us add any number of items , rest and spread have same symbol and are used acc to our needs
    return num;
}

console.log(AddItemsinCart(200,200,200));

const user ={
    username : "Aadiraj",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user); method 1

//method 2

handleObject({
    username : "Aadiraj",
    price : 199
})

const myNewArray = [200,400,500]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));





