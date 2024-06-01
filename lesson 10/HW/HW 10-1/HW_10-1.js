
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
//     При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


    f1.onsubmit = function (e){
        e.preventDefault()
        let name = this.nameIn.value;
        let surname = this.surnameIn.value;
        let age = this.ageIn.value;
        let newDiv = document.createElement('div');
        newDiv.id = 'newDiv'
        newDiv.innerText = `name: ${name} surname: ${surname} age: ${age}`;
        document.body.appendChild(newDiv);
        document.getElementsByName(newDiv);
    }




