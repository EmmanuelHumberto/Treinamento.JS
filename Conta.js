import {Titular} from "./Titular.js";

export class Conta {
   static contaNumeroDeContas = 0;

   agencia = '0';

    /*Privado*/
    _titular;
    set titular(novoTitular){
        if(novoTitular instanceof Titular){
            this._titular = novoTitular;
        }
    }
    get titular(){
        return this._titular;
    }

    /*_#saldo
       atributo privado
    */
    _saldo = 0;
    get saldo(){
        return this._saldo;
    }

    /*Construtor*/
    constructor(agencia,titular) {
        this.agencia = agencia;
        this.titular = titular
        Conta.contaNumeroDeContas += 1;
    }

    /*Metodos*/
    sacar(valorAsacar) {
        if (this._saldo < valorAsacar) {
            console.log("Sacar não é possível. Faça um deposito primeiro.");
            return;
        }
        this._saldo -= valorAsacar;
        console.log("Saque realizado. \nR$ "+ valorAsacar)
        return valorAsacar;
    }
    depositar(valorAdepositar) {
        if (valorAdepositar <= 0) {
            console.log("Operação não pode ser realizada. ");
            return;
        }
        this._saldo += valorAdepositar;
        console.log("Deposito realizado. \nR$ "+ valorAdepositar);
        return valorAdepositar;
    }
    transferir(valorAtransferir, conta) {
        if (valorAtransferir > this._saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        const valorAsacar = this.sacar(valorAtransferir);
        conta.depositar(valorAsacar);
        console.log("Transferencia realizada.\n" + valorAtransferir);
        return valorAtransferir;
    }
}
