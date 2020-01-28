//Importation du module http
import http from 'http'

const rickAndMorty = require('rick-and-morty')
import rickAndMorty from 'rick-and-morty'

//Création du serveur
http
  .createServer(function (req, res) {
    const monTableau = [1, 2, 3, 4, 5]

    const monTableauFoisDeux = monTableau.map(x => {
      this.toto, x * 2
    })

    monTableau.map((x, i) => console.log(x, i))
    const gifURL = rickAndMorty.random()
    //Initialisation de la réponse
    //200 correspond au code HTTP: ok
    //Nous configurons par la même occasion le type de réponse
    res.writeHead(200, { 'Content-Type': 'text/html' })
    //Écriture du type de réponse
    res.write('<h1>Coucou IMIE!</h1>')
    res.write(`<img src="${gifURL}" alt="toto"/>`)
    //nous fermons la reqête qui sera envoyée par la suite
    res.end()
  })
  .listen(8080)
