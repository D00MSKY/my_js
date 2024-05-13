
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let users = [11,22,33,44,55,66,77,88,99];
let names = ['Vasya', 'Petya', 'Borya', 'Olya', 'Alina', 'Semen', 'Oleg', 'Tanya', 'Marina'];
let statuses = [true, false, false, true, false, true, true, true, false];


let arrList = (array) => {

    document.write(`<ul> <h2>${'Array Elements'}:</h2>`)

    for (const arrayElement of array) {

        document.write(`<li>${arrayElement}</li>`)

    }
    document.write(`</ul>`)
}

arrList(users)
arrList(names)
arrList(statuses)