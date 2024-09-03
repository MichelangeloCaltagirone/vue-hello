console.log('ciao');
/**
 * Ciao ragazze e ciao ragazzi,
Esercizio di oggi: Vue Hello
nome repo: vue-hello
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const {createApp} = Vue;

createApp({
    data() {
        return {
            text: 'ciao!',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEMChx-e1bEjYNYnxN3_Bf6otohnPimjWTA&s'
        }
    }
}).mount('#vueTry');

