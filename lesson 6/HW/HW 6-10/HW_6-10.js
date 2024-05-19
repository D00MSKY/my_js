
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let map = coursesAndDurationArray.map((value, index) => {
    value.id = index + 1;
    return coursesAndDurationArray;
})

console.log(map)