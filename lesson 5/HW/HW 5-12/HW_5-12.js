
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let num = [1, 2, 3];

let swap = (arr, index1, index2) => {
    let a = (arr[index1]);
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

swap(num, 0, 1);

console.log(swap(num));