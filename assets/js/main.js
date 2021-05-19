/* Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti */

// Creare una lista di ingredienti e assegnare il prezzo a ciascuno di essi
var ingredients = [
    ['cheese', '1'],
    ['egg', '2'],
    ['mustard', '0.5'],
    ['tomato', '0.25'],
    ['lettuce', '1'],
    ['ketchup', '0.2'],
]
//Incrementiamo il prezzo del panino quando un ingrediente viene selezionato
// Definisci il prezzo base per il panino
// Definisci i codici sconto e calcola il prezzo finale
// Ascoltiamo il click sul pulsante generate

function renderInputs(list, el){
    counter = 0;
    while (counter < list.length){
        el.insertAdjacentHTML('beforeeend', 
        `
        <div class="form-group">
        </div>
        `)
    }
}

//nome, prezzo