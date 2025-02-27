// jsnack2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga

let firstWord;
let secondWord;
firstWord = prompt('inserisci la prima parola')
secondWord = prompt('inserisci la seconda parola')

if(firstWord.length>secondWord.length){
    console.log(firstWord)
} else{
    console.log(secondWord)
}