
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let cardSuit = ['spades', 'diamonds','hearts', 'clubs'];
let value = ['6', '7', '8', '9','10', 'ace','jack','queen','king'];



let cards = cardSuit.reduce((acc, card) => {
    value.forEach(item => {
        let color = (card === 'diamonds' || card === 'hearts') ? 'red' : 'black';
        acc.push({
            cardSuit: item,
            value: card,
            color: color
        })
    })
    return acc
}, []);

// console.log(cards)

let reduce = cards.reduce((acc, card) =>{
    if (card.value === 'spades'){
        acc.spades.push(card);
    }
    else if (card.value === 'diamonds'){
        acc.diamonds.push(card);
    }
    else if (card.value === 'hearts'){
        acc.hearts.push(card);
    }
    else if (card.value === 'clubs'){
        acc.clubs.push(card);
    }
    return acc
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(reduce)