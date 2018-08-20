const validator = require('validator');

const teste = "";

function validar(teste){
    if(validator.isEmpty(teste))
        console.log("vazio")
}

validar(teste);