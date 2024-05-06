
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a = prompt('Enter first number');
let b = prompt('Enter second number');

if (a > b){
    console.log(a)
}
else if (b > a){
    console.log(b)
}
else if (a === b){
    console.log('The entered numbers are the same')
}

