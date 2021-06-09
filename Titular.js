export class Titular
{
    /*-Construtor Titular--------------------------------------------------------*/
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf
    }

    /*-GET Cpf--------------------------------------------------------*/
    get cpf()
    {
        return this._cpf
    }

}


