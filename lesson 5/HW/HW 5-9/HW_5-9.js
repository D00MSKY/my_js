
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31}
];
let arrWriter = (array) => {
    for (const arrayElement of array) {
        document.write(`<div><h2 style="margin-bottom: 5px">User ${arrayElement.id}:</h2>`)
        for (const fieldName in arrayElement) {
            document.write(`<div>${fieldName} ${'-'} ${arrayElement[fieldName]}</div>`)
        }
        document.write(`</div>`)
    }
}

arrWriter(users)