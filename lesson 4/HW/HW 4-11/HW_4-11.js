
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let num = [10, 5, 4, 18, 7, 11, 2, 9, 3, 20];

function sum(arr){
    let a = arr[0];
    for (let i = 1; i < arr.length; i++) {
        b = a + arr[i];
        a = b;
    }
    return b;
}

sum(num);

console.log(sum(num))

