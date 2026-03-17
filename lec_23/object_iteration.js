const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


//five 

const coding  = ["js", "rb", "py", "java", "cpp"]

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(val){
//     console.log(val);
// }

// coding.forEach(printMe);

// coding.forEach((val , index , arr) => {
//     console.log(val, index, arr);
// })

const myCoding = [
    {name: "hitesh", language: "hindi"},
    {name: "Aadiraj", language: "english"},
    {name: "Shaila", language: "marathi"}
]

myCoding.forEach((val) => {
    console.log(val);
})

myCoding.forEach((val) => {
    console.log(val.name);
})

myCoding.forEach((val) => {
    console.log(val.language);
})


//map filtering 

//const coding1 = [js , rb , py , java , cpp]

//foreach does not return any value

// const values = coding1.forEach((val) => {
//     console.log(val);
//     return val
// })

// console.log(values);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = num.filter((val) => {
    return val > 5
})

console.log(newNum);

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);


