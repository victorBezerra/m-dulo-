const validator = require('validator');

const teste = "1q";

function validar(teste){
    if(!validator.isInt(teste))
        console.log("somente numero");
    else if(validator.isEmpty(teste))
        console.log("Vazio");
    else
        console.log("Errado");
        
        
}

validar(teste);