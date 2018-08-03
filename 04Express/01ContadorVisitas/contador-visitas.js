const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

let port = 3000;

function index(req, res) {
  req.session.visitas || (req.session.visitas = 0);
  let n = req.session.visitas++;
  res.send(`<h1>Hola mundo desde Express... Las visitas hasta ahora son: ${n}</h1>`);
}

app
  .use(cookieParser())
  .use(cookieSession({secret: "secreto"}))
  .get('/', index)
  .listen(port);

console.log(`Running Express app at http://localhost:${port}`)