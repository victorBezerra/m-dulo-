const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/index.js');

app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './views');
app.use('/', router);


app.listen(3000, ()=>{
  console.log("Funcionando");
});