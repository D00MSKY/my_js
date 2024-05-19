
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredArr = coursesAndDurationArray.filter(function (value){
    return value.monthDuration > 5;
});

console.log(filteredArr)


