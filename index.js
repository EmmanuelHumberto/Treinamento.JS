import {Titular} from "./Titular.js"
import {Conta} from "./Conta.js"


/*-Titular cliente1---------------------*/
const cliente1 = new Titular('Dom Pedro','123.456.789-41');

/*-Conta1-------------------------------*/
const conta1 = new Conta(1002, cliente1);
console.log(conta1.titular);

/*-Metodos conta1-----------------------*/
conta1.depositar(10000);
conta1.sacar(6000);

/*-Saidas saldo conta1------------------*/
console.log(conta1._saldo);

/*-Titular cliente2---------------------*/
const cliente2 = new Titular('Frida Kahlo','1234.456.789-91');

/*-Conta2-------------------------------*/
const conta2 = new Conta(1002,cliente2);
console.log(conta2.titular);

/*-Metodos conta2------------------------*/
conta2.depositar(20000);
conta2.sacar(10000);
conta2.transferir(5000,conta1);
conta1.transferir(2550,conta2);

/*-Saidas-------------------------------*/
console.log("Saldo conta1 "+conta1.saldo);
console.log(cliente1.cpf);
console.log(Conta.contaNumeroDeContas);
/*-------------------------------*/



