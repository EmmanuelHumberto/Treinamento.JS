
export class Titular {
    /*-Construtor Titular--------------------------------------------------------*/
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf
        this._senha = senha;
    }

    /*-GET Cpf--------------------------------------------------------*/
    get cpf() {
        return this._cpf
    }

    autenticar() {
        return true;

    }
}


