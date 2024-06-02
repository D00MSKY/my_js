
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

document.getElementById('container')

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((response) =>{
        let carts = (response.carts)
        // console.log(carts)
        for (const cart of carts) {
            let divItem = document.createElement('div');
            let divTotal = document.createElement('div');
            // divItem.appendChild(divImageContainer)
            divItem.classList.add('divItem');
            divTotal.classList.add('divTotal');
            container.appendChild(divItem);
            container.appendChild(divTotal);


            divItem.innerHTML = `<b>Cart № ${cart.id}</b>`
            for (const item of cart.products) {
                let products = document.createElement('div')
                let productImage = document.createElement('img')
                let divImageContainer = document.createElement('div')
                divItem.appendChild(products)
                products.innerText =
                   `discountPercentage: ${item.discountPercentage}
                    discountedTotal: ${item.discountedTotal}
                    id: ${item.id}
                    title: ${item.title}
                    price: ${item.price}
                    quantity: ${item.quantity}
                    total: ${item.total}`
                divImageContainer.appendChild(productImage)
                divItem.appendChild(divImageContainer);
                productImage.src = item.thumbnail

            }

            for (const el in cart) {
                if (el !== 'products'){
                    let par = document.createElement('p')
                    divTotal.appendChild(par)
                    par.innerHTML = `<h3>${el}: ${cart[el]}</h3>`
                }
            }
        }
    });

