
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 1;

if (day >= 1 && day <= 10){
    console.log('Перша декада')
}
else if (day > 10 && day <= 20){
    console.log('Друга декада')
}
else if (day > 20 && day <= 31){
    console.log('Третя декада')
}
else {
    console.log('Введіть коректне число')
}