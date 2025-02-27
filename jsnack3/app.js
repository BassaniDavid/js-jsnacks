// jsnack3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti
let number;
for(let i = 1; i <= 10; i++){

 number = prompt('inserisci il ' + i + ' numero')
 number += number
 console.log(number)
}

