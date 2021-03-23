// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// inizializzo vue
var app = new Vue(
  {
    // lo posiziono nell'html
    el: '#root',
    data: {
      esercizioBase: "Hello Vue.js!",
      // Aggiungere alla pagina un’immagine, presa anch’essa da un data.
      // immagine con url
      immagineUrl: "https://velug.it/images/banners/JQUERYLOGO.gif",
      // immagine importata
      immagine: "./assets/img/vue.png",

      ///////////////BONUS//////////////////////////////
      cambia: "Cambia testo al titolo!",
      clicca: "Clicca per cambiare colore al titolo! Riclicca per farlo tornare normale",
      coloretitolo: "black"
    },
    methods: {
      colore: function () {
        if (this.coloretitolo == 'black') {
          this.coloretitolo = 'green';
        } else {
          this.coloretitolo = 'black';
        }
      }
    }
  }
);
