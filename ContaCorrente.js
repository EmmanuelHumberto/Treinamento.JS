import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDecontasCorrentes = 0;

    constructor(agencia, titular, saldo) {
        super(agencia, titular, saldo);
        ContaCorrente.numeroDecontasCorrentes += 1;
    }

    sacar(valorAsacar) {
        const tx = 1.05;
        return this._sacar(valorAsacar, tx);

    }
}