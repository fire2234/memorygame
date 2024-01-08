cards = [];
cartegiuste=[]; 
let segnale = false; // variabile che serve per non far girare le carte quando sono già girate
let flipSound = new Audio('assets/sounds/flip.mp3'); // suono che si sente quando si gira una carta

function startGame() {  // funzione che fa partire il gioco
    var difficultySelect = document.getElementById("tabelsize"); 
    elimina("form");
    createCards(difficultySelect.value); // creo le carte
    createTable(difficultySelect.value/4);
    let tabella = document.getElementById("tabella"); // prendo la tabella
    tabella.style.marginTop = "1%"; // setto il margine superiore della tabella
    tabella.style.height = "900px"; // setto l'altezza della tabella
}

function createCards(tabelsize) { // creo le carte
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

function createTable(tabelsize) { // creo la tabella
    const tabella = document.getElementById("tabella"); // prendo la tabella
    tabella.innerHTML = "";
    let contatore = 0;
    let codicedaaggiungere = "";
    for (let i = 0; i < tabelsize; i++) { 
        codicedaaggiungere += "<tr>"; 
        for (let j = 0; j < 4; j++) {  
            contatore++; 
            codicedaaggiungere += "<td onclick='flipCard("+contatore+")'><img src='assets/images/retro.png' width=20%  id='imagine" + contatore + "'></td>"; // aggiungo il tag <td> e l'immagine con l'id
            
        }
        codicedaaggiungere += "</tr>"; 
    }
    tabella.innerHTML = codicedaaggiungere;  // aggiungo il codice html alla tabella
    startTimer(); // faccio partire il cronometro

}
let mossesbagliate=0;
let mosse=0;
function flipCard(card) { // funzione che gira la carta
    if(firstCard == card || cartegiuste.includes(card)){ // controllo che la carta non sia già girata
        alert("Carta già girata");
        return;
    }
    if (segnale) { // controllo che le carte non si stiano già girando
        alert("Aspetta che le carte si girino");
        return;
    }
    mosse++;
    let image = document.getElementById("imagine" + card); // prendo l'immagine
    flipSound.play(); // faccio partire il suono


    image.src = "assets/images/imagine"+ cards[card-1] + ".svg"; // cambio l'immagine
    checkCards(card); // controllo se le carte sono uguali
}
let firstCard=0; // variabile che contiene la prima carta girata della coppia
let cardsFound=0; 
function checkCards(card) { // funzione che controlla se le carte sono uguali
    if (firstCard == 0) {
        firstCard = card; 
    } else { 
        if (cards[firstCard-1] == cards[card-1]) { // controllo se le carte sono uguali
            cardsFound++;
            cartegiuste.push(card); // aggiungo la carta all'array delle carte giuste
            cartegiuste.push(firstCard); 
            firstCard = 0; // resetto la prima carta
            if (cardsFound == cards.length/2) {  // controllo se l'utente ha vinto 
                setTimeout(function() {  
                    stopTimer(); // fermo il cronometro
                    let punteggio = 100-(mossesbagliate*10) + (50-(timer));
                    if(punteggio<0){
                        punteggio=0; 
                    }
                    if(punteggio>100){
                        punteggio=100;
                    }
                    alert("Hai vinto in soli " + timer + " secondi! e con " + mosse + " mosse! il tuo punteggio e " + punteggio + " punti su 100 possibili. Premi ok per ricominciare il gioco") 
                    window.location.reload(); // ricarico la pagina
                }
                , 400) 
            }
        } else { // se le carte non sono uguali allora le giro di nuovo dopo 400 millisecondi e aumento il numero di mosse sbagliate di 1 
            segnale = true; 
            mossesbagliate++; 
            setTimeout(function() {
                let image1 = document.getElementById("imagine" + firstCard); 
                let image2 = document.getElementById("imagine" + card); 
                image1.src = "assets/images/retro.png"; 
                image2.src = "assets/images/retro.png"; 
                firstCard = 0;
                segnale = false; 
            }, 400)
        }
    }
}
function elimina(elemento) { // funzione che elimina un elemento

    const element = document.getElementById(elemento);
    element.remove(elemento)
}

let timer = 0;
let timerInterval;

function startTimer() { // funzione che fa partire il cronometro
  timerInterval = setInterval(() => {
    timer++;
  }, 1000);
}

function stopTimer() { // funzione che ferma il cronometro
  clearInterval(timerInterval);
}


