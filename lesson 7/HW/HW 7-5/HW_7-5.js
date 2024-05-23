
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
// поточний об'єкт car


   function carCreator(model, manufacturer, year, maxSpeed, engineSize) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed + ' km/h';
        this.engineSize = engineSize;
        this.driver = [];


    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    this.info = function (){
        console.log(`*****INFO:*****`);
        console.log(`model: ${model}`);
        console.log(`manufacturer: ${manufacturer}`);
        console.log(`year: ${year}`);
        console.log(`maxSpeed: ${maxSpeed}`);
        console.log(`engineSize: ${engineSize}`);
        if (this.driver.length > 0){

            console.log(`driver: ${JSON.stringify(this.driver)}`)
        }
        console.log('*******')
    }
    this.increaseMaxSpeed = function (valueSpeed){
        console.log(`New max speed is ${maxSpeed += valueSpeed} km/h`)
    }
    this.changeYear = function (newValue) {
        let newYear = year = newValue
        console.log(`newYear is ${newYear}`)
    }
    this.addDriver = function (driver) {
        this.driver.push(driver)
        console.log(`New driver added`)
    }
   }

let car1 = new carCreator('BMW M1', 'BMW', 1978, 265, '3.5 L');




car1.drive()

car1.info()

car1.increaseMaxSpeed(50)

car1.changeYear(2000)

car1.addDriver({name: 'Vasily', age: 18})
//
car1.info()
