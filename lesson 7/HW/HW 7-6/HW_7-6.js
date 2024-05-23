
// <!-- - (Те саме, тільки через клас)-->
// // <!--Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:-->
// <!--&#45;&#45; drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на
// годину`-->
// <!--&#45;&#45; info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення
// поля`-->
// <!--&#45;&#45; increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення
// newSpeed-->
// <!--&#45;&#45; changeYear (newValue) - змінює рік випуску на значення newValue-->
// <!--&#45;&#45; addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає
// його в поточний об'єкт car-->


class Car {
      constructor(model, manufacturer, year, maxSpeed, engineSize) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineSize = engineSize;
        this.driver = [];
    }
    drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info = function ()  {
        console.log('******INFO:*****');
        for (const key in this) {
            if (typeof this[key] !== "function"){
            let value = this[key];
            if (typeof value === "object" && value !== null){
                value = JSON.stringify(value);
            }
            console.log(key + ': ' + value)
            };
        }
    }
    increaseMaxSpeed = function (valueSpeed){
        console.log(`New max speed is ${this.maxSpeed += valueSpeed} km/h`)
    }
    changeYear = function (newValue) {
        let newYear = this.year = newValue
        console.log(`newYear is ${newYear}`)
    }
    addDriver = function (driver) {
        this.driver.push(driver)
        console.log(`New driver added`)
    }
};

let car1 = new Car('BMW M1', 'BMW', 1978, 265, '3.5 L');

car1.drive();

car1.info();

car1.increaseMaxSpeed(50);

car1.changeYear(2000);

car1.addDriver({name: 'Vasily', age: 18});

car1.info();