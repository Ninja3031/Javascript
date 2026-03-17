//Primitive 

// 7 Types : String , Number , Boolean , null , undefined , Symbol , BigInt

//symbol (to keep unique)
let id = Symbol('123');
let id2 = Symbol('123');
console.log(id === id2);



// Reference Type( Non Primitive )

// Array , Objects , Functions

const heros = [ironman , superman , batman];

let obj = {
    name : "Aadiraj",
    age : 20,
}

const myFn = function(){
    console.log("Hello");
}