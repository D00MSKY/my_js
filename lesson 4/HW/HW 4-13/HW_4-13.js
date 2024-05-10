
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyValues = [
    {cur: 'USD', value: 40},
    {cur: 'EUR', value: 42},
    {cur: 'GBP', value: 50}
];


function exchangeFn(sumUAH, currencyValues, exchangeCurrency){

    switch (exchangeCurrency){
        case 'USD':
            res = sumUAH / currencyValues[0].value;
            break;

        case 'EUR':
            res = sumUAH / currencyValues[1].value;
            break;

        case 'GBP':
            res = sumUAH / currencyValues[2].value;
            break;
    }
    console.log(res);
}

exchangeFn(1000, currencyValues, 'USD');