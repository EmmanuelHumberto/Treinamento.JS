import {Conta} from "./Conta.js";

export class ContaPoupanca extends Conta{
    static numeroDecontasPoupanca = 0;
    constructor(agencia, titular, saldo) {
        super(agencia, titular, saldo);
        ContaPoupanca.numeroDecontasPoupanca += 1;
    }

    sacar(valorAsacar) {
        const tx = 1.03;
        return this._sacar(valorAsacar, tx);

    }
}
