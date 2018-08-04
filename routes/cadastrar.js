const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.render('marca',{
    message: 'TESTE'
  });
});

router.post('/marca', (req,res)=>{
  res.render('listaMarca',req.body)
});

module.exports = router;
