
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.



let myDiv = document.createElement('div');
myDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
myDiv.innerText = 'lorem ipsum';
document.body.appendChild(myDiv)
document.body.appendChild(myDiv.cloneNode(true));




