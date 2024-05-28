
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divInfo = document.createElement('div');
    divInfo.classList.add('item')
    document.body.appendChild(divInfo);
    for (const item in coursesAndDurationArrayElement) {
        if (item === 'title'){
            let h1 = document.createElement('h1');
            h1.classList.add('heading');
            h1.innerText = `${coursesAndDurationArrayElement.title}`
            divInfo.appendChild(h1)
        } else if (item === 'monthDuration') {
            let par = document.createElement('p');
          divInfo.appendChild(par)
            par.classList.add('description');
            par.innerText = coursesAndDurationArrayElement.monthDuration;
        }
    }
    };

