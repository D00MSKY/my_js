
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let i1 = document.getElementById('i1');
btn.onclick = function (){
    if (i1.value < 18){
        let deny = document.createElement('div');
        deny.classList.add('deny')
        deny.innerText = 'You are under 18 years old'
        document.body.appendChild(deny)
    } else if (i1.value >=18){
        let accept = document.createElement('div');
        accept.classList.add('accept')
        accept.innerText = 'You are over 18 years old'
        document.body.appendChild(accept)
    }
    else {
        let deny = document.createElement('div');
        deny.classList.add('deny')
        deny.innerText = 'Enter correct age'
        document.body.appendChild(deny)
    }
};