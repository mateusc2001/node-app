var express = require('express');
var app = express();

const PORT = 8080;
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/perifericos/v1/tef/pinpad/verifica-presenca', (req, res) => {
    res.status(401).send();
});

app.listen(PORT, () => console.log('Rodando na porta 3000'));