//Stack ( Primitive ) and Heap ( Non - Primitive )

let user1 = {
    email : "ninja@gmail.com",
    name : "Aadiraj",
}

let user2 = user1;

user2.email = "ninja2@gmail.com";

console.log(user1.email);
console.log(user2.email);