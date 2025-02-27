// jsnack3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti
let totNumber = 0;

for (let i = 1; i <= 10; i++) {
    let number;
    number = parseFloat(prompt('inserisci il ' + i + 'numero'));
    totNumber += number;
};
console.log(totNumber);

