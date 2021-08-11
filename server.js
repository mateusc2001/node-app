var express = require('express');
var app = express();

const PORT = 8080;
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log('Rodando na porta 3000'));