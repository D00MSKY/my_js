
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {

    let divInfo = document.createElement('div');
    divInfo.innerHTML = `<span><h3>title:</h3></span> <span>${coursesAndDurationArrayElement.title},</span> 
    <span><h3>monthduration:</h3></span> <span>${coursesAndDurationArrayElement.monthDuration}</span>`
    document.body.appendChild(divInfo);
}