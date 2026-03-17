//Immediately invoked fucntion expression (Iife)

//global scope ke pollution se problem hoti hai bahut baar
//to jo bhi global scope ke variables ke pollution ko hatane ke liye we use iife

//named iife
(function chai(){
    console.log("DB connected");    
})(); // this semi colon is imp indicates a break on code

( () => {
    console.log("DB connected");
})();

( (name) => {
    console.log(`Db Connected ${name}`);
})('Aadiraj')

