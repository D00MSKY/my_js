
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть
// зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (const coursesArrayElement of coursesArray) {
    let general = document.createElement('div');
    general.classList.add('grid')
    document.body.appendChild(general);
    for (const item in coursesArrayElement) {
        if (item === 'title'){
            let title = document.createElement('div');
            title.classList.add('title');
            title.innerHTML = `<h3>title: ${coursesArrayElement.title}</h3>`;
            general.appendChild(title);
        } else if (item === 'monthDuration'){
            let monthDuration = document.createElement('div');
            monthDuration.classList.add('monthduration');
            monthDuration.innerText = `month Duration: ${coursesArrayElement.monthDuration}`;
            general.appendChild(monthDuration)
        } else if (item === 'hourDuration'){
            let hourDuration = document.createElement('div');
            hourDuration.classList.add('hourduration');
            hourDuration.innerText = `hour Duration: ${coursesArrayElement.hourDuration}`;
            general.appendChild(hourDuration)
        } else if (item === 'modules'){
            let modules = document.createElement('div');
            modules.classList.add('modules');
            let ul = document.createElement('ul');
            for (const el of coursesArrayElement.modules) {
                let li = document.createElement('li');
                li.innerText = el
                ul.appendChild(li);

            }
            general.appendChild(modules);



            modules.appendChild(ul);
        };
    };
};




