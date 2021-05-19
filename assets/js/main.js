/* Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti */


//Incrementiamo il prezzo del panino quando un ingrediente viene selezionato
// Definisci il prezzo base per il panino
// Definisci i codici sconto e calcola il prezzo finale
// Ascoltiamo il click sul pulsante generate

// Creare una lista di ingredienti e assegnare il prezzo a ciascuno di essi

function renderInputs(list, el){
    counter = 0;
    while (counter < list.length){
        el.insertAdjacentHTML('beforeend', 
        `
        <div class="form_group">
            <img src="./assets/img/${list[counter][0] + '.svg'}">
            <label for="${list[counter][0]}">${list[counter][0]}</label>
            <input type="checkbox" id="${list[counter][0]}" name="${list[counter][0]}" data-price="${list[counter][1]}">
        </div>
        `);
        counter++
    }
}

//nome, prezzo
var ingredients = [
    ['cheese', '1'],
    ['fried-egg', '2'],
    ['mustard', '0.5'],
    ['tomato', '0.25'],
    ['lettuce', '1'],
    ['ketchup', '0.2'],
]

var ingElement = document.querySelector('.ingredients')
renderInputs(ingredients, ingElement);
console.log(ingElement);