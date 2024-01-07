cards = [];
cartegiuste=[];
let segnale = false;
let flipSound = new Audio('../assets/sounds/flip.mp3');

function startGame() {
    var difficultySelect = document.getElementById("tabelsize");
    elimina("form");
    createCards(difficultySelect.value); // creo le carte
    createTable(difficultySelect.value/4); // faccio diviso 4 perchè ho 4 colonne e non voglio che il numero di righe sia troppo grande
    let tabella = document.getElementById("tabella"); // prendo la tabella
    tabella.style.marginTop = "1%"; // setto il margine superiore della tabella
    tabella.style.height = "900px"; // setto l'altezza della tabella
    // faccio partire un cronometro che parte da 0 e va avanti fino a che non si vince
}


function createCards(tabelsize) {
    while (cards.length < tabelsize) {
        let temp=0;
        num = Math.floor(Math.random() * tabelsize/2)+1;

        for (let i = 0; i < cards.length; i++) {
            if (cards[i] == num) {
                temp++;
            }
        }

        if (temp < 2) {
            cards.push(num);
        }
    } 
}

function createTable(tabelsize) {
    const tabella = document.getElementById("tabella");
    tabella.innerHTML = "";
    let contatore = 0;
    let codicedaaggiungere = ""; // Initialize the variable to store the HTML code
    for (let i = 0; i < tabelsize; i++) {
        codicedaaggiungere += "<tr>"; // Add opening <tr> tag
        for (let j = 0; j < 4; j++) { // Change the condition to j < 3
             // Add the card value to the table cell and image start with the same name "imagine" and the card value for example "imagine1" and a function to flip the card when is presed the cell
            contatore++;
            codicedaaggiungere += "<td onclick='flipCard("+contatore+")'><img src='../assets/images/retro.png' width=20%  id='imagine" + contatore + "'></td>";
            
        }
        codicedaaggiungere += "</tr>"; // Add closing </tr> tag
    }
    tabella.innerHTML = codicedaaggiungere; // Set the generated HTML code to the table element
    startTimer();

}
let mossesbagliate=0;
let mosse=0;
function flipCard(card) {
    if(firstCard == card || cartegiuste.includes(card)){
        alert("Carta già girata");
        return;
    }
    if (segnale) {
        alert("Aspetta che le carte si girino");
        return;
    }
    mosse++;
    let image = document.getElementById("imagine" + card);
    flipSound.play();


    image.src = "../assets/images/imagine"+ cards[card-1] + ".svg";
    image.onclick = "";
    checkCards(card);
}
let firstCard=0;
let cardsFound=0;
function checkCards(card) {
    if (firstCard == 0) {
        firstCard = card;
    } else {
        if (cards[firstCard-1] == cards[card-1]) {
            cardsFound++;
            cartegiuste.push(card);
            cartegiuste.push(firstCard);
            firstCard = 0;
            if (cardsFound == cards.length/2) {
                setTimeout(function() {
                    stopTimer(); // Stop the timer when the user wins
                    let punteggio = 100-(mossesbagliate*10) + (50-(timer));
                    if(punteggio<0){
                        punteggio=0;
                    }
                    if(punteggio>100){
                        punteggio=100;
                    }
                    alert("Hai vinto in soli " + timer + " secondi! e con " + mosse + " mosse! il tuo punteggio e " + punteggio + " punti su 100 possibili. anche se non hai preso 100 punti pui sempre ritentare! =) ") 
                    window.location.reload();
                }
                , 400)
            }
        } else {
            segnale = true;
            mossesbagliate++;
            setTimeout(function() {
                let image1 = document.getElementById("imagine" + firstCard);
                let image2 = document.getElementById("imagine" + card);
                image1.src = "../assets/images/retro.png";
                image2.src = "../assets/images/retro.png";
                firstCard = 0;
                segnale = false;
            }, 400)
        }
    }
}

function elimina(elemento) {

    const element = document.getElementById(elemento);
    element.remove(elemento)
}

let timer = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    timer++;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}


