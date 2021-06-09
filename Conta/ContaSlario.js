import {Conta} from "./Conta.js";

export class ContaSalario extends Conta {

    static numeroDecontasSalario = 0;

    constructor(agencia, titular, saldo) {
        super(agencia, titular, saldo);
        ContaCorrente.numeroDecontasSalario += 1;
    }

    sacar(valorAsacar) {
        const tx = 1.01;
        return this._sacar(valorAsacar, tx);

    }
}