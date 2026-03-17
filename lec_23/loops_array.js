const arr = [1, 2 ,3 , 4 , 5]
//for elements
for(const num of arr){
    //console.log(num);
}
//for index
for(const num in arr){
    //console.log(num);
}

//Maps

const map = new Map()

map.set('In' , 'India')
map.set('USA' , 'United States of America')
map.set('PK' , 'Pakistan')

//console.log(map);


for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
