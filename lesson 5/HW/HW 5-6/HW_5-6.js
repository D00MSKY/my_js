
<!--ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!-->
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


let listCreator = (text) => document.write(`
     <ul>
         <li>${text}</li>    
         <li>${text}</li>    
         <li>${text}</li>      
     </ul>   
     `);

listCreator('lorem ipsum dolor')