
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


let Cinderellas = [];

class Cinderella    {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

let Cinderella1 = new Cinderella('Cinderella1', 18, 34);
let Cinderella2 = new Cinderella('Cinderella2', 19, 35);
let Cinderella3 = new Cinderella('Cinderella3', 35, 36);
let Cinderella4 = new Cinderella('Cinderella4', 33, 37);
let Cinderella5 = new Cinderella('Cinderella5', 25, 38);
let Cinderella6 = new Cinderella('Cinderella6', 18, 39);
let Cinderella7 = new Cinderella('Cinderella7', 28, 40);
let Cinderella8 = new Cinderella('Cinderella8', 45, 41);
let Cinderella9 = new Cinderella('Cinderella9', 29, 42);
let Cinderella10 = new Cinderella('Cinderella10', 40, 43);
Cinderellas.push(
    Cinderella1,
    Cinderella2,
    Cinderella3,
    Cinderella4,
    Cinderella5,
    Cinderella6,
    Cinderella7,
    Cinderella8,
    Cinderella9,
    Cinderella10);

class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
};

let prince = new Prince('Petro', 25, 42);

for (const cinderella of Cinderellas) {
    if (cinderella.footSize === prince.shoe){
        console.log(`Correct Cinderella is ${cinderella.name}`)
}
};

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function findCinderella (princeShoe) {
    console.log(Cinderellas.find(value => value.footSize === princeShoe))
};

function princeShoe(arr){
    return arr.shoe
};

findCinderella(princeShoe(prince));
