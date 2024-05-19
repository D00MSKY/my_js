
// описати колоду карт (від 6 до туза без джокерів)

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
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

console.log(cards);

// - знайти піковий туз

console.log(cards.find(card => card.value === 'spades' && card.cardSuit === 'ace'));

// - всі шістки

console.log(cards.filter(card => card.cardSuit === '6'));

// - всі червоні карти

console.log(cards.filter(function (card){
   return card.color === 'red'
}));

// - всі буби

let diamonds = (cards.filter(card => card.value === 'diamonds'));

console.log(diamonds);

// - всі трефи від 9 та більше

let filteredItems = cards.filter(card => card.value === 'clubs');
    filteredItems.splice(0, 3);
console.log(filteredItems);