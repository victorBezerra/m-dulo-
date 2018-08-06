const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/index.js');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', router);


app.listen(3000, ()=>{
  console.log("Funcionando");
});
