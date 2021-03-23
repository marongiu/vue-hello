// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// inizializzo vue
var app = new Vue(
  {
    // lo posiziono nell'html
    el: '#root',
    data: {
      consegna: "Stampare a schermo un messaggio all’interno di un h1",
      esercizioBase: "Hello Vue.js!"
      // Aggiungere alla pagina un’immagine, presa anch’essa da un data.
    }
  }
);
