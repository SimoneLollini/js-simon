// Visualizzare in pagina 5 numeri casuali.
//parte un timer di 30 secondi. 
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const containerElement = document.querySelector('.container')
// Visualizzare in pagina 5 numeri casuali
function randomNumber(max) {
    return Math.ceil(Math.random() * max)
}

// console.log(randomNumber);
const numbersArray = []
for (let i = 0; i < 5; i++) {
    numbersArray.push(randomNumber(100))
    const number = numbersArray[i];
    const El = document.createElement('div')
    containerElement.append(El)
    El.append(number)
}
console.log(numbersArray);
