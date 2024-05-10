
// - створити функцію яка повертає найменьше число з масиву

let num = [10, 5, 4, 18, 7, 11, 2, 9, 3, 20];

function smallestNumber (array){
    let a = array[0];
    for (let i = 1; i < array.length; i++) {
        const number = array[i];
        if (number < a){
            a = number
        }
    }
    return a
}

smallestNumber(num);

console.log(smallestNumber(num));

