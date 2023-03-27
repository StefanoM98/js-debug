/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    // console.log(i);
}
// MODIFICATO IL MAGGIORE CON MINORE DI N

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven(5)); 
// AGGIUNTI ALTRI 2 == PER IDENTICITA' E RICHIAMATA LA FUNZIONE

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}
loopToFive()
// MODIFICATI LE VIRGOLE CON I PUNTO E VIRGOLE E RICHIAMATA LA FUNZIONE


// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    console.log(evenNumbers);
    return evenNumbers;  
}
displayEvenNumbers() ; // [2,4,6,8]