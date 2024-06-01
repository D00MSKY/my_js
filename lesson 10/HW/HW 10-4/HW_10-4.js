
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                        61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                        81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,];

document.getElementById(btnNext)


window.onload = firstTen(numbers)
function firstTen(arr){
    let initDiv = document.createElement('div');
    initDiv.id = 'initDiv'
    document.body.appendChild(initDiv)
    for (let i = 0; i < 10; i++) {
        const arrElement = arr[i];
        let divInfo = document.createElement('div');
        initDiv.appendChild(divInfo)
        divInfo.classList.add('info');
        divInfo.innerText = arrElement
        sessionStorage.setItem('function', 'firstTen')
    }
};
function secondTen(arr){
    let initDiv = document.createElement('div');
    initDiv.id = 'initDiv';
    document.body.appendChild(initDiv)
    for (let i = 10; i < 20; i++) {
        const arrElement = arr[i];
        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        initDiv.appendChild(divInfo)
        divInfo.innerText = arrElement
        sessionStorage.setItem('function', 'secondTen')
    }
};
function thirdTen(arr){
    let initDiv = document.createElement('div');
    initDiv.id = 'initDiv';
    document.body.appendChild(initDiv)
    for (let i = 20; i < 30; i++) {
        const arrElement = arr[i];
        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        initDiv.appendChild(divInfo)
        divInfo.innerText = arrElement
        sessionStorage.setItem('function', 'thirdTen')
    }
};

function fourthTen(arr){
    let initDiv = document.createElement('div');
    initDiv.id = 'initDiv';
    document.body.appendChild(initDiv)
    for (let i = 30; i < 40; i++) {
        const arrElement = arr[i];
        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        initDiv.appendChild(divInfo)
        divInfo.innerText = arrElement
        sessionStorage.setItem('function', 'fourthTen')
    }
};

function fifthTen(arr){
    let initDiv = document.createElement('div');
    initDiv.id = 'initDiv';
    document.body.appendChild(initDiv)
    for (let i = 40; i < 50; i++) {
        const arrElement = arr[i];
        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        initDiv.appendChild(divInfo)
        divInfo.innerText = arrElement
        sessionStorage.setItem('function', 'fifthTen')
    }
};

function sixthTen(arr){
    let initDiv = document.createElement('div');
    initDiv.id = 'initDiv';
    document.body.appendChild(initDiv)
    for (let i = 50; i < 60; i++) {
        const arrElement = arr[i];
        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        initDiv.appendChild(divInfo)
        divInfo.innerText = arrElement
        sessionStorage.setItem('function', 'sixthTen')
    }
};

function seventhTen(arr){
    let initDiv = document.createElement('div');
    initDiv.id = 'initDiv';
    document.body.appendChild(initDiv)
    for (let i = 60; i < 70; i++) {
        const arrElement = arr[i];
        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        initDiv.appendChild(divInfo)
        divInfo.innerText = arrElement
        sessionStorage.setItem('function', 'seventhTen')
    }
};

function eighthTen(arr){
    let initDiv = document.createElement('div');
    initDiv.id = 'initDiv';
    document.body.appendChild(initDiv)
    for (let i = 70; i < 80; i++) {
        const arrElement = arr[i];
        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        initDiv.appendChild(divInfo)
        divInfo.innerText = arrElement
        sessionStorage.setItem('function', 'eighthTen')
    }
};

function ninethTen(arr){
    let initDiv = document.createElement('div');
    initDiv.id = 'initDiv';
    document.body.appendChild(initDiv)
    for (let i = 80; i < 90; i++) {
        const arrElement = arr[i];
        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        initDiv.appendChild(divInfo)
        divInfo.innerText = arrElement
        sessionStorage.setItem('function', 'ninethTen')
    }
};

function lastTen(arr){
    let initDiv = document.createElement('div');
    initDiv.id = 'initDiv';
    document.body.appendChild(initDiv)
    for (let i = 90; i < 100; i++) {
        const arrElement = arr[i];
        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        initDiv.appendChild(divInfo)
        divInfo.innerText = arrElement
        sessionStorage.setItem('function', 'lastTen')
    }
};

btnNext.onclick = function (){

    switch (sessionStorage.getItem('function')){
        case 'firstTen':
        document.getElementsByName('initDiv')
            initDiv.remove('div')
            secondTen(numbers)
            break;
        case 'secondTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            thirdTen(numbers)
            break;
        case 'thirdTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            fourthTen(numbers)
            break;
        case 'fourthTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            fifthTen(numbers)
            break;
        case 'fifthTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            sixthTen(numbers)
            break;
        case 'sixthTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            seventhTen(numbers)
            break;
        case 'seventhTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            eighthTen(numbers)
            break;
        case 'eighthTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            ninethTen(numbers)
            break;
        case 'ninethTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            lastTen(numbers)
            break;
    }
};

btnPrev.onclick = function (){

    switch (sessionStorage.getItem('function')){
        case 'secondTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            firstTen(numbers)
            break;
        case 'thirdTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            secondTen(numbers)
            break;
        case 'fourthTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            thirdTen(numbers)
            break;
        case 'fifthTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            fourthTen(numbers)
            break;
        case 'sixthTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            fifthTen(numbers)
            break;
        case 'seventhTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            sixthTen(numbers)
            break;
        case 'eighthTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            seventhTen(numbers)
            break;
        case 'ninethTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            eighthTen(numbers)
            break;
        case 'lastTen':
            document.getElementsByName('initDiv')
            initDiv.remove('div')
            ninethTen(numbers)
            break;
    }
};