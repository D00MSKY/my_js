
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html
// (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування
// сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let date = new Date()



window.onload = function (){
    if (!localStorage.getItem('sessions')){
        localStorage.setItem('sessions', JSON.stringify([date]));
    }   else {
       let sessionsParse = JSON.parse(localStorage.getItem('sessions'));
       sessionsParse.push(date);
        let sessionsStr = JSON.stringify(sessionsParse);
        localStorage.setItem('sessions', sessionsStr)


    }
}

console.log(date)