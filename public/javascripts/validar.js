function validarDescricao(){
    const descricao = formulario.descricao.value;
    if(validator.isEmpty(descricao)){
        alert("Campo descricao vazio!")
        return false
    }
      
}