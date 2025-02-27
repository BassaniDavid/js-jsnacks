// jsnack4
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

firstArray = [];
for(let i = 1; i<=6; i++) {
    let number;
    number = prompt('inserisci un numero')
    if(number % 2 !== 0){
    firstArray.push(number)
    }
}
console.log(firstArray)