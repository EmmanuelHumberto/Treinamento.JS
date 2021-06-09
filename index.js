import {Titular} from "./Titular.js"
import {Conta} from "./Conta/Conta.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";


const diretor1 = new Diretor('Ambrosio', '123.456.741.52', 50000);
diretor1.cadastrarSenha("1112");
console.log(diretor1);
const diretorlogado = SistemaAutenticacao.login(diretor1, "1112");


const gerente1 = new Gerente( 'Fibrinonogenio', '123.587.741.52', 30000);
gerente1.cadastrarSenha("12");
console.log(gerente1);
const gerentelogado = SistemaAutenticacao.login(gerente1, "12");

const cliente1 = new Titular('estrabico','852.147.965.12',1234);
gerente1.cadastrarSenha("1234");
console.log(cliente1);
const clientelogado = SistemaAutenticacao.login(cliente1, "1234");


console.log(diretorlogado, gerentelogado, clientelogado);