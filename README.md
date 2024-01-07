# Documentazione del Gioco della Memoria

Il seguente documento fornisce una panoramica del codice del Gioco della Memoria implementato in JavaScript.

## Funzioni Principali

### `startGame()`

La funzione `startGame()` viene chiamata quando l'utente avvia il gioco. Esegue le seguenti operazioni:

- Ottiene il valore della difficoltà selezionata dall'utente.
- Rimuove il form di selezione della difficoltà.
- Crea le carte del gioco utilizzando la funzione `createCards()`.
- Crea la tabella di gioco utilizzando la funzione `createTable()`.
- Imposta il margine superiore e l'altezza della tabella.
- Avvia un cronometro per tenere traccia del tempo di gioco.

### `createCards(tabelsize)`

La funzione `createCards(tabelsize)` crea le carte del gioco. Prende in input il numero di carte da creare e esegue le seguenti operazioni:

- Genera casualmente numeri da 1 a `tabelsize/2` e li assegna alle carte.
- Assicura che ogni numero venga assegnato a un massimo di 2 carte.

### `createTable(tabelsize)`

La funzione `createTable(tabelsize)` crea la tabella di gioco. Prende in input il numero di righe della tabella e esegue le seguenti operazioni:

- Inizializza una variabile per memorizzare il codice HTML generato.
- Genera il codice HTML per le righe e le colonne della tabella, assegnando alle celle le immagini delle carte e una funzione per girarle quando vengono cliccate.
- Imposta il codice HTML generato come contenuto della tabella.

### `flipCard(card)`

La funzione `flipCard(card)` viene chiamata quando l'utente gira una carta. Prende in input il numero della carta e esegue le seguenti operazioni:

- Controlla se la carta è già stata girata o se è già stata trovata corrispondenza.
- Se la carta può essere girata, mostra l'immagine corrispondente e disabilita il click sulla carta.
- Chiama la funzione `checkCards()` per verificare se è stata trovata una corrispondenza.

### `checkCards(card)`

La funzione `checkCards(card)` viene chiamata quando vengono girate due carte. Prende in input il numero della seconda carta e esegue le seguenti operazioni:

- Controlla se le due carte corrispondono.
- Se le carte corrispondono, le aggiunge all'array `cartegiuste` e verifica se tutte le carte sono state trovate.
- Se tutte le carte sono state trovate, ferma il cronometro e calcola il punteggio finale.
- Se le carte non corrispondono, mostra le carte per un breve periodo di tempo e poi le gira di nuovo.

### `elimina(elemento)`

La funzione `elimina(elemento)` viene utilizzata per rimuovere un elemento dal DOM. Prende in input l'ID dell'elemento da rimuovere e lo elimina.

### `startTimer()` e `stopTimer()`

Le funzioni `startTimer()` e `stopTimer()` vengono utilizzate per avviare e fermare il cronometro del gioco.

## Variabili Globali

- `cards`: Un array che contiene i numeri delle carte del gioco.
- `cartegiuste`: Un array che contiene i numeri delle carte che sono state trovate.
- `segnale`: Una variabile booleana che indica se è possibile girare le carte.
- `mossesbagliate`: Il numero di mosse errate effettuate dall'utente.
- `mosse`: Il numero totale di mosse effettuate dall'utente.
- `firstCard`: Il numero della prima carta girata.
- `cardsFound`: Il numero di coppie di carte trovate.
- `timer`: Il tempo trascorso durante il gioco.
- `timerInterval`: L'intervallo di tempo per il cronometro.

## Descrizione del Gioco

### a. Come funziona il sito?
   - Il sito è un gioco di memoria che utilizza HTML, CSS e JavaScript per creare una tabella di carte. Quando si avvia il gioco, vengono generate coppie di carte casuali, e l'obiettivo è trovare tutte le corrispondenze abbinando le carte.

### b. Che funzionalità contiene?
   - Il sito offre le seguenti funzionalità:
      - Scelta della difficoltà: L'utente può selezionare la difficoltà del gioco tramite un menu a tendina nel form iniziale.
      - Avvio del gioco: Dopo aver selezionato la difficoltà, il gioco inizia nascondendo le carte e avviando un cronometro.
      - Selezione delle carte: Cliccando su una cella della tabella, l'utente può scoprire la carta corrispondente.
      - Verifica delle carte: Se le carte selezionate corrispondono, rimangono scoperte; altrimenti, vengono nuovamente coperte dopo un breve periodo.
      - Fine del gioco: Il gioco termina quando tutte le coppie sono state trovate, visualizzando il tempo impiegato, le mosse effettuate e il punteggio.

### c. FACOLTATIVO: Perché dovrei scegliere questo sito per il memory invece che un altro?
   - Il sito offre un'esperienza di gioco di memoria interattiva con diverse opzioni di difficoltà. Inoltre, include un sistema di punteggio basato sul tempo e sul numero di mosse, rendendo il gioco più coinvolgente. La combinazione di design semplice e funzionalità lo rende una scelta divertente per gli amanti del memory game.

