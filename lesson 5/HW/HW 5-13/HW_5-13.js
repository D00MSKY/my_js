
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyValues = [
    {cur: 'USD', value: 40},
    {cur: 'EUR', value: 42},
    {cur: 'GBP', value: 50}
];


let exchangeFn = (sumUAH, currencyValues, exchangeCurrency) => {

    for (let i = 0; i < currencyValues.length; i++) {

        if (exchangeCurrency === currencyValues[i].cur){

            res = sumUAH / currencyValues[i].value

        }

    }
    console.log(res)
}
exchangeFn(1000, currencyValues, 'USD');