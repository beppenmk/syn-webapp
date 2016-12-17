# syn-webapp
Fork from  [http://fountainjs.io](http://fountainjs.io)

Questo boilerplate racchiude 2 diversi esempi per collegarsi a servizi esterni:
* chiamate rest ad API generiche (per la sezione post)
* utilizzo di firebase (per il login e la registrazione utente)


##Installazione
* npm install
* bower install

Una volta eseguiti questi 2 comandi, eseguendo `gulp serve` si dovrebbe poter accedere al progetto all'url `localhost:3000`
Successivamente in questo file verranno elencati gli altri task di gulp.

###NOTE
Per utilizzare [Firebase](https://firebase.google.com/) in angular 1.x si utilizza la libreria [angularfire](https://github.com/firebase/angularfire).
Leggere la [documentazione per la versione 2.xx](https://github.com/firebase/angularfire/blob/master/docs/migration/1XX-to-2XX.md)
 
La configurazione deve essere inserita direttamente in index.html ( o un file esterno) ma è fondamentale che vada aggiunta dopo il file js compilato da gulp.
```
<script>
  // Initialize Firebase
  var config = {
    apiKey: "xxxxxxxx",
    authDomain: "xxx.firebaseapp.com",
    databaseURL: "https://xxx.firebaseio.com",
    storageBucket: "xxx.appspot.com",
    messagingSenderId: "xxx"
  };
  firebase.initializeApp(config);
</script>
```

  
 
## struttura
TODO
* home -> pubblica
* post -> privata
  * ricevo elenco post da https://jsonplaceholder.typicode.com
* login/registrati
   * utilizzo firebase 
   
## automatismi gulp
info todo


###TODO
* blocco login 
* aggiungere i test
* validare tute le funzionalità dei task (rimuovendo le inutilizate)
* passare a ts al posto di js
