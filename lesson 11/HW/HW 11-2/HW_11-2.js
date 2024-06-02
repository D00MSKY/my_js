
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

document.getElementById('container')
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((responce) =>{
    let recipes = responce.recipes
        console.log(recipes)
        for (const recipe of recipes) {
            let recipeCard = document.createElement('div')
            recipeCard.classList.add('recipeCard')
            container.appendChild(recipeCard)
            recipeCard.innerHTML = `
            id: ${recipe.id}<br>
            name: <b>${recipe.name}</b><br>
            caloriesPerServing: <b>${recipe.caloriesPerServing}</b><br>
            cookTimeMinutes: <b>${recipe.cookTimeMinutes}</b><br>
            cuisine: <b>${recipe.cuisine}</b><br>
            difficulty: <b>${recipe.difficulty}</b><br>
            mealType:  <b>${recipe.mealType}</b><br>
            prepTimeMinutes: <b>${recipe.prepTimeMinutes}</b><br>
            rating: <b>${recipe.rating}</b><br>
            reviewCount: <b>${recipe.reviewCount}</b><br>
            servings: <b>${recipe.servings}</b><br>
            tags: <b>${recipe.tags}</b><br>
            userId: <b>${recipe.userId}</b><br>`
            let productImage = document.createElement('img')
            productImage.src = recipe.image
            recipeCard.appendChild(productImage)
            console.log(recipe)
            let ingUl = document.createElement('ul')
            ingUl.innerHTML = '<b>ingredients:</b>'
            recipeCard.appendChild(ingUl)
            let insOL = document.createElement('ol')
            insOL.innerHTML = '<b>instructions:</b>'
            recipeCard.appendChild(insOL)
            for (const recipeElement of recipe.ingredients) {
                    let ingredients = document.createElement('li')
                    ingUl.appendChild(ingredients)
                    ingredients.innerText = `${recipeElement}`

                    for (const instructionElement of recipe.instructions) {
                        let instructions = document.createElement('li')
                        insOL.appendChild(instructions)
                        instructions.innerText = `${instructionElement}`
                     }
                }
        }
});
