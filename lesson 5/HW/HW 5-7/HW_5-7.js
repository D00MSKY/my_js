// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


let listCreator = (text = 'Enter your text', numberOfLi = 3) => {

         document.write(`<ul>`)
     for (let i = 0; i < numberOfLi; i++) {

         document.write(`<li>${text}</li>`)
     }
     document.write(`</ul>`)
}
listCreator()

