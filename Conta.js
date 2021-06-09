import {Titular} from "./Titular.js";

/*-classe Abstrata Conta---------------------------------------------------=---------*/
export class Conta {

/*-Atributo da classe Conta------------------------------------------------*/
   static contaNumeroDeContas = 0;

    /*-Construtor Conta--------------------------------------------------------*/
    constructor(agencia,titular, saldo)
    {
        if(this.constructor == Conta){
            throw new Error("Classe Conta não pode ser instânciada diretamente. ");
            return 0;
        }
        this._agencia = agencia;
        this._titular = titular
        this._saldo = saldo;
        Conta.contaNumeroDeContas += 1;
    }
    /*-SET GET Titular--------------------------------------------------------*/
    set titular(novoTitular){
        if(novoTitular instanceof Titular){
            this._titular = novoTitular;
        }
    }
    get titular(){
        return this._titular;
    }

    /*-GET Saldo--------------------------------------------------------------*/
    get saldo(){
        return this._saldo;
    }

/*-Metodos Conta-----------------------------------------------------------*/

    /*Metodo abstrato, Sera sobrescrito pelo metodo especializado das classes filhas*/
    sacar(valorAsacar){
        throw new Error("Chamada invalida para execução do metodo sacar na classe pai." +
            " Metodo abstrato.");
    }

    /*Metodo Privado*/
    _sacar(valorAsacar, tx) {
        if (this._saldo < valorAsacar || valorAsacar < 0) {localStorage
            throw new Error("Sacar não é possível. Faça um deposito primeiro.");
            return 0;
        }
        this._saldo -= valorAsacar + tx;
        console.log("Saque realizado. \nR$ "+ valorAsacar)
        return valorAsacar;
    }
    depositar(valorAdepositar) {
        if (valorAdepositar <= 0) {
            throw new Error("Operação não pode ser realizada. ");
            return;
        }
        this._saldo += valorAdepositar;
        console.log("Deposito realizado. \nR$ "+ valorAdepositar);
        return valorAdepositar;
    }
    transferir(valorAtransferir, conta) {
        if (valorAtransferir > this._saldo) {
            throw new Error("Saldo insuficiente.");
            return;
        }
        const valorAsacar = this.sacar(valorAtransferir);
        conta.depositar(valorAsacar);
        console.log("Transferencia realizada.\n" + valorAtransferir);
        return valorAtransferir;
    }
/*---------------------------------------------------------*/
}
