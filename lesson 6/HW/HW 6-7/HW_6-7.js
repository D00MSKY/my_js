
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

function sortNums(arr, direction) {

    if (direction === 'ascending'){
        nums.sort((a, b) => {
            return a - b;
        })
    }
    else if (direction === 'descending'){
        nums.sort((a, b) => {
            return b - a;
        })

    }
    }
sortNums(nums, 'ascending')
console.log(nums)

sortNums(nums, 'descending')
console.log(nums)


