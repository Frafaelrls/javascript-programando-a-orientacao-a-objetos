// Será necessário fornecer o formado do arquivo (.js)
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// Instanciando um objeto da classe
const cliente1 = new Cliente('Ricardo', 11511512305);
const cliente2 = new Cliente('Alice', 88811512305);



const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;


contaCorrenteRicardo.transferir(50, conta2);
console.log(conta2.saldo);