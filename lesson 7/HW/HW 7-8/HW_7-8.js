
// Через Array.prototype. створити власний foreach, filter, map

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

Array.prototype.myForEach = function (callback) {
    for (item of this) {
        callback(item)
    }
};

users.myForEach(el => console.log(el));

Array.prototype.myMap = function (callback){
    let arr = [];
    for (const item of this) {

          arr.push(callback(item));
    }
    return arr
};

users.myMap(el => {
    console.log(`User name is ${el.name}`)
});



Array.prototype.myFilter = function (callback){
    let arr = [];
    for (const item of this) {
        callback(item)
        if (callback(item)){
        arr.push(callback(item))
        }
    }

    console.log(arr)
};



users.myFilter((el) => {
    if (el.age > 30){
        return el
    }
});




