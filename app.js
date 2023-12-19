//esta sendo improtado o express e Express-handlebars
var express = require('express');
var exphbs = require('express-handlebars');

//App
var app = express();

//Template
app.engine('handlebars', exphbs.engine({defaultLayout : 'principal'}));
app.set ('view engine', 'handlebars');

//Rotas Padrão
app.get('/', function (req, res){

  let pessoas = [
    {"nome":"Gleysson", "idade":30},
    {"nome":"Dayara", "idade":30},
    {"nome":"Ryan", "idade":8},
    {"nome":"Jeferson", "idade":28},
    {"nome":"Luzeni", "idade":55},
    {"nome":"Enzo", "idade":5},
  ]
  res.render('inicio', {dados:pessoas});
});

app.get('/sobre', function (req, res){
  res.render('sobre');
});

//Servidor
app.listen(8080);