
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    };

let users = [];

let user1 = new User(1, 'Name1', 'Surname1', 'user1@gmail.com', '091-000-00-01');
let user2 = new User(2, 'Name2', 'Surname2', 'user2@gmail.com', '091-000-00-02');
let user3 = new User(3, 'Name3', 'Surname3', 'user3@gmail.com', '091-000-00-03');
let user4 = new User(4, 'Name4', 'Surname4', 'user4@gmail.com', '091-000-00-04');
let user5 = new User(5, 'Name5', 'Surname5', 'user5@gmail.com', '091-000-00-05');
let user6 = new User(6, 'Name6', 'Surname6', 'user6@gmail.com', '091-000-00-06');
let user7 = new User(7, 'Name7', 'Surname7', 'user7@gmail.com', '091-000-00-07');
let user8 = new User(8, 'Name8', 'Surname8', 'user8@gmail.com', '091-000-00-08');
let user9 = new User(9, 'Name9', 'Surname9', 'user9@gmail.com', '091-000-00-09');
let user10 = new User(10, 'Name10', 'Surname10', 'user10@gmail.com', '091-000-00-10');

users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)?

let filteredUsers = users.filter(function (value){
    return value.id % 2 === 0
});
console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let newFilteredUsers = [...filteredUsers];

let sortedUsers = newFilteredUsers.sort((a, b) => {
    return a.id - b.id
});

console.log(sortedUsers);