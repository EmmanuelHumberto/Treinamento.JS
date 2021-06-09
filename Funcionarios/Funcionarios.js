export  class Funcionarios{

    constructor(nome, cpf, salario, senha) {
      this._nome  = nome;
      this._cpf = cpf;
      this._salario = salario;
      this._bonificacao = 0;
      this._senha = senha;

    }

    autenticar(senha){
        return true;
 }

    cadastrarSenha(senha){
        this._senha = senha;
    }

}