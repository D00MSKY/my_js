
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id="text".

    btn.onclick = function (){
    let text = document.getElementById('text')
        text.style.opacity = 0
    };
