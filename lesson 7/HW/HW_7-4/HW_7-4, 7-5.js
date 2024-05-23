//
// - створити класс для об'єктів Client з полями id, name,
// surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

};

let clients = [];

let Client1 = new Client(1, 'Name1', 'Surname1', 'client1@gmail.com', '091-000-00-01', ['order1', 'order2', 'order3']);
let Client2 = new Client(2, 'Name2', 'Surname2', 'client2@gmail.com', '091-000-00-02', ['order1', 'order2', 'order3', 'order4']);
let Client3 = new Client(3, 'Name3', 'Surname3', 'client3@gmail.com', '091-000-00-03', ['order1']);
let Client4 = new Client(4, 'Name4', 'Surname4', 'client4@gmail.com', '091-000-00-04', ['order1', 'order2']);
let Client5 = new Client(5, 'Name5', 'Surname5', 'client5@gmail.com', '091-000-00-05', ['order1', 'order2', 'order3']);
let Client6 = new Client(6, 'Name6', 'Surname6', 'client6@gmail.com', '091-000-00-06', ['order1', 'order2']);
let Client7 = new Client(7, 'Name7', 'Surname7', 'client7@gmail.com', '091-000-00-07', ['order1', 'order2', 'order3', 'order4', 'order5']);
let Client8 = new Client(8, 'Name8', 'Surname8', 'client8@gmail.com', '091-000-00-08', ['order1', 'order2']);
let Client9 = new Client(9, 'Name9', 'Surname9', 'client9@gmail.com', '091-000-00-09', ['order1', 'order2', 'order3', 'order4', 'order5', 'order6']);
let Client10 = new Client(10, 'Name10', 'Surname10', 'client10@gmail.com', '091-000-00-10', ['order1']);

clients.push(Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10);

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів
// в полі order по зростанню. (sort)

let newClients = [...clients];

let sortedClients = newClients.sort((a, b) => {
    return a.order.length - b.order.length
});

console.log(sortedClients);
