
// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.id=1.html?id=XXX
// (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
// (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ -
// айді користувача)

document.getElementById(container)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => {
        console.log(users)
        let ul = document.createElement('ul')
        container.appendChild(ul)
        for (const user of users) {
            let li = document.createElement('li')
            ul.appendChild(li)
            let link = document.createElement('a')
            link.href = `user-details.id=${user.id}.html`
            li.innerHTML = `<b>id:</b> ${user.id}, <b>name:</b> ${user.name}`
            link.id = 'link'
            link.innerText = `info`
            li.appendChild(link)
            console.log(users)
        }
    })

