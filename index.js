import {Titular} from "./Titular.js"
import {Conta} from "./Conta.js"
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";


/*-Criando Titular correntista1-------------------------------------------------*/
const correntista1 = new Titular('Dom Pedro','123.456.789-41');

/*-Abertura de ContaCorrente1------------------------------------------------------------*/
const ContaCorrente1 = new ContaCorrente(1002, correntista1,0);
console.log(ContaCorrente1);

/*-Metodos ContaCorrente1--------------------------------------------*/
ContaCorrente1.depositar(10000);
ContaCorrente1.sacar(6000);

/*-Saidas saldo ContaCorrente1---------------------------------------*/
console.log(ContaCorrente1.saldo);

/*-Criando Titular correntista2--------------------------------------------------*/
const correntista2 = new Titular('Frida Kahlo','1234.456.789-91');

/*-Abertura de ContaPoupanca1-------------------------------------------------------------*/
const ContaPoupanca1 = new ContaPoupanca(1002,correntista2,0);
console.log(ContaPoupanca1);


/*-Metodos ContaPoupanca1-----------------------------------------*/
ContaPoupanca1.depositar(20000);
ContaPoupanca1.sacar(10000);
ContaPoupanca1.transferir(5000,ContaCorrente1);
ContaCorrente1.transferir(2550,ContaPoupanca1);


/*-Saidas--------------------------------------------------*/
console.log("Saldo conta1 "+ContaCorrente1.saldo);
console.log("Saldo conta1 "+ContaPoupanca1.saldo);
console.log("Numero de contas: "+Conta.contaNumeroDeContas);
console.log("Numero de contas Correntes: "+ContaCorrente.numeroDecontasCorrentes)
/*---------------------------------------------------------*/



