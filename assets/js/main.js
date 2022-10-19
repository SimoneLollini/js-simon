// Visualizzare in pagina 5 numeri casuali.
//parte un timer di 30 secondi. 
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const containerElementNumber = document.querySelector('.container.random_number')
const containerElementUserInput = document.querySelector('.container.user_input')
// Visualizzare in pagina 5 numeri casuali
function randomNumber(max) {
    return Math.ceil(Math.random() * max)
}

// console.log(randomNumber);
const numbersArray = []
for (let i = 0; i < 5; i++) {
    numbersArray.push(randomNumber(100))
    const number = numbersArray[i];
    const numberEl = document.createElement('div')
    containerElementNumber.append(numberEl)
    numberEl.append(number)
}
console.log(numbersArray);

// parte un timer di 30 secondi. 
let seconds = 30;
let userInputArray = [];
let userInput;
let score = 0;



const countDown = setInterval(function () {
    if (seconds == 0) {

        clearInterval(countDown)
        containerElementNumber.style.visibility = 'hidden'
        alert('Timer scaduto, riscrivi tutti i numeri (ogni numero ha un apposito spazio)')
        generateUserArray()
        // console.log(userInputArray.length == 5);
        if (userInputArray.length == 5) {
            containerElementNumber.style.visibility = 'visible'
            for (let i = 0; i < userInputArray.length; i++) {
                const number = userInputArray[i];
                const numberEl = document.createElement('div')
                containerElementUserInput.append(numberEl)
                numberEl.append(number)
                if (numbersArray.includes(number)) {
                    score++
                }
            }
            console.log("Numeri ricordati: " + score);
        }
    } else {
        seconds--
    }
    console.log(seconds);
}, 1000)


console.log(userInputArray);

function generateUserArray() {
    for (let i = 0; i < 5; i++) {
        promptInput = Number(prompt("Inserisci numero"))
        userInputArray.push(promptInput)
        // console.log(userInputArray[i]);
        // const number = userInputArray[i]
    }
}


// usando .include() verifico se numbersArray include un elemento di userInputArray
// dopo aver chiesto i numeri all'utente controllo l'array

