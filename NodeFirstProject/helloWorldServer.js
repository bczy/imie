//Importation du module http
var http = require('http')

//Création du serveur
http
  .createServer(function (req, res) {
    //Initialisation de la réponse
    //200 correspond au code HTTP: ok
    //Nous configurons par la même occasion le type de réponse
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    //Écriture du type de réponse
    res.write('Coucou IMIE!')
    //nous fermons la reqête qui sera envoyée par la suite
    res.end()
  })
  .listen(8080)
