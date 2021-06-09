export class SistemaAutenticacao {



/*Para ser autenticavel basta ter o metodo autenticar senha*/
static login(autenticavel, senha){
   /*Verifica se o metodo que esta tentando autenticar é autenticavel*/
   if(SistemaAutenticacao.ehautenticavel(autenticavel)){
      return autenticavel.autenticar(senha);
   }
   return false
}
static ehautenticavel(autenticavel){
    return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function

}

}